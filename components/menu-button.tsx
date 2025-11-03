'use client'

import { useState } from "react"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "./ui/button"
import { Github, Linkedin, Menu, Twitter, X } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import type { Variants } from "motion/react"
import { MazizLogo } from "./m-aziz-logo"
import { useLanguageContext } from "@/providers/LanguageProvider"

type Language = 'en' | 'ar';

interface MenuContent {
    title: string;
    items: {
        label: string;
        href: string;
    }[];
}

const menuContent: Record<Language, MenuContent> = {
    en: {
        title: "Navigation",
        items: [

            { label: "About Me !", href: "#about" },
            { label: "Projects", href: "#projects" },
            { label: "Skills", href: "#skills" },
            { label: "Contact", href: "#contact" },
        ]
    },
    ar: {
        title: "القائمة",
        items: [

            { label: "أنا مين ؟!", href: "#about" },
            { label: "المشروعات", href: "#projects" },
            { label: " المهارات", href: "#skills" },
            { label: "تواصل معي", href: "#contact" },
        ]
    }
};

const socials = [
    { name: "GitHub", icon: Github, href: "https://github.com/..." },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/..." },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/..." },
];


// Animation variants
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.3,
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 24,
            duration: 0.15
        }
    }
};

const menuIconVariants: Variants = {
    initial: { rotate: 0 },
    animate: { rotate: 180 },
};

export function MenuButton() {
    const { lang, isArabic, direction } = useLanguageContext();
    const [isOpen, setIsOpen] = useState(false);
    const content = menuContent[lang];
    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Button
                        variant={"outline"}
                        size={"icon"}
                        className="rounded-full"
                        aria-label="Open menu"
                        aria-haspopup="menu"
                        aria-expanded={isOpen}
                    >
                        <motion.div
                            variants={menuIconVariants}
                            animate={isOpen ? "animate" : "initial"}
                            transition={{ duration: 0.3 }}
                        >
                            {isOpen ? <X /> : <Menu />}
                        </motion.div>
                    </Button>
                </motion.div>
            </SheetTrigger>

            <SheetContent
                side={isArabic ? "left" : "right"}
                className="h-screen bg-card text-card-foreground border-l-0 border-r-0  pt-16
                flex flex-col
                "
                dir={direction}
            >
                {/* Header */}
                <SheetHeader className="sr-only">
                    <SheetTitle className="text-2xl font-bold">
                        {content.title}
                    </SheetTitle>
                </SheetHeader>
                {/* Navigation Items */}
                <motion.nav
                    className="space-y-4 grow flex flex-col justify-center items-center w-full"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isOpen ? "visible" : "hidden"}
                    role="navigation"
                    aria-label="Main menu"
                >
                    <AnimatePresence mode="wait">
                        {isOpen && content.items.map((item, index) => (
                            <motion.a
                                key={item.href}
                                href={item.href}
                                variants={itemVariants}
                                onClick={() => setIsOpen(false)}
                                aria-controls="mobile-menu"
                                className=" px-4 py-3 rounded-full text-lg font-medium transition-colors
                                w-3/4 items-center flex justify-center
                                    hover:bg-accent hover:text-accent-foreground
                                    active:bg-primary active:text-primary-foreground
                                    focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                            >
                                <motion.span
                                    className="inline-flex items-center  font-semibold gap-3 uppercase tracking-widest"
                                    whileHover={{ x: isArabic ? -4 : 4 }}
                                >

                                    {item.label}
                                </motion.span>
                            </motion.a>
                        ))}
                    </AnimatePresence>
                </motion.nav>

                {/* Divider */}
                <div className="h-px bg-border" />

                {/* Footer Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col items-center justify-self-end p-6 gap-3"
                >
                    <MazizLogo />
                    <p className="sm:text-sm text-xs font-extralight tracking-wide text-muted-foreground px-6 text-center">
                        {isArabic
                            ? "مطور React/Next.js مع 6 سنوات من الخبرة. أنشئ UI سريعة وأرسل كود نظيف — بدون كلام."
                            : "React/Next.js dev with 6 years of experience. I build fast UIs and ship clean code — no drama."
                        }
                    </p>

                    <div className="flex gap-2">
                        {socials.map(({ name, icon: Icon, href }) => (
                            <Button
                                key={name}
                                size="icon"
                                variant="link"
                                className="rounded-full"
                                aria-label={name}
                                asChild
                            >
                                <a href={href} target="_blank" rel="noopener noreferrer">
                                    <Icon />
                                </a>
                            </Button>
                        ))}
                    </div>
                </motion.div>
            </SheetContent>
        </Sheet>
    )
}

