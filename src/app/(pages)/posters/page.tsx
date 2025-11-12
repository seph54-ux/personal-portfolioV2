'use client';
import { PageHeader } from '@/components/PageHeader';
import { ProjectCard } from '@/components/ProjectCard';
import { useState } from 'react';
import { ImageModal } from '@/components/ImageModal';
import { StaticImageData } from 'next/image';
import { projects } from '@/lib/data';


export default function PostersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{src: StaticImageData | string, alt: string} | null>(null);

  const posterProjects = projects.filter(p => p.category === 'Posters');

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
        title="Poster Design"
        subtitle="A collection of posters created for various events, promotions, and artistic expressions."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {posterProjects.map((project, index) => (
          <div key={project.id} onClick={() => openModal(project.images[0].imageUrl, project.title)}>
            <ProjectCard 
              project={project} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            />
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
