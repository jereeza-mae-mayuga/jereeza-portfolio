
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  GraduationCap,
} from "lucide-react";


const courses = [
  {
    title: "Entrepreneurship Learning Modules",
    provider: "Cisco Networking Academy",
    date: "September–November 2026",
    modules: [
      "Identifying Entrepreneurial Opportunity",
      "The Entrepreneurial Journey and Pathway",
      "The Entrepreneurial Perspective",
    ],
  },
  {
    title: "Getting Started with Cisco Packet Tracer",
    provider: "Cisco Networking Academy",
    date: "April 12, 2026",
    modules: [],
  },
  {
    title: "Introduction to IoT",
    provider: "Cisco Networking Academy",
    date: "February 15, 2026",
    modules: [
      "IoT Opportunities",
      "Securing Things",
      "Automating Things",
      "Data Insights",
      "Programming Things",
      "Digital Transformation",
    ],
  },
  {
    title: "Ethical Hacker",
    provider: "Cisco Networking Academy",
    date: "September 15, 2025",
    modules: [
      "Introduction to Ethical Hacking and Penetration Testing",
      "Planning and Scoping a Pentest Assessment",
      "Information Gathering and Vulnerability Scanning",
      "Social Engineering Attacks",
      "Exploiting Wired and Wireless Networks",
      "Exploiting Application-Based Vulnerabilities",
      "Cloud, Mobile, and IoT Security",
      "Performing Post-Exploitation Techniques",
      "Reporting and Communication",
      "Tools and Code Analysis",
    ],
  },
  {
    title: "Introduction to Cybersecurity",
    provider: "Cisco Networking Academy",
    date: "September 15, 2025",
    modules: [
      "Resource Specialist",
      "Network Defense",
      "System Safeguards",
      "Threat Analysis",
      "Cybersecurity Administration",
    ],
  },
  {
    title: "Networking Basics",
    provider: "Cisco Networking Academy",
    date: "May 29, 2025",
    modules: [
      "Networking Protocols Basics",
      "Network Communications Basics",
      "Internet Protocol Basics",
      "Network Access Basics",
    ],
  },
  {
    title: "Java Foundations",
    provider: "Oracle Academy",
    date: "December 27, 2024",
    modules: [],
    certificate:
      "/certificates/previews/cert_oracle-java-foundations.png",
  },
];


export default function Courses() {
  const [expanded, setExpanded] = useState<string[]>([]);

  function toggle(title: string) {
    setExpanded((current) =>
      current.includes(title)
        ? current.filter((item) => item !== title)
        : [...current, title]
    );
  }

  return (
    <main className="detail-shell fresh-shell course-gallery-page">
      <header className="detail-nav">
        <Link href="/#milestones">
          <ArrowLeft size={16} />
          Back to My Journey
        </Link>

        <Link href="/" className="detail-brand">
          jereeza<span>✿</span>
        </Link>
      </header>

      <section className="detail-hero">
        <span className="detail-eyebrow">
          04 / MY JOURNEY · LEARNING LOG
        </span>

        <h1>
          Always <em>learning.</em> ✦
        </h1>

        <p>Completed courses and learning modules.</p>
      </section>

      <section className="course-gallery-section">
        <div className="course-gallery-heading">
          <div>
            <span className="course-gallery-kicker">
              COURSE COMPLETIONS
            </span>
            <h2>Learning archive</h2>
          </div>

          <span className="course-gallery-total">
            {String(courses.length).padStart(2, "0")} courses
          </span>
        </div>

        <div className="course-gallery-grid">
          {courses.map((course, index) => {
            const isExpanded = expanded.includes(course.title);
            const hasModules = course.modules.length > 0;

            return (
              <article
                className="course-gallery-card"
                key={course.title}
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <div className="course-gallery-card-top">
                  <span className="course-gallery-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="course-gallery-complete">
                    <CheckCircle2 size={14} />
                    Completed
                  </span>
                </div>

                <div className="course-gallery-icon">
                  <GraduationCap size={29} strokeWidth={1.5} />
                </div>

                <div className="course-gallery-body">
                  <span className="course-gallery-provider">
                    {course.provider}
                  </span>

                  <h3>{course.title}</h3>

                  <p className="course-gallery-date">
                    {course.date}
                  </p>

                  {hasModules && (
                    <>
                      <button
                        type="button"
                        className="course-gallery-toggle"
                        onClick={() => toggle(course.title)}
                        aria-expanded={isExpanded}
                      >
                        <span>
                          <BookOpen size={16} />
                          {course.modules.length} related modules
                        </span>

                        <ChevronDown
                          size={17}
                          className={
                            isExpanded ? "course-chevron-open" : ""
                          }
                        />
                      </button>

                      {isExpanded && (
                        <ol className="course-gallery-modules">
                          {course.modules.map((module, moduleIndex) => (
                            <li key={module}>
                              <span className="course-module-number">
                                {String(moduleIndex + 1).padStart(2, "0")}
                              </span>
                              <span>{module}</span>
                            </li>
                          ))}
                        </ol>
                      )}
                    </>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
