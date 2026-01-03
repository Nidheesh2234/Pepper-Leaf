"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { CheckCircle2, Package, ArrowRight, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Suspense } from "react"

function SuccessContent() {
    const searchParams = useSearchParams()
    const orderId = searchParams.get("orderId")

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8 p-4">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4"
            >
                <CheckCircle2 className="w-12 h-12" />
            </motion.div>

            <div className="space-y-4 max-w-md">
                <h1 className="text-4xl font-serif font-bold text-foreground">Order Confirmed!</h1>
                <p className="text-muted-foreground text-lg">
                    Thank you for your purchase. We have received your order and are getting it ready.
                </p>
                {orderId && (
                    <div className="bg-muted p-4 rounded-lg inline-block border border-border">
                        <p className="text-sm font-medium text-muted-foreground mb-1">Order ID</p>
                        <p className="font-mono text-lg font-bold tracking-wider">{orderId}</p>
                    </div>
                )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <Link href="/">
                    <Button variant="outline" size="lg" className="gap-2">
                        <Home className="w-4 h-4" /> Return Home
                    </Button>
                </Link>
                <Link href="/shop">
                    <Button size="lg" className="gap-2">
                        Continue Shopping <ArrowRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default function SuccessPage() {
    return (
        <div className="min-h-screen bg-background pt-24 pb-12">
            <Suspense fallback={<div>Loading...</div>}>
                <SuccessContent />
            </Suspense>
        </div>
    )
}
