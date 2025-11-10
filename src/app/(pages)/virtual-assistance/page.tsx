
'use client';
import { PageHeader } from '@/components/PageHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { VideoModal } from '@/components/VideoModal';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Bot, Brush, Briefcase, Code, Mail, Globe, Clock, FileCog, CheckCircle, BarChart, Settings, Cloud, Zap, Cpu, Calendar, Star } from 'lucide-react';

const painPoints = [
    {
        icon: Mail,
        title: "Email Overload",
        description: "Drowning in emails and losing track of important messages? I'll organize and manage your inbox efficiently."
    },
    {
        icon: Globe,
        title: "Outdated Web Presence",
        description: "Need a professional website but don't have the technical skills? I'll build you a modern, responsive site."
    },
    {
        icon: Clock,
        title: "Repetitive Tasks",
        description: "Wasting hours on manual data entry and routine tasks? Let me automate your workflows with AI tools."
    },
    {
        icon: FileCog,
        title: "Disorganized Data",
        description: "Struggling to keep files and documents organized? I'll create systems that make everything easy to find."
    }
];

const services = [
    {
        icon: Briefcase,
        title: "Admin & Virtual Assistance",
        items: [
            "Email & calendar management",
            "File organization (Drive, Dropbox)",
            "Data entry & reporting",
            "Customer support via chat/email",
            "Document preparation & templates",
            "Project tracking (Monday, Notion)",
        ]
    },
    {
        icon: Code,
        title: "Web Development",
        items: [
            "Responsive websites & landing pages",
            "UI/UX design & prototyping",
            "React Native web apps",
            "Firebase integration & hosting",
            "Website deployment (Vercel, GitHub)",
            "Real-time dashboards",
        ]
    },
    {
        icon: Bot,
        title: "AI & Automation",
        items: [
            "Workflow automation (n8n, Zapier, Make)",
            "AI integration (ChatGPT, Claude, Gemini)",
            "CRM automation setup",
            "Email automation workflows",
            "Data processing scripts",
            "Smart business solutions",
        ]
    },
     {
        icon: Brush,
        title: "Graphic Design",
        items: [
            "Logo & branding design",
            "Social media graphics",
            "Presentation templates",
            "OBS overlays & stream templates",
            "Marketing materials",
            "UI component design",
        ]
    },
]

const stats = [
    { value: "50+", label: "Tools & Technologies Mastered" },
    { value: "100%", label: "Remote Work Ready" },
    { value: "24/7", label: "Communication Available" },
    { value: "Fresh", label: "Computer Engineering Graduate 2025" }
]

const techStack = [
    { icon: BarChart, category: "Project Management", tools: "Monday, Notion, Slack" },
    { icon: Code, category: "Development", tools: "React, Firebase, Node.js" },
    { icon: Brush, category: "Design", tools: "Figma, Canva, Inkscape" },
    { icon: Cpu, category: "AI Tools", tools: "ChatGPT, Claude, Gemini" },
    { icon: Zap, category: "Automation", tools: "n8n, Zapier, Make.com" },
    { icon: Cloud, category: "Cloud Services", tools: "Google Workspace, Firebase" }
];


export default function VirtualAssistancePage() {
  return (
    <>
    {/* Hero Section */}
    <section className="text-center py-20 md:py-32 animate-fade-in">
        <div className="container mx-auto px-4">
            <h1 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
                Transform Your Business with a Tech-Savvy Virtual Assistant
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-muted-foreground text-lg md:text-xl">
                I automate your workflows, build your web presence, and handle your admin tasks—so you can focus on growing your business.
            </p>
            <div className="mt-8 flex justify-center">
                 <Button asChild size="lg">
                    <Link href="/contact">Get Started Today <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="text-sm">🌏 Remote Ready</Badge>
                <Badge variant="secondary" className="text-sm">⚡ Fast Turnaround</Badge>
                <Badge variant="secondary" className="text-sm">🤖 AI-Powered Solutions</Badge>
            </div>
        </div>
    </section>

    {/* Problem Section */}
    <section className="py-16 bg-card/20">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">Are You Struggling With...</h2>
                <p className="mt-2 text-muted-foreground text-lg">These common business challenges that drain your time and energy?</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {painPoints.map((point, index) => (
                    <Card key={index} className="glassmorphic text-center p-6 animate-fade-in" style={{ animationDelay: `${index * 100}ms`}}>
                        <div className="mx-auto bg-primary/10 text-primary w-12 h-12 rounded-full flex items-center justify-center mb-4">
                            <point.icon className="w-6 h-6" />
                        </div>
                        <h3 className="font-headline text-xl font-semibold mb-2">{point.title}</h3>
                        <p className="text-muted-foreground text-sm">{point.description}</p>
                    </Card>
                ))}
            </div>
        </div>
    </section>

    {/* Services Section */}
    <section className="py-16">
         <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">How I Can Help Your Business Thrive</h2>
                <p className="mt-2 text-muted-foreground text-lg">Comprehensive virtual assistance with a technical edge.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                    <Card key={service.title} className="glassmorphic flex flex-col p-6 animate-fade-in" style={{ animationDelay: `${index * 100}ms`}}>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-primary/10 text-primary p-3 rounded-full">
                               <service.icon className="w-6 h-6" />
                            </div>
                            <h3 className="font-headline text-xl font-semibold">{service.title}</h3>
                        </div>
                        <ul className="space-y-2 text-sm text-muted-foreground flex-grow">
                            {service.items.map(item => (
                                <li key={item} className="flex items-start">
                                    <CheckCircle className="w-4 h-4 mr-2 mt-1 text-primary shrink-0"/>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </Card>
                ))}
            </div>
        </div>
    </section>
    
    {/* Stats Section */}
    <section className="py-16 bg-card/20">
        <div className="container mx-auto px-4">
             <div className="text-center mb-12">
                <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">Why Choose Me?</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                {stats.map(stat => (
                    <div key={stat.label} className="p-4">
                        <h3 className="text-4xl md:text-5xl font-bold text-primary">{stat.value}</h3>
                        <p className="text-muted-foreground mt-2">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>

    {/* Tech Stack Section */}
    <section className="py-16">
         <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">Powered By Modern Technology</h2>
                <p className="mt-2 text-muted-foreground text-lg">I use industry-standard tools to deliver professional results.</p>
            </div>
            <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8">
                {techStack.map(tech => (
                    <div key={tech.category} className="flex items-center gap-4">
                        <div className="bg-primary/10 text-primary w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
                           <tech.icon className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-semibold">{tech.category}</h4>
                            <p className="text-sm text-muted-foreground">{tech.tools}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
    </>
  );
}
