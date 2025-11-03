'use client'
import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "motion/react";
import type { Variants } from "motion/react";
import { useEffect, useState } from "react";


// Animation variants
const iconVariants: Variants = {
    initial: {
        y: -20,
        opacity: 0,
        rotate: -180,
    },
    animate: {
        y: 0,
        opacity: 1,
        rotate: 0,
        transition: {
            duration: 0.3,
            ease: "easeInOut",
        },
    },
    exit: {
        y: 20,
        opacity: 0,
        rotate: 180,
        transition: {
            duration: 0.3,
            ease: "easeInOut",
        },
    },
};

const buttonVariants: Variants = {

    tap: {
        scale: 0.9,
        transition: {
            duration: 0.1,
            ease: "easeInOut",
        },
    },
};

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const isDark = theme === "dark";

    // Prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <Button
                variant={'outline'}
                size={'icon'}
                className="rounded-full"
                disabled
                aria-label={"light/dark mode switch"}
                role="switch"
            />
        );
    }

    const handleToggle = () => {
        setTheme(isDark ? "light" : "dark");
    };

    return (
        <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
        >
            <Button
                variant={'outline'}
                size={'icon'}
                className="rounded-full relative overflow-hidden"
                onClick={handleToggle}
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                aria-pressed={isDark}
                role="switch"
            >
                <AnimatePresence mode="wait">
                    {isDark ? (
                        <motion.div
                            key="sun"
                            variants={iconVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="absolute flex items-center justify-center"
                            aria-hidden="true"
                        >
                            <SunIcon className="w-[1.2rem] h-[1.2rem]" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="moon"
                            variants={iconVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="absolute flex items-center justify-center"
                            aria-hidden="true"
                        >
                            <MoonIcon className="w-[1.2rem] h-[1.2rem]" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </Button>
        </motion.div>
    );
}