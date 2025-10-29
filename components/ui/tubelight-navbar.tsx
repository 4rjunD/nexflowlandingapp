"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { LucideIcon, Home, Zap, DollarSign, Users, Briefcase } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items?: NavItem[]
  className?: string
}

const defaultItems: NavItem[] = [
  {
    name: "Home",
    url: "#",
    icon: Home,
  },
  {
    name: "Features",
    url: "#features",
    icon: Zap,
  },
  {
    name: "Pricing",
    url: "#pricing",
    icon: DollarSign,
  },
  {
    name: "Team",
    url: "#team",
    icon: Users,
  },
  {
    name: "Careers",
    url: "#careers",
    icon: Briefcase,
  },
]

export function NavBar({ items = defaultItems, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <>
      {/* Hiring Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-teal-600 to-blue-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-sm font-medium">
          <Briefcase className="w-4 h-4" />
          <span>We're hiring! Join our mission to transform healthcare.</span>
          <a 
            href="#careers" 
            className="underline hover:text-teal-100 transition-colors ml-2"
          >
            View open positions →
          </a>
        </div>
      </div>

      {/* Navigation */}
      <div
        className={cn(
          "fixed top-12 left-1/2 -translate-x-1/2 z-50 pt-4",
          className,
        )}
      >
        <div className="flex items-center gap-3 bg-zinc-900/80 border border-zinc-800 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
          {items.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.name

            return (
              <Link
                key={item.name}
                href={item.url}
                onClick={() => setActiveTab(item.name)}
                className={cn(
                  "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                  "text-zinc-400 hover:text-white",
                  isActive && "bg-zinc-800 text-white",
                )}
              >
                <span className="hidden md:inline">{item.name}</span>
                <span className="md:hidden">
                  <Icon size={18} strokeWidth={2.5} />
                </span>
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full bg-teal-500/10 rounded-full -z-10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-teal-500 rounded-t-full">
                      <div className="absolute w-12 h-6 bg-teal-500/20 rounded-full blur-md -top-2 -left-2" />
                      <div className="absolute w-8 h-6 bg-teal-500/20 rounded-full blur-md -top-1" />
                      <div className="absolute w-4 h-4 bg-teal-500/20 rounded-full blur-sm top-0 left-2" />
                    </div>
                  </motion.div>
                )}
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}