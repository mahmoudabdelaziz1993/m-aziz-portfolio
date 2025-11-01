"use client";
import { motion, useAnimationControls } from "motion/react";
import React, { useEffect, useState } from "react";

import {
    SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss,
    SiHtml5, SiGithub, SiGit, SiNodedotjs, SiFigma, SiDocker,
    SiWebpack, SiBabel, SiVite, SiNpm, SiPnpm, SiYarn, SiSwr,
    SiPostgresql, SiMongodb,
    SiCss3,
    SiJquery,
    SiZod,
    SiThreedotjs
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbBrandAlpineJs } from "react-icons/tb";

const skills = [
    SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss,
    SiHtml5, SiCss3, SiGithub, SiGit, SiNodedotjs, SiFigma, SiDocker,
    VscVscode, TbBrandAlpineJs, SiVite, SiWebpack, SiBabel, SiNpm,
    SiPnpm, SiYarn, SiSwr, SiPostgresql, SiMongodb, SiJquery, SiZod,
    SiThreedotjs
];

const createColumn = (rows: number = 20) =>
    Array.from({ length: rows }, () => skills[Math.floor(Math.random() * skills.length)]);

function FallingColumn({ column, colIndex }: any) {
    const controls = useAnimationControls();

    useEffect(() => {
        controls.start({
            y: ["-120vh", "120vh"],
            transition: {
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 2,
            }
        });
    }, [controls]);

    return (
        <motion.div
            className="absolute"
            style={{ left: colIndex * 80 }}
            animate={controls}
            onMouseEnter={() => controls.stop()}
            onMouseLeave={() =>
                controls.start({
                    y: ["-120vh", "120vh"],
                    transition: {
                        duration: 4 + Math.random() * 3,
                        repeat: Infinity,
                        ease: "linear",
                    },
                })
            }
        >
            {column.map((Icon: any, i: number) => (
                <motion.div
                    key={i}
                    animate={{ opacity: [0, 1, 0.5, 1, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: Math.random(),
                    }}
                    className="flex justify-center"
                    style={{
                        marginBottom: 8,
                        filter: "drop-shadow(0 0 6px #00ff73)",
                    }}
                >
                    <Icon className="size-12" />
                </motion.div>
            ))}
        </motion.div>
    );
}

export default function MatrixSkillsRain() {
    const [columns, setColumns] = useState<any[][]>([]);

    useEffect(() => {
        const colCount = Math.floor(window.innerWidth / 40);
        setColumns(Array.from({ length: colCount }, () => createColumn()));
    }, []);

    return (
        <div className="bg-secondary/40 text-accent overflow-hidden relative w-full h-screen ">
            {columns.map((col, i) => (
                <FallingColumn key={i} column={col} colIndex={i} />
            ))}
        </div>
    );
}
