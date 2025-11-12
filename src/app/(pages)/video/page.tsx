'use client';
import { PageHeader } from '@/components/PageHeader';
import { useState } from 'react';
import { VideoModal } from '@/components/VideoModal';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const videoProjects = [
  {
    id: 'video-1',
    title: 'ML Logo Unveil',
    description: 'An exciting logo reveal for a Mobile Legends tournament.',
    thumbnail: '/asset/videos/VideoThumbnail1.webp',
    videoSrc: '/asset/videos/ML Logo unveil.mp4',
  },
  {
    id: 'video-2',
    title: 'Post-Match Results & MVP',
    description: 'A dynamic post-match sequence showcasing the results and the Most Valuable Player.',
    thumbnail: '/asset/videos/VideoThumbnail2.webp',
    videoSrc: '/asset/videos/PostMatch Results Final MVP.mp4',
  },
  {
    id: 'video-3',
    title: 'Teaser Edays 2k23',
    description: 'A teaser video for the Edays 2023 event.',
    thumbnail: '/asset/videos/VideoThumbnail3.webp',
    videoSrc: '/asset/videos/Teaser Edays2k23.mp4',
  },
];

export default function VideoPage() {
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
        title="Video Projects"
        subtitle="Engaging stories brought to life through motion, from promotional content to artistic shorts."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
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
