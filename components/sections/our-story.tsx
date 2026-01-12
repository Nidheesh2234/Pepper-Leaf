"use client"

import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/visuals/scroll-reveal"
import { Quote, MapPin, Users, Package, Calendar } from "lucide-react"

const milestones = [
    {
        year: "1985",
        title: "Ammamma's Kitchen",
        desc: "Our grandmother began perfecting her signature Avakaya recipe in the village of Duggirala, Andhra Pradesh."
    },
    {
        year: "2018",
        title: "The Revival",
        desc: "The next generation decided to preserve and share these treasured recipes with the world."
    },
    {
        year: "2020",
        title: "First Shipment",
        desc: "Our first batch of handcrafted pickles reached 50 families across India."
    },
    {
        year: "2024",
        title: "10,000+ Families",
        desc: "Now serving spice lovers in 18+ states, staying true to our roots."
    }
]

const stats = [
    { icon: Users, value: "10,000+", label: "Families Served" },
    { icon: MapPin, value: "18+", label: "States Delivered" },
    { icon: Package, value: "50+", label: "Products Crafted" },
    { icon: Calendar, value: "40+", label: "Years of Recipes" }
]

export function OurStory() {
    return (
        <section id="our-story" className="py-24 md:py-32 bg-stone-50 dark:bg-stone-900 relative overflow-hidden">
            {/* Texture/Noise overlay specific to this section if needed, but global covers it */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-paprika-100/20 dark:bg-paprika-900/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pepper-100/20 dark:bg-pepper-900/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

            <div className="container px-4 relative z-10">
                <ScrollReveal>
                    <div className="flex flex-col items-center text-center mb-20">
                        <span className="text-sm font-bold tracking-[0.2em] text-paprika-600 uppercase mb-4">Legacy</span>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
                            A Story <span className="italic font-light text-pepper-600">Roasted</span> in Tradition
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-paprika-400 to-transparent" />
                    </div>
                </ScrollReveal>

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
                    {/* Image Side - Collage style */}
                    <div className="relative">
                        <ScrollReveal delay={0.1}>
                            <div className="relative z-10 rounded-2xl overflow-hidden shadow-strong aspect-[4/5] lg:aspect-square bg-stone-200">
                                {/* Ideally we place a real image here */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                                <div className="absolute bottom-8 left-8 right-8 z-20 text-white">
                                    <p className="font-serif text-2xl italic">"The secret isn't just the recipe, it's the patience."</p>
                                    <p className="text-sm mt-2 opacity-80 uppercase tracking-widest">— Ammamma</p>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Decorative elements behind */}
                        <motion.div
                            className="absolute -top-8 -left-8 w-full h-full border-2 border-pepper-200 dark:border-pepper-800 rounded-2xl z-0"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                        />
                        <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-paprika-100 dark:bg-paprika-900/20 rounded-full blur-2xl z-0" />
                    </div>

                    {/* Text Content */}
                    <div className="space-y-8">
                        <ScrollReveal delay={0.2}>
                            <h3 className="text-3xl font-serif font-bold mb-4">From Duggirala with Love</h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                It all started in a small village kitchen in Andhra Pradesh, where our grandmother spent 40 years mastering the perfect sun-dried Avakaya.
                                There were no shortcuts then, and there are no shortcuts now.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={0.3}>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                We source our chilies directly from Guntur farmers and grind our spices on traditional stone mortars.
                                Every jar that leaves our kitchen carries the warmth of thsoe summer afternoons.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={0.4}>
                            <div className="grid grid-cols-2 gap-8 pt-4">
                                <div>
                                    <div className="text-3xl font-bold text-pepper-600 mb-1">1985</div>
                                    <div className="text-sm text-muted-foreground uppercase tracking-wider">Ammamma's First Batch</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-pepper-600 mb-1">10k+</div>
                                    <div className="text-sm text-muted-foreground uppercase tracking-wider">Kitchens Served</div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Timeline Reimagined - Horizontal cards or just a simple distinct row */}
                <div className="grid md:grid-cols-4 gap-6">
                    {milestones.map((m, i) => (
                        <ScrollReveal key={i} delay={i * 0.1}>
                            <div className="relative p-6 pt-12 rounded-2xl bg-white dark:bg-stone-800/50 shadow-sm border border-stone-100 dark:border-stone-800 hover:shadow-medium transition-shadow">
                                <div className="absolute top-6 left-6 text-4xl font-black text-stone-100 dark:text-stone-700/50 z-0 select-none">
                                    {m.year}
                                </div>
                                <div className="relative z-10">
                                    <h4 className="font-serif font-bold text-lg mb-2">{m.title}</h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
