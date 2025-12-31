"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/visuals/scroll-reveal"
import { ProductCard } from "@/components/visuals/product-card"
import { products } from "@/lib/products"

export function BestSellers() {
    return (
        <section id="best-sellers" className="py-24 bg-background">
            <div className="container px-4">
                <div className="text-center mb-16 space-y-4">
                    <Badge variant="pepper" className="mb-2 uppercase tracking-widest shadow-sm">Customer Favorites</Badge>
                    <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground">Our Best Sellers</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Traditional recipes passed down through generations. Made in small batches every week.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.slice(0, 6).map((product, index) => (
                        <ScrollReveal key={product.id} delay={index * 0.1}>
                            <ProductCard {...product} />
                        </ScrollReveal>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Button asChild variant="outline" size="lg" className="rounded-full px-8 hover:bg-pepper-50 hover:text-pepper-700 hover:border-pepper-300">
                        <Link href="/shop">View All Products</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
