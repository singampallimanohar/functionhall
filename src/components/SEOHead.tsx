import { usePageSEO, PageSEOProps } from "../hooks/usePageSEO";

export default function SEOHead(props: PageSEOProps) {
  usePageSEO(props);
  return null;
}
