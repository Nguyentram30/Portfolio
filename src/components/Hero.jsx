import React from 'react'
import { motion } from 'framer-motion'
import { heroData } from '../data'

const techTags = ['Next.js', 'TailwindCSS', 'TypeScript']

export default function Hero(){
  return (
    <section id="Hero" className="min-h-screen flex items-center">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-wrap gap-2 mb-6">
            {techTags.map((t) => (
              <span key={t} className="text-xs px-3 py-1 rounded-full bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.03)] text-sky-300">{t}</span>
            ))}
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Hello, I&apos;m <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent2">{heroData.name}</span>
          </h1>

          <p className="mt-6 text-lg text-slate-300 max-w-3xl">A Cloud & DevOps enthusiast focused on infrastructure automation, CI/CD and reliable systems.</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-accent to-accent2 text-black shadow-lg hover:translate-y-[-2px] transition-transform">View Projects</a>
            <a href="#contact" className="inline-flex items-center px-5 py-3 rounded-full text-sm font-medium border border-[rgba(255,255,255,0.06)] text-slate-200 hover:bg-[rgba(255,255,255,0.02)] transition">Contact</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
