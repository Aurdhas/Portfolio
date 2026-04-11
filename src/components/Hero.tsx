"use client";

import { useEffect, useState } from "react";
import { portfolioData } from "@/data/portfolio";
import Image from "next/image";

const roles = [
  "Développeuse Web Full-stack",
  "Statisticienne & Data Analyst",
  "Créatrice de contenu",
];

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
        setTimeout(() => {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 200);
      }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  

  return (
    <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", background: "#0F0F0F", padding: "0 2rem" }}>
      <div style={{ position: "absolute", top: "20%", left: "10%", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "20%", right: "10%", width: "300px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1100px", width: "100%", zIndex: 1, display: "flex", alignItems: "center", justifyContent: "space-between", gap: "4rem", flexWrap: "wrap" }}>

        {/* Texte gauche */}
        <div style={{ flex: 1, minWidth: "300px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.3)", borderRadius: "50px", padding: "6px 16px", marginBottom: "2rem", fontSize: "0.85rem", color: "#a78bfa", fontWeight: 500 }}>
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
            Data · Dev · Contenu
          </div>

          <h1 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 700, lineHeight: 1.1, marginBottom: "1rem", color: "#ffffff" }}>
            Fifame{" "}
            <span style={{ background: "linear-gradient(135deg, #a78bfa, #22d3ee)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Aurdhas
            </span>
          </h1>

          <div style={{ fontSize: "clamp(1rem, 2vw, 1.3rem)", color: "rgba(255,255,255,0.6)", marginBottom: "1.5rem", minHeight: "2rem", fontWeight: 400 }}>
            <span style={{ color: "#F59E0B", fontWeight: 600 }}>{">"}</span>{" "}
            <span>{displayed}</span>
            <span style={{ display: "inline-block", width: "2px", height: "1.1em", background: "#a78bfa", marginLeft: "2px", verticalAlign: "middle" }} />
          </div>

          <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.5)", maxWidth: "500px", lineHeight: 1.8, marginBottom: "2.5rem" }}>
            {portfolioData.personal.bio}
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="#projects" style={{ background: "linear-gradient(135deg, #7C3AED, #06B6D4)", color: "white", padding: "0.85rem 2rem", borderRadius: "50px", textDecoration: "none", fontWeight: 600, fontSize: "0.95rem", display: "inline-block" }}>
              Voir mes projets
            </a>
            <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer" style={{ background: "transparent", color: "white", padding: "0.85rem 2rem", borderRadius: "50px", textDecoration: "none", fontWeight: 600, fontSize: "0.95rem", border: "1px solid rgba(255,255,255,0.2)", display: "inline-block" }}>
              LinkedIn
            </a>
          </div>
        </div>

        {/* Photo droite */}
        <div style={{ position: "relative", flexShrink: 0 }}>
          {/* Cercle décoratif */}
          <div style={{ position: "absolute", inset: "-8px", borderRadius: "50%", background: "linear-gradient(135deg, #7C3AED, #06B6D4, #F59E0B)", padding: "3px", zIndex: 0 }}>
            <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: "#0F0F0F" }} />
          </div>
          {/* Photo */}
          <div style={{ position: "relative", zIndex: 1, width: "280px", height: "280px", borderRadius: "50%", overflow: "hidden", border: "4px solid #0F0F0F" }}>
          <Image
  src="/images/avatar.jpg"
  alt="Fifame Aurdhas"
  width={280}
  height={280}
  style={{ objectFit: "cover", width: "100%", height: "100%" }}
  priority
/>
          </div>
          {/* Badge flottant */}
          <div style={{ position: "absolute", bottom: "10px", right: "-10px", background: "rgba(15,15,15,0.9)", border: "1px solid rgba(124,58,237,0.4)", borderRadius: "12px", padding: "8px 14px", zIndex: 2 }}>
            <div style={{ color: "#a78bfa", fontSize: "0.7rem", fontWeight: 600 }}>Cotonou, Bénin 🌍</div>
            <div style={{ color: "#fff", fontSize: "0.75rem", fontWeight: 600 }}>Open to work</div>
          </div>
        </div>

      </div>
    </section>
  );
}