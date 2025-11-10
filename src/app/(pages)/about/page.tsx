import Image from 'next/image';
import { PageHeader } from '@/components/PageHeader';
import { techStack } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

import { ArrowRight } from 'lucide-react';

export default function AboutPage() {
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
              src="/asset/images/profile-image.png"
              alt="A portrait of Philjoseph Orlina"
              fill
              className="object-cover"
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
            <h2 className="font-headline text-3xl font-bold mb-4">Who is Philjoseph Orlina?</h2>
            <div className="prose dark:prose-invert max-w-none text-foreground/90">
                <p>
                I'm a passionate engineering graduate who unexpectedly found a strong love for web development. My creativity and logical thinking merged perfectly in this field. But that’s not all — I’m deeply involved in the world of esports, especially in organizing competitive events and designing visuals around them. Outside of all that, I’m just a casual gamer who enjoys playing for fun, appreciating both the art and mechanics of games.
                </p>
                <p>
                I'm also proud to say I was formerly a part of our school's esports organization, where I led various projects and events. Currently, I’m building my very own esports group to continue promoting competitive and creative gaming in my community.
                </p>
                <p>
                Wanna read more about me? I've got some blogs about myself. Check it out.
                </p>
                 <Button asChild variant="link" className="p-0 h-auto">
                    <Link href="/blog">
                        Explore my blogs <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>
          </div>
          
          <div className="glassmorphic p-8 rounded-lg">
            <h2 className="font-headline text-3xl font-bold mb-4">💡 My Life Philosophy: “Build. Learn. Evolve.” ⚙️🌱</h2>
            <div className="prose dark:prose-invert max-w-none text-foreground/90">
                <p>
                I believe life is all about creating something meaningful from curiosity — whether it’s a working circuit, a line of code, or a new skill learned through trial and error. Every challenge I face is like a prototype — something I can test, refine, and improve until it works. For me, progress will always matter more than perfection.
                </p>
                <p>
                Fueled by creativity and logic, I see technology not just as a tool, but as a way to make life smarter, simpler, and more connected. I’m constantly learning, evolving, and building — because that’s how I grow.
                </p>
                <p className="font-bold italic">
                I don’t wait for things to work — I build until they do.
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
