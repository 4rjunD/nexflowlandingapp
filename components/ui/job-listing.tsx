"use client"

import { motion } from "framer-motion"

export default function JobListingComponent() {
  return (
    <section className="py-12 md:py-32 bg-[#030303] relative">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-4xl font-bold lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
            Careers
          </h2>
          <h3 className="mb-6 text-3xl font-semibold text-teal-400">
            Coming Soon!
          </h3>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-4">
            We're building an amazing team. Stay tuned for exciting opportunities to join our mission.
          </p>
          <p className="text-base text-zinc-500">
            Competitive salary range: $50,000 - $100,000+ depending on role and experience
          </p>
        </motion.div>
      </div>
    </section>
  )
}