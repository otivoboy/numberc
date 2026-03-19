"use client";

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  delay?: number;
}

export const ServiceCard = ({ icon: Icon, title, description, href, delay = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <Link href={href} className="service-card group cursor-pointer flex flex-col h-full">
        {/* Icon */}
        <div className="mb-6 relative">
          <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center icon-glow">
            <Icon className="w-8 h-8 text-secondary" strokeWidth={1.5} />
          </div>
          
          {/* Animated glow ring on hover */}
          <motion.div
            className="absolute inset-0 w-16 h-16 rounded-2xl"
            initial={{ scale: 1, opacity: 0 }}
            whileHover={{ scale: 1.5, opacity: 0.3 }}
            transition={{ duration: 0.4 }}
            style={{
              background: 'radial-gradient(circle, hsl(var(--secondary)) 0%, transparent 70%)',
            }}
          />
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-secondary transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-foreground/60 leading-relaxed text-sm flex-grow">
          {description}
        </p>

        {/* Hover arrow indicator */}
        <div
          className="mt-6 text-secondary text-sm font-medium flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          Learn More
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </div>
      </Link>
    </motion.div>
  );
};
