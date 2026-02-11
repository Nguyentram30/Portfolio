import React from 'react'
import { projectsData } from '../data'
import { useIntersection } from '../hooks/useIntersection'

export default function Projects(){
  const [ref, isVisible] = useIntersection();

  return (
    <section id="projects" ref={ref} className={`container ${isVisible ? 'visible' : ''}`} style={{ paddingTop: '40px', paddingBottom: '40px' }}>
      <h3 style={{marginTop:24}}> DỰ ÁN CÁ NHÂN </h3>
      <div className="projects-grid" style={{marginTop:12}}>
        {projectsData.map((project, index) => (
          <article 
            key={project.id} 
            className={`card ${isVisible ? 'visible' : ''}`}
            style={{
              animationDelay: `${index * 0.1}s`
            }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} style ={{marginTop: 'auto', textDecoration: 'none', color: '#0cdef5'}}>Xem chi tiết →</a>
          </article>
        ))}
      </div>
    </section>
  )
}
