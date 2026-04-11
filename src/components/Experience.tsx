"use client";

import { portfolioData } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "6rem 2rem", background: "#0F0F0F" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Titre */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span style={{ color: "#a78bfa", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" }}>
            Mon parcours
          </span>
          <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#fff", marginTop: "0.5rem" }}>
            Expériences & Formation
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }}>

          {/* Expériences */}
          <div>
            <h3 style={{ color: "#22d3ee", fontWeight: 600, fontSize: "1rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span>⚡</span> Expériences
            </h3>

            <div style={{ position: "relative" }}>
              {/* Ligne verticale */}
              <div style={{ position: "absolute", left: "11px", top: 0, bottom: 0, width: "2px", background: "linear-gradient(to bottom, #7C3AED, #06B6D4, transparent)" }} />

              <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                {portfolioData.experiences.map((exp) => (
                  <div key={exp.id} style={{ paddingLeft: "2.5rem", position: "relative" }}>
                    {/* Point */}
                    <div style={{ position: "absolute", left: 0, top: "4px", width: "24px", height: "24px", borderRadius: "50%", background: "linear-gradient(135deg, #7C3AED, #06B6D4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#fff" }} />
                    </div>

                    {/* Carte */}
                    <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "1.25rem", transition: "border-color 0.3s" }}>
                      <div style={{ fontSize: "0.75rem", color: "#a78bfa", fontWeight: 600, marginBottom: "0.25rem" }}>
                        {exp.period}
                      </div>
                      <h4 style={{ color: "#fff", fontWeight: 600, fontSize: "0.95rem", marginBottom: "0.25rem" }}>
                        {exp.role}
                      </h4>
                      <div style={{ color: "#22d3ee", fontSize: "0.85rem", marginBottom: "0.75rem" }}>
                        {exp.company}
                      </div>
                      <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                        {exp.tasks.map((task, i) => (
                          <li key={i} style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.8rem", display: "flex", gap: "0.5rem" }}>
                            <span style={{ color: "#F59E0B", flexShrink: 0 }}>→</span>
                            {task}
                          </li>
                        ))}
                      </ul>
                      {/* Tech tags */}
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "0.75rem" }}>
                        {exp.tech.map((t) => (
                          <span key={t} style={{ background: "rgba(124,58,237,0.15)", color: "#a78bfa", padding: "2px 10px", borderRadius: "50px", fontSize: "0.7rem", fontWeight: 500 }}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Formation */}
          <div>
            <h3 style={{ color: "#F59E0B", fontWeight: 600, fontSize: "1rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span>🎓</span> Formation
            </h3>

            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", left: "11px", top: 0, bottom: 0, width: "2px", background: "linear-gradient(to bottom, #F59E0B, #a78bfa, transparent)" }} />

              <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                {portfolioData.education.map((edu, i) => (
                  <div key={i} style={{ paddingLeft: "2.5rem", position: "relative" }}>
                    <div style={{ position: "absolute", left: 0, top: "4px", width: "24px", height: "24px", borderRadius: "50%", background: "linear-gradient(135deg, #F59E0B, #a78bfa)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#fff" }} />
                    </div>

                    <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "1.25rem" }}>
                      <div style={{ fontSize: "0.75rem", color: "#F59E0B", fontWeight: 600, marginBottom: "0.25rem" }}>
                        {edu.period}
                      </div>
                      <h4 style={{ color: "#fff", fontWeight: 600, fontSize: "0.95rem", marginBottom: "0.25rem" }}>
                        {edu.degree}
                      </h4>
                      <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem" }}>
                        {edu.school}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Activités transversales */}
                <div style={{ paddingLeft: "2.5rem", position: "relative" }}>
                  <div style={{ position: "absolute", left: 0, top: "4px", width: "24px", height: "24px", borderRadius: "50%", background: "linear-gradient(135deg, #34d399, #06B6D4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#fff" }} />
                  </div>
                  <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "1.25rem" }}>
                    <h4 style={{ color: "#fff", fontWeight: 600, fontSize: "0.95rem", marginBottom: "0.75rem" }}>
                      Activités transversales
                    </h4>
                    <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                      {[
                        "Facilitatrice au hackathon AFG",
                        "Formation en maquillage & tresses",
                        "Caissière à Delta Trading SARL",
                      ].map((item, i) => (
                        <li key={i} style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.8rem", display: "flex", gap: "0.5rem" }}>
                          <span style={{ color: "#34d399", flexShrink: 0 }}>→</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #experience > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}