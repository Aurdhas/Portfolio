"use client";

import { portfolioData } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" style={{ padding: "6rem 1.5rem", background: "#0F0F0F", textAlign: "center" }}>
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>

        <span style={{ color: "#a78bfa", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" }}>
          Travaillons ensemble
        </span>

        <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 700, color: "#fff", marginTop: "0.5rem", marginBottom: "1rem" }}>
          Me contacter
        </h2>

        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "clamp(0.85rem, 1.5vw, 1rem)", lineHeight: 1.7, marginBottom: "3rem" }}>
          Un projet, une collaboration ou juste envie d&apos;échanger ? Je suis disponible.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center", marginBottom: "3rem" }}>

          <a href={"mailto:" + portfolioData.personal.email} style={{ display: "flex", alignItems: "center", gap: "1rem", background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.3)", borderRadius: "16px", padding: "1rem 2rem", textDecoration: "none", width: "100%", maxWidth: "500px" }}>
            <span style={{ fontSize: "1.5rem" }}>✉️</span>
            <div style={{ textAlign: "left" }}>
              <div style={{ color: "#a78bfa", fontSize: "0.75rem", fontWeight: 600 }}>Email</div>
              <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.85rem" }}>{portfolioData.personal.email}</div>
            </div>
          </a>

          <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "1rem", background: "rgba(6,182,212,0.1)", border: "1px solid rgba(6,182,212,0.3)", borderRadius: "16px", padding: "1rem 2rem", textDecoration: "none", width: "100%", maxWidth: "500px" }}>
            <span style={{ fontSize: "1.5rem" }}>🔗</span>
            <div style={{ textAlign: "left" }}>
              <div style={{ color: "#22d3ee", fontSize: "0.75rem", fontWeight: 600 }}>LinkedIn</div>
              <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.85rem" }}>linkedin.com/in/aurdhas</div>
            </div>
          </a>

          <a href={"tel:" + portfolioData.personal.phone} style={{ display: "flex", alignItems: "center", gap: "1rem", background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.3)", borderRadius: "16px", padding: "1rem 2rem", textDecoration: "none", width: "100%", maxWidth: "500px" }}>
            <span style={{ fontSize: "1.5rem" }}>📱</span>
            <div style={{ textAlign: "left" }}>
              <div style={{ color: "#F59E0B", fontSize: "0.75rem", fontWeight: 600 }}>Téléphone</div>
              <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.85rem" }}>{portfolioData.personal.phone}</div>
            </div>
          </a>

        </div>

        <a href={"mailto:" + portfolioData.personal.email} style={{ display: "inline-block", background: "linear-gradient(135deg, #7C3AED, #06B6D4)", color: "white", padding: "1rem 3rem", borderRadius: "50px", textDecoration: "none", fontWeight: 700, fontSize: "1rem" }}>
          Envoyer un message ✉️
        </a>

        <div style={{ marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
  <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.8rem" }}>
    <span style={{ color: "#a78bfa", fontWeight: 600 }}>Fifame Aurdhas</span> · {new Date().getFullYear()}
  </p>
  <div style={{ display: "flex", gap: "1rem" }}>

    {/* LinkedIn */}
    <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer"
      style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "42px", height: "42px", borderRadius: "50%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", textDecoration: "none", transition: "border-color 0.2s" }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#22d3ee"; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#22d3ee">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    </a>

    {/* Instagram */}
    <a href="https://www.instagram.com/mlle_fifame?igsh=MXgxY2V5ajAwd2EzOQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer"
      style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "42px", height: "42px", borderRadius: "50%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", textDecoration: "none", transition: "border-color 0.2s" }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#F59E0B"; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    </a>

    {/* TikTok */}
    <a href="https://www.tiktok.com/@miss_aurdhy?_r=1&_t=ZS-95TdCCrdfHk" target="_blank" rel="noopener noreferrer"
      style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "42px", height: "42px", borderRadius: "50%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", textDecoration: "none", transition: "border-color 0.2s" }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#a78bfa"; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#a78bfa">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
      </svg>
    </a>

    {/* Email */}
    <a href={"mailto:" + portfolioData.personal.email}
      style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "42px", height: "42px", borderRadius: "50%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", textDecoration: "none", transition: "border-color 0.2s" }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#a78bfa"; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    </a>

  </div>
</div>

      </div>
    </section>
  );
}