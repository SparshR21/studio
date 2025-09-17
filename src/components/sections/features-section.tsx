import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Feather,
  Gauge,
  MousePointerClick,
  Rocket,
  Waves,
  Zap,
} from 'lucide-react';
import { ScrollReveal } from '../scroll-reveal';

const features = [
  {
    icon: Waves,
    title: 'Scroll Reveal',
    description:
      'Engage users with content that gracefully animates into view as they scroll down the page.',
  },
  {
    icon: MousePointerClick,
    title: 'Card Hover Effects',
    description:
      'Interactive cards with subtle hover animations provide satisfying feedback to user actions.',
  },
  {
    icon: Zap,
    title: 'Asset Optimization',
    description:
      'All assets are automatically optimized for peak performance, ensuring lightning-fast load times.',
  },
  {
    icon: Feather,
    title: 'Smooth Transitions',
    description:
      'Seamless page and section transitions create a fluid user experience that feels natural and responsive.',
  },
  {
    icon: Gauge,
    title: 'Adaptive Rendering',
    description:
      'Intelligently adjusts rendering quality based on device and network, delivering the best experience to every user.',
  },
  {
    icon: Rocket,
    title: 'Built for Speed',
    description:
      'A minimalist approach and modern architecture ensures your app is fast, lean, and ready to scale.',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="container py-24 md:py-32">
      <ScrollReveal className="text-center mb-16 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Core Features for a Fluid Experience
        </h2>
        <p className="mt-4 text-muted-foreground">
          Everything you need to build a web application that feels
          instantaneous and looks stunning.
        </p>
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <ScrollReveal key={feature.title} delay={i * 100}>
            <Card className="flex flex-col h-full transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl dark:hover:shadow-primary/20">
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
