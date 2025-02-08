
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";
import { Slider } from "../ui/slider";

interface FilterSheetProps {
  selectedGenre: string;
  setSelectedGenre: (genre: string) => void;
  selectedSort: string;
  setSelectedSort: (sort: string) => void;
  priceRange: number[];
  setPriceRange: (range: number[]) => void;
  genres: string[];
  sortOptions: string[];
  children: React.ReactNode;
}

const FilterSheet = ({
  selectedGenre,
  setSelectedGenre,
  selectedSort,
  setSelectedSort,
  priceRange,
  setPriceRange,
  genres,
  sortOptions,
  children
}: FilterSheetProps) => {
  return (
    <Sheet>
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
  );
};

export default FilterSheet;
