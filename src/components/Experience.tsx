"use client";

import { portfolioData } from "@/data/portfolio";

const BoltIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);

const GraduationIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
);

const ArrowIcon = ({ color }: { color: string }) => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: "3px" }}>
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

export default function Experience() {
  return (
    <>
      <section id="experience" style={{ padding: "6rem 1.5rem", background: "#0F0F0F" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span style={{ color: "#a78bfa", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" }}>
              Mon parcours
            </span>
            <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 700, color: "#fff", marginTop: "0.5rem" }}>
              Expériences & Formation
            </h2>
          </div>

          <div className="exp-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }}>

            {/* Expériences */}
            <div>
              <h3 style={{ color: "#22d3ee", fontWeight: 600, fontSize: "0.9rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <BoltIcon /> Expériences
              </h3>
              <div style={{ position: "relative" }}>
                <div style={{ position: "absolute", left: "11px", top: 0, bottom: 0, width: "2px", background: "linear-gradient(to bottom, #7C3AED, #06B6D4, transparent)" }} />
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  {portfolioData.experiences.map((exp) => (
                    <div key={exp.id} style={{ paddingLeft: "2.5rem", position: "relative" }}>
                      <div style={{ position: "absolute", left: 0, top: "4px", width: "24px", height: "24px", borderRadius: "50%", background: "linear-gradient(135deg, #7C3AED, #06B6D4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#fff" }} />
                      </div>
                      <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "1.25rem" }}>
                        <div style={{ fontSize: "0.75rem", color: "#a78bfa", fontWeight: 600, marginBottom: "0.25rem" }}>{exp.period}</div>
                        <h4 style={{ color: "#fff", fontWeight: 600, fontSize: "0.9rem", marginBottom: "0.25rem" }}>{exp.role}</h4>
                        <div style={{ color: "#22d3ee", fontSize: "0.82rem", marginBottom: "0.75rem" }}>{exp.company}</div>
                        <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                          {exp.tasks.map((task, i) => (
                            <li key={i} style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.78rem", display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                              <ArrowIcon color="#F59E0B" />
                              {task}
                            </li>
                          ))}
                        </ul>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "0.75rem" }}>
                          {exp.tech.map((t) => (
                            <span key={t} style={{ background: "rgba(124,58,237,0.15)", color: "#a78bfa", padding: "2px 10px", borderRadius: "50px", fontSize: "0.7rem", fontWeight: 500 }}>{t}</span>
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
              <h3 style={{ color: "#F59E0B", fontWeight: 600, fontSize: "0.9rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <GraduationIcon /> Formation
              </h3>
              <div style={{ position: "relative" }}>
                <div style={{ position: "absolute", left: "11px", top: 0, bottom: 0, width: "2px", background: "linear-gradient(to bottom, #F59E0B, #a78bfa, transparent)" }} />
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  {portfolioData.education.map((edu, i) => (
                    <div key={i} style={{ paddingLeft: "2.5rem", position: "relative" }}>
                      <div style={{ position: "absolute", left: 0, top: "4px", width: "24px", height: "24px", borderRadius: "50%", background: "linear-gradient(135deg, #F59E0B, #a78bfa)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#fff" }} />
                      </div>
                      <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "1.25rem" }}>
                        <div style={{ fontSize: "0.75rem", color: "#F59E0B", fontWeight: 600, marginBottom: "0.25rem" }}>{edu.period}</div>
                        <h4 style={{ color: "#fff", fontWeight: 600, fontSize: "0.9rem", marginBottom: "0.25rem" }}>{edu.degree}</h4>
                        <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.82rem" }}>{edu.school}</div>
                      </div>
                    </div>
                  ))}

                  <div style={{ paddingLeft: "2.5rem", position: "relative" }}>
                    <div style={{ position: "absolute", left: 0, top: "4px", width: "24px", height: "24px", borderRadius: "50%", background: "linear-gradient(135deg, #34d399, #06B6D4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#fff" }} />
                    </div>
                    <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "1.25rem" }}>
                      <h4 style={{ color: "#fff", fontWeight: 600, fontSize: "0.9rem", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <StarIcon /> Activités transversales
                      </h4>
                      <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                        {["Facilitatrice au hackathon AFG", "Formation en maquillage & tresses", "Caissière à Delta Trading SARL"].map((item, i) => (
                          <li key={i} style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.78rem", display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                            <ArrowIcon color="#34d399" />
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
      </section>

      <style>{`
        @media (max-width: 768px) {
          .exp-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </>
  );
}