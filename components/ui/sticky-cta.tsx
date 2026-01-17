"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MoveRight, Loader2, CheckCircle2, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerPoint = 600;
      setIsVisible(scrollY > triggerPoint && !isDismissed);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://submit-form.com/K9AikUH27", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email, source: "sticky-cta" }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setEmail("");
        setTimeout(() => setIsDismissed(true), 2000);
      }
    } catch {
      // Silently fail
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 bg-[#F6F4EF]/95 backdrop-blur-sm border-t border-[#E5E2DB] shadow-lg",
        "transform transition-transform duration-300",
        isVisible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <p className="text-sm font-medium text-[#111111]">
              <span className="hidden sm:inline">Ready to stop guessing?</span>
              <span className="sm:hidden">Stop guessing.</span>
              {" "}
              <span className="text-[#1F4D3A]">Get early access.</span>
            </p>
          </div>

          {isSuccess ? (
            <div className="flex items-center gap-2 text-[#1F4D3A]">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-sm font-medium">You&apos;re in!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2 w-full sm:w-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting}
                className="h-9 text-sm w-full sm:w-64 border-[#D9D6CF]"
              />
              <Button size="sm" type="submit" disabled={isSubmitting} className="gap-1 whitespace-nowrap bg-[#1F4D3A] hover:bg-[#163D2E] text-white">
                {isSubmitting ? (
                  <Loader2 className="w-3 h-3 animate-spin" />
                ) : (
                  <>
                    Join <MoveRight className="w-3 h-3 hidden sm:inline" />
                  </>
                )}
              </Button>
            </form>
          )}

          <button
            onClick={() => setIsDismissed(true)}
            className="absolute top-2 right-2 sm:relative sm:top-auto sm:right-auto p-1 text-[#999999] hover:text-[#111111]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
