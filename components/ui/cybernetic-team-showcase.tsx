"use client";

import React, { useCallback } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';

// A utility function for class names
const cn = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(' ');

// --- TYPE SAFETY ---
interface TeamMember {
  name: string;
  title: string;
  bio: string;
  initials: string;
  linkedin?: string;
}

interface ModernTeamShowcaseProps {
  teamMembers: TeamMember[];
  tagline?: string;
}

// --- CODE ORGANIZATION ---
const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: (i: number) => ({
        y: 0,
        opacity: 1,
        transition: { type: "spring" as const, bounce: 0.4, duration: 0.8, delay: i * 0.15 }
    })
};

// --- PERFORMANCE & REUSABILITY ---
const TeamMemberCard = React.memo(({ member, index }: { member: TeamMember; index: number }) => {
    // --- MOTION HANDLER OPTIMIZATION ---
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30, bounce: 0.2 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30, bounce: 0.2 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    }, [x, y]);

    const handleMouseLeave = useCallback(() => {
        x.set(0);
        y.set(0);
    }, [x, y]);

    return (
        <motion.a
            href={member.linkedin || '#'}
            target={member.linkedin ? "_blank" : undefined}
            rel={member.linkedin ? "noopener noreferrer" : undefined}
            variants={cardVariants}
            custom={index}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="group relative aspect-[3/4] w-full rounded-xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-zinc-800 hover:border-teal-500/30 transition-all"
        >
            <div 
                style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}
                className="absolute inset-4 flex flex-col items-center text-center bg-zinc-900/70 backdrop-blur-md p-6 rounded-lg border border-zinc-800"
            >
                <div className="relative w-24 h-24 rounded-full mb-4 bg-gradient-to-br from-teal-500/20 to-blue-500/20 border-2 border-teal-500/30 flex items-center justify-center">
                    <span className="text-3xl font-bold text-teal-400">
                        {member.initials}
                    </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-sm text-teal-400 mb-2">{member.title}</p>
                <p className="text-xs text-zinc-400 mt-auto">{member.bio}</p>
            </div>
        </motion.a>
    );
});

TeamMemberCard.displayName = 'TeamMemberCard';

// The main team showcase component, now accepting team data as a prop
const ModernTeamShowcase: React.FC<ModernTeamShowcaseProps> = ({ teamMembers, tagline }) => {
    return (
        <div className="relative w-full min-h-screen bg-[#030303] flex flex-col items-center justify-center p-8 md:p-16 py-24 overflow-hidden">
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-teal-500/[0.03] blur-3xl"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center mb-16">
                <motion.h1 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
                    className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80"
                >
                    Meet the Team
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
                    className="text-lg text-zinc-400 max-w-2xl"
                >
                    {tagline || "Led by researchers from top institutions, combining clinical expertise with cutting-edge AI"}
                </motion.p>
            </div>

            <div className="relative z-10 w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                {teamMembers.map((member, index) => (
                    <TeamMemberCard key={member.name} member={member} index={index} />
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="relative z-10 mt-16 text-center"
            >
                <p className="text-sm text-zinc-500">
                    Backed by Character Capital • Working with Stanford, Harvard & Emory
                </p>
            </motion.div>
        </div>
    );
};

export default ModernTeamShowcase;