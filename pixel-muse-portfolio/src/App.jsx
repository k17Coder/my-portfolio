import React, { useEffect, useState } from "react";
import {
  ArrowDown, ArrowUpRight, Camera, Computer, Heart, Mail, Menu, Monitor,
  Music2, NotebookPen, Sparkles, Star, X, Copy, ExternalLink, Volume2, VolumeX,
  WandSparkles, CalendarDays, Clapperboard, BriefcaseBusiness, UserRound, Code2
} from "lucide-react";

const EMAIL = "k17kaushik@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/khushi-kaushik-9bb36230a/";
const GITHUB = "https://github.com/k17Coder";
const INSTAGRAM = "https://www.instagram.com/bloomfaery_cam/";
const REEL_LINKS = [
  "https://www.instagram.com/reel/DdCTT4DT6kN/?psln=enRrOGlnZWNvaGJ2",
  "https://www.instagram.com/reel/Dc-8zzYhpVt/?vrfl=aDN4YTUxdnlwcWF1",
  "https://www.instagram.com/reel/Dc-6L2AhLfL/?obrf=eW0ybnV3dWFpcjl1"
];
const RESUME_URL = ""; // Add a public resume PDF URL here.

const projects = [
  {
    id: "pixel-playground",
    title: "Pixel Playground — UI/UX Concept",
    type: "SELF-INITIATED CONCEPT",
    label: "Mobile app / playful interface",
    color: "rose",
    brief: "A speculative mobile experience that turns a creative habit tracker into a friendly, game-like daily ritual.",
    audience: "Students and young creatives who want a simple, encouraging way to track small goals.",
    idea: "Use a tiny pixel companion, clear progress states, and one primary action per screen to make the experience feel approachable.",
    deliverables: ["User persona and problem statement", "Low-fidelity flow for onboarding and daily check-in", "High-fidelity screen concepts in Figma", "Accessible type, contrast, and interaction notes"],
    hook: "Make progress feel playful, not pressuring.",
    caption: "A concept exploration in friendly UI, visual hierarchy, and habit-building interactions.",
    kpis: "Proposed usability checks: task completion, time on task, misclicks, and user confidence. This is a concept, not a tested product."
  },
  {
    id: "visual-identity",
    title: "Bloom Notes — Visual Identity Concept",
    type: "SELF-INITIATED CONCEPT",
    label: "Graphic design / social templates",
    color: "lilac",
    brief: "A fictional lifestyle brand identity exploring how a consistent visual system can make social posts feel recognizable.",
    audience: "A young, design-conscious audience that likes soft colors, thoughtful details, and useful content.",
    idea: "Build a small visual kit around a limited palette, type hierarchy, reusable layouts, and a distinct cover style.",
    deliverables: ["Moodboard and color palette", "Typography and layout direction", "Three social post template concepts", "Reel cover and story template direction"],
    hook: "A consistent look, with room for every new idea.",
    caption: "Exploring a flexible social design system for a fictional brand. Created as a portfolio concept, not client work.",
    kpis: "Proposed checks: visual consistency, readability at mobile size, saves, shares, and brand recognition feedback."
  },
  {
    id: "reel-to-carousel",
    title: "One Idea, Three Formats",
    type: "SELF-INITIATED CONCEPT",
    label: "Content design / repurposing",
    color: "peach",
    brief: "A content-design exercise showing how one useful idea can become a Reel, a carousel, and a Story sequence.",
    audience: "Creators and small teams who need to communicate one message across different social formats.",
    idea: "Keep the core message consistent while adapting pacing, text density, and the call to action to each format.",
    deliverables: ["Reel storyboard and cover concept", "Five-slide carousel wireframe", "Three-frame Story sequence", "CTA and layout variations"],
    hook: "One useful idea. Three ways to make it land.",
    caption: "A concept exercise in visual storytelling, hierarchy, and platform-aware design.",
    kpis: "Proposed measures: watch time, carousel completion, saves, shares, story replies, and profile actions."
  }
];

const calendar = [
  ["MON", "Reel", "A relatable problem + one quick fix"],
  ["TUE", "Stories", "Poll: what is your biggest challenge?"],
  ["WED", "Carousel", "A saveable 5-step guide"],
  ["THU", "Reel", "Behind-the-scenes / process"],
  ["FRI", "Stories", "Question box + response"],
  ["SAT", "Reel", "Trend adapted to brand voice"],
  ["SUN", "Community", "Recap, replies, and next-week teaser"]
];

function PixelCharacter({ mood = "idle", small = false }) {
  return (
    <div className={`pixel-character ${small ? "pixel-character--small" : ""} mood-${mood}`} aria-label="Original pixel-art retro-glamour character" role="img">
      <div className="character-shadow" />
      <div className="hair hair-back" />
      <div className="body-top" />
      <div className="skirt" />
      <div className="leg leg-left" /><div className="leg leg-right" />
      <div className="shoe shoe-left" /><div className="shoe shoe-right" />
      <div className="arm arm-left" /><div className="arm arm-right" />
      <div className="neck" />
      <div className="face">
        <span className="ear ear-left" /><span className="ear ear-right" />
        <span className="eye eye-left" /><span className="eye eye-right" />
        <span className="lash lash-left" /><span className="lash lash-right" />
        <span className="nose" /><span className="mouth" />
        <span className="blush blush-left" /><span className="blush blush-right" />
      </div>
      <div className="hair hair-front"><i /><b /><em /></div>
      <div className="bow" />
      <div className="sparkle sparkle-a">✦</div><div className="sparkle sparkle-b">♥</div>
    </div>
  );
}

function PixelRoom({ onOpen }) {
  return (
    <div className="room-scene">
      <div className="room-wall">
        <div className="wall-grid" />
        <div className="window">
          <div className="window-sky"><span>✦</span><span>☁</span><span>✦</span></div>
          <div className="curtain curtain-left" /><div className="curtain curtain-right" />
        </div>
        <div className="poster poster-one">MAKE<br/>SOME<br/><b>NOISE!</b></div>
        <div className="poster poster-two">STAY<br/><b>CURIOUS</b> ✦</div>
        <div className="shelf"><span>♥</span><span>✿</span><span>★</span></div>
        <div className="floor">
          <div className="floor-lines" />
        </div>
        <div className="desk">
          <div className="desk-top" />
          <div className="monitor" onClick={() => onOpen("campaigns")} role="button" tabIndex="0" onKeyDown={e => e.key === "Enter" && onOpen("campaigns")} aria-label="Open Design Studio">
            <div className="monitor-screen"><span>DESIGN<br/>STUDIO.exe</span><i>CLICK TO EXPLORE</i></div>
            <div className="monitor-neck" /><div className="monitor-base" />
          </div>
          <div className="keyboard"><span>▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪</span></div>
          <div className="mouse" />
          <div className="plant"><i /><b /><em /></div>
        </div>
        <div className="dresser"><div /><div /><div /><span>✦</span></div>
        <div className="rug" />
        <PixelCharacter />
        <button className="room-object object-mirror" onClick={() => onOpen("about")} aria-label="Open About Me"><span>♡</span><small>ABOUT</small></button>
        <button className="room-object object-camera" onClick={() => onOpen("work")} aria-label="Open My Content"><Camera size={19}/><small>MY WORK</small></button>
        <button className="room-object object-board" onClick={() => onOpen("experience")} aria-label="Open Experience"><CalendarDays size={18}/><small>EXPERIENCE</small></button>
        <button className="room-object object-notebook" onClick={() => onOpen("strategy")} aria-label="Open Content Strategy"><NotebookPen size={18}/><small>STRATEGY</small></button>
        <button className="room-object object-letter" onClick={() => onOpen("contact")} aria-label="Open Contact"><Mail size={18}/><small>CONTACT</small></button>
      </div>
      <div className="scene-caption"><span className="tiny-dot" /> YOUR CREATIVE STUDIO <span className="caption-divider">/</span> CLICK AN OBJECT TO EXPLORE</div>
    </div>
  );
}

function Modal({ section, onClose }) {
  if (!section) return null;
  const titles = {
    about: ["A LITTLE ABOUT ME", "The person behind the pixels"],
    work: ["CONTENT & REELS", "Short-form video and visual storytelling"],
    campaigns: ["DESIGN STUDIO", "Visual experiments, UI/UX, and social design concepts"],
    tech: ["AI & ENGINEERING", "Projects, tools, and technical foundations"],
    education: ["EDUCATION & CREDENTIALS", "The academic and research side of my story"],
    experience: ["THE BULLETIN BOARD", "Where communication meets coordination"],
    strategy: ["THE CONTENT NOTEBOOK", "Ideas with a little structure"],
    skills: ["THE TOOLBOX", "My creative toolkit"],
    contact: ["SEND A LITTLE NOTE", "Let's make something memorable"]
  };
  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={e => e.target === e.currentTarget && onClose()}>
      <section className="pixel-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <div className="modal-bar"><span className="modal-pips"><i/><i/><i/></span><span>KHUSHI.EXE — {titles[section]?.[0]}</span><button onClick={onClose} aria-label="Close window"><X size={18}/></button></div>
        <div className="modal-content">
          <p className="eyebrow">{titles[section]?.[0]}</p>
          <h2 id="modal-title">{titles[section]?.[1]}</h2>
          {section === "about" && <div className="about-modal">
            <PixelCharacter small mood="welcome"/>
            <div><p>Hey, I’m Khushi — a Computer Science and Artificial Intelligence undergraduate at Banasthali Vidyapith, graduating in May 2027.</p><p>I enjoy short-form video, visual storytelling, and creative experimentation. My experience coordinating speakers, preparing scripts, and supporting events has taught me to pair creative ideas with clear communication and reliable execution.</p><div className="tag-row"><span>STORYTELLING</span><span>CREATIVE CURIOSITY</span><span>TEAMWORK</span></div></div>
          </div>}
          {section === "work" && <div>
            <p className="modal-intro">These are the three Instagram Reels you shared. Open each original post to watch it. The cards use designed placeholders until you add thumbnails or tell me what each Reel is about.</p>
            <div className="reel-grid">
              <a className="reel-card reel-link-card" href={REEL_LINKS[0]} target="_blank" rel="noreferrer"><div className="reel-art"><span>REEL<br/>01</span><Clapperboard size={25}/><ArrowUpRight className="reel-open-icon" size={16}/></div><b>Instagram Reel 01 ↗</b><small>CapCut + Canva · Open original post</small></a>
              <a className="reel-card reel-link-card" href={REEL_LINKS[1]} target="_blank" rel="noreferrer"><div className="reel-art art-two"><span>REEL<br/>02</span><Sparkles size={24}/><ArrowUpRight className="reel-open-icon" size={16}/></div><b>Instagram Reel 02 ↗</b><small>Open original Instagram post</small></a>
              <a className="reel-card reel-link-card" href={REEL_LINKS[2]} target="_blank" rel="noreferrer"><div className="reel-art art-three"><span>REEL<br/>03</span><Heart size={24}/><ArrowUpRight className="reel-open-icon" size={16}/></div><b>Instagram Reel 03 ↗</b><small>Open original Instagram post</small></a>
            </div>
            <p className="note-box"><strong>Performance note:</strong> your resume reports 1,000+ organic views on one Reel. The portfolio does not assign that figure to a specific post until you confirm which Reel earned it.</p>
          </div>}
          {section === "campaigns" && <div><p className="modal-intro">Design studies for UI/UX and social visuals. These are self-initiated concepts, not client commissions or shipped products.</p><div className="project-list">{projects.map((p, i) => <article className={`project-row ${p.color}`} key={p.id}><div className="project-number">0{i+1}</div><div className="project-copy"><div className="project-meta">{p.type} · {p.label}</div><h3>{p.title}</h3><p>{p.brief}</p><details><summary>Open design details <ArrowUpRight size={14}/></summary><div className="details-content"><p><b>Audience:</b> {p.audience}</p><p><b>Creative idea:</b> {p.idea}</p><b>Deliverables</b><ul>{p.deliverables.map(d=><li key={d}>{d}</li>)}</ul><p className="hook-box">DESIGN PRINCIPLE: “{p.hook}”</p><p><b>Sample description:</b> {p.caption}</p><p><b>Evaluation plan:</b> {p.kpis}</p></div></details></div></article>)}</div><p className="note-box"><strong>Portfolio honesty:</strong> these are concept directions to demonstrate thinking and taste. Replace or expand them with your actual Figma screens and Canva designs when ready.</p></div>}
          {section === "tech" && <div><p className="modal-intro">Selected academic and research projects from my Computer Science with Artificial Intelligence degree. Details are grounded in my resume and the project details I supplied.</p><div className="project-list"><article className="project-row rose"><div className="project-number">01</div><div className="project-copy"><div className="project-meta">RESEARCH · COMPUTER VISION / EXPLAINABLE AI</div><h3>DeepX — Explainable Multimodal Deepfake Detection</h3><p>A framework exploring image, audio, and video deepfake detection using CNN-based modelling, MFCC audio features, and video-frame embeddings.</p><details><summary>Technical details <ArrowUpRight size={14}/></summary><div className="details-content"><p><b>Explainability:</b> Grad-CAM heatmaps and attention mechanisms to support interpretation.</p><p><b>Tools listed on resume:</b> Python, TensorFlow, OpenCV, Librosa, Flask, Django, MySQL.</p><p><b>Research milestone:</b> Selected for the IHCI Pre-Conference 2025 and featured in the college research magazine.</p></div></details></div></article><article className="project-row lilac"><div className="project-number">02</div><div className="project-copy"><div className="project-meta">RAG · INFORMATION RETRIEVAL</div><h3>RAG Evaluation and Hybrid Retrieval System</h3><p>A document question-answering workflow exploring dense retrieval alongside BM25 keyword search, reranking, and source-grounded answers.</p><details><summary>Technical details <ArrowUpRight size={14}/></summary><div className="details-content"><p><b>Stack:</b> Python, Sentence Transformers, FAISS, BM25, Cross-Encoder Reranking, Groq API, Streamlit, pytest, GitHub Actions.</p><p><b>Evaluation plan:</b> Recall@k, Mean Reciprocal Rank, answer relevance, citation correctness, and regression tests.</p><p><b>Focus:</b> Page-level citations and evidence-sufficiency checks for questions not supported by source documents.</p></div></details></div></article><article className="project-row peach"><div className="project-number">03</div><div className="project-copy"><div className="project-meta">USER-PROVIDED PROJECT SUMMARY · QUEUE MANAGEMENT</div><h3>Smart Queue Management System</h3><p>An AI-enabled queue-management idea using a web application and predictive analytics. Exact implementation details and results should be added after confirming the stack and your contribution.</p><p className="tiny-note">This project summary was supplied separately and is not detailed in the uploaded resume.</p></div></article></div><div className="tag-row"><span>PYTHON</span><span>COMPUTER VISION</span><span>RAG / RETRIEVAL</span><span>MATLAB</span><span>REACT</span><span>DATABASES</span></div><p className="note-box"><strong>Code:</strong> Visit <a href={GITHUB} target="_blank" rel="noreferrer">github.com/k17Coder ↗</a> for repositories. Add direct repository links for each project when ready.</p></div>}
          {section === "education" && <div className="timeline"><article><span className="timeline-year">2023—2027</span><div><h3>B.Tech — Computer Science with Artificial Intelligence</h3><p className="muted">Banasthali Vidyapith · Expected May 2027</p><p>CGPA: 8.03 / 10.0, as stated on the uploaded resume. Coursework listed: Image Processing and Computer Vision Lab, Geoinformatics.</p></div></article><article><span className="timeline-year">2025</span><div><h3>Five MathWorks certifications</h3><p>MATLAB Onramp, Machine Learning Onramp, Image Processing Onramp, Computer Vision Onramp, and Color Spaces and Image Segmentation.</p></div></article><article><span className="timeline-year">2025</span><div><h3>Research presentation and IEEE activity</h3><p>Presented DeepX research at the IHCI Pre-Conference at Banasthali Vidyapith and participated in the IEEE Computer Society Innovation and Leadership in AI Workshop.</p></div></article><article><span className="timeline-year">2021 / 2023</span><div><h3>Delhi Public School, Ranipur</h3><p>Class X: 95.2% (2021) · Class XII: 76% (2023), as listed on the resume.</p></div></article><p className="note-box">Location in your resume: Haridwar, Uttarakhand.</p></div>}
          {section === "experience" && <div className="timeline">
            <article><span className="timeline-year">2025</span><div><h3>Anchor & Event Coordinator</h3><p className="muted">IEEE Student Activities · IHCI Pre-Conference</p><p>Prepared scripts, helped coordinate speakers and volunteers, and supported event communication and smooth execution.</p><span className="skill-chip">COMMUNICATION</span><span className="skill-chip">COORDINATION</span></div></article>
            <article><span className="timeline-year">2025</span><div><h3>IEEE CIS Innovation & Leadership in AI Workshop</h3><p>Participated in a workshop exploring innovation and leadership in AI.</p><span className="skill-chip">COLLABORATION</span></div></article>
            <article><span className="timeline-year">2026—NOW</span><div><h3>Social Media Content Creator</h3><p>Created and edited short-form content with CapCut and Canva. One Reel achieved 1,000+ organic views without paid promotion.</p><span className="skill-chip">SHORT-FORM VIDEO</span><span className="skill-chip">BASIC ANALYTICS</span></div></article>
          </div>}
          {section === "strategy" && <div>
            <p className="modal-intro">A sample week for a small lifestyle or creator-led brand. This is a proposed plan, not a published campaign.</p>
            <div className="calendar-list">{calendar.map(([day, type, idea])=><div className="calendar-item" key={day}><span>{day}</span><b>{type}</b><p>{idea}</p></div>)}</div>
            <div className="strategy-bottom"><div><h3>Hook bank</h3><ul><li>“POV: you finally found a simpler way to…”</li><li>“3 things I wish I knew before…”</li><li>“Stop scrolling if you’re trying to…”</li></ul></div><div><h3>What I’d measure</h3><p>Reach, watch time, completion rate, saves, shares, profile visits, and link clicks — chosen according to the post’s goal.</p></div></div>
          </div>}
          {section === "skills" && <div className="skills-grid">{[["Canva","Visual assets"],["CapCut","Short-form editing"],["iPhone","Video shooting"],["Google Sheets","Organization"],["Figma","Design familiarity"],["Python / AI","Technical perspective"],["Public speaking","Clear communication"],["Event coordination","Planning & teamwork"]].map(([a,b])=><div className="skill-card" key={a}><Star size={16}/><b>{a}</b><small>{b}</small></div>)}</div>}
          {section === "contact" && <div className="contact-panel"><PixelCharacter small mood="welcome"/><p>Have a creative project, an internship opportunity, or a fun idea? I’d love to hear from you.</p><a className="primary-button" href={`mailto:${EMAIL}`}><Mail size={16}/> Email Khushi <ArrowUpRight size={15}/></a><a className="secondary-button resume-download" href="/Khushi-Kaushik-Resume.pdf" download>DOWNLOAD RESUME <ArrowDown size={14}/></a><button className="text-button" onClick={() => navigator.clipboard?.writeText(EMAIL)}><Copy size={14}/> Copy email address</button><div className="contact-links"><a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn <ExternalLink size={13}/></a><a href={GITHUB} target="_blank" rel="noreferrer">GitHub <ExternalLink size={13}/></a>{INSTAGRAM && <a href={INSTAGRAM} target="_blank" rel="noreferrer">Instagram <ExternalLink size={13}/></a>}</div><p className="tiny-note">Before publishing, confirm that these links and your email are the ones you want recruiters to use.</p></div>}
        </div>
      </section>
    </div>
  );
}

export default function App() {
  const [section, setSection] = useState(null);
  const [intro, setIntro] = useState(() => !sessionStorage.getItem("pixelMuseEntered"));
  const [soundOn, setSoundOn] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handler = e => { if (e.key === "Escape") { setSection(null); setIntro(false); setMobileMenu(false); } };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const enter = () => { sessionStorage.setItem("pixelMuseEntered", "1"); setIntro(false); };
  const open = id => { setSection(id); setMobileMenu(false); };

  return <main className="site-shell">
    <div className="top-strip"><span>PIXEL MUSE <i>®</i></span><span>CREATIVE + TECHNICAL PORTFOLIO</span><span>HARIDWAR, INDIA · <span className="live-dot"/> OPEN TO INTERNSHIPS</span></div>
    <header className="site-header">
      <a className="wordmark" href="#" onClick={e=>{e.preventDefault();setSection(null);setIntro(false)}}>KHUSHI<span>.EXE</span><i>♡</i></a>
      <nav className={mobileMenu ? "nav-open" : ""}>
        <button onClick={()=>open("about")}>ABOUT</button><button onClick={()=>open("campaigns")}>DESIGN STUDIO</button><button onClick={()=>open("work")}>REELS</button><button onClick={()=>open("tech")}>AI & ENGINEERING</button><button onClick={()=>open("education")}>EDUCATION</button>
      </nav>
      <div className="header-actions"><button className="icon-button" aria-label="Toggle sound (visual only)" onClick={()=>setSoundOn(!soundOn)}>{soundOn ? <Volume2 size={17}/> : <VolumeX size={17}/>}</button><button className="contact-button" onClick={()=>open("contact")}>LET'S TALK <ArrowUpRight size={14}/></button><button className="menu-button" onClick={()=>setMobileMenu(!mobileMenu)} aria-label="Toggle navigation">{mobileMenu ? <X/> : <Menu/>}</button></div>
    </header>

    {intro && <div className="intro-overlay"><div className="intro-window"><div className="intro-window-bar"><span><i/><i/><i/></span><b>WELCOME.EXE</b><span>v.01</span></div><div className="intro-inner"><div className="intro-character"><PixelCharacter mood="welcome"/></div><div className="intro-copy"><p className="eyebrow">A SMALL WORLD OF BIG IDEAS</p><h1>Hey, I'm<br/><em>Khushi.</em></h1><p>I turn ideas into visual stories.</p><button className="start-button" onClick={enter}>▶ PRESS START</button><button className="skip-button" onClick={enter}>skip intro ↗</button></div></div><div className="intro-footer"><span>USE YOUR CURIOSITY TO EXPLORE</span><span>100% CREATIVE ENERGY</span></div></div><div className="intro-spark intro-spark-one">✦</div><div className="intro-spark intro-spark-two">♥</div></div>}

    <section className="hero-section">
      <div className="hero-copy">
        <div className="status-line"><span className="status-pixel"/> CREATIVE TECHNOLOGIST · AI + DESIGN</div>
        <h1>Cute pixels.<br/><span>Smart systems.</span><br/>Ideas with <i>purpose.</i></h1>
        <p className="hero-description">I'm Khushi — a Computer Science and Artificial Intelligence student who loves building intelligent technology, exploring UI/UX, and turning stories into visual content.</p>
        <div className="hero-ctas"><button className="primary-button" onClick={()=>open("tech")}>EXPLORE AI PROJECTS <ArrowDown size={15}/></button><button className="secondary-button" onClick={()=>open("campaigns")}>OPEN DESIGN STUDIO <ArrowUpRight size={15}/></button></div>
        <div className="hero-proof"><div><strong>8.03</strong><span>CGPA / 10</span></div><div className="proof-divider"/><div><strong>5</strong><span>MathWorks certificates</span></div><div className="proof-divider"/><div><strong>2027</strong><span>expected graduation</span></div></div>
      </div>
      <div className="hero-visual">
        <div className="visual-sticker sticker-top">CREATIVE<br/>MODE: ON <Sparkles size={15}/></div>
        <div className="hero-art-card">
          <div className="art-card-top"><span>PIXEL MUSE / 001</span><span>♥ ♥ ♥</span></div>
          <PixelRoom onOpen={open}/>
          <div className="art-card-bottom"><span>FIG. 01 — MY LITTLE CREATIVE WORLD</span><span>CLICK A PROP ↗</span></div>
        </div>
        <div className="visual-sticker sticker-bottom"><span>MADE OF</span><b>IDEAS +<br/>PIXELS</b><Heart size={19}/></div>
        <div className="hero-spark hero-spark-one">✦</div><div className="hero-spark hero-spark-two">✧</div>
      </div>
      <div className="hero-bottom-note"><span>SCROLL TO EXPLORE</span><ArrowDown size={14}/><span className="bottom-line"/></div>
    </section>

    <section className="quick-section" id="quick">
      <div className="section-heading"><p className="eyebrow">THE QUICK TOUR</p><h2>Choose your <em>adventure.</em></h2><p>Short on time? Start with the work, meet the creator, or jump straight to the concepts.</p></div>
      <div className="quick-grid">
        <button className="quick-card" onClick={()=>open("work")}><span className="quick-icon pink"><Camera/></span><span className="quick-number">01 / CONTENT</span><b>The content closet</b><small>Real Reels, edits, and creative experiments.</small><ArrowUpRight className="quick-arrow"/></button>
        <button className="quick-card" onClick={()=>open("campaigns")}><span className="quick-icon lilac"><Computer/></span><span className="quick-number">02 / DESIGN</span><b>Design studio</b><small>UI/UX explorations, visual identity, and social design concepts.</small><ArrowUpRight className="quick-arrow"/></button>
        <button className="quick-card" onClick={()=>open("tech")}><span className="quick-icon peach"><Code2/></span><span className="quick-number">03 / ENGINEERING</span><b>AI & engineering</b><small>DeepX, RAG retrieval, and technical projects.</small><ArrowUpRight className="quick-arrow"/></button>
        <button className="quick-card" onClick={()=>open("education")}><span className="quick-icon mint"><NotebookPen/></span><span className="quick-number">04 / BACKGROUND</span><b>Education & credentials</b><small>Degree, research milestones, and certifications.</small><ArrowUpRight className="quick-arrow"/></button>
      </div>
    </section>

    <section className="manifesto-section"><div className="manifesto-mark">✳</div><p className="eyebrow">MY CREATIVE POV</p><h2>Pretty is nice.<br/><em>Purpose is better.</em></h2><p>I’m interested in how people experience technology — from the interface they tap, to the AI behind it, to the story that helps it connect with an audience.</p><div className="manifesto-tags"><span>DESIGN THINKING</span><span>AI + ENGINEERING</span><span>VISUAL STORYTELLING</span></div></section>

    <section className="footer-cta"><div><p className="eyebrow">YOUR NEXT INTERN?</p><h2>Let's build<br/><em>something meaningful.</em></h2><p>Thoughtful interfaces, intelligent systems, and visual stories with a point of view.</p></div><button className="primary-button" onClick={()=>open("contact")}>GET IN TOUCH <ArrowUpRight size={16}/></button><div className="footer-doodle">♥<br/>✦</div></section>

    <footer className="site-footer"><a className="wordmark" href="#" onClick={e=>{e.preventDefault();window.scrollTo({top:0,behavior:"smooth"})}}>KHUSHI<span>.EXE</span><i>♡</i></a><p>Built with curiosity, caffeine, and too many pink pixels.</p><div><a href={LINKEDIN} target="_blank" rel="noreferrer">LINKEDIN ↗</a><a href={GITHUB} target="_blank" rel="noreferrer">GITHUB ↗</a><a href={INSTAGRAM} target="_blank" rel="noreferrer">INSTAGRAM ↗</a><a href={`mailto:${EMAIL}`}>EMAIL ↗</a></div><small>© 2026 KHUSHI KAUSHIK · PIXEL MUSE</small></footer>

    <Modal section={section} onClose={()=>setSection(null)}/>
    <button className="quick-nav-fab" onClick={()=>document.getElementById("quick")?.scrollIntoView({behavior:"smooth"})} aria-label="Jump to quick navigation"><Menu size={17}/><span>QUICK TOUR</span></button>
  </main>;
}
