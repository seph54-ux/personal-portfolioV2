import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import type { Project } from '@/lib/data';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

type ProjectCardProps = {
  project: Project;
  className?: string;
};

export function ProjectCard({ project, className }: ProjectCardProps) {
  const image = project.images[0] || project.variants?.[0]?.images[0];

  return (
    <Card className={cn("overflow-hidden group glassmorphic transition-all duration-300 hover:shadow-2xl hover:-translate-y-1", className)}>
        {image && (
          <div className="overflow-hidden aspect-video">
            <Image
              src={image.imageUrl}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              data-ai-hint={image.imageHint}
            />
          </div>
        )}
      <CardHeader>
        <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">{project.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
         <Badge variant="secondary">{project.category}</Badge>
      </CardFooter>
    </Card>
  );
}
