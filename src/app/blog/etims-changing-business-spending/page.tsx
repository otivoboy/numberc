"use client";
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, Tag, ArrowRight, Library, TrendingUp, XCircle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';

const relatedArticles = [
    { title: "Why Your KRA PIN Matters at the Supermarket", link: "/blog/kra-pin-supermarket-receipts", imageId: "blog-kra-pin" },
    { title: "NSSF Deductions Update for 2026", link: "/blog/nssf-deductions-february-2026", imageId: "blog-nssf-changes" },
    { title: "Maximizing Retirement Benefits in Kenya", link: "/blog/maximizing-retirement-benefits-kenya", imageId: "blog-retirement-benefits" }
];

const spendingChanges = [
    { old: "Prepaid Airtime & Bundles", new: "Postpaid Business Lines", reason: "Monthly invoices provide proper documentation instead of scattered M-PESA SMSes." },
    { old: "Cash Uber/Bolt Payments", new: "Corporate Ride-Hailing Accounts", reason: "One consolidated monthly invoice for all trips with a proper KRA PIN." },
    { old: "Informal Boda Deliveries", new: "Registered Courier Companies", reason: "Your delivery provider must issue an eTIMS invoice—or register." },
    { old: "Cash Fuel Purchases", new: "Fuel Cards", reason: "One clean monthly statement instead of many small, hard-to-track receipts." },
    { old: "Token Electricity (KPLC)", new: "Postpaid Meter Accounts", reason: "Regular invoices with proper documentation." },
    { old: '"Cheaper" Informal Suppliers', new: "Registered Suppliers with KRA PINs", reason: "A small saving isn't worth a disallowed expense come tax time." },
    { old: "Casual Labour (Fundis, Cleaners)", new: "Contracts or Registered Service Providers", reason: "They must formally invoice you—encourage them to register." },
    { old: "Facebook / Instagram Shop Purchases", new: "eTIMS-Registered Sellers", reason: "Ask for the KRA PIN before ordering." },
    { old: "Internet Bundles", new: "Fibre Business Contracts", reason: "Contract invoices are eTIMS-compliant. Bundles often aren't." }
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

export default function EtimsSpendingBlogPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'blog-etims-spending');

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
                                    eTIMS Is Quietly Forcing Kenyan Businesses to Change How They Spend
                                </h1>
                                <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-muted-foreground text-sm">
                                    <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>February 25, 2026</span></div>
                                    <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Number Craft Consulting</span></div>
                                    <div className="flex items-center gap-2"><Tag className="w-4 h-4" /><span>Business Advisory</span></div>
                                </div>
                            </div>

                            {heroImage && (
                                <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl mb-8">
                                    <Image src={heroImage.imageUrl} alt="Business spending chart" fill className="object-cover" data-ai-hint={heroImage.imageHint} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                </div>
                            )}

                            <div className="prose prose-sm sm:prose-base prose-invert max-w-none text-foreground/80 leading-relaxed">
                                <p>eTIMS is not just about issuing digital receipts. It's forcing a fundamental shift in how and where businesses spend money. The old informal shortcuts that many businesses relied on are fast becoming tax risks.</p>

                                <h2>The New Reality</h2>
                                <p>If an expense can't be supported by a proper eTIMS invoice, KRA may disallow it. This simple rule is reshaping business spending patterns across Kenya. What worked last year could leave you with disallowed expenses and higher tax bills this year.</p>

                                <h2 className="text-center mt-12">Businesses Now Need to Restructure Their Spending</h2>

                                <div className="my-8 space-y-6">
                                    {spendingChanges.map((item, index) => (
                                        <Card key={index} className="bg-card border border-border-soft overflow-hidden">
                                            <CardContent className="p-0">
                                                <div className="grid grid-cols-1 md:grid-cols-2">
                                                    <div className="p-4 bg-destructive/10 border-b md:border-b-0 md:border-r border-destructive/20">
                                                        <div className="flex items-center gap-3">
                                                            <XCircle className="w-6 h-6 text-destructive shrink-0" />
                                                            <p className="font-semibold text-destructive">{item.old}</p>
                                                        </div>
                                                    </div>
                                                    <div className="p-4 bg-green-500/10">
                                                        <div className="flex items-center gap-3">
                                                            <CheckCircle className="w-6 h-6 text-green-400 shrink-0" />
                                                            <p className="font-semibold text-green-400">{item.new}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                 <div className="p-4 text-sm text-foreground/70">
                                                    <strong>Why:</strong> {item.reason}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                                
                                <h2>The Bottom Line</h2>
                                <p>eTIMS is pushing businesses into the formal economy—whether they like it or not. Compliance is no longer optional; it's now part of business survival and growth.</p>
                                <p>Businesses that adapt quickly will find that this shift brings unexpected benefits:</p>
                                <ul className="list-disc list-inside space-y-2 text-foreground/70 my-6">
                                    <li>Better tracking of actual business costs</li>
                                    <li>Cleaner financial records for decision making</li>
                                    <li>Reduced risk during KRA audits</li>
                                    <li>Professional documentation for tenders and contracts</li>
                                </ul>

                                <div className="bg-card border border-secondary/50 rounded-2xl p-8 my-10 text-center">
                                    <TrendingUp className="w-12 h-12 text-secondary mx-auto mb-4" />
                                    <h4 className="text-xl font-semibold text-foreground">Is Your Business Ready?</h4>
                                    <p className="text-foreground/70 mt-2 mb-4">Each informal expense represents a potential tax risk. We can help you review your expense patterns and build a compliant, efficient spending framework.</p>
                                    <Link href="/contact"><Button variant="secondary">Restructure Your Spending <ArrowRight className="w-4 h-4 ml-2"/></Button></Link>
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
                            imageId="sidebar-etims-ad"
                            title="eTIMS Compliance Health Check"
                            description="Is your business fully compliant? Our team can review your expense patterns and build an efficient spending framework."
                            link="/compliance-tax"
                            linkText="Get Compliant"
                          />
                          <SidebarCta 
                            title="Strategic Business Advisory"
                            description="Navigate regulatory changes and optimize your business strategy for sustainable growth."
                            link="/business-advisory"
                            buttonText="Schedule Consultation"
                          />
                           <SidebarAd 
                            imageId="sidebar-bookkeeping-ad"
                            title="Simplify Your Bookkeeping"
                            description="Accurate records are the foundation of compliance. Let us handle your bookkeeping so you can focus on your business."
                            link="/services"
                            linkText="Explore Services"
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

    