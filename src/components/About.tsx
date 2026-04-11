"use client";

import { portfolioData } from "@/data/portfolio";

const stats = [
  { value: "3+", label: "Années d'expérience" },
  { value: "4", label: "Projets Dev" },
  { value: "3", label: "Missions Data" },
  { value: "3", label: "Langues" },
];

export default function About() {
  const cardStyle: React.CSSProperties = {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "16px",
    padding: "1.5rem",
    textAlign: "center",
  };

  return (
    <section id="about" style={{ padding: "6rem 2rem", background: "#0F0F0F" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Titre section */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span style={{ color: "#a78bfa", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" }}>
            Qui suis-je ?
          </span>
          <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#fff", marginTop: "0.5rem" }}>
            À propos de moi
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>

          {/* Texte */}
          <div>
          <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.9, fontSize: "1rem", marginBottom: "1.5rem" }}>
  Je suis <strong style={{ color: "#a78bfa" }}>Fifame Aurdhas</strong>, statisticienne, développeuse web full-stack et créatrice de contenu, basée à <strong style={{ color: "#22d3ee" }}>Cotonou, Bénin</strong>.
</p>
<p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.9, fontSize: "1rem", marginBottom: "1.5rem" }}>
  Mon profil se situe à l&apos;intersection de trois univers : <strong style={{ color: "#fff" }}>la donnée</strong>, <strong style={{ color: "#fff" }}>le code</strong> et <strong style={{ color: "#fff" }}>la création visuelle</strong>. J&apos;aime construire des choses qui ont du sens — que ce soit une interface, une analyse ou un contenu qui capte l&apos;attention.
</p>
<p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.9, fontSize: "1rem", marginBottom: "2rem" }}>
  Formée à <strong style={{ color: "#F59E0B" }}>Epitech Bénin </strong> et diplômée en économétrie de l&apos;Université d&apos;Abomey-Calavi, j&apos;allie rigueur analytique et sensibilité créative dans chaque projet que j&apos;entreprends.
</p>

            {/* Infos contact */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { label: "📍 Localisation", value: portfolioData.personal.location },
                { label: "✉️ Email", value: portfolioData.personal.email },
                { label: "🔗 LinkedIn", value: "linkedin.com/in/aurdhas" },
              ].map((item) => (
                <div key={item.label} style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                  <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem", minWidth: "120px" }}>{item.label}</span>
                  <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.85rem" }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats + langues */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {stats.map((stat) => (
                <div key={stat.label} style={cardStyle}>
                  <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "2.5rem", fontWeight: 700, background: "linear-gradient(135deg, #a78bfa, #22d3ee)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    {stat.value}
                  </div>
                  <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem", marginTop: "0.25rem" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Langues */}
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "1.5rem" }}>
              <h3 style={{ color: "#fff", fontWeight: 600, marginBottom: "1rem", fontSize: "0.95rem" }}>Langues</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {portfolioData.languages.map((lang) => (
                  <div key={lang.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}>{lang.name}</span>
                    <span style={{ background: "rgba(124,58,237,0.2)", color: "#a78bfa", padding: "2px 10px", borderRadius: "50px", fontSize: "0.75rem", fontWeight: 500 }}>{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Loisirs */}
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              {portfolioData.hobbies.map((hobby) => (
                <span key={hobby} style={{ background: "rgba(6,182,212,0.1)", border: "1px solid rgba(6,182,212,0.2)", color: "#22d3ee", padding: "4px 14px", borderRadius: "50px", fontSize: "0.8rem" }}>
                  {hobby}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}