
"use client";

import { Logo } from '@/components/Logo';
import { Footer } from '@/components/Footer';
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const tocItems = [
  { id: 'agreement', title: '1. Agreement to Terms' },
  { id: 'services', title: '2. Our Services' },
  { id: 'engagements', title: '3. Professional Engagements' },
  { id: 'client-responsibilities', title: '4. Client Responsibilities' },
  { id: 'fees-payment', title: '5. Fees and Payment' },
  { id: 'confidentiality', title: '6. Confidentiality' },
  { id: 'intellectual-property', title: '7. Intellectual Property' },
  { id: 'liability', title: '8. Liability and Limitations' },
  { id: 'termination', title: '9. Termination' },
  { id: 'governing-law', title: '10. Governing Law' },
  { id: 'dispute-resolution', title: '11. Dispute Resolution' },
  { id: 'changes', title: '12. Changes to Terms' },
  { id: 'contact', title: '13. Contact Information' },
];

export default function TermsOfServicePage() {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '0px 0px -75% 0px', threshold: 0.1 }
    );

    tocItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      tocItems.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) {
          observer.unobserve(el);
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="py-6 px-6 lg:px-8 border-b border-border">
          <div className="w-full mx-auto">
              <a href="/" className="flex items-center gap-3 w-fit">
                <Logo className="w-14 h-14 text-foreground" />
                <span className="text-2xl font-bold text-foreground hidden sm:inline">
                  Number Craft Consulting
                </span>
              </a>
          </div>
      </header>
      <main className="pt-20 pb-20">
        <div className="px-6 lg:px-8 w-full">
          <div className="text-center mb-12 pb-8 border-b border-border">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">Terms of Service</h1>
            <p className="text-lg text-muted-foreground">Effective Date: January 23, 2026</p>
          </div>

          <div className="grid lg:grid-cols-4 gap-12">
            <aside className="lg:col-span-1 lg:sticky top-8 h-fit hidden lg:block bg-card p-6 rounded-2xl shadow-lg">
              <h2 className="text-xl font-semibold text-foreground mb-4 pb-3 border-b border-border-soft">Table of Contents</h2>
              <ul className="space-y-2">
                {tocItems.map(item => (
                  <li key={item.id}>
                    <Link
                      href={`#${item.id}`}
                      className={cn(
                        "block py-1.5 px-3 rounded-md transition-all text-sm",
                        activeId === item.id
                          ? 'bg-secondary text-secondary-foreground font-semibold'
                          : 'text-muted-foreground hover:bg-primary/20 hover:text-foreground'
                      )}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>

            <div className="lg:col-span-3 bg-card p-8 sm:p-12 rounded-2xl shadow-2xl">
              <section id="agreement" className="mb-10 pb-8 border-b border-border-soft">
                <h2 className="text-2xl font-bold text-secondary mb-4">1. Agreement to Terms</h2>
                <p className="text-foreground/80 mb-4">By accessing or using the services of Number Craft Consulting ("Company," "we," "us," or "our"), you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.</p>
                <div className="bg-primary/20 border-l-4 border-secondary p-4 rounded-r-lg">
                    <p className="text-foreground/80"><strong>Important:</strong> These terms constitute a legally binding agreement between you (the "Client") and Number Craft Consulting. Please read them carefully.</p>
                </div>
              </section>

              <section id="services" className="mb-10 pb-8 border-b border-border-soft">
                <h2 className="text-2xl font-bold text-secondary mb-6">2. Our Services</h2>
                 <p className="text-foreground/80 mb-6">Number Craft Consulting provides professional accounting, audit, tax compliance, and financial consultancy services to Small and Medium Enterprises (SMEs) and Non-Governmental Organizations (NGOs).</p>
                 <div className="bg-destructive/10 border-l-4 border-destructive p-4 rounded-r-lg">
                    <p className="text-destructive-foreground/80"><strong>Disclaimer:</strong> Our services are provided for informational and advisory purposes. We do not provide legal advice. For legal matters, consult qualified legal counsel.</p>
                </div>
              </section>

              <section id="engagements" className="mb-10 pb-8 border-b border-border-soft">
                <h2 className="text-2xl font-bold text-secondary mb-6">3. Professional Engagements</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">3.1 Engagement Letters</h3>
                    <p className="text-foreground/80 mb-3">All professional services are governed by separate engagement letters that specify the scope of services, responsibilities, fees, and timelines.</p>
                  </div>
                   <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">3.2 Professional Standards</h3>
                    <p className="text-foreground/80 mb-3">We conduct our services in accordance with IFRS, ISA, the Kenyan Companies Act, and the ICPAK code of ethics.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">3.3 Limitations of Services</h3>
                    <p className="text-foreground/80 mb-3">Our services are limited to the scope in the engagement letter and do not guarantee detection of all fraud or future financial performance.</p>
                  </div>
                </div>
              </section>

               <section id="client-responsibilities" className="mb-10 pb-8 border-b border-border-soft">
                <h2 className="text-2xl font-bold text-secondary mb-6">4. Client Responsibilities</h2>
                 <p className="text-foreground/80 mb-6">To enable us to provide effective services, clients agree to provide complete, accurate, and timely information, and to maintain compliance with applicable laws.</p>
                 <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                    <p className="text-yellow-300/80"><strong>Client Acknowledgment:</strong> The accuracy and completeness of information provided by the client directly impacts the quality of our services.</p>
                </div>
              </section>

              <section id="fees-payment" className="mb-10 pb-8 border-b border-border-soft">
                <h2 className="text-2xl font-bold text-secondary mb-6">5. Fees and Payment</h2>
                <p className="text-foreground/80 mb-3">Fees are based on time, fixed-fee, or retainer models as specified in the engagement letter. Invoices are due within 15 days. We reserve the right to suspend services for overdue accounts.</p>
              </section>

              <section id="confidentiality" className="mb-10 pb-8 border-b border-border-soft">
                 <h2 className="text-2xl font-bold text-secondary mb-6">6. Confidentiality</h2>
                <p className="text-foreground/80 mb-3">We maintain strict confidentiality regarding all client financial, business, and personal information, except where disclosure is required by law or professional standards.</p>
              </section>

               <section id="intellectual-property" className="mb-10 pb-8 border-b border-border-soft">
                 <h2 className="text-2xl font-bold text-secondary mb-6">7. Intellectual Property</h2>
                <p className="text-foreground/80 mb-3">We retain ownership of our proprietary methodologies, tools, and templates. Clients retain ownership of their data and the final work products prepared for them.</p>
              </section>

               <section id="liability" className="mb-10 pb-8 border-b border-border-soft">
                 <h2 className="text-2xl font-bold text-secondary mb-6">8. Liability and Limitations</h2>
                <p className="text-foreground/80 mb-3">Our total liability is limited to the fees paid for the specific service. We are not liable for indirect, consequential, or punitive damages.</p>
              </section>

              <section id="termination" className="mb-10 pb-8 border-b border-border-soft">
                 <h2 className="text-2xl font-bold text-secondary mb-6">9. Termination</h2>
                <p className="text-foreground/80 mb-3">Either party may terminate services with 30 days written notice. Fees for work completed up to the termination date remain payable.</p>
              </section>
              
              <section id="governing-law" className="mb-10 pb-8 border-b border-border-soft">
                 <h2 className="text-2xl font-bold text-secondary mb-6">10. Governing Law</h2>
                 <p className="text-foreground/80">These Terms of Service are governed by and construed in accordance with the laws of Kenya. Any disputes shall be subject to the exclusive jurisdiction of the courts of Kenya.</p>
              </section>

               <section id="dispute-resolution" className="mb-10 pb-8 border-b border-border-soft">
                 <h2 className="text-2xl font-bold text-secondary mb-6">11. Dispute Resolution</h2>
                 <p className="text-foreground/80">Parties will first attempt to resolve disputes through good faith negotiation. If unresolved, disputes may be referred to mediation or arbitration before pursuing court proceedings.</p>
              </section>

              <section id="changes" className="mb-10 pb-8 border-b border-border-soft">
                 <h2 className="text-2xl font-bold text-secondary mb-6">12. Changes to Terms</h2>
                 <p className="text-foreground/80">We reserve the right to modify these terms at any time. Changes will be effective upon posting on our website. Continued use of our services after changes constitutes acceptance.</p>
              </section>

               <section id="contact" className="mb-10">
                 <h2 className="text-2xl font-bold text-secondary mb-6">13. Contact Information</h2>
                 <p className="text-foreground/80 mb-6">For questions about these Terms of Service, please contact us:</p>
                 <div className="grid sm:grid-cols-3 gap-6 text-center">
                    <div className="bg-primary/20 p-6 rounded-lg">
                        <h4 className="font-semibold text-foreground mb-2">Legal Department</h4>
                        <p className="text-sm text-muted-foreground">Nairobi, Kenya</p>
                    </div>
                    <div className="bg-primary/20 p-6 rounded-lg">
                         <h4 className="font-semibold text-foreground mb-2">Email</h4>
                        <p className="text-sm text-muted-foreground break-all">legal@numbercraftconsulting.co.ke</p>
                    </div>
                    <div className="bg-primary/20 p-6 rounded-lg">
                         <h4 className="font-semibold text-foreground mb-2">Phone</h4>
                        <p className="text-sm text-muted-foreground">+254 707 810 650</p>
                    </div>
                 </div>
              </section>

            </div>
          </div>
        </div>
      </main>
      <div id="footer-observer" style={{ height: 1 }} />
      <Footer />
    </div>
  );
}
