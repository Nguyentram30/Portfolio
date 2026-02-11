import React from 'react'
import { projectsData } from '../data'
import { motion } from 'framer-motion'

export default function Projects(){
  return (
    <section id="projects" className="section">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide mb-4">PROJECT</h2>
        <p className="text-slate-300 mb-6">Academic projects developed during my studies, focusing on practical applications and hands-on experience.</p>

        <div className="projects-grid">
          {projectsData.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity:0, y:10 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ delay: idx * 0.08 }}
              className="card rounded-2xl"
            >
              {/* <div className="h-40 bg-[rgba(255,255,255,0.02)] rounded-lg mb-4 flex items-center justify-center text-slate-400">Image</div> */}
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-slate-300 mb-4">{project.description}</p>
              <div className="flex items-center gap-3 mt-auto">
                <a href={project.link} className="text-sm font-medium text-accent hover:underline">View Details →</a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
