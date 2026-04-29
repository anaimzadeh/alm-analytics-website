import { useEffect } from "react";

interface MetaOptions {
  title?: string;
  description?: string;
}

function setMeta(selector: string, attr: "name" | "property", attrValue: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function useDocumentMeta({ title, description }: MetaOptions) {
  useEffect(() => {
    if (title) {
      const fullTitle = title.includes("ALM Analytics") ? title : `${title} | ALM Analytics`;
      document.title = fullTitle;
      setMeta('meta[property="og:title"]', "property", "og:title", fullTitle);
      setMeta('meta[name="twitter:title"]', "name", "twitter:title", fullTitle);
    }

    if (description) {
      setMeta('meta[name="description"]', "name", "description", description);
      setMeta('meta[property="og:description"]', "property", "og:description", description);
      setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    }

    const url = window.location.href;
    setMeta('meta[property="og:url"]', "property", "og:url", url);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }, [title, description]);
}
