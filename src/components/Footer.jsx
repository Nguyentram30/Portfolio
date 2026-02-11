import React from 'react'
import { footerData } from '../data'

export default function Footer(){
  return (
    <footer id="contact" className="border-t border-[rgba(255,255,255,0.03)] mt-12">
      <div className="container mx-auto max-w-5xl py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-sm text-slate-300">Contact: <a href={`mailto:${footerData.email}`} className="text-accent">{footerData.email}</a></div>
        <div className="text-sm text-slate-500 ml-40">© {footerData.copyYear} Portfolio</div>
      </div>
    </footer>
  )
}
