"use client"

import Link from "next/link"
import { motion, AnimatePresence, Variants } from "framer-motion"
import { X, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MobileMenuProps {
    isOpen: boolean
    onClose: () => void
}

const menuVariants: Variants = {
    closed: {
        opacity: 0,
        x: "100%",
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 30
        }
    },
    open: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 30
        }
    }
}

const linkVariants: Variants = {
    closed: { opacity: 0, x: 20 },
    open: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: i * 0.1,
            type: "spring",
            stiffness: 300,
            damping: 30
        }
    })
}

const navLinks = [
    { href: "#best-sellers", label: "Best Sellers" },
    { href: "#why-us", label: "Why Us" },
    { href: "#process", label: "Our Process" },
    { href: "#reviews", label: "Reviews" },
]

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm md:hidden"
                    />

                    {/* Menu Drawer */}
                    <motion.div
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="fixed top-0 right-0 z-[70] h-full w-[80%] max-w-sm bg-background border-l border-border/40 shadow-2xl p-6 flex flex-col md:hidden"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <span className="font-serif text-2xl font-bold tracking-tight text-primary">
                                Menu
                            </span>
                            <Button variant="ghost" size="icon" onClick={onClose}>
                                <X className="h-6 w-6" />
                            </Button>
                        </div>

                        <nav className="flex flex-col gap-6 flex-1">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.href}
                                    custom={i}
                                    variants={linkVariants}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={onClose}
                                        className="text-2xl font-serif font-medium hover:text-primary transition-colors block"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        <div className="mt-auto space-y-4">
                            <Button className="w-full h-12 rounded-full text-lg gap-2" size="lg">
                                <ShoppingBag className="w-5 h-5" /> Shop Now
                            </Button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
