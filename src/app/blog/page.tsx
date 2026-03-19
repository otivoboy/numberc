
"use client";

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const posts = [
  {
    slug: 'maximizing-retirement-benefits-kenya',
    title: 'Maximizing Retirement Benefits in Kenya',
    description: 'Learn how to structure your retirement savings for tax efficiency and long-term growth in Kenya.',
    date: 'January 20, 2026',
    category: 'Financial Planning',
    imageId: 'blog-retirement-benefits'
  },
  {
    slug: 'nssf-deductions-february-2026',
    title: 'New NSSF Deductions Effective February 2026: What You Need to Know',
    description: 'Changes to NSSF contribution bands will result in higher deductions for employees earning above KSh 50,000 per month. Here is what you need to know.',
    date: 'January 23, 2026',
    category: 'Financial Compliance',
    imageId: 'blog-nssf-changes'
  },
  {
    slug: 'kra-pin-supermarket-receipts',
    title: 'Why Your KRA PIN Matters Every Time You Shop at a Supermarket',
    description: "Under new e-TIMS rules, ensuring your KRA PIN is on supermarket receipts is crucial for claiming business expenses. Learn why this small step is vital for tax compliance.",
    date: 'March 6, 2026',
    category: 'Tax Compliance',
    imageId: 'blog-kra-pin'
  },
  {
    slug: 'etims-changing-business-spending',
    title: 'eTIMS Is Quietly Forcing Kenyan Businesses to Change How They Spend',
    description: "eTIMS is more than just digital receipts; it's reshaping how businesses spend money. Discover the informal shortcuts that are now tax risks and how to adapt.",
    date: 'February 25, 2026',
    category: 'Business Advisory',
    imageId: 'blog-etims-spending'
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Number Craft Insights
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Expert analysis on financial compliance, accounting trends, and business growth strategies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => {
              const image = PlaceHolderImages.find(p => p.id === post.imageId);
              return (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link href={`/blog/${post.slug}`} className="block group">
                  <div className="bg-card rounded-2xl overflow-hidden h-full flex flex-col shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-border-soft hover:border-secondary/50">
                    {image && (
                      <div className="relative h-48">
                        <Image
                          src={image.imageUrl}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          data-ai-hint={image.imageHint}
                        />
                      </div>
                    )}
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                        <span>{post.date}</span>
                        <Badge variant="outline">{post.category}</Badge>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-secondary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-foreground/70 text-sm mb-4 flex-grow">
                        {post.description}
                      </p>
                      <span className="font-semibold text-secondary flex items-center">
                        Read More <ArrowRight className="inline w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )})}
          </div>
        </div>
      </main>
      <div id="footer-observer" style={{ height: 1 }} />
      <Footer />
    </div>
  );
}