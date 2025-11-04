'use client';
import { PageHeader } from '@/components/PageHeader';
import { ProjectCard } from '@/components/ProjectCard';
import { useState } from 'react';
import { ImageModal } from '@/components/ImageModal';
import { StaticImageData } from 'next/image';

import codmLogoPoster from '@/app/asset/images/works-poster/CODM Logo_Poster.webp';
import codmMainPoster from '@/app/asset/images/works-poster/CODM Main_Poster.webp';
import codmPoster from '@/app/asset/images/works-poster/CODM_Poster.webp';
import mlMainPoster1 from '@/app/asset/images/works-poster/ML main poster1.webp';
import mlBracket from '@/app/asset/images/works-poster/ML_Bracket.webp';
import mvpTemplate from '@/app/asset/images/works-poster/MVP TEMPLATE.webp';
import postmatchResults from '@/app/asset/images/works-poster/Postmatch results.webp';
import rpBanner from '@/app/asset/images/works-poster/RP banner.webp';
import xmasXtremePoster from '@/app/asset/images/works-poster/XmasXtreme POSTER.webp';

const posterProjects = [
  {
    id: 'poster-1',
    title: 'CODM Logo Poster',
    category: 'Posters',
    description: 'A poster featuring the Call of Duty: Mobile logo, designed with a modern and edgy style.',
    images: [{ imageUrl: codmLogoPoster, imageHint: 'poster' }],
    tech: ['canva'],
  },
  {
    id: 'poster-2',
    title: 'CODM Main Poster',
    category: 'Posters',
    description: 'The main promotional poster for a Call of Duty: Mobile tournament.',
    images: [{ imageUrl: codmMainPoster, imageHint: 'poster' }],
    tech: ['canva'],
  },
  {
    id: 'poster-3',
    title: 'CODM Poster',
    category: 'Posters',
    description: 'A general promotional poster for Call of Duty: Mobile.',
    images: [{ imageUrl: codmPoster, imageHint: 'poster' }],
    tech: ['inkscape'],
  },
  {
    id: 'poster-4',
    title: 'ML Main Poster',
    category: 'Posters',
    description: 'The main promotional poster for a Mobile Legends: Bang Bang tournament.',
    images: [{ imageUrl: mlMainPoster1, imageHint: 'poster' }],
    tech: ['canva'],
  },
  {
    id: 'poster-5',
    title: 'ML Bracket',
    category: 'Posters',
    description: 'A tournament bracket for a Mobile Legends: Bang Bang competition.',
    images: [{ imageUrl: mlBracket, imageHint: 'poster' }],
    tech: ['inkscape'],
  },
  {
    id: 'poster-6',
    title: 'MVP Template',
    category: 'Posters',
    description: 'A template for showcasing the Most Valuable Player of a match.',
    images: [{ imageUrl: mvpTemplate, imageHint: 'poster' }],
    tech: ['canva'],
  },
  {
    id: 'poster-7',
    title: 'Postmatch Results',
    category: 'Posters',
    description: 'A template for displaying post-match results.',
    images: [{ imageUrl: postmatchResults, imageHint: 'poster' }],
    tech: ['inkscape'],
  },
  {
    id: 'poster-8',
    title: 'RP Banner',
    category: 'Posters',
    description: 'A banner for the Rising Pro team.',
    images: [{ imageUrl: rpBanner, imageHint: 'poster' }],
    tech: ['canva'],
  },
  {
    id: 'poster-9',
    title: 'XmasXtreme Poster',
    category: 'Posters',
    description: 'A Christmas-themed tournament poster.',
    images: [{ imageUrl: xmasXtremePoster, imageHint: 'poster' }],
    tech: ['inkscape'],
  },
];

export default function PostersPage() {
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