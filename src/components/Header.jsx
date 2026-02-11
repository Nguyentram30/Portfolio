import React from 'react'
import { useActiveSection } from '../hooks/useActiveSection'

export default function Header(){
  const activeSection = useActiveSection();

  const getHref = (id) => {
    return id === 'Hero' ? '#Hero' : `#${id}`;
  };

  const isActive = (id) => {
    return activeSection === id;
  };

  return (
    <header className="site-header">
      <div className="container">
        <div className="logo">NNT_Postfolio</div>
        <nav className="nav">
          <a 
            href="#Hero" 
            className={isActive('Hero') ? 'active' : ''}
          >
            ABOUT
          </a>
          <a 
            href="#education" 
            className={isActive('education') ? 'active' : ''}
          >
            EDUCATION
          </a>
          <a 
            href="#skills" 
            className={isActive('skills') ? 'active' : ''}
          >
            SKILLS
          </a>
          <a  
            href="#projects" 
            className={isActive('projects') ? 'active' : ''}
          >
            PROJECTS
          </a> 
          <a 
            href="#Info" 
            className={isActive('Info') ? 'active' : ''}
          >
            INFORMATION
          </a>                
        </nav>
      </div>
    </header>
  )
}
