import { Button } from '@/components/ui/button';
import { ScrollReveal } from '../scroll-reveal';

export function CtaSection() {
  return (
    <ScrollReveal>
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="bg-card rounded-2xl shadow-lg p-8 md:p-16 text-center border">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Ready to Build at Velocity?
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
              Start your next project with a foundation built for speed and
              elegance.
            </p>
            <Button size="lg" className="mt-8">
              Start Building Now
            </Button>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
