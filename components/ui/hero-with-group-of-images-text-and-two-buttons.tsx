"use client";

import { useState } from "react";
import Image from "next/image";
import { MoveRight, Loader2, CheckCircle2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

function Hero() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("https://submit-form.com/K9AikUH27", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setEmail("");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full pt-28 pb-8 lg:pt-32 lg:pb-14">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
          <div className="flex gap-4 flex-col order-2 md:order-1">
            <div>
              <Badge variant="outline">Backed by Character Capital · Launching Q1 2026</Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
                Run health experiments on yourself.
              </h1>
              <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                Connect your watch. Try something for two weeks, like cutting coffee or sleeping more. We&apos;ll show you proof of what actually changes your energy, sleep, and focus forever.
              </p>
            </div>
            {isSuccess ? (
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle2 className="w-5 h-5" />
                <span className="font-medium">You&apos;re on the list! We&apos;ll be in touch soon.</span>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isSubmitting}
                    className="h-12 text-base"
                  />
                  <Button size="lg" type="submit" disabled={isSubmitting} className="gap-2 whitespace-nowrap">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Joining...
                      </>
                    ) : (
                      <>
                        Join Waitlist <MoveRight className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span><strong className="text-foreground">First 1,000 users</strong> get Pro free for 1 month</span>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground pt-2">
                  <span>Works with:</span>
                  <span className="px-2 py-1 bg-muted rounded">Apple Watch</span>
                  <span className="px-2 py-1 bg-muted rounded">Health</span>
                  <span className="px-2 py-1 bg-muted rounded">Oura</span>
                  <span className="px-2 py-1 bg-muted rounded">Whoop</span>
                </div>
              </div>
            )}
            {error && <p className="text-sm text-red-500">{error}</p>}
          </div>
          <div className="flex items-center justify-center order-1 md:order-2">
            <Image
              src="/ProdddShottt_final.jpg"
              alt="NexFlow App"
              width={1200}
              height={900}
              priority
              className="w-full max-w-md md:max-w-2xl md:scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
