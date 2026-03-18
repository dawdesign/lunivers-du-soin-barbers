import React from 'react';
import { motion } from 'motion/react';
import { MoveRight } from 'lucide-react';
import ScrollFloat from './ScrollFloat';

const services = [
  { name: 'Shampoing + Coupe', emoji: '✂️', price: '20€', duration: '30 min', desc: 'Soin capillaire complet avec coupe personnalisée.' },
  { name: 'Coupe + Barbe Sculptée', emoji: '🪒', price: '25€', duration: '30 min', desc: 'Le combo parfait pour une allure soignée et précise.' },
  { name: 'Rasage du crâne + Barbe', emoji: '👨‍🦲', price: '20€', duration: '30 min', desc: 'Un rasage traditionnel pour un style net et affirmé.' },
  { name: 'Shampoing + coupe + barbe', emoji: '🧔', price: '28€', duration: '45 min', desc: 'L\'essentiel du grooming masculin en une séance.' },
  {
    name: 'Rituel Royal Barbe',
    emoji: '👑',
    price: '30€',
    duration: '1h',
    desc: 'Diagnostic, Baume avant rasage, Serviette chaude, Rasage au coupe-chou et Massage.'
  },
  {
    name: 'Expérience Ultime',
    emoji: '🧖‍♂️',
    price: '45€',
    duration: '1h 15min',
    desc: 'Rituel barbe complet agrémenté d\'un soin vapeur et d\'une pose de masque purifiant.'
  },
];

export const Services = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [constraints, setConstraints] = React.useState({ left: 0, right: 0 });
  const [hasScrolledCards, setHasScrolledCards] = React.useState(false);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (e.currentTarget.scrollLeft > 20 && !hasScrolledCards) {
      setHasScrolledCards(true);
    }
  };

  React.useEffect(() => {
    // Scroll handling is now native
  }, []);

  return (
    <section id="services" className="bg-noir py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end text-offwhite">
          <div>
            <ScrollFloat
              as="h2"
              containerClassName="text-7xl uppercase leading-none md:text-9xl"
              textClassName="text-offwhite"
            >
              Prestations
            </ScrollFloat>
            <p className="mt-4 max-w-md text-offwhite/50">Des prestations sur mesure pour une allure impeccable au quotidien.</p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-3 md:text-right">
            <span className="text-xs font-bold tracking-[0.3em] text-gradient-gold">MENU DE SOINS</span>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: hasScrolledCards ? 0 : 1 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-widest text-offwhite/50 uppercase"
            >
              <span>Faire défiler</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <MoveRight className="w-3 h-3 md:w-4 md:h-4" />
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="relative py-10 -my-10 px-6 -mx-6 md:px-20 md:-mx-20">
          <div
            ref={containerRef}
            onScroll={handleScroll}
            data-lenis-prevent="true"
            className="flex gap-4 md:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-premium py-4 px-4 pb-8"
          >
            {services.map((service, index) => (
              <div
                key={service.name}
                className="group relative flex-none w-[85vw] md:w-[380px] border-gradient-gold rounded-[40px] p-8 md:p-10 transition-transform hover:scale-[1.05] z-0 hover:z-10 snap-center"
              >
                <div className="flex flex-col gap-6 h-full pointer-events-none text-offwhite">
                  <div className="text-5xl md:text-6xl mb-4">{service.emoji}</div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight uppercase leading-tight text-white">{service.name}</h3>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] md:text-xs font-bold tracking-widest text-offwhite/40 uppercase">{service.duration}</span>
                      <div className="h-1 w-1 rounded-full bg-offwhite/20" />
                      <span className="text-lg font-display text-white whitespace-nowrap">{service.price}</span>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-offwhite/60 leading-relaxed font-medium">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
            {/* Added spacer to allow last card to clear the gradient */}
            <div className="flex-none w-20 md:w-40 h-full" />
          </div>
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-noir to-transparent z-10 hidden md:block" />
        </div>
      </div>
    </section>
  );
};
