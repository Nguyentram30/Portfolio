import React from "react";
import { additionalInfoData } from "../data";
import { motion } from 'framer-motion'

export default function AdditionalInfo() {
  return (
    <section id="additional-info" className="section">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide mb-4 mt-8">Additional Information</h2>
        <div className="space-y-6">
          {additionalInfoData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity:0, x:-8 }}
              whileInView={{ opacity:1, x:0 }}
              viewport={{ once:true }}
              transition={{ delay: idx * 0.08 }}
              className="p-4 border-l-4 border-[rgba(14,165,233,0.08)] card"
            >
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-300 text-sm">{item.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
