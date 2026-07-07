#!/usr/bin/env python3
import json
from pathlib import Path

RAW_FILE = Path("/home/ubuntu/letzimpact/similarweb_competitor_metrics_raw.json")
OUT_FILE = Path("/home/ubuntu/letzimpact/similarweb_competitor_metrics_parsed.md")


def get_nested(data, keys, default=None):
    curr = data
    for k in keys:
        if isinstance(curr, dict) and k in curr:
            curr = curr[k]
        else:
            return default
    return curr


def parse_visits(total_visits_obj):
    if not total_visits_obj or not total_visits_obj.get("ok"):
        return []
    data = total_visits_obj.get("data", {})
    visits_list = data.get("visits", [])
    if not visits_list and "visits" in data:
        visits_list = data["visits"]
    parsed = []
    for entry in visits_list:
        date = entry.get("date")
        val = entry.get("visits")
        if date and val is not None:
            parsed.append((date[:7], int(val)))
    return sorted(parsed)


def parse_rank(global_rank_obj):
    if not global_rank_obj or not global_rank_obj.get("ok"):
        return []
    data = global_rank_obj.get("data", {})
    rank_list = data.get("global_rank", [])
    parsed = []
    for entry in rank_list:
        date = entry.get("date")
        val = entry.get("global_rank")
        if date and val is not None:
            parsed.append((date[:7], int(val)))
    return sorted(parsed)


def parse_keywords(keywords_obj):
    if not keywords_obj or not keywords_obj.get("ok"):
        return []
    data = keywords_obj.get("data", {})
    kw_list = data.get("search_keywords", []) or data.get("keywords", [])
    if not kw_list and isinstance(data, dict):
        # check nested structure
        for k in ["search_keywords", "keywords", "data"]:
            if k in data and isinstance(data[k], list):
                kw_list = data[k]
                break
    parsed = []
    for entry in kw_list:
        kw = entry.get("keyword")
        share = entry.get("traffic_share", 0)
        pos = entry.get("position", "-")
        intent = entry.get("primary_intent", "N/A")
        if kw:
            parsed.append({"keyword": kw, "share": share, "position": pos, "intent": intent})
    return parsed


def main():
    if not RAW_FILE.exists():
        print("Raw file not found.")
        return

    raw = json.loads(RAW_FILE.read_text(encoding="utf-8"))
    lines = [
        "# Auswertung der SimilarWeb Traffic- und Keyword-Metriken",
        "",
        "Stand: Juni 2026",
        "",
        "Die folgenden Daten wurden über die SimilarWeb-Schnittstelle erhoben. Für kleinere, lokale Webseiten können manche Datenpunkte (wie Global Rank oder Traffic-Historie) nicht erfasst sein, da ihr monatliches Volumen unter den Schwellenwerten von SimilarWeb liegt. In diesen Fällen liefert die API ein leeres Ergebnis oder einen Fehler.",
        "",
        "## 1. Traffic-Entwicklung (Total Visits)",
        "Monatliche Gesamtaufrufe (Desktop + Mobile Web) über die letzten 6 verfügbaren Monate (Dezember 2025 bis Mai 2026):",
        "",
    ]

    # Create visits table
    domains = list(raw.keys())
    dates_set = set()
    visits_by_domain = {}

    for dom in domains:
        visits_by_domain[dom] = dict(parse_visits(raw[dom].get("total_visits", {})))
        dates_set.update(visits_by_domain[dom].keys())

    sorted_dates = sorted(list(dates_set))
    if sorted_dates:
        header = "| Domain | " + " | ".join(sorted_dates) + " |"
        sep = "|---| " + " | ".join(["---:"] * len(sorted_dates)) + " |"
        lines.append(header)
        lines.append(sep)
        for dom in domains:
            row_vals = []
            for d in sorted_dates:
                val = visits_by_domain[dom].get(d)
                row_vals.append(f"{val:,}" if val is not None else "Keine Daten")
            lines.append(f"| **{dom}** | " + " | ".join(row_vals) + " |")
    else:
        lines.append("Keine Traffic-Historien-Daten für diese Domains verfügbar.")

    lines.append("")
    lines.append("## 2. Globaler SimilarWeb Rank")
    lines.append("Je niedriger die Zahl, desto reichweitenstärker ist die Website global:")
    lines.append("")

    rank_by_domain = {}
    rank_dates = set()
    for dom in domains:
        rank_by_domain[dom] = dict(parse_rank(raw[dom].get("global_rank", {})))
        rank_dates.update(rank_by_domain[dom].keys())

    sorted_rank_dates = sorted(list(rank_dates))
    if sorted_rank_dates:
        header = "| Domain | " + " | ".join(sorted_rank_dates) + " |"
        sep = "|---| " + " | ".join(["---:"] * len(sorted_rank_dates)) + " |"
        lines.append(header)
        lines.append(sep)
        for dom in domains:
            row_vals = []
            for d in sorted_rank_dates:
                val = rank_by_domain[dom].get(d)
                row_vals.append(f"{val:,}" if val is not None else "Keine Daten")
            lines.append(f"| **{dom}** | " + " | ".join(row_vals) + " |")
    else:
        lines.append("Keine globalen Rank-Daten für diese Domains im SimilarWeb-Index.")

    lines.append("")
    lines.append("## 3. Organische Keywords (Top-Begriffe)")
    lines.append("Wichtigste Keywords, die organischen Traffic über Google auf die jeweilige Domain lenken (März bis Mai 2026):")
    lines.append("")

    for dom in domains:
        kws = parse_keywords(raw[dom].get("organic_keywords", {}))
        lines.append(f"### {dom}")
        if kws:
            lines.append("| Keyword | Traffic-Anteil | Position | Suchintention |")
            lines.append("|---|---:|---|---|")
            for kw in kws[:10]:  # Zeige Top 10
                share_pct = f"{kw['share']*100:.2f}%" if isinstance(kw['share'], float) else f"{kw['share']}%"
                lines.append(f"| {kw['keyword']} | {share_pct} | {kw['position']} | {kw['intent']} |")
        else:
            lines.append("*Keine organischen Keyword-Daten im SimilarWeb-Index für diese Domain erfasst (zu geringes Suchvolumen).*")
        lines.append("")

    OUT_FILE.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print("Parsed output written to:", OUT_FILE)


if __name__ == "__main__":
    main()
