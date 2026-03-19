
"use client";

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Linkedin, Facebook, Instagram } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Logo } from './Logo';

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 1200 1227"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6904H306.615L611.412 515.685L658.88 583.579L1055.08 1150.31H892.476L569.165 687.854V687.828Z"
      fill="currentColor"
    />
  </svg>
);

const footerLinks = {
  services: [
    { label: 'Accounting & Bookkeeping', href: '/services' },
    { label: 'Audit & Assurance', href: '/services' },
    { label: 'Tax & Compliance', href: '/services' },
    { label: 'Business Support', href: '/services' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/team' },
    { label: 'Careers', href: '/careers' },
    { label: 'Blog', href: '/blog' },
  ],
  support: [
    { label: 'Contact Us', href: '/contact' },
    { label: 'FAQs', href: '/faq' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/company/111380141/admin/dashboard/', label: 'LinkedIn' },
  { icon: XIcon, href: '#', label: 'X' },
  { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61588524286832', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer id="contact" className="bg-[hsl(var(--primary-dark))] pt-20 pb-8">
      <div className="w-full px-6 lg:px-12">
        <div className="grid lg:grid-cols-5 gap-12 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.a
              href="/"
              className="flex items-center gap-3 mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <Logo className="w-16 h-16 text-foreground" />
              <span className="text-2xl font-bold text-foreground lg:inline hidden">Number Craft Consulting</span>
            </motion.a>
            
            <p className="text-foreground/60 mb-6 max-w-sm leading-relaxed">
              Delivering professional accounting, audit, and compliance solutions that support accountability and sustainable growth.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-foreground/60 text-sm">
                <MapPin className="w-5 h-5 text-secondary" />
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-3 text-foreground/60 text-sm">
                <Phone className="w-5 h-5 text-secondary" />
                <span>+254 707 810 650</span>
              </div>
              <div className="flex items-center gap-3 text-foreground/60 text-sm">
                <Mail className="w-5 h-5 text-secondary" />
                <span>info@numbercraftconsulting.com</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-foreground/60 hover:text-secondary transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-foreground/60 hover:text-secondary transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-foreground/60 hover:text-secondary transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 grid grid-cols-1 md:grid-cols-3 items-center gap-6">
          <p className="text-foreground/40 text-sm text-center md:text-left order-2 md:order-1">
            © {year} Number Craft Consulting. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 order-1 md:order-2">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/60 hover:bg-secondary hover:text-foreground transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
          <div className="hidden md:block order-3" />
        </div>
      </div>
    </footer>
  );
};
