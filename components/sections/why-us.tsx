"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Leaf, Heart, Truck } from "lucide-react"
import { ScrollReveal } from "@/components/visuals/scroll-reveal"
import { ParallaxText } from "@/components/visuals/parallax-text"

const features = [
    {
        icon: Leaf,
        title: "100% Natural Sourcing",
        desc: "We source chilies from Guntur and turmeric from Duggirala directly from farmers."
    },
    {
        icon: ShieldCheck,
        title: "Lab Tested Hygiene",
        desc: "Every batch is tested for safety while maintaining traditional preparation methods."
    },
    {
        icon: Heart,
        title: "Traditional Recipes",
        desc: "Recipes preserved from our grandmother's kitchen, using stone-grinding techniques."
    },
    {
        icon: Truck,
        title: "Sealed Fresh",
        desc: "Premium glass jars sealed immediately after preparation to lock in the aroma."
    }
]

export function WhyUs() {
    return (
        <section id="why-us" className="py-32 bg-pepper-50 dark:bg-pepper-950/20 relative overflow-hidden">
            {/* Background Parallax */}
            <div className="absolute top-10 w-full z-0 text-pepper-900/5 dark:text-pepper-100/5 pointer-events-none">
                <ParallaxText baseVelocity={-2}>Authentic • Pure • Tasty •</ParallaxText>
                <ParallaxText baseVelocity={2}>Handmade • Fresh • Spicy •</ParallaxText>
            </div>

            <div className="container px-4 relative z-10">
                <ScrollReveal>
                    <div className="text-center max-w-3xl mx-auto mb-20 sticky top-24 z-20 mix-blend-multiply dark:mix-blend-screen bg-background/5 p-4 rounded-xl backdrop-blur-[2px]">
                        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-foreground">Why PepperLeaf?</h2>
                        <p className="text-lg md:text-xl text-muted-foreground">It’s not just about the spice, it’s about the story, the soil, and the soul.</p>
                    </div>
                </ScrollReveal>

                {/* Staggered Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
                    {/* Item 1 - Large Span */}
                    <div className="lg:col-span-8 group relative overflow-hidden rounded-[2rem] bg-white dark:bg-stone-900 p-8 md:p-12 shadow-sm hover:shadow-xl transition-all duration-500 border border-pepper-100 dark:border-pepper-900 min-h-[300px] flex flex-col justify-between">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-pepper-100/50 dark:bg-pepper-900/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-pepper-200/50 transition-colors" />
                        <div className="relative z-10">
                            <div className="w-16 h-16 rounded-full bg-pepper-100 flex items-center justify-center text-pepper-600 mb-6 group-hover:scale-110 transition-transform">
                                <Leaf className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-serif font-bold mb-4">100% Natural Sourcing</h3>
                            <p className="text-lg text-muted-foreground max-w-md">
                                We don't use middlemen. We source chilies directly from Guntur and turmeric from Duggirala farmers, ensuring fair prices and the highest quality crop.
                            </p>
                        </div>
                    </div>

                    {/* Item 2 - Vertical */}
                    <div className="lg:col-span-4 lg:row-span-2 group relative overflow-hidden rounded-[2rem] bg-paprika-50 dark:bg-paprika-950/20 p-8 md:p-12 shadow-sm hover:shadow-xl transition-all duration-500 border border-paprika-100 dark:border-paprika-900 flex flex-col justify-center text-center">
                        <div className="w-20 h-20 rounded-full bg-paprika-100 mx-auto flex items-center justify-center text-paprika-600 mb-8 group-hover:rotate-12 transition-transform">
                            <Heart className="w-10 h-10" />
                        </div>
                        <h3 className="text-2xl font-serif font-bold mb-4">Traditional Recipes</h3>
                        <p className="text-muted-foreground">
                            Preserved from our grandmother's kitchen, using stone-grinding techniques that keep the heat alive.
                        </p>
                    </div>

                    {/* Item 3 */}
                    <div className="lg:col-span-4 group relative overflow-hidden rounded-[2rem] bg-white dark:bg-stone-900 p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-pepper-100 dark:border-pepper-900">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center text-blue-600">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Lab Tested</h3>
                                <p className="text-sm text-muted-foreground">Every batch tested for safety, zero color, zero preservatives.</p>
                            </div>
                        </div>
                    </div>

                    {/* Item 4 */}
                    <div className="lg:col-span-4 group relative overflow-hidden rounded-[2rem] bg-white dark:bg-stone-900 p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-pepper-100 dark:border-pepper-900">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center text-green-600">
                                <Truck className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Freshly Sealed</h3>
                                <p className="text-sm text-muted-foreground">Premium glass jars sealed immediately to lock in the aroma.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
