import Image from "next/image";
import Hero from "./components/Hero";
import FeaturesSection from "./components/FeatureSection";
import LearningPathComponent from "./components/LearningPathSection";
import LivePlayground from "./components/LivePlaygroundSection";
import CallToAction from "./components/CallToActionSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturesSection />
      <LearningPathComponent />
      <LivePlayground />
      <CallToAction />
    </main>
  );
}
