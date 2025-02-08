
import { motion } from "framer-motion";
import { Search, Filter, X } from "lucide-react";
import { useState, useEffect } from "react";
import NFTCard from "./NFTCard";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Slider } from "./ui/slider";

type NFT = {
  title: string;
  artist: string;
  image: string;
  price: string;
  genre?: string;
};

const genres = ["All", "Hip-Hop", "EDM", "Classical", "Rock", "Jazz"];
const sortOptions = [
  "Newest First",
  "Price: Low to High",
  "Price: High to Low",
  "Most Popular",
];

const FeaturedNFTs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedSort, setSelectedSort] = useState("Newest First");
  const [priceRange, setPriceRange] = useState([0, 5]);
  const [filteredNFTs, setFilteredNFTs] = useState<NFT[]>([]);

  const nfts: NFT[] = [
    {
      title: "Cosmic Harmony",
      artist: "Digital Dreams",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      price: "0.85",
      genre: "EDM"
    },
    {
      title: "Neural Beats",
      artist: "Cyber Symphony",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      price: "1.2",
      genre: "Hip-Hop"
    },
    {
      title: "Future Funk",
      artist: "Neon Collective",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      price: "0.95",
      genre: "Classical"
    }
  ];

  useEffect(() => {
    let result = [...nfts];

    // Apply search filter
    if (searchTerm) {
      result = result.filter(
        nft =>
          nft.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          nft.artist.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply genre filter
    if (selectedGenre !== "All") {
      result = result.filter(nft => nft.genre === selectedGenre);
    }

    // Apply price range filter
    result = result.filter(
      nft => {
        const price = parseFloat(nft.price);
        return price >= priceRange[0] && price <= priceRange[1];
      }
    );

    // Apply sorting
    result.sort((a, b) => {
      switch (selectedSort) {
        case "Price: Low to High":
          return parseFloat(a.price) - parseFloat(b.price);
        case "Price: High to Low":
          return parseFloat(b.price) - parseFloat(a.price);
        case "Most Popular":
          // For now, just return 0 as we don't have popularity data
          return 0;
        default: // "Newest First"
          return 0;
      }
    });

    setFilteredNFTs(result);
  }, [searchTerm, selectedGenre, selectedSort, priceRange, nfts]);

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
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full h-11 pl-11 pr-4 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all outline-none text-sm backdrop-blur-xl"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
              )}
            </div>

            <Sheet>
              <SheetTrigger asChild>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="h-11 px-4 rounded-xl glass hover:bg-white/10 transition-colors flex items-center gap-2"
                >
                  <Filter className="w-5 h-5" />
                  <span className="hidden md:inline">Filter</span>
                </motion.button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Filter NFTs</SheetTitle>
                </SheetHeader>
                <div className="py-6 space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Genre</h3>
                    <div className="flex flex-wrap gap-2">
                      {genres.map((genre) => (
                        <Button
                          key={genre}
                          variant={selectedGenre === genre ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedGenre(genre)}
                          className="rounded-full"
                        >
                          {genre}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Price Range (ETH)</h3>
                    <Slider
                      defaultValue={[0, 5]}
                      max={5}
                      step={0.1}
                      value={priceRange}
                      onValueChange={setPriceRange}
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>{priceRange[0]} ETH</span>
                      <span>{priceRange[1]} ETH</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Sort By</h3>
                    <div className="flex flex-col gap-2">
                      {sortOptions.map((option) => (
                        <Button
                          key={option}
                          variant={selectedSort === option ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedSort(option)}
                          className="justify-start"
                        >
                          {option}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* NFT Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNFTs.length > 0 ? (
            filteredNFTs.map((nft, index) => (
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
      </motion.div>
    </section>
  );
};

export default FeaturedNFTs;
