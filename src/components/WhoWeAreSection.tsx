
"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const WhoWeAreSection = () => {
  const whoWeAreImage = PlaceHolderImages.find(p => p.id === 'who-we-are-1');

  return (
    <section id="about" className="py-24 lg:py-32 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:pr-8"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-snug">
              Intelligent Financial Solutions
            </h2>
            <div className="space-y-6 text-foreground/70 leading-relaxed">
              <p>
                We are a forward-thinking firm that reimagines traditional audit and accounting through the lens of modern technology. We combine deep financial expertise with cutting-edge digital tools to deliver precise, efficient, and insightful solutions for our clients.
              </p>
              <p>
                Our team is composed of seasoned accounting professionals and tech specialists who work together to streamline processes, enhance accuracy, and provide real-time financial intelligence. We believe in transforming numbers into strategic assets.
              </p>
              <p>
                By leveraging automation, data analytics, and secure cloud platforms, we go beyond compliance to offer proactive advice and clarity. Our mission is to empower businesses with smarter financial oversight, enabling growth and informed decision-making in a complex world.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[450px] rounded-2xl overflow-hidden shadow-2xl"
          >
            {whoWeAreImage && (
                <Image
                  src={whoWeAreImage.imageUrl}
                  alt={whoWeAreImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={whoWeAreImage.imageHint}
                />
            )}
             <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
