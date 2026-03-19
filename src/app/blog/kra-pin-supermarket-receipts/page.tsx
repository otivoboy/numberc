
"use client";
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, Tag, ArrowRight, Library, ShieldCheck, ShoppingCart, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const relatedArticles = [
    { title: "eTIMS: Changing How Businesses Spend", link: "/blog/etims-changing-business-spending", imageId: "blog-etims-spending" },
    { title: "NSSF Deductions Update for 2026", link: "/blog/nssf-deductions-february-2026", imageId: "blog-nssf-changes" },
    { title: "Maximizing Retirement Benefits in Kenya", link: "/blog/maximizing-retirement-benefits-kenya", imageId: "blog-retirement-benefits" }
];

const SidebarAd = ({ imageId, title, description, link, linkText }: any) => {
  const image = PlaceHolderImages.find(p => p.id === imageId);
  if (!image) return null;
  return (
    <Card className="overflow-hidden bg-card border-border-soft">
      <div className="relative h-40">
        <Image src={image.imageUrl} alt={title} fill className="object-cover" data-ai-hint={image.imageHint} />
      </div>
      <CardContent className="p-4">
        <h4 className="font-semibold text-foreground mb-2">{title}</h4>
        <p className="text-sm text-foreground/70 mb-4">{description}</p>
        <Link href={link} className="text-sm font-semibold text-secondary hover:text-secondary/80 flex items-center">
          {linkText} <ArrowRight className="inline w-4 h-4 ml-1" />
        </Link>
      </CardContent>
    </Card>
  );
};

const SidebarCta = ({ title, description, link, buttonText }: any) => (
  <div className="bg-primary/20 p-6 rounded-2xl text-center">
    <h4 className="font-bold text-foreground mb-2">{title}</h4>
    <p className="text-sm text-foreground/70 mb-6">{description}</p>
    <Link href={link} passHref>
      <Button size="sm" className="w-full">{buttonText}</Button>
    </Link>
  </div>
);

export default function KraPinBlogPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'blog-kra-pin');

    return (
        <div className="bg-background text-foreground">
            <Navbar />
            <main className="pt-24 sm:pt-32 pb-20">
                <div className="px-4 lg:px-8">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-16">
                        <article className="lg:col-span-8">
                            <div className="mb-8 text-center">
                                <div className="text-sm text-muted-foreground mb-4">
                                    <Link href="/" className="hover:text-secondary">Home</Link>
                                    <span className="mx-2">&gt;</span>
                                    <Link href="/blog" className="hover:text-secondary">Blog</Link>
                                </div>
                                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
                                    Why Your KRA PIN Matters Every Time You Shop at a Supermarket
                                </h1>
                                <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-muted-foreground text-sm">
                                    <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>March 6, 2026</span></div>
                                    <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Number Craft Consulting</span></div>
                                    <div className="flex items-center gap-2"><Tag className="w-4 h-4" /><span>Tax Compliance</span></div>
                                </div>
                            </div>

                            {heroImage && (
                                <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl mb-8">
                                    <Image src={heroImage.imageUrl} alt="KRA PIN on Supermarket Receipt" fill className="object-cover" data-ai-hint={heroImage.imageHint} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                </div>
                            )}

                            <div className="prose prose-sm sm:prose-base prose-invert max-w-none text-foreground/80 leading-relaxed">
                                <p>If you're a small trader, chances are you buy office or business supplies from supermarkets and pay in cash. Under the new e-TIMS requirements, it's now important to ensure your KRA PIN is captured by the supermarket every time you shop.</p>
                                
                                <div className="bg-primary/10 border-l-4 border-secondary p-6 rounded-r-lg my-8">
                                    <h3 className="text-xl font-semibold text-foreground !mt-0">Why does this matter?</h3>
                                    <p className="!m-0">Your supermarket receipts must include your KRA PIN for the expenses to be accepted when claiming business costs during tax filing. Without your PIN on the receipt, KRA may disallow those expenses, meaning you'll pay more tax on income that should have been reduced by legitimate business costs.</p>
                                </div>

                                <h2>The Good News</h2>
                                <p>Most supermarkets are already set up for this. Major retailers including Naivas, QuickMart, Carrefour, and others have integrated e-TIMS with their point-of-sale systems.</p>

                                <h2>What You Need to Do</h2>
                                <p>Simply request to be registered as a customer by providing your KRA PIN:</p>
                                <ul className="list-none space-y-4 my-6">
                                    <li className="flex gap-4 items-start"><HelpCircle className="w-6 h-6 text-secondary mt-1 shrink-0" /><div><strong>At the customer service desk:</strong> Visit before you shop and ask to have your PIN linked to your loyalty card or customer profile.</div></li>
                                    <li className="flex gap-4 items-start"><ShoppingCart className="w-6 h-6 text-secondary mt-1 shrink-0" /><div><strong>During checkout:</strong> Tell the cashier you need your PIN on the receipt before they process payment.</div></li>
                                </ul>
                                <p>Once registered, your PIN should reflect on all future receipts automatically.</p>

                                <h2>A Small Step That Saves Big Headaches</h2>
                                <p>This simple action takes just a few minutes but can save you from significant issues at filing time. When KRA reviews your business expenses, they'll be looking for:</p>
                                <ul className="list-disc list-inside space-y-2 text-foreground/70 my-6">
                                    <li>Valid e-TIMS invoices</li>
                                    <li>Your KRA PIN on supplier receipts</li>
                                    <li>Proper documentation for all claimed expenses</li>
                                </ul>
                                <p>Don't let supermarket supplies become a tax audit problem. Take five minutes this week to ensure your PIN is in their system.</p>

                                <div className="bg-card border border-secondary/50 rounded-2xl p-8 my-10 text-center">
                                    <ShieldCheck className="w-12 h-12 text-secondary mx-auto mb-4" />
                                    <h4 className="text-xl font-semibold text-foreground">Need an Expense Compliance Health Check?</h4>
                                    <p className="text-foreground/70 mt-2 mb-4">Our team can review your expense documentation and ensure you're ready for tax season.</p>
                                    <Link href="/contact"><Button variant="secondary">Contact Us for a Review <ArrowRight className="w-4 h-4 ml-2"/></Button></Link>
                                </div>
                            </div>
                            
                            <div className="my-12">
                                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2"><Library className="w-6 h-6" /> Related Articles</h3>
                                <div className="grid md:grid-cols-3 gap-6">
                                    {relatedArticles.map(article => {
                                        const image = PlaceHolderImages.find(p => p.id === article.imageId);
                                        if (!image) return null;
                                        return (
                                            <Link key={article.title} href={article.link} className="block group">
                                                <Card className="h-full overflow-hidden bg-card hover:border-secondary/50">
                                                    <div className="relative h-40"><Image src={image.imageUrl} alt={article.title} fill className="object-cover" data-ai-hint={image.imageHint}/></div>
                                                    <CardContent className="p-4">
                                                        <h4 className="font-semibold text-foreground group-hover:text-secondary">{article.title}</h4>
                                                        <p className="text-sm text-secondary font-semibold mt-2">Read More <ArrowRight className="inline w-4 h-4"/></p>
                                                    </CardContent>
                                                </Card>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        </article>
                        
                        <aside className="lg:col-span-4 space-y-8 mt-12 lg:mt-0 lg:sticky top-28 h-fit">
                           <SidebarAd 
                            imageId="sidebar-tax-compliance"
                            title="Tax Compliance Made Easy"
                            description="Stay updated with changing tax laws and avoid penalties with our expert guidance."
                            link="/compliance-tax"
                            linkText="Get Tax Support"
                          />
                          <SidebarCta 
                            title="Need an Expense Review?"
                            description="Ensure all your business expenses are correctly documented for KRA audits."
                            link="/contact"
                            buttonText="Request a Review"
                          />
                           <SidebarAd 
                            imageId="sidebar-bookkeeping-ad"
                            title="Bookkeeping for Small Business"
                            description="We handle your books so you can focus on running your business."
                            link="/services"
                            linkText="Our Accounting Services"
                          />
                        </aside>
                    </div>
                </div>
            </main>
            <div id="footer-observer" style={{ height: 1 }} />
            <Footer />
        </div>
    );
}
