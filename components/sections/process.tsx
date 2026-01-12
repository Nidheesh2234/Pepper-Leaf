"use client"

import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/visuals/scroll-reveal"

const steps = [
    { num: "01", title: "Select", desc: "Hand-picking the finest raw spices." },
    { num: "02", title: "Roast & Grind", desc: "Slow roasting and traditional stone grinding." },
    { num: "03", title: "Slow Cook", desc: "Simmering with authentic oils for hours." },
    { num: "04", title: "Seal & Ship", desc: "Hygienically packed in glass jars." },
]

export function ProjectProcess() {
    return (
        <section id="process" className="py-24 bg-background overflow-hidden relative">
            <div className="absolute left-0 top-1/4 w-64 h-64 bg-pepper-100/40 dark:bg-pepper-900/10 rounded-full blur-[80px]" />

            <div className="container px-4 relative z-10">
                <ScrollReveal>
                    <div className="text-center mb-20">
                        <span className="text-sm font-bold tracking-widest text-pepper-600 uppercase mb-2 block">Our Method</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold">From Our Kitchen to Yours</h2>
                    </div>
                </ScrollReveal>

                <div className="relative max-w-4xl mx-auto">
                    {/* Central Vertical Line */}
                    <div className="absolute left-[30px] md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-transparent via-pepper-200 to-transparent -translate-x-1/2" />

                    <div className="space-y-16">
                        {steps.map((step, i) => (
                            <div key={i} className={`relative flex flex-row ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16`}>
                                {/* Number Circle */}
                                <div className="absolute left-[30px] md:left-1/2 -translate-x-1/2 z-20">
                                    <motion.div
                                        initial={{ scale: 0, rotate: -180 }}
                                        whileInView={{ scale: 1, rotate: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: i * 0.1 }}
                                        className="w-16 h-16 rounded-full bg-white dark:bg-stone-900 border-4 border-pepper-100 dark:border-pepper-800 flex items-center justify-center text-xl font-bold font-serif shadow-sm text-pepper-600"
                                    >
                                        {step.num}
                                    </motion.div>
                                </div>

                                {/* Spacer for left side on mobile */}
                                <div className="w-[60px] md:hidden shrink-0" />

                                {/* Content */}
                                <ScrollReveal
                                    delay={i * 0.1 + 0.2}
                                    className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} pt-2 md:pt-0`}
                                >
                                    <h3 className="text-2xl font-bold mb-2 text-foreground">{step.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed text-lg">{step.desc}</p>
                                </ScrollReveal>

                                {/* Empty Spacer for grid balance */}
                                <div className="hidden md:block flex-1" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
