"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingSpiceProps {
    className?: string;
    delay?: number;
    duration?: number;
    image?: string; // We can use SVGs or images later, for now using abstract shapes or SVG paths
    rotate?: number;
}

export function FloatingSpice({ className, delay = 0, duration = 4, rotate = 15 }: FloatingSpiceProps) {
    return (
        <motion.div
            className={cn("absolute pointer-events-none z-0", className)}
            initial={{ y: 0, rotate: rotate }}
            animate={{
                y: [0, -20, 0],
                rotate: [rotate, rotate + 10, rotate],
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
            }}
        >
            {/* Placeholder for spice shape - can be replaced with real SVG/Image */}
            <div className="w-full h-full opacity-60">
                <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full text-pepper-500/20 dark:text-pepper-400/20">
                    <path d="M50 0 L100 50 L50 100 L0 50 Z" />
                </svg>
            </div>
        </motion.div>
    );
}
