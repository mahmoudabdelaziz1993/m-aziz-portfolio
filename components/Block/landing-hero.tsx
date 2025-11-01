'use client'
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, BriefcaseBusiness, CalendarCheck, CirclePlay, Download } from "lucide-react";
import Link from "next/link";
import React from "react";
import FaultyTerminal from "@/components/FaultyTerminal";
import { Language, useLanguage } from "@/hooks/Language";
import { useTheme } from "next-themes";



interface HeroContent {
    badge: string;
    heading: string;
    paragraph: string;
    disclaimer: string;
    getStarted: string;
    watchDemo: string;
}

const heroContent: Record<Language, HeroContent> = {
    en: {
        badge: "Senior React & Next.js | 6+ Years",
        heading: "I fix broken code and broken dreams.",
        paragraph: "I turn confusing business needs into clean, working websites. Good at making slow sites fast and fixing old code.",
        disclaimer: "(Your messy code doesn't scare me.)",
        getStarted: "Schedule Meeting",
        watchDemo: "Download Resume"
    },
    ar: {
        badge: "React و Next.js | +٦ سنوات",
        heading: "أصلح الأكواد المعطلة والأحلام المحطمة.",
        paragraph: "أحول احتياجات العمل المعقدة إلى مواقع إلكترونية نظيفة وعاملة. أجيد جعل المواقع البطيئة سريعة وإصلاح الأكواد القديمة.",
        disclaimer: "(كودك الفوضوي لا يُخيفني.)",
        getStarted: "جدول الاجتماع",
        watchDemo: "تحميل السيرة الذاتية"
    }
};
const LandingHero = () => {
    const { lang } = useLanguage();
    const content = heroContent[lang];
    const { theme } = useTheme()

    return (
        <div className="relative w-screen  h-screen flex flex-col items-center justify-center overflow-hidden">
            {/* FaultyTerminal Background */}
            <div className="absolute inset-0 z-0">
                <FaultyTerminal
                    scale={2}
                    gridMul={[2, 1]}
                    digitSize={1.5}
                    timeScale={0.5}
                    flickerAmount={0.8}
                    chromaticAberration={0.002}
                    dither={1.5}
                    curvature={0.5}
                    mouseReact={true}
                    mouseStrength={1.5}
                    pageLoadAnimation={true}
                    brightness={theme === "dark" ? .6 : .3}
                    scanlineIntensity={0.9}
                    glitchAmount={0.5}
                    noiseAmp={1}
                    tint={theme === "dark" ? "#0f0" : "#0f0"}
                    bgColor={theme === "dark" ? "#000" : "#E5E9E6"}
                />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 text-center max-w-3xl mx-auto md:px-6">
                <Badge
                    variant="secondary"
                    className="rounded-full py-1 border-border"

                >

                    {content.badge} <BriefcaseBusiness className="text-primary" />

                </Badge>
                <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl rtl:leading-relaxed font-semibold">
                    {content.heading}
                </h1>
                <p className="mt-4 md:text-lg max-w-2xl font-medium mx-auto">
                    {content.paragraph}
                </p>
                <blockquote>
                    <p className="mt-4 md:text-sm font-extralight text-muted-foreground italic ">
                        {content.disclaimer}
                    </p>
                </blockquote>
                {/* CTA */}
                <div className="mt-12 flex items-center justify-center gap-4 flex-wrap">
                    <Button size="lg" className="rounded-full text-base" asChild>
                        <a href="https://calendly.com/mahmoudabdelaziz1993/new-meeting" target="_blank" rel="noopener noreferrer">
                            {content.getStarted} <CalendarCheck />
                        </a>
                    </Button>
                    <Button
                        variant="secondary"
                        size="lg"
                        className="rounded-full text-base"
                        asChild
                    >
                        <Link href={"/Mahmoud Abdelaziz.pdf"} download={"Mahmoud-Abdelaziz-Front-end.pdf"} >
                            <Download /> {content.watchDemo}
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export { LandingHero };