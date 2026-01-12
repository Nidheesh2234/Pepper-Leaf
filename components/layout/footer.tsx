"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export function Footer() {
    return (
        <footer className="relative bg-stone-950 text-stone-300 overflow-hidden pt-24 pb-12">
            {/* Organic Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")` }} />

            {/* Background Gradients */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-pepper-900/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-paprika-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="block">
                            <span className="font-serif text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-stone-400">
                                PepperLeaf
                            </span>
                        </Link>
                        <p className="text-stone-400 leading-relaxed max-w-xs">
                            Hand-ground spices and sun-dried pickles. Bringing the authentic taste of Andhra kitchens to the world, one jar at a time.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Placeholders with organic shapes */}
                            {['I', 'F', 'T', 'Y'].map((s, i) => (
                                <div key={i} className="w-10 h-10 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center hover:border-pepper-500 hover:text-pepper-400 transition-colors cursor-pointer">
                                    {s}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation - Shop */}
                    <div>
                        <h4 className="font-bold text-white mb-6 tracking-wide">Shop</h4>
                        <ul className="space-y-4">
                            <li><Link href="/shop" className="hover:text-pepper-400 transition-colors">Best Sellers</Link></li>
                            <li><Link href="/shop?cat=pickles" className="hover:text-pepper-400 transition-colors">Pickles</Link></li>
                            <li><Link href="/shop?cat=spices" className="hover:text-pepper-400 transition-colors">Spices & Masalas</Link></li>
                            <li><Link href="/shop?cat=podis" className="hover:text-pepper-400 transition-colors">Podis</Link></li>
                            <li><Link href="/shop?cat=gifts" className="hover:text-pepper-400 transition-colors">Gift Boxes</Link></li>
                        </ul>
                    </div>

                    {/* Navigation - Company */}
                    <div>
                        <h4 className="font-bold text-white mb-6 tracking-wide">Company</h4>
                        <ul className="space-y-4">
                            <li><Link href="/#our-story" className="hover:text-pepper-400 transition-colors">Our Story</Link></li>
                            <li><Link href="/contact" className="hover:text-pepper-400 transition-colors">Contact Us</Link></li>
                            <li><Link href="/faq" className="hover:text-pepper-400 transition-colors">FAQs</Link></li>
                            <li><Link href="/shipping" className="hover:text-pepper-400 transition-colors">Shipping & Returns</Link></li>
                            <li><Link href="/privacy" className="hover:text-pepper-400 transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter - Organic Input */}
                    <div>
                        <h4 className="font-bold text-white mb-6 tracking-wide">Stay Spicy</h4>
                        <p className="text-stone-400 mb-4 text-sm">Join our family for secret recipes and early access to new batches.</p>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="w-full bg-stone-900 border border-stone-800 rounded-2xl px-4 py-3 text-stone-200 focus:outline-none focus:border-pepper-500 focus:ring-1 focus:ring-pepper-500 transition-all placeholder:text-stone-600"
                            />
                            <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-pepper-600 hover:bg-pepper-500 text-white px-4 rounded-xl text-sm font-medium transition-colors">
                                Join
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-stone-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-stone-500">
                    <p>© 2024 PepperLeaf Spices. All rights reserved.</p>
                    <p className="flex items-center gap-2">
                        Made with <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="text-red-500">♥</motion.span> in Andhra
                    </p>
                </div>
            </div>
        </footer>
    )
}
