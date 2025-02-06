import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const AnimatedBackground = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!backgroundRef.current) return;
    
    // Add mousemove parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) * 100;
      const y = (clientY / window.innerHeight) * 100;
      
      if (backgroundRef.current) {
        backgroundRef.current.style.background = `
          radial-gradient(circle at ${x}% ${y}%, 
            rgba(139, 92, 246, 0.3) 0%,
            rgba(217, 70, 239, 0.2) 25%,
            rgba(14, 165, 233, 0.1) 50%,
            rgba(30, 41, 59, 0.8) 100%)
        `;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div 
        ref={backgroundRef}
        className="fixed inset-0 transition-all duration-1000 ease-out"
      />
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCI+PGNpcmNsZSBjeD0iMTUiIGN5PSIxNSIgcj0iMC41IiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiLz48L3N2Zz4=')] opacity-20" />
      <motion.div
        className="fixed inset-0 mix-blend-overlay"
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 100%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 0%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 0%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)",
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </>
  );
};

export default AnimatedBackground;