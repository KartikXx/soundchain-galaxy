import { motion } from "framer-motion";
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
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Featured NFTs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nfts.map((nft, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
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