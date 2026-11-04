import Link from 'next/link';
import { Award, ArrowLeft, ArrowUpRight, BookOpen, FileImage } from 'lucide-react';
import { certifications } from '../../lib/portfolio-data';
export default function CertificationsPage(){return <main className="detail-shell">
 <header className="detail-nav"><Link href="/#milestones"><ArrowLeft size={16}/> Back to My Journey</Link><Link href="/" className="detail-brand">jereeza<span>✿</span></Link></header>
 <section className="detail-hero"><span className="detail-eyebrow">04 / MY JOURNEY — LEARNING LOG</span><h1>My <em>certifications.</em></h1><p>A collection of credentials earned along the way. Certificate previews and verification links will be added later.</p></section>
 <div className="detail-grid">{certifications.map((item,i)=><Link className="detail-tile" href={`/certifications/${item.slug}`} key={item.slug}><div className="detail-tile-top"><span className="detail-index">{String(i+1).padStart(2,'0')} / {String(certifications.length).padStart(2,'0')}</span><Award size={22}/></div><div className="detail-preview"><FileImage size={32}/><span>PREVIEW COMING SOON</span></div><span className="detail-category">{item.category}</span><h2>{item.title}</h2><p>{item.issuer} · {item.date}</p><span className="detail-open">View details <ArrowUpRight size={16}/></span></Link>)}</div>
 <div className="detail-footer"><BookOpen size={18}/> More learning milestones to come.</div></main>}
