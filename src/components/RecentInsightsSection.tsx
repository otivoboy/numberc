"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from './ui/button';

const insights = [
    {
        category: "Financial Planning",
        title: "Maximizing Retirement Benefits in Kenya",
        description: "Learn how to structure your retirement savings for tax efficiency and long-term growth in Kenya.",
        href: "/blog/maximizing-retirement-benefits-kenya",
    },
    {
        category: "Business Advisory",
        title: "eTIMS Is Quietly Forcing Kenyan Businesses to Change How They Spend",
        description: "eTIMS is more than just digital receipts; it's reshaping how businesses spend money. Discover the informal shortcuts that are now tax risks and how to adapt.",
        href: "/blog/etims-changing-business-spending",
    },
    {
        category: "Tax Compliance",
        title: "Why Your KRA PIN Matters Every Time You Shop at a Supermarket",
        description: "Under new e-TIMS rules, ensuring your KRA PIN is on supermarket receipts is crucial for claiming business expenses. Learn why this small step is vital for tax compliance.",
        href: "/blog/kra-pin-supermarket-receipts",
    },
];

export const RecentInsightsSection = () => {
    return (
        <section className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Recent Financial Insights
                    </h2>
                    <p className="text-lg text-foreground/70 max-w-3xl">
                        Stay informed about regulatory changes and financial best practices.
                    </p>
                </motion.div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {insights.map((insight, index) => (
                        <motion.div
                            key={insight.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                        >
                            <p className="text-secondary text-sm font-semibold mb-3">{insight.category}</p>
                            <h3 className="text-xl font-semibold text-foreground mb-3 flex-grow">{insight.title}</h3>
                            <p className="text-foreground/70 mb-6">{insight.description}</p>
                            <Link href={insight.href} className="text-secondary font-semibold hover:text-secondary/80 transition-colors mt-auto">
                                Read More →
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <Link href="/blog" passHref>
                        <Button variant="outline" size="lg">
                            View All Insights →
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};