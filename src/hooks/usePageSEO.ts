import { useEffect } from "react";

export interface PageSEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogType?: string;
  ogImage?: string;
}

/**
 * Custom hook to dynamically manage helmet-like SEO tags for client-rendered pages.
 */
export function usePageSEO({
  title,
  description,
  canonicalPath,
  ogType = "website",
  ogImage
}: PageSEOProps) {
  useEffect(() => {
    // 1. Update document title
    const prevTitle = document.title;
    document.title = title;

    // Helper to update or create meta tags
    const setMetaTag = (attribute: "name" | "property", key: string, content: string) => {
      let element = document.querySelector(`meta[${attribute}="${key}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // 2. Set Meta Description
    setMetaTag("name", "description", description);

    // 3. Set OpenGraph tags
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:type", ogType);

    const currentUrl = typeof window !== "undefined"
      ? canonicalPath
        ? `${window.location.origin}${canonicalPath}`
        : window.location.href
      : "";

    if (currentUrl) {
      setMetaTag("property", "og:url", currentUrl);

      // Set canonical link
      let canonicalEl = document.querySelector("link[rel='canonical']");
      if (!canonicalEl) {
        canonicalEl = document.createElement("link");
        canonicalEl.setAttribute("rel", "canonical");
        document.head.appendChild(canonicalEl);
      }
      canonicalEl.setAttribute("href", currentUrl);
    }

    if (ogImage) {
      setMetaTag("property", "og:image", ogImage);
      setMetaTag("name", "twitter:image", ogImage);
    }

    // 4. Set Twitter Card tags
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);

    return () => {
      // Revert title on unmount if needed
      document.title = prevTitle;
    };
  }, [title, description, canonicalPath, ogType, ogImage]);
}
