"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { useCart } from "@/context/cart-context"

import { Product } from "@/lib/products"

interface ProductCardProps extends Product { }

export function ProductCard(product: ProductCardProps) {
    const { addToCart } = useCart()

    return (
        <motion.div
            className="group relative bg-card rounded-2xl overflow-hidden border border-transparent shadow-soft hover:shadow-medium hover:border-pepper-200/50 dark:hover:shadow-glow transition-all duration-300 transform hover:-translate-y-2"
        >
            <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-md text-xs font-semibold text-pepper-700 uppercase tracking-wider">
                    {product.tag}
                </span>
            </div>

            <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted/20">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4 transition-transform duration-700 ease-out group-hover:scale-105"
                />
            </div>

            <div className="p-5">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">{product.name}</h3>
                    <span className="text-lg font-medium text-muted-foreground">₹{product.price}</span>
                </div>

                <Button
                    className="w-full bg-transparent border-2 border-pepper-500 text-pepper-600 hover:text-white hover:bg-pepper-600 rounded-full font-bold uppercase tracking-wider transition-all duration-300"
                    onClick={() => addToCart(product)}
                >
                    Add to Cart <Plus className="ml-2 w-4 h-4" />
                </Button>
            </div>
        </motion.div>
    )
}
