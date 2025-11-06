'use client';

import * as React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
  title: string;
}

export function VideoModal({ isOpen, onClose, videoSrc, title }: VideoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-0">
        <div className="aspect-video">
          <video src={videoSrc} title={title} controls autoPlay className="w-full h-full rounded-lg" />
        </div>
      </DialogContent>
    </Dialog>
  );
}
