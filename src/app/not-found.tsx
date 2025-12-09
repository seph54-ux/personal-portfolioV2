"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      <h2 className="text-4xl font-bold">Page Not Found</h2>
      <p>Could not find the page you were looking for.</p>
      <Link href="/">
        <Button>Go Back Home</Button>
      </Link>
    </div>
  );
}
