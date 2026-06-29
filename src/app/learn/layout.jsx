import { Metadata } from "next";

export const metadata = {
  title: "Learn Next.js - Interactive Learning Platform",
  description:
    "Master Next.js through interactive lessons, debug real-world bugs, and build hands-on mini projects. Covers routing, server components, data fetching, authentication, and more.",
  keywords: [
    "Next.js",
    "React",
    "Learn Next.js",
    "Next.js Tutorial",
    "Server Components",
    "App Router",
    "Next.js 14",
    "Full Stack Development",
  ],
  openGraph: {
    title: "Learn Next.js - Interactive Learning Platform",
    description:
      "Master Next.js through interactive lessons, debug real-world bugs, and build hands-on mini projects.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn Next.js - Interactive Learning Platform",
    description:
      "Master Next.js through interactive lessons, debug real-world bugs, and build hands-on mini projects.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function LearnLayout({ children }) {
  return <>{children}</>;
}