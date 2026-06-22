import Navbar from "./components/common/Navbar";
import Hero from "./components/Hero";
import FeaturesSection from "./components/FeatureSection";
import LearningPathComponent from "./components/LearningPathSection";
import LivePlayground from "./components/LivePlaygroundSection";
import CallToAction from "./components/CallToActionSection";
import Footer from "./components/common/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturesSection />
      <LearningPathComponent />
      <LivePlayground />
      <CallToAction />
      <Footer />
    </main>
  );
}
