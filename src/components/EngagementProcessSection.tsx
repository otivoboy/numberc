"use client";

import { motion } from 'framer-motion';

const processSteps = [
    {
        title: "Initial Consultation",
        description: "Understanding your financial needs, challenges, and organizational objectives through detailed discussion.",
    },
    {
        title: "Needs Assessment & Proposal",
        description: "Comprehensive evaluation of your current financial systems and tailored service proposal.",
    },
    {
        title: "Onboarding & System Setup",
        description: "Seamless transition with document collection, system configuration, and team introduction.",
    },
    {
        title: "Service Delivery & Support",
        description: "Ongoing service execution with regular updates, reviews, and continuous support.",
    },
];

export const EngagementProcessSection = () => {
    return (
        <section className="py-24 bg-primary/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Our Client Engagement Process
                    </h2>
                    <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                        A structured approach to delivering exceptional financial services.
                    </p>
                </motion.div>

                <div className="relative max-w-2xl mx-auto">
                    <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-border -translate-x-1/2" />
                    <div className="space-y-12">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="flex items-start gap-6"
                            >
                                <div className="bg-secondary text-secondary-foreground rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold flex-shrink-0 z-10 border-4 border-card">
                                    {index + 1}
                                </div>
                                <div className="flex-1 pt-1">
                                    <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                                    <p className="text-foreground/70">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
