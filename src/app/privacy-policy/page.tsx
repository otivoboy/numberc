
"use client";

import { Logo } from '@/components/Logo';
import { Footer } from '@/components/Footer';
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const tocItems = [
  { id: 'introduction', title: '1. Introduction' },
  { id: 'information-collection', title: '2. Information We Collect' },
  { id: 'use-information', title: '3. How We Use Your Information' },
  { id: 'data-sharing', title: '4. Data Sharing and Disclosure' },
  { id: 'data-security', title: '5. Data Security' },
  { id: 'data-retention', title: '6. Data Retention' },
  { id: 'your-rights', title: '7. Your Rights' },
  { id: 'cookies', title: '8. Cookies and Tracking Technologies' },
  { id: 'third-party', title: '9. Third-Party Links' },
  { id: 'children', title: '10. Children\'s Privacy' },
  { id: 'changes', title: '11. Changes to This Policy' },
  { id: 'contact', title: '12. Contact Us' },
];

export default function PrivacyPolicyPage() {
  const [activeId, setActiveId] = useState('');
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

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
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">Privacy Policy</h1>
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
              <section id="introduction" className="mb-10 pb-8 border-b border-border-soft">
                <h2 className="text-2xl font-bold text-secondary mb-4">1. Introduction</h2>
                <p className="text-foreground/80 mb-4">Number Craft Consulting ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <Link href="/" className="text-secondary hover:underline">numbercraftconsulting.co.ke</Link> or engage with our professional accounting, audit, and consultancy services.</p>
                <p className="text-foreground/80">We comply with the Data Protection Act, 2019 of Kenya and other applicable data protection laws. By using our services, you consent to the data practices described in this policy.</p>
              </section>

              <section id="information-collection" className="mb-10 pb-8 border-b border-border-soft">
                <h2 className="text-2xl font-bold text-secondary mb-6">2. Information We Collect</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">2.1 Personal Information</h3>
                    <p className="text-foreground/80 mb-3">We may collect personal information that you voluntarily provide to us, including:</p>
                    <ul className="list-disc list-inside space-y-2 text-foreground/70">
                      <li><strong>Contact Information:</strong> Name, email address, phone number, physical address</li>
                      <li><strong>Business Information:</strong> Company name, registration details, tax information</li>
                      <li><strong>Financial Information:</strong> Bank details, financial statements, transaction records</li>
                      <li><strong>Professional Information:</strong> Job title, qualifications, employment history</li>
                      <li><strong>Communication Data:</strong> Correspondence, meeting notes, service requests</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">2.2 Automatically Collected Information</h3>
                    <p className="text-foreground/80 mb-3">When you visit our website, we may automatically collect:</p>
                    <ul className="list-disc list-inside space-y-2 text-foreground/70">
                        <li><strong>Technical Data:</strong> IP address, browser type, operating system</li>
                        <li><strong>Usage Data:</strong> Pages visited, time spent, navigation patterns</li>
                        <li><strong>Device Information:</strong> Device type, screen resolution, location data</li>
                    </ul>
                  </div>
                   <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">2.3 Information from Third Parties</h3>
                    <p className="text-foreground/80 mb-3">We may receive information about you from:</p>
                    <ul className="list-disc list-inside space-y-2 text-foreground/70">
                        <li>Business partners and referrals</li>
                        <li>Publicly available sources</li>
                        <li>Regulatory authorities (where permitted by law)</li>
                    </ul>
                  </div>
                </div>
              </section>
              
               <section id="use-information" className="mb-10 pb-8 border-b border-border-soft">
                <h2 className="text-2xl font-bold text-secondary mb-6">3. How We Use Your Information</h2>
                 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {['Service Delivery', 'Client Communication', 'Legal Compliance', 'Security Protection', 'Business Improvement', 'Marketing'].map(item => (
                        <div key={item} className="bg-primary/20 p-4 rounded-lg text-center">
                            <p className="font-semibold text-foreground">{item}</p>
                        </div>
                    ))}
                 </div>
              </section>

              <section id="data-sharing" className="mb-10 pb-8 border-b border-border-soft">
                <h2 className="text-2xl font-bold text-secondary mb-6">4. Data Sharing and Disclosure</h2>
                <p className="text-foreground/80 mb-6">We may share your information with:</p>
                 <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">4.1 Service Providers</h3>
                        <p className="text-foreground/80 mb-3">Trusted third parties who assist in our operations:</p>
                         <ul className="list-disc list-inside space-y-2 text-foreground/70">
                            <li>Cloud storage providers (with data protection agreements)</li>
                            <li>Accounting software platforms</li>
                            <li>Technical support services</li>
                        </ul>
                    </div>
                     <div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">4.2 Legal Requirements</h3>
                        <p className="text-foreground/80 mb-3">We may disclose information when required by law:</p>
                         <ul className="list-disc list-inside space-y-2 text-foreground/70">
                            <li>To comply with legal obligations</li>
                            <li>To protect our rights and property</li>
                            <li>To prevent fraud or security issues</li>
                            <li>To protect the safety of persons</li>
                        </ul>
                    </div>
                     <div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">4.3 Business Transfers</h3>
                        <p className="text-foreground/80">In connection with any merger, sale of company assets, or acquisition.</p>
                    </div>
                 </div>
                 <div className="mt-6 bg-primary/20 border-l-4 border-secondary p-4 rounded-r-lg">
                    <p className="text-foreground/80"><strong>Note:</strong> We do not sell your personal information to third parties for marketing purposes.</p>
                </div>
              </section>

              <section id="data-security" className="mb-10 pb-8 border-b border-border-soft">
                <h2 className="text-2xl font-bold text-secondary mb-6">5. Data Security</h2>
                <p className="text-foreground/80 mb-6">We implement appropriate technical and organizational measures to protect your information, including:</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {['Encryption', 'Access Controls', 'Regular Audits', 'Staff Training', 'Secure Storage', 'Incident Response'].map(item => (
                         <div key={item} className="bg-primary/20 p-4 rounded-lg text-center">
                            <p className="font-semibold text-foreground">{item}</p>
                        </div>
                    ))}
                </div>
              </section>

              <section id="data-retention" className="mb-10 pb-8 border-b border-border-soft">
                <h2 className="text-2xl font-bold text-secondary mb-6">6. Data Retention</h2>
                <p className="text-foreground/80 mb-4">We retain personal information only as long as necessary for fulfilling the purposes for which it was collected, complying with legal and regulatory requirements, and resolving disputes.</p>
                <div className="bg-primary/20 rounded-xl overflow-hidden my-6">
                    <div className="grid grid-cols-2 bg-primary/40 p-4 font-bold text-foreground">
                        <div>Data Type</div>
                        <div className="text-right">Retention Period</div>
                    </div>
                    <div className="divide-y divide-border-soft">
                        {[
                          { type: "Client financial records", period: "7 years (statutory requirement)" },
                          { type: "Tax compliance documents", period: "7 years from tax year end" },
                          { type: "Audit working papers", period: "5 years from report date" },
                          { type: "Website analytics data", period: "2 years" },
                          { type: "Marketing communications", period: "Until consent withdrawn" },
                        ].map(item => (
                          <div key={item.type} className="grid grid-cols-2 p-4 text-sm">
                            <div className="font-medium text-foreground">{item.type}</div>
                            <div className="text-right text-muted-foreground">{item.period}</div>
                          </div>
                        ))}
                    </div>
                </div>
              </section>
              
               <section id="your-rights" className="mb-10 pb-8 border-b border-border-soft">
                <h2 className="text-2xl font-bold text-secondary mb-6">7. Your Rights</h2>
                <p className="text-foreground/80 mb-6">Under the Data Protection Act, 2019, you have several rights regarding your personal information:</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {['Access', 'Rectification', 'Erasure', 'Restrict Processing', 'Data Portability', 'Object', 'Withdraw Consent', 'Lodge Complaint'].map(right => (
                         <div key={right} className="bg-primary/20 p-4 rounded-lg text-center">
                            <h4 className="font-semibold text-foreground">Right to {right}</h4>
                        </div>
                    ))}
                </div>
                 <div className="mt-6 bg-primary/20 border-l-4 border-secondary p-4 rounded-r-lg">
                    <p className="text-foreground/80">To exercise any of these rights, please contact us using the details in Section 12.</p>
                </div>
              </section>

               <section id="cookies" className="mb-10 pb-8 border-b border-border-soft">
                <h2 className="text-2xl font-bold text-secondary mb-6">8. Cookies and Tracking Technologies</h2>
                <p className="text-foreground/80 mb-4">We use cookies and similar technologies to enhance website functionality, analyze traffic, and remember your preferences. You can control cookies through your browser settings, but note that disabling them may affect website functionality.</p>
              </section>
              
              <section id="third-party" className="mb-10 pb-8 border-b border-border-soft">
                <h2 className="text-2xl font-bold text-secondary mb-6">9. Third-Party Links</h2>
                 <p className="text-foreground/80">Our website may contain links to third-party websites. This Privacy Policy does not apply to those websites. We encourage you to review the privacy policies of any third-party sites you visit.</p>
              </section>

              <section id="children" className="mb-10 pb-8 border-b border-border-soft">
                 <h2 className="text-2xl font-bold text-secondary mb-6">10. Children's Privacy</h2>
                 <p className="text-foreground/80">Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.</p>
              </section>
              
              <section id="changes" className="mb-10 pb-8 border-b border-border-soft">
                <h2 className="text-2xl font-bold text-secondary mb-6">11. Changes to This Policy</h2>
                <p className="text-foreground/80">We may update this Privacy Policy periodically. The updated version will be indicated by an updated "Effective Date" at the top of this page. We encourage you to review this Privacy Policy frequently to stay informed.</p>
              </section>

              <section id="contact" className="mb-10">
                 <h2 className="text-2xl font-bold text-secondary mb-6">12. Contact Us</h2>
                 <p className="text-foreground/80 mb-6">If you have questions about this Privacy Policy or our data practices, please contact us:</p>
                 <div className="grid sm:grid-cols-3 gap-6 text-center">
                    <div className="bg-primary/20 p-6 rounded-lg">
                        <h4 className="font-semibold text-foreground mb-2">Data Protection Officer</h4>
                        <p className="text-sm text-muted-foreground">Nairobi, Kenya</p>
                    </div>
                    <div className="bg-primary/20 p-6 rounded-lg">
                         <h4 className="font-semibold text-foreground mb-2">Email</h4>
                        <p className="text-sm text-muted-foreground break-all">privacy@numbercraftconsulting.co.ke</p>
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
