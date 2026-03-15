import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-noir py-20 px-6 border-t border-offwhite/5">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-4 items-start">
          <div className="flex flex-col gap-4">
            <div>
              <h2 className="text-3xl font-display font-bold tracking-widest text-offwhite mb-1 leading-none">L'UNIVERS DU SOIN</h2>
              <p className="text-[10px] font-bold tracking-[0.2em] text-offwhite/40 uppercase">Barbershop - Salon de coiffure</p>
            </div>
            <p className="max-w-sm text-sm text-offwhite/50 leading-relaxed">
              L'excellence du toilettage masculin. Un lieu dédié à l'homme moderne en quête de perfection et de détente.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] text-offwhite mb-6 uppercase">Horaires</h4>
            <ul className="space-y-6 text-sm">
              <li className="flex flex-col gap-1">
                <span className="text-[10px] font-bold tracking-widest text-offwhite/30 flex items-center gap-2 uppercase">
                  <span>🕘</span> Lundi
                </span>
                <span className="text-offwhite/70">11h00 — 19h30</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-[10px] font-bold tracking-widest text-offwhite/30 flex items-center gap-2 uppercase">
                  <span>🕘</span> Mardi — Samedi
                </span>
                <span className="text-offwhite/70">10h00 — 19h30</span>
              </li>
              <li className="flex flex-col gap-1 opacity-40 italic">
                <span className="text-[10px] font-bold tracking-widest text-offwhite/30 flex items-center gap-2 uppercase">
                  <span>🕘</span> Dimanche
                </span>
                <span className="text-offwhite/70">Fermé</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] text-offwhite mb-6 uppercase">Localisation</h4>
            <ul className="space-y-6 text-sm">
              <li className="flex flex-col gap-1">
                <span className="text-[10px] font-bold tracking-widest text-offwhite/30 flex items-center gap-2 uppercase">
                  <span>📍</span> Boutique
                </span>
                <span className="text-offwhite/70 leading-relaxed">
                  52 rue Marcel Lefèvre,<br />
                  27700 Les Andelys
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] text-offwhite mb-6 uppercase">Contact</h4>
            <ul className="space-y-6 text-sm">
              <li className="flex flex-col gap-1">
                <span className="text-[10px] font-bold tracking-widest text-offwhite/30 flex items-center gap-2 uppercase">
                  <span>📞</span> Téléphone
                </span>
                <span className="text-offwhite/70 font-medium whitespace-nowrap">09 78 81 12 54</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-[10px] font-bold tracking-widest text-offwhite/30 flex items-center gap-2 uppercase">
                  <span>📅</span> Réservations
                </span>
                <a
                  href="https://www.planity.com/a-definir-27700-les-andelys/reservation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-offwhite font-bold hover:text-gold transition-colors underline underline-offset-4"
                >
                  Prise de RDV sur Planity
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-offwhite/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold tracking-[0.2em] text-offwhite/30">
            © 2024 L’UNIVERS DU SOIN. TOUS DROITS RÉSERVÉS.
          </p>
          <div className="flex gap-8 text-[10px] font-bold tracking-[0.2em] text-offwhite/30">
            <a
              href="https://www.instagram.com/l_universdusoin"
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-colors"
            >
              <span className="transition-all group-hover:text-gradient-gold">INSTAGRAM</span>
            </a>
            <a
              href="https://www.facebook.com/p/LUnivers-du-Soin-61552230193541/"
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-colors"
            >
              <span className="transition-all group-hover:text-gradient-gold">FACEBOOK</span>
            </a>
            <a href="#" className="group transition-colors">
              <span className="transition-all group-hover:text-gradient-gold">MENTIONS LÉGALES</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
