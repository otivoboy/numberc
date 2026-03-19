import { Navbar } from '@/components/Navbar';
import { HeroSlider } from '@/components/HeroSlider';
import dynamic from 'next/dynamic';

const ServicesSection = dynamic(() => import('@/components/ServicesSection').then(mod => mod.ServicesSection));
const StatsSection = dynamic(() => import('@/components/StatsSection').then(mod => mod.StatsSection));
const TrustedBySection = dynamic(() => import('@/components/TrustedBySection').then(mod => mod.TrustedBySection));
const WhyChooseUsSection = dynamic(() => import('@/components/WhyChooseUsSection').then(mod => mod.WhyChooseUsSection));
const TestimonialsSection = dynamic(() => import('@/components/TestimonialsSection').then(mod => mod.TestimonialsSection));
const RecentInsightsSection = dynamic(() => import('@/components/RecentInsightsSection').then(mod => mod.RecentInsightsSection));
const EngagementProcessSection = dynamic(() => import('@/components/EngagementProcessSection').then(mod => mod.EngagementProcessSection));
const HomeCtaSection = dynamic(() => import('@/components/HomeCtaSection').then(mod => mod.HomeCtaSection));
const Footer = dynamic(() => import('@/components/Footer').then(mod => mod.Footer));


export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSlider />
        <ServicesSection />
        <StatsSection />
        <TrustedBySection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <RecentInsightsSection />
        <EngagementProcessSection />
        <HomeCtaSection />
      </main>
      <div id="footer-observer" style={{ height: 1 }} />
      <Footer />
    </div>
  );
}
