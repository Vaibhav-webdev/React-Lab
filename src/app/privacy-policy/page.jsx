import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy - Native Crush',
  description: 'Privacy Policy for Native Crush',
};

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-[#0d0e12] text-gray-300 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-purple-500 hover:text-purple-400 text-sm font-medium flex items-center gap-2 mb-8 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 tracking-tight">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: June 2026</p>

        <div className="space-y-8 border-t border-gray-800 pt-8">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Introduction</h2>
            <p className="leading-relaxed">
              Welcome to <strong>Native Crush</strong>. We value your learning experience above all else. This Privacy Policy informs you about our stance on data collection and privacy while using our platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Data Collection</h2>
            <p className="leading-relaxed text-purple-400 font-medium">
              We do not collect, store, or process any personal data from our users.
            </p>
            <p className="leading-relaxed mt-2">
              You can browse, learn, and practice React Native code components freely on this website without needing to create an account or provide any personal information such as names, emails, or phone numbers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Tracking and Cookies</h2>
            <p className="leading-relaxed">
              Native Crush does not use tracking cookies, analytics tools (like Google Analytics), or any background scripts to monitor your behavior or track your session across the internet. Your learning environment is completely private.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Third-Party Links</h2>
            <p className="leading-relaxed">
              Our website may contain links to official documentation (like React Native or Expo docs). We are not responsible for the privacy practices or content of these external third-party websites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Changes to This Policy</h2>
            <p className="leading-relaxed">
              We may update our Privacy Policy from time to time. Any changes will be posted on this page with an updated modification date.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;