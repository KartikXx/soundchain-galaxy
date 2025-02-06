import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "./ui/button";
import { Moon, Sun, Wallet, Search } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);
  const height = useTransform(scrollY, [0, 100], ["5rem", "4rem"]);

  useEffect(() => {
    const unsubscribe = scrollY.onChange(latest => {
      setIsScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "glass" : "bg-transparent"
      }`}
      style={{ height }}
    >
      <motion.div 
        className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between"
        style={{ opacity: isScrolled ? opacity : 1 }}
      >
        <motion.div 
          className="text-2xl font-bold gradient-text"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          SoundChain
        </motion.div>

        <div className="hidden md:flex items-center space-x-6">
          <NavLink href="#explore">Explore NFTs</NavLink>
          <NavLink href="#charts">Charts</NavLink>
          <NavLink href="#create">Create</NavLink>
          <NavLink href="#about">About</NavLink>
        </div>

        <div className="flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full hover:bg-white/10"
          >
            <Search className="w-5 h-5" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full hover:bg-white/10"
          >
            <Moon className="w-5 h-5" />
          </motion.button>

          <Button 
            size="sm"
            className="bg-primary/20 backdrop-blur-sm border border-primary/20 hover:bg-primary/30"
          >
            <Wallet className="w-4 h-4 mr-2" />
            Connect Wallet
          </Button>
        </div>
      </motion.div>
    </motion.nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <motion.a
    href={href}
    className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.a>
);

export default Navigation;