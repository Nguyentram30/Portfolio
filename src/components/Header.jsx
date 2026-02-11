import React from 'react'
import { useActiveSection } from '../hooks/useActiveSection'
import { motion } from 'framer-motion'

const navItems = [
  { id: 'Hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'additional-info', label: 'Info' },
  { id: 'contact', label: 'Contact' },
]

export default function Header(){
  const activeSection = useActiveSection();

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="site-header"
    >
      <div className="container">
        <div className="logo">NNT_Postfolio</div>
        <nav className="nav flex items-center gap-4">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-sm font-medium px-2 py-1 rounded-md ${activeSection === item.id ? 'active' : ''}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  )
}
