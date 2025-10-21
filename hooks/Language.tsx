'use client'

import { useState, useEffect, useCallback } from 'react';

type Language = 'en' | 'ar';

export function useLanguage() {
    const [lang, setLang] = useState<Language>('en');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Get saved language from localStorage
        const savedLang = (localStorage.getItem('language') as Language) || 'en';
        setLang(savedLang);
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        // Listen for language changes from the dropdown
        const handleLanguageChange = (e: Event) => {
            const customEvent = e as CustomEvent<{ language: Language }>;
            setLang(customEvent.detail.language);
        };

        window.addEventListener('languageChange', handleLanguageChange);
        return () => window.removeEventListener('languageChange', handleLanguageChange);
    }, [mounted]);

    // Change language programmatically
    const changeLanguage = useCallback((newLang: Language) => {
        setLang(newLang);
        localStorage.setItem('language', newLang);
        document.documentElement.lang = newLang;
        document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';

        // Dispatch event for other components
        window.dispatchEvent(
            new CustomEvent('languageChange', { detail: { language: newLang } })
        );
    }, []);

    // Get boolean for easier RTL checks
    const isArabic = lang === 'ar';
    const direction = isArabic ? 'rtl' : 'ltr';

    return {
        lang,
        mounted,
        changeLanguage,
        isArabic,
        direction
    };
}