"use client";

import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

function PlaybookHero() {
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              The Ultimate Guide to Your Health
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              A simple, structured system for using wearable data and lifestyle experiments to catch issues early, before they become clinical.
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <Button size="lg" className="gap-4">
              Get the guide for $1 <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { PlaybookHero };
