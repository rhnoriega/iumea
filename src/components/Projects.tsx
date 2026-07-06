import React from 'react';
import { motion } from 'motion/react';
import anatoliaImg from '../assets/images/anatolia_popup_scene_1783157003730.jpg';

export default function Projects() {
  const column1 = [
    'STANLEY PUBS',
    'HALF CUT MARKET',
    'OMA RESTAURANT',
    'NAKED RABBIT',
    "LEO'S BAR & RESTAURANT",
    'MURAT & BILGE POP-UP',
    'FICCIN RESTAURANT'
  ];

  const column2 = [
    "STOKEY'S DELI",
    'FIKA HACKNEY',
    'MANGAL 2',
    'SAGE KITCHEN',
    'LA MAISON HIGHBURY',
    'THE FINSBURY PUB',
    'ONE BROADWAY MARKET',
    'THE OLD MILL FIRE STATION RESTAURANT'
  ];

  const column3 = [
    'THE GUNNERS PUB',
    'COZZO ITALIAN',
    'CINNAMON VILLAGE CAFE',
    'HARVEST N5',
    'THE BLUE LEGUME',
    'NENNO ITALIAN',
    'NOYA'
  ];

  const featuredProjects = [
    "PARTY LIKE IT'S ANATOLIA POP-UP",
    "LEO'S SUPPER CLUB @HYDE LONDON CITY",
    'THE OLDMILL FIRE STATION RESTAURANT',
    'CINNAMON VILLAGE WHOLEFOODS & DELI'
  ];

  return (
    <section 
      className="py-24 bg-[#fcaf17] text-[#032e57] relative overflow-hidden" 
      id="projects"
    >
      {/* Decorative organic shapes */}
      <div className="absolute top-0 inset-x-0 h-4 bg-gradient-to-b from-black/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title Heading mirroring screenshot style */}
        <div className="text-center mb-16">
          <span className="text-[10px] font-mono tracking-[0.3em] text-[#032e57]/70 uppercase block mb-2">
            CLIENT VENUES & ENGAGEMENTS
          </span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif font-black text-5xl sm:text-6xl md:text-7xl tracking-tight uppercase text-[#032e57] mb-2"
          >
            Projects
          </motion.h2>
          <div className="h-1 w-20 bg-[#fe4515] mx-auto mt-4 rounded" />
        </div>

        {/* 3 Column Grid for Venues */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-8 md:gap-x-12 lg:gap-x-16 mb-20 max-w-5xl mx-auto">
          
          {/* Column 1 */}
          <div className="space-y-4 text-center md:text-left">
            {column1.map((project, idx) => (
              <motion.div
                key={project}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <p className="font-display font-extrabold text-lg sm:text-xl md:text-2xl tracking-wide text-[#fe4515]">
                  {project}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="space-y-4 text-center md:text-left">
            {column2.map((project, idx) => (
              <motion.div
                key={project}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <p className="font-display font-extrabold text-lg sm:text-xl md:text-2xl tracking-wide text-[#fe4515]">
                  {project}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Column 3 */}
          <div className="space-y-4 text-center md:text-left">
            {column3.map((project, idx) => (
              <motion.div
                key={project}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <p className="font-display font-extrabold text-lg sm:text-xl md:text-2xl tracking-wide text-[#fe4515]">
                  {project}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Featured popups and image grid underneath */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto border-t border-[#032e57]/15 pt-16">
          
          {/* Photo Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-2xl max-w-sm w-full overflow-hidden group"
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src={anatoliaImg}
                  alt="Party like it's Anatolia pop-up dining setup"
                  className="w-full h-full object-cover grayscale-[10%] contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </div>
              <div className="pt-3 px-1 flex justify-between items-center text-[10px] font-mono text-[#032e57]/80">
                <span>LONDON POP-UP ARCHIVE</span>
                <span>EST. 2024</span>
              </div>
            </motion.div>
          </div>

          {/* Featured highlights right side list */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left lg:pl-6">
            <span className="text-[10px] font-mono tracking-[0.2em] text-[#032e57]/70 uppercase block mb-1">
              FEATURED POP-UPS & SPECIAL LAUNCHES
            </span>
            
            <div className="space-y-4">
              {featuredProjects.map((fProject, idx) => (
                <motion.div
                  key={fProject}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-center justify-center lg:justify-start gap-3"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#fe4515]" />
                  <p className="font-display font-black text-lg sm:text-xl md:text-2xl text-[#fe4515] tracking-wide uppercase">
                    {fProject}
                  </p>
                </motion.div>
              ))}
            </div>

            <p className="text-[#032e57]/80 text-xs sm:text-sm max-w-md pt-4 font-sans leading-relaxed mx-auto lg:mx-0">
              Specialized food activations, international kitchen takeovers, and high-intensity culinary concepts designed and curated globally by Bilge.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
