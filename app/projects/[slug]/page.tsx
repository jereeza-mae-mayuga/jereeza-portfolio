import Link from 'next/link';
import { ArrowLeft, Code2, Image as ImageIcon } from 'lucide-react';
import { notFound } from 'next/navigation';
import { projects } from '../../../lib/portfolio-data';
export function generateStaticParams(){return projects.map(p=>({slug:p.slug}));}
export default async function ProjectDetail({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const project=projects.find(p=>p.slug===slug);if(!project)notFound();
 return <main className="detail-shell"><header className="detail-nav"><Link href="/#projects"><ArrowLeft size={16}/> Back to projects</Link><Link href="/" className="detail-brand">jereeza<span>✿</span></Link></header><section className="detail-hero"><span className="detail-eyebrow">03 / MY CREATIONS — {project.type.toUpperCase()}</span><h1>{project.title}</h1><p>{project.description}</p></section><section className="detail-single"><div className="detail-preview detail-preview-large"><ImageIcon size={45}/><span>PROJECT SCREENSHOTS COMING SOON</span></div><div className="detail-facts"><div><span>PROJECT TYPE</span><strong>{project.type}</strong></div><div><span>MY ROLE</span><strong>{project.role}</strong></div></div><h2 className="detail-subheading">Technologies used</h2><div className="detail-tags">{project.technologies.map(t=><span key={t}>{t}</span>)}</div><div className="detail-note"><Code2 size={19}/> More project details and images can be added here later.</div></section><Link href="/#projects" className="detail-bottom-link"><ArrowLeft size={16}/> Back to projects</Link></main>
}
