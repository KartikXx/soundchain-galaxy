
import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Play, Heart } from "lucide-react";

interface NFTCardProps {
  title: string;
  artist: string;
  image: string;
  price: string;
}

const NFTCard = ({ title, artist, image, price }: NFTCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className="nft-card group"
    >
      <Card className="overflow-hidden bg-black/40 border-white/10 backdrop-blur-xl">
        <div className="relative aspect-square overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Play Button Overlay */}
          <motion.button
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary/90 p-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary neon-glow"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Play className="w-6 h-6" />
          </motion.button>

          {/* Price Tag */}
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full glass text-sm font-medium">
            {price} ETH
          </div>
        </div>

        <div className="p-4 space-y-3">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-lg mb-1 gradient-text">{title}</h3>
              <p className="text-muted-foreground text-sm">{artist}</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full hover:bg-white/5"
            >
              <Heart className="w-5 h-5" />
            </motion.button>
          </div>

          <div className="flex justify-between items-center pt-2 border-t border-white/10">
            <div className="text-sm">
              <span className="text-muted-foreground">Current Bid</span>
              <p className="font-medium text-primary">{price} ETH</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium hover:bg-primary/30 transition-colors neon-glow"
            >
              View Details
            </motion.button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default NFTCard;
