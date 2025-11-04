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
      <DialogContent className="p-0 bg-transparent border-0 max-w-4xl w-full h-full flex items-center justify-center">
        <div className="relative w-full h-5/6">
          <video src={videoSrc} title={title} controls className="w-full h-full rounded-lg" />
        </div>
      </DialogContent>
    </Dialog>
  );
}
