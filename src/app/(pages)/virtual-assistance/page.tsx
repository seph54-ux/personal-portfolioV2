import { PageHeader } from '@/components/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Bot, 
  Brush, 
  Briefcase, 
  Code, 
  Mail, 
  Globe, 
  Clock, 
  FileCog, 
  CheckCircle, 
  BarChart, 
  Zap, 
  Cpu, 
  Cloud,
  Rocket,
  ShieldCheck,
  Headphones,
  TrendingUp
} from 'lucide-react';
import { AnimatedStat } from '@/components/AnimatedStat';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Virtual Assistance Services',
  description: 'Scale your business with Philjoseph Orlina, a tech-savvy Virtual Assistant specializing in automation, web development, admin support, and AI integration.',
};

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
        title: "Admin & Executive Support",
        items: [
            "Precision email & calendar management",
            "Advanced file organization (Cloud/Local)",
            "Comprehensive data entry & reporting",
            "Strategic document preparation",
            "Project tracking & management",
            "CRM & Lead management",
        ]
    },
    {
        icon: Code,
        title: "Full-Stack Web Solutions",
        items: [
            "Next.js & React premium websites",
            "Conversion-optimized landing pages",
            "Intuitive UI/UX design & prototyping",
            "Firebase/Backend infrastructure",
            "Performance & SEO optimization",
            "Real-time data dashboards",
        ]
    },
    {
        icon: Bot,
        title: "Intelligent Automation",
        items: [
            "Custom workflow automation (n8n/Make)",
            "LLM integration (Gemini/ChatGPT/Claude)",
            "Automated lead nurturing sequences",
            "Custom API & webhook integrations",
            "Smart notification systems",
            "Automated content pipelines",
        ]
    },
     {
        icon: Brush,
        title: "Digital Branding & Design",
        items: [
            "Modern logo & brand identity",
            "Premium social media assets",
            "Professional deck & deck design",
            "High-end OBS stream overlays",
            "Marketing & sales collateral",
            "Dynamic motion graphics",
        ]
    },
]

const stats = [
    { value: "50+", label: "Industry Tools Mastered", icon: Rocket },
    { value: "100%", label: "Remote Operational Efficiency", icon: ShieldCheck },
    { value: "24/7", label: "Automated Systems Support", icon: Headphones },
    { value: "Top Tier", label: "Computer Engineering Excellence", icon: TrendingUp }
]

const techStack = [
    { icon: BarChart, category: "Operations", tools: "Monday, Notion, Slack, Trello, GHL" },
    { icon: Code, category: "Core Dev", tools: "React, Next.js, Firebase, Node.js" },
    { icon: Brush, category: "Creative", tools: "Figma, Canva, Inkscape, PS" },
    { icon: Cpu, category: "Cognitive AI", tools: "Genkit, Gemini, Claude, OpenAI" },
    { icon: Zap, category: "Efficiency", tools: "n8n, Zapier, Make, Python Scripts" },
    { icon: Cloud, category: "Infrastructure", tools: "Google Cloud, Vercel, Firebase" }
];

export default function VirtualAssistancePage() {
  return (
    <div className="space-y-0">
    {/* Hero Section - Full Height */}
    <section className="relative h-[calc(100vh-80px)] flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute inset-0 z-[-1] opacity-20 dark:opacity-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-[120px] animate-pulse delay-700"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-8 animate-fade-in">
                <Rocket className="w-3 h-3" />
                Virtual Assistance Redefined
            </div>
            
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60 leading-none mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Automate. Scale.<br/><span className="text-primary">Evolve.</span>
            </h1>
            
            <p className="mt-6 max-w-2xl mx-auto text-muted-foreground text-lg md:text-xl font-medium animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Precision-engineered virtual assistance for visionary entrepreneurs. I build the systems, you lead the growth.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                 <Button asChild size="lg" className="h-14 px-10 text-lg shadow-xl shadow-primary/20">
                    <Link href="/contact" className="flex items-center">Optimize My Workflow <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button variant="outline" size="lg" className="h-14 px-10 text-lg backdrop-blur-sm">
                    <Link href="#services">Explore Services</Link>
                </Button>
            </div>
            
            <div className="mt-16 flex flex-wrap justify-center gap-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" /> Global Reach
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" /> AI Integrated
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" /> Full-Stack Capable
                </div>
            </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
            <div className="w-1 h-12 rounded-full bg-gradient-to-b from-primary to-transparent"></div>
        </div>
    </section>

    {/* Problem Section */}
    <section className="py-24 bg-card/10 border-y border-border/50">
        <div className="container mx-auto px-4">
            <div className="text-center mb-20">
                <Badge variant="outline" className="mb-4">Operational Challenges</Badge>
                <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">The Bottlenecks of Scale</h2>
                <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">Is your business growth being held back by manual processes and digital clutter?</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {painPoints.map((point, index) => (
                    <Card key={index} className="glassmorphic border-none p-8 animate-fade-in shimmer-effect transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group" style={{ animationDelay: `${index * 150}ms`}}>
                        <div className="bg-primary/5 text-primary w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                            <point.icon className="w-7 h-7" />
                        </div>
                        <h3 className="font-headline text-xl font-bold mb-4">{point.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{point.description}</p>
                    </Card>
                ))}
            </div>
        </div>
    </section>

    {/* Services Section */}
    <section id="services" className="py-24 relative overflow-hidden">
         <div className="container mx-auto px-4">
            <div className="text-center mb-20">
                <Badge variant="outline" className="mb-4">Solutions & Expertise</Badge>
                <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Technical Virtual Assistance</h2>
                <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">Bridging the gap between administrative support and engineering excellence.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                    <Card key={service.title} className="glassmorphic flex flex-col p-8 animate-fade-in border-white/5 transition-all duration-500 hover:bg-card/80 group" style={{ animationDelay: `${index * 150}ms`}}>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="bg-gradient-to-br from-primary/20 to-primary/5 text-primary p-4 rounded-xl shadow-inner group-hover:shadow-primary/20 transition-all">
                               <service.icon className="w-6 h-6" />
                            </div>
                            <h3 className="font-headline text-lg font-bold leading-tight">{service.title}</h3>
                        </div>
                        <ul className="space-y-4 text-sm text-muted-foreground flex-grow">
                            {service.items.map(item => (
                                <li key={item} className="flex items-start gap-3 group/item">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary/40 group-hover/item:bg-primary transition-colors"></div>
                                    <span className="group-hover/item:text-foreground transition-colors">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </Card>
                ))}
            </div>
        </div>
    </section>
    
    {/* Stats Section */}
    <section className="py-24 bg-card/30 relative">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {stats.map((stat, index) => (
                    <div key={stat.label} className="flex flex-col items-center text-center animate-fade-in group" style={{ animationDelay: `${index * 150}ms` }}>
                        <div className="mb-6 p-4 rounded-full bg-background/50 border border-border group-hover:border-primary/50 group-hover:text-primary transition-all duration-500">
                            <stat.icon className="w-8 h-8" />
                        </div>
                        <AnimatedStat value={stat.value} className="text-5xl lg:text-6xl tracking-tighter" />
                        <p className="text-muted-foreground font-bold mt-3 text-sm uppercase tracking-widest">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>

    {/* Tech Stack Section */}
    <section className="py-24">
         <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto glassmorphic p-12 rounded-[2.5rem] border-white/5 shadow-2xl">
                <div className="text-center mb-16">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">The Modern VA Toolkit</h2>
                    <p className="mt-4 text-muted-foreground">Expertise in the industry-leading technologies that power modern business.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {techStack.map((tech, index) => (
                        <div key={tech.category} className="flex flex-col gap-4 animate-fade-in group" style={{ animationDelay: `${index * 100}ms` }}>
                            <div className="flex items-center gap-3">
                                <div className="bg-primary/10 text-primary w-10 h-10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                                <tech.icon className="w-5 h-5" />
                                </div>
                                <h4 className="font-bold tracking-tight">{tech.category}</h4>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed pl-1">{tech.tools}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>

    {/* Final CTA Section */}
    <section className="py-32 relative">
        <div className="container mx-auto px-4">
            <div className="relative glassmorphic rounded-[3rem] p-12 md:p-20 text-center overflow-hidden border-none">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2"></div>
                
                <div className="relative z-10">
                    <h2 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tighter mb-8 leading-tight">
                        Engineered for Your Success.
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg mb-12">
                        Stop managing and start leading. I provide the technical backbone and administrative precision required to elevate your operations.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button asChild size="lg" className="h-16 px-12 text-lg font-bold rounded-2xl">
                            <Link href="/contact">Book Strategic Consultation</Link>
                        </Button>
                    </div>
                    <p className="mt-8 text-sm font-semibold text-muted-foreground flex items-center justify-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-primary" /> Confidentiality Guaranteed • Professional Execution
                    </p>
                </div>
            </div>
        </div>
    </section>
    </div>
  );
}
