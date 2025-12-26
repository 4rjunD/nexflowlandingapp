import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { WaitlistModal } from "@/components/ui/waitlist-modal";

function Hero() {
  return (
    <div className="w-full py-8 lg:py-14">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
          <div className="flex gap-4 flex-col md:pl-6">
            <div>
              <Badge variant="outline">Stop wasting years on guesswork</Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
                Run health experiments on yourself.
              </h1>
              <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                Connect your watch. Try something for two weeks, like cutting coffee or sleeping more. We&apos;ll show you proof of what actually changes your energy, sleep, and focus forever.
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <Button size="lg" variant="outline" className="gap-2">
                <div className="relative w-4 h-4">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2" />
                    <path d="M8.5 2h7" />
                    <path d="M7 15h10" className="opacity-40" />
                  </svg>
                  <span className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-px h-1 bg-gradient-to-t from-current to-transparent opacity-25 animate-pulse" />
                  <span className="absolute -top-1 left-1/2 translate-x-0.5 w-px h-1 bg-gradient-to-t from-current to-transparent opacity-20 animate-pulse delay-150" />
                </div>
                How it works
              </Button>
              <WaitlistModal>
                <Button size="lg" className="gap-2">
                  Join Waitlist <MoveRight className="w-4 h-4" />
                </Button>
              </WaitlistModal>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/Productshotshot.png"
              alt="NexFlow App"
              className="w-full max-w-2xl scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
