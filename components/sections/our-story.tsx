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
        <section id="our-story" className="py-24 md:py-32 bg-gradient-to-b from-paprika-50/30 to-background dark:from-paprika-900/10 dark:to-background relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-paprika-200/20 blur-3xl" />
            <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-pepper-200/20 blur-3xl" />

            <div className="container px-4 relative z-10">
                {/* Section Header */}
                <ScrollReveal>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-sm font-medium tracking-widest uppercase text-paprika-500 mb-4 block">Our Story</span>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                            A Story Roasted in <span className="text-transparent bg-clip-text bg-gradient-to-r from-paprika-500 to-pepper-600 italic">Tradition</span>
                        </h2>
                    </div>
                </ScrollReveal>

                {/* Hero Quote */}
                <ScrollReveal delay={0.1}>
                    <div className="max-w-4xl mx-auto mb-20 relative">
                        <div className="bg-pepper-50/50 dark:bg-pepper-900/20 rounded-3xl p-8 md:p-12 border border-pepper-200/50 dark:border-pepper-700/30 shadow-soft">
                            <Quote className="w-10 h-10 text-paprika-400/50 mb-6" />
                            <blockquote className="text-xl md:text-2xl font-serif text-foreground leading-relaxed mb-6">
                                "My grandmother always said the secret to great pickles isn't just the recipe—it's the love you put into every jar. 
                                We don't just make food, we preserve memories. Each spoonful carries the warmth of an Andhra kitchen 
                                where three generations of women laughed, cooked, and passed down traditions."
                            </blockquote>
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-paprika-400 to-pepper-600 flex items-center justify-center text-white font-serif text-xl font-bold">
                                    PL
                                </div>
                                <div>
                                    <p className="font-bold text-foreground">The PepperLeaf Family</p>
                                    <p className="text-sm text-muted-foreground">Founders, Carrying Forward Ammamma's Legacy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Story Paragraphs */}
                <ScrollReveal delay={0.2}>
                    <div className="max-w-3xl mx-auto mb-20 space-y-6 text-lg text-muted-foreground leading-relaxed">
                        <p>
                            It all began in a small village kitchen in <strong className="text-foreground">Duggirala, Andhra Pradesh</strong>, 
                            where our grandmother—Ammamma—spent over 40 years perfecting the art of pickling and spice-making. 
                            Her Avakaya was legendary in the village, with neighbors traveling miles just for a taste.
                        </p>
                        <p>
                            She sourced chilies directly from Guntur farmers, ground spices on the same stone mortar her mother used, 
                            and sun-dried ingredients under the coastal Andhra sun. There were no shortcuts—just patience, tradition, and an uncompromising love for authenticity.
                        </p>
                        <p>
                            When industrial packaged foods began replacing homemade traditions, we saw recipes being lost forever. 
                            In 2018, we made a promise: to bring <strong className="text-foreground">Ammamma's kitchen to every Indian home</strong>, 
                            without compromising on the methods that made her food unforgettable.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Timeline */}
                <div className="max-w-4xl mx-auto mb-20">
                    <ScrollReveal>
                        <h3 className="text-2xl font-serif font-bold text-center mb-12">Our Journey</h3>
                    </ScrollReveal>
                    
                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-pepper-200 dark:bg-pepper-700 -translate-x-1/2" />
                        
                        <div className="space-y-12">
                            {milestones.map((milestone, i) => (
                                <ScrollReveal key={i} delay={i * 0.15}>
                                    <div className={`relative flex items-center gap-6 md:gap-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                        {/* Dot */}
                                        <motion.div 
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.2, type: "spring" }}
                                            className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-paprika-500 border-4 border-background -translate-x-1/2 z-10"
                                        />
                                        
                                        {/* Content */}
                                        <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                                            <span className="inline-block px-3 py-1 rounded-full bg-paprika-100 dark:bg-paprika-900/30 text-paprika-600 dark:text-paprika-400 text-sm font-bold mb-2">
                                                {milestone.year}
                                            </span>
                                            <h4 className="text-xl font-bold text-foreground mb-2">{milestone.title}</h4>
                                            <p className="text-muted-foreground">{milestone.desc}</p>
                                        </div>
                                        
                                        {/* Spacer for alternating layout */}
                                        <div className="hidden md:block md:w-1/2" />
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Stats Strip */}
                <ScrollReveal delay={0.3}>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center p-6 rounded-2xl bg-background/80 backdrop-blur-sm border border-pepper-200/50 dark:border-pepper-700/30 shadow-soft hover:shadow-medium transition-shadow duration-300"
                            >
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-pepper-100 dark:bg-pepper-800/50 text-pepper-600 dark:text-pepper-400 mb-4">
                                    <stat.icon className="w-6 h-6" />
                                </div>
                                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                                <div className="text-sm text-muted-foreground">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}
