import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import type { Project } from '@/lib/data';
import { techStack } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

type ProjectCardProps = {
  project: Project;
  className?: string;
};

export function ProjectCard({ project, className }: ProjectCardProps) {
  const image = project.images[0] || project.variants?.[0]?.images[0];

  return (
    <Card className={cn("overflow-hidden group glassmorphic transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col", className)}>
        {image && (
          <div className="overflow-hidden aspect-video relative">
            <Image
              src={image.imageUrl}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter blur-lg"
              data-ai-hint={image.imageHint}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={image.imageUrl}
                alt={project.title}
                width={400}
                height={250}
                className="w-3/4 h-3/4 object-contain transition-transform duration-500 group-hover:scale-105 shadow-2xl"
                style={{
                  boxShadow: '0 0 20px 5px hsl(var(--primary))',
                }}
              />
            </div>
          </div>
        )}
      <CardHeader>
        <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech?.map((techKey) => {
            const tech = techStack[techKey];
            return tech ? <Badge key={techKey} variant="secondary">{tech.name}</Badge> : null;
          })}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end items-center gap-4 mt-auto pt-4">
        {project.liveDemoUrl && (
          <Button asChild variant="outline">
            <Link href={project.liveDemoUrl} target="_blank">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Link>
          </Button>
        )}
        {project.githubUrl && (
          <Button asChild>
            <Link href={project.githubUrl} target="_blank">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
