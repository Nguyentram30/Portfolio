import React from "react";
import { skillsData } from "../data";
import { useIntersection } from "../hooks/useIntersection";

export default function Skills() {
  const [ref, isVisible] = useIntersection();

  return (
    <section id="skills" ref={ref} className={`container ${isVisible ? 'visible' : ''}`} style={{ paddingTop: '40px', paddingBottom: '40px' }}>
      {/* Kỹ năng chuyên môn */}
      <div className={`card ${isVisible ? 'visible' : ''}`} style={{ marginBottom: 24, animationDelay: '0s' }}>
        <h3 style={{ marginTop: 0, marginBottom: 16 }}>Kỹ năng chuyên môn</h3>
        <ul style={{ marginTop: 0, lineHeight: "1.8" }}>
          {skillsData.technical.map((skill) => (
            <li key={skill.id}>
              <strong>{skill.category}:</strong> {skill.items.join(", ")}.
            </li>
          ))}
        </ul>
      </div>

      {/* Kỹ năng mềm */}
      <div className={`card ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '0.1s' }}>
        <h3 style={{ marginTop: 0, marginBottom: 16 }}>Kỹ năng mềm</h3>
        <ul style={{ marginTop: 0, lineHeight: "1.8" }}>
          {skillsData.soft.map((skill) => (
            <li key={skill.id}>
              {skill.items.length > 1 ? (
                <>
                  <strong>{skill.category}:</strong> {skill.items.join(", ")}.
                </>
              ) : (
                skill.items.join(", ")
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
