
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Layers3,
  Code2,
  Target,
  Users,
  ClipboardCheck,
} from "lucide-react";
import { notFound } from "next/navigation";
import { projects } from "../../../lib/portfolio-data";
import {
  GalleryImage,
  LikeButton,
} from "../../../components/ProjectShowcase";

const featuredSlugs = [
  "padalock",
  "req-it",
  "iot-parcel-locker",
] as const;

const projectDetails: Record<
  string,
  {
    gallery: { src: string; label: string }[];
    objectives: string[];
    contribution: string;
    output: string;
    team?: string[];
  }
> = {
  padalock: {
    gallery: [
      {
        src: "/projects/padalock-cover.png",
        label: "Web and mobile application showcase",
      },
      {
        src: "/projects/padalock-diagram.png",
        label: "System architecture diagram",
      },
    ],
    objectives: [
      "Develop a residential IoT parcel locker supporting deliveries, retrievals, and returns.",
      "Implement tracking-number validation and PIN-based authentication.",
      "Integrate parcel-presence detection using an ultrasonic sensor.",
      "Record transaction activities and authentication events.",
      "Integrate event-triggered surveillance with transaction records.",
    ],
    contribution:
      "Served as team leader and contributed to hardware development and integration.",
    output:
      "An IoT-based residential parcel locker prototype designed to integrate controlled access, parcel detection, transaction monitoring, and surveillance. System evaluation is part of the capstone study.",
    team: [
      "Christine Joyce M. Belen",
      "Paul Andrei F. Cielo",
      "Jordan Chester Garcia",
      "Jereeza Mae T. Mayuga",
    ],
  },

  "req-it": {
    gallery: [
      {
        src: "/projects/req-it-cover.png",
        label: "Web and mobile application showcase",
      },
      {
        src: "/projects/req-it-diagram.png",
        label: "System diagram",
      },
    ],
    objectives: [
      "Allow students and alumni to request academic documents online.",
      "Support uploading proof of payment for document requests.",
      "Provide a registrar portal for managing and monitoring requests.",
      "Integrate RFID-based verification for document claiming.",
      "Provide request-status tracking and notifications.",
    ],
    contribution:
      "Served as team leader and contributed to frontend development, backend development, and project documentation.",
    output:
      "A document request and tracking system designed to connect students, alumni, and registrar staff through web and mobile interfaces with RFID-based claiming verification.",
  },

  "iot-parcel-locker": {
    gallery: [
      {
        src: "/projects/iot-cover.png",
        label: "IoT parcel locker project showcase",
      },
      {
        src: "/projects/iot-diagram.png",
        label: "IoT system diagram",
      },
    ],
    objectives: [
      "Develop an IoT-based parcel collection prototype.",
      "Implement electronic access control for parcel handling.",
      "Integrate tracking-number verification.",
      "Use sensors to detect parcel presence.",
      "Provide a web dashboard for parcel monitoring.",
    ],
    contribution:
      "Served as team leader and contributed to hardware development and integration.",
    output:
      "A smart parcel collection prototype combining embedded hardware, parcel detection, electronic locking, and web-based monitoring.",
  },
};

export function generateStaticParams() {
  return featuredSlugs.map((slug) => ({ slug }));
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const featured = featuredSlugs
    .map((featuredSlug) =>
      projects.find((project) => project.slug === featuredSlug)
    )
    .filter(
      (project): project is (typeof projects)[number] =>
        project !== undefined
    );

  const index = featured.findIndex(
    (project) => project.slug === slug
  );

  if (index === -1 || !projectDetails[slug]) {
    notFound();
  }

  const project = featured[index];
  const details = projectDetails[slug];

  const previous =
    featured[(index - 1 + featured.length) % featured.length];

  const next =
    featured[(index + 1) % featured.length];

  return (
    <main className="detail-shell fresh-shell showcase-detail-page">
      <header className="detail-nav">
        <Link href="/#projects">
          <ArrowLeft size={16} />
          Back to projects
        </Link>

        <Link href="/" className="detail-brand">
          jereeza<span>✿</span>
        </Link>
      </header>

      <section className="detail-hero showcase-detail-hero">
        <span className="detail-eyebrow">
          03 / MY CREATIONS · {project.type.toUpperCase()}
        </span>

        <div className="showcase-detail-title">
          <h1>
            {project.title}
            <span className="showcase-title-spark">✳</span>
          </h1>

          <LikeButton slug={project.slug} />
        </div>

        <p>{project.description}</p>

        <div className="showcase-detail-meta">
          <span>
            {String(index + 1).padStart(2, "0")} / 03
          </span>
          <span>{project.type}</span>
        </div>
      </section>

      <section
        className="showcase-detail-gallery"
        aria-label="Project images"
      >
        <div className="showcase-detail-gallery-heading">
            <span>VISUAL OVERVIEW</span>
            </div>

        <div className="showcase-gallery-grid">
          {details.gallery.map((item, i) => (
            <figure
              key={item.src}
              className={`showcase-gallery-item ${
                i === 0 ? "showcase-gallery-primary" : ""
              }`}
            >
              <GalleryImage
                src={item.src}
                alt={`${project.title}: ${item.label}`}
              />

              <figcaption>
                <span>
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="showcase-detail-info">
        <div className="showcase-detail-fact">
          <span>PROJECT TYPE</span>
          <h2>{project.type}</h2>
        </div>

        <div className="showcase-detail-fact">
          <span>MY CONTRIBUTION</span>
          <h2>{project.role}</h2>
        </div>

        <div className="showcase-detail-tech">
          <div className="showcase-detail-tech-title">
            <Layers3 size={20} />
            <h2>Technologies & components</h2>
          </div>

          <div className="showcase-tags">
            {project.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>

        <div className="showcase-detail-context">
          <Target size={20} />
          <div>
            <h2>Project objectives</h2>
            <ul className="project-objectives-list">
              {details.objectives.map((objective) => (
                <li key={objective}>{objective}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="showcase-detail-context">
          <Code2 size={20} />
          <div>
            <h2>My role & contributions</h2>
            <p>{details.contribution}</p>
          </div>
        </div>

        <div className="showcase-detail-context">
          <ClipboardCheck size={20} />
          <div>
            <h2>Project output</h2>
            <p>{details.output}</p>
          </div>
        </div>
      </section>

      <nav className="fresh-project-nav showcase-detail-nav">
        <Link href={`/projects/${previous.slug}`}>
          <ArrowLeft size={18} />
          <span>
            <small>PREVIOUS PROJECT</small>
            {previous.title}
          </span>
        </Link>

        <span>
          {index + 1} / {featured.length}
        </span>

        <Link href={`/projects/${next.slug}`}>
          <span>
            <small>NEXT PROJECT</small>
            {next.title}
          </span>
          <ArrowRight size={18} />
        </Link>
      </nav>

      <Link href="/#projects" className="detail-bottom-link">
        <ArrowLeft size={16} />
        Back to all projects
      </Link>
    </main>
  );
}
