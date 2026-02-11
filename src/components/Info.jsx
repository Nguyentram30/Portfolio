import React from "react";
import { additionalInfoData } from "../data";
import { useIntersection } from "../hooks/useIntersection";

export default function AdditionalInfo() {
  const [ref, isVisible] = useIntersection();

  return (
    <section id="additional-info" ref={ref} className={`container ${isVisible ? 'visible' : ''}`} style={{ paddingTop: '40px', paddingBottom: '40px' }}>
      <h2 style={{ marginTop: 24 }}>THÔNG TIN BỔ SUNG</h2>
      <hr style={{ margin: "12px 0 24px 0" }} />

      {additionalInfoData.map((item, index) => (
        <div 
          key={item.id} 
          style={{ 
            marginBottom: 24,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: `all 0.5s ease-out ${index * 0.1}s`
          }}
        >
          <h3>{item.title}:</h3>
          <p style={{ marginTop: 8, lineHeight: "1.6" }}>
            {item.content}
          </p>
        </div>
      ))}
    </section>
  );
}
