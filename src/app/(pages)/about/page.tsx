import Image from 'next/image';
import { PageHeader } from '@/components/PageHeader';
import { techStack, getImage } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AboutPage() {
  const aboutImage = getImage('about-me');
  const designTools = Object.values(techStack).filter(t => t.category === 'Design Tool');
  const vaTools = Object.values(techStack).filter(t => t.category === 'VA Tool' || t.category === 'Tool');
  const frameworks = Object.values(techStack).filter(t => t.category === 'Framework' || t.category === 'Language');
  const technologies = Object.values(techStack).filter(t => t.category === 'Technology');

  const skills = [
    { title: 'Design & Prototyping', tools: designTools },
    { title: 'Development', tools: [...frameworks, ...technologies] },
    { title: 'Video & Motion', tools: vaTools },
  ]

  return (
    <>
      <PageHeader
        title="About Me"
        subtitle="Designer, Developer, and Creative Problem-Solver"
      />
      <div className="grid md:grid-cols-3 gap-12 mt-12 items-start">
        <div className="md:col-span-1 flex flex-col items-center gap-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-lg border-4 border-card">
            <Image
              src={aboutImage.imageUrl}
              alt="A portrait of Philjoseph Orlina"
              fill
              className="object-cover"
              data-ai-hint={aboutImage.imageHint}
              priority
            />
          </div>
          <p className="text-center text-muted-foreground">
            Crafting digital experiences that are not only beautiful but also intuitive and effective.
          </p>
          <Button asChild size="lg">
              <Link href="/contact">Let's work together</Link>
          </Button>
        </div>
        <div className="md:col-span-2 space-y-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="glassmorphic p-8 rounded-lg">
            <h2 className="font-headline text-3xl font-bold mb-4">My Philosophy</h2>
            <div className="prose dark:prose-invert max-w-none text-foreground/90">
                <p>
                I believe that great design is born from a deep understanding of people. It's not just about aesthetics; it's about creating a seamless bridge between a user's needs and a brand's goals. My approach is a blend of creative intuition and strategic thinking, ensuring every project I undertake is both visually compelling and purpose-driven.
                </p>
                <p>
                From a simple logo to a complex web application, I pour my passion for clean code, elegant design, and user-centric philosophy into every detail. I'm constantly learning and adapting to new technologies to bring cutting-edge solutions to the table.
                </p>
            </div>
          </div>

          <div className="glassmorphic p-8 rounded-lg">
            <h2 className="font-headline text-3xl font-bold mb-6">My Toolkit</h2>
            <div className="space-y-6">
                {skills.map(skillCategory => (
                    <div key={skillCategory.title}>
                        <h3 className="font-headline text-xl font-semibold mb-3">{skillCategory.title}</h3>
                         <div className="flex flex-wrap gap-2">
                            {skillCategory.tools.map(t => <Badge key={t.name} variant="secondary" className="text-sm">{t.name}</Badge>)}
                        </div>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
