import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";

interface NFT {
  id: number;
  rank: number;
  name: string;
  artist: string;
  sales: number;
  image: string;
}

const dummyNFTs: NFT[] = [
  {
    id: 1,
    rank: 1,
    name: "Cosmic Rhythm #1",
    artist: "Digital Dreamers",
    sales: 150000,
    image: "/placeholder.svg"
  },
  {
    id: 2,
    rank: 2,
    name: "Neon Beats",
    artist: "Future Sound",
    sales: 120000,
    image: "/placeholder.svg"
  },
  {
    id: 3,
    rank: 3,
    name: "Metaverse Symphony",
    artist: "Web3 Wizards",
    sales: 90000,
    image: "/placeholder.svg"
  }
];

const TopNFTLeaderboard = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-pink-900/20 animate-gradient" />
      
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 gradient-text"
        >
          Top NFTs 🏆
        </motion.h2>

        <div className="grid gap-8">
          {dummyNFTs.map((nft) => (
            <motion.div
              key={nft.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <Card className={cn(
                "p-6 nft-card glass",
                nft.rank === 1 ? "animate-glow border-yellow-500/50" :
                nft.rank === 2 ? "border-gray-400/50" :
                "border-orange-800/50"
              )}>
                <div className="flex items-center gap-6">
                  <div className={cn(
                    "text-4xl font-bold w-16 h-16 flex items-center justify-center rounded-full",
                    nft.rank === 1 ? "bg-yellow-500/20 text-yellow-300" :
                    nft.rank === 2 ? "bg-gray-500/20 text-gray-300" :
                    "bg-orange-800/20 text-orange-300"
                  )}>
                    #{nft.rank}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{nft.name}</h3>
                    <p className="text-muted-foreground">{nft.artist}</p>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-2xl font-bold mb-1">
                      {nft.sales.toLocaleString()} ETH
                    </div>
                    <p className="text-sm text-muted-foreground">Total Sales</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopNFTLeaderboard;