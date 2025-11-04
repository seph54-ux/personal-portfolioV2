'use client';
import { PageHeader } from '@/components/PageHeader';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import { ImageModal } from '@/components/ImageModal';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// Importing overlay assets
import draftingOverlay from '@/app/asset/images/works-obs-overlay/drafting.webp';
import endingOverlay from '@/app/asset/images/works-obs-overlay/ending overlay.webp';
import finalPregame from '@/app/asset/images/works-obs-overlay/final pregame.webp';
import finalsIngameOverlay from '@/app/asset/images/works-obs-overlay/finals ingame overlay.webp';
import inGameOverlay1 from '@/app/asset/images/works-obs-overlay/in-game overlay1.webp';
import inGameOverlay2 from '@/app/asset/images/works-obs-overlay/in-game overlay2.webp';
import inGameOverlay3 from '@/app/asset/images/works-obs-overlay/in-game overlay3.webp';
import liveOverlay from '@/app/asset/images/works-obs-overlay/live overlay.webp';
import mapOverlay from '@/app/asset/images/works-obs-overlay/map overlay.webp';
import pathBottom from '@/app/asset/images/works-obs-overlay/path-bottom.webp';
import preGameStream1 from '@/app/asset/images/works-obs-overlay/pre-game stream1.webp';
import preGameStream2 from '@/app/asset/images/works-obs-overlay/pre-game stream2.webp';

// Importing overlays in action
import commbreak from '@/app/asset/images/works-obs-action/commbreak.webp';
import draftingAction from '@/app/asset/images/works-obs-action/drafting.webp';
import drafting1Action from '@/app/asset/images/works-obs-action/drafting1.webp';
import ingameMatch from '@/app/asset/images/works-obs-action/ingame match.webp';
import ingameMatch2 from '@/app/asset/images/works-obs-action/ingame match2.webp';
import ingameMatch3 from '@/app/asset/images/works-obs-action/ingame match3.webp';
import pregame from '@/app/asset/images/works-obs-action/pregame.webp';
import pregame2 from '@/app/asset/images/works-obs-action/pregame2.webp';

const overlayAssets = [
  { name: 'Drafting Overlay', image: draftingOverlay },
  { name: 'Ending Overlay', image: endingOverlay },
  { name: 'Final Pregame', image: finalPregame },
  { name: 'Finals Ingame Overlay', image: finalsIngameOverlay },
  { name: 'In-game Overlay 1', image: inGameOverlay1 },
  { name: 'In-game Overlay 2', image: inGameOverlay2 },
  { name: 'In-game Overlay 3', image: inGameOverlay3 },
  { name: 'Live Overlay', image: liveOverlay },
  { name: 'Map Overlay', image: mapOverlay },
  { name: 'Path Bottom', image: pathBottom },
  { name: 'Pre-game Stream 1', image: preGameStream1 },
  { name: 'Pre-game Stream 2', image: preGameStream2 },
];

const overlaysInAction = [
  { name: 'Commbreak', image: commbreak },
  { name: 'Drafting in Action', image: draftingAction },
  { name: 'Drafting 1 in Action', image: drafting1Action },
  { name: 'Ingame Match', image: ingameMatch },
  { name: 'Ingame Match 2', image: ingameMatch2 },
  { name: 'Ingame Match 3', image: ingameMatch3 },
  { name: 'Pregame', image: pregame },
  { name: 'Pregame 2', image: pregame2 },
];

export default function ObsOverlaysPage() {
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