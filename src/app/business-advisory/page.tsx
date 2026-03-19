"use client";

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { CheckCircle, Phone, Mail, Lightbulb, TrendingUp, Cpu, Shield, Rocket, Building, Users } from 'lucide-react';
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
            <h2 className="text-3xl font-bold mb-4">Transform Your Business Strategy Today</h2>
            <p className="max-w-3xl mx-auto mb-8 text-primary-foreground/80">
                Schedule a complimentary consultation to explore how our advisory services can drive your growth.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
                 <Link href="/contact" passHref>
                    <Button size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                        Schedule Consultation
                    </Button>
                </Link>
                <a href="tel:0707810650">
                    <Button size="lg" variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                        <Phone className="mr-2 h-5 w-5" /> By Appointment
                    </Button>
                </a>
            </div>
             <div className="mt-8 text-sm text-primary-foreground/80 space-y-1">
                <p><a href="mailto:advisory@numbercraft.co.ke" className="font-semibold hover:underline flex items-center justify-center gap-2"><Mail className="h-4 w-4" /> advisory@numbercraft.co.ke</a></p>
            </div>
        </div>
    </Section>
);

const coreServices = [
    { icon: Lightbulb, title: "Strategic Planning & Business Modeling", items: ["Business model evaluation", "Growth strategy", "Market entry planning", "Competitive analysis"] },
    { icon: TrendingUp, title: "Financial Performance Optimization", items: ["Profitability analysis", "Cost reduction", "Working capital management", "Investment appraisal"] },
    { icon: Cpu, title: "Operational Excellence", items: ["Process mapping", "Performance measurement (KPIs)", "Supply chain optimization", "Technology implementation"] },
    { icon: Shield, title: "Risk Management Advisory", items: ["Comprehensive risk assessment", "Mitigation strategy", "Business continuity planning", "Internal control design"] },
];

const specializedAreas = [
    { icon: Rocket, title: "For Startups & Growing Businesses", items: ["Business plan development", "Funding strategy", "Scalable system design", "Exit strategy planning"] },
    { icon: Building, title: "For Established SMEs", items: ["Succession planning", "Diversification strategies", "Acquisition advisory", "International expansion"] },
    { icon: Users, title: "For NGOs & Social Enterprises", items: ["Sustainability planning", "Donor relationship management", "Impact measurement", "Grant management optimization"] },
];

export default function BusinessAdvisoryPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <main className="pt-32 pb-20">
                <div className="w-full px-6 lg:px-8">
                    <Section className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-gradient">
                            Strategic Insights for Sustainable Growth and Operational Excellence
                        </h1>
                        <p className="text-lg text-secondary font-semibold mb-8 max-w-4xl mx-auto">
                           Actionable business advisory services that drive innovation, efficiency, and profitability
                        </p>
                        <p className="text-foreground/70 max-w-3xl mx-auto leading-relaxed">
                            In today's dynamic business environment, organizations need more than traditional accounting services. They require strategic partners who can provide insights, identify opportunities, and guide sustainable growth. Our Business Advisory services combine financial expertise with strategic thinking to help your organization thrive.
                        </p>
                    </Section>
                    
                    <Section>
                        <SectionTitle>Core Advisory Services</SectionTitle>
                        <div className="grid md:grid-cols-2 gap-8">
                            {coreServices.map((service, index) => (
                                <motion.div
                                    key={service.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-8 rounded-2xl bg-card border-l-4 border-secondary"
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <service.icon className="w-10 h-10 text-secondary shrink-0" />
                                        <h3 className="text-2xl font-semibold text-foreground">{service.title}</h3>
                                    </div>
                                    <ul className="space-y-2">
                                        {service.items.map(item => (
                                            <li key={item} className="flex items-center gap-3 text-foreground/70">
                                                <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </Section>
                    
                    <Section>
                        <SectionTitle>Specialized Advisory Areas</SectionTitle>
                        <div className="grid lg:grid-cols-3 gap-8">
                            {specializedAreas.map(area => (
                                <div key={area.title} className="bg-card p-8 rounded-2xl shadow-lg">
                                    <div className="flex items-center gap-4 mb-6">
                                        <area.icon className="w-10 h-10 text-secondary"/>
                                        <h3 className="text-xl font-bold text-foreground">{area.title}</h3>
                                    </div>
                                    <ul className="space-y-3">
                                      {area.items.map(item => (
                                          <li key={item} className="flex items-center gap-3 text-sm text-foreground/80">
                                            <CheckCircle className="w-4 h-4 text-secondary shrink-0" />
                                            {item}
                                          </li>
                                      ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </Section>
                    
                    <CtaSection />
                </div>
            </main>
            <Footer />
        </div>
    );
}
