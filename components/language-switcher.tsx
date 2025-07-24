"use client";

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe, Check } from 'lucide-react';
import { locales, localeNames, type Locale } from '@/i18n';
import { parseLocaleFromPathname } from '@/lib/i18n-utils';

interface LanguageSwitcherProps {
  variant?: 'default' | 'ghost' | 'outline';
  size?: 'default' | 'sm' | 'lg';
  showLabel?: boolean;
}

export function LanguageSwitcher({
  variant = 'ghost',
  size = 'default',
  showLabel = false,
}: LanguageSwitcherProps) {
  const t = useTranslations('language');
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale() as Locale;
  const [isOpen, setIsOpen] = useState(false);

  const switchLanguage = (newLocale: Locale) => {
    const { pathname: cleanPathname } = parseLocaleFromPathname(pathname);
    const newPath = newLocale === 'en' ? cleanPathname : `/${newLocale}${cleanPathname}`;
    
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant={variant} size={size} className="gap-2">
          <Globe className="h-4 w-4" />
          {showLabel && (
            <span className="hidden sm:inline">
              {localeNames[currentLocale]}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => switchLanguage(locale)}
            className="flex items-center justify-between cursor-pointer"
          >
            <span>{localeNames[locale]}</span>
            {currentLocale === locale && (
              <Check className="h-4 w-4 text-primary" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
