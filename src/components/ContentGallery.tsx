"use client";

import { useState } from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";

const PhotoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
    <polyline points="21 15 16 10 5 21"/>
  </svg>
);

const VideoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/>
  </svg>
);

const AllIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
    <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
  </svg>
);

const PlayIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
    <polygon points="5 3 19 12 5 21 5 3"/>
  </svg>
);

const filters = [
  { label: "Tout", value: "all", icon: <AllIcon /> },
  { label: "Photos", value: "photo", icon: <PhotoIcon /> },
  { label: "Vidéos", value: "video", icon: <VideoIcon /> },
];

export default function ContentGallery() {
  const [active, setActive] = useState("all");
  const [selected, setSelected] = useState<null | { type: string; src: string; title: string }>(null);

  const filtered = portfolioData.content.filter(
    (item) => active === "all" || item.type === active
  );

  return (
    <>
      <section id="content" style={{ padding: "6rem 1.5rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

          {/* Titre */}
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span style={{ color: "#F59E0B", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" }}>
              Mes créations
            </span>
            <h2 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 700, color: "#fff", marginTop: "0.5rem" }}>
              Contenu & Créations
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "clamp(0.85rem, 1.5vw, 1rem)", marginTop: "1rem" }}>
              Montages vidéo · Édition photo · CapCut · Adobe Premiere · Lightroom
            </p>
          </div>

          {/* Filtres */}
          <div style={{ display: "flex", justifyContent: "center", gap: "0.75rem", marginBottom: "3rem", flexWrap: "wrap" }}>
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActive(filter.value)}
                style={{
                  padding: "0.6rem 1.5rem",
                  borderRadius: "50px",
                  border: active === filter.value ? "none" : "1px solid rgba(255,255,255,0.15)",
                  background: active === filter.value ? "linear-gradient(135deg, #F59E0B, #ef4444)" : "transparent",
                  color: active === filter.value ? "#fff" : "rgba(255,255,255,0.6)",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  transition: "all 0.2s",
                }}
              >
                {filter.icon}
                {filter.label}
                <span style={{ background: active === filter.value ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.08)", borderRadius: "50px", padding: "1px 8px", fontSize: "0.75rem" }}>
                  {filter.value === "all" ? portfolioData.content.length : portfolioData.content.filter(i => i.type === filter.value).length}
                </span>
              </button>
            ))}
          </div>

          {/* Grille */}
          <div className="gallery-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
            {filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelected(item)}
                style={{ borderRadius: "16px", overflow: "hidden", cursor: "pointer", position: "relative", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", transition: "transform 0.3s, border-color 0.3s", aspectRatio: "9/16" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.borderColor = "#F59E0B"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
              >
                {item.type === "video" ? (
                  <>
                    <video
                      src={item.src}
                      poster={"poster" in item ? (item as { poster?: string }).poster : undefined}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      muted
                      playsInline
                      onMouseEnter={(e) => e.currentTarget.play()}
                      onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                    />
                    {/* Play overlay */}
                    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.3)", opacity: 0, transition: "opacity 0.3s" }}
                      onMouseEnter={(e) => { e.currentTarget.style.opacity = "1"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.opacity = "0"; }}
                    >
                      <div style={{ background: "rgba(245,158,11,0.8)", borderRadius: "50%", width: "56px", height: "56px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <PlayIcon />
                      </div>
                    </div>
                  </>
                ) : (
                  <Image src={item.src} alt={item.title} fill style={{ objectFit: "cover" }} />
                )}

                {/* Badge type */}
                <div style={{ position: "absolute", top: "0.75rem", left: "0.75rem", background: "rgba(0,0,0,0.7)", borderRadius: "50px", padding: "4px 10px", fontSize: "0.7rem", color: item.type === "video" ? "#F59E0B" : "#a78bfa", fontWeight: 600, display: "flex", alignItems: "center", gap: "4px" }}>
                  {item.type === "video" ? <VideoIcon /> : <PhotoIcon />}
                  {item.type === "video" ? "Vidéo" : "Photo"}
                </div>

                {/* Info overlay bas */}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)", padding: "2rem 1rem 1rem", transform: "translateY(100%)", transition: "transform 0.3s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(100%)"; }}
                >
                  <div style={{ color: "#fff", fontSize: "0.85rem", fontWeight: 600 }}>{item.title}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Message si vide */}
          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "4rem", color: "rgba(255,255,255,0.3)" }}>
              Aucun contenu dans cette catégorie.
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.95)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem" }}
        >
          <button
            onClick={() => setSelected(null)}
            style={{ position: "absolute", top: "1rem", right: "1rem", background: "rgba(255,255,255,0.1)", border: "none", color: "#fff", width: "40px", height: "40px", borderRadius: "50%", fontSize: "1.2rem", cursor: "pointer" }}
          >
            ✕
          </button>

          <div onClick={(e) => e.stopPropagation()} style={{ width: "100%", maxWidth: "400px" }}>
            {selected.type === "video" ? (
              <video src={selected.src} controls autoPlay style={{ width: "100%", borderRadius: "16px", maxHeight: "85vh" }} />
            ) : (
              <div style={{ position: "relative", width: "100%", aspectRatio: "9/16" }}>
                <Image src={selected.src} alt={selected.title} fill style={{ objectFit: "contain", borderRadius: "16px" }} />
              </div>
            )}
            <div style={{ textAlign: "center", marginTop: "0.75rem" }}>
              <div style={{ color: "#fff", fontWeight: 600, fontSize: "0.9rem" }}>{selected.title}</div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 480px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 481px) and (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </>
  );
}