import Hero from "../components/Hero";
import FeaturedNFTs from "../components/FeaturedNFTs";
import AnimatedBackground from "../components/AnimatedBackground";
import Navigation from "../components/Navigation";
import TopNFTLeaderboard from "../components/TopNFTLeaderboard";

const Index = () => {
  return (
    <main className="min-h-screen relative">
      <AnimatedBackground />
      <Navigation />
      <Hero />
      <FeaturedNFTs />
      <TopNFTLeaderboard />
    </main>
  );
};

export default Index;