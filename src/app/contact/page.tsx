"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { Mail, Phone, Briefcase, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Logo } from '@/components/Logo';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { ContactFormSchema, type ContactFormInput } from '@/lib/schemas';
import Link from 'next/link';

const Section = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.6, ease: 'easeInOut' }}
    className={`py-12 ${className}`}
  >
    {children}
  </motion.section>
);

const infoItems = [
    { icon: MapPin, title: "Office Location", lines: ["Nairobi, Kenya", "Serving clients across Kenya and beyond"] },
    { icon: Mail, title: "Email Address", lines: ["info@numbercraftconsulting.com", "General inquiries and consultations"] },
    { icon: Phone, title: "Phone Number", lines: ["+254 707 810 650", "Mon-Fri, 8:00 AM - 5:00 PM EAT"] },
    { icon: Briefcase, title: "Careers", lines: ["careers@numbercraftconsulting.com", "Send your CV and cover letter"] }
];

const serviceHours = [
    { day: "Monday - Thursday", time: "8:00 AM - 5:00 PM" },
    { day: "Friday", time: "8:00 AM - 4:00 PM" },
    { day: "Saturday", time: "9:00 AM - 1:00 PM" },
    { day: "Sunday", time: "Closed", closed: true },
];

const serviceOptions = [
    { value: "accounting", label: "Accounting & Bookkeeping" },
    { value: "audit", label: "Audit & Assurance" },
    { value: "tax", label: "Tax & Compliance" },
    { value: "donor", label: "Donor & NGO Reporting" },
    { value: "startups", label: "Business Support for Startups" },
    { value: "talent", label: "Talent & Capacity Building" },
    { value: "general", label: "General Inquiry" },
];

export default function ContactPage() {
  const form = useForm<ContactFormInput>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  function onSubmit(data: ContactFormInput) {
    const { fullName, email, phone, company, service, message } = data;

    const serviceLabel = serviceOptions.find(option => option.value === service)?.label || service || 'General Inquiry';

    const emailBody = `Dear Number Craft Consulting Team,

CONTACT DETAILS:
Name: ${fullName}
Email: ${email}
Company: ${company || 'Not provided'}
Phone: ${phone || 'Not provided'}

SERVICE INQUIRY:
Service Needed: ${serviceLabel}

MESSAGE:
${message}

Regards,
${fullName}`;

    const gmailUrl = `https://mail.google.com/mail/u/0/?to=info@numbercraft.com&su=${encodeURIComponent(`Inquiry from ${fullName}`)}&body=${encodeURIComponent(emailBody)}&tf=cm`;
    window.open(gmailUrl, "_blank");

    form.reset();
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
       <header className="py-6 px-6 lg:px-8 border-b border-border">
          <div className="w-full">
              <a href="/" className="flex items-center gap-3 w-fit">
                <Logo className="w-14 h-14 text-foreground" />
                <span className="text-2xl font-bold text-foreground hidden sm:inline">
                  Number Craft Consulting
                </span>
              </a>
          </div>
      </header>
      
      <main className="pt-20">
        <div className="bg-gradient-to-br from-primary to-card py-20 text-center text-primary-foreground">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="px-6"
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
                <p className="text-lg text-primary-foreground/80">
                    Reach out to our team for professional accounting, audit, and compliance services tailored to SMEs and NGOs.
                </p>
            </motion.div>
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-8">
            <Section>
                <div className="grid lg:grid-cols-5 gap-12">
                    <div className="lg:col-span-3">
                        <Card className="bg-card shadow-2xl">
                            <CardHeader>
                                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                                <p className="text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours.</p>
                            </CardHeader>
                            <CardContent>
                                <Form {...form}>
                                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                        <div className="grid sm:grid-cols-2 gap-6">
                                            <FormField
                                              control={form.control}
                                              name="fullName"
                                              render={({ field }) => (
                                                <FormItem>
                                                  <FormLabel>Full Name *</FormLabel>
                                                  <FormControl>
                                                    <Input placeholder="Your full name" {...field} />
                                                  </FormControl>
                                                  <FormMessage />
                                                </FormItem>
                                              )}
                                            />
                                            <FormField
                                              control={form.control}
                                              name="company"
                                              render={({ field }) => (
                                                <FormItem>
                                                  <FormLabel>Company/Organization</FormLabel>
                                                  <FormControl>
                                                    <Input placeholder="Your company name" {...field} />
                                                  </FormControl>
                                                  <FormMessage />
                                                </FormItem>
                                              )}
                                            />
                                        </div>
                                        <div className="grid sm:grid-cols-2 gap-6">
                                             <FormField
                                              control={form.control}
                                              name="email"
                                              render={({ field }) => (
                                                <FormItem>
                                                  <FormLabel>Email Address *</FormLabel>
                                                  <FormControl>
                                                    <Input type="email" placeholder="your.email@example.com" {...field} />
                                                  </FormControl>
                                                  <FormMessage />
                                                </FormItem>
                                              )}
                                            />
                                            <FormField
                                              control={form.control}
                                              name="phone"
                                              render={({ field }) => (
                                                <FormItem>
                                                  <FormLabel>Phone Number</FormLabel>
                                                  <FormControl>
                                                    <Input type="tel" placeholder="+254 XXX XXX XXX" {...field} />
                                                  </FormControl>
                                                  <FormMessage />
                                                </FormItem>
                                              )}
                                            />
                                        </div>
                                        <FormField
                                          control={form.control}
                                          name="service"
                                          render={({ field }) => (
                                            <FormItem>
                                              <FormLabel>Service Interest</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                  <FormControl>
                                                    <SelectTrigger>
                                                      <SelectValue placeholder="Select a service" />
                                                    </SelectTrigger>
                                                  </FormControl>
                                                  <SelectContent>
                                                      {serviceOptions.map((option) => (
                                                        <SelectItem key={option.value} value={option.value}>
                                                          {option.label}
                                                        </SelectItem>
                                                      ))}
                                                  </SelectContent>
                                                </Select>
                                              <FormMessage />
                                            </FormItem>
                                          )}
                                        />
                                        <FormField
                                          control={form.control}
                                          name="message"
                                          render={({ field }) => (
                                            <FormItem>
                                              <FormLabel>Your Message *</FormLabel>
                                              <FormControl>
                                                <Textarea placeholder="Tell us about your accounting, audit, or compliance needs..." rows={5} {...field} />
                                              </FormControl>
                                              <FormMessage />
                                            </FormItem>
                                          )}
                                        />
                                        <div className="flex items-center justify-between flex-wrap gap-4">
                                            <Button type="submit" size="lg">
                                                Send Message
                                            </Button>
                                        </div>
                                    </form>
                                </Form>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="lg:col-span-2 space-y-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>Contact Information</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {infoItems.map((item, index) => (
                                    <div key={index} className="flex gap-4 items-start">
                                        <item.icon className="w-6 h-6 text-secondary mt-1 shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-foreground">{item.title}</h4>
                                            <p className="text-sm text-foreground/80">{item.lines[0]}</p>
                                            <p className="text-xs text-muted-foreground">{item.lines[1]}</p>
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                        
                        <Card>
                             <CardHeader>
                                <CardTitle>Our Location</CardTitle>
                            </CardHeader>
                            <CardContent>
                               <div className="aspect-video rounded-lg overflow-hidden">
                                     <iframe 
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.813676445823!2d36.821548774821845!3d-1.287841635637882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1123456789ab%3A0x1234567890abcdef!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1641234567890!5m2!1sen!2ske" 
                                        width="100%" 
                                        height="100%" 
                                        style={{ border: 0 }}
                                        allowFullScreen={false}
                                        loading="lazy" 
                                        referrerPolicy="no-referrer-when-downgrade">
                                    </iframe>
                               </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </Section>
            
            <Section className="pt-0">
                 <Card>
                    <CardHeader>
                        <CardTitle>Service Hours</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="space-y-3">
                            {serviceHours.map(item => (
                                <div key={item.day} className="flex justify-between text-lg">
                                    <span className="text-foreground/80">{item.day}</span>
                                    <span className={item.closed ? "font-semibold text-destructive" : "font-semibold text-foreground"}>{item.time}</span>
                                </div>
                            ))}
                            </div>
                            <div className="bg-primary/20 text-primary-foreground/80 p-6 rounded-lg text-center">
                                 <p className="font-bold text-xl">Urgent Matters</p>
                                 <p className="text-md mt-2">Available outside regular hours by appointment.</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </Section>

            <Section>
                <div className="bg-gradient-to-r from-secondary to-primary/80 rounded-2xl p-12 text-center text-primary-foreground">
                    <h2 className="text-3xl font-bold mb-4">Ready to Strengthen Your Financial Management?</h2>
                    <p className="max-w-2xl mx-auto mb-8 text-primary-foreground/80">
                        Schedule a free 30-minute consultation to discuss your accounting, audit, or compliance needs.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Button asChild size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                            <Link href="/contact">Request Consultation</Link>
                        </Button>
                    </div>
                </div>
            </Section>
        </div>
      </main>

      <div id="footer-observer" style={{ height: 1 }} />
      <Footer />
    </div>
  );
}
