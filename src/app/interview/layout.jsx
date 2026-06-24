export const metadata = {
  title: "Mock Next.js Interview — Fix 3 Bugs in Real Time",
  description:
    "Test your Next.js and React skills with 3 randomly selected fix-the-bug challenges under real interview pressure. No hints. Timed. Just you and the code.",
  keywords: [
    "Next.js interview",
    "React interview prep",
    "fix the bug",
    "coding challenge",
    "frontend interview",
    "JavaScript debugging",
  ],
  openGraph: {
    title: "Mock Next.js Interview",
    description:
      "Can you spot and fix 3 React/Next.js bugs before the timer runs out?",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mock Next.js Interview",
    description: "3 random bugs. One combined timer. Fix them all.",
  },
};

export default function InterviewLayout({ children }) {
  return <>{children}</>;
}