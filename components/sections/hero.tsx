"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { JarIllustration } from "@/components/visuals/jar-illustration"
import { ScrollReveal } from "@/components/visuals/scroll-reveal"
import { ArrowRight, Star } from "lucide-react"

export function Hero() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    })

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
    const opacityHero = useTransform(scrollYProgress, [0, 0.8], [1, 0])

    return (
        <section ref={containerRef} className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-background pt-20">
            {/* Organic Background Blobs */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-paprika-100/40 dark:bg-paprika-900/20 rounded-full blur-[100px] animate-pulse-slow" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-pepper-100/40 dark:bg-pepper-900/20 rounded-full blur-[120px]" />
            </div>

            <div className="container relative z-10 grid lg:grid-cols-12 gap-8 items-center h-full">

                {/* Hero Content - Spans 7 columns on large screens */}
                <motion.div
                    style={{ y: yText, opacity: opacityHero }}
                    className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 pt-10 lg:pt-0"
                >
                    <ScrollReveal>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pepper-200/50 bg-white/50 dark:bg-black/20 backdrop-blur-md shadow-sm mb-4">
                            <Star className="w-4 h-4 text-paprika-500 fill-paprika-500" />
                            <span className="text-sm font-medium text-pepper-800 dark:text-pepper-200 tracking-wide">
                                Rated #1 Authentic D2C Brand
                            </span>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.1}>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black tracking-tighter text-foreground leading-[0.9] lg:-ml-1">
                            Small-batch <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-pepper-600 to-pepper-800 dark:from-pepper-400 dark:to-pepper-200 relative z-10">
                                Spices
                            </span>
                            <span className="font-sans font-light italic text-4xl md:text-6xl text-paprika-500 block mt-2 lg:inline-block lg:ml-4 transform -rotate-2">
                                with soul.
                            </span>
                        </h1>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed font-medium">
                            Hand-ground, sun-dried, and sealed fresh. The real taste of Andhra, made without shortcuts.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.3}>
                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <Button asChild size="lg" className="rounded-full h-14 px-8 text-lg bg-pepper-600 hover:bg-pepper-700 text-white shadow-glow hover:shadow-lg transition-all transform hover:-translate-y-1">
                                <Link href="/#best-sellers">
                                    Shop Best Sellers <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg" className="rounded-full h-14 px-8 text-lg border-2 border-pepper-200 hover:bg-pepper-50 text-pepper-800 dark:text-pepper-200 dark:hover:bg-pepper-900/50">
                                View Gift Boxes
                            </Button>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.4}>
                        <div className="flex items-center gap-6 pt-4">
                            <div className="text-center">
                                <span className="block text-2xl font-bold text-pepper-700 dark:text-pepper-300">10k+</span>
                                <span className="text-xs uppercase tracking-wider text-muted-foreground">Happy Families</span>
                            </div>
                            <div className="w-px h-8 bg-border" />
                            <div className="text-center">
                                <span className="block text-2xl font-bold text-pepper-700 dark:text-pepper-300">100%</span>
                                <span className="text-xs uppercase tracking-wider text-muted-foreground">Natural</span>
                            </div>
                        </div>
                    </ScrollReveal>

                </motion.div>

                {/* Hero Visual - Overlapping and breaking the grid */}
                <motion.div
                    style={{ y: yImage, opacity: opacityHero }}
                    className="lg:col-span-5 relative h-[500px] lg:h-[700px] flex items-center justify-center lg:translate-x-12"
                >
                    {/* Main decorative circle */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-pepper-100 to-paprika-50 dark:from-pepper-900/40 dark:to-paprika-900/20 rounded-full blur-3xl opacity-60 scale-75 animate-blob" />

                    {/* Main Jar (Center) */}
                    <motion.div
                        className="relative z-20 transform scale-110 lg:scale-125"
                        initial={{ opacity: 0, y: 50, rotate: 5 }}
                        animate={{ opacity: 1, y: 0, rotate: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <JarIllustration label="Avakaya" color="#D84315" className="w-64 md:w-80 drop-shadow-2xl" />
                    </motion.div>

                    {/* Secondary Jar (Behind) */}
                    <motion.div
                        className="absolute right-0 bottom-20 lg:bottom-32 lg:-right-12 z-10"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        <JarIllustration label="Gongura" color="#2D5A27" className="w-40 md:w-56 drop-shadow-xl rotate-12 blur-[1px]" />
                    </motion.div>

                    {/* Floating Spice Elements (Abstract) */}
                    <motion.div
                        className="absolute top-20 left-10 w-24 h-24 bg-paprika-500/20 rounded-full blur-xl z-0"
                        animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
                        transition={{ duration: 5, repeat: Infinity }}
                    />
                </motion.div>
            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
        </section>
    )
}
