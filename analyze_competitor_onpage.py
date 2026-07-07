import json
import re
from urllib.parse import urljoin, urlparse

import requests
from bs4 import BeautifulSoup

COMPETITORS = {
    "Editus Business": "https://www.editus-business.lu/",
    "Big House Marketing": "https://bighousemarketing.lu/",
    "NEO Agency": "https://www.neoagency.lu/",
    "HYPE Luxembourg": "https://hype.lu/",
}

HEADERS = {
    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
    "Accept-Language": "fr-FR,fr;q=0.9,en;q=0.8,de;q=0.7",
}

KEYWORD_PATTERNS = [
    "luxembourg", "marketing", "social", "réseaux sociaux", "reseaux sociaux", "site web", "sites web",
    "création", "creation", "seo", "référencement", "referencement", "sea", "sma", "smo", "google ads",
    "meta", "facebook", "instagram", "tiktok", "video", "vidéo", "content", "contenu",
    "agence", "digital", "digitale", "stratégie", "strategie", "publicité", "publicite",
    "e-commerce", "branding", "logo", "influence", "influencer", "paid", "ads", "local",
    "restaurant", "restaurants", "architect", "architecte", "doctor", "médecin", "medecin", "lawyer", "avocat",
    "cleaning", "nettoyage", "startup", "pme", "commerce", "boutique"
]


def clean_text(text):
    if not text:
        return ""
    return re.sub(r"\s+", " ", text).strip()


def get_meta(soup, name=None, prop=None):
    if name:
        tag = soup.find("meta", attrs={"name": name})
    else:
        tag = soup.find("meta", attrs={"property": prop})
    return clean_text(tag.get("content", "")) if tag else ""


def visible_text(soup):
    for element in soup(["script", "style", "noscript", "svg"]):
        element.decompose()
    return clean_text(soup.get_text(" "))


def analyze_url(label, url):
    result = {
        "competitor": label,
        "url": url,
        "status_code": None,
        "final_url": None,
        "title": "",
        "meta_description": "",
        "canonical": "",
        "og_title": "",
        "og_description": "",
        "html_lang": "",
        "h1": [],
        "h2": [],
        "h3": [],
        "internal_links": [],
        "service_like_links": [],
        "keyword_hits": {},
        "local_signals": [],
        "platform": "",
        "text_sample": "",
        "error": "",
    }
    try:
        response = requests.get(url, headers=HEADERS, timeout=25, allow_redirects=True)
        result["status_code"] = response.status_code
        result["final_url"] = response.url
        result["response_headers"] = {k: v for k, v in response.headers.items() if k.lower() in ["server", "x-powered-by", "content-type"]}
        soup = BeautifulSoup(response.text, "html.parser")
        result["html_lang"] = soup.html.get("lang", "") if soup.html else ""
        result["title"] = clean_text(soup.title.string if soup.title else "")
        result["meta_description"] = get_meta(soup, name="description")
        canonical_tag = soup.find("link", rel=lambda v: v and "canonical" in v)
        result["canonical"] = canonical_tag.get("href", "") if canonical_tag else ""
        result["og_title"] = get_meta(soup, prop="og:title")
        result["og_description"] = get_meta(soup, prop="og:description")
        result["h1"] = [clean_text(x.get_text(" ")) for x in soup.find_all("h1") if clean_text(x.get_text(" "))]
        result["h2"] = [clean_text(x.get_text(" ")) for x in soup.find_all("h2") if clean_text(x.get_text(" "))]
        result["h3"] = [clean_text(x.get_text(" ")) for x in soup.find_all("h3") if clean_text(x.get_text(" "))]
        domain = urlparse(response.url).netloc.replace("www.", "")
        links = []
        for a in soup.find_all("a", href=True):
            href = urljoin(response.url, a.get("href"))
            parsed = urlparse(href)
            if parsed.scheme in ["http", "https"] and parsed.netloc.replace("www.", "") == domain:
                label_text = clean_text(a.get_text(" "))
                path = parsed.path.rstrip("/") or "/"
                item = {"text": label_text, "url": href, "path": path}
                if item not in links:
                    links.append(item)
        result["internal_links"] = links[:120]
        service_terms = re.compile(r"(service|solution|marketing|seo|sea|sma|smo|social|réseau|reseau|video|vidéo|site|web|content|contenu|pub|ads|creation|création|ecommerce|e-commerce|branding|blog|actualit)", re.I)
        result["service_like_links"] = [l for l in links if service_terms.search(l["text"] + " " + l["url"] )][:80]
        text = visible_text(soup)
        lower = text.lower()
        result["text_sample"] = text[:3000]
        result["keyword_hits"] = {kw: len(re.findall(re.escape(kw.lower()), lower)) for kw in KEYWORD_PATTERNS if len(re.findall(re.escape(kw.lower()), lower)) > 0}
        local_terms = ["Luxembourg", "Luxembourgeois", "Schifflange", "Kayl", "Leudelange", "Crauthem", "Fentange", "+352", "rue", "L-"]
        for term in local_terms:
            if term.lower() in lower:
                result["local_signals"].append(term)
        html_lower = response.text.lower()
        if "wixstatic" in html_lower or "wix.com" in html_lower:
            result["platform"] = "Wix Hinweise im HTML"
        elif "wp-content" in html_lower or "wordpress" in html_lower:
            result["platform"] = "WordPress Hinweise im HTML"
        elif "squarespace" in html_lower:
            result["platform"] = "Squarespace Hinweise im HTML"
        else:
            result["platform"] = "Nicht eindeutig"
    except Exception as exc:
        result["error"] = repr(exc)
    return result


def main():
    results = [analyze_url(label, url) for label, url in COMPETITORS.items()]
    with open("/home/ubuntu/letzimpact/competitor_onpage_raw.json", "w", encoding="utf-8") as f:
        json.dump(results, f, ensure_ascii=False, indent=2)

    lines = ["# Wettbewerber On Page SEO Rohdaten", "", "Stand: 2026-06-20", ""]
    for r in results:
        lines.append(f"## {r['competitor']}")
        lines.append("")
        lines.append(f"- URL: {r['url']}")
        lines.append(f"- Status / finale URL: {r['status_code']} / {r.get('final_url')}")
        lines.append(f"- HTML lang: {r.get('html_lang')}")
        lines.append(f"- Plattformhinweis: {r.get('platform')}")
        lines.append(f"- Title: {r.get('title')}")
        lines.append(f"- Meta Description: {r.get('meta_description')}")
        lines.append(f"- Canonical: {r.get('canonical')}")
        lines.append(f"- OG Title: {r.get('og_title')}")
        lines.append(f"- OG Description: {r.get('og_description')}")
        lines.append("")
        lines.append("### H1")
        lines.extend([f"- {h}" for h in r.get("h1", [])] or ["- Keine H1 gefunden"])
        lines.append("")
        lines.append("### H2")
        lines.extend([f"- {h}" for h in r.get("h2", [])] or ["- Keine H2 gefunden"])
        lines.append("")
        lines.append("### H3")
        lines.extend([f"- {h}" for h in r.get("h3", [])] or ["- Keine H3 gefunden"])
        lines.append("")
        lines.append("### Keyword Hits")
        if r.get("keyword_hits"):
            lines.append("| Keyword | Treffer |")
            lines.append("|---|---:|")
            for kw, count in sorted(r["keyword_hits"].items(), key=lambda kv: (-kv[1], kv[0])):
                lines.append(f"| {kw} | {count} |")
        else:
            lines.append("Keine Treffer aus der definierten Keywordliste.")
        lines.append("")
        lines.append("### Lokale Signale")
        lines.append(", ".join(r.get("local_signals", [])) or "Keine klaren lokalen Signale im sichtbaren Homepage Text.")
        lines.append("")
        lines.append("### Service-/Content-nahe interne Links")
        for l in r.get("service_like_links", [])[:30]:
            lines.append(f"- [{l['text'] or l['path']}]({l['url']})")
        if not r.get("service_like_links"):
            lines.append("- Keine gefunden")
        lines.append("")
    with open("/home/ubuntu/letzimpact/competitor_onpage_raw.md", "w", encoding="utf-8") as f:
        f.write("\n".join(lines) + "\n")

if __name__ == "__main__":
    main()
