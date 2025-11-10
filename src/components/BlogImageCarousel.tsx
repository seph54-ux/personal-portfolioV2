"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from "next/image";

type BlogImageCarouselProps = {
  images: {
    title: string;
    url: string;
  }[];
};

export function BlogImageCarousel({ images }: BlogImageCarouselProps) {
  return (
    <div className="space-y-4">
        <h3 className="font-headline text-2xl font-bold text-center">Event Gallery</h3>
        <Carousel className="w-full max-w-2xl mx-auto">
          <CarouselContent>
            {images.map((item, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="overflow-hidden glassmorphic">
                    <CardHeader className="p-4">
                      <CardTitle className="text-sm font-medium text-muted-foreground">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 aspect-video flex items-center justify-center bg-muted/30">
                      <Image
                        src={item.url}
                        alt={item.title}
                        width={800}
                        height={450}
                        className="object-contain max-h-full max-w-full"
                      />
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
  );
}
