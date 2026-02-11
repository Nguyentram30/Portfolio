import React from 'react'
import { footerData } from '../data'

export default function Footer(){
  return (
    <footer id="contact">
      <div className="container">
        <div>Liên hệ: <a href={`mailto:${footerData.email}`}>{footerData.email}</a></div>
        <div>© {footerData.copyYear} Postfolio</div>
      </div>
    </footer>
  )
}
