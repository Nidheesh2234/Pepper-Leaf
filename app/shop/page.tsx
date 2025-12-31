"use client"

import { motion } from "framer-motion"
import { products } from "@/lib/products"
import { ProductCard } from "@/components/visuals/product-card"
import { ScrollReveal } from "@/components/visuals/scroll-reveal"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export default function ShopPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <div className="pt-24 pb-12 bg-pepper-50 dark:bg-pepper-950/20">
                <div className="container px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-serif font-bold mb-4 text-primary"
                    >
                        Our Collection
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto"
                    >
                        Explore our full range of hand-ground spices, sun-dried pickles, and authentic masala blends.
                    </motion.p>
                </div>
            </div>

            <section className="py-16 container px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
                    {products.map((product, index) => (
                        <ScrollReveal key={product.id} delay={index * 0.05}>
                            <ProductCard {...product} />
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    )
}
