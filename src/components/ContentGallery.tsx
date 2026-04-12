"use client";

import { useState } from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";

export default function ContentGallery() {
  const [selected, setSelected] = useState<null | { type: string; src: string; title: string }>(null);

  return (
    <>
      <section id="content" style={{ padding: "6rem 1.5rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
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

          <div className="gallery-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
            {portfolioData.content.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelected(item)}
                style={{ borderRadius: "16px", overflow: "hidden", cursor: "pointer", position: "relative", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", transition: "transform 0.3s, border-color 0.3s", aspectRatio: "9/16" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.borderColor = "#F59E0B"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
              >
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    poster={"poster" in item ? (item as { poster?: string }).poster : undefined}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    muted
                    playsInline
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                  />
                ) : (
                  <Image src={item.src} alt={item.title} fill style={{ objectFit: "cover" }} />
                )}

                <div
                  className="overlay"
                  style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)", opacity: 0, transition: "opacity 0.3s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.opacity = "1"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.opacity = "0"; }}
                >
                  <div style={{ position: "absolute", bottom: "1rem", left: "1rem", right: "1rem" }}>
                    <div style={{ color: "#F59E0B", fontSize: "0.7rem", fontWeight: 600, marginBottom: "4px" }}>
                      {item.type === "video" ? "🎬 Vidéo" : "📸 Photo"}
                    </div>
                    <div style={{ color: "#fff", fontSize: "0.85rem", fontWeight: 600 }}>{item.title}</div>
                  </div>
                </div>

                <div style={{ position: "absolute", top: "0.75rem", right: "0.75rem", background: "rgba(0,0,0,0.7)", borderRadius: "50px", padding: "4px 10px", fontSize: "0.7rem", color: "#F59E0B", fontWeight: 600 }}>
                  {item.type === "video" ? "🎬" : "📸"}
                </div>
              </div>
            ))}
          </div>
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

          <div onClick={(e) => e.stopPropagation()} style={{ width: "100%", maxWidth: "400px", borderRadius: "16px", overflow: "hidden" }}>
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