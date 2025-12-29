"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/visuals/scroll-reveal"
import { ProductCard } from "@/components/visuals/product-card"

const products = [
    {
        id: 1,
        name: "Gongura Pickle",
        desc: "Tangy sorrel leaves with Guntur chilli.",
        price: "₹349",
        heat: 4,
        image: "/images/products/gongura-pickle.png"
    },
    {
        id: 2,
        name: "Avakaya Pickle",
        desc: "The legendary Andhra mango pickle.",
        price: "₹349",
        heat: 5,
        image: "/images/products/avakaya-pickle.png"
    },
    {
        id: 3,
        name: "Garlic Podi",
        desc: "Crunchy, spicy garlic sprinkle.",
        price: "₹249",
        heat: 3,
        image: "/images/products/garlic-podi.png"
    },
    {
        id: 4,
        name: "Sambar Masala",
        desc: "Traditional slow-roast blend.",
        price: "₹199",
        heat: 2,
        image: "/images/products/sambar-masala.png"
    },
    {
        id: 5,
        name: "Chettinad Masala",
        desc: "Complex, aromatic, and bold.",
        price: "₹229",
        heat: 4,
        image: "/images/products/chettinad-masala.png"
    },
    {
        id: 6,
        name: "Curry Leaf Podi",
        desc: "Aromatic karivepaku powder.",
        price: "₹249",
        heat: 2,
        image: "/images/products/curry-leaf-podi.png"
    }
]

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
                    {products.map((product, index) => (
                        <ScrollReveal key={product.id} delay={index * 0.1}>
                            <ProductCard
                                title={product.name}
                                price={product.price}
                                image={product.image}
                                tag={product.heat > 3 ? "Spicy" : "Classic"}
                            />
                        </ScrollReveal>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Button variant="outline" size="lg" className="rounded-full px-8 hover:bg-pepper-50 hover:text-pepper-700 hover:border-pepper-300">
                        View All Products
                    </Button>
                </div>
            </div>
        </section>
    )
}
