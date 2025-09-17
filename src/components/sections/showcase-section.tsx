import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ScrollReveal } from '../scroll-reveal';

export function ShowcaseSection() {
  const showcaseImage = PlaceHolderImages.find(
    (p) => p.id === 'velocity-showcase'
  );

  return (
    <ScrollReveal>
      <section id="showcase" className="container py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Optimized for Every User
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              With automatic asset optimization and adaptive rendering, Velocity
              ensures a smooth experience on any device, anywhere. Our
              scroll-reveal animations draw users in, making content discovery a
              delight.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="#">
                Explore Gallery <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="order-1 md:order-2">
            {showcaseImage && (
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-105">
                <Image
                  src={showcaseImage.imageUrl}
                  alt={showcaseImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={showcaseImage.imageHint}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
