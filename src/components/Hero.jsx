import React from 'react'
import { heroData } from '../data'

export default function Hero(){
  return (
    <section id="Hero" className="hero fade-in-up">
      <div className="container">
        <img src={heroData.avatar} alt={heroData.name} className="avatar" />
        <h2>Xin chào — Tôi là {heroData.name}</h2>
        <p>{heroData.bio}</p>
        
        <a className="btn" href={heroData.ctaLink}>{heroData.ctaText}</a>
      </div>
    </section>
  )
}
