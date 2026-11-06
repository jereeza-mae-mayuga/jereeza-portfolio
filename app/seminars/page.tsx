
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
} from "lucide-react";

const seminars = [
  {
    date: "April 24, 2026",
    title: "BSIT Week 2026 — Career Talk",
    organizer: "BSIT Week · St. Dominic College of Asia",
    description:
      "A career-focused seminar exploring the transition from college to the IT industry. The sessions highlighted the importance of workplace readiness, professional certifications, and the growing influence of artificial intelligence on research and technology careers.",
    details: [
      "Kris Lao Sanchez, CEO of KSF — Career-Ready IT Graduates: Integrating Soft Skills and OJT Experience. The session focused on combining technical knowledge, communication skills, and internship experience to prepare for professional work.",
      "Orlando Seachon Jr., Chairman and CEO of CertTech Central — Future-Proof Your Career: The Power of IT Certifications. The discussion emphasized how professional certifications can help demonstrate technical competencies and support career development.",
      "Dr. Pastor Arguelles Jr., Director of the Research and Publication Office at the University of Batangas — From Automation to Insight: How AI Is Reshaping IT Research Paradigms. The session explored the role of AI in transforming research methods, analysis, and technological innovation.",
    ],
  },
  {
    date: "October 28, 2025",
    title: "DC Ugnayan Seminar",
    organizer:
      "BSIT Department · Domini Xode · St. Dominic College of Asia",
    description:
      "An academic seminar examining the impact of artificial intelligence on education, digital identity, and lifelong learning. The discussions connected responsible participation in the digital world with creativity, innovation, and the skills needed to adapt to an AI-driven future.",
    details: [
      "Mitch Frankein Desierto — Digital Footprints: Artificial Intelligence. The session explored digital footprints and their relationship to artificial intelligence, encouraging greater awareness of how individuals interact with digital technologies.",
      "Dr. Cherry May Rotas-Palacio, RGC, RPm — Innovate, Create, Lead: Future-Ready Life-Long Learners in the Age of AI. The discussion highlighted innovation, creativity, leadership, and continuous learning as important qualities for students navigating technological change.",
    ],
  },
  {
    date: "May 28, 2025",
    title: "Resilience Minds, Intelligent Futures",
    organizer: "Domini Xode Student Organization",
    description:
      "Navigating IT Careers in the Age of AI — a seminar examining how artificial intelligence is reshaping traditional IT roles while creating new professional opportunities. It emphasized resilience, adaptability, continuous learning, and a growth mindset as essential qualities for future IT professionals.",
    details: [
      "Ryan Soh, Senior Corporate Adviser of FilPass, and Samson Milanes Jr., Founder and President of MGI International Ltd., shared professional perspectives on the evolving technology industry and AI-driven career opportunities.",
      "The discussions emphasized adapting to emerging technologies, embracing innovation, and developing the flexibility needed to respond to changing workplace demands.",
      "Interactive activities and an open question-and-answer session allowed students to engage with the speakers and explore practical approaches to professional development.",
    ],
  },
  {
    date: "May 29, 2024",
    title: "DICT Cybersecurity Caravan",
    organizer:
      "Department of Information and Communications Technology · Domini Xode · St. Dominic College of Asia",
    description:
      "A technology-focused campus event highlighting cybersecurity awareness, ICT literacy, digital competency development, and government initiatives supporting innovation in the Philippines.",
    details: [
      "Cybersecurity awareness — introducing the importance of protecting digital systems, information, and online activities.",
      "ICT literacy and competency development — highlighting the role of digital knowledge and technical skills in preparing students for technology-related opportunities.",
      "Digital Startup Development and Acceleration Program — featuring DICT initiatives that support digital innovation and the development of technology-based enterprises.",
    ],
  },
];

const slides = [
  "/certificates/previews/global-classroom-1.png",
  "/certificates/previews/global-classroom-2.png",
];

export default function Seminars() {
  const [slide, setSlide] = useState(0);
  const [expanded, setExpanded] = useState<number[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = document.querySelectorAll(".sun-reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const timeline = timelineRef.current;
        if (!timeline) return;

        const rect = timeline.getBoundingClientRect();
        const viewportPoint = window.innerHeight * 0.65;
        const progress = Math.max(
          0,
          Math.min(
            1,
            (viewportPoint - rect.top) / rect.height
          )
        );

        timeline.style.setProperty(
          "--sun-progress",
          `${progress * 100}%`
        );
      });
    };

    update();

    window.addEventListener("scroll", update, {
      passive: true,
    });
    window.addEventListener("resize", update);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [expanded]);

  const toggle = (index: number) => {
    setExpanded((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index]
    );
  };

  const previous = () =>
    setSlide(
      (current) => (current - 1 + slides.length) % slides.length
    );

  const next = () =>
    setSlide(
      (current) => (current + 1) % slides.length
    );

  return (
    <main className="detail-shell fresh-shell sun-page">
      <header className="detail-nav">
        <Link href="/#milestones">
          <ArrowLeft size={16} />
          Back to My Journey
        </Link>

        <Link href="/" className="detail-brand">
          jereeza<span>✿</span>
        </Link>
      </header>

      <section className="detail-hero sun-reveal">
        <span className="detail-eyebrow">
          04 / MY JOURNEY · SEMINARS
        </span>

        <h1>
          Beyond the <em>classroom.</em>
        </h1>

        <p>
          Seminars, industry perspectives, and learning
          experiences throughout my IT journey.
        </p>
      </section>

      <section className="sun-section">
        <div className="sun-section-top sun-reveal">
          <span className="sun-index">
            SEMINARS & LEARNING EVENTS
          </span>
          <CalendarDays size={19} />
        </div>

        <div className="sun-timeline" ref={timelineRef}>
          {seminars.map((seminar, index) => {
            const isOpen = expanded.includes(index);

            return (
              <article
                className="sun-timeline-item sun-reveal"
                key={seminar.title}
              >
                <span
                  className="sun-timeline-marker"
                  aria-hidden="true"
                />

                <div className="sun-timeline-card">
                  <span className="sun-overline">
                    {seminar.date}
                  </span>

                  <h2>{seminar.title}</h2>

                  <p className="sun-event-organizer">
                    {seminar.organizer}
                  </p>

                  <p className="sun-event-description">
                    {seminar.description}
                  </p>

                  {seminar.details.length > 0 && (
                    <>
                      <button
                        type="button"
                        className="sun-expand-button"
                        onClick={() => toggle(index)}
                        aria-expanded={isOpen}
                      >
                        {isOpen
                          ? "Hide session details"
                          : "View session details"}

                        <ChevronDown
                          size={17}
                          className={
                            isOpen ? "sun-chevron-open" : ""
                          }
                        />
                      </button>

                      {isOpen && (
                        <div className="sun-session-list">
                          {seminar.details.map(
                            (session, sessionIndex) => (
                              <div
                                className="sun-session"
                                key={sessionIndex}
                              >
                                <span className="sun-session-number">
                                  {String(
                                    sessionIndex + 1
                                  ).padStart(2, "0")}
                                </span>

                                <div>
                                  <p>{session}</p>
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      )}
                    </>
                  )}
                </div>
              </article>
            );
          })}

          <article className="sun-timeline-item sun-reveal">
            <span
              className="sun-timeline-marker"
              aria-hidden="true"
            />

            <div className="sun-timeline-card">
              <span className="sun-overline">
                MAY 2024
              </span>

              <h2>Global Classroom Sessions</h2>

              <p className="sun-event-organizer">
                St. Dominic College of Asia
              </p>

              <p className="sun-event-description">
                Global Trends and Practices — sessions
                exploring international perspectives and
                approaches beyond the traditional classroom.
              </p>

              <div className="sun-certificate-viewer">
                <div className="sun-viewer-heading">
                  <span>
                    <GraduationCap size={17} />
                    Certificates of Attendance
                  </span>
                  <span>
                    {slide + 1} / {slides.length}
                  </span>
                </div>

                <div className="sun-viewer-image">
                  <img
                    src={slides[slide]}
                    alt={`Global Classroom certificate ${
                      slide + 1
                    }`}
                  />
                </div>

                <div className="sun-viewer-controls">
                  <button
                    type="button"
                    onClick={previous}
                    aria-label="Previous certificate"
                  >
                    <ChevronLeft size={19} />
                  </button>

                  <div className="sun-viewer-dots">
                    {slides.map((_, index) => (
                      <button
                        type="button"
                        key={index}
                        className={
                          slide === index ? "active" : ""
                        }
                        onClick={() => setSlide(index)}
                        aria-label={`Show certificate ${
                          index + 1
                        }`}
                        aria-current={
                          slide === index ? "true" : undefined
                        }
                      />
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={next}
                    aria-label="Next certificate"
                  >
                    <ChevronRight size={19} />
                  </button>
                </div>

                <a
                  className="sun-inline-link"
                  href={slides[slide]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open certificate
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
