import Link from 'next/link';
import { ArrowLeft, Award, FileImage } from 'lucide-react';
import { notFound } from 'next/navigation';
import { certifications } from '../../../lib/portfolio-data';
export function generateStaticParams(){return certifications.map(c=>({slug:c.slug}));}
export default async function CertificateDetail({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const item=certifications.find(c=>c.slug===slug);if(!item)notFound();
 return <main className="detail-shell"><header className="detail-nav"><Link href="/certifications"><ArrowLeft size={16}/> All certifications</Link><Link href="/" className="detail-brand">jereeza<span>✿</span></Link></header>
 <section className="detail-hero"><span className="detail-eyebrow">LEARNING LOG / CERTIFICATION</span><h1>{item.title}</h1><p>{item.description}</p></section>
 <section className="detail-single"><div className="detail-preview detail-preview-large"><FileImage size={45}/><span>CERTIFICATE PREVIEW COMING SOON</span></div><div className="detail-facts"><div><span>ISSUED BY</span><strong>{item.issuer}</strong></div><div><span>DATE EARNED</span><strong>{item.date}</strong></div><div><span>CATEGORY</span><strong>{item.category}</strong></div></div><div className="detail-note"><Award size={19}/> Certificate image and verification link can be added later.</div></section>
 <Link href="/certifications" className="detail-bottom-link"><ArrowLeft size={16}/> Back to certifications</Link></main>
}
