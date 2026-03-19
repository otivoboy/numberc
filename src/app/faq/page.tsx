
"use client";

import { useState, useMemo } from 'react';
import { Logo } from '@/components/Logo';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Search, Calculator, FileText, Handshake, DollarSign, Workflow } from 'lucide-react';

const faqData = [
  {
    category: 'accounting',
    title: 'Accounting Services',
    icon: Calculator,
    questions: [
      {
        q: 'What accounting services do you provide for SMEs?',
        a: 'We offer comprehensive accounting services for SMEs including bookkeeping, financial statement preparation, budgeting, cash flow management, payroll processing, and monthly rental income accounting. Our services are tailored to meet both operational needs and compliance requirements.',
      },
      {
        q: 'How often do you update financial records?',
        a: 'We typically update financial records on a weekly or monthly basis, depending on your business volume and requirements. For most SMEs, monthly updates are sufficient, but we can arrange more frequent updates for businesses with higher transaction volumes.',
      },
      {
        q: 'Can you help set up accounting systems for new businesses?',
        a: 'Yes, we specialize in setting up accounting systems for startups and new businesses. This includes selecting appropriate accounting software, designing charts of accounts, establishing accounting policies and procedures, and training your staff on financial processes.',
      },
    ],
  },
  {
    category: 'audit',
    title: 'Audit & Assurance',
    icon: Search,
    questions: [
      {
        q: 'What types of audit services do you offer?',
        a: 'We provide statutory audits, internal audits, forensic audits, inventory audits, compliance reviews, and audit preparation support. Our audit approach is thorough and aligned with applicable auditing standards (ISA).',
      },
      {
        q: 'How long does a typical audit take?',
        a: 'The duration depends on the organization\'s size and complexity. Small to medium-sized organizations typically require 2-4 weeks for completion, including planning, fieldwork, and reporting phases.',
      },
      {
        q: 'Do you help with audit preparation?',
        a: 'Yes, we offer comprehensive audit preparation services including document organization, internal control reviews, and pre-audit assessments to ensure your organization is well-prepared for external audits.',
      },
    ],
  },
  {
    category: 'tax',
    title: 'Tax & Compliance',
    icon: FileText,
    questions: [
      {
        q: 'Which statutory deductions do you handle?',
        a: 'We manage all statutory deductions including PAYE, NSSF, NHIF, HELB, and Housing Levy. We ensure accurate calculations, timely filings, and maintain compliance with KRA requirements.',
      },
      {
        q: 'How do you stay updated with changing tax laws?',
        a: 'Our team participates in continuous professional development, subscribes to regulatory updates, and maintains memberships with professional bodies like ICPAK to stay current with all tax law changes affecting our clients.',
      },
      {
        q: 'What happens if we miss a filing deadline?',
        a: 'We proactively monitor deadlines to prevent missed filings. In rare cases of delays, we assist with penalty minimization strategies and work with authorities to resolve compliance issues promptly.',
      },
    ],
  },
  {
    category: 'ngo',
    title: 'NGO & Donor Reporting',
    icon: Handshake,
    questions: [
      {
        q: 'What donor reporting services do you provide?',
        a: 'We prepare donor financial reports, track grant expenditures, perform budget versus actual analyses, and ensure compliance with donor financial and reporting guidelines across multiple funding streams.',
      },
      {
        q: 'Can you handle multiple donor reporting formats?',
        a: 'Yes, we have experience with various donor reporting formats including EU, USAID, UN agencies, and private foundation requirements. We tailor reports to meet each donor\'s specific guidelines.',
      },
      {
        q: 'How do you ensure NGO compliance?',
        a: 'We maintain up-to-date knowledge of NGO Coordination Board requirements, donor compliance frameworks, and ensure proper documentation, reporting, and adherence to all regulatory obligations.',
      },
    ],
  },
  {
    category: 'pricing',
    title: 'Pricing & Fees',
    icon: DollarSign,
    questions: [
      {
        q: 'How are your fees structured?',
        a: 'We offer flexible pricing models including monthly retainers for ongoing services, project-based fees for specific engagements, and hourly rates for advisory services. We provide transparent quotes with no hidden costs.',
      },
      {
        q: 'Do you offer packages for startups?',
        a: 'Yes, we offer startup packages that include accounting system setup, monthly bookkeeping, statutory filing support, and quarterly financial reviews at discounted rates for new businesses.',
      },
      {
        q: 'What payment terms do you offer?',
        a: 'Our standard payment terms are net 15 days from invoice date. For monthly retainers, we invoice at the beginning of each month. We accept bank transfers and mobile payments.',
      },
    ],
  },
  {
    category: 'process',
    title: 'Our Process',
    icon: Workflow,
    questions: [
      {
        q: 'What is your typical engagement process?',
        a: '1. Initial consultation to understand your needs\n2. Proposal and scope definition\n3. Onboarding and document collection\n4. Service delivery with regular updates\n5. Review meetings and continuous support',
      },
      {
        q: 'How quickly can you start working with us?',
        a: 'We can typically commence new engagements within 3-5 business days after the initial consultation and agreement signing. Urgent matters can be addressed within 24 hours.',
      },
      {
        q: 'What information do you need to get started?',
        a: 'We typically require: business registration documents, previous financial statements (if available), tax compliance certificates, bank statements, and details of current accounting systems or processes.',
      },
    ],
  },
];

const categories = [
  { id: 'all', name: 'All FAQs' },
  { id: 'accounting', name: 'Accounting Services' },
  { id: 'audit', name: 'Audit & Assurance' },
  { id: 'tax', name: 'Tax & Compliance' },
  { id: 'ngo', name: 'NGO Reporting' },
  { id: 'pricing', name: 'Pricing & Fees' },
  { id: 'process', name: 'Our Process' },
];

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredFaqs = useMemo(() => {
    return faqData
      .map(category => {
        const filteredQuestions = category.questions.filter(
          item =>
            (activeCategory === 'all' || category.category === activeCategory) &&
            (item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
              item.a.toLowerCase().includes(searchTerm.toLowerCase()))
        );
        return { ...category, questions: filteredQuestions };
      })
      .filter(category => category.questions.length > 0);
  }, [searchTerm, activeCategory]);

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Find answers to common questions about our accounting, audit, and compliance services.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="relative max-w-lg mx-auto">
              <Input
                id="faqSearch"
                placeholder="Search for questions or topics..."
                className="pl-10"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-2 mb-12"
          >
            {categories.map(category => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category.id)}
                className="rounded-full"
              >
                {category.name}
              </Button>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {filteredFaqs.length > 0 ? (
              <div className="space-y-8">
                {filteredFaqs.map(category => {
                  const Icon = category.icon;
                  return (
                    <div key={category.category}>
                      <h3 className="text-2xl font-bold text-secondary mb-4 flex items-center gap-3">
                        <Icon className="w-7 h-7" />
                        {category.title}
                      </h3>
                      <Accordion type="single" collapsible className="w-full space-y-4">
                        {category.questions.map((faq, index) => (
                          <AccordionItem key={index} value={`item-${index}`} className="bg-card border-border-soft rounded-xl px-6">
                            <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline text-foreground">
                              {faq.q}
                            </AccordionTrigger>
                            <AccordionContent className="text-foreground/80 pt-2 whitespace-pre-line">
                              {faq.a}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-center text-muted-foreground">No questions found matching your search.</p>
            )}
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.6 }}
             className="bg-gradient-to-r from-secondary to-primary/80 rounded-2xl p-12 mt-20 text-center text-primary-foreground"
          >
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-primary-foreground/80">
              Can't find what you're looking for? Our team is ready to provide personalized answers to your specific questions.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/contact" passHref>
                <Button size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">Contact Us</Button>
              </Link>
               <a href="tel:+254707810650">
                <Button size="lg" variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">Call Now</Button>
               </a>
            </div>
          </motion.div>
        </div>
      </main>
      <div id="footer-observer" style={{ height: 1 }} />
      <Footer />
    </div>
  );
}
