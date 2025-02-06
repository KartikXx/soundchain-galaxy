import Hero from "../components/Hero";
import FeaturedNFTs from "../components/FeaturedNFTs";
import AnimatedBackground from "../components/AnimatedBackground";
import Navigation from "../components/Navigation";

const Index = () => {
  return (
    <main className="min-h-screen relative">
      <AnimatedBackground />
      <Navigation />
      <Hero />
      <FeaturedNFTs />
    </main>
  );
};

export default Index;