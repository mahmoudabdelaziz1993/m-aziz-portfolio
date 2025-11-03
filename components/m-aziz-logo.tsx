'use client'

import { Language } from '@/hooks/Language';
import { useLanguageContext } from '@/providers/LanguageProvider';
import { motion } from 'motion/react'
import Link from 'next/link'




interface NavbarLogoContent {
    name: string;
    jobTitle: string

}

const LogoContent: Record<Language, NavbarLogoContent> = {
    ar: {
        name: "محمود عبدالعزيز",
        jobTitle: " مطور واجهة المستخدم"
    },
    en: {
        name: "Mahmoud Abdelaziz",
        jobTitle: "Front-End Developer (React.js/Next.js)"

    }
}

export function MazizLogo() {
    const { lang } = useLanguageContext();
    const { name, jobTitle } = LogoContent[lang]
    return (
        <div className="flex space-x-2 items-center">
            <motion.div
                className="grid place-items-center  w-12 text-accent"
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
                <Link href={'/'} className="w-full">
                    <svg id="logo" x="0px" y="0px" viewBox="0 0 640 480" xmlSpace="preserve" fill="currentColor"><g>
                        <path d="M309.1,21.01v328.55c-0.14,0.01-0.27,0.01-0.41,0.01 c-21.85,0-41.95-7.47-57.9-20c-21.82-17.16-35.84-43.8-35.85-73.72h-0.01V114.77h0.01v-0.03c0-29.65,13.77-56.1,35.27-73.28 C266.25,28.66,286.58,21,308.69,21C308.83,21,308.96,21,309.1,21.01z"></path>
                        <path d="M426.05,21.01v328.55c-0.14,0.01-0.27,0.01-0.41,0.01 c-22.12,0-42.45-7.66-58.47-20.47c-1.71-1.36-3.36-2.78-4.96-4.26c-18.63-17.12-30.3-41.69-30.31-68.99h-0.01V114.77h0.01v-0.03 c0-29.65,13.77-56.1,35.27-73.28C383.2,28.66,403.52,21,425.64,21C425.78,21,425.91,21,426.05,21.01z"></path>
                        <path d="M543,114.77v245.96h-0.41 c-0.02,51.76-41.98,93.72-93.74,93.72h-0.01V21h0.01c51.77,0,93.74,41.97,93.74,93.74v0.03H543z"></path>
                        <path d="M192.15,21.01v329.48c-0.14,0.01-0.27,0.01-0.41,0.01 c-51.77,0-93.74-41.97-93.74-93.74c0-0.3,0-0.6,0.01-0.9h-0.02V114.77H98v-0.03C98,62.97,139.97,21,191.74,21 C191.88,21,192.01,21,192.15,21.01z"></path></g>
                    </svg>
                </Link>
            </motion.div>
            <hgroup className='sm:flex flex-col gap-0  hidden'>

                <h1 className='sm:text-base text-md font-semibold leading-tight'>{name}</h1>
                <p className='sm:text-xs text-[9px] font-medium text-muted-foreground'>{jobTitle} </p>
            </hgroup>
            <p>

            </p>
        </div>
    )
}