"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Logo } from './Logo';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [boardClasses, setBoardClasses] = useState('wood-board');

  const aboutMenuItems = [
      { label: 'About Us', href: '/about' },
      { label: 'Our Team', href: '/team' }
  ];

  const activeAboutItem = aboutMenuItems.find(item => item.href === pathname);
  
  const aboutNav = {
      label: activeAboutItem ? activeAboutItem.label : 'About Us',
      href: activeAboutItem ? activeAboutItem.href : '/about',
      dropdown: activeAboutItem
          ? aboutMenuItems.filter(item => item.href !== activeAboutItem.href)
          : aboutMenuItems,
  };
  
  const navItems = [
    { label: 'Home', href: '/' },
    { ...aboutNav, activeHrefs: ['/about', '/team'] },
    { label: 'Our Services', href: '/services' },
    { label: 'Blogs', href: '/blog' },
    { label: 'Careers', href: '/careers' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
      let pullTimeout: NodeJS.Timeout;
      let restartTimeout: NodeJS.Timeout;

      const runAnimation = () => {
          const ctaContainer = document.querySelector('.cta-container');
          if (ctaContainer && window.getComputedStyle(ctaContainer).display === 'none') {
              restartTimeout = setTimeout(runAnimation, 2000);
              return;
          }

          setBoardClasses('wood-board drop-down');
          pullTimeout = setTimeout(() => {
              setBoardClasses('wood-board pull-up');
          }, 6000);
          restartTimeout = setTimeout(runAnimation, 11000);
      };

      const startTimeout = setTimeout(runAnimation, 1000);

      return () => {
          clearTimeout(startTimeout);
          clearTimeout(pullTimeout);
          clearTimeout(restartTimeout);
      };
  }, []);

  const mobileNavLinks = navItems.flatMap((item) => {
    if (item.activeHrefs) {
      return aboutMenuItems.map((subItem) => {
        const isActive = pathname === subItem.href;
        return (
          <a
            key={subItem.label}
            href={subItem.href}
            className={cn(
              "mobile-nav-link",
              isActive && "mobile-nav-link-active"
            )}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {subItem.label}
          </a>
        );
      });
    }
    
    const isActive = (item.href === '/blog' && pathname.startsWith('/blog')) || pathname === item.href;

    return (
      <a
        key={item.label}
        href={item.href}
        className={cn(
          "mobile-nav-link",
          isActive && "mobile-nav-link-active"
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        {item.label}
      </a>
    );
  });

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'navbar py-3 px-6 lg:px-12',
        isScrolled ? 'navbar-scrolled' : 'navbar-transparent'
      )}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="/"
          className="flex items-center gap-3"
          whileHover={{ scale: 1.02 }}
        >
          <Logo className={cn(
            'w-14 h-14 transition-colors duration-300',
            isScrolled ? 'text-[hsl(var(--navbar-foreground))]' : 'text-foreground'
          )} />
          <span className={cn(
            'text-xl font-bold transition-colors duration-300 hidden lg:inline',
            isScrolled ? 'text-[hsl(var(--navbar-foreground))]' : 'text-foreground'
          )}>
            Number Craft Consulting
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = ('activeHrefs' in item && item.activeHrefs.includes(pathname)) ||
                             (item.href === '/blog' && pathname.startsWith('/blog')) ||
                             pathname === item.href;

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className={cn(
                    'nav-link flex items-center gap-1 py-2',
                    isScrolled ? 'text-[hsl(var(--navbar-foreground))] hover:text-secondary' : 'text-foreground/90 hover:text-foreground',
                    isActive && 'nav-link-active'
                  )}
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown className={cn(
                      'w-4 h-4 transition-transform duration-200',
                      activeDropdown === item.label && 'rotate-180'
                    )} />
                  )}
                </a>

                {/* Dropdown Menu */}
                {'dropdown' in item && item.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className="absolute top-full left-0 min-w-48 py-2 mt-2 bg-[hsl(var(--navbar-bg))] rounded-xl shadow-2xl"
                      >
                        {item.dropdown.map((subItem) => (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            className={cn(
                              'dropdown-item',
                              pathname === subItem.href && 'dropdown-item-active'
                            )}
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            );
          })}
        </div>

        {/* Animated CTA Button */}
        <div className="hidden lg:inline-block cta-container">
            <a href="/contact" className="btn-get-started">
                Contact Us
            </a>
            <a href="tel:+254707810650" className={boardClasses} style={{ textDecoration: 'none' }}>
                CALL NOW<br />
                +254 707 810 650
            </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-[hsl(var(--navbar-foreground))]' : 'text-foreground'} />
          ) : (
            <Menu className={isScrolled ? 'text-[hsl(var(--navbar-foreground))]' : 'text-foreground'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[hsl(var(--navbar-bg))] mt-4 rounded-xl overflow-hidden shadow-2xl"
          >
            <div className="py-4 px-4 space-y-2">
              {mobileNavLinks}
              <a
                href="/contact"
                className="btn-hero block text-center text-primary-foreground mt-4 py-3 px-6"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
