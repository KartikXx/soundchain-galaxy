
import { motion } from "framer-motion";
import { Search, Filter } from "lucide-react";
import NFTCard from "./NFTCard";

const FeaturedNFTs = () => {
  const nfts = [
    {
      title: "Cosmic Harmony",
      artist: "Digital Dreams",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      price: "0.85"
    },
    {
      title: "Neural Beats",
      artist: "Cyber Symphony",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      price: "1.2"
    },
    {
      title: "Future Funk",
      artist: "Neon Collective",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      price: "0.95"
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute inset-0 texture-overlay opacity-5" />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <h2 className="text-4xl font-bold gradient-text">Featured NFTs</h2>
          
          {/* Search and Filter */}
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <input
                type="text"
                placeholder="Search NFTs..."
                className="w-full h-11 pl-11 pr-4 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all outline-none text-sm backdrop-blur-xl"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="h-11 px-4 rounded-xl glass hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <Filter className="w-5 h-5" />
              <span className="hidden md:inline">Filter</span>
            </motion.button>
          </div>
        </div>

        {/* NFT Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nfts.map((nft, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <NFTCard {...nft} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedNFTs;
