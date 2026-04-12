"use client";

import { portfolioData } from "@/data/portfolio";

function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : "255,255,255";
}

const tagSections = [
  { title: "Analyse de données", emoji: "📊", color: "#22d3ee", items: portfolioData.skills.data },
  { title: "Création de contenu", emoji: "🎨", color: "#F59E0B", items: portfolioData.skills.design },
  { title: "Soft skills", emoji: "🤝", color: "#34d399", items: portfolioData.skills.soft },
];

export default function Skills() {
  return (
    <>
      <section id="skills" style={{ padding: "6rem 1.5rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span style={{ color: "#a78bfa", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" }}>
              Ce que je sais faire
            </span>
            <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 700, color: "#fff", marginTop: "0.5rem" }}>
              Compétences
            </h2>
          </div>

          {/* Barres tech */}
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px", padding: "2rem", marginBottom: "2rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.75rem" }}>
              <span style={{ fontSize: "1.5rem" }}>💻</span>
              <h3 style={{ color: "#fff", fontWeight: 600, fontSize: "1.1rem", margin: 0 }}>Développement</h3>
            </div>
            <div className="skills-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
              {portfolioData.skills.tech.map((skill) => (
                <div key={skill.name}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                    <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem" }}>{skill.name}</span>
                    <span style={{ color: "#a78bfa", fontSize: "0.85rem", fontWeight: 600 }}>{skill.level}%</span>
                  </div>
                  <div style={{ height: "6px", background: "rgba(255,255,255,0.08)", borderRadius: "10px", overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${skill.level}%`, background: "linear-gradient(to right, #7C3AED, #06B6D4)", borderRadius: "10px" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="tags-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
            {tagSections.map((section) => (
              <div key={section.title} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px", padding: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                  <span style={{ fontSize: "1.5rem" }}>{section.emoji}</span>
                  <h3 style={{ color: "#fff", fontWeight: 600, fontSize: "0.95rem", margin: 0 }}>{section.title}</h3>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {section.items.map((item) => (
                    <span key={item} style={{ background: `rgba(${hexToRgb(section.color)}, 0.1)`, border: `1px solid rgba(${hexToRgb(section.color)}, 0.25)`, color: section.color, padding: "6px 14px", borderRadius: "50px", fontSize: "0.78rem", fontWeight: 500 }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
          .tags-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}