"use client"

import { useState, useEffect } from "react"
import { useCart } from "@/context/cart-context"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Loader2, CreditCard, Banknote, ShieldCheck } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

// Separator imported from UI components

export default function CheckoutPage() {
    const { items, cartTotal, clearCart } = useCart()
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [isOrderPlaced, setIsOrderPlaced] = useState(false)
    const [paymentMethod, setPaymentMethod] = useState<"card" | "cod">("card")

    // Redirect if cart is empty, but not if order was just placed
    useEffect(() => {
        if (items.length === 0 && !isOrderPlaced) {
            router.push("/")
        }
    }, [items, router, isOrderPlaced])

    const handlePlaceOrder = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000))

        // Generate mock order ID
        const orderId = "ORD-" + Math.random().toString(36).substr(2, 9).toUpperCase()

        setIsOrderPlaced(true)
        clearCart()
        router.push(`/checkout/success?orderId=${orderId}`)
    }

    if (items.length === 0) return null

    return (
        <div className="min-h-screen bg-muted/30 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8"
                >
                    {/* Left Column: Forms */}
                    <div className="space-y-8">
                        <div>
                            <h1 className="text-3xl font-serif font-bold text-foreground mb-2">Checkout</h1>
                            <p className="text-muted-foreground">Please enter your details to complete your order.</p>
                        </div>

                        <form id="checkout-form" onSubmit={handlePlaceOrder} className="space-y-6">
                            <Card className="border-border shadow-sm">
                                <CardHeader>
                                    <CardTitle>Contact Information</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="firstName">First Name</Label>
                                            <Input id="firstName" required placeholder="John" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="lastName">Last Name</Label>
                                            <Input id="lastName" required placeholder="Doe" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" required placeholder="john@example.com" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Phone</Label>
                                        <Input id="phone" type="tel" required placeholder="+91 98765 43210" />
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-border shadow-sm">
                                <CardHeader>
                                    <CardTitle>Shipping Address</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="address">Address</Label>
                                        <Input id="address" required placeholder="123 Spice Street" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="city">City</Label>
                                            <Input id="city" required placeholder="Mumbai" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="state">State</Label>
                                            <Input id="state" required placeholder="Maharashtra" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="zip">ZIP Code</Label>
                                            <Input id="zip" required placeholder="400001" />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </form>
                    </div>

                    {/* Right Column: Order Summary & Payment */}
                    <div className="space-y-6">
                        <Card className="border-border shadow-md bg-card/80 backdrop-blur top-24 sticky">
                            <CardHeader>
                                <CardTitle>Order Summary</CardTitle>
                                <CardDescription>Review your items before payment</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
                                    {items.map((item) => (
                                        <div key={item.id} className="flex gap-4 items-start">
                                            <div className="relative w-16 h-16 rounded-md overflow-hidden bg-muted flex-shrink-0">
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-sm font-medium">{item.name}</h4>
                                                <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                                            </div>
                                            <div className="font-medium text-sm">
                                                ₹{item.price * item.quantity}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <Separator />

                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Subtotal</span>
                                        <span>₹{cartTotal}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Shipping</span>
                                        <span className="text-green-600 font-medium">Free</span>
                                    </div>
                                    <div className="flex justify-between text-lg font-bold pt-2">
                                        <span>Total</span>
                                        <span>₹{cartTotal}</span>
                                    </div>
                                </div>

                                <div className="space-y-4 pt-4">
                                    <Label>Payment Method</Label>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div
                                            className={`
                                                cursor-pointer rounded-lg border p-4 flex flex-col items-center gap-2 transition-all
                                                ${paymentMethod === 'card' ? 'border-primary bg-primary/5 ring-1 ring-primary' : 'border-border hover:border-primary/50'}
                                            `}
                                            onClick={() => setPaymentMethod('card')}
                                        >
                                            <CreditCard className="h-6 w-6" />
                                            <span className="text-sm font-medium">Card</span>
                                        </div>
                                        <div
                                            className={`
                                                cursor-pointer rounded-lg border p-4 flex flex-col items-center gap-2 transition-all
                                                ${paymentMethod === 'cod' ? 'border-primary bg-primary/5 ring-1 ring-primary' : 'border-border hover:border-primary/50'}
                                            `}
                                            onClick={() => setPaymentMethod('cod')}
                                        >
                                            <Banknote className="h-6 w-6" />
                                            <span className="text-sm font-medium">Cash on Delivery</span>
                                        </div>
                                    </div>

                                    {paymentMethod === 'card' && (
                                        <div className="space-y-4 pt-2 border-t border-border mt-4">
                                            <div className="space-y-2">
                                                <Label>Card Number</Label>
                                                <Input placeholder="0000 0000 0000 0000" />
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label>Expiry</Label>
                                                    <Input placeholder="MM/YY" />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label>CVC</Label>
                                                    <Input placeholder="123" />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                            <CardFooter className="flex flex-col gap-4">
                                <Button
                                    className="w-full h-12 text-lg"
                                    size="lg"
                                    onClick={(e) => {
                                        const form = document.getElementById('checkout-form') as HTMLFormElement
                                        if (form.checkValidity()) {
                                            handlePlaceOrder(e)
                                        } else {
                                            form.reportValidity()
                                        }
                                    }}
                                    disabled={isLoading}
                                >
                                    {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                    {isLoading ? "Processing..." : `Pay ₹${cartTotal}`}
                                </Button>
                                <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-1">
                                    <ShieldCheck className="h-3 w-3" /> Secure Checkout
                                </p>
                            </CardFooter>
                        </Card>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
