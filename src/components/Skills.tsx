"use client";

import { portfolioData } from "@/data/portfolio";

function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : "255,255,255";
}

const DevIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/>
    <polyline points="8 6 2 12 8 18"/>
  </svg>
);

const DataIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/>
    <line x1="12" y1="20" x2="12" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="14"/>
  </svg>
);

const ContentIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20h9"/>
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
  </svg>
);

const HeartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);

const tagSections = [
  { title: "Analyse de données", icon: <DataIcon />, color: "#22d3ee", items: portfolioData.skills.data },
  { title: "Création de contenu", icon: <ContentIcon />, color: "#F59E0B", items: portfolioData.skills.design },
  { title: "Soft skills", icon: <HeartIcon />, color: "#34d399", items: portfolioData.skills.soft },
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

          {/* Dev - tags */}
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px", padding: "2rem", marginBottom: "2rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <DevIcon />
              <h3 style={{ color: "#fff", fontWeight: 600, fontSize: "1.1rem", margin: 0 }}>Développement</h3>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {portfolioData.skills.tech.map((skill) => (
                <span key={skill.name} style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.25)", color: "#a78bfa", padding: "6px 16px", borderRadius: "50px", fontSize: "0.82rem", fontWeight: 500 }}>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Autres sections */}
          <div className="tags-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
            {tagSections.map((section) => (
              <div key={section.title} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px", padding: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                  {section.icon}
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
          .tags-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}