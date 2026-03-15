import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useMagnetic } from '../hooks/useMagnetic';
import { cn } from '../lib/utils';

export const Header = () => {
  const magneticRef = useMagnetic();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['SERVICES', 'BARBIERS', 'GALERIE', 'AVIS'];

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full px-6 md:px-12 transition-all duration-300 border-b",
        scrolled
          ? "bg-noir/95 backdrop-blur-md py-4 shadow-xl border-offwhite/10"
          : "bg-transparent py-8 border-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-12">
          <a href="#" className="flex-none">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="https://i.imgur.com/lMpBOBY.png"
              alt="L'univers du soin"
              className="h-10 md:h-14 w-auto"
            />
          </a>
          <nav className="hidden items-center gap-12 text-[10px] font-bold tracking-[0.3em] lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="group transition-colors text-offwhite/70 hover:text-white"
              >
                <span className="relative">
                  {item}
                  <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-gradient-gold transition-all group-hover:w-full" />
                </span>
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center ml-auto">
          <div ref={magneticRef as any}>
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="group px-4 md:px-8 py-3 rounded-xl text-[9px] md:text-[10px] font-bold tracking-[0.2em] text-noir bg-gradient-gold shadow-lg shadow-gold/20 transition-all duration-300 whitespace-nowrap"
              onClick={() => window.open('https://www.planity.com/a-definir-27700-les-andelys/reservation', '_blank')}
            >
              RÉSERVER SUR PLANITY
            </motion.button>
          </div>
        </div>
      </div>
    </header>
  );
};
