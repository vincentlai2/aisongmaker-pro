import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

// Can be imported from a shared config
export const locales = [
  'en',    // English (default)
  'es',    // Spanish  
  'zh',    // Chinese Simplified
] as const;

export type Locale = typeof locales[number];

export const defaultLocale: Locale = 'en';

// Locale display names for language switcher
export const localeNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español', 
  zh: '简体中文',
};

// RTL languages
export const rtlLocales: Locale[] = [];

export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as Locale)) notFound();

  return {
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
