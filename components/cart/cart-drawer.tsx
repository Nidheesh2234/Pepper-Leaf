"use client"

import { useCart } from "@/context/cart-context"
import { X, ShoppingBag, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CartItem } from "./cart-item"
import { motion, AnimatePresence } from "framer-motion"

export function CartDrawer() {
    const { items, isCartOpen, setIsCartOpen, cartTotal } = useCart()

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsCartOpen(false)}
                        className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed top-0 right-0 z-[70] h-full w-full sm:w-[400px] bg-background border-l border-border shadow-2xl flex flex-col"
                    >
                        <div className="flex items-center justify-between p-6 border-b border-border">
                            <h2 className="font-serif text-2xl font-bold flex items-center gap-2">
                                <ShoppingBag className="h-6 w-6 text-primary" />
                                Your Cart
                            </h2>
                            <Button variant="ghost" size="icon" onClick={() => setIsCartOpen(false)}>
                                <X className="h-5 w-5" />
                            </Button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6">
                            {items.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                                    <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                                        <ShoppingBag className="h-8 w-8 text-muted-foreground" />
                                    </div>
                                    <p className="text-muted-foreground">Your cart is empty.</p>
                                    <Button
                                        variant="outline"
                                        onClick={() => setIsCartOpen(false)}
                                    >
                                        Start Shopping
                                    </Button>
                                </div>
                            ) : (
                                <div className="space-y-2">
                                    {items.map((item) => (
                                        <CartItem key={item.id} {...item} />
                                    ))}
                                </div>
                            )}
                        </div>

                        {items.length > 0 && (
                            <div className="border-t border-border p-6 bg-muted/10 space-y-4">
                                <div className="flex justify-between items-center text-lg font-medium">
                                    <span>Subtotal</span>
                                    <span>₹{cartTotal}</span>
                                </div>
                                <p className="text-xs text-muted-foreground text-center">
                                    Shipping and taxes calculated at checkout.
                                </p>
                                <Button className="w-full h-12 text-lg rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg">
                                    Checkout <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
