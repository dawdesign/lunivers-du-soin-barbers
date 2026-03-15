import { motion } from 'motion/react';

export const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax effect via motion */}
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://i.imgur.com/iJjzC4h.jpeg"
          alt="Barbershop"
          className="h-full w-full object-cover brightness-[0.4]"
        />
      </motion.div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-noir/60 via-transparent to-noir" />

      {/* Content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="flex flex-col items-center gap-6"
        >
          <img
            src="https://i.imgur.com/lMpBOBY.png"
            alt="L'univers du soin Logo"
            className="w-40 md:w-80 h-auto"
          />
          <h1 className="font-script text-4xl md:text-8xl text-offwhite mt-2 -rotate-2 select-none">
            L'univers du soin
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: [0, 10, 0]
          }}
          transition={{
            opacity: { delay: 1.5, duration: 1 },
            y: {
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
              delay: 2.5
            }
          }}
          className="mt-20 md:mt-0 md:absolute md:bottom-12"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="h-16 md:h-24 w-[1px] bg-gradient-to-b from-offwhite to-transparent" />
            <span className="text-[10px] font-bold tracking-[0.3em] text-offwhite uppercase">SCROLL</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
