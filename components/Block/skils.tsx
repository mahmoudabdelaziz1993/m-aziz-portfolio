'use client'
import { Language, useLanguage } from "@/hooks/Language";
import MatrixSkillsRain from "../IconDigitalRain";
import { useLanguageContext } from "@/providers/LanguageProvider";


const SkillsSectionContent: Record<Language, {
    title: string,
    subTitle: string
}> = {
    en: {
        title: "Skills.exe Loading…",
        subTitle: "If icons stop falling, it's not lag — it's a feature."
    },
    ar: {
        title: "جارٍي تحميل المهارات.exe...",
        subTitle: "إذا توقفت الرموز عن السقوط، فهذا ليس تأخيرًا - بل هو ميزة."
    }
}

export default function SkillsSection() {
    const { lang } = useLanguageContext()
    const { title, subTitle } = SkillsSectionContent[lang]
    return (
        <div className="relative w-full h-screen overflow-hidden">

            {/* Your Matrix Rain background */}
            <MatrixSkillsRain />

            {/* Overlay text */}
            <div className="absolute  pointer-events-none inset-0 flex flex-col items-center justify-center z-20 ">
                <div className="gird  bg-background/50 backdrop-blur-2xl  p-6  text-center rounded-2xl pointer-events-auto">
                    <h2 data-text={title} className="glitch text-2xl md:text-4xl font-bold text-foreground " aria-live="polite">
                        {title}
                    </h2>
                    <p className="text-sm md:text-md italic text-muted-foreground mt-4" role="note">
                        {subTitle}
                    </p>
                </div>
            </div>

        </div>

    );
}
