import React from "react";
import { educationData } from "../data";
import { motion } from 'framer-motion'

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide mb-6">Education</h2>

        <div className="space-y-4">
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="card"
            >
              <h3 className="text-lg font-semibold">{edu.school}</h3>
              <div className="text-sm text-slate-300 mb-2"><strong>Major:</strong> {edu.major} • <span className="text-muted">{edu.period}</span></div>
              <p className="text-slate-300 text-sm">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
