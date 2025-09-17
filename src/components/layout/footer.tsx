import Link from 'next/link';
import { Rocket } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-8 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Rocket className="h-6 w-6 text-primary hidden md:block" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built for speed and elegance.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2">
            <p className="text-sm text-muted-foreground">&copy; {currentYear} Velocity</p>
            <div className="flex gap-4">
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy</Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms</Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
