"use client";

import { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";

const navLinks = [
  { label: "Accueil", href: "#hero" },
  { label: "À propos", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Expériences", href: "#experience" },
  { label: "Projets", href: "#projects" },
  { label: "Créations", href: "#content" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(15,15,15,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
        padding: "1rem 1.5rem",
        transition: "all 0.3s ease",
      }}>
        <nav style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="#hero" style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, fontSize: "1.4rem", background: "linear-gradient(to right, #a78bfa, #22d3ee)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", textDecoration: "none" }}>
            Aurdhas<span style={{ color: "#F59E0B", WebkitTextFillColor: "#F59E0B" }}>.</span>
          </a>

          {/* Desktop */}
          <ul style={{ display: "flex", gap: "1.5rem", listStyle: "none", margin: 0, padding: 0 }} className="desktop-nav">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "0.85rem", fontWeight: 500 }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "#a78bfa"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.7)"}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a href={"mailto:" + portfolioData.personal.email} className="desktop-nav" style={{ background: "linear-gradient(135deg, #7C3AED, #06B6D4)", color: "white", padding: "0.5rem 1.2rem", borderRadius: "50px", textDecoration: "none", fontSize: "0.85rem", fontWeight: 600 }}>
            Me contacter
          </a>

          {/* Burger */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="burger-btn"
            style={{ background: "none", border: "none", cursor: "pointer", display: "none", flexDirection: "column", gap: "5px", padding: "4px" }}
          >
            <span style={{ display: "block", width: "24px", height: "2px", background: menuOpen ? "#a78bfa" : "#fff", borderRadius: "2px", transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
            <span style={{ display: "block", width: "24px", height: "2px", background: "#fff", borderRadius: "2px", opacity: menuOpen ? 0 : 1, transition: "all 0.3s" }} />
            <span style={{ display: "block", width: "24px", height: "2px", background: menuOpen ? "#a78bfa" : "#fff", borderRadius: "2px", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
          </button>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ background: "rgba(15,15,15,0.98)", borderTop: "1px solid rgba(255,255,255,0.08)", padding: "1.5rem" }}>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={() => setMenuOpen(false)}
                    style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: "1rem", fontWeight: 500, display: "block", padding: "0.5rem 0" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a href={"mailto:" + portfolioData.personal.email}
              style={{ display: "inline-block", marginTop: "1rem", background: "linear-gradient(135deg, #7C3AED, #06B6D4)", color: "white", padding: "0.75rem 1.5rem", borderRadius: "50px", textDecoration: "none", fontSize: "0.9rem", fontWeight: 600 }}
            >
              Me contacter
            </a>
          </div>
        )}
      </header>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .burger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}