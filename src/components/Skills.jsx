import React from "react";
import { skillsData } from "../data";
import { motion } from 'framer-motion'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide mb-6">Skills</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div initial={{ opacity:0, y:8 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5 }}>
            <div className="card">
              <h3 className="text-lg font-semibold mb-3">Technical Skills</h3>
              <ul className="space-y-3">
                {skillsData.technical.flatMap(s => s.items).map((skill) => (
                  <li key={skill} className="text-sm text-slate-300">• {skill}</li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div initial={{ opacity:0, y:8 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}>
            <div className="card">
              <h3 className="text-lg font-semibold mb-3">Soft Skills</h3>
              <ul className="space-y-2">
                {skillsData.soft.flatMap(s => s.items).map((item) => (
                  <li key={item} className="text-sm text-slate-300">• {item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
