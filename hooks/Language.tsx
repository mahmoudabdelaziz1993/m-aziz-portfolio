'use client'

import { useState, useCallback, useLayoutEffect } from 'react';

export type Language = 'en' | 'ar';

const DEFAULT_LANGUAGE: Language = 'en';

export function useLanguage() {
    const [lang, setLang] = useState<Language>(DEFAULT_LANGUAGE);

    // Run only once on mount to get initial language
    useLayoutEffect(() => {
        const savedLang = (localStorage.getItem('language') as Language) || DEFAULT_LANGUAGE;
        setLang(savedLang);
    }, []); // Empty dependency array - runs only once

    // Apply language changes to DOM and storage
    useLayoutEffect(() => {
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        localStorage.setItem('language', lang);
    }, [lang]);

    const changeLanguage = useCallback((newLang: Language) => {
        setLang(newLang);
        window.dispatchEvent(
            new CustomEvent('languageChange', { detail: { language: newLang } })
        );
    }, []);

    useLayoutEffect(() => {
        const handleLanguageChange = (e: Event) => {
            const customEvent = e as CustomEvent<{ language: Language }>;
            setLang(customEvent.detail.language);
        };

        window.addEventListener('languageChange', handleLanguageChange);
        return () => window.removeEventListener('languageChange', handleLanguageChange);
    }, []);

    return {
        lang,
        changeLanguage,
        isArabic: lang === 'ar',
        direction: lang === 'ar' ? 'rtl' : 'ltr' as const
    };
}