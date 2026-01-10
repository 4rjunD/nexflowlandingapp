'use client';

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-react'

export function EnterpriseContact() {
    return (
        <section id="contact" className="py-24 md:py-32 bg-neutral-50">
            <div className="mx-auto max-w-4xl px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-neutral-900 font-[family-name:var(--font-playfair)] mb-6">
                        Ready to invest in your team's health?
                    </h2>
                    <p className="text-neutral-600 text-lg mb-10 max-w-2xl mx-auto">
                        Get in touch to learn how NexFlow can help your organization reduce sick days, boost productivity, and build a healthier workforce.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button
                            asChild
                            size="lg"
                            className="rounded-xl px-8 text-base bg-neutral-900 hover:bg-neutral-800 text-white"
                        >
                            <Link href="mailto:arjundixit@nexflowinc.com?subject=NexFlow%20Enterprise%20Inquiry">
                                <Mail className="w-4 h-4 mr-2" />
                                Contact for More Info
                            </Link>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="rounded-xl px-8 text-base border-neutral-300 text-neutral-700 hover:bg-neutral-100"
                        >
                            <Link href="https://cal.com/arjun-dixit-0nwkzi/30min" target="_blank">
                                Book a Demo
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
