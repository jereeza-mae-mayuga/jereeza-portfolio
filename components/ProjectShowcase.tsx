"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, Heart, Eye, X } from "lucide-react";
import { createPortal } from "react-dom";

export type ShowcaseProject = {
  slug: string;
  title: string;
  type: string;
  description: string;
  role: string;
  technologies: string[];
};

export const projectArtwork: Record<string, { cover: string; gallery: { src: string; label: string }[] }> = {
  padalock: {
    cover: "/projects/padalock-cover.png",
    gallery: [
      { src: "/projects/padalock-cover.png", label: "Application and dashboard" },
      { src: "/projects/padalock-diagram.png", label: "System architecture" },
    ],
  },
  "req-it": {
    cover: "/projects/req-it-cover.png",
    gallery: [
      { src: "/projects/req-it-cover.png", label: "Web and mobile interfaces" },
      { src: "/projects/req-it-diagram.png", label: "System architecture" },
    ],
  },
  "iot-parcel-locker": {
    cover: "/projects/iot-cover.png",
    gallery: [
      { src: "/projects/iot-cover.png", label: "System overview" },
      { src: "/projects/iot-diagram.png", label: "System diagram" },
    ],
  },
  mindblossom: { cover: "/projects/mindblossom.png", gallery: [] },
  sdcanteen: { cover: "/projects/sdcanteen.png", gallery: [] },
};

export function LikeButton({ slug }: { slug: string }) {
  const [liked, setLiked] = useState(false);
  const [pulse, setPulse] = useState(0);

  return (
    <button
      type="button"
      className={`showcase-like ${liked ? "is-liked" : ""}`}
      aria-label={`${liked ? "Unlike" : "Like"} ${slug}`}
      aria-pressed={liked}
      onClick={() => {
        setLiked((value) => !value);
        setPulse((value) => value + 1);
      }}
    >
      <Heart
        key={pulse}
        size={19}
        fill={liked ? "currentColor" : "none"}
        className="showcase-heart"
      />
    </button>
  );
}

export function GalleryImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!open) return;

    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", close);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", close);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={`showcase-image-button ${className}`}
        onClick={() => {
          if (!failed) setOpen(true);
        }}
        aria-label={`Enlarge ${alt}`}
      >
        {!failed ? (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            onError={() => setFailed(true)}
          />
        ) : (
          <span className="showcase-missing">Image unavailable</span>
        )}
        {!failed && (
          <span className="showcase-zoom">
            <Eye size={16} />
            Enlarge
          </span>
        )}
      </button>

      {open &&
        createPortal(
          <div className="showcase-lightbox" onClick={() => setOpen(false)}>
            <div
              className="showcase-lightbox-panel"
              role="dialog"
              aria-modal="true"
              aria-label={alt}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="showcase-lightbox-close"
                onClick={() => setOpen(false)}
                aria-label="Close image"
              >
                <X size={22} />
              </button>
              <img src={src} alt={alt} />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

const featuredSlugs = ["padalock", "req-it", "iot-parcel-locker"];

export default function ProjectShowcase({ projects }: { projects: ShowcaseProject[] }) {
  const [liked, setLiked] = useState<Record<string, boolean>>({});
  const [pulse, setPulse] = useState<Record<string, number>>({});

  const major = featuredSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is ShowcaseProject => project !== undefined);

  const small = projects.filter((project) => !featuredSlugs.includes(project.slug));

  function toggleLike(slug: string) {
    setLiked((current) => ({ ...current, [slug]: !current[slug] }));
    setPulse((current) => ({ ...current, [slug]: (current[slug] || 0) + 1 }));
  }

  function renderCard(project: ShowcaseProject, index: number, compact: boolean) {
    const artwork = projectArtwork[project.slug];

    return (
      <article
        key={project.slug}
        className={`showcase-card ${compact ? "showcase-compact" : "showcase-feature"}`}
        style={{ animationDelay: `${index * 90}ms` }}
      >
        <div className="showcase-artwork">
          <div className="showcase-cover">
            {artwork?.cover && (
              <img
                src={artwork.cover}
                alt={`${project.title} project presentation`}
                loading="lazy"
              />
            )}
          </div>
          <button
            type="button"
            className={`showcase-like ${liked[project.slug] ? "is-liked" : ""}`}
            aria-label={`${liked[project.slug] ? "Unlike" : "Like"} ${project.title}`}
            aria-pressed={!!liked[project.slug]}
            onClick={() => toggleLike(project.slug)}
          >
            <Heart
              key={pulse[project.slug] || 0}
              size={19}
              className="showcase-heart"
              fill={liked[project.slug] ? "currentColor" : "none"}
            />
          </button>
        </div>

        <div className="showcase-card-copy">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="showcase-tags">
            {project.technologies.slice(0, compact ? 3 : 4).map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
          {!compact && (
            <div className="showcase-card-footer">
              <Link href={`/projects/${project.slug}`} className="showcase-open">
                Explore project <ArrowUpRight size={17} />
              </Link>
            </div>
          )}
        </div>
      </article>
    );
  }

  return (
    <div className="showcase-collection">
      <div className="showcase-feature-grid">
        {major.map((project, index) => renderCard(project, index, false))}
      </div>
      <div className="showcase-small-grid">
        {small.map((project, index) => renderCard(project, index + major.length, true))}
      </div>
    </div>
  );
}
