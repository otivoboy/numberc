"use client";
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, Tag, Linkedin, Facebook, ArrowRight, Library } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Logo } from '@/components/Logo';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 1200 1227"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6904H306.615L611.412 515.685L658.88 583.579L1055.08 1150.31H892.476L569.165 687.854V687.828Z"
      fill="currentColor"
    />
  </svg>
);

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

const actionSteps = [
    { title: "Review Current Payroll Systems", description: "Ensure your payroll software is updated to accommodate the new NSSF contribution bands and calculations." },
    { title: "Communicate with Employees", description: "Provide clear information about how the changes will affect each employee's deductions and benefits." },
    { title: "Adjust Budget Projections", description: "Update financial forecasts to account for increased employer contributions for higher-earning staff." },
    { title: "Verify Compliance", description: "Double-check calculations and ensure timely submission to avoid penalties." }
];

const relatedArticles = [
    { title: "eTIMS Is Quietly Forcing Kenyan Businesses to Change How They Spend", link: "/blog/etims-changing-business-spending", imageId: "blog-etims-spending" },
    { title: "Why Your KRA PIN Matters Every Time You Shop at a Supermarket", link: "/blog/kra-pin-supermarket-receipts", imageId: "blog-kra-pin" },
    { title: "Maximizing Retirement Benefits in Kenya", link: "/blog/maximizing-retirement-benefits-kenya", imageId: "blog-retirement-benefits" }
];

export default function NSSFBlogPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'blog-nssf-changes');

  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <main className="pt-24 sm:pt-32 pb-20">
        <div className="px-4 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16">
            
            <article className="lg:col-span-8">
              <div className="mb-8">
                <div className="text-sm text-muted-foreground mb-4">
                  <Link href="/" className="hover:text-secondary">Home</Link>
                  <span className="mx-2">&gt;</span>
                  <Link href="/blog" className="hover:text-secondary">Blog</Link>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
                  New NSSF Deductions Effective February 2026: What You Need to Know
                </h1>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-muted-foreground text-sm">
                  <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>January 23, 2026</span></div>
                  <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>4 min read</span></div>
                  <div className="flex items-center gap-2"><Tag className="w-4 h-4" /><span>Financial Compliance</span></div>
                </div>
              </div>

              {heroImage && (
                <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl mb-8">
                  <Image src={heroImage.imageUrl} alt="NSSF Deductions Changes 2026" fill className="object-cover" data-ai-hint={heroImage.imageHint}/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
                  <p className="absolute bottom-4 left-4 text-sm text-primary-foreground/80 p-2 bg-black/30 rounded">
                    Understanding the new NSSF contribution structure effective February 2026
                  </p>
                </div>
              )}
              
              <div className="prose prose-sm sm:prose-base prose-invert max-w-none text-foreground/80 leading-relaxed">
                <div className="bg-primary/10 border-l-4 border-secondary p-6 rounded-r-lg my-8">
                    <p className="!m-0"><strong>Key Takeaway:</strong> From February 2026, changes to NSSF contribution bands will result in higher deductions for employees earning above KSh 50,000 per month, while lower-income earners will see minimal changes. These adjustments form part of the ongoing implementation of revised NSSF contribution structures aimed at increasing long-term retirement savings.</p>
                </div>

                <div className="bg-card border border-secondary/50 rounded-2xl p-6 my-10 text-center">
                    <h4 className="text-xl font-semibold text-foreground"> Payroll Compliance Services</h4>
                    <p className="text-foreground/70 mt-2 mb-4">Ensure accurate NSSF, NHIF, PAYE calculations and filings with our professional payroll management services.</p>
                    <Link href="/contact"><Button variant="secondary">Get Compliant Today <ArrowRight className="w-4 h-4 ml-2"/></Button></Link>
                </div>

                <h2>Who Is Affected by These Changes?</h2>
                <p>The revised NSSF contribution structure introduces tiered impact based on income levels:</p>

                <div className="grid md:grid-cols-2 gap-6 my-6">
                    <Card className="bg-card border-destructive/50">
                        <CardContent className="p-6">
                            <Badge variant="destructive" className="mb-2">High Impact</Badge>
                            <h4 className="text-lg font-semibold text-foreground">High-Income Earners</h4>
                            <p className="mt-2">Employees earning <strong>above KSh 50,000 per month</strong> will experience noticeable increases in NSSF deductions, with maximum contributions reaching KSh 6,480 monthly.</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-card border-green-500/50">
                        <CardContent className="p-6">
                             <Badge className="bg-green-500/20 text-green-300 border-green-500/50 mb-2 hover:bg-green-500/30">Minimal Impact</Badge>
                            <h4 className="text-lg font-semibold text-foreground">Lower-Income Earners</h4>
                            <p className="mt-2">Employees earning <strong>KSh 50,000 or below</strong> will generally remain within the lower contribution bands, with little or no significant increase in deductions.</p>
                        </CardContent>
                    </Card>
                </div>

                <h2>Typical Monthly NSSF Deductions</h2>
                <p>Below are approximate monthly deductions you may see reflected on your payslip from February 2026:</p>
                
                <div className="bg-card rounded-2xl overflow-hidden my-6">
                    <div className="grid grid-cols-3 bg-primary/20 p-4 font-bold text-foreground">
                        <div>Monthly Salary</div>
                        <div className="text-right">Employee Contribution</div>
                        <div className="text-right">Total Contribution*</div>
                    </div>
                    <div className="divide-y divide-border-soft">
                        {[
                          { salary: "~KSh 30,000", employee: "~KSh 1,800", total: "~KSh 3,600" },
                          { salary: "~KSh 50,000", employee: "~KSh 3,000", total: "~KSh 6,000" },
                          { salary: "~KSh 72,000", employee: "~KSh 4,320", total: "~KSh 8,640" },
                          { salary: "~KSh 100,000", employee: "~KSh 6,000", total: "~KSh 12,000" },
                        ].map(item => (
                          <div key={item.salary} className="grid grid-cols-3 p-4">
                            <div className="font-medium text-foreground">{item.salary}</div>
                            <div className="text-right">{item.employee}</div>
                            <div className="text-right">{item.total}</div>
                          </div>
                        ))}
                        <div className="grid grid-cols-3 p-4 bg-secondary/20 font-semibold">
                            <div className="font-bold text-foreground">~KSh 108,000+</div>
                            <div className="text-right">~KSh 6,480 (max)</div>
                            <div className="text-right">~KSh 12,960</div>
                        </div>
                    </div>
                </div>
                <p className="text-xs text-muted-foreground !mt-2">*Note: These figures represent the employee's contribution only. Employers are required to match the same amounts.</p>
                
                <h2>Implications for Employers and Employees</h2>
                <div className="grid md:grid-cols-2 gap-6 my-6">
                    <Card className="bg-card"><CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-secondary">For Employers</h3>
                        <ul className="list-disc pl-5 mt-4 space-y-2">
                            <li>Increased Payroll Costs</li>
                            <li>Stricter Compliance Requirements</li>
                            <li>Enhanced Communication Needs</li>
                            <li>Payroll Budget Adjustments</li>
                        </ul>
                    </CardContent></Card>
                     <Card className="bg-card"><CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-secondary">For Employees</h3>
                        <ul className="list-disc pl-5 mt-4 space-y-2">
                           <li>Higher Deductions, Lower Take-Home</li>
                           <li>Increased Long-Term Retirement Savings</li>
                           <li>Need for Personal Budget Adjustments</li>
                           <li>Better Understanding of Compensation</li>
                        </ul>
                    </CardContent></Card>
                </div>

                <h2>Action Steps for Preparation</h2>
                <div className="space-y-6 my-6">
                  {actionSteps.map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold text-lg">{index + 1}</div>
                      <div>
                        <h4 className="font-semibold text-foreground">{step.title}</h4>
                        <p className="!mt-1">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

                <div className="my-12 p-6 bg-card rounded-2xl flex flex-col sm:flex-row gap-6 items-center">
                    <Logo className="w-20 h-20 text-foreground" />
                    <div>
                        <h4 className="font-bold text-foreground">Number Craft Consulting Team</h4>
                        <p className="text-sm text-foreground/70 mt-1">Professional Accounting & Audit Consultancy specializing in compliance, payroll management, and financial advisory services for SMEs and NGOs.</p>
                    </div>
                    <div className="flex items-center gap-2 sm:ml-auto">
                        <Button variant="outline" size="icon" asChild><Link href="#"><XIcon className="w-4 h-4" /></Link></Button>
                        <Button variant="outline" size="icon" asChild><Link href="#"><Linkedin className="w-4 h-4" /></Link></Button>
                        <Button variant="outline" size="icon" asChild><Link href="#"><Facebook className="w-4 h-4" /></Link></Button>
                    </div>
                </div>

                <div>
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

                 <div className="my-12 p-8 bg-gradient-to-r from-secondary to-primary/80 rounded-2xl text-center text-primary-foreground">
                    <h3 className="text-2xl font-bold">Stay Updated on Financial Compliance</h3>
                    <p className="mt-2 mb-6 max-w-lg mx-auto text-primary-foreground/80">Subscribe for the latest updates on tax changes, compliance requirements, and financial management tips.</p>
                    <form className="flex gap-2 max-w-sm mx-auto">
                        <Input type="email" placeholder="Enter your email" className="bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/60 border-primary-foreground/20"/>
                        <Button type="submit" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">Subscribe</Button>
                    </form>
                 </div>
            </article>

            <aside className="lg:col-span-4 space-y-8 mt-12 lg:mt-0 lg:sticky top-28 h-fit">
               <SidebarAd 
                imageId="sidebar-payroll-management"
                title="Simplify Your Payroll Management"
                description="Streamline NSSF, PAYE, and NHIF deductions with our professional payroll services."
                link="/services"
                linkText="Learn More"
              />
              <SidebarCta 
                title="Need Compliance Support?"
                description="Our team ensures your organization meets all statutory requirements accurately and on time."
                link="/contact"
                buttonText="Schedule Consultation"
              />
               <SidebarAd 
                imageId="sidebar-tax-compliance"
                title="Tax Compliance Made Easy"
                description="Stay updated with changing tax laws and avoid penalties with our expert guidance."
                link="/services#tax"
                linkText="Get Tax Support"
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