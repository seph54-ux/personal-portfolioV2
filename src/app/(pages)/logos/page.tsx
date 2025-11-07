"use client"
import { PageHeader } from '@/components/PageHeader';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import { ImageModal } from '@/components/ImageModal';
import mlMainLogo from '@/app/asset/images/works-logo/ml main logo.webp';
import ml3dLogo from '@/app/asset/images/works-logo/ml 3d logo.webp';
import mlMainLogoBlackText from '@/app/asset/images/works-logo/ml main logo black text.webp';
import mlMainLogoGradientBg from '@/app/asset/images/works-logo/ml main logo gradient bg.webp';
import mlMainLogoWhiteText from '@/app/asset/images/works-logo/ml main logo white text.webp';
import rpMainLogoBadge from '@/app/asset/images/works-logo/RP-main-logo-badge.webp';
import rpMainLogoText from '@/app/asset/images/works-logo/RP-main-logo-text.webp';
import rpSublogo from '@/app/asset/images/works-logo/RP-sublogo.webp';
import rpTextLogo from '@/app/asset/images/works-logo/RP-text-logo.webp';

const mlLogoVariants = [
  { name: 'Main Logo', image: mlMainLogo },
  { name: '3D Logo', image: ml3dLogo },
  { name: 'Main Logo Black Text', image: mlMainLogoBlackText },
  { name: 'Main Logo Gradient BG', image: mlMainLogoGradientBg },
  { name: 'Main Logo White Text', image: mlMainLogoWhiteText },
];

const rpLogoVariants = [
  { name: 'Main Logo Badge', image: rpMainLogoBadge },
  { name: 'Main Logo Text', image: rpMainLogoText },
  { name: 'Sublogo', image: rpSublogo },
  { name: 'Text Logo', image: rpTextLogo },
];

const logoProjects = [
  {
    id: 'proj-logo-ml',
    title: "ML Esports",
    description: 'A dynamic and modern logo for Mobile Legends Bang Bang E-Sports event held on Engineering Days 2023 at Tanauan City College.',
    variants: mlLogoVariants.map(v => ({ name: v.name, images: [{ imageUrl: v.image, imageHint: 'logo' }]})),
    tech: ['inkscape'],
  },
  {
    id: 'proj-logo-rp',
    title: "Rising Pro",
    description: 'A powerful and inspiring logo for a professional gaming organization, designed to be easily recognizable and impactful.',
    variants: rpLogoVariants.map(v => ({ name: v.name, images: [{ imageUrl: v.image, imageHint: 'logo' }]})),
    tech: ['inkscape'],
  },
];

const techStack = {
  inkscape: { name: 'Inkscape', category: 'Design Tool'}
};

export default function LogosPage() {
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
        title="Logo Design"
        subtitle="Crafting unique and memorable identities for brands. Each logo is designed to be versatile and timeless."
      />
      <div className="space-y-16 mt-12">
        {logoProjects.map((project, index) => (
          <div key={project.id} className="grid md:grid-cols-2 gap-8 items-center animate-fade-in" style={{ animationDelay: `${index * 150}ms`}}>
            <div className={index % 2 === 1 ? 'md:order-2' : ''}>
              <Carousel className="w-full max-w-xl mx-auto">
                <CarouselContent>
                  {project.variants?.map((variant, vIndex) => (
                    <CarouselItem key={vIndex}>
                      <div className="p-1">
                        <Card className="overflow-hidden glassmorphic">
                          <CardHeader className="p-4">
                            <CardTitle className="text-sm font-medium text-muted-foreground">{variant.name}</CardTitle>
                          </CardHeader>
                          <CardContent className="p-0 h-64 flex items-center justify-center">
                            <button onClick={() => openModal(variant.images[0].imageUrl, `${project.title} - ${variant.name}`)} className="w-full h-full">
                              <Image
                                src={variant.images[0].imageUrl}
                                alt={`${project.title} - ${variant.name}`}
                                width={800}
                                height={600}
                                className="object-contain max-h-full max-w-full"
                                data-ai-hint={variant.images[0].imageHint}
                              />
                            </button>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex" />
                <CarouselNext className="hidden sm:flex" />
              </Carousel>
            </div>
            <div className={index % 2 === 1 ? 'md:order-1' : ''}>
              <h2 className="font-headline text-3xl font-bold mb-4">{project.title}</h2>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              {project.tech && (
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <Badge key={t} variant="secondary">{techStack[t].name}</Badge>
                  ))}
                </div>
              )}
            </div>
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

    