import { PageHeader } from '@/components/PageHeader';
import { projects, techStack } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export default function ObsOverlaysPage() {
  const overlayProjects = projects.filter(p => p.category === 'OBS Overlays');

  return (
    <>
      <PageHeader
        title="OBS Overlays"
        subtitle="Dynamic and static assets for streamers to create a professional and engaging broadcast."
      />
      <div className="space-y-16 mt-12">
        {overlayProjects.map((project, index) => (
          <div key={project.id} className="animate-fade-in" style={{ animationDelay: `${index * 150}ms`}}>
            <h2 className="font-headline text-3xl font-bold mb-2 text-center">{project.title}</h2>
            <p className="text-muted-foreground mb-8 text-center max-w-2xl mx-auto">{project.description}</p>
            
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-2">
                <Card className="glassmorphic">
                  <CardHeader>
                    <CardTitle className="text-lg">Overlay Assets</CardTitle>
                    <CardDescription>Individual components of the stream pack.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {project.images[0] && (
                       <Image
                        src={project.images[0].imageUrl}
                        alt={`${project.title} assets`}
                        width={800}
                        height={600}
                        className="rounded-lg object-cover"
                        data-ai-hint={project.images[0].imageHint}
                      />
                    )}
                  </CardContent>
                </Card>
              </div>
              
              <div className="md:col-span-3">
                 <Card className="glassmorphic overflow-hidden">
                    <CardHeader>
                       <CardTitle className="text-lg">Overlay in Action</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {project.inActionImage && (
                        <div className="aspect-video rounded-lg overflow-hidden">
                          <Image
                            src={project.inActionImage.imageUrl}
                            alt={`${project.title} in action`}
                            width={1200}
                            height={675}
                            className="w-full h-full object-cover"
                            data-ai-hint={project.inActionImage.imageHint}
                          />
                        </div>
                      )}
                    </CardContent>
                 </Card>
              </div>
            </div>
             {project.tech && (
                <div className="flex flex-wrap gap-2 mt-4 justify-center">
                  {project.tech.map(t => (
                    <Badge key={t} variant="secondary">{techStack[t].name}</Badge>
                  ))}
                </div>
              )}
          </div>
        ))}
      </div>
    </>
  );
}
