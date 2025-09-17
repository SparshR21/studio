import Link from 'next/link';
import { Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Rocket className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">Velocity</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link
            href="#features"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Features
          </Link>
          <Link
            href="#showcase"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Showcase
          </Link>
        </nav>
        <div className="flex items-center gap-2 sm:gap-4">
          <Button variant="ghost" className="hidden sm:inline-flex">
            Sign In
          </Button>
          <Button>Get Started</Button>
        </div>
      </div>
    </header>
  );
}
