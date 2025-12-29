"use client";

import { useEffect, useState } from "react";
import { XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PaymentCancel() {
  const [countdown, setCountdown] = useState(1);
  const [redirected, setRedirected] = useState(false);

  const deepLink = "nexflow://payment-cancel";

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
  }, []);

  const handleManualRedirect = () => {
    window.location.href = deepLink;
  };

  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center">
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center">
            <XCircle className="w-12 h-12 text-muted-foreground" />
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-3">
          No worries!
        </h1>

        <p className="text-muted-foreground mb-2">
          Your payment was cancelled
        </p>

        <p className="text-muted-foreground text-sm mb-8">
          You can upgrade anytime from within the app. Your free plan is still active.
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
          Back to NexFlow
        </Button>

        <p className="text-muted-foreground text-xs mt-6">
          If the app doesn&apos;t open, make sure NexFlow is installed on your device.
        </p>
      </div>
    </main>
  );
}
