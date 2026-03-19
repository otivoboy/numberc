"use client";

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { Briefcase, Users, Award, LifeBuoy, TrendingUp, DollarSign, Mail } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Section = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.6, ease: 'easeInOut' }}
    className={`py-16 ${className}`}
  >
    {children}
  </motion.section>
);

const SectionHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <div className="text-center mb-12 max-w-3xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{title}</h2>
    <p className="text-lg text-foreground/70">{subtitle}</p>
  </div>
);

const cultureItems = [
  { icon: Users, title: "Collaborative Environment", description: "Work alongside experienced accountants and auditors in a supportive, team-oriented setting where knowledge sharing is encouraged." },
  { icon: Briefcase, title: "Continuous Learning", description: "Stay at the forefront of accounting standards, tax regulations, and financial technologies through ongoing professional development." },
  { icon: LifeBuoy, title: "Work-Life Balance", description: "We respect personal time and promote sustainable work practices that allow our team to perform at their best." }
];

const qualities = [
    { title: "Detail-Oriented Professionals", description: "Individuals who understand that accuracy in financial reporting is non-negotiable." },
    { title: "Problem Solvers", description: "Those who can navigate complex compliance requirements and find practical financial solutions." },
    { title: "Continuous Learners", description: "Professionals committed to staying updated with evolving accounting standards and regulations." },
    { title: "Client-Focused Individuals", description: "Team members who understand that our success is measured by our clients' success." }
];

const benefits = [
    { number: "01", icon: TrendingUp, title: "Professional Development", description: "Support for certifications, training programs, and attendance at industry workshops and seminars." },
    { number: "02", icon: Users, title: "Diverse Experience", description: "Exposure to multiple sectors including SMEs, NGOs, startups, and established businesses." },
    { number: "03", icon: Award, title: "Modern Technology", description: "Work with the latest accounting software and financial management tools." },
    { number: "04", icon: LifeBuoy, title: "Mentorship", description: "Guidance from experienced professionals including our Founder & CEO, Peter Muru, CPA." },
    { number: "05", icon: Briefcase, title: "Career Growth", description: "Clear progression paths and opportunities to take on increasing responsibilities." },
    { number: "06", icon: DollarSign, title: "Competitive Package", description: "Attractive compensation aligned with experience and qualifications." }
];

const leadershipTeam = [
  { initials: 'PM', name: 'Peter Muru, CPA', role: 'Founder & CEO', bio: '10+ years in accounting and audit with specialization in SME and NGO financial management.', image: '/peter-muru.jpg' },
  { initials: 'MA', name: 'Mary Akinyi', role: 'Senior Accountant', bio: '6+ years experience in financial reporting, compliance, and accounting operations.', image: '/mary-akinyi-career.jpg' },
  { initials: 'SM', name: 'Stephen Mwangi', role: 'Systems & Technology Lead', bio: '5+ years specializing in accounting systems implementation and digital solutions.', image: '/stephen-mwangi.jpg' }
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-20">
        
        <div className="relative bg-primary py-24 text-center text-primary-foreground">
            <Image 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Business meeting"
                fill
                className="object-cover opacity-20"
                data-ai-hint="business meeting"
            />
            <div className="relative z-10 px-6">
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl font-bold mb-4"
                >
                    Grow With Us
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg md:text-xl text-primary-foreground/80"
                >
                    Join a team of accounting professionals dedicated to financial excellence and making a meaningful impact.
                </motion.p>
            </div>
        </div>

        <div className="w-full px-6 lg:px-8">
          
          <Section>
            <SectionHeader 
              title="Our Work Culture"
              subtitle="At Number Craft Consulting, we believe in creating an environment where professionals can thrive, grow, and deliver exceptional value to our clients."
            />
            <div className="grid md:grid-cols-3 gap-8">
              {cultureItems.map((item, index) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="bg-card p-8 rounded-2xl text-center shadow-lg"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-secondary/20 rounded-full mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-foreground/70">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </Section>

          <Section>
            <div className="bg-card rounded-2xl shadow-2xl overflow-hidden grid lg:grid-cols-2">
                <div className="p-8 md:p-12">
                    <h2 className="text-3xl font-bold text-foreground mb-4">Who We're Looking For</h2>
                    <p className="text-lg text-foreground/70 mb-8">We seek accounting professionals who are passionate about financial accuracy, compliance, and helping organizations achieve their goals.</p>
                    <div className="space-y-6">
                        {qualities.map(quality => (
                            <div key={quality.title}>
                                <h4 className="text-lg font-semibold text-secondary mb-2">{quality.title}</h4>
                                <p className="text-foreground/70">{quality.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative min-h-[300px] lg:min-h-0">
                    <Image
                        src="/team-collaboration.jpg"
                        alt="Team collaboration"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
          </Section>

          <Section>
            <SectionHeader
              title="What We Offer"
              subtitle="We invest in our team's growth and well-being, providing a supportive environment for long-term career development."
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map(benefit => (
                <div key={benefit.title} className="bg-card p-8 rounded-xl shadow-lg relative">
                  <span className="absolute top-4 left-4 text-5xl font-extrabold text-primary/10">{benefit.number}</span>
                  <div className="relative">
                    <div className="flex items-center justify-center w-12 h-12 bg-secondary/20 rounded-full mb-4">
                      <benefit.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <h4 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h4>
                    <p className="text-foreground/70">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section>
            <SectionHeader
              title="Meet Our Leadership"
              subtitle="Learn from experienced professionals who guide our firm's commitment to excellence."
            />
            <div className="grid md:grid-cols-3 gap-8">
              {leadershipTeam.map(member => (
                <div key={member.name} className="bg-card p-8 rounded-2xl text-center shadow-lg">
                  <Avatar className="w-24 h-24 text-3xl mx-auto mb-4">
                    <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                    <AvatarFallback className="bg-primary/40">{member.initials}</AvatarFallback>
                  </Avatar>
                  <h4 className="text-xl font-bold text-foreground">{member.name}</h4>
                  <p className="text-secondary font-semibold mb-2">{member.role}</p>
                  <p className="text-sm text-foreground/70">{member.bio}</p>
                </div>
              ))}
            </div>
          </Section>

        </div>
      </main>
      <div id="footer-observer" style={{ height: 1 }} />
      <Footer />
    </div>
  );
}