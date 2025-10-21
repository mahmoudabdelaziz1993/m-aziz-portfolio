'use client'
import { AnimatePresence, motion } from 'motion/react';
import { Check, Languages } from 'lucide-react';
import { Button } from './ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLanguage } from '@/hooks/Language';

type Language = 'en' | 'ar';

const languages: { code: Language; name: string; nativeName: string }[] = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'ar', name: 'Arabic', nativeName: 'العربية' },
];

export function LanguageDropdown() {
    const { lang: currentLang, mounted, changeLanguage } = useLanguage();

    if (!mounted) {
        return (
            <Button variant='outline' size='icon' className='rounded-full' disabled>
                <Languages className='w-4 h-4' />
            </Button>
        );
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant='outline'
                    size='icon'
                    className='rounded-full'
                    aria-label='Change language'
                >
                    <motion.div
                        initial={{ rotate: 0 }}
                        whileHover={{ rotate: 20 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    >
                        <Languages className='w-4 h-4' />
                    </motion.div>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' className='w-40'>
                <AnimatePresence mode='wait'>
                    {languages.map((lang) => (
                        <motion.div
                            key={lang.code}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.2 }}
                        >
                            <DropdownMenuItem
                                onClick={() => changeLanguage(lang.code)}
                                className='cursor-pointer flex items-center justify-between'
                            >
                                <div className='flex flex-col'>
                                    <span className='font-medium'>{lang.name}</span>
                                    <span className='text-xs opacity-70'>{lang.nativeName}</span>
                                </div>
                                {currentLang === lang.code && (
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                                    >
                                        <Check className='w-4 h-4 text-green-500' />
                                    </motion.div>
                                )}
                            </DropdownMenuItem>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}