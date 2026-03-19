
"use client";
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, Tag, ArrowRight, Library, HelpCircle, AlertTriangle, TrendingUp, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';

const relatedArticles = [
    { title: "eTIMS Is Quietly Forcing Kenyan Businesses to Change How They Spend", link: "/blog/etims-changing-business-spending", imageId: "blog-etims-spending" },
    { title: "NSSF Deductions Update for 2026", link: "/blog/nssf-deductions-february-2026", imageId: "blog-nssf-changes" },
    { title: "Why Your KRA PIN Matters Every Time You Shop at a Supermarket", link: "/blog/kra-pin-supermarket-receipts", imageId: "blog-kra-pin" }
];

const retirementVehicles = [
    { name: "NSSF", purpose: "Basic coverage", benefit: "Immediate PAYE reduction" },
    { name: "Pension Scheme", purpose: "Core retirement savings", benefit: "Tax-deductible contributions (up to KES 240,000)" },
    { name: "Property", purpose: "Inflation hedge & passive income", benefit: "Capital appreciation, rental income" },
    { name: "SACCO/Unit Trusts", purpose: "Liquidity & diversification", benefit: "Dividend/interest income" }
];

const mistakesToAvoid = [
    "Starting too late",
    "Ignoring inflation",
    "Putting all eggs in one basket",
    "Cashing out early",
    "Not reviewing beneficiaries",
    "Forgetting medical cover"
];

const faqs = [
    { q: "Can I access my pension before 50?", a: "Only in cases of permanent departure from Kenya, serious illness, or other RBA-approved hardships. Early withdrawals attract penalties." },
    { q: "What happens to my pension if I change jobs?", a: "You can transfer your benefits to a new employer's scheme, an individual pension plan, or leave them in the existing scheme (subject to rules)." },
    { q: "Are pension benefits taxed at retirement?", a: "25% of the accumulated benefits can be taken tax-free as a lump sum. The remaining 75% must be used to purchase a pension (annuity) or in programmed withdrawals, which are taxed as pension income." },
    { q: "Can I have multiple pension plans?", a: "Yes, but the total tax-deductible contributions across all registered schemes cannot exceed KES 240,000 annually." },
    { q: "What if I'm self-employed?", a: "You can contribute to an Individual Retirement Benefits Scheme and claim the tax deduction on your personal income tax return." }
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

export default function RetirementBenefitsBlogPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'blog-retirement-benefits');

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
                                    Maximizing Retirement Benefits in Kenya
                                </h1>
                                <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-muted-foreground text-sm">
                                    <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>January 20, 2026</span></div>
                                    <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>5 min read</span></div>
                                    <div className="flex items-center gap-2"><Tag className="w-4 h-4" /><span>Financial Planning</span></div>
                                </div>
                            </div>

                            {heroImage && (
                                <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl mb-8">
                                    <Image src={heroImage.imageUrl} alt="Retirement planning concept" fill className="object-cover" data-ai-hint={heroImage.imageHint} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                </div>
                            )}

                            <div className="prose prose-sm sm:prose-base prose-invert max-w-none text-foreground/80 leading-relaxed">
                                <p>Retirement planning is often overlooked by business owners and professionals caught up in daily operations. Yet how you structure your retirement savings today determines your quality of life tomorrow. In Kenya, there are several ways to maximize retirement benefits while also enjoying tax advantages right now.</p>
                                
                                <h2>Why Retirement Planning Matters for Business Owners</h2>
                                <p>Unlike salaried employees who have mandatory NSSF deductions and often employer-sponsored pension schemes, business owners must be intentional about retirement savings. The good news? You have more flexibility and can access better tax-efficient vehicles.</p>
                            </div>
                            
                            <h2 className="text-3xl font-bold text-foreground mt-12 mb-8">Key Retirement Savings Options in Kenya</h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                <Card className="bg-card border-border-soft flex flex-col">
                                    <CardHeader>
                                        <CardTitle className="text-xl text-secondary">1. NSSF</CardTitle>
                                        <p className="text-sm text-muted-foreground">National Social Security Fund</p>
                                    </CardHeader>
                                    <CardContent className="space-y-4 flex-grow">
                                        <p className="text-sm">The renewed NSSF Act 2026 has increased contributions significantly.</p>
                                        <ul className="list-disc list-inside text-sm space-y-1 text-foreground/80">
                                            <li>Tier I: Up to KES 6,000 (shared)</li>
                                            <li>Tier II: Up to KES 18,000 (shared)</li>
                                            <li>Total potential: Up to KES 288,000/year</li>
                                        </ul>
                                        <Badge variant="outline">Tax-deductible contributions</Badge>
                                    </CardContent>
                                </Card>

                                <Card className="bg-card border-border-soft flex flex-col">
                                    <CardHeader>
                                        <CardTitle className="text-xl text-secondary">2. Registered Pension Schemes</CardTitle>
                                        <p className="text-sm text-muted-foreground">Formal RBA-approved vehicles</p>
                                    </CardHeader>
                                    <CardContent className="space-y-4 flex-grow">
                                        <div>
                                            <h4 className="font-semibold text-foreground/90">For Employers:</h4>
                                            <p className="text-sm text-foreground/80">Contributions are tax-deductible expenses. Investment income grows tax-free.</p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground/90">For Individuals:</h4>
                                            <p className="text-sm text-foreground/80">Up to KES 240,000/year is tax-deductible.</p>
                                        </div>
                                        <Badge variant="outline">Max tax-advantaged savings: KES 480,000/year</Badge>
                                    </CardContent>
                                </Card>

                                <Card className="bg-card border-border-soft flex flex-col">
                                    <CardHeader>
                                        <CardTitle className="text-xl text-secondary">3. Individual Schemes</CardTitle>
                                        <p className="text-sm text-muted-foreground">Personal pension plans</p>
                                    </CardHeader>
                                    <CardContent className="space-y-4 flex-grow">
                                        <p className="text-sm">Open to anyone with regular income, offering flexible contributions and investment strategies.</p>
                                        <ul className="list-disc list-inside text-sm space-y-1 text-foreground/80">
                                            <li>Tax-deductible contributions</li>
                                            <li>Tax-free investment growth</li>
                                            <li>25% tax-free lump sum at retirement</li>
                                        </ul>
                                    </CardContent>
                                </Card>
                                
                                <Card className="bg-card border-border-soft flex flex-col">
                                    <CardHeader>
                                        <CardTitle className="text-xl text-secondary">4. Property Investment</CardTitle>
                                        <p className="text-sm text-muted-foreground">Inflation hedge & passive income</p>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <p className="text-sm text-foreground/80">Strategies include buy-and-hold, rentals, or REITs. Rental income and capital gains are taxable.</p>
                                    </CardContent>
                                </Card>

                                <Card className="bg-card border-border-soft flex flex-col">
                                    <CardHeader>
                                        <CardTitle className="text-xl text-secondary">5. Unit Trusts & MMFs</CardTitle>
                                        <p className="text-sm text-muted-foreground">Liquidity & diversification</p>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <p className="text-sm text-foreground/80">Provides liquidity and growth. Interest and dividend income are subject to withholding tax.</p>
                                    </CardContent>
                                </Card>

                                <Card className="bg-card border-border-soft flex flex-col">
                                    <CardHeader>
                                        <CardTitle className="text-xl text-secondary">6. SACCOs</CardTitle>
                                        <p className="text-sm text-muted-foreground">High returns & loan access</p>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <p className="text-sm text-foreground/80">Popular for high dividend returns. Dividends are subject to withholding tax.</p>
                                    </CardContent>
                                </Card>
                            </div>


                            <div className="prose prose-sm sm:prose-base prose-invert max-w-none text-foreground/80 leading-relaxed mt-12">
                                <h2>Strategic Approach: Combining Vehicles for Maximum Benefit</h2>
                                <p>The optimal mix combines different vehicles for different purposes.</p>
                                <div className="bg-card rounded-2xl overflow-hidden my-6">
                                    <div className="grid grid-cols-3 bg-primary/20 p-4 font-bold text-foreground">
                                        <div>Vehicle</div><div>Purpose</div><div>Tax Benefit</div>
                                    </div>
                                    <div className="divide-y divide-border-soft">
                                        {retirementVehicles.map(item => (
                                          <div key={item.name} className="grid grid-cols-3 p-4 text-sm">
                                            <div className="font-medium text-foreground">{item.name}</div>
                                            <div>{item.purpose}</div>
                                            <div>{item.benefit}</div>
                                          </div>
                                        ))}
                                    </div>
                                </div>
                                
                                <h2>The Power of Tax Deductions: A Practical Example</h2>
                                <p>Comparing saving KES 20,000/month in a bank account vs. a registered pension scheme shows the power of tax-deductible, tax-free growth. The pension option saves approximately KES 60,000 in PAYE annually, which amounts to over KES 1.2M in tax savings over 20 years, not including the tax-free growth.</p>
                                
                                <h2 className="mt-12">Key Retirement Planning Mistakes to Avoid</h2>
                                <div className="grid sm:grid-cols-2 gap-4 my-6">
                                    {mistakesToAvoid.map(mistake => (
                                        <div key={mistake} className="flex items-start gap-3 p-4 bg-destructive/10 rounded-lg">
                                            <AlertTriangle className="w-6 h-6 text-destructive mt-1 shrink-0" />
                                            <span className="text-foreground/80">{mistake}</span>
                                        </div>
                                    ))}
                                </div>

                                <h2 className="mt-12">Recent Regulatory Changes Affecting Retirement Benefits</h2>
                                <p>The Finance Act 2026 keeps pension contribution tax limits at KES 240,000 annually and introduces a housing levy. The RBA maintains a minimum pension age of 50, with limited exceptions for early withdrawal.</p>

                                <h2 className="mt-12">Action Plan: Start Maximizing Today</h2>
                                <div className="grid md:grid-cols-3 gap-6 my-6">
                                    <Card className="bg-card"><CardContent className="p-6">
                                        <h3 className="text-xl font-semibold text-secondary">This Week</h3>
                                        <ul className="list-disc pl-5 mt-4 space-y-2">
                                            <li>Review current retirement savings</li>
                                            <li>Check tax deduction utilization</li>
                                            <li>Update beneficiary nominations</li>
                                        </ul>
                                    </CardContent></Card>
                                    <Card className="bg-card"><CardContent className="p-6">
                                        <h3 className="text-xl font-semibold text-secondary">This Month</h3>
                                        <ul className="list-disc pl-5 mt-4 space-y-2">
                                            <li>Meet with a financial advisor</li>
                                            <li>Consider setting up a pension scheme</li>
                                            <li>Review investment allocations</li>
                                        </ul>
                                    </CardContent></Card>
                                     <Card className="bg-card"><CardContent className="p-6">
                                        <h3 className="text-xl font-semibold text-secondary">This Year</h3>
                                        <ul className="list-disc pl-5 mt-4 space-y-2">
                                            <li>Maximize contributions</li>
                                            <li>Review property investments</li>
                                            <li>Update will and succession documents</li>
                                        </ul>
                                    </CardContent></Card>
                                </div>
                                
                                <h2 className="mt-12">Frequently Asked Questions</h2>
                                <Accordion type="single" collapsible className="w-full space-y-4">
                                    {faqs.map((faq, index) => (
                                      <AccordionItem key={index} value={`item-${index}`} className="bg-card border-border-soft rounded-xl px-6">
                                        <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline text-foreground">
                                          {faq.q}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-foreground/80 pt-2">
                                          {faq.a}
                                        </AccordionContent>
                                      </AccordionItem>
                                    ))}
                                </Accordion>

                                <div className="bg-card border border-secondary/50 rounded-2xl p-8 my-10 text-center">
                                    <TrendingUp className="w-12 h-12 text-secondary mx-auto mb-4" />
                                    <h4 className="text-xl font-semibold text-foreground">Need Personalized Retirement Planning Advice?</h4>
                                    <p className="text-foreground/70 mt-2 mb-4">Our team can help you structure your retirement savings for maximum tax efficiency and long-term growth.</p>
                                    <div className="flex flex-wrap gap-4 justify-center">
                                        <a href="tel:0707810650"><Button variant="secondary"><Phone className="w-4 h-4 mr-2"/> 0707 810 650</Button></a>
                                        <a href="mailto:retirement@numbercraft.co.ke"><Button variant="outline"><Mail className="w-4 h-4 mr-2"/> retirement@numbercraft.co.ke</Button></a>
                                    </div>
                                </div>

                                <p className="text-xs text-muted-foreground italic">Disclaimer: This article provides general information and does not constitute financial advice. Tax laws and retirement benefit regulations may change. Always consult with qualified professionals before making financial decisions.</p>

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
                            imageId="sidebar-retirement-ad"
                            title="Personalized Financial Planning"
                            description="Create a roadmap for your financial future with our expert advisors."
                            link="/business-advisory"
                            linkText="Learn More"
                          />
                          <SidebarCta 
                            title="Secure Your Retirement"
                            description="Talk to our specialists about structuring your retirement savings for maximum growth and tax efficiency."
                            link="/contact"
                            buttonText="Book a Consultation"
                          />
                           <SidebarAd 
                            imageId="sidebar-pension-ad"
                            title="Pension Scheme Setup for Businesses"
                            description="We help business owners set up and manage compliant pension schemes for their teams."
                            link="/services"
                            linkText="Explore Business Services"
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
