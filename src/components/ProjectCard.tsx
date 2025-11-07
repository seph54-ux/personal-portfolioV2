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
  style?: React.CSSProperties;
};

export function ProjectCard({ project, className, style }: ProjectCardProps) {
  const image = project.images[0] || project.variants?.[0]?.images[0];

  return (
    <Card 
        className={cn("overflow-hidden group glassmorphic transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col", className)}
        style={style}
    >
        {image && (
          <div className="overflow-hidden aspect-video relative">
            <Image
              src={image.imageUrl}
              alt={project.title}
              fill
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              data-ai-hint={image.imageHint}
            />
             <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/60 to-transparent w-full">
                <h3 className="font-headline text-lg font-bold text-white shadow-lg">{project.title}</h3>
            </div>
          </div>
        )}
      <CardContent className="flex-grow pt-6">
        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech?.map((techKey) => {
            const tech = techStack[techKey];
            return tech ? <Badge key={techKey} variant="secondary">{tech.name}</Badge> : null;
          })}
        </div>
      </CardContent>
      {(project.liveDemoUrl || project.githubUrl) && (
        <CardFooter className="flex justify-end items-center gap-2 mt-auto pt-4">
          {project.githubUrl && (
            <Button asChild variant="ghost" size="sm">
              <Link href={project.githubUrl} target="_blank">
                <Github className="mr-2 h-4 w-4" />
                Source
              </Link>
            </Button>
          )}
          {project.liveDemoUrl && (
            <Button asChild size="sm">
              <Link href={project.liveDemoUrl} target="_blank">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Link>
            </Button>
          )}
        </CardFooter>
      )}
    </Card>
  );
}
