
import { motion } from "framer-motion";
import { Filter } from "lucide-react";
import { useState, useEffect } from "react";
import { NFT } from "../types/nft";
import FilterSheet from "./featured/FilterSheet";
import SearchBar from "./featured/SearchBar";
import NFTGrid from "./featured/NFTGrid";
import { SheetTrigger } from "./ui/sheet";

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

    if (searchTerm) {
      result = result.filter(
        nft =>
          nft.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          nft.artist.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedGenre !== "All") {
      result = result.filter(nft => nft.genre === selectedGenre);
    }

    result = result.filter(
      nft => {
        const price = parseFloat(nft.price);
        return price >= priceRange[0] && price <= priceRange[1];
      }
    );

    result.sort((a, b) => {
      switch (selectedSort) {
        case "Price: Low to High":
          return parseFloat(a.price) - parseFloat(b.price);
        case "Price: High to Low":
          return parseFloat(b.price) - parseFloat(a.price);
        case "Most Popular":
          return 0;
        default:
          return 0;
      }
    });

    setFilteredNFTs(result);
  }, [searchTerm, selectedGenre, selectedSort, priceRange, nfts]);

  return (
    <section className="py-20 px-4 relative overflow-hidden">
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
          
          <div className="flex items-center gap-4 w-full md:w-auto">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

            <FilterSheet
              selectedGenre={selectedGenre}
              setSelectedGenre={setSelectedGenre}
              selectedSort={selectedSort}
              setSelectedSort={setSelectedSort}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              genres={genres}
              sortOptions={sortOptions}
            >
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
            </FilterSheet>
          </div>
        </div>

        <NFTGrid nfts={filteredNFTs} />
      </motion.div>
    </section>
  );
};

export default FeaturedNFTs;
