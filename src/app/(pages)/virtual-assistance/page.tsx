
'use client';
import { PageHeader } from '@/components/PageHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { VideoModal } from '@/components/VideoModal';
import Image from 'next/image';
import { useState } from 'react';
import { CheckCircle, Clapperboard, Edit, ListTodo } from 'lucide-react';

import thumbnail1 from '@/app/asset/videos/VideoThumbnail1.webp';
import thumbnail2 from '@/app/asset/videos/VideoThumbnail2.webp';
import thumbnail3 from '@/app/asset/videos/VideoThumbnail3.webp';

const vaServices = [
    {
        icon: Clapperboard,
        title: "Video Editing & Motion Graphics",
        description: "From raw footage to polished, engaging content. I handle video editing, color grading, audio mixing, and adding motion graphics or special effects to make your videos stand out.",
        skills: ["DaVinci Resolve", "KineMaster", "Visual Storytelling", "Color Correction"]
    },
    {
        icon: Edit,
        title: "Content Creation & Management",
        description: "Need help creating and managing content for your social media or blog? I can assist with writing, editing, and scheduling posts to keep your audience engaged.",
        skills: ["Social Media Strategy", "Content Scheduling", "Copywriting", "Canva"]
    },
    {
        icon: ListTodo,
        title: "Administrative & Technical Support",
        description: "Handling the day-to-day tasks so you can focus on what matters most. Services include email management, data entry, scheduling, and basic technical support.",
        skills: ["Data Entry", "Email Management", "Scheduling", "Customer Support"]
    }
];

const videoProjects = [
  {
    id: 'video-1',
    title: 'ML Logo Unveil',
    description: 'An exciting logo reveal for a Mobile Legends tournament.',
    thumbnail: thumbnail1,
    videoSrc: '/videos/ML Logo unveil.mp4',
  },
  {
    id: 'video-2',
    title: 'Post-Match Results & MVP',
    description: 'A dynamic post-match sequence showcasing the results and the Most Valuable Player.',
    thumbnail: thumbnail2,
    videoSrc: '/videos/PostMatch Results Final MVP.mp4',
  },
  {
    id: 'video-3',
    title: 'Teaser Edays 2k23',
    description: 'A teaser video for the Edays 2023 event.',
    thumbnail: thumbnail3,
    videoSrc: '/videos/Teaser Edays2k23.mp4',
  },
];


export default function VirtualAssistancePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<{src: string, title: string} | null>(null);

  const openModal = (src: string, title: string) => {
    setSelectedVideo({ src, title });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  return (
    <>
      <PageHeader
        title="Virtual Assistance Services"
        subtitle="Efficient, reliable, and creative support to help you streamline your projects and achieve your goals."
      />
      
      <section className="mt-12">
        <h2 className="font-headline text-3xl font-bold text-center mb-10">What I Can Do For You</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vaServices.map((service, index) => (
                <Card key={service.title} className="glassmorphic flex flex-col animate-fade-in" style={{ animationDelay: `${index * 100}ms`}}>
                    <CardHeader className="flex-row items-center gap-4">
                        <div className="bg-primary/10 text-primary p-3 rounded-full">
                           <service.icon className="w-6 h-6" />
                        </div>
                        <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow space-y-4">
                       <p className="text-muted-foreground text-sm">{service.description}</p>
                       <div className="flex flex-wrap gap-2">
                           {service.skills.map(skill => <Badge variant="secondary" key={skill}>{skill}</Badge>)}
                       </div>
                    </CardContent>
                </Card>
            ))}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="font-headline text-3xl font-bold text-center mb-10">Video Editing & Motion Graphics Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoProjects.map((project, index) => (
                <div key={project.id} onClick={() => openModal(project.videoSrc, project.title)}>
                    <Card className="overflow-hidden group glassmorphic transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="overflow-hidden aspect-video">
                        <Image
                        src={project.thumbnail}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground text-sm">{project.description}</p>
                    </CardContent>
                    </Card>
                </div>
            ))}
        </div>
      </section>

      {selectedVideo && (
        <VideoModal
          isOpen={isModalOpen}
          onClose={closeModal}
          videoSrc={selectedVideo.src}
          title={selectedVideo.title}
        />
      )}
    </>
  );
}
