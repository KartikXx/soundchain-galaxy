import { motion } from "framer-motion";
import { Card } from "./ui/card";

interface NFTCardProps {
  title: string;
  artist: string;
  image: string;
  price: string;
}

const NFTCard = ({ title, artist, image, price }: NFTCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="nft-card"
    >
      <Card className="overflow-hidden bg-muted/50 border-muted">
        <div className="aspect-square overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-1">{title}</h3>
          <p className="text-muted-foreground text-sm mb-2">{artist}</p>
          <div className="flex justify-between items-center">
            <span className="text-primary font-medium">{price} ETH</span>
            <button className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full hover:bg-primary/20 transition-colors">
              View Details
            </button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default NFTCard;