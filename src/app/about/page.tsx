"use client";

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle } from 'lucide-react';

const coreServices = [
  { title: "Comprehensive Accounting Solutions", description: "We provide end-to-end accounting services tailored to your organizational needs. From daily bookkeeping to complex financial reporting, we ensure every transaction is accurately recorded, categorized, and available for strategic analysis." },
  { title: "Audit & Assurance Services", description: "Our audit services provide stakeholders with confidence in your financial statements. We conduct independent, thorough examinations of financial records, identifying areas for improvement while ensuring compliance with all applicable standards and regulations." },
  { title: "Compliance Management", description: "Navigating the complex web of statutory requirements and donor regulations can be challenging. We help you maintain full compliance with Kenya Revenue Authority (KRA) regulations, NGO Coordination Board requirements, and specific donor reporting standards." },
  { title: "Financial System Strengthening", description: "Beyond routine services, we work to strengthen your entire financial ecosystem. We assess, design, and implement financial controls, procedures, and reporting frameworks that enhance transparency and accountability." },
  { title: "Capacity Building & Training", description: "We believe in empowering your team. Through customized training sessions, we transfer knowledge and skills to your staff, enabling sustainable internal financial management capabilities." }
];

const whyChooseUsPoints = [
  "Deep Sector Understanding",
  "Customized Solutions",
  "Integrity & Confidentiality",
  "Value Beyond Compliance",
  "Local Knowledge, Global Standards"
];

const clients = [
  { name: 'Association of Grassroot Journalists of Kenya', desc: 'Media association financial management and compliance' },
  { name: 'Kenya Environment and Science Journalist Association', desc: 'Membership organization accounting and reporting' },
  { name: 'Living Health Focus Africa', desc: 'Health NGO financial systems and donor reporting' },
  { name: 'Mucoll Ltd', desc: 'SME accounting and tax compliance services' },
  { name: 'Osil Limited', desc: 'Corporate financial management and advisory' },
  { name: 'Rural Family Hope', desc: 'Community development NGO audit and compliance' },
  { name: 'Charming Safaris', desc: 'Tourism enterprise bookkeeping and financial reporting' },
  { name: 'Poa Palace', desc: 'Hospitality business accounting and tax services' }
];

const teamCommitmentImage = PlaceHolderImages.find(p => p.id === 'about-team-commitment');
const aboutHeroImage = PlaceHolderImages.find(p => p.id === 'about-hero');


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

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pb-20">
        
        <section className="relative py-24 md:py-32 text-center text-foreground">
            {aboutHeroImage && (
                <Image
                    src={aboutHeroImage.imageUrl}
                    alt="Financial documents"
                    fill
                    className="object-cover"
                    data-ai-hint={aboutHeroImage.imageHint}
                    priority
                />
            )}
            <div className="absolute inset-0 bg-black/70" />
            <div className="relative z-10 px-6">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold text-foreground mb-4"
                >
                    About Number Craft Consulting
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg text-secondary font-semibold"
                >
                    Building Financial Foundations for Growth and Impact
                </motion.p>
            </div>
        </section>

        <div className="w-full px-6 lg:px-8">
          <Section className="pt-24">
            <div>
              <SectionTitle>Who We Are</SectionTitle>
              <div className="space-y-4 text-foreground/70 leading-relaxed">
                <p>
                  Number Craft Consulting is a premier accounting and audit consultancy dedicated to providing reliable, comprehensive financial services to Small and Medium Enterprises (SMEs) and Non-Governmental Organizations (NGOs) across Kenya and beyond.
                </p>
                <p>
                  Founded on the principles of accuracy, integrity, and professionalism, we specialize in transforming financial management into a strategic asset for your organization. Our team of certified accounting professionals brings years of experience navigating the complex landscapes of statutory compliance, donor reporting requirements, and operational financial management.
                </p>
              </div>
            </div>
          </Section>

          <Section>
            <div className="text-center bg-card p-12 rounded-3xl">
              <SectionTitle>Our Mission & Vision</SectionTitle>
              <div className="grid md:grid-cols-2 gap-8 text-foreground/80">
                <div>
                  <h3 className="text-2xl font-semibold text-secondary mb-3">Mission</h3>
                  <p>To empower SMEs and NGOs with robust financial systems that ensure compliance, enhance transparency, and drive sustainable growth through professional accounting, auditing, and consultancy services.</p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-secondary mb-3">Vision</h3>
                  <p>To become the leading partner for organizational financial excellence in East Africa, recognized for transforming financial management into a catalyst for impact and growth.</p>
                </div>
              </div>
            </div>
          </Section>

          <Section>
            <SectionTitle>Our Core Services</SectionTitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-card border border-border-soft h-full"
                >
                  <h3 className="text-xl font-semibold text-secondary mb-3">{service.title}</h3>
                  <p className="text-sm text-foreground/70">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </Section>

          <Section>
            <SectionTitle>Why Choose Number Craft Consulting?</SectionTitle>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {whyChooseUsPoints.map((point) => (
                <div key={point} className="flex items-start gap-3 p-4">
                  <CheckCircle className="w-6 h-6 text-secondary mt-1 shrink-0" />
                  <span className="text-foreground/80">{point}</span>
                </div>
              ))}
            </div>
          </Section>
          
          <Section>
            <SectionTitle>Our Clients</SectionTitle>
            <div className="grid md:grid-cols-2 gap-6">
              {clients.map(client => (
                <div key={client.name} className="bg-card p-6 rounded-xl border border-border-soft">
                  <h4 className="font-bold text-foreground">{client.name}</h4>
                  <p className="text-sm text-foreground/60 mt-1">{client.desc}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <SectionTitle>Our Team & Commitment</SectionTitle>
                <div className="space-y-4 text-foreground/70 leading-relaxed">
                  <p>
                    Number Craft Consulting brings together qualified accountants, auditors, and financial consultants with complementary expertise. Our team members hold relevant professional certifications and participate in continuous professional development to stay current with industry changes.
                  </p>
                  <p>
                    We foster a collaborative culture where diverse perspectives converge to solve complex financial challenges, enabling us to provide comprehensive solutions that address both technical requirements and practical implementation considerations. As a firm, we allocate a portion of our capacity to pro bono services for early-stage social enterprises and offer discounted rates to small NGOs doing impactful work.
                  </p>
                </div>
              </div>
              {teamCommitmentImage && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl h-80"
                >
                  <Image src={teamCommitmentImage.imageUrl} alt={teamCommitmentImage.description} data-ai-hint={teamCommitmentImage.imageHint} fill className="object-cover" />
                </motion.div>
              )}
            </div>
          </Section>

          <Section>
            <div className="text-center bg-secondary/10 p-12 rounded-3xl">
              <h2 className="text-3xl font-bold text-secondary mb-4">Get in Touch</h2>
              <p className="text-foreground/80 max-w-2xl mx-auto mb-8">
                Ready to strengthen your financial management systems? Contact us today to discuss how Number Craft Consulting can support your organization's financial health and compliance needs.
              </p>
              <motion.a
                href="/contact"
                className="btn-hero inline-flex items-center gap-3 text-primary-foreground"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label="Contact Us"
              >
                Contact Us
              </motion.a>
            </div>
          </Section>
        </div>
      </main>
      <div id="footer-observer" style={{ height: 1 }} />
      <Footer />
    </div>
  );
}