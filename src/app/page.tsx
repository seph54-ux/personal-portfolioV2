

import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import { blogPosts, techStack } from "@/lib/data";
import { ProjectCard } from "@/components/ProjectCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { webUiProjects, posterProjects } from "@/lib/websites-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


export default function Home() {
  const featuredProjects = [
    webUiProjects.find(p => p.id === 'web-ui-1'),
    posterProjects.find(p => p.id === 'poster-3'),
    posterProjects.find(p => p.id === 'poster-4'),
  ].filter(p => p !== undefined) as (typeof webUiProjects[number] | typeof posterProjects[number])[];

  const latestPost = blogPosts[0];
  
  const faqs = [
    {
      question: "What exactly does a Tech Virtual Assistant do?",
      answer: "A Tech VA like me handles all the administrative, creative, and technical tasks you don't have time for. This includes everything from managing your inbox and automating workflows to building your website and designing graphics. The goal is to free up your time so you can focus on your core business."
    },
    {
      question: "How can automation save my business time and money?",
      answer: "By identifying repetitive, manual tasks in your daily operations and using smart tools like Zapier, n8n, or custom scripts to automate them. This reduces manual error, ensures tasks are done consistently, and frees up countless hours for you and your team, directly translating into cost savings and increased productivity."
    },
    {
      question: "What's the process for building a new website?",
      answer: "We start with a discovery call to understand your goals and brand. From there, I move to design and prototyping. Once you approve the design, I develop the site using modern technologies like Next.js for high performance. We'll have regular check-ins to ensure it's perfect before launching."
    },
    {
      question: "Can I see your design portfolio?",
      answer: "Absolutely! You can view my portfolio of web and graphic design work to see the quality and style I bring to my projects. You can explore my work using the navigation or start by checking out my poster designs."
    },
    {
      question: "What are your preferred communication channels?",
      answer: "I'm flexible and can adapt to your team's preferred tools. We can stay connected through Viber, WhatsApp, Telegram, Facebook Messenger, or good old-fashioned email. I am based in the Philippines and work flexibly to accommodate clients in different time zones."
    },
    {
      question: "I'm not tech-savvy. Can you still help me?",
      answer: "Definitely! My services are designed for busy entrepreneurs and business owners, regardless of their technical expertise. I explain everything in simple terms and manage all the technical details, so you can enjoy the benefits without the headache."
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative text-center min-h-screen flex flex-col justify-center items-center py-20 md:py-32 animate-fade-in">
        <div 
          className="absolute top-0 left-0 w-full h-full z-[-1] overflow-hidden pointer-events-none" 
          style={{marginTop: '-88px'}}
        >
          <iframe
              src="https://skybox.blockadelabs.com/e/2687689c95fa2fdee1eb5c40dedb544a"
              width="100%"
              height="100%"
              style={{
                border: 0,
              }}
              allow="fullscreen"
          ></iframe>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
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
        </div>
      </section>
      
      <div className="container mx-auto px-4 relative z-10 bg-background">
         {/* Featured Projects Section */}
        <section className="py-16" id="projects">
            <div className="text-center mb-12 animate-fade-in" style={{animationDelay: '0.2s'}}>
                <h2 className="font-headline text-4xl font-bold tracking-tight">Featured Projects</h2>
                <p className="mt-2 text-muted-foreground">A glimpse into my problem-solving approach through design.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                project && (
                  <ProjectCard 
                    key={project.id}
                    project={project} 
                    className="animate-fade-in w-full h-full"
                    style={{ animationDelay: `${200 + index * 100}ms` }}
                  />
                )
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

        {/* FAQ Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl font-bold tracking-tight">Frequently Asked Questions</h2>
            <p className="mt-2 text-muted-foreground">Quick answers to common questions about my services.</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.question === "Can I see your design portfolio?" ? 
                    (
                      <>
                        Absolutely! You can view my portfolio of web and graphic design work to see the quality and style I bring to my projects. You can explore my work using the navigation or start by checking out my poster designs.{' '}
                        <Button variant="link" asChild className="p-0 h-auto">
                           <Link href="/posters">Check out my posters.</Link>
                        </Button>
                      </>
                    )
                    : faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
