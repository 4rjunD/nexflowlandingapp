"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PaymentSuccess() {
  const searchParams = useSearchParams();
  const tier = searchParams.get("tier") || "Pro";
  const [countdown, setCountdown] = useState(1);
  const [redirected, setRedirected] = useState(false);

  const deepLink = `nexflow://payment-success?tier=${encodeURIComponent(tier)}`;

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    const redirectTimer = setTimeout(() => {
      window.location.href = deepLink;
      setRedirected(true);
    }, 1000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, [deepLink]);

  const handleManualRedirect = () => {
    window.location.href = deepLink;
  };

  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center">
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle2 className="w-12 h-12 text-green-600" />
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-3">
          Payment Successful!
        </h1>

        <p className="text-muted-foreground mb-2">
          Welcome to NexFlow <span className="text-foreground font-semibold">{tier}</span>
        </p>

        <p className="text-muted-foreground text-sm mb-8">
          Your subscription is now active. Get ready to run experiments on yourself.
        </p>

        {!redirected && countdown > 0 && (
          <p className="text-muted-foreground text-sm mb-6">
            Redirecting to app in {countdown}...
          </p>
        )}

        {redirected && (
          <p className="text-muted-foreground text-sm mb-6">
            Didn&apos;t redirect automatically?
          </p>
        )}

        <Button
          onClick={handleManualRedirect}
          size="lg"
          className="w-full"
        >
          Open NexFlow
        </Button>

        <p className="text-muted-foreground text-xs mt-6">
          If the app doesn&apos;t open, make sure NexFlow is installed on your device.
        </p>
      </div>
    </main>
  );
}
