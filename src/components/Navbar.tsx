"use client";

import { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";

const navLinks = [
  { label: "Accueil", href: "#hero" },
  { label: "À propos", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Expériences", href: "#experience" },
  { label: "Projets", href: "#projects" },
  { label: "Contact", href: "#contact" },
  { label: "Créations", href: "#content" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
    
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    transition: "all 0.3s ease",
    background: scrolled ? "rgba(15, 15, 15, 0.95)" : "transparent",
    backdropFilter: scrolled ? "blur(12px)" : "none",
    borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
    padding: "1rem 2rem",
  };

  const innerStyle: React.CSSProperties = {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const logoStyle: React.CSSProperties = {
    fontFamily: "Space Grotesk, sans-serif",
    fontWeight: 700,
    fontSize: "1.4rem",
    background: "linear-gradient(to right, #a78bfa, #22d3ee)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    textDecoration: "none",
  };

  const dotStyle: React.CSSProperties = {
    color: "#F59E0B",
    WebkitTextFillColor: "#F59E0B",
  };

  const linkStyle: React.CSSProperties = {
    color: "rgba(255,255,255,0.7)",
    textDecoration: "none",
    fontSize: "0.9rem",
    fontWeight: 500,
    transition: "color 0.2s",
  };

  const ctaStyle: React.CSSProperties = {
    background: "linear-gradient(135deg, #7C3AED, #06B6D4)",
    color: "white",
    padding: "0.5rem 1.2rem",
    borderRadius: "50px",
    textDecoration: "none",
    fontSize: "0.85rem",
    fontWeight: 600,
  };

  return (
    <header style={navStyle}>
      <nav style={innerStyle}>
        <a href="#hero" style={logoStyle}>
          Aurdhas<span style={dotStyle}>.</span>
        </a>

        <ul style={{ display: "flex", gap: "2rem", listStyle: "none", margin: 0, padding: 0 }}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} style={linkStyle}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href={`mailto:${portfolioData.personal.email}`} style={ctaStyle}>
          Me contacter
        </a>
      </nav>
    </header>
  );
}