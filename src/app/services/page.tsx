
"use client";

import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, BarChart, Search, FileText, Handshake, Rocket, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

// Data for all services
const servicesData = {
  accounting: {
    icon: BarChart,
    title: "Accounting & Bookkeeping",
    tagline: "The Foundation of Financial Excellence",
    description: [
      "Sound accounting and bookkeeping form the foundation of effective financial management and informed decision-making. Accurate records not only support day-to-day operations but also ensure compliance, transparency, and financial stability.",
      "At Number Craft Consulting, we provide reliable accounting and bookkeeping services designed to meet the needs of SMEs and NGOs. Our team ensures that financial records are properly maintained, budgets are effectively managed, and financial statements are prepared in line with applicable accounting standards."
    ],
    features: {
      title: "Our Accounting Services Include:",
      items: [
        { title: "Comprehensive Bookkeeping", desc: "Daily transaction recording, bank reconciliations, and ledger maintenance" },
        { title: "Monthly Rental Income Accounting", desc: "Specialized tracking and reporting for property investment income" },
        { title: "Budgeting & Cashflow Management", desc: "Development and monitoring of budgets and cashflow projections" },
        { title: "Financial Statement Preparation", desc: "Management and statutory financial statements compliant with standards" },
      ]
    },
    benefits: {
      title: "Benefits for Your Organization",
      items: [
        "Accurate financial data for informed decision-making",
        "Improved cash flow management and financial planning",
        "Timely and compliant financial reporting",
        "Reduced risk of errors and financial discrepancies",
        "More time to focus on core business activities",
      ]
    }
  },
  audit: {
    icon: Search,
    title: "Audit & Assurance",
    tagline: "Strengthening Governance & Accountability",
    description: [
      "Audit and assurance services play a critical role in strengthening governance, accountability, and stakeholder confidence. With increasing regulatory and donor scrutiny, organizations require independent assurance that their financial information is accurate and compliant.",
      "We provide professional audit and assurance services that help organizations identify risks, strengthen internal controls, and meet statutory and donor requirements. Our audit approach is thorough, objective, and aligned with applicable auditing standards."
    ],
    features: {
      title: "Our Audit Services Include:",
      items: [
        { title: "Statutory & Internal Audit", desc: "Comprehensive audits to meet legal and organizational requirements" },
        { title: "Forensic Audit", desc: "Investigation of financial discrepancies and fraud detection" },
        { title: "Inventory Audit", desc: "Verification and valuation of physical inventory and assets" },
        { title: "Compliance Reviews", desc: "Risk assessments and compliance with regulatory frameworks" },
        { title: "Audit Preparation Support", desc: "Pre-audit assessments and documentation preparation" },
        { title: "Internal Audit Support", desc: "Development and implementation of internal audit functions" },
      ]
    }
  },
  tax: {
    icon: FileText,
    title: "Tax & Statutory Compliance",
    tagline: "Navigating Complex Regulatory Requirements",
    description: [
      "Taxation and statutory compliance are essential business obligations, yet the complexity and frequent changes in tax laws make compliance increasingly challenging for organizations.",
      "Our role is to ensure that our clients meet their statutory obligations accurately and on time, while avoiding unnecessary penalties and compliance risks. We support clients in navigating tax and statutory requirements through practical guidance, accurate filings, and ongoing compliance support."
    ],
    features: {
      title: "Our Compliance Services Include:",
      items: [
        { title: "Statutory Deductions Filing", desc: "PAYE, NSSF, NHIF, HELB, and Housing Levy compliance and submission" },
        { title: "VAT & Withholding Tax", desc: "Accurate calculation, filing, and remittance of VAT and withholding taxes" },
        { title: "Ongoing Compliance Support", desc: "Continuous monitoring and support for all statutory obligations" },
        { title: "Regulatory Updates", desc: "Timely alerts and guidance on changing tax laws and regulations" },
      ]
    }
  },
  donor: {
    icon: Handshake,
    title: "Donor & NGO Reporting",
    tagline: "Specialized Financial Management for Impact Organizations",
    description: [
      "Donor-funded organizations operate within strict financial reporting and compliance frameworks that demand high levels of transparency and accountability.",
      "We provide specialized financial reporting services tailored to the needs of NGOs and donor-funded projects. Our support ensures accurate tracking of grant expenditures, timely donor reporting, and compliance with donor agreements and reporting guidelines."
    ],
    features: {
      title: "Our NGO Reporting Services Include:",
      items: [
        { title: "Donor Financial Reports", desc: "Preparation of accurate and timely reports per donor requirements" },
        { title: "Grant Expenditure Tracking", desc: "Detailed monitoring and allocation of grant funds and expenses" },
        { title: "Budget vs. Actual Analysis", desc: "Comprehensive variance reporting and performance analysis" },
        { title: "Donor Compliance", desc: "Ensuring adherence to donor financial and reporting guidelines" },
      ]
    }
  },
  startups: {
    icon: Rocket,
    title: "Business Support for Startups",
    tagline: "Building Strong Financial Foundations",
    description: [
      "Strong financial systems established at an early stage are critical to the long-term success of any startup. Poorly designed accounting processes often lead to compliance challenges and weak financial control.",
      "We support startups by setting up robust accounting systems, developing financial structures, and providing advisory support that enables new businesses to operate efficiently and grow sustainably."
    ],
    features: {
      title: "Our Startup Support Services Include:",
      items: [
        { title: "Accounting System Setup", desc: "Implementation of tailored accounting software and processes" },
        { title: "Chart of Accounts Design", desc: "Customized account structure for your specific business needs" },
        { title: "Accounting Policies & Procedures", desc: "Development of clear financial guidelines and controls" },
        { title: "Finance Manual Development", desc: "Comprehensive manual outlining all financial processes" },
        { title: "Fixed Asset Register", desc: "Creation and maintenance of asset tracking systems" },
        { title: "Financial Advisory Support", desc: "Strategic guidance for financial planning and growth" },
      ]
    }
  },
  talent: {
    icon: Users,
    title: "Talent & Capacity Building",
    tagline: "Strengthening Your Internal Financial Capabilities",
    description: [
      "Building internal financial capacity is essential for organizations seeking long-term sustainability and reduced dependency on external support.",
      "We provide training and recruitment support to help organizations strengthen their accounting function. Our capacity-building services are designed to enhance technical skills, improve compliance, and support effective financial management."
    ],
    features: {
      title: "Our Capacity Building Services Include:",
      items: [
        { title: "Accounting Training & Development", desc: "Customized training programs for finance teams and staff" },
        { title: "Personnel Recruitment", desc: "Identification and placement of qualified accounting professionals" },
        { title: "Organizational Capacity Building", desc: "Strengthening financial systems and processes across your organization" },
        { title: "Skills Gap Assessment", desc: "Evaluation of current capabilities and development of improvement plans" },
      ]
    }
  }
};

type ServiceKey = keyof typeof servicesData;

export default function ServicesPage() {
  const [activeService, setActiveService] = useState<ServiceKey>('accounting');
  const service = servicesData[activeService];
  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-card py-20 text-center text-primary-foreground relative overflow-hidden">
        <div className="px-6 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Financial Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-primary-foreground/80"
          >
            At Number Craft Consulting, we provide tailored accounting, audit, and compliance services designed specifically for SMEs and NGOs. Our professional approach ensures your financial systems are robust, compliant, and strategically aligned with your organizational goals.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <main className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Sticky Navigation Sidebar */}
          <aside className="lg:col-span-3 lg:sticky top-28 h-fit">
            <div className="bg-card rounded-2xl p-6 shadow-lg">
              <div className="pb-4 mb-4 border-b border-border">
                <h3 className="text-xl font-bold text-foreground">Our Service Areas</h3>
                <p className="text-sm text-muted-foreground">Select a category to learn more</p>
              </div>
              <nav className="flex flex-col gap-2">
                {Object.keys(servicesData).map((key) => {
                  const s = servicesData[key as ServiceKey];
                  const SIcon = s.icon;
                  return (
                    <button
                      key={key}
                      onClick={() => setActiveService(key as ServiceKey)}
                      className={cn(
                        "flex items-center text-left gap-3 p-3 rounded-lg transition-all duration-200 text-sm font-medium",
                        activeService === key
                          ? "bg-secondary text-secondary-foreground"
                          : "text-foreground/80 hover:bg-primary/20 hover:text-foreground"
                      )}
                    >
                      <SIcon className="w-5 h-5 shrink-0" />
                      <span>{s.title}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Service Content */}
          <div className="lg:col-span-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-card rounded-2xl p-6 sm:p-8 md:p-12 shadow-2xl"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pb-6 mb-6 border-b border-border">
                  <div className="bg-gradient-to-br from-primary to-secondary text-primary-foreground w-20 h-20 rounded-full flex items-center justify-center shrink-0">
                    <Icon className="w-10 h-10" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-foreground">{service.title}</h2>
                    <p className="text-lg font-semibold text-secondary italic mt-1">{service.tagline}</p>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-4 text-foreground/80 leading-relaxed mb-10">
                  {service.description.map((p, i) => <p key={i}>{p}</p>)}
                </div>

                {/* Features */}
                {service.features && (
                  <div className="mb-10">
                    <h3 className="text-2xl font-bold text-foreground mb-6">{service.features.title}</h3>
                    <div className="grid sm:grid-cols-2 gap-6">
                      {service.features.items.map((item, i) => (
                        <div key={i} className="bg-primary/20 p-6 rounded-xl border-l-4 border-secondary">
                          <Check className="w-6 h-6 text-secondary mb-3" />
                          <h4 className="font-semibold text-lg text-foreground mb-2">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Benefits */}
                {service.benefits && (
                  <div className="bg-primary/20 rounded-xl p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-6">{service.benefits.title}</h3>
                    <ul className="space-y-3">
                      {service.benefits.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-secondary mt-1 shrink-0" />
                          <span className="text-foreground/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
            
            {/* CTA */}
            <div className="bg-gradient-to-r from-secondary to-primary/80 rounded-2xl p-12 mt-12 text-center text-primary-foreground">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Financial Management?</h2>
              <p className="max-w-2xl mx-auto mb-8 text-primary-foreground/80">
                Contact us today to discuss how our services can be tailored to meet your organization's specific needs and challenges.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact" passHref>
                  <Button size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                    Get In Touch
                  </Button>
                </Link>
                <Link href="/team" passHref>
                   <Button size="lg" variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                    Meet Our Team
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div id="footer-observer" style={{ height: 1 }} />
      <Footer />
    </div>
  );
}
