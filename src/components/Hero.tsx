"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";

const roles = [
  "Développeuse Web Full-stack",
  "Statisticienne & Data Analyst",
  "Créatrice de contenu",
];



const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

const LocationIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: NodeJS.Timeout;
    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    } else {
      setTimeout(() => { setIsDeleting(false); setRoleIndex((prev) => (prev + 1) % roles.length); }, 200);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <>
      <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", background: "#0F0F0F", padding: "6rem 1.5rem 3rem" }}>

        <div style={{ position: "absolute", top: "20%", left: "10%", width: "300px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "20%", right: "10%", width: "250px", height: "250px", borderRadius: "50%", background: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div className="hero-inner" style={{ maxWidth: "1100px", width: "100%", zIndex: 1, display: "flex", alignItems: "center", justifyContent: "space-between", gap: "3rem" }}>

          {/* Texte */}
          <div style={{ flex: 1, minWidth: 0 }}>

            {/* Badge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.3)", borderRadius: "50px", padding: "6px 16px", marginBottom: "1.5rem", fontSize: "0.8rem", color: "#a78bfa", fontWeight: 500 }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
              Data · Dev · Contenu
            </div>

            {/* Nom */}
            <h1 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2rem, 5vw, 4.5rem)", fontWeight: 700, lineHeight: 1.1, marginBottom: "1rem", color: "#ffffff" }}>
              Fifame{" "}
              <span style={{ background: "linear-gradient(135deg, #a78bfa, #22d3ee)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Aurdhas
              </span>
            </h1>

            {/* Typewriter */}
            <div style={{ fontSize: "clamp(0.9rem, 2vw, 1.3rem)", color: "rgba(255,255,255,0.6)", marginBottom: "1.5rem", minHeight: "2rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
              <span>{displayed}</span>
              <span style={{ display: "inline-block", width: "2px", height: "1.1em", background: "#a78bfa", verticalAlign: "middle" }} />
            </div>

            {/* Bio */}
            <p style={{ fontSize: "clamp(0.85rem, 1.5vw, 1rem)", color: "rgba(255,255,255,0.5)", maxWidth: "500px", lineHeight: 1.8, marginBottom: "1rem" }}>
              {portfolioData.personal.bio}
            </p>

            {/* Localisation */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "2rem", color: "rgba(255,255,255,0.4)", fontSize: "0.85rem" }}>
              <LocationIcon />
              {portfolioData.personal.location}
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href="#projects" style={{ background: "linear-gradient(135deg, #7C3AED, #06B6D4)", color: "white", padding: "0.85rem 1.75rem", borderRadius: "50px", textDecoration: "none", fontWeight: 600, fontSize: "0.9rem", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                Voir mes projets <ArrowIcon />
              </a>
              <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer" style={{ background: "transparent", color: "white", padding: "0.85rem 1.75rem", borderRadius: "50px", textDecoration: "none", fontWeight: 600, fontSize: "0.9rem", border: "1px solid rgba(255,255,255,0.2)", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                <LinkedInIcon /> LinkedIn
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="hero-photo" style={{ position: "relative", flexShrink: 0 }}>
            <div style={{ position: "absolute", inset: "-4px", borderRadius: "50%", background: "linear-gradient(135deg, #7C3AED, #06B6D4, #F59E0B)", zIndex: 0 }} />
            <div style={{ position: "relative", zIndex: 1, width: "clamp(200px, 25vw, 280px)", height: "clamp(200px, 25vw, 280px)", borderRadius: "50%", overflow: "hidden", border: "4px solid #0F0F0F" }}>
              <Image src="/images/avatar.jpg" alt="Fifame Aurdhas" fill style={{ objectFit: "cover" }} priority />
            </div>
            {/* Badge flottant */}
            <div style={{ position: "absolute", bottom: "10px", right: "-10px", background: "rgba(15,15,15,0.9)", border: "1px solid rgba(124,58,237,0.4)", borderRadius: "12px", padding: "8px 14px", zIndex: 2, display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              <div>
                <div style={{ color: "#a78bfa", fontSize: "0.65rem", fontWeight: 600 }}>COTONOU, BÉNIN</div>
                <div style={{ color: "#fff", fontSize: "0.72rem", fontWeight: 600 }}>Full-stack & Data</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .hero-inner {
            flex-direction: column-reverse !important;
            text-align: center !important;
            align-items: center !important;
          }
          .hero-inner p, .hero-inner > div:first-child > div:nth-child(6) {
            margin-left: auto !important;
            margin-right: auto !important;
          }
          .hero-inner > div:first-child > div:last-child {
            justify-content: center !important;
          }
          .hero-inner > div:first-child > div:nth-child(5) {
            justify-content: center !important;
          }
        }
      `}</style>
    </>
  );
}