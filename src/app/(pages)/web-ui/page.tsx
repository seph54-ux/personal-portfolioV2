'use client';
import { PageHeader } from '@/components/PageHeader';
import { useState } from 'react';
import { ImageModal } from '@/components/ImageModal';
import Image, { StaticImageData } from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Project } from '@/lib/data';
import { webUiProjects } from '@/lib/websites-data';

export default function WebUiPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{src: StaticImageData | string, alt: string} | null>(null);

  const openModal = (src: StaticImageData | string, alt: string) => {
    setSelectedImage({ src, alt });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <PageHeader
        title="Web UI Design"
        subtitle="Crafting intuitive, beautiful, and user-centric interfaces for web and mobile applications."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {webUiProjects.map((project, index) => (
          <div key={project.id} onClick={() => openModal(project.images[0].imageUrl, project.title)}>
            <Card className="overflow-hidden group glassmorphic transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="overflow-hidden aspect-video">
                <Image
                  src={project.images[0].imageUrl}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
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
      {selectedImage && (
        <ImageModal
          isOpen={isModalOpen}
          onClose={closeModal}
          imageUrl={selectedImage.src}
          alt={selectedImage.alt}
        />
      )}
    </>
  );
}
