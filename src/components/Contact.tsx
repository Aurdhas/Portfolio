"use client";

import { portfolioData } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" style={{padding:"6rem 2rem",background:"#0F0F0F",textAlign:"center"}}>
      <div style={{maxWidth:"700px",margin:"0 auto"}}>

        <span style={{color:"#a78bfa",fontSize:"0.85rem",fontWeight:600,letterSpacing:"0.15em",textTransform:"uppercase"}}>
          Travaillons ensemble
        </span>

        <h2 style={{fontFamily:"Space Grotesk,sans-serif",fontSize:"clamp(2rem,4vw,3rem)",fontWeight:700,color:"#fff",marginTop:"0.5rem",marginBottom:"1rem"}}>
          Me contacter
        </h2>

        <p style={{color:"rgba(255,255,255,0.5)",fontSize:"1rem",lineHeight:1.7,marginBottom:"3rem"}}>
          Un projet, une collaboration ou juste envie d&apos;échanger ? Je suis disponible.
        </p>

        <div style={{display:"flex",flexDirection:"column",gap:"1rem",alignItems:"center",marginBottom:"3rem"}}>

          <a href={"mailto:"+portfolioData.personal.email} style={{display:"flex",alignItems:"center",gap:"1rem",background:"rgba(124,58,237,0.1)",border:"1px solid rgba(124,58,237,0.3)",borderRadius:"16px",padding:"1rem 2rem",textDecoration:"none",width:"100%",maxWidth:"500px"}}>
            <span style={{fontSize:"1.5rem"}}>✉️</span>
            <div style={{textAlign:"left"}}>
              <div style={{color:"#a78bfa",fontSize:"0.75rem",fontWeight:600}}>Email</div>
              <div style={{color:"rgba(255,255,255,0.7)",fontSize:"0.85rem"}}>{portfolioData.personal.email}</div>
            </div>
          </a>

          <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer" style={{display:"flex",alignItems:"center",gap:"1rem",background:"rgba(6,182,212,0.1)",border:"1px solid rgba(6,182,212,0.3)",borderRadius:"16px",padding:"1rem 2rem",textDecoration:"none",width:"100%",maxWidth:"500px"}}>
            <span style={{fontSize:"1.5rem"}}>🔗</span>
            <div style={{textAlign:"left"}}>
              <div style={{color:"#22d3ee",fontSize:"0.75rem",fontWeight:600}}>LinkedIn</div>
              <div style={{color:"rgba(255,255,255,0.7)",fontSize:"0.85rem"}}>linkedin.com/in/aurdhas</div>
            </div>
          </a>

          <a href={"tel:"+portfolioData.personal.phone} style={{display:"flex",alignItems:"center",gap:"1rem",background:"rgba(245,158,11,0.1)",border:"1px solid rgba(245,158,11,0.3)",borderRadius:"16px",padding:"1rem 2rem",textDecoration:"none",width:"100%",maxWidth:"500px"}}>
            <span style={{fontSize:"1.5rem"}}>📱</span>
            <div style={{textAlign:"left"}}>
              <div style={{color:"#F59E0B",fontSize:"0.75rem",fontWeight:600}}>Téléphone</div>
              <div style={{color:"rgba(255,255,255,0.7)",fontSize:"0.85rem"}}>{portfolioData.personal.phone}</div>
            </div>
          </a>

        </div>

        <a href={"mailto:"+portfolioData.personal.email} style={{display:"inline-block",background:"linear-gradient(135deg,#7C3AED,#06B6D4)",color:"white",padding:"1rem 3rem",borderRadius:"50px",textDecoration:"none",fontWeight:700,fontSize:"1rem"}}>
          Envoyer un message ✉️
        </a>

        <p style={{color:"rgba(255,255,255,0.2)",fontSize:"0.8rem",marginTop:"4rem"}}>
          Conçu et développé par Fifame Aurdhas · Next.js · TypeScript · Tailwind
        </p>

      </div>
    </section>
  );
}