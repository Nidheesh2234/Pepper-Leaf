"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/visuals/scroll-reveal"
import { ProductCard } from "@/components/visuals/product-card" // Keeping for type safety / if needed, though we inline the card design now
import { ArrowRight } from "lucide-react"
import { products } from "@/lib/products"

export function BestSellers() {
    // We'll use a simple ref-less approach for the horizontal scroll for now, 
    // or we can add drag-to-scroll functionality later. 
    // Using simple native overflow scrolling with hidden scrollbar.

    return (
        <section id="best-sellers" className="py-24 bg-background relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-paprika-100/30 dark:bg-paprika-900/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-pepper-100/30 dark:bg-pepper-900/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container relative z-10">
                <div className="flex flex-col lg:flex-row items-end justify-between mb-12 px-4 gap-6">
                    <div className="space-y-4 max-w-2xl">
                        <Badge variant="pepper" className="mb-2 uppercase tracking-widest shadow-sm bg-pepper-100 text-pepper-800 border-0">
                            Kitchen Favorites
                        </Badge>
                        <h2 className="text-4xl lg:text-6xl font-serif font-bold text-foreground">
                            Our Best <span className="italic text-paprika-500">Creations</span>
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Crafted weekly in small batches. These disappear fast.
                        </p>
                    </div>
                    <div className="hidden lg:block">
                        <Button asChild variant="ghost" className="group text-lg font-medium hover:bg-transparent hover:text-paprika-500">
                            <Link href="/shop" className="flex items-center gap-2">
                                View All Products <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Horizontal Scrolling Container */}
                <div className="flex overflow-x-auto pb-12 pt-4 px-4 -mx-4 gap-6 snap-x snap-mandatory hide-scrollbar">
                    {products.slice(0, 6).map((product, index) => (
                        <div key={product.id} className="min-w-[280px] md:min-w-[350px] snap-center">
                            <ScrollReveal delay={index * 0.1}>
                                <div className="group relative bg-white dark:bg-stone-900 rounded-3xl p-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-transparent hover:border-pepper-200/50">
                                    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-4 bg-pepper-50 dark:bg-stone-800">
                                        {/* Simple organic shape behind image */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-pepper-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        {product.tag === "Best Seller" && (
                                            <span className="absolute top-3 left-3 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full shadow-sm text-pepper-700 uppercase tracking-wider">
                                                Fast Moving
                                            </span>
                                        )}
                                    </div>
                                    <div className="space-y-2 px-2">
                                        <div className="flex justify-between items-start">
                                            <h3 className="font-serif text-2xl font-bold group-hover:text-paprika-600 transition-colors">
                                                {product.name}
                                            </h3>
                                            <span className="font-medium text-lg text-pepper-700 dark:text-pepper-400">
                                                ₹{product.price}
                                            </span>
                                        </div>
                                        <p className="text-muted-foreground text-sm line-clamp-2">
                                            {product.description}
                                        </p>
                                        <Button className="w-full mt-4 rounded-xl bg-pepper-100 text-pepper-800 hover:bg-pepper-600 hover:text-white transition-colors shadow-none font-bold">
                                            Add to Cart
                                        </Button>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center lg:hidden">
                    <Button asChild size="lg" className="rounded-full px-8 w-full bg-pepper-600 text-white shadow-glow">
                        <Link href="/shop">View All Products</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
