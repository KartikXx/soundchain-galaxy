
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "./ui/button";
import { Moon, Sun, Wallet, Search, LogOut } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true';
    }
    return false;
  });
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [balance, setBalance] = useState("");
  
  const { toast } = useToast();
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);
  const height = useTransform(scrollY, [0, 100], ["5rem", "4rem"]);

  // Dark mode effect
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode]);

  // Scroll effect
  useEffect(() => {
    const unsubscribe = scrollY.onChange(latest => {
      setIsScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ 
          method: 'eth_requestAccounts' 
        });
        const address = accounts[0];
        setWalletAddress(address);
        setIsWalletConnected(true);
        
        // Get ETH balance
        const balance = await window.ethereum.request({ 
          method: 'eth_getBalance',
          params: [address, 'latest']
        });
        const ethBalance = (parseInt(balance, 16) / 1e18).toFixed(4);
        setBalance(ethBalance);
        
        toast({
          title: "Wallet Connected",
          description: "Successfully connected to your wallet!",
        });
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Connection Failed",
          description: "Failed to connect wallet. Please try again.",
        });
      }
    } else {
      toast({
        variant: "destructive",
        title: "MetaMask Not Found",
        description: "Please install MetaMask to connect your wallet.",
      });
    }
  };

  const disconnectWallet = () => {
    setIsWalletConnected(false);
    setWalletAddress("");
    setBalance("");
    toast({
      title: "Wallet Disconnected",
      description: "Your wallet has been disconnected.",
    });
  };

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
            onClick={toggleDarkMode}
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </motion.button>

          {isWalletConnected ? (
            <div className="flex items-center space-x-4">
              <div className="text-sm">
                <span className="text-muted-foreground">
                  {balance} ETH
                </span>
                <p className="font-medium">
                  {`${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`}
                </p>
              </div>
              <Button 
                size="sm"
                variant="outline"
                className="border-destructive/20 hover:bg-destructive/20"
                onClick={disconnectWallet}
              >
                <LogOut className="w-4 h-4 mr-2" />
                Disconnect
              </Button>
            </div>
          ) : (
            <Button 
              size="sm"
              className="bg-primary/20 backdrop-blur-sm border border-primary/20 hover:bg-primary/30 neon-glow"
              onClick={connectWallet}
            >
              <Wallet className="w-4 h-4 mr-2" />
              Connect Wallet
            </Button>
          )}
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
