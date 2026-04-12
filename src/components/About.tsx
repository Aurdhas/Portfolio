"use client";

import { portfolioData } from "@/data/portfolio";

const LocationIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#22d3ee">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const stats = [
  { value: "3+", label: "Années d'expérience" },
  { value: "4", label: "Projets Dev" },
  { value: "3", label: "Missions Data" },
  { value: "3", label: "Langues" },
];

export default function About() {
  return (
    <>
      <section id="about" style={{ padding: "6rem 1.5rem", background: "#0F0F0F" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span style={{ color: "#a78bfa", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" }}>
              Qui suis-je ?
            </span>
            <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 700, color: "#fff", marginTop: "0.5rem" }}>
              À propos de moi
            </h2>
          </div>

          <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>

            {/* Texte */}
            <div>
              <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.9, fontSize: "clamp(0.85rem, 1.5vw, 1rem)", marginBottom: "1.5rem" }}>
                Je suis <strong style={{ color: "#a78bfa" }}>Fifame Aurdhas</strong>, statisticienne, développeuse web full-stack et créatrice de contenu, basée à <strong style={{ color: "#22d3ee" }}>Cotonou, Bénin</strong>.
              </p>
              <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.9, fontSize: "clamp(0.85rem, 1.5vw, 1rem)", marginBottom: "1.5rem" }}>
                Mon profil se situe à l&apos;intersection de trois univers : <strong style={{ color: "#fff" }}>la donnée</strong>, <strong style={{ color: "#fff" }}>le code</strong> et <strong style={{ color: "#fff" }}>la création visuelle</strong>.
              </p>
              <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.9, fontSize: "clamp(0.85rem, 1.5vw, 1rem)", marginBottom: "2rem" }}>
                Formée à <strong style={{ color: "#F59E0B" }}>Epitech Bénin</strong> et diplômée en économétrie de l&apos;Université d&apos;Abomey-Calavi, j&apos;allie rigueur analytique et sensibilité créative.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  { icon: <LocationIcon />, label: "Localisation", value: portfolioData.personal.location },
                  { icon: <EmailIcon />, label: "Email", value: portfolioData.personal.email },
                  { icon: <LinkedInIcon />, label: "LinkedIn", value: "linkedin.com/in/aurdhas" },
                ].map((item) => (
                  <div key={item.label} style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                    <div style={{ flexShrink: 0 }}>{item.icon}</div>
                    <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem", minWidth: "90px" }}>{item.label}</span>
                    <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.85rem" }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats + langues + loisirs */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                {stats.map((stat) => (
                  <div key={stat.label} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "1.25rem", textAlign: "center" }}>
                    <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700, background: "linear-gradient(135deg, #a78bfa, #22d3ee)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                      {stat.value}
                    </div>
                    <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.75rem", marginTop: "0.25rem" }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

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
      </section>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </>
  );
}