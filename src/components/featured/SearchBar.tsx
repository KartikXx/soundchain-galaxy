
import { Search, X } from "lucide-react";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const SearchBar = ({ searchTerm, setSearchTerm }: SearchBarProps) => {
  return (
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
  );
};

export default SearchBar;
