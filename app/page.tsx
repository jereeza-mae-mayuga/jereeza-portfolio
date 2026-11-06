"use client";

import ScrollBloom from "../components/ScrollBloom";
import ProjectShowcase from "../components/ProjectShowcase";
import { projects as portfolioProjects } from "../lib/portfolio-data";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Cat,
  Code2,
  Coffee,
  Gamepad2,
  Heart,
  Mail,
  Menu,
  Sparkles,
  Star,
  Trophy,
  X,
} from "lucide-react";


// TODO: Add your own icons to public/images/tech/. Update each icon path if needed.
// Icons are optional: missing images show the first letters as a fallback.
const techGroups = [
  { title: "Languages & Markup", items: ["C", "Java", "Python", "JavaScript", "TypeScript", "HTML", "CSS", "Dart", "XML"] },
  { title: "Frameworks & Development", items: ["React", "Next.js", "Node.js", "Express.js", "Flutter", "Arduino", "PlatformIO", "Ren'Py"] },
  { title: "Databases & Services", items: ["MongoDB", "Firebase", "Oracle APEX", "Cloudinary"] },
  { title: "Tools & Deployment", items: ["Android Studio", "VS Code", "Apache NetBeans", "Git", "GitHub", "Postman", "Vercel", "Render"] },
  { title: "Digital Art Software", items: ["Clip Studio Paint PRO", "MediBang Paint", "ibisPaint", "Adobe Photoshop", "PaintTool SAI"] },
];

const techIcons: Record<string, string> = {
  // TODO: Place icon files in public/images/tech/ with these filenames.
  // You can change each path to match your own PNG, SVG, or WEBP images.
  "C": "/images/tech/c.png", "Java": "/images/tech/java.png", "Python": "/images/tech/python.png",
  "JavaScript": "/images/tech/javascript.png", "TypeScript": "/images/tech/typescript.png",
  "HTML": "/images/tech/html.png", "CSS": "/images/tech/css.png", "Dart": "/images/tech/dart.png",
  "XML": "/images/tech/xml.png", "React": "/images/tech/react.png", "Next.js": "/images/tech/nextjs.png",
  "Node.js": "/images/tech/nodejs.png", "Express.js": "/images/tech/express.png",
  "Flutter": "/images/tech/flutter.png", "Arduino": "/images/tech/arduino.png",
  "PlatformIO": "/images/tech/platformio.png", "MongoDB": "/images/tech/mongodb.png",
  "Ren'Py": "/images/tech/renpy.png",
  "Firebase": "/images/tech/firebase.png", "Oracle APEX": "/images/tech/oracle-apex.png",
  "Cloudinary": "/images/tech/cloudinary.png", "Android Studio": "/images/tech/android-studio.png",
  "VS Code": "/images/tech/vscode.png", "Apache NetBeans": "/images/tech/netbeans.png",
  "Git": "/images/tech/git.png", "GitHub": "/images/tech/github.png",
  "Postman": "/images/tech/postman.png", "Vercel": "/images/tech/vercel.png",
  "Render": "/images/tech/render.png", "Clip Studio Paint PRO": "/images/tech/clip-studio.png",
  "MediBang Paint": "/images/tech/medibang.png", "ibisPaint": "/images/tech/ibispaint.png",
  "Adobe Photoshop": "/images/tech/photoshop.png", "PaintTool SAI": "/images/tech/sai.png",
};


function TechIcon({ name }: { name: string }) {
  const [failed, setFailed] = useState(false);
  const path = techIcons[name];
  return path && !failed ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={path} alt="" loading="lazy" onError={() => setFailed(true)} />
  ) : <span aria-hidden="true">{name.slice(0, 2).toUpperCase()}</span>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutLiked, setAboutLiked] = useState(false);
  const [aboutHeartPulse, setAboutHeartPulse] = useState(0);
  const [creativeMode, setCreativeMode] = useState(true);
  return (
    <main><ScrollBloom/>
      <nav className="navbar">
        <Link href="/" className="logo">
          jereeza<span className="logo-flower">✿</span>
        </Link>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#milestones" onClick={() => setMenuOpen(false)}>Journey</a>
        </div>

        <a href="#contact" className="nav-contact">
          Say hello <ArrowUpRight size={16} />
        </a>

        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* HERO */}
      <section className="hero section-shell" id="home">
        <div className="hero-copy">
          <div className="status-pill">
            <span className="status-dot" />
            WELCOME TO MY LITTLE WORLD
          </div>

          <div className="hero-heading">
            <p className="eyebrow">HELLO, WORLD! I'M</p>
            <h1>
              Jereeza<span className="heading-flower">✿</span>
            </h1>
          <h2>
            Somewhere between
            <br />
            <span>logic</span> and <span>imagination.</span>
          </h2>
          </div>

          <p className="hero-description">
            An Information Technology student interested in backend development, web and mobile applications, and IoT systems.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              Explore my work <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="hero-footer">
            <span className="mini-sparkle">✳</span>
            IT student · developer · freelance digital artist
          </div>
        </div>

        <div className={`hero-art creative-garden ${creativeMode ? "creative-on" : "creative-off"}`}>
          <div className="art-grid" />

          <div className="floating-label top-label">
            <Star size={14} fill="currentColor" />
            LEVELING UP!
          </div>

          <div className="garden-window">
            <div className="window-top">
              <span className="window-dots">
                <i /><i /><i />
              </span>
              <span>my-little-world.exe</span>
              <Heart size={14} />
            </div>

            <div className="garden-content">
              <span className="pixel-label">PLAYER 01</span>

              <div
                className="sunflower-scene"
                role="img"
                aria-label={creativeMode ? "Happy blooming sunflower" : "Sad drooping sunflower"}
              >
                <span className="sun-ray ray-one" />
                <span className="sun-ray ray-two" />
                <span className="sun-ray ray-three" />
                <span className="sun-ray ray-four" />
                <span className="sun-ray ray-five" />
                <span className="sun-ray ray-six" />
                <span className="sun-ray ray-seven" />
                <span className="sun-ray ray-eight" />
                <div className="sunflower-face">
                  <span className="face-eyes">{creativeMode ? "•ᴗ•" : "•︵•"}</span>
                </div>
              </div>

              <div className="garden-ground" />

              <div className="game-message">
                <span>✦ DAILY QUEST</span>
                <strong>Build something worth sharing.</strong>
                <div className="progress-track">
                  <div className="progress-fill" />
                </div>
                <small>Status: Still building. ♡</small>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="floating-label bottom-label creative-toggle"
            onClick={() => setCreativeMode((current) => !current)}
            aria-pressed={creativeMode}
            aria-label={`Turn creative mode ${creativeMode ? "off" : "on"}`}
          >
            <Gamepad2 size={17} />
            creative mode: {creativeMode ? "ON" : "OFF"}
            <span className="creative-toggle-indicator" aria-hidden="true">
              {creativeMode ? "✦" : "☾"}
            </span>
          </button>

          <span className="decor-star star-one">✦</span>
          <span className="decor-star star-two">✳</span>
        </div>

        <a className="scroll-cue" href="#about">
          <ArrowDown size={16} />
          SCROLL TO EXPLORE
        </a>
      </section>

      {/* ABOUT */}
      <section className="about section-shell" id="about">
        <div className="section-intro">
          <span className="section-kicker">01 / THE PERSON BEHIND THE CODE</span>
          <h2>More than just <em>code.</em></h2>
          <p>A little about my background and interests.</p>
        </div>

        <div className="about-layout">
          
    <div className="about-card about-window-alive">
      <div className="about-card-top">
        <span>ABOUT_ME.TXT</span>

        <button
          type="button"
          className={`about-heart-button ${
            aboutLiked ? "is-liked" : ""
          }`}
          aria-label={
            aboutLiked
              ? "Unlike profile photo"
              : "Like profile photo"
          }
          aria-pressed={aboutLiked}
          title={aboutLiked ? "Unlike ♡" : "Send a little love ♡"}
          onClick={() => {
            setAboutLiked((current) => !current);
            setAboutHeartPulse((current) => current + 1);
          }}
        >
          <Heart
            key={aboutHeartPulse}
            size={19}
            fill={aboutLiked ? "currentColor" : "none"}
            className="about-heart-icon"
          />
        </button>
      </div>

      <div className="about-avatar about-avatar-interactive">
        <img
          src="/images/about-me.png"
          alt="Jereeza's profile"
          className="about-photo"
        />

        <span className="about-photo-spark about-photo-spark-one">
          ✦
        </span>
        <span className="about-photo-spark about-photo-spark-two">
          ✧
        </span>
      </div>

      <div className="about-card-bottom">
        <span>JEREEZA MAE</span>
        <span>✿ PLAYER ONE</span>
      </div>
    </div>


          <div className="about-text">
            <div className="tiny-label">
              <Sparkles size={16} />
              NICE TO MEET YOU!
            </div>
            <h3>
              Development, design,
              <span> and everything between.</span>
            </h3>
            <p>
              Hi! I'm Jereeza, an Information Technology student interested in
              web and mobile development, backend systems, and IoT.
            </p>
            <p>
              Through academic and collaborative projects, I've worked with
              databases, application development, and hardware integration.
              I also work as a freelance digital artist.
            </p>
            <p>
              Outside of coding, I enjoy gaming, drawing, and spending time with cats.
            </p>
            <div className="interest-tags">
              <span>🎮 gaming</span>
              <span>🎨 drawing</span>
              <span>🐈 cats</span>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK — keep the original cream card styling */}
      <section className="skills-section" id="skills">
        <div className="section-shell">
          <div className="section-intro">
            <span className="section-kicker">02 / MY INVENTORY</span>
            <h2>Technologies & <em>tools.</em></h2>
            <p>Tools I've used in coursework, projects, and digital art.</p>
          </div>
          <div className="tech-groups">
            {techGroups.map((group) => (
              <div className="tech-group" key={group.title}>
                <h3>{group.title}</h3>
                <div className="tech-grid">
                  {group.items.map((name) => (
                    <div className="tech-tile" key={name}>
                      <div className="tech-icon"><TechIcon name={name} /></div>
                      <span>{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects-section section-shell" id="projects">
        <div className="section-intro">
          <span className="section-kicker">03 / MY CREATIONS</span>
          <h2>Things I've <em>built.</em></h2>
          <p>Selected academic and collaborative projects.</p>
        </div>

        <ProjectShowcase projects={portfolioProjects} />
      </section>

      {/* MILESTONES */}
      <section className="milestones-section" id="milestones">
        <div className="section-shell milestones-layout">
          <div className="journey-intro-card">
            <span className="journey-decor" aria-hidden="true">✿</span>
            <span className="section-kicker">04 / MY JOURNEY</span>
            <h2>Beyond the <em>projects.</em></h2>
            <p>
              Certifications, coursework, and experiences from my time studying IT.
            </p>
            <div className="journey-note">
              <Trophy size={20} />
              <span>Learning through projects and practical experience.</span>
            </div>
          </div>

          <div className="milestone-list">
            <Link href="/certifications" className="milestone-item">
              <span className="milestone-symbol"><Star size={20} /></span>
              <div><small>CREDENTIALS</small><h3>Certifications</h3><p>Microsoft Office Specialist and IT Specialist credentials.</p></div>
              <ArrowUpRight size={20} />
            </Link>
            <Link href="/courses" className="milestone-item">
              <span className="milestone-symbol"><Code2 size={20} /></span>
              <div><small>LEARNING</small><h3>Courses & Training</h3><p>Additional coursework and training records.</p></div>
              <ArrowUpRight size={20} />
            </Link>
            <Link href="/seminars" className="milestone-item">
              <span className="milestone-symbol"><Star size={20} /></span>
              <div><small>EVENTS & LEARNING</small><h3>Seminars & Webinars</h3><p>Global classroom sessions, seminars, and learning events.</p></div>
              <ArrowUpRight size={20} />
            </Link>
            <Link href="/achievements" className="milestone-item">
              <span className="milestone-symbol"><Trophy size={20} /></span>
              <div><small>ACADEMIC & CAMPUS LIFE</small><h3>Achievements & Involvement</h3><p>Academic recognition and campus organization experience.</p></div>
              <ArrowUpRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section section-shell" id="contact">
        <div className="contact-panel">
          <span className="section-kicker">05 / LET'S CONNECT</span>
          <span className="contact-flower" aria-hidden="true">✿</span>
          <span className="contact-spark contact-spark-one" aria-hidden="true">✦</span>
          <span className="contact-spark contact-spark-two" aria-hidden="true">✳</span>
          <h2>Let's <em>connect.</em></h2>
          <p>
            Feel free to reach out about projects, collaboration, or opportunities.
          </p>
          {/* TODO: Replace YOUR_EMAIL_HERE and the GitHub URL with your own links. */}
          <div className="contact-actions">
            <a href="mailto:YOUR_EMAIL_HERE" className="btn btn-primary">
              <Mail size={18} /> Say hello
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <Code2 size={18} /> GitHub
            </a>
          </div>
          <div className="contact-bottom">
            <Coffee size={15} />
            Thanks for visiting!
          </div>
        </div>
      </section>

      <footer className="footer">
        <span>© 2026 Jereeza Mae Mayuga</span>
        <span>Built with Next.js.</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </main>
  );
}
