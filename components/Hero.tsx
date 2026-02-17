import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-royal-gold/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-blue-900/10 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-12 gap-12 items-center">
        
        {/* Typography Content - Left */}
        <div className="md:col-span-7 z-10 flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block py-1 px-3 border border-white/10 rounded-full bg-white/5 text-royal-gold text-xs font-bold uppercase tracking-widest mb-6">
              Jaipur's Finest Interiors
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-royal-ivory leading-[0.9] tracking-tight">
              Crafting <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-gold via-yellow-200 to-royal-gold">Royal</span>
              <br /> Legacies.
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed border-l-2 border-royal-gold/30 pl-6"
          >
            From bespoke modular kitchens to opulent flooring. 
            We blend architectural integrity with luxury aesthetics 
            to transform your vision into reality.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
              Book Appointment <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="outline" onClick={() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})}>
              Explore Work
            </Button>
          </motion.div>
        </div>

        {/* Visual Hero - Right */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-5 relative h-[500px] md:h-[700px] w-full"
        >
          {/* Main Image */}
          <div className="absolute inset-0 rounded-none md:rounded-tl-[100px] overflow-hidden border-r border-b border-royal-gold/20">
            <img 
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop" 
              alt="Luxury Interior" 
              className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-1000 grayscale-[20%] hover:grayscale-0"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-royal-black via-transparent to-transparent opacity-80" />
          </div>

          {/* Floating Badge */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="absolute bottom-12 left-0 md:-left-12 glass-panel p-6 max-w-[240px]"
          >
            <p className="font-serif text-2xl text-royal-gold mb-1">15+</p>
            <p className="text-xs uppercase tracking-wider text-gray-300">Years of transforming spaces in Rajasthan</p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};