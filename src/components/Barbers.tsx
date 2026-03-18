import React from 'react';
import { motion } from 'motion/react';
import ScrollFloat from './ScrollFloat';
import { TiltedCard } from './TiltedCard';

const barbers = [
  {
    name: 'Flo',
    role: 'Maître Barbier',
    image: 'https://i.imgur.com/Q0Gc1k1.jpeg',
    desc: 'Spécialiste des coupes classiques et du rasage à l\'ancienne.'
  },
  {
    name: 'Ilias',
    role: 'Styliste Visagiste',
    image: 'https://i.imgur.com/4rGV0zD.jpeg',
    desc: 'Expert en dégradés modernes et designs créatifs.'
  },
  {
    name: 'Soulymane',
    role: 'Expert Barbier',
    image: 'https://i.imgur.com/1Ur5PWG.jpeg',
    desc: 'Maître des coupes précises et du style contemporain.'
  },
];

export const Barbers = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const cardHeight = isMobile ? "400px" : "500px";

  return (
    <section id="barbiers" className="bg-charcoal py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <ScrollFloat
            as="h2"
            containerClassName="text-7xl uppercase leading-none md:text-9xl"
            textClassName="text-offwhite"
          >
            Nos coiffeurs
          </ScrollFloat>
          <p className="mx-auto mt-4 max-w-xl text-offwhite/50">Rencontrez l'équipe qui redéfinit les standards de la coiffure.</p>
        </div>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {barbers.map((barber, index) => (
            <motion.div
              key={barber.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col"
            >
              <TiltedCard
                imageSrc={barber.image}
                altText={barber.name}
                captionText={barber.name}
                containerHeight={cardHeight}
                imageHeight={cardHeight}
                rotateAmplitude={12}
                scaleOnHover={1.03}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
