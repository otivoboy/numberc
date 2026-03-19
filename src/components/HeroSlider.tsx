
"use client";

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const heroSlide1 = PlaceHolderImages.find(p => p.id === 'hero-slide-1');
const heroSlide2 = PlaceHolderImages.find(p => p.id === 'hero-slide-2');
const heroSlide3 = PlaceHolderImages.find(p => p.id === 'hero-slide-3');

const slides = [
  {
    id: 1,
    headline: 'Precision Compliance Growth',
    subtext: 'Supporting SMEs and NGOs with reliable accounting, auditing, and bookkeeping services that strengthen financial integrity and support sustainable growth.',
    cta: 'Explore Our Services',
    image: heroSlide1,
  },
  {
    id: 2,
    headline: 'Structured Accurate Technology-Enabled',
    subtext: 'We leverage modern accounting systems, sound financial processes, and professional expertise to deliver timely, accurate, and compliant financial reporting.',
    cta: 'Learn More',
    image: heroSlide2,
  },
  {
    id: 3,
    headline: 'Practical Responsive Trusted',
    subtext: 'We adapt our services to meet the unique needs of each client, providing flexible and dependable financial support for growing organizations.',
    cta: 'Get Started Today',
    image: heroSlide3,
  },
];

export const HeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const handleSlideChange = useCallback((swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  }, []);

  return (
    <section
      className="relative min-h-screen overflow-hidden"
    >
      {/* Content Slider */}
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        speed={800}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        loop
        onSwiper={setSwiperInstance}
        onSlideChange={handleSlideChange}
        className="h-screen"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full flex items-center">
              {slide.image && (
                <Image
                  src={slide.image.imageUrl}
                  alt={slide.image.description}
                  fill
                  className="object-cover"
                  data-ai-hint={slide.image.imageHint}
                  priority={index === 0}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

              <div className="px-6 lg:px-12 w-full">
                <div className="max-w-2xl relative z-10">
                  <AnimatePresence mode="wait">
                    {activeIndex === index && (
                      <>
                        <motion.h1
                          key={`headline-${slide.id}`}
                          initial={{ opacity: 0, x: -40 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 40 }}
                          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                          className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
                        >
                          {slide.headline}
                        </motion.h1>

                        <motion.p
                          key={`subtext-${slide.id}`}
                          initial={{ opacity: 0, x: -40 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 40 }}
                          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                          className="text-lg text-foreground/70 mb-10 leading-relaxed"
                        >
                          {slide.subtext}
                        </motion.p>

                        <motion.div
                          key={`cta-${slide.id}`}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <motion.a
                            href="#services"
                            className="btn-hero inline-flex items-center gap-3 text-primary-foreground"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            {slide.cta}
                            <ArrowRight className="w-5 h-5" />
                          </motion.a>
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Dots */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => swiperInstance?.slideToLoop(index)}
            className={`slider-dot ${activeIndex === index ? 'slider-dot-active' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
};
