import { locales, type Locale } from "@/lib/i18n/config";

const EXTERNAL_HREF_RE = /^([a-z][a-z0-9+.-]*:)?\/\//i;
const NON_HTTP_SCHEME_RE = /^(mailto|tel):/i;

/**
 * Prefixes an internal href (e.g. "/", "/about") with the current locale.
 * External URLs, `mailto:`, and `tel:` links are returned unchanged.
 */
export function localizeHref(locale: Locale, href: string): string {
  if (EXTERNAL_HREF_RE.test(href) || NON_HTTP_SCHEME_RE.test(href)) {
    return href;
  }
  const path = href === "/" ? "" : href;
  return `/${locale}${path}`;
}

/**
 * Strips a leading `/xx` locale segment from a pathname, e.g.
 * `/de/about` -> `/about`, `/en` -> `/`.
 */
export function stripLocaleFromPathname(pathname: string): string {
  const segments = pathname.split("/");
  const [, maybeLocale, ...rest] = segments;
  if (maybeLocale && (locales as readonly string[]).includes(maybeLocale)) {
    const remainder = rest.join("/");
    return remainder ? `/${remainder}` : "/";
  }
  return pathname;
}
