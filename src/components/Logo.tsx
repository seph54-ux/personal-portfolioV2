import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-2 text-xl font-bold font-headline">
        {/* Light Mode Logo */}
        <div className="dark:hidden">
            <Image 
                src="/asset/images/personal-logo/logo-light.png" 
                alt="Philjoseph Orlina Logo" 
                width={180} 
                height={40} 
                priority
            />
        </div>
        {/* Dark Mode Logo */}
        <div className="hidden dark:block">
            <Image 
                src="/asset/images/personal-logo/logo-dark.png" 
                alt="Philjoseph Orlina Logo" 
                width={180} 
                height={40}
                priority
            />
        </div>
    </Link>
  );
}
