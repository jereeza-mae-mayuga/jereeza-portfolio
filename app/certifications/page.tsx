
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Award,
  Check,
  Eye,
  FileText,
  X,
} from "lucide-react";

import {
  certifications,
  additionalCredentials,
} from "../../lib/portfolio-data";


const previews: Record<string, string> = {
  "mos-word": "/certificates/previews/cert_word2019.png",
  "mos-powerpoint": "/certificates/previews/cert_ppt2019.png",
  "its-html-css": "/certificates/previews/cert_html-css.png",
  "its-javascript": "/certificates/previews/cert_javascript.png",
  "testdome-sql": "/certificates/previews/cert_sql_testdome.png",

  "cisco-ethical-hacker": "/certificates/previews/cert_cisco-ethical-hacker.png",
  "cisco-cybersecurity": "/certificates/previews/cert_cisco-cybersecurity.png",
  "cisco-iot": "/certificates/previews/cert_cisco-iot.png",
  "cisco-networking": "/certificates/previews/cert_cisco-networking.png",
};


const filters = [
  { id: "all", label: "All credentials" },
  { id: "microsoft", label: "Microsoft" },
  { id: "specialist", label: "IT Specialist" },
  { id: "cisco", label: "Cisco" },
  { id: "assessment", label: "Skills Assessment" },
];

const items = [...certifications, ...additionalCredentials];

function getGroup(category: string) {
  if (category.includes("Microsoft")) return "microsoft";
  if (category.includes("Information Technology")) return "specialist";
  if (category.includes("Cisco")) return "cisco";
  return "assessment";
}

export default function Certifications() {
  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState<string | null>(null);

  const current = items.find((item) => item.slug === open);

  const visible = items.filter(
    (item) =>
      filter === "all" || getGroup(item.category) === filter
  );

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () =>
      window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <main className="detail-shell fresh-shell credential-page">
      <header className="detail-nav">
        <Link href="/#milestones">
          <ArrowLeft size={16} />
          Back to My Journey
        </Link>

        <Link href="/" className="detail-brand">
          jereeza<span>✿</span>
        </Link>
      </header>

      <section className="detail-hero credential-hero">
        <span className="detail-eyebrow">
          04 / MY JOURNEY · CREDENTIALS
        </span>

        <h1>
          Little wins, <em>big growth.</em>
        </h1>

        <p>
          Professional certifications, verified badges, and
          technical skills assessments earned throughout my
          learning journey.
        </p>

        <div className="credential-hero-decoration" aria-hidden="true">
          <span>✳</span>
          <span>✦</span>
          <span>✳</span>
        </div>
      </section>

      <section className="credential-section">
        <div className="credential-heading">
          <div>
            <span className="credential-eyebrow">
              CERTIFICATIONS & BADGES
            </span>
            <h2>My credentials</h2>
          </div>

          <span className="credential-count">
            {String(visible.length).padStart(2, "0")} /{" "}
            {String(items.length).padStart(2, "0")}
          </span>
        </div>

        <div
          className="credential-filters"
          aria-label="Filter credentials"
        >
          {filters.map((option) => (
            <button
              key={option.id}
              type="button"
              className={`credential-filter ${
                filter === option.id ? "active" : ""
              }`}
              onClick={() => setFilter(option.id)}
              aria-pressed={filter === option.id}
            >
              {option.label}
            </button>
          ))}
        </div>

        <div className="credential-grid" key={filter}>
          {visible.map((item, index) => {
            const image = previews[item.slug];
            const group = getGroup(item.category);

            return (
              <article
                key={item.slug}
                className={`credential-card credential-${group}`}
                style={{
                  animationDelay: `${index * 65}ms`,
                }}
              >
                <div className="credential-card-top">
                  <span className="credential-card-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="credential-card-status">
                    <Check size={13} />
                    Earned
                  </span>
                </div>

                <div className="credential-visual">
                  {image ? (
                    <button
                      type="button"
                      className="credential-image-button"
                      onClick={() => setOpen(item.slug)}
                      aria-label={`Preview ${item.title}`}
                    >
                      <img
                        src={image}
                        alt={`Certificate for ${item.title}`}
                      />

                      <span className="credential-image-overlay">
                        <Eye size={17} />
                        View certificate
                      </span>
                    </button>
                  ) : (
                    <div className="credential-badge-placeholder">
                      <div className="credential-badge-symbol">
                        <Award size={37} strokeWidth={1.5} />
                      </div>

                      <span>
                        {group === "cisco"
                          ? "CISCO NETWORKING ACADEMY"
                          : "VERIFIED CREDENTIAL"}
                      </span>

                      <small>Digital badge</small>
                    </div>
                  )}
                </div>

                <div className="credential-card-body">
                  <span className="credential-category">
                    {item.category}
                  </span>

                  <h3>{item.title}</h3>

                  <p className="credential-issuer">
                    {item.issuer}
                  </p>

                  <div className="credential-card-bottom">
                    <span className="credential-date">
                      {item.date}
                    </span>

                    <div className="credential-actions">
                      {item.pdf && (
                        <a
                          href={item.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open PDF for ${item.title}`}
                          title="Open PDF"
                          className="credential-pdf-link"
                        >
                          <FileText size={17} />
                        </a>
                      )}

                      <a
                        href={item.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="credential-verify-link"
                      >
                        Verify
                        <ArrowUpRight size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {current && previews[current.slug] && (
        <div
          className="credential-modal"
          role="presentation"
          onClick={() => setOpen(null)}
        >
          <div
            className="credential-modal-panel"
            role="dialog"
            aria-modal="true"
            aria-label={`Certificate preview: ${current.title}`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="credential-modal-header">
              <div>
                <span>CERTIFICATE PREVIEW</span>
                <h2>{current.title}</h2>
              </div>

              <button
                type="button"
                onClick={() => setOpen(null)}
                aria-label="Close preview"
              >
                <X size={21} />
              </button>
            </div>

            <div className="credential-modal-image">
              <img
                src={previews[current.slug]}
                alt={`Full certificate preview for ${current.title}`}
              />
            </div>

            <div className="credential-modal-footer">
              <span>{current.issuer}</span>

              <a
                href={current.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Verify credential
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
