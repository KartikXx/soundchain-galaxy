
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Texture overlay */}
      <div className="absolute inset-0 texture-overlay opacity-50" />
      
      {/* Animated gradient background */}
      <div className="absolute inset-0 hero-gradient animate-gradient" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Create, Collect & Trade Music NFTs
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The ultimate destination for music NFTs on the blockchain
          </motion.p>
          
          {/* Search Bar */}
          <motion.div 
            className="max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search for NFTs, artists, or collections..."
                className="w-full h-14 px-6 pr-12 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/50" />
            </div>
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-lg h-12 px-8 neon-glow"
            >
              Start Creating
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10 text-lg h-12 px-8"
            >
              Explore NFTs
            </Button>
          </motion.div>
          
          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {[
              { label: "Total Volume", value: "$247M+" },
              { label: "NFTs Created", value: "24.7K+" },
              { label: "Artists", value: "12.3K+" },
              { label: "Collectors", value: "98.1K+" }
            ].map((stat, index) => (
              <div key={index} className="glass rounded-xl p-4 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
