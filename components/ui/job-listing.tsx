"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useOnClickOutside } from "usehooks-ts"
import { Briefcase, Users, BarChart } from "lucide-react"

export interface Job {
  company: string
  title: string
  logo: React.ReactNode
  job_description: string
  salary: string
  location: string
  remote: string
  job_time: string
}

export interface JobListingComponentProps {
  jobs?: Job[]
  className?: string
  onJobClick?: (job: Job) => void
}

const nexflowJobs: Job[] = [
  {
    company: "NexFlow",
    title: "Clinical Partnerships Manager",
    logo: <Users className="w-10 h-10 text-teal-500" />,
    job_description: "Manages relationships with clinics and medspas, leads outreach, and coordinates onboarding. You'll be the bridge between our technology and healthcare providers, ensuring successful implementations and long-term partnerships.",
    salary: "$65,000–$90,000/year",
    location: "Remote",
    remote: "Yes",
    job_time: "Full-time"
  },
  {
    company: "NexFlow",
    title: "Machine Learning Engineer",
    logo: <Briefcase className="w-10 h-10 text-blue-500" />,
    job_description: "Develops and maintains predictive models for insulin resistance analysis. Work on our custom ensemble AI architecture, improve model performance, and collaborate with clinical researchers to validate predictions.",
    salary: "$80,000–$100,000/year",
    location: "Remote",
    remote: "Yes",
    job_time: "Full-time"
  },
  {
    company: "NexFlow",
    title: "Product & Data Analyst",
    logo: <BarChart className="w-10 h-10 text-rose-500" />,
    job_description: "Turns model outputs into actionable insights and visualizations for healthcare users. Create intuitive dashboards, analyze user data, and help clinicians make better decisions with our platform.",
    salary: "$70,000–$95,000/year",
    location: "Remote",
    remote: "Yes",
    job_time: "Full-time"
  },
]

export default function JobListingComponent({
  jobs = nexflowJobs,
  className,
  onJobClick,
}: JobListingComponentProps) {
  const [activeItem, setActiveItem] = useState<Job | null>(null)
  const ref = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>
  useOnClickOutside(ref, () => setActiveItem(null))

  useEffect(() => {
    function onKeyDown(event: { key: string }) {
      if (event.key === "Escape") {
        setActiveItem(null)
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  return (
    <section className="py-12 md:py-32 bg-[#030303] relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-4xl font-bold lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
            Join Our Mission
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Help us prevent diabetes before it starts. Work with cutting-edge AI and make a real impact on millions of lives.
          </p>
        </div>

        <AnimatePresence>
          {activeItem ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
            />
          ) : null}
        </AnimatePresence>

        <AnimatePresence>
          {activeItem ? (
            <div className="fixed inset-0 z-50 grid place-items-center p-4">
              <motion.div
                className="bg-zinc-900 border border-zinc-800 flex max-h-[90vh] w-full max-w-2xl cursor-default flex-col items-start gap-4 overflow-y-auto p-6 shadow-xl rounded-2xl"
                ref={ref}
                layoutId={`workItem-${activeItem.title}`}
              >
                <div className="flex w-full items-start gap-4">
                  <motion.div 
                    layoutId={`workItemLogo-${activeItem.title}`}
                    className="flex-shrink-0"
                  >
                    {activeItem.logo}
                  </motion.div>
                  <div className="flex grow flex-col gap-2">
                    <motion.div
                      className="text-white text-xl font-semibold"
                      layoutId={`workItemTitle-${activeItem.title}`}
                    >
                      {activeItem.title}
                    </motion.div>
                    <motion.div
                      className="text-teal-400 text-sm font-medium"
                      layoutId={`workItemCompany-${activeItem.title}`}
                    >
                      {activeItem.company}
                    </motion.div>
                    <motion.div
                      className="text-zinc-400 flex flex-wrap gap-3 text-sm"
                      layoutId={`workItemExtras-${activeItem.title}`}
                    >
                      <span>{activeItem.salary}</span>
                      <span>•</span>
                      <span>{activeItem.location}</span>
                      <span>•</span>
                      <span>{activeItem.job_time}</span>
                    </motion.div>
                  </div>
                </div>
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.05 } }}
                  className="text-zinc-300 text-sm leading-relaxed border-t border-zinc-800 pt-4"
                >
                  {activeItem.job_description}
                </motion.div>
                <motion.a
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  href="mailto:arjundixit3508@gmail.com?subject=NexFlow%20Job%20Application&body=Hi%2C%0A%0AI'm%20interested%20in%20applying%20for%20the%20position%20of%20[Job%20Title]%20at%20NexFlow.%0A%0APlease%20find%20my%20resume%20attached.%0A%0AThank%20you!"
                  className="w-full mt-4 px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-lg transition-colors text-center"
                >
                  Apply Now
                </motion.a>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>

        <div className={`relative flex flex-col gap-4 max-w-4xl mx-auto ${className || ""}`}>
          {jobs.map((role) => (
            <motion.div
              layoutId={`workItem-${role.title}`}
              key={role.title}
              className="group bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-zinc-800 hover:border-teal-500/30 flex w-full cursor-pointer flex-row items-center gap-4 p-4 shadow-sm hover:shadow-lg hover:shadow-teal-500/10 transition-all duration-300 rounded-xl"
              onClick={() => {
                setActiveItem(role)
                if (onJobClick) onJobClick(role)
              }}
            >
              <motion.div 
                layoutId={`workItemLogo-${role.title}`}
                className="flex-shrink-0"
              >
                {role.logo}
              </motion.div>
              <div className="flex w-full flex-col items-start justify-between gap-1">
                <motion.div
                  className="text-white font-semibold text-lg"
                  layoutId={`workItemTitle-${role.title}`}
                >
                  {role.title}
                </motion.div>
                <motion.div
                  className="text-teal-400 text-sm"
                  layoutId={`workItemCompany-${role.title}`}
                >
                  {role.company}
                </motion.div>
                <motion.div
                  className="text-zinc-400 flex flex-wrap gap-2 text-xs mt-1"
                  layoutId={`workItemExtras-${role.title}`}
                >
                  <span>{role.salary}</span>
                  <span>•</span>
                  <span>{role.location}</span>
                  <span>•</span>
                  <span>{role.job_time}</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-zinc-500">
            Don't see a perfect fit? Reach out anyway—we're always looking for exceptional talent.
          </p>
        </div>
      </div>
    </section>
  )
}