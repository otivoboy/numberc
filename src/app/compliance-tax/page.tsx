"use client";

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { CheckCircle, Phone, Mail, FileText, Banknote, ShieldAlert, Handshake, Building, Rocket } from 'lucide-react';
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
            <h2 className="text-3xl font-bold mb-4">Ensure Complete Compliance Today</h2>
            <p className="max-w-3xl mx-auto mb-8 text-primary-foreground/80">
                Contact us for a compliance health check and avoid costly penalties.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
                 <Link href="/contact" passHref>
                    <Button size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                        Request Health Check
                    </Button>
                </Link>
                <a href="tel:0707810650">
                    <Button size="lg" variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                        <Phone className="mr-2 h-5 w-5" /> Urgent Support
                    </Button>
                </a>
            </div>
             <div className="mt-8 text-sm text-primary-foreground/80 space-y-1">
                <p><a href="mailto:compliance@numbercraft.co.ke" className="font-semibold hover:underline flex items-center justify-center gap-2"><Mail className="h-4 w-4" /> compliance@numbercraft.co.ke</a></p>
            </div>
        </div>
    </Section>
);

const complianceServices = [
    { 
        title: "Tax Compliance & Filing Services",
        items: [
            { name: "Monthly Statutory Deductions", details: "PAYE, NSSF, NHIF, HELB, and Housing Levy." },
            { name: "Value Added Tax (VAT)", details: "Registration, monthly/quarterly returns, and input VAT optimization." },
            { name: "Withholding Tax Management", details: "Calculations, monthly returns, and international transaction compliance." },
        ]
    },
    {
        title: "Corporate Tax Services",
        items: [
            { name: "Corporate Income Tax", details: "Computations and provisional tax payments." },
            { name: "Tax Planning", details: "Optimization strategies to minimize liabilities legally." },
            { name: "Tax Dispute Resolution", details: "Support and correspondence with KRA." },
        ]
    },
    {
        title: "Regulatory Compliance Management",
        items: [
            { name: "Business Registration", details: "Licensing support and annual returns filing." },
            { name: "NPO Board Compliance", details: "Compliance for NGOs." },
            { name: "Compliance Calendar", details: "Management of all filing deadlines." },
        ]
    },
];

const specializedAreas = [
    { icon: Handshake, title: "For NGOs & Donor-Funded Organizations", items: ["Donor-specific financial reporting", "Restricted fund compliance", "Project expenditure tracking", "Donor audit preparation"] },
    { icon: Rocket, title: "For SMEs & Startups", items: ["Startup tax incentives optimization", "Employment tax compliance", "Business permit renewals", "Growth-stage compliance scaling"] },
    { icon: Building, title: "For Established Corporations", items: ["Group tax compliance", "International tax considerations", "Advanced tax planning", "Compliance automation"] },
];

export default function ComplianceTaxPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <main className="pt-32 pb-20">
                <div className="w-full px-6 lg:px-8">
                    <Section className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-gradient">
                            Navigating Regulatory Complexity with Confidence and Precision
                        </h1>
                        <p className="text-lg text-secondary font-semibold mb-8 max-w-4xl mx-auto">
                           Expert tax planning and compliance management to protect your business interests
                        </p>
                        <p className="text-foreground/70 max-w-3xl mx-auto leading-relaxed">
                            Tax regulations and statutory requirements are increasingly complex and constantly evolving. Non-compliance can result in significant penalties, reputational damage, and operational disruptions. Our Compliance & Tax services ensure your organization meets all obligations while optimizing your tax position within legal frameworks.
                        </p>
                    </Section>
                    
                    <Section>
                        <SectionTitle>Our Comprehensive Compliance Services</SectionTitle>
                        <div className="space-y-8">
                            {complianceServices.map((service) => (
                                <div key={service.title} className="p-8 rounded-2xl bg-card">
                                    <h3 className="text-2xl font-bold text-secondary mb-6">{service.title}</h3>
                                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                      {service.items.map(item => (
                                        <div key={item.name} className="bg-primary/20 p-6 rounded-lg">
                                            <h4 className="font-semibold text-lg text-foreground mb-2">{item.name}</h4>
                                            <p className="text-sm text-muted-foreground">{item.details}</p>
                                        </div>
                                      ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Section>
                    
                    <Section>
                        <SectionTitle>Specialized Compliance Areas</SectionTitle>
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
