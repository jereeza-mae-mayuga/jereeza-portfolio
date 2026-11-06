
"use client";

import Link from "next/link";
import { useEffect } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Award,
  FileText,
  Palette,
  Users,
  GraduationCap,
} from "lucide-react";

const awards = [
  {
    title: "Student Excellence Award",
    subject: "Capstone Project 1",
    date: "September 11, 2026",
    file: "Certification_Capstone1.pdf",
    number: "01",
  },
  {
    title: "Student Excellence Award",
    subject: "System Integration and Architecture 2",
    date: "September 11, 2026",
    file: "Certification_SystemAd.pdf",
    number: "02",
  },
];


const involvement = [
  {
    title: "Digital Media Officer",
    organization: "Domini Xode Student Organization",
    period: "A.Y. 2023–2024",
    description:
      "Responsible for creating visual materials, managing social media content, and documenting organizational activities.",
    responsibilities: [
      "Designed certificates for organizational events and activities.",
      "Created graphics and visual materials for announcements and Facebook posts.",
      "Prepared and published content on the organization's Facebook page.",
      "Documented organizational events and activities through photography and supporting materials.",
    ],
    file: "Certification_DMO(1).pdf",
    Icon: Palette,
  },
  {
    title: "JPCS National Member",
    organization: "Junior Philippine Computer Society · Domini Xode Affiliated Chapter",
    period: "A.Y. 2023–2024",
    description:
      "Participated as a member of the Junior Philippine Computer Society through the campus-affiliated chapter.",
    responsibilities: [],
    file: "Certification_JPCS.pdf",
    Icon: Users,
  },
];


export default function Achievements() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".sun-reveal"
    );

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
          04 / MY JOURNEY · ACHIEVEMENTS
        </span>
        <h1>
          The <em>highlights.</em>
        </h1>
        <p>
          Academic recognition, project awards, and
          student organization experience.
        </p>
      </section>

      <section className="sun-section sun-reveal">
        <div className="sun-section-top">
          <span className="sun-index">01 / ACADEMICS</span>
          <GraduationCap size={20} />
        </div>

        <div className="sun-deans">
          <div className="sun-deans-copy">
            <span className="sun-overline">
              ACADEMIC RECOGNITION
            </span>

            <h2>
              Consistent
              <br />
              <em>Dean&apos;s Lister.</em>
            </h2>

            <p>St. Dominic College of Asia</p>

            <div className="sun-deans-year">
              2023 <span>—</span> 2025
            </div>
          </div>

          <div className="sun-deans-art" aria-hidden="true">
            <div className="sun-orbit sun-orbit-one" />
            <div className="sun-orbit sun-orbit-two" />
            <div className="sun-orbit-center">
              <GraduationCap size={48} strokeWidth={1.4} />
            </div>
            <span className="sun-orbit-spark sun-spark-one">
              ✦
            </span>
            <span className="sun-orbit-spark sun-spark-two">
              ✧
            </span>
          </div>
        </div>
      </section>

      <section className="sun-section">
        <div className="sun-section-top sun-reveal">
          <span className="sun-index">02 / RECOGNITION</span>
          <Award size={20} />
        </div>

        <h2 className="sun-section-title sun-reveal">
          Awards & recognition
        </h2>

        <div className="sun-card-grid">
          {awards.map((award) => (
            <article
              className="sun-award-card sun-reveal"
              key={award.file}
            >
              <div className="sun-card-top">
                <span>{award.number} / AWARD</span>
                <Award size={22} />
              </div>

              <div className="sun-award-emblem" aria-hidden="true">
                <Award size={45} strokeWidth={1.25} />
              </div>

              <h3>{award.title}</h3>
              <p className="sun-card-subject">
                {award.subject}
              </p>

              <p className="sun-card-meta">
                St. Dominic College of Asia
                <br />
                {award.date}
              </p>

              <a
                className="sun-card-link"
                href={`/certificates/awards/${award.file}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText size={16} />
                View certificate
                <ArrowUpRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="sun-section">
        <div className="sun-section-top sun-reveal">
          <span className="sun-index">03 / INVOLVEMENT</span>
          <Users size={20} />
        </div>

        <h2 className="sun-section-title sun-reveal">
          Campus involvement
        </h2>

        
        <div className="sun-involvement-list">
        {involvement.map((item) => (
            <article
            className="sun-involvement-card sun-reveal"
            key={item.title}
            >
            <div className="sun-involvement-icon">
                <item.Icon size={27} strokeWidth={1.5} />
            </div>

            <div className="sun-involvement-body">
                <span className="sun-overline">
                {item.period}
                </span>

                <h3>{item.title}</h3>

                <p className="sun-involvement-org">
                {item.organization}
                </p>

                <p>{item.description}</p>

                {item.responsibilities.length > 0 && (
                <div className="sun-leadership-details">
                    <span className="sun-overline">
                    KEY CONTRIBUTIONS
                    </span>

                    <ul className="sun-leadership-list">
                    {item.responsibilities.map((responsibility) => (
                        <li key={responsibility}>
                        <span
                            className="sun-leadership-dot"
                            aria-hidden="true"
                        />
                        {responsibility}
                        </li>
                    ))}
                    </ul>
                </div>
                )}

                <a
                className="sun-inline-link"
                href={`/certificates/awards/${item.file}`}
                target="_blank"
                rel="noopener noreferrer"
                >
                <FileText size={15} />
                View certificate
                <ArrowUpRight size={15} />
                </a>
            </div>
            </article>
        ))}
        </div>

      </section>
    </main>
  );
}
