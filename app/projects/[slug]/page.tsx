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

const teamMembers = [
  "Christine Joyce M. Belen",
  "Paul Andrei F. Cielo",
  "Jordan Chester Garcia",
  "Jereeza Mae T. Mayuga",
];

type ProjectDetails = {
  gallery: { src: string; label: string }[];
  objectives: string[];
  contribution: string;
  output: string;
  team: string[];
};

const projectDetails: Record<string, ProjectDetails> = {
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
      "Design and develop a wall-mounted, IoT-based residential parcel locker prototype supporting delivery, retrieval, and return transactions for a single household.",
      "Implement rule-based multi-step authentication using registered tracking-number validation for deliveries, PIN-based resident access, and controlled authentication for returns.",
      "Integrate ultrasonic sensing to detect the presence of parcels inside the locker during relevant transactions.",
      "Develop structured transaction logging for validated deliveries, retrievals, and returns, including timestamps and authentication status.",
      "Integrate event-triggered surveillance that records short video clips during validated transactions and links them to transaction logs.",
      "Enhance parcel traceability and accountability through authentication, parcel detection, transaction logging, and video documentation.",
      "Evaluate the prototype's functionality, reliability, security performance, and usability under controlled testing conditions.",
    ],
    contribution:
      "Served as team leader and contributed to hardware development and integration.",
    output:
      "An IoT-based residential parcel locker prototype designed to integrate controlled access, parcel detection, transaction monitoring, and surveillance. System evaluation is part of the capstone study.",
    team: teamMembers,
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
      "Develop a web and mobile system that allows students and alumni to submit academic document requests and upload proof of payment online.",
      "Implement a registrar-side portal for managing, monitoring, and updating document requests efficiently.",
      "Integrate RFID-based verification for secure and automated academic document claiming.",
      "Provide real-time request tracking and notifications to inform users about their document request status.",
      "Evaluate the system through User Acceptance Testing (UAT), focusing on usability, efficiency, and user satisfaction.",
    ],
    contribution:
      "Served as team leader and contributed to frontend development, backend development, and project documentation.",
    output:
      "A document request and tracking system designed to connect students, alumni, and registrar staff through web and mobile interfaces with RFID-based claiming verification.",
    team: teamMembers,
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
      "Design a physical parcel locker prototype equipped with an electronic locking mechanism and an embedded controller.",
      "Implement a cloud-integrated dashboard for homeowners to register expected tracking numbers and monitor delivery status in real time.",
      "Develop validation logic that checks courier-entered tracking numbers against stored records before granting access for parcel deposit.",
      "Integrate sensing technology to confirm the physical presence of a parcel inside the locker after deposit.",
      "Automate parcel status tracking with lifecycle updates such as PENDING, DELIVERED, and RETRIEVED.",
      "Establish a secure retrieval protocol allowing homeowners to unlock the locker and reset its status.",
    ],
    contribution:
      "Served as team leader and contributed to hardware development and integration.",
    output:
      "A smart parcel collection prototype combining embedded hardware, parcel detection, electronic locking, and web-based monitoring.",
    team: teamMembers,
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

  const index = featured.findIndex((project) => project.slug === slug);

  if (index === -1 || !projectDetails[slug]) {
    notFound();
  }

  const project = featured[index];
  const details = projectDetails[slug];
  const previous = featured[(index - 1 + featured.length) % featured.length];
  const next = featured[(index + 1) % featured.length];

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
        <div className="showcase-detail-title">
          <h1>
            {project.title}
            <span className="showcase-title-spark">✳</span>
          </h1>
          <LikeButton slug={project.slug} />
        </div>
        <p>{project.description}</p>
      </section>

      <section className="showcase-detail-gallery" aria-label="Project images">
        <div className="showcase-detail-gallery-heading">
          <span>VISUAL OVERVIEW</span>
        </div>
        <div className="showcase-gallery-grid">
          {details.gallery.map((item, i) => (
            <figure
              key={item.src}
              className="showcase-gallery-item showcase-gallery-equal"
            >
              <div className="showcase-gallery-image-frame">
                <GalleryImage
                  src={item.src}
                  alt={`${project.title}: ${item.label}`}
                />
              </div>
              <figcaption>
                <span>{String(i + 1).padStart(2, "0")}</span>
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
              {details.objectives.map((objective, index) => (
                <li key={index}>{objective}</li>
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
        <div className="showcase-detail-context">
          <Users size={20} />
          <div>
            <h2>Project team</h2>
            <ul className="project-objectives-list">
              {details.team.map((member) => (
                <li key={member}>{member}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <nav className="fresh-project-nav showcase-detail-nav">
        <Link
          href={`/projects/${previous.slug}`}
          aria-label={`Previous project: ${previous.title}`}
        >
          <ArrowLeft size={18} />
          <span>
            <small>PREVIOUS PROJECT</small>
            <strong className="project-nav-title">{previous.title}</strong>
          </span>
        </Link>
        <span className="project-nav-count">
          {index + 1} / {featured.length}
        </span>
        <Link
          href={`/projects/${next.slug}`}
          aria-label={`Next project: ${next.title}`}
        >
          <span>
            <small>NEXT PROJECT</small>
            <strong className="project-nav-title">{next.title}</strong>
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
