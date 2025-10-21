'use client'

import Link from "next/link"
import { motion } from "motion/react"
import { LanguageDropdown } from "../language-dropdown"
import { ThemeToggle } from "../theme-toggle"
import { useLanguage } from "@/hooks/Language"
import { NavbarLogo } from "../navbar-logol"

type Language = 'en' | 'ar';

interface NavbarContent {
    name: string;
    nav: string[];
}

const navbarContent: Record<Language, NavbarContent> = {
    en: {
        name: "Mahmoud Abdelaziz",
        nav: ['Home', 'About', 'Projects', 'Contact'],
    },
    ar: {
        name: "محمود عبدالعزيز",
        nav: ['الرئيسية', 'حول', 'المشاريع', 'تواصل'],
    },
}

function Navbar() {
    const { mounted, direction } = useLanguage();

    if (!mounted) {
        return (
            <header className="fixed top-6 inset-x-4 max-w-(--breakpoint-xl) mx-auto rounded-full border-2 px-4 h-16">
                <div className="flex items-center justify-between w-full h-full">
                    <div className="flex gap-2 items-center">
                        <div className="w-12">
                            <svg id="logo" x="0px" y="0px" viewBox="0 0 640 480" xmlSpace="preserve" fill="currentColor"><g><path d="M309.1,21.01v328.55c-0.14,0.01-0.27,0.01-0.41,0.01 c-21.85,0-41.95-7.47-57.9-20c-21.82-17.16-35.84-43.8-35.85-73.72h-0.01V114.77h0.01v-0.03c0-29.65,13.77-56.1,35.27-73.28 C266.25,28.66,286.58,21,308.69,21C308.83,21,308.96,21,309.1,21.01z"></path><path d="M426.05,21.01v328.55c-0.14,0.01-0.27,0.01-0.41,0.01 c-22.12,0-42.45-7.66-58.47-20.47c-1.71-1.36-3.36-2.78-4.96-4.26c-18.63-17.12-30.3-41.69-30.31-68.99h-0.01V114.77h0.01v-0.03 c0-29.65,13.77-56.1,35.27-73.28C383.2,28.66,403.52,21,425.64,21C425.78,21,425.91,21,426.05,21.01z"></path><path d="M543,114.77v245.96h-0.41 c-0.02,51.76-41.98,93.72-93.74,93.72h-0.01V21h0.01c51.77,0,93.74,41.97,93.74,93.74v0.03H543z"></path><path d="M192.15,21.01v329.48c-0.14,0.01-0.27,0.01-0.41,0.01 c-51.77,0-93.74-41.97-93.74-93.74c0-0.3,0-0.6,0.01-0.9h-0.02V114.77H98v-0.03C98,62.97,139.97,21,191.74,21 C191.88,21,192.01,21,192.15,21.01z"></path></g></svg>
                        </div>
                        <p className="text-lg font-extrabold">-</p>
                    </div>
                    <div className="flex gap-2 justify-end">
                        <ThemeToggle />
                        <LanguageDropdown />
                    </div>
                </div>
            </header>
        )
    }



    return (
        <header dir={direction} className="fixed top-6 inset-x-4 max-w-(--breakpoint-xl) mx-auto rounded-full  bg-background/10 backdrop-blur-lg px-4 h-16">
            {/* navbar container */}
            <div className="flex items-center justify-between w-full h-full">
                {/* Logo */}
                <NavbarLogo />

                {/* Navbar Actions Zone */}
                <div className="flex gap-2 justify-end">
                    <ThemeToggle />
                    <LanguageDropdown />
                </div>
            </div>
        </header>
    )
}

export { Navbar }