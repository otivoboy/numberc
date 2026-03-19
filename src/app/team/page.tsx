"use client";

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { Check, Calendar, Shield, Laptop, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

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

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-20">
        <div 
          className="bg-gradient-to-br from-primary to-card py-20 text-center text-primary-foreground"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="px-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Leadership & Expertise</h1>
            <p className="text-lg text-primary-foreground/80 max-w-7xl mx-auto">
              The professionals at Number Craft Consulting bring together decades of collective experience in accounting, auditing, and financial consultancy. Our team combines technical excellence with practical understanding of our clients' unique challenges.
            </p>
          </motion.div>
        </div>

        <div className="px-6 lg:px-8 py-16">
          {/* New Team Layout */}
          <Section>
            <div className="bg-card rounded-2xl shadow-2xl overflow-hidden md:flex items-stretch">
              <div className="md:w-2/5 relative min-h-[300px] md:min-h-full">
                <Image src="/peter-muru.jpg" alt="Peter Muru" fill className="object-contain object-center" />
              </div>
              <div className="md:w-3/5 p-8 flex flex-col">
                <Badge variant="default" className="self-start mb-4 text-base">Founder & CEO</Badge>
                <h2 className="text-3xl font-bold text-foreground">Peter Muru</h2>
                <div className="text-lg font-semibold text-secondary mt-1">CPA, ICPAK Member</div>
                <div className="flex items-center gap-2 mt-4 text-muted-foreground">
                    <Calendar className="w-5 h-5" />
                    <span>10+ Years Experience</span>
                </div>
                <p className="text-foreground/70 mt-6">Peter Muru is a Certified Public Accountant (CPA) with over 10 years of experience in accounting, auditing, and financial reporting for both SMEs and NGOs. As Founder and CEO, he provides strategic leadership, guiding the firm's commitment to professionalism, integrity, and sustainable client growth.</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 my-6 text-foreground/80">
                  <div className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-secondary shrink-0" /> Accounting & Bookkeeping</div>
                  <div className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-secondary shrink-0" /> Audit & Assurance</div>
                  <div className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-secondary shrink-0" /> Financial Management</div>
                  <div className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-secondary shrink-0" /> Statutory & Tax Compliance</div>
                  <div className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-secondary shrink-0" /> Donor Reporting</div>
                  <div className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-secondary shrink-0" /> Accounting Systems Setup</div>
                </div>
                
                <div className="text-sm font-semibold text-foreground/80 mt-auto pt-4"><strong>Strategic • CPA • ICPAK Member</strong></div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
                {/* Mary Akinyi */}
                <div className="bg-card rounded-2xl shadow-xl p-8 flex flex-col">
                    <div className="flex items-center gap-6 mb-6">
                        <Image src="/mary-akinyi-career.jpg" alt="Mary Akinyi" width={100} height={100} className="rounded-full" />
                        <div>
                            <Badge variant="secondary" className="mb-2">Senior Accountant</Badge>
                            <h2 className="text-2xl font-bold text-foreground">Mary Akinyi</h2>
                            <div className="text-md font-semibold text-secondary/80">Senior Accountant</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                        <Calendar className="w-4 h-4" /> 
                        <span>6+ Years Experience</span>
                    </div>
                    <p className="text-foreground/70">Mary has over six years of professional experience supporting SMEs and NGOs with accurate financial records, audit engagement, and statutory compliance. Her work is crucial to maintaining strong financial controls and delivering reliable reporting for our clients.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6 text-left w-full text-foreground/80">
                        <div className="flex items-center gap-2 text-sm"><Shield className="w-4 h-4 text-secondary shrink-0" /> Financial Record Maintenance</div>
                        <div className="flex items-center gap-2 text-sm"><Shield className="w-4 h-4 text-secondary shrink-0" /> Financial Statement Preparation</div>
                        <div className="flex items-center gap-2 text-sm"><Shield className="w-4 h-4 text-secondary shrink-0" /> Audit Support & Engagement</div>
                        <div className="flex items-center gap-2 text-sm"><Shield className="w-4 h-4 text-secondary shrink-0" /> Statutory & Tax Compliance</div>
                    </div>
                    <div className="text-sm font-semibold text-foreground/80 mt-auto pt-4">Detail-Oriented • Disciplined • Accurate</div>
                </div>

                {/* Stephen Mwangi */}
                <div className="bg-card rounded-2xl shadow-xl p-8 flex flex-col">
                    <div className="flex items-center gap-6 mb-6">
                        <Image src="/stephen-mwangi.jpg" alt="Stephen Mwangi" width={100} height={100} className="rounded-full" />
                        <div>
                            <Badge variant="secondary" className="mb-2">Systems & Technology Lead</Badge>
                            <h2 className="text-2xl font-bold text-foreground">Stephen Mwangi</h2>
                            <div className="text-md font-semibold text-secondary/80">Systems & Technology Lead</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>5+ Years Experience</span>
                    </div>
                    <p className="text-foreground/70">Stephen leads the implementation and management of accounting systems, ensuring they are configured to meet client reporting and operational needs. He helps our clients adopt efficient, reliable, and secure accounting technologies that improve accuracy and efficiency.</p>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6 text-left w-full text-foreground/80">
                        <div className="flex items-center gap-2 text-sm"><Laptop className="w-4 h-4 text-secondary shrink-0" /> Accounting Systems Setup</div>
                        <div className="flex items-center gap-2 text-sm"><Laptop className="w-4 h-4 text-secondary shrink-0" /> System Configuration</div>
                        <div className="flex items-center gap-2 text-sm"><Laptop className="w-4 h-4 text-secondary shrink-0" /> Digital Platform Integration</div>
                        <div className="flex items-center gap-2 text-sm"><Laptop className="w-4 h-4 text-secondary shrink-0" /> Technology Security</div>
                    </div>
                    <div className="text-sm font-semibold text-foreground/80 mt-auto pt-4">Technologically Skilled • Innovative • Solution-Focused</div>
                </div>
            </div>
          </Section>


          {/* Team Values */}
          <Section>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Shared Commitment</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Professional Excellence', desc: 'Maintaining the highest standards of accounting practice and continuous professional development.' },
                { title: 'Client Partnership', desc: 'Working as an extension of your team to understand and address your unique financial challenges.' },
                { title: 'Integrity & Confidentiality', desc: 'Upholding ethical standards and protecting client information with the utmost discretion.' },
                { title: 'Practical Solutions', desc: 'Delivering financial management approaches that work in the real world, not just on paper.' }
              ].map(value => (
                <div key={value.title} className="text-center p-6 bg-card rounded-2xl">
                  <div className="flex items-center justify-center w-12 h-12 bg-secondary rounded-full mx-auto mb-4">
                    <Check className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">{value.title}</h4>
                  <p className="text-foreground/70 text-sm">{value.desc}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* CTA */}
          <Section>
            <div className="bg-gradient-to-r from-secondary to-primary/80 rounded-2xl p-12 text-center text-primary-foreground">
              <h2 className="text-3xl font-bold mb-4">Ready to Work With Our Team?</h2>
              <p className="max-w-2xl mx-auto mb-8 text-primary-foreground/80">
                Contact us today to discuss how our team can support your organization's financial management needs.
              </p>
              <Link href="/contact" passHref>
                <Button size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </Section>
        </div>
      </main>
      <div id="footer-observer" style={{ height: 1 }} />
      <Footer />
    </div>
  );
}
