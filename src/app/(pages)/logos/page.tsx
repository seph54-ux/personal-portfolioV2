import { PageHeader } from '@/components/PageHeader';
import { projects, techStack } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from 'next/image';

export default function LogosPage() {
  const logoProjects = projects.filter(p => p.category === 'Logos');

  return (
    <>
      <PageHeader
        title="Logo Design"
        subtitle="Crafting unique and memorable identities for brands. Each logo is designed to be versatile and timeless."
      />
      <div className="space-y-16 mt-12">
        {logoProjects.map((project, index) => (
          <div key={project.id} className="grid md:grid-cols-2 gap-8 items-center animate-fade-in" style={{ animationDelay: `${index * 150}ms`}}>
            <div className={index % 2 === 1 ? 'md:order-2' : ''}>
              <Carousel className="w-full max-w-xl mx-auto">
                <CarouselContent>
                  {project.variants?.map((variant, vIndex) => (
                    <CarouselItem key={vIndex}>
                      <div className="p-1">
                        <Card className="overflow-hidden glassmorphic">
                          <CardHeader className="p-4">
                            <CardTitle className="text-sm font-medium text-muted-foreground">{variant.name}</CardTitle>
                          </CardHeader>
                          <CardContent className="p-0 aspect-video flex items-center justify-center">
                            <Image
                              src={variant.images[0].imageUrl}
                              alt={`${project.title} - ${variant.name}`}
                              width={800}
                              height={600}
                              className="object-contain max-h-full max-w-full"
                              data-ai-hint={variant.images[0].imageHint}
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex" />
                <CarouselNext className="hidden sm:flex" />
              </Carousel>
            </div>
            <div className={index % 2 === 1 ? 'md:order-1' : ''}>
              <h2 className="font-headline text-3xl font-bold mb-4">{project.title}</h2>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              {project.tech && (
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <Badge key={t} variant="secondary">{techStack[t].name}</Badge>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
