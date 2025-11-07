
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import { blogPosts, techStack } from "@/lib/data";
import { ProjectCard } from "@/components/ProjectCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { webUiProjects, posterProjects } from "@/lib/websites-data";


export default function Home() {
  const featuredProjects = [
    webUiProjects.find(p => p.id === 'web-ui-1'),
    posterProjects.find(p => p.id === 'poster-3'),
    posterProjects.find(p => p.id === 'poster-4'),
  ].filter(p => p !== undefined) as (typeof webUiProjects[number] | typeof posterProjects[number])[];

  const latestPost = blogPosts[0];

  return (
    <>
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-full z-[-1] overflow-hidden">
            <iframe
                src="https://skybox.blockadelabs.com/e/2687689c95fa2fdee1eb5c40dedb544a"
                width="100%"
                height="100vh"
                style={{
                  position: 'absolute',
                  top: '-88px', // Adjust to pull it up behind the header
                  left: 0,
                  width: '100%',
                  height: 'calc(100% + 88px)',
                  border: 0,
                  zIndex: -1,
                }}
                allow="fullscreen"
            ></iframe>
          </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Hero Section */}
          <section className="text-center min-h-screen flex flex-col justify-center items-center py-20 md:py-32 animate-fade-in">
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
              Transforming Ideas into Digital Reality
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-muted-foreground text-lg md:text-xl">
              A multidisciplinary designer and developer crafting beautiful, functional, and user-centric digital experiences. From brand identity to full-stack web applications.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact">Start a Project <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/posters">View My Work</Link>
              </Button>
            </div>
          </section>

          {/* Featured Projects Section */}
          <section className="py-16" id="projects">
            <div className="text-center mb-12 animate-fade-in" style={{animationDelay: '0.2s'}}>
                <h2 className="font-headline text-4xl font-bold tracking-tight">Featured Projects</h2>
                <p className="mt-2 text-muted-foreground">A glimpse into my problem-solving approach through design.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                project && <div key={project.id} className="relative group overflow-hidden rounded-lg shadow-lg">
                  <ProjectCard 
                    project={project} 
                    className="animate-fade-in w-full h-full"
                    style={{ animationDelay: `${200 + index * 100}ms` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
                <Button asChild variant="ghost">
                    <Link href="/posters">
                        Explore All Projects <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>
          </section>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 bg-background">
        {/* VA and Blog Section */}
        <section className="py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
              <h2 className="font-headline text-4xl font-bold tracking-tight mb-4">More Than Just Design</h2>
              <p className="text-muted-foreground mb-6 text-lg">
                  My skills extend into the realm of virtual assistance, including video editing and motion graphics, to provide comprehensive creative solutions. Explore my thoughts on design, tech, and freelancing on the blog.
              </p>
              <Card className="glassmorphic group overflow-hidden">
                  <Link href={`/blog/${latestPost.slug}`}>
                      <div className="grid grid-cols-1 md:grid-cols-3">
                          <div className="md:col-span-1 overflow-hidden">
                               <Image
                                  src={latestPost.image.imageUrl}
                                  alt={latestPost.title}
                                  width={400}
                                  height={400}
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                  data-ai-hint={latestPost.image.imageHint}
                              />
                          </div>
                          <div className="md:col-span-2 p-6">
                              <CardHeader className="p-0 mb-2">
                                  <Badge variant="secondary" className="mb-2 w-fit">Latest Post</Badge>
                                  <CardTitle className="font-headline text-xl">{latestPost.title}</CardTitle>
                              </CardHeader>
                              <CardContent className="p-0">
                                  <p className="text-muted-foreground text-sm line-clamp-3">{latestPost.excerpt}</p>
                                  <span className="text-primary text-sm font-semibold mt-4 inline-block">Read more &rarr;</span>
                              </CardContent>
                          </div>
                      </div>
                  </Link>
              </Card>
          </div>
           <div className="animate-fade-in" style={{animationDelay: '0.6s'}}>
               <Card className="glassmorphic text-center p-8">
                   <CardHeader>
                      <div className="mx-auto bg-primary/10 text-primary w-16 h-16 rounded-full flex items-center justify-center mb-4">
                          <Star className="w-8 h-8" />
                      </div>
                      <CardTitle className="font-headline text-3xl">My Recommended Gear</CardTitle>
                   </CardHeader>
                   <CardContent>
                      <p className="text-muted-foreground mb-6">
                          Looking for the best peripherals for your setup? Here's a list of what I use and recommend. Your support through these affiliate links is much appreciated!
                      </p>
                      <Button asChild>
                          <Link href="/affiliates">See My Gear</Link>
                      </Button>
                   </CardContent>
               </Card>
          </div>
        </section>

         {/* CTA Section */}
        <section className="py-20">
          <div className="text-center glassmorphic p-10 rounded-lg">
              <h2 className="font-headline text-4xl font-bold tracking-tight">Have a project in mind?</h2>
              <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">Let's turn your vision into a stunning reality. I'm currently available for freelance work.</p>
              <Button asChild size="lg" className="mt-8">
                  <Link href="/contact">Get in Touch</Link>
              </Button>
          </div>
        </section>
      </div>
    </>
  );
}
