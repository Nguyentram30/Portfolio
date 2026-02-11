import React from 'react'
import { aboutData } from '../data'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <section id="about" className="section">
      <div className="container mx-auto max-w-5xl">
        <motion.div initial={{ opacity:0, y:8 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }} className="card">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide mb-4">{aboutData.title}</h2>
          {aboutData.paragraphs.map((p, i) => (
            <p key={i} className="text-slate-300 mb-3">{p}</p>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
