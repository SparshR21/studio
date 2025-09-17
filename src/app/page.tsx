import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { FeaturesSection } from '@/components/sections/features-section';
import { ShowcaseSection } from '@/components/sections/showcase-section';
import { CtaSection } from '@/components/sections/cta-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <ShowcaseSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
