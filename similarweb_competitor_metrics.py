#!/usr/bin/env python3
import json
import sys
import time
from datetime import datetime
from pathlib import Path

from dateutil.relativedelta import relativedelta

sys.path.append('/opt/.manus/.sandbox-runtime')
from data_api import ApiClient

DOMAINS = [
    "editus-business.lu",
    "bighousemarketing.lu",
    "neoagency.lu",
    "hype.lu",
    "letzimpact.lu",
]

OUT = Path("/home/ubuntu/letzimpact/similarweb_competitor_metrics_raw.json")
SUMMARY = Path("/home/ubuntu/letzimpact/similarweb_competitor_metrics_summary.md")

client = ApiClient()
last_complete_month = datetime.now().replace(day=1) - relativedelta(months=1)
start_3m = (last_complete_month - relativedelta(months=2)).strftime("%Y-%m")
end_1m = last_complete_month.strftime("%Y-%m")
start_6m = (last_complete_month - relativedelta(months=5)).strftime("%Y-%m")


def call_api(name, path_params=None, query=None):
    try:
        return {"ok": True, "data": client.call_api(name, path_params=path_params or {}, query=query or {})}
    except Exception as exc:
        return {"ok": False, "error": repr(exc)}


def load_existing():
    if OUT.exists():
        try:
            return json.loads(OUT.read_text(encoding="utf-8"))
        except Exception:
            return {}
    return {}


def persist(data):
    OUT.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")


def extract_total_visits(obj):
    if not obj.get("ok"):
        return None
    data = obj.get("data")
    # SimilarWeb responses vary. Return JSON compact if no obvious field.
    if isinstance(data, dict):
        for key in ["visits", "total_visits", "data"]:
            if key in data:
                return data[key]
    return data


def main():
    results = load_existing()
    for domain in DOMAINS:
        if domain not in results:
            results[domain] = {}
        if "total_visits" not in results[domain]:
            results[domain]["total_visits"] = call_api(
                "SimilarWeb/get_visits_total",
                path_params={"domain": domain},
                query={
                    "country": "world",
                    "granularity": "monthly",
                    "main_domain_only": False,
                    "start_date": start_6m,
                    "end_date": end_1m,
                },
            )
            persist(results)
            time.sleep(1)
        if "global_rank" not in results[domain]:
            results[domain]["global_rank"] = call_api(
                "SimilarWeb/get_global_rank",
                path_params={"domain": domain},
                query={"main_domain_only": False, "start_date": start_6m, "end_date": end_1m},
            )
            persist(results)
            time.sleep(1)
        if "traffic_by_country" not in results[domain]:
            results[domain]["traffic_by_country"] = call_api(
                "SimilarWeb/get_total_traffic_by_country",
                path_params={"domain": domain},
                query={"main_domain_only": True, "limit": "5", "start_date": start_3m, "end_date": end_1m},
            )
            persist(results)
            time.sleep(1)
        if "organic_keywords" not in results[domain]:
            results[domain]["organic_keywords"] = call_api(
                "SimilarWeb/website_analysis_keywords",
                path_params={"domain": domain},
                query={
                    "domain": domain,
                    "country": "ww",
                    "web_source": "total",
                    "traffic_source": "organic",
                    "branded_type": "all",
                    "granularity": "monthly",
                    "limit": "20",
                    "offset": "0",
                    "start_date": start_3m,
                    "end_date": end_1m,
                },
            )
            persist(results)
            time.sleep(1)
    lines = [
        "# SimilarWeb Wettbewerber Metriken",
        "",
        f"Zeitraum: {start_3m} bis {end_1m} für 3-Monatsdaten; {start_6m} bis {end_1m} für 6-Monatsdaten.",
        "",
        "Hinweis: SimilarWeb Daten sind Schätzungen. Bei kleinen lokalen Domains können API-Antworten leer sein oder nur eingeschränkte Daten liefern.",
        "",
        "| Domain | Total Visits verfügbar | Global Rank verfügbar | Länder verfügbar | Organic Keywords verfügbar |",
        "|---|---|---|---|---|",
    ]
    for domain, d in results.items():
        lines.append(
            f"| {domain} | {'ja' if d.get('total_visits', {}).get('ok') else 'nein'} | {'ja' if d.get('global_rank', {}).get('ok') else 'nein'} | {'ja' if d.get('traffic_by_country', {}).get('ok') else 'nein'} | {'ja' if d.get('organic_keywords', {}).get('ok') else 'nein'} |"
        )
    lines.append("")
    lines.append("## Rohdaten Kurzansicht")
    for domain, d in results.items():
        lines.append(f"\n### {domain}\n")
        for key, value in d.items():
            status = "ok" if value.get("ok") else "error"
            lines.append(f"- {key}: {status}")
            if not value.get("ok"):
                lines.append(f"  - Fehler: `{value.get('error')}`")
            else:
                compact = json.dumps(value.get("data"), ensure_ascii=False)[:1000]
                lines.append(f"  - Auszug: `{compact}`")
    SUMMARY.write_text("\n".join(lines) + "\n", encoding="utf-8")

if __name__ == "__main__":
    main()
