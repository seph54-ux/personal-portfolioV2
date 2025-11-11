
import Link from "next/link";
import { Github, Facebook, Instagram, Send, MessageCircle, Mail } from "lucide-react";
import { Logo } from "@/components/Logo";
import { navLinks, socialLinks } from "@/lib/data";
import { Button } from "@/components/ui/button";

const iconMap: { [key: string]: React.ElementType } = {
  Github,
  Facebook,
  Instagram,
  Send,
  MessageCircle,
  Mail,
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-background/50 border-t mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="text-muted-foreground text-sm">
              Problem-solving through design. Crafting unique digital experiences.
            </p>
          </div>
          
          <div>
            <h3 className="font-headline font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                !link.sublinks && (
                  <li key={link.name}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                )
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-headline font-semibold mb-4">Projects</h3>
            <ul className="space-y-2">
              {navLinks.find(l => l.name === 'Projects')?.sublinks?.map((sublink) => (
                  <li key={sublink.name}>
                    <Link href={sublink.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      {sublink.name}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="font-headline font-semibold mb-4">Connect</h3>
            <div className="flex space-x-2">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <Button key={social.name} variant="outline" size="icon" asChild>
                    <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                      <Icon className="h-4 w-4" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {year} Philjoseph Orlina. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="/terms-of-service" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

