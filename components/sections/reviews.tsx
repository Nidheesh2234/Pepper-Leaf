"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

import { ScrollReveal } from "@/components/visuals/scroll-reveal"

const reviews = [
    { name: "Priya R.", city: "Hyderabad", text: "The gongura pickle tastes exactly like my grandmother's. Absolutely authentic!", rating: 5 },
    { name: "Arjun K.", city: "Bangalore", text: "Finally found a brand that doesn't use vinegar or preservatives. The garlic podi is a game changer.", rating: 5 },
    { name: "Sneha M.", city: "Mumbai", text: "Packaging is so premium, I gifted the box to my boss and she loved it.", rating: 5 },
]

export function Reviews() {
    return (
        <section id="reviews" className="py-24 bg-stone-900 text-stone-100 relative overflow-hidden">
            {/* Gradient Orb */}
            <div className="absolute top-[-20%] left-[20%] w-[500px] h-[500px] bg-pepper-900/30 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[20%] w-[500px] h-[500px] bg-paprika-900/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="container px-4 relative z-10">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center p-2 mb-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                            <div className="flex -space-x-2 mr-3">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className={`w-8 h-8 rounded-full border-2 border-stone-900 bg-stone-700`} />
                                ))}
                            </div>
                            <span className="text-sm font-medium pr-2">Join 10,000+ Families</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold">Love from our Community</h2>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {reviews.map((r, i) => (
                        <ScrollReveal key={i} delay={i * 0.1}>
                            <Card className="bg-white/5 border-white/5 text-stone-100 backdrop-blur-md h-full hover:bg-white/10 transition-all hover:-translate-y-1 duration-300">
                                <CardContent className="p-8 flex flex-col h-full justify-between gap-6">
                                    <div className="space-y-4">
                                        <div className="flex gap-1">
                                            {[...Array(r.rating)].map((_, i) => <Star key={i} className="fill-yellow-500 text-yellow-500 w-4 h-4" />)}
                                        </div>
                                        <p className="text-lg leading-relaxed font-serif opacity-90">&quot;{r.text}&quot;</p>
                                    </div>
                                    <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pepper-500 to-pepper-700 flex items-center justify-center font-bold text-sm">
                                            {r.name.charAt(0)}
                                        </div>
                                        <div>
                                            <div className="font-bold text-sm">{r.name}</div>
                                            <div className="text-xs opacity-50">{r.city}</div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
