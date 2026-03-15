import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import ScrollFloat from './ScrollFloat';

const images = [
  { url: 'https://i.imgur.com/YFftmwD.jpeg' },
  { url: 'https://i.imgur.com/hOHJEKZ.jpeg' },
  { url: 'https://i.imgur.com/OcX9X2L.jpeg' },
  { url: 'https://i.imgur.com/37gAt38.jpeg', position: 'center top' },
  { url: 'https://i.imgur.com/74UIx8k.jpeg', position: '80% top' },
];

export const Gallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Scroll handling is now native
  }, []);

  return (
    <section id="galerie" className="bg-noir py-32 overflow-hidden">
      <div className="px-6 mb-16">
        <ScrollFloat
          as="h2"
          containerClassName="text-7xl uppercase leading-none md:text-9xl"
          textClassName="text-offwhite"
        >
          Galerie
        </ScrollFloat>
      </div>

      <div
        ref={containerRef}
        className="relative"
      >
        <div
          data-lenis-prevent="true"
          className="flex gap-8 px-6 overflow-x-auto snap-x snap-mandatory scrollbar-premium pb-8"
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="min-w-[300px] md:min-w-[600px] aspect-[16/9] overflow-hidden snap-center"
            >
              <img
                src={img.url}
                alt={`Gallery ${index}`}
                className="h-full w-full object-cover pointer-events-none grayscale hover:grayscale-0 transition-all duration-700"
                style={{ objectPosition: img.position || 'center' }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-12 px-6 flex justify-end">
        <div className="flex items-center gap-4">
          <span className="text-[10px] font-bold tracking-[0.3em] text-gradient-gold">GLISSER POUR EXPLORER</span>
          <div className="h-[1px] w-24 bg-gradient-gold" />
        </div>
      </div>
    </section>
  );
};
