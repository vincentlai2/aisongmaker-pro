import { locales, type Locale, defaultLocale, rtlLocales } from '@/i18n';

/**
 * Check if a locale is valid
 */
export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

/**
 * Get the best matching locale from a list of preferred locales
 */
export function getBestMatchingLocale(preferredLocales: string[]): Locale {
  for (const preferred of preferredLocales) {
    // Exact match
    if (isValidLocale(preferred)) {
      return preferred;
    }
    
    // Language match (e.g., 'en-GB' -> 'en')
    const language = preferred.split('-')[0];
    if (isValidLocale(language)) {
      return language;
    }
  }
  
  return defaultLocale;
}

/**
 * Check if a locale is RTL (Right-to-Left)
 */
export function isRtlLocale(locale: Locale): boolean {
  return rtlLocales.includes(locale);
}

/**
 * Get the direction for a locale
 */
export function getLocaleDirection(locale: Locale): 'ltr' | 'rtl' {
  return isRtlLocale(locale) ? 'rtl' : 'ltr';
}

/**
 * Format a locale for URL paths
 */
export function formatLocaleForUrl(locale: Locale): string {
  return locale === defaultLocale ? '' : `/${locale}`;
}

/**
 * Parse locale from URL pathname
 */
export function parseLocaleFromPathname(pathname: string): {
  locale: Locale;
  pathname: string;
} {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  if (firstSegment && isValidLocale(firstSegment)) {
    return {
      locale: firstSegment,
      pathname: '/' + segments.slice(1).join('/'),
    };
  }
  
  return {
    locale: defaultLocale,
    pathname,
  };
}

/**
 * Generate alternate language URLs for SEO
 */
export function generateAlternateUrls(
  baseUrl: string,
  pathname: string
): Record<string, string> {
  const alternates: Record<string, string> = {};
  
  locales.forEach((locale) => {
    const localePath = locale === defaultLocale ? '' : `/${locale}`;
    alternates[locale] = `${baseUrl}${localePath}${pathname}`;
  });
  
  return alternates;
}

/**
 * Get browser preferred languages
 */
export function getBrowserPreferredLanguages(): string[] {
  if (typeof navigator === 'undefined') return [];
  
  return Array.from(
    new Set([
      ...(navigator.languages || []),
      navigator.language,
    ].filter(Boolean))
  );
}
