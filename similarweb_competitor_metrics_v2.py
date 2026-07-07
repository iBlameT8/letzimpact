#!/usr/bin/env python3
import json
import sys
import time
from pathlib import Path

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

# According to the error messages, the supported dates must be:
# - For visits & rank: between 2025-06 and 2026-05
# - For keywords: between 2026-03 and 2026-05
start_6m = "2025-12"
end_1m = "2026-05"

start_3m = "2026-03"
end_3m = "2026-05"


def call_api(name, path_params=None, query=None):
    try:
        return {"ok": True, "data": client.call_api(name, path_params=path_params or {}, query=query or {})}
    except Exception as exc:
        return {"ok": False, "error": repr(exc)}


def main():
    # We clear previous errors
    results = {}
    for domain in DOMAINS:
        print(f"Querying {domain}...")
        results[domain] = {}
        
        # 1. Total Visits
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
        time.sleep(1)
        
        # 2. Global Rank
        results[domain]["global_rank"] = call_api(
            "SimilarWeb/get_global_rank",
            path_params={"domain": domain},
            query={"main_domain_only": False, "start_date": start_6m, "end_date": end_1m},
        )
        time.sleep(1)
        
        # 3. Keywords
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
                "end_date": end_3m,
            },
        )
        time.sleep(1)

    # Save raw json
    OUT.write_text(json.dumps(results, ensure_ascii=False, indent=2), encoding="utf-8")

    # Generate summary
    lines = [
        "# SimilarWeb Wettbewerber Metriken (Bereinigt)",
        "",
        f"Zeitraum: {start_3m} bis {end_3m} für Keywords; {start_6m} bis {end_1m} für Visits/Rank.",
        "",
        "| Domain | Total Visits Status | Global Rank Status | Keywords Status |",
        "|---|---|---|---|",
    ]
    for domain, d in results.items():
        v_status = "OK" if d["total_visits"].get("ok") else "Error"
        r_status = "OK" if d["global_rank"].get("ok") else "Error"
        k_status = "OK" if d["organic_keywords"].get("ok") else "Error"
        lines.append(f"| {domain} | {v_status} | {r_status} | {k_status} |")
    
    lines.append("")
    lines.append("## Detaildaten")
    for domain, d in results.items():
        lines.append(f"\n### {domain}\n")
        for key in ["total_visits", "global_rank", "organic_keywords"]:
            val = d[key]
            if val.get("ok"):
                lines.append(f"- **{key}**: `{json.dumps(val.get('data'), ensure_ascii=False)[:300]}...`")
            else:
                lines.append(f"- **{key}** (Fehler): `{val.get('error')}`")
                
    SUMMARY.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print("Done!")

if __name__ == "__main__":
    main()
