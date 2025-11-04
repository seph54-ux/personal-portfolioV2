"use client";

import * as React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image, { StaticImageData } from "next/image";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: StaticImageData | string;
  alt: string;
}

export function ImageModal({ isOpen, onClose, imageUrl, alt }: ImageModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="p-0 bg-transparent border-0 max-w-4xl w-full h-full flex items-center justify-center">
        <div className="relative w-full h-5/6">
          <Image
            src={imageUrl}
            alt={alt}
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
