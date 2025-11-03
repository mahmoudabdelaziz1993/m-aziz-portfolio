'use client';

import { useState, useCallback, useEffect } from 'react';

export type Language = 'en' | 'ar';
const DEFAULT_LANGUAGE: Language = 'en';

// read cookie in browser only
function getClientCookie(name: string) {
    if (typeof document === 'undefined') return null;
    const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
    return match ? decodeURIComponent(match[2]) : null;
}

export function useLanguage({ initialLang }: { initialLang: Language }) {
    // ✅ initialLang comes from server (SSR-safe)
    const [lang, setLang] = useState<Language>(initialLang || DEFAULT_LANGUAGE);

    // ✅ After hydration, sync with client cookies/localStorage
    useEffect(() => {
        const stored =
            (getClientCookie('language') as Language) ||
            (localStorage.getItem('language') as Language) ||
            DEFAULT_LANGUAGE;

        if (stored !== lang) {
            setLang(stored);
        }
    }, []);

    // ✅ Update DOM + persist
    useEffect(() => {
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

        localStorage.setItem('language', lang);
        document.cookie = `language=${lang}; path=/; max-age=31536000`;
    }, [lang]);

    const changeLanguage = useCallback((newLang: Language) => {
        setLang(newLang);
        window.dispatchEvent(new CustomEvent('languageChange', { detail: { language: newLang } }));
    }, []);

    useEffect(() => {
        const handler = (e: Event) => {
            const custom = e as CustomEvent<{ language: Language }>;
            setLang(custom.detail.language);
        };

        window.addEventListener('languageChange', handler);
        return () => window.removeEventListener('languageChange', handler);
    }, []);

    return {
        lang,
        changeLanguage,
        isArabic: lang === 'ar',
        direction: lang === 'ar' ? 'rtl' : 'ltr' as const,
    };
}
