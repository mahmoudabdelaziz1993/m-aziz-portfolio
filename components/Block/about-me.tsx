'use client'

import { motion } from "motion/react"
import Image from "next/image";
// import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { Language } from "@/hooks/Language";
import { useLanguageContext } from "@/providers/LanguageProvider";

const techStack = ["React", "Next.js", "TypeScript", "Tailwind", "Node.js", "Supabase"];

const AboutSectionContent: Record<
    Language,
    { heading: string; paragraph: string; tagline: string }
> = {
    en: {
        heading: "Code with Intent. Design with Silence. Execute with Discipline.",
        paragraph: `I'm Mahmoud Abdelaziz from Egypt — a Front-End Engineer specializing in React and Next.js. I craft fast, scalable, and elegant user interfaces with clean architecture, reusable components, and smooth user flows. My passion lies in creating pixel-perfect experiences that feel seamless and alive — like the web responding in real time.

I believe in remote-first work, global collaboration, and the freedom to build from anywhere. My ambition is to contribute to world-class engineering teams while traveling, learning, and pushing the boundaries of modern web performance and user experience.

Code is not just logic — it’s a system. A world. A signal in the Matrix.`,
        tagline: "Rigorous Code. Silent Execution. Sharp Interfaces."
    },

    ar: {
        heading: "أكتب الكود بوعي. أصمّم بصمت. أنفّذ بانضباط.",
        paragraph: `أنا محمود عبد العزيز من مصر — مهندس واجهات أمامية متخصص في React و Next.js. أركز على بناء واجهات سريعة، قابلة للتطوير، وأنيقة، مع كتابة كود نظيف ومُنظم ومكوّنات قابلة لإعادة الاستخدام وتجارب استخدام سلسة وحيّة.

أؤمن بثقافة العمل عن بُعد والتعاون العالمي، وأسعى للمساهمة في فرق هندسية عالمية أثناء السفر والتعلم وتطوير تجربتي باستمرار، مع دفع حدود الأداء وتجربة المستخدم الحديثة.

الكود ليس منطقًا فقط — إنه نظام. عالم. نبضة داخل الماتريكس.`,
        tagline: "كود صارم. تنفيذ صامت. واجهات حادّة."
    }
}

export default function AboutMe() {
    const { lang } = useLanguageContext()
    const { heading, paragraph, tagline } = AboutSectionContent[lang]

    return (
        <section className="grid place-items-center  min-h-screen"> {/* same style behavior */}
            <div className="max-w-5xl mx-auto px-6 py-20">
                <div className="grid md:grid-cols-2 gap-10 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6 flex flex-col justify-center lg:justify-start"
                    >
                        <header>
                            <h2 className="text-2xl sm:text-4xl rtl:leading-relaxed font-semibold text-primary">
                                {heading}
                            </h2>
                        </header>

                        <p className="md:text-lg max-w-2xl font-medium whitespace-pre-line">
                            {paragraph}
                        </p>

                        <blockquote>
                            <p className="md:text-sm font-extralight text-muted-foreground italic">
                                {tagline}
                            </p>
                        </blockquote>

                        {/* <div className="flex flex-wrap gap-2" aria-label="Technologies I work with">
                            {techStack.map((tech) => (
                                <Badge key={tech} variant="secondary" className="text-sm">
                                    {tech}
                                </Badge>
                            ))}
                        </div> */}

                        <div className="flex gap-3 pt-4">
                            <Button size="lg" asChild aria-label="Contact Mahmoud by email">
                                <a href="mailto:mahmoudabdelaziz1993@outlook.com">
                                    <Mail className="mr-2 h-4 w-4" /> Contact
                                </a>
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.figure
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex justify-center order-first md:order-last"
                    >
                        <div className="relative w-[300px] md:w-[500px] aspect-square">
                            <Image
                                src="/ma-matrix.png"
                                alt="Portrait of Mahmoud Abdelaziz"
                                fill
                                sizes="(max-width:1024px) 500px , (max-width: 768px) 350px , 300px"
                                className="object-cover"
                                priority
                            />
                        </div>
                        <figcaption className="sr-only">
                            Mahmoud Abdelaziz profile picture
                        </figcaption>
                    </motion.figure>
                </div>
            </div>
        </section>
    )
}
