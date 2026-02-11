import React from "react";
import { educationData } from "../data";
import { useIntersection } from "../hooks/useIntersection";

export default function Education() {
  const [ref, isVisible] = useIntersection();

  return (
    <section id="education" ref={ref} className={`container ${isVisible ? 'visible' : ''}`} style={{ paddingTop: '40px', paddingBottom: '40px' }}>
      <h3 style={{ marginTop: 24 }}>HỌC VẤN </h3>

      <div style={{ marginTop: 12 }}>
        {educationData.map((edu, index) => (
          <div 
            key={edu.id} 
            className={`card ${isVisible ? 'visible' : ''}`}
            style={{ 
              marginBottom: 16,
              animationDelay: `${index * 0.1}s`
            }}
          >
            <h3>{edu.school}</h3>
            <p><strong>Chuyên ngành:</strong> {edu.major}</p>
            <p><strong>Thời gian:</strong> {edu.period}</p>
            <p>{edu.description}</p>
          </div>
        ))}       
      </div>
    </section>
  );
}
