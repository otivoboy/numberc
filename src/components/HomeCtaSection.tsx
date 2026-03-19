
"use client";

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import Link from 'next/link';

export const HomeCtaSection = () => {
    return (
        <section className="py-24 bg-background">
            <div className="w-full px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-r from-secondary to-primary/80 rounded-2xl p-12 text-center text-primary-foreground"
                >
                    <h2 className="text-3xl font-bold mb-4">Ready to Strengthen Your Financial Management?</h2>
                    <p className="max-w-2xl mx-auto mb-8 text-primary-foreground/80">
                        Schedule a free 30-minute consultation with our experts to discuss your accounting, audit, or compliance needs.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link href="/contact" passHref>
                            <Button size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                                Book Free Consultation
                            </Button>
                        </Link>
                         <a href="tel:+254707810650">
                           <Button size="lg" variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                                Call: +254 707 810 650
                           </Button>
                         </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
