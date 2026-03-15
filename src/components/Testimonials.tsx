import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import ScrollFloat from './ScrollFloat';

const reviews = [
  {
    name: 'Jerome S.',
    text: 'Très bon barbier, accueil sympathique et professionnel. Je recommande vivement.',
    date: 'il y a 2 semaines',
    rating: 5
  },
  {
    name: 'Kevin D.',
    text: 'Super barbier, j\'y vais depuis des années jamais déçu. Équipe au top.',
    date: 'il y a 1 mois',
    rating: 5
  },
  {
    name: 'Adeline H.',
    text: 'Salon au top, une équipe très professionnelle et à l\'écoute. Je recommande à 100%.',
    date: 'il y a 3 mois',
    rating: 5
  },
  {
    name: 'Christophe G.',
    text: 'Toujours au top, jamais déçu depuis l\'ouverture. Accueil et prestation de qualité.',
    date: 'il y a 2 mois',
    rating: 5
  },
  {
    name: 'Dylan B.',
    text: 'Meilleur barbier des Andelys, équipe très pro et salon magnifique.',
    date: 'il y a 1 semaine',
    rating: 5
  },
  {
    name: 'Florian G.',
    text: 'Superbe salon ! Une équipe de professionnels qui sait de quoi elle parle. Je recommande.',
    date: 'il y a 4 mois',
    rating: 5
  }
];

export const Testimonials = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="avis" className="bg-noir py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 md:mb-20 flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-0.5 text-[#fbbf24]">
              {[...Array(5)].map((_, i) => <Star key={i} size={isMobile ? 16 : 20} fill="currentColor" stroke="none" />)}
            </div>
            <span className="text-offwhite font-bold ml-2 text-sm md:text-base">4.9/5</span>
          </div>
          <ScrollFloat
            as="h2"
            containerClassName="text-6xl uppercase leading-none md:text-8xl"
            textClassName="text-offwhite"
          >
            Votre avis compte
          </ScrollFloat>
          <p className="mt-4 text-sm md:text-base text-offwhite/50 px-4 md:px-0">Ce que nos clients disent de nous sur Google.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 flex flex-col gap-4 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-noir/5 flex items-center justify-center text-noir/40 font-bold text-sm">
                  {review.name.charAt(0)}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-noir">{review.name}</span>
                  <span className="text-[10px] text-noir/40 font-medium">{review.date}</span>
                </div>
                <div className="ml-auto flex items-center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png"
                    alt="Google"
                    className="w-4 h-4"
                  />
                </div>
              </div>

              <div className="flex gap-0.5 text-[#fbbf24]">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" stroke="none" />
                ))}
              </div>

              <p className="text-noir/80 text-sm leading-relaxed line-clamp-4">
                "{review.text}"
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="https://www.google.com/search?q=L%27univers+du+soin+Les+Andelys"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-bold tracking-[0.2em] text-offwhite/30 hover:text-offwhite transition-colors"
          >
            LIRE TOUS LES AVIS SUR GOOGLE →
          </a>
        </div>
      </div>
    </section>
  );
};
