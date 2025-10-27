'use client'
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import Link from "next/link";
import React from "react";
import FaultyTerminal from "@/components/FaultyTerminal";
import { useLanguage } from "@/hooks/Language";
import { useTheme } from "next-themes";

type Language = 'en' | 'ar';

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
        badge: "React & Next.js Specialist | 6+ Years Building Fast UIs",
        heading: "Hey, I'm Mahmoud — Front-End Developer in the Matrix.",
        paragraph: "The digital rain never stops — and that's where I thrive. Between React hooks, animations, and clean code, I build interfaces that feel alive. You've already taken the red pill… now let's create something that bends the rules of reality.",
        disclaimer: "(Just don't tell Agent Deadline I'm online.)",
        getStarted: "Schedule Meeting",
        watchDemo: "Download Resume"
    },
    ar: {
        badge: "متخصص React و Next.js | 6+ سنوات في بناء واجهات سريعة",
        heading: "مرحبا، أنا محمود — مطور واجهات أمام في المصفوفة.",
        paragraph: "المطر الرقمي لا يتوقف أبدا — وهنا أزدهر. بين خطافات React والرسوم المتحركة والكود النظيف، أبني واجهات تشعر بأنها حية. لقد أخذت بالفعل الحبة الحمراء… الآن دعنا ننشئ شيئا يثني قواعد الواقع.",
        disclaimer: "(فقط لا تخبري وكيل الموعد النهائي أنني متصلة.)",
        getStarted: "جدول الاجتماع",
        watchDemo: "تحميل السيرة الذاتية"
    }
};

const LandingHero = () => {
    const { lang } = useLanguage();
    const content = heroContent[lang];
    const { theme } = useTheme()

    return (
        <div className="relative w-screen h-screen flex flex-col items-center justify-center overflow-hidden">
            {/* FaultyTerminal Background */}
            <div className="absolute inset-0 z-0">
                <FaultyTerminal
                    scale={2}
                    gridMul={[2, 1]}
                    digitSize={0.5}
                    timeScale={0.5}
                    flickerAmount={0.8}
                    chromaticAberration={0.002}
                    dither={0.5}
                    curvature={0.5}
                    mouseReact={true}
                    mouseStrength={1.5}
                    pageLoadAnimation={true}
                    brightness={theme === "dark" ? 2 : .8}
                    scanlineIntensity={0.9}
                    glitchAmount={0.5}
                    noiseAmp={1}
                    tint={theme === "dark" ? "#006239" : "#72e3ad"}
                    bgColor={theme === "dark" ? "#121212" : "#fcfcfc"}
                />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 text-center max-w-3xl mx-auto md:px-6">
                <Badge
                    variant="secondary"
                    className="rounded-full py-1 border-border"
                    asChild
                >
                    <Link href="#">
                        {content.badge} <ArrowUpRight className="ml-1 size-4" />
                    </Link>
                </Badge>
                <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter">
                    {content.heading}
                </h1>
                <p className="mt-3 md:text-lg max-w-2xl mx-auto">
                    {content.paragraph}
                </p>
                <p className="mt-4 md:text-sm text-muted-foreground italic sr-only">
                    {content.disclaimer}
                </p>
                <div className="mt-12 flex items-center justify-center gap-4 flex-wrap">
                    <Button size="lg" className="rounded-full text-base">
                        {content.getStarted} <ArrowUpRight className="size-5" />
                    </Button>
                    <Button
                        variant="secondary"
                        size="lg"
                        className="rounded-full text-base"
                    >
                        <CirclePlay className="size-5" /> {content.watchDemo}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export { LandingHero };