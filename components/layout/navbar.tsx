"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { ShoppingBag, Menu } from "lucide-react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { cn } from "@/lib/utils"
import { HoverStaggeredText } from "@/components/visuals/staggered-text"
import { MobileMenu } from "@/components/layout/mobile-menu"
import { useCart } from "@/context/cart-context"

export function Navbar() {
    const { scrollY } = useScroll()
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
    const { cartCount, setIsCartOpen } = useCart()

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50)
    })

    return (
        <>
            <motion.header
                className={cn(
                    "sticky top-0 z-50 w-full transition-all duration-300",
                    isScrolled
                        ? "border-b border-border/40 bg-background/80 backdrop-blur-md"
                        : "bg-transparent border-transparent"
                )}
            >
                <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4">
                    <Link href="/" className="mr-6 flex items-center space-x-2 overflow-hidden">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: isScrolled ? 1 : 0, y: isScrolled ? 0 : 20 }}
                            transition={{ duration: 0.3 }}
                            className="font-serif text-2xl font-bold tracking-tight text-primary block"
                        >
                            PepperLeaf
                        </motion.span>
                    </Link>
                    <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                        <Link href="#best-sellers" className="transition-colors hover:text-primary">Best Sellers</Link>
                        <Link href="#why-us" className="transition-colors hover:text-primary">Why Us</Link>
                        <Link href="#process" className="transition-colors hover:text-primary">Our Process</Link>
                        <Link href="#reviews" className="transition-colors hover:text-primary">Reviews</Link>
                    </nav>
                    <div className="flex items-center gap-2">
                        <ThemeToggle />
                        <Button
                            size="icon"
                            variant="ghost"
                            className="relative group"
                            onClick={() => setIsCartOpen(true)}
                        >
                            <ShoppingBag className="h-5 w-5 transition-transform group-hover:scale-110" />
                            {cartCount > 0 && (
                                <span className="absolute top-1 right-1 h-4 w-4 rounded-full bg-secondary text-[10px] font-bold text-white flex items-center justify-center ring-2 ring-background animate-in zoom-in">
                                    {cartCount}
                                </span>
                            )}
                        </Button>
                        <Button asChild className="hidden md:flex bg-primary hover:bg-primary/90 text-white rounded-full px-6 group overflow-hidden">
                            <Link href="/shop">
                                <span className="relative z-10">
                                    <HoverStaggeredText text="Shop Now" />
                                </span>
                            </Link>
                        </Button>
                        <Button
                            size="icon"
                            variant="ghost"
                            className="md:hidden"
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <Menu className="h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </motion.header>
            <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
        </>
    )
}
