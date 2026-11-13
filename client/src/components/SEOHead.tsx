import { useEffect } from "react";

type SEOHeadProps = {
  title: string;
  description: string;
  path?: string;
  type?: "website" | "article";
};

const SITE = "https://letzimpact.lu";

export function SEOHead({ title, description, path = "/", type = "website" }: SEOHeadProps) {
  useEffect(() => {
    const canonical = `${SITE}${path === "/" ? "/" : path}`;
    document.title = title;
    document.documentElement.lang = "en";

    const setMeta = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let element = document.head.querySelector<HTMLMetaElement>(selector);
      if (!element) {
        element = document.createElement("meta");
        if (property) element.setAttribute("property", name);
        else element.setAttribute("name", name);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    setMeta("description", description);
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:url", canonical, true);
    setMeta("og:type", type, true);
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);

    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = canonical;
  }, [description, path, title, type]);

  return null;
}
