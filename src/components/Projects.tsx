"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import React from "react";

const DevIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/>
    <polyline points="8 6 2 12 8 18"/>
  </svg>
);

const DataIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/>
    <line x1="12" y1="20" x2="12" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="14"/>
  </svg>
);

const ContentIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20h9"/>
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
  </svg>
);

const AllIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
    <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
  </svg>
);

const typeConfig: Record<string, { color: string; bg: string; icon: React.ReactNode; label: string }> = {  Dev: { color: "#a78bfa", bg: "rgba(124,58,237,0.15)", icon: <DevIcon />, label: "Dev" },
  Data: { color: "#22d3ee", bg: "rgba(6,182,212,0.15)", icon: <DataIcon />, label: "Data" },
  Contenu: { color: "#F59E0B", bg: "rgba(245,158,11,0.15)", icon: <ContentIcon />, label: "Contenu" },
};

const filters = ["Tous", "Dev", "Data", "Contenu"];

export default function Projects() {
  const [active, setActive] = useState("Tous");

  const filtered = portfolioData.projects.filter(
    (p) => active === "Tous" || p.type === active
  );

  return (
    <>
      <section id="projects" style={{ padding: "6rem 1.5rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span style={{ color: "#a78bfa", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" }}>
              Ce que j&apos;ai réalisé
            </span>
            <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 700, color: "#fff", marginTop: "0.5rem" }}>
              Mes Projets
            </h2>
          </div>

          {/* Filtres */}
          <div style={{ display: "flex", justifyContent: "center", gap: "0.6rem", marginBottom: "3rem", flexWrap: "wrap" }}>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActive(filter)}
                style={{
                  padding: "0.5rem 1.25rem",
                  borderRadius: "50px",
                  border: active === filter ? "none" : "1px solid rgba(255,255,255,0.15)",
                  background: active === filter ? "linear-gradient(135deg, #7C3AED, #06B6D4)" : "transparent",
                  color: active === filter ? "#fff" : "rgba(255,255,255,0.6)",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  transition: "all 0.2s",
                }}
              >
                {filter === "Tous" && <AllIcon />}
                {filter === "Dev" && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>}
                {filter === "Data" && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>}
                {filter === "Contenu" && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>}
                {filter}
              </button>
            ))}
          </div>

          {/* Grille */}
          <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}>
            {filtered.map((project) => {
              const config = typeConfig[project.type] ?? { color: "#fff", bg: "rgba(255,255,255,0.1)", icon: <AllIcon />, label: project.type };
              return (
                <div
                  key={project.id}
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px", padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem", transition: "border-color 0.3s, transform 0.3s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = config.color; e.currentTarget.style.transform = "translateY(-4px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    {config.icon}
                    <span style={{ background: config.bg, color: config.color, padding: "3px 12px", borderRadius: "50px", fontSize: "0.7rem", fontWeight: 600 }}>
                      {config.label}
                    </span>
                  </div>
                  <h3 style={{ color: "#fff", fontWeight: 600, fontSize: "0.95rem", margin: 0, fontFamily: "Space Grotesk, sans-serif" }}>
                    {project.title}
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.82rem", lineHeight: 1.7, margin: 0 }}>
                    {project.description}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "auto" }}>
                    {(project.tech || []).map((t) => (
                      <span key={t} style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.5)", padding: "3px 10px", borderRadius: "50px", fontSize: "0.7rem", fontWeight: 500 }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </>
  );
}