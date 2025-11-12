'use client';
import { PageHeader } from '@/components/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { useState } from 'react';
import { ImageModal } from '@/components/ImageModal';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const overlayAssets = [
  { name: 'Drafting Overlay', image: '/asset/images/works-obs-overlay/drafting.webp' },
  { name: 'Ending Overlay', image: '/asset/images/works-obs-overlay/ending overlay.webp' },
  { name: 'Final Pregame', image: '/asset/images/works-obs-overlay/final pregame.webp' },
  { name: 'Finals Ingame Overlay', image: '/asset/images/works-obs-overlay/finals ingame overlay.webp' },
  { name: 'In-game Overlay 1', image: '/asset/images/works-obs-overlay/in-game overlay1.webp' },
  { name: 'In-game Overlay 2', image: '/asset/images/works-obs-overlay/in-game overlay2.webp' },
  { name: 'In-game Overlay 3', image: '/asset/images/works-obs-overlay/in-game overlay3.webp' },
  { name: 'Live Overlay', image: '/asset/images/works-obs-overlay/live overlay.webp' },
  { name: 'Map Overlay', image: '/asset/images/works-obs-overlay/map overlay.webp' },
  { name: 'Path Bottom', image: '/asset/images/works-obs-overlay/path-bottom.webp' },
  { name: 'Pre-game Stream 1', image: '/asset/images/works-obs-overlay/pre-game stream1.webp' },
  { name: 'Pre-game Stream 2', image: '/asset/images/works-obs-overlay/pre-game stream2.webp' },
];

const overlaysInAction = [
  { name: 'Commbreak', image: '/asset/images/works-obs-action/commbreak.webp' },
  { name: 'Drafting in Action', image: '/asset/images/works-obs-action/drafting.webp' },
  { name: 'Drafting 1 in Action', image: '/asset/images/works-obs-action/drafting1.webp' },
  { name: 'Ingame Match', image: '/asset/images/works-obs-action/ingame match.webp' },
  { name: 'Ingame Match 2', image: '/asset/images/works-obs-action/ingame match2.webp' },
  { name: 'Ingame Match 3', image: '/asset/images/works-obs-action/ingame match3.webp' },
  { name: 'Pregame', image: '/asset/images/works-obs-action/pregame.webp' },
  { name: 'Pregame 2', image: '/asset/images/works-obs-action/pregame2.webp' },
];

export default function ObsOverlaysPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{src: string, alt: string} | null>(null);

  const openModal = (src: string, alt: string) => {
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
        title="OBS Overlays"
        subtitle="These dynamic and static overlay assets were designed especially for E-Days 2k23 Facebook live broadcast, optimized for clarity, energy, and viewer engagement."
      />
      <div className="space-y-16 mt-12">
        <div>
          <h2 className="font-headline text-3xl font-bold mb-2 text-center">Overlay Assets</h2>
          <p className="text-muted-foreground mb-8 text-center max-w-2xl mx-auto">Individual components of the stream pack.</p>
          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent>
              {overlayAssets.map((asset, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden glassmorphic">
                      <CardHeader>
                        <CardTitle className="text-sm font-medium text-muted-foreground">{asset.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-0 aspect-video flex items-center justify-center">
                        <button onClick={() => openModal(asset.image, asset.name)} className="w-full h-full">
                          <Image
                            src={asset.image}
                            alt={asset.name}
                            width={800}
                            height={600}
                            className="object-contain max-h-full max-w-full"
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

        <div>
          <h2 className="font-headline text-3xl font-bold mb-2 text-center">Overlays in Action</h2>
          <p className="text-muted-foreground mb-8 text-center max-w-2xl mx-auto">See how the overlays look in a real stream environment.</p>
          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent>
              {overlaysInAction.map((action, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden glassmorphic">
                      <CardHeader>
                        <CardTitle className="text-sm font-medium text-muted-foreground">{action.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-0 aspect-video flex items-center justify-center">
                        <button onClick={() => openModal(action.image, action.name)} className="w-full h-full">
                          <Image
                            src={action.image}
                            alt={action.name}
                            width={800}
                            height={600}
                            className="object-contain max-h-full max-w-full"
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
