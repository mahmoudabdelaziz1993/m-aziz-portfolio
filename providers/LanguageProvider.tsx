'use client';
import { createContext, useContext } from 'react';
import { Language, useLanguage } from '@/hooks/Language';

const LanguageContext = createContext<ReturnType<typeof useLanguage> | null>(null);

export function LanguageProvider({
    children,
    initialLang,
}: {
    children: React.ReactNode;
    initialLang: Language;
}) {
    // ✅ pass as object
    const language = useLanguage({ initialLang });

    return (
        <LanguageContext.Provider value={language}>
            {children}
        </LanguageContext.Provider>
    );
}

export const useLanguageContext = () => {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error("useLanguageContext must be inside LanguageProvider");
    return ctx;
};
