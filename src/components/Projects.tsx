"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";

const filters = ["Tous", "Dev", "Data", "Contenu"];

const typeConfig: Record<string, { color: string; bg: string; emoji: string }> = {
  Dev: { color: "#a78bfa", bg: "rgba(124,58,237,0.15)", emoji: "💻" },
  Data: { color: "#22d3ee", bg: "rgba(6,182,212,0.15)", emoji: "📊" },
  Contenu: { color: "#F59E0B", bg: "rgba(245,158,11,0.15)", emoji: "🎨" },
};

export default function Projects() {
  const [active, setActive] = useState("Tous");

  const filtered = portfolioData.projects.filter(
    (p) => active === "Tous" || p.type === active
  );

  return (
    <section id="projects" style={{ padding: "6rem 2rem", background: "#0a0a0a" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Titre */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span style={{ color: "#a78bfa", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" }}>
            Ce que j&apos;ai réalisé
          </span>
          <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#fff", marginTop: "0.5rem" }}>
            Mes Projets
          </h2>
        </div>

        {/* Filtres */}
        <div style={{ display: "flex", justifyContent: "center", gap: "0.75rem", marginBottom: "3rem", flexWrap: "wrap" }}>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              style={{
                padding: "0.5rem 1.5rem",
                borderRadius: "50px",
                border: active === filter ? "none" : "1px solid rgba(255,255,255,0.15)",
                background: active === filter
                  ? "linear-gradient(135deg, #7C3AED, #06B6D4)"
                  : "transparent",
                color: active === filter ? "#fff" : "rgba(255,255,255,0.6)",
                fontWeight: 600,
                fontSize: "0.9rem",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {filter === "Dev" && "💻 "}
              {filter === "Data" && "📊 "}
              {filter === "Contenu" && "🎨 "}
              {filter === "Tous" && "✨ "}
              {filter}
            </button>
          ))}
        </div>

        {/* Grille projets */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {filtered.map((project) => {
            const config = typeConfig[project.type] ?? { color: "#fff", bg: "rgba(255,255,255,0.1)", emoji: "📁" };
            return (
              <div
                key={project.id}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "20px",
                  padding: "1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  transition: "border-color 0.3s, transform 0.3s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = config.color;
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {/* Header */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "2rem" }}>{config.emoji}</span>
                  <span style={{
                    background: config.bg,
                    color: config.color,
                    padding: "3px 12px",
                    borderRadius: "50px",
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                  }}>
                    {project.type}
                  </span>
                </div>

                {/* Titre */}
                <h3 style={{ color: "#fff", fontWeight: 600, fontSize: "1rem", margin: 0, fontFamily: "Space Grotesk, sans-serif" }}>
                  {project.title}
                </h3>

                {/* Description */}
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", lineHeight: 1.7, margin: 0 }}>
                  {project.description}
                </p>

                {/* Tech tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "auto" }}>
                  {project.tech.map((t) => (
                    <span key={t} style={{
                      background: "rgba(255,255,255,0.06)",
                      color: "rgba(255,255,255,0.5)",
                      padding: "3px 10px",
                      borderRadius: "50px",
                      fontSize: "0.72rem",
                      fontWeight: 500,
                    }}>
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
  );
}