import Link from 'next/link';
import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-2 text-xl font-bold font-headline">
      <div className="bg-primary text-primary-foreground p-2 rounded-lg group-hover:scale-105 group-hover:shadow-lg transition-transform">
        <Sparkles className="h-5 w-5" />
      </div>
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-foreground/80 to-foreground">
        Philjoseph Orlina
      </span>
    </Link>
  );
}
