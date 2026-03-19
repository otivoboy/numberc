"use client";

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { CheckCircle, Phone, Mail, ShieldCheck, Search, Users, FileText, BarChart, Check } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Section = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.6, ease: 'easeInOut' }}
    className={`py-12 ${className}`}
  >
    {children}
  </motion.section>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
    {children}
  </h2>
);

const CtaSection = () => (
     <Section>
        <div className="bg-gradient-to-r from-secondary to-primary/80 rounded-2xl p-12 text-center text-primary-foreground">
            <h2 className="text-3xl font-bold mb-4">Ready to Strengthen Your Financial Governance?</h2>
            <p className="max-w-3xl mx-auto mb-8 text-primary-foreground/80">
                Contact us today to discuss your audit needs and receive a customized proposal.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
                 <Link href="/contact" passHref>
                    <Button size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                        Get In Touch
                    </Button>
                </Link>
                <a href="tel:0707810650">
                    <Button size="lg" variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                        <Phone className="mr-2 h-5 w-5" /> Call Us
                    </Button>
                </a>
            </div>
             <div className="mt-8 text-sm text-primary-foreground/80 space-y-1">
                <p><a href="mailto:audit@numbercraft.co.ke" className="font-semibold hover:underline flex items-center justify-center gap-2"><Mail className="h-4 w-4" /> audit@numbercraft.co.ke</a></p>
                <p>Service Hours: Monday-Friday, 8:00 AM - 5:00 PM</p>
            </div>
        </div>
    </Section>
);

const whyAuditMatters = [
    { title: "Enhanced Credibility", desc: "Independent audit verification builds trust with investors, donors, and regulatory bodies." },
    { title: "Risk Identification", desc: "Early detection of financial risks and control weaknesses." },
    { title: "Compliance Assurance", desc: "Meeting statutory requirements and donor obligations." },
    { title: "Process Improvement", desc: "Recommendations for strengthening internal controls and financial systems." },
    { title: "Decision Support", desc: "Reliable financial information for strategic planning." },
];

const auditServices = [
    { title: "Statutory Audit Services", desc: "Comprehensive financial statement audits conducted in accordance with International Standards on Auditing (ISA) and local regulatory requirements. We ensure your financial statements present a true and fair view of your organization's financial position." },
    { title: "Internal Audit Support", desc: "We help establish and strengthen internal audit functions through internal control system reviews, risk assessment, operational efficiency evaluations, fraud prevention, and compliance monitoring." },
    { title: "Specialized Audit Services", desc: "Forensic Audits, Inventory Audits, Procurement Audits, and Donor Fund Audits tailored to specific needs." },
    { title: "Compliance Reviews & Risk Assessments", desc: "Regulatory compliance assessments, internal control evaluations, risk management framework development, and governance structure reviews." },
    { title: "Audit Preparation & Support Services", desc: "Pre-audit readiness assessments, documentation preparation assistance, staff training, and audit query response support." },
];

const methodologySteps = ["Planning Phase", "Fieldwork Phase", "Reporting Phase", "Follow-up Phase"];

const industryExpertise = ["NGOs & Donor-Funded Projects", "SMEs", "Startups", "Service Industry"];

const benefits = [
    "CPA-Led Engagements",
    "Practical Recommendations",
    "Technology Integration",
    "Timely Delivery",
    "Ongoing Support"
];

export default function AuditAssurancePage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <main className="pt-32 pb-20">
                <div className="w-full px-6 lg:px-8">
                    <Section className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-gradient">
                            Strengthening Financial Integrity Through Professional Audit Services
                        </h1>
                        <p className="text-lg text-secondary font-semibold mb-8 max-w-4xl mx-auto">
                           Comprehensive audit solutions that ensure accuracy, compliance, and stakeholder confidence
                        </p>
                        <p className="text-foreground/70 max-w-3xl mx-auto leading-relaxed">
                            At Number Craft Consulting, we understand that audit and assurance services are critical for maintaining financial integrity, regulatory compliance, and stakeholder trust. Our audit services go beyond mere compliance to provide valuable insights that strengthen your organization's financial controls and risk management frameworks.
                        </p>
                    </Section>
                    
                    <Section>
                        <SectionTitle>Why Audit Matters</SectionTitle>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {whyAuditMatters.map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-6 rounded-2xl bg-card border border-border-soft"
                                >
                                    <h3 className="text-xl font-semibold text-secondary mb-3">{item.title}</h3>
                                    <p className="text-sm text-foreground/70">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </Section>
                    
                    <Section>
                        <SectionTitle>Our Audit Services</SectionTitle>
                        <div className="space-y-8">
                            {auditServices.map((service, index) => (
                                <div key={service.title} className="bg-card p-8 rounded-2xl">
                                    <h3 className="text-2xl font-bold text-secondary mb-4">{index + 1}. {service.title}</h3>
                                    <p className="text-foreground/80">{service.desc}</p>
                                </div>
                            ))}
                        </div>
                    </Section>
                    
                    <Section>
                        <SectionTitle>Our Audit Methodology</SectionTitle>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {methodologySteps.map(step => (
                                <div key={step} className="p-6 rounded-lg bg-card text-center">
                                    <p className="text-lg font-semibold text-foreground">{step}</p>
                                </div>
                            ))}
                        </div>
                    </Section>
                    
                     <Section>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                           <div>
                             <SectionTitle>Industry Expertise</SectionTitle>
                             <div className="space-y-4">
                                {industryExpertise.map(item => (
                                    <div key={item} className="flex items-center gap-3">
                                        <CheckCircle className="w-6 h-6 text-secondary shrink-0" />
                                        <span className="text-lg text-foreground/80">{item}</span>
                                    </div>
                                ))}
                             </div>
                           </div>
                           <div className="bg-card p-8 rounded-2xl">
                               <h3 className="text-2xl font-bold text-foreground mb-6">Benefits of Working With Us</h3>
                               <ul className="space-y-4">
                                  {benefits.map(benefit => (
                                    <li key={benefit} className="flex items-start gap-4">
                                      <div className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center shrink-0 mt-1">
                                        <Check className="w-5 h-5" />
                                      </div>
                                      <span className="text-lg text-foreground/80">{benefit}</span>
                                    </li>
                                  ))}
                               </ul>
                           </div>
                        </div>
                    </Section>

                    <CtaSection />
                </div>
            </main>
            <Footer />
        </div>
    );
}
