import json
import re
from collections import Counter, defaultdict
from urllib.parse import urlparse

import requests
from bs4 import BeautifulSoup

HEADERS = {
    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
    "Accept-Language": "fr-FR,fr;q=0.9,en;q=0.8,de;q=0.7",
}

PAGES = {
    "Editus Business": [
        "https://www.editus-business.lu/",
        "https://www.editus-business.lu/creation-de-site",
        "https://www.editus-business.lu/creation-de-site-e-commerce",
        "https://www.editus-business.lu/reseaux-sociaux",
        "https://www.editus-business.lu/creation-de-contenus",
        "https://www.editus-business.lu/publicite-digitale",
        "https://www.editus-business.lu/editus-insight",
        "https://www.editus-business.lu/neo",
        "https://www.editus-business.lu/visibilite-et-e-reputation",
    ],
    "Big House Marketing": [
        "https://bighousemarketing.lu/",
        "https://bighousemarketing.lu/services",
        "https://bighousemarketing.lu/portfolio",
        "https://bighousemarketing.lu/nos-pack-3d/",
        "https://bighousemarketing.lu/visite-virtuelle/",
        "https://bighousemarketing.lu/acquisition-de-leads/",
        "https://bighousemarketing.lu/sites-web/",
        "https://bighousemarketing.lu/imagerie-et-visuels/",
        "https://bighousemarketing.lu/contact/",
    ],
    "NEO Agency": [
        "https://www.neoagency.lu/",
        "https://www.neoagency.lu/nos-solutions",
        "https://www.neoagency.lu/nos-solutions/presence-locale",
        "https://www.neoagency.lu/nos-solutions/creation-site-internet",
        "https://www.neoagency.lu/nos-solutions/seo",
        "https://www.neoagency.lu/nos-solutions/reseaux-sociaux",
        "https://www.neoagency.lu/nos-solutions/campagnes-publicitaires",
        "https://www.neoagency.lu/nos-solutions/contenu-marketing",
        "https://www.neoagency.lu/nos-solutions/emailing",
        "https://www.neoagency.lu/nos-solutions/data",
        "https://www.neoagency.lu/nos-solutions/sme-package",
    ],
    "HYPE Luxembourg": [
        "https://hype.lu/",
        "https://hype.lu/services/",
        "https://hype.lu/abouthype",
        "https://hype.lu/contact/",
    ],
}

KEYWORDS = [
    "luxembourg", "agence", "marketing", "digital", "social", "réseaux sociaux", "reseaux sociaux", "instagram", "tiktok", "facebook", "linkedin",
    "seo", "référencement", "referencement", "sea", "sma", "smo", "google ads", "meta ads", "paid ads", "publicité", "publicite",
    "site internet", "site web", "sites web", "e-commerce", "ecommerce", "shopify", "wordpress", "wix",
    "contenu", "content", "création", "creation", "vidéo", "video", "reels", "photo", "shooting", "3d", "visite virtuelle",
    "branding", "logo", "identité visuelle", "identite visuelle", "influence", "influencer", "influenceur",
    "restaurant", "architecte", "architect", "médecin", "medecin", "doctor", "avocat", "lawyer", "nettoyage", "cleaning", "startup", "pme", "local",
]


def clean(text):
    return re.sub(r"\s+", " ", text or "").strip()


def meta(soup, attr, value):
    tag = soup.find("meta", attrs={attr: value})
    return clean(tag.get("content", "")) if tag else ""


def page_analysis(url):
    out = {
        "url": url, "status_code": None, "final_url": "", "title": "", "description": "", "canonical": "",
        "h1": [], "h2": [], "h3": [], "word_count": 0, "keyword_hits": {}, "text": "", "error": ""
    }
    try:
        r = requests.get(url, headers=HEADERS, timeout=25, allow_redirects=True)
        out["status_code"] = r.status_code
        out["final_url"] = r.url
        soup = BeautifulSoup(r.text, "html.parser")
        out["title"] = clean(soup.title.string if soup.title else "")
        out["description"] = meta(soup, "name", "description")
        can = soup.find("link", rel=lambda v: v and "canonical" in v)
        out["canonical"] = can.get("href", "") if can else ""
        for tag in soup(["script", "style", "noscript", "svg"]):
            tag.decompose()
        out["h1"] = [clean(h.get_text(" ")) for h in soup.find_all("h1") if clean(h.get_text(" "))]
        out["h2"] = [clean(h.get_text(" ")) for h in soup.find_all("h2") if clean(h.get_text(" "))]
        out["h3"] = [clean(h.get_text(" ")) for h in soup.find_all("h3") if clean(h.get_text(" "))]
        text = clean(soup.get_text(" "))
        out["text"] = text[:5000]
        out["word_count"] = len(re.findall(r"\w+", text))
        lower = text.lower()
        out["keyword_hits"] = {kw: len(re.findall(re.escape(kw.lower()), lower)) for kw in KEYWORDS if re.search(re.escape(kw.lower()), lower)}
    except Exception as exc:
        out["error"] = repr(exc)
    return out


def main():
    results = {}
    for comp, urls in PAGES.items():
        results[comp] = [page_analysis(url) for url in urls]
    with open("/home/ubuntu/letzimpact/competitor_service_pages_raw.json", "w", encoding="utf-8") as f:
        json.dump(results, f, ensure_ascii=False, indent=2)

    lines = ["# Wettbewerber Leistungsseiten Analyse", "", "Stand: 2026-06-20", ""]
    for comp, pages in results.items():
        lines.append(f"## {comp}")
        lines.append("")
        aggregate = Counter()
        total_words = 0
        valid_pages = 0
        for p in pages:
            if p["status_code"] and p["status_code"] < 400:
                aggregate.update(p["keyword_hits"])
                total_words += p["word_count"]
                valid_pages += 1
        lines.append(f"Analysierte erreichbare Seiten: {valid_pages}/{len(pages)}; geschätzte sichtbare Wörter: {total_words}")
        lines.append("")
        lines.append("| Seite | Status | Title | Meta Description | H1 | H2 Auswahl | Wörter |")
        lines.append("|---|---:|---|---|---|---|---:|")
        for p in pages:
            h1 = "; ".join(p["h1"][:2]) or "—"
            h2 = "; ".join(p["h2"][:4]) or "—"
            lines.append(f"| [{urlparse(p['url']).path or '/'}]({p['url']}) | {p['status_code']} | {p['title'][:90]} | {p['description'][:120]} | {h1[:90]} | {h2[:130]} | {p['word_count']} |")
        lines.append("")
        lines.append("### Aggregierte Keyword Treffer")
        lines.append("| Keyword | Treffer |")
        lines.append("|---|---:|")
        for kw, count in aggregate.most_common(35):
            lines.append(f"| {kw} | {count} |")
        lines.append("")
    with open("/home/ubuntu/letzimpact/competitor_service_pages_summary.md", "w", encoding="utf-8") as f:
        f.write("\n".join(lines) + "\n")

if __name__ == "__main__":
    main()
