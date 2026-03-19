"use client";

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { CheckCircle, Phone, Mail, Handshake, Scale, TrendingUp, Search, FileSignature, Landmark } from 'lucide-react';
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
            <h2 className="text-3xl font-bold mb-4">Navigate Your Next Transaction with Confidence</h2>
            <p className="max-w-3xl mx-auto mb-8 text-primary-foreground/80">
                Contact our Deal Advisory team for a confidential discussion about your transaction needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
                 <Link href="/contact" passHref>
                    <Button size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                        Schedule Consultation
                    </Button>
                </Link>
                <a href="tel:0707810650">
                    <Button size="lg" variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                        <Phone className="mr-2 h-5 w-5" /> Deal Hotline
                    </Button>
                </a>
            </div>
             <div className="mt-8 text-sm text-primary-foreground/80 space-y-1">
                <p><a href="mailto:deals@numbercraft.co.ke" className="font-semibold hover:underline flex items-center justify-center gap-2"><Mail className="h-4 w-4" /> deals@numbercraft.co.ke</a></p>
            </div>
        </div>
    </Section>
);

const advisoryServices = [
    { icon: Handshake, title: "Transaction Strategy & Planning", desc: "Evaluating transaction alignment, optimal deal structuring, and target identification." },
    { icon: Search, title: "Financial Due Diligence", desc: "Historical financial analysis, quality of earnings assessment, and working capital evaluation." },
    { icon: Scale, title: "Business Valuation Services", desc: "Applying DCF, CCA, and Precedent Transaction Analysis for fair value opinions." },
    { icon: FileSignature, title: "Transaction Documentation Support", desc: "Review of Term Sheets, Share Purchase Agreements (SPA), and completion accounts preparation." },
    { icon: Landmark, title: "Financing Advisory", desc: "Funding structure optimization, lender due diligence support, and financial modeling." },
    { icon: TrendingUp, title: "Post-Merger Integration (PMI) Support", desc: "100-day plan development, synergy tracking, and financial systems integration." },
];

const methodologyPhases = [
    { number: 1, title: "Pre-Deal Strategy", duration: "Weeks 1-4" },
    { number: 2, title: "Due Diligence & Valuation", duration: "Weeks 5-12" },
    { number: 3, title: "Transaction Execution", duration: "Weeks 13-20" },
    { number: 4, title: "Post-Transaction Integration", duration: "Months 6-18" },
];


export default function DealAdvisoryPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <main className="pt-32 pb-20">
                <div className="w-full px-6 lg:px-8">
                    <Section className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-gradient">
                            Strategic Transaction Support for Value Maximization and Risk Mitigation
                        </h1>
                        <p className="text-lg text-secondary font-semibold mb-8 max-w-4xl mx-auto">
                           End-to-end advisory for mergers, acquisitions, and business transactions in the Kenyan market
                        </p>
                        <p className="text-foreground/70 max-w-3xl mx-auto leading-relaxed">
                            In today's dynamic business environment, strategic transactions such as mergers, acquisitions, divestitures, and partnerships are critical for growth, diversification, and competitive positioning. Number Craft Consulting provides comprehensive deal advisory services that guide organizations through complex transactions, ensuring value maximization, risk mitigation, and successful integration.
                        </p>
                    </Section>
                    
                    <Section>
                        <SectionTitle>Our Comprehensive Deal Advisory Services</SectionTitle>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {advisoryServices.map((service, index) => (
                                <motion.div
                                    key={service.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-6 rounded-2xl bg-card border-t-4 border-secondary flex flex-col"
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <service.icon className="w-8 h-8 text-secondary shrink-0" />
                                        <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                                    </div>
                                    <p className="text-sm text-foreground/70 flex-grow">{service.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </Section>
                    
                    <Section>
                        <SectionTitle>Our Deal Advisory Methodology</SectionTitle>
                        <div className="relative max-w-4xl mx-auto">
                           <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-border -translate-x-1/2" />
                           <div className="space-y-12">
                            {methodologyPhases.map((phase) => (
                               <motion.div
                                    key={phase.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: phase.number * 0.1 }}
                                    className="flex items-start gap-6"
                               >
                                    <div className="bg-secondary text-secondary-foreground rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold flex-shrink-0 z-10 border-4 border-card">
                                        {phase.number}
                                    </div>
                                    <div className="flex-1 pt-1">
                                        <h3 className="text-xl font-semibold text-foreground">{phase.title}</h3>
                                        <p className="text-secondary font-medium">{phase.duration}</p>
                                    </div>
                                </motion.div>
                            ))}
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
