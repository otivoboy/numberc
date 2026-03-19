
"use client";

import { motion } from 'framer-motion';
import { ServiceCard } from './ServiceCard';
import { ClipboardCheck, Lightbulb, FileText, Handshake } from 'lucide-react';

const services = [
  {
    icon: ClipboardCheck,
    title: 'Audit & Assurance',
    description: 'Comprehensive audit services that ensure financial accuracy, regulatory compliance, and stakeholder confidence in your organization.',
    href: '/audit-assurance',
  },
  {
    icon: Lightbulb,
    title: 'Business Advisory',
    description: 'Strategic insights and actionable recommendations to optimize operations, drive innovation, and accelerate sustainable growth.',
    href: '/business-advisory',
  },
  {
    icon: FileText,
    title: 'Compliance & Tax',
    description: 'Expert guidance on tax optimization, regulatory compliance, and risk management to protect your business interests.',
    href: '/compliance-tax',
  },
  {
    icon: Handshake,
    title: 'Deal Advisory',
    description: 'End-to-end support for mergers, acquisitions, and transactions that maximize value and minimize risk for all parties.',
    href: '/deal-advisory',
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 lg:py-32 relative bg-background">
      <div className="px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4"
          >
            Our Services
          </motion.span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive Solutions for
            <br />
            <span className="text-secondary">Your Business Needs</span>
          </h2>
          
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            We offer a full spectrum of professional services designed to help your organization thrive in today's dynamic business environment.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              href={service.href}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[hsl(var(--primary-light)/0.05)] rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />
    </section>
  );
};
