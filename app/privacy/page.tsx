export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen pt-28 pb-16">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last Updated: January 2026</p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              NexFlow Inc. (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates the NexFlow mobile application (the &quot;App&quot;). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our App.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              By using NexFlow, you agree to the collection and use of information in accordance with this policy. If you do not agree with this policy, please do not use the App.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">We collect the following types of information:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Personal Information:</strong> Email address (if provided for account restoration or subscriptions)</li>
              <li><strong>Health &amp; Fitness Data:</strong> Sleep patterns, heart rate, activity levels, steps, workouts, energy levels, mood, stress, focus, and other biometric data you choose to track or sync from Apple Health or connected services like Dexcom</li>
              <li><strong>User-Generated Content:</strong> Experiment notes, findings, supplement logs, food logs, voice recordings, and chat messages with our AI assistant</li>
              <li><strong>Device Information:</strong> Device type, operating system, unique device identifiers, and app usage analytics</li>
              <li><strong>Payment Information:</strong> Processed securely by Apple (App Store) or Stripe; we do not store your payment card details</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Third-Party Services &amp; Data Sharing</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">We integrate with and may share data with the following third-party services:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-3">
              <li><strong>Apple Health (HealthKit):</strong> We read health data you authorize (sleep, heart rate, steps, workouts) to provide personalized insights. <em className="text-foreground">IMPORTANT: We do not sell HealthKit data or use it for advertising. HealthKit data is never shared with third parties for marketing or advertising purposes.</em></li>
              <li><strong>OpenAI:</strong> Your chat messages and health summaries may be sent to OpenAI&apos;s API to generate personalized AI insights. OpenAI processes this data according to their privacy policy. We minimize personally identifiable information sent to OpenAI.</li>
              <li><strong>Dexcom:</strong> If you connect Dexcom, we access your glucose data to track metabolic health and provide experiment insights.</li>
              <li><strong>Apple Speech Recognition:</strong> If you use voice logging, your speech is processed by Apple&apos;s on-device and cloud speech recognition services.</li>
              <li><strong>Stripe / Apple App Store:</strong> Payment processing is handled by Stripe or Apple. Your payment information is sent directly to these services and governed by their respective privacy policies.</li>
              <li><strong>Supabase:</strong> We may use Supabase for secure cloud storage of account-related data.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We do not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Data Storage &amp; Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your data is primarily stored locally on your device using iOS secure storage mechanisms. Some data may be transmitted to third-party services as described above for the purpose of providing app functionality.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We implement appropriate technical and organizational measures to protect your data. However, no method of electronic storage or transmission is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain your data for as long as your account is active or as needed to provide services. You may delete your data at any time through the App&apos;s settings (Profile &gt; Delete Account &amp; Data).
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Upon deletion, your locally stored data is permanently removed. Data previously sent to third-party services is subject to their respective retention policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Correction:</strong> Request correction of inaccurate data</li>
              <li><strong>Deletion:</strong> Delete your account and all associated data</li>
              <li><strong>Portability:</strong> Export your data (available in app)</li>
              <li><strong>Withdraw Consent:</strong> Disconnect third-party services or revoke HealthKit access at any time through iOS Settings</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              To exercise these rights, contact us at{" "}
              <a href="mailto:arjundixit@nexflowinc.com" className="text-primary hover:underline">
                arjundixit@nexflowinc.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Children&apos;s Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              NexFlow is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. California Residents (CCPA)</h2>
            <p className="text-muted-foreground leading-relaxed">
              California residents have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information is collected, request deletion, and opt-out of sale of personal information. We do not sell personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. International Users (GDPR)</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you are located in the European Economic Area (EEA), you have rights under the General Data Protection Regulation (GDPR). Our legal basis for processing is your consent (which you provide by using the App) and legitimate interests in providing our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of significant changes by posting a notice in the App or on our website. Your continued use of the App after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about this Privacy Policy, please contact us at:{" "}
              <a href="mailto:arjundixit@nexflowinc.com" className="text-primary hover:underline">
                arjundixit@nexflowinc.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
