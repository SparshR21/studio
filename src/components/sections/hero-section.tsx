import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="py-24 md:py-32 lg:py-40">
      <div className="container text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter animate-in fade-in slide-in-from-bottom-12 duration-1000 ease-out">
          Experience the Web at the <br />{' '}
          <span className="text-primary">Speed of Thought</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground animate-in fade-in slide-in-from-bottom-16 duration-1000 ease-out delay-200">
          Velocity is a blazingly fast, beautifully animated web experience
          designed for modern performance standards.
        </p>
        <div className="mt-8 flex justify-center gap-4 animate-in fade-in slide-in-from-bottom-20 duration-1000 ease-out delay-400">
          <Button size="lg" asChild>
            <Link href="#">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#features">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
