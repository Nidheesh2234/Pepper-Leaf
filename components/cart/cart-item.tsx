"use client"

import Image from "next/image"
import { Minus, Plus, Trash2 } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { Button } from "@/components/ui/button"

interface CartItemProps {
    id: number
    name: string
    price: number
    image: string
    quantity: number
}

export function CartItem({ id, name, price, image, quantity }: CartItemProps) {
    const { updateQuantity, removeFromCart } = useCart()

    return (
        <div className="flex gap-4 py-4 border-b border-border/50 first:pt-0 last:border-0">
            <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md bg-muted/20">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-contain p-2"
                />
            </div>

            <div className="flex flex-1 flex-col justify-between">
                <div className="flex justify-between items-start gap-2">
                    <h3 className="font-serif font-medium text-foreground line-clamp-2">{name}</h3>
                    <button
                        onClick={() => removeFromCart(id)}
                        className="text-muted-foreground hover:text-destructive transition-colors"
                    >
                        <Trash2 className="h-4 w-4" />
                    </button>
                </div>

                <div className="flex items-center justify-between mt-2">
                    <span className="font-medium text-pepper-600">₹{price * quantity}</span>

                    <div className="flex items-center gap-1 bg-muted/30 rounded-full p-1">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 rounded-full hover:bg-background shadow-sm"
                            onClick={() => updateQuantity(id, quantity - 1)}
                        >
                            <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-6 text-center text-sm font-medium">{quantity}</span>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 rounded-full hover:bg-background shadow-sm"
                            onClick={() => updateQuantity(id, quantity + 1)}
                        >
                            <Plus className="h-3 w-3" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
