
import { motion } from "framer-motion";
import NFTCard from "../NFTCard";
import { NFT } from "../../types/nft";

interface NFTGridProps {
  nfts: NFT[];
}

const NFTGrid = ({ nfts }: NFTGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {nfts.length > 0 ? (
        nfts.map((nft, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <NFTCard {...nft} />
          </motion.div>
        ))
      ) : (
        <div className="col-span-full text-center py-12">
          <p className="text-muted-foreground">No NFTs found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default NFTGrid;
