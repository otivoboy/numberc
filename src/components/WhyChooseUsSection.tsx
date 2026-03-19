"use client";

import { motion } from 'framer-motion';
import { Target, Zap, Handshake, BarChart, Shield, Lightbulb } from 'lucide-react';

const features = [
    {
        icon: Target,
        title: "Sector-Specific Expertise",
        description: "Deep understanding of both SME and NGO financial environments, compliance requirements, and reporting standards.",
    },
    {
        icon: Zap,
        title: "Technology-Driven Solutions",
        description: "Leveraging modern accounting software and cloud platforms for real-time financial insights and secure data management.",
    },
    {
        icon: Handshake,
        title: "Partnership Approach",
        description: "We work as an extension of your team, not just service providers, ensuring alignment with your organizational goals.",
    },
    {
        icon: BarChart,
        title: "Comprehensive Service Range",
        description: "From basic bookkeeping to complex audit engagements, we offer end-to-end financial management solutions.",
    },
    {
        icon: Shield,
        title: "Regulatory Compliance Focus",
        description: "Stay updated with evolving Kenyan tax laws, statutory requirements, and international financial reporting standards.",
    },
    {
        icon: Lightbulb,
        title: "Strategic Financial Insights",
        description: "Beyond compliance, we provide actionable insights to optimize costs, improve cash flow, and drive growth.",
    },
];

export const WhyChooseUsSection = () => {
    return (
        <section className="py-24 bg-primary/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Why Choose Number Craft Consulting
                    </h2>
                    <p className="text-lg text-foreground/70 max-w-3xl">
                        Our commitment to excellence, integrity, and client success sets us apart in the financial services industry.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-card p-8 rounded-2xl border-t-4 border-secondary shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                        >
                            <feature.icon className="w-10 h-10 text-secondary mb-6" />
                            <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                            <p className="text-foreground/70">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
