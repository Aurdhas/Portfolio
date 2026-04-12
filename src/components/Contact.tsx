"use client";

import { portfolioData } from "@/data/portfolio";

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#22d3ee">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#a78bfa">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.09 6.09l1.27-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const LocationIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

export default function Contact() {
  const contactLinks = [
    { label: "Email", value: portfolioData.personal.email, href: "mailto:" + portfolioData.personal.email, icon: <EmailIcon />, color: "#a78bfa", bg: "rgba(124,58,237,0.1)", border: "rgba(124,58,237,0.3)" },
    { label: "LinkedIn", value: "linkedin.com/in/aurdhas", href: portfolioData.personal.linkedin, icon: <LinkedInIcon />, color: "#22d3ee", bg: "rgba(6,182,212,0.1)", border: "rgba(6,182,212,0.3)" },
    { label: "Téléphone", value: portfolioData.personal.phone, href: "tel:" + portfolioData.personal.phone, icon: <PhoneIcon />, color: "#F59E0B", bg: "rgba(245,158,11,0.1)", border: "rgba(245,158,11,0.3)" },
    { label: "Localisation", value: portfolioData.personal.location, href: "https://maps.google.com/?q=Cotonou,Benin", icon: <LocationIcon />, color: "#34d399", bg: "rgba(52,211,153,0.1)", border: "rgba(52,211,153,0.3)" },
  ];

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
          {contactLinks.map((link) => (
            <a key={link.label} href={link.href} target={link.label === "LinkedIn" || link.label === "Localisation" ? "_blank" : undefined} rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: "1rem", background: link.bg, border: "1px solid " + link.border, borderRadius: "16px", padding: "1rem 2rem", textDecoration: "none", width: "100%", maxWidth: "500px" }}
            >
              <div style={{ flexShrink: 0 }}>{link.icon}</div>
              <div style={{ textAlign: "left" }}>
                <div style={{ color: link.color, fontSize: "0.75rem", fontWeight: 600 }}>{link.label}</div>
                <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.85rem" }}>{link.value}</div>
              </div>
            </a>
          ))}
        </div>

        <a href={"mailto:" + portfolioData.personal.email} style={{ display: "inline-block", background: "linear-gradient(135deg, #7C3AED, #06B6D4)", color: "white", padding: "1rem 3rem", borderRadius: "50px", textDecoration: "none", fontWeight: 700, fontSize: "1rem" }}>
          Envoyer un message
        </a>

        <div style={{ marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
          <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.8rem" }}>
             <span style={{ color: "#a78bfa", fontWeight: 600 }}>Fifame Aurdhas</span> · {new Date().getFullYear()}
          </p>
          <div style={{ display: "flex", gap: "1rem" }}>
            {[
              { href: portfolioData.personal.linkedin, icon: <LinkedInIcon />, hoverColor: "#22d3ee" },
              { href: "https://www.instagram.com/mlle_fifame?igsh=MXgxY2V5ajAwd2EzOQ%3D%3D&utm_source=qr", icon: <InstagramIcon />, hoverColor: "#F59E0B" },
              { href: "https://www.tiktok.com/@miss_aurdhy?_r=1&_t=ZS-95TdCCrdfHk", icon: <TikTokIcon />, hoverColor: "#a78bfa" },
              { href: "mailto:" + portfolioData.personal.email, icon: <EmailIcon />, hoverColor: "#a78bfa" },
            ].map((item, i) => (
              <a key={i} href={item.href} target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "42px", height: "42px", borderRadius: "50%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", textDecoration: "none", transition: "border-color 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = item.hoverColor; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}