import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { SERVICES } from '../constants';
import { ArrowUpRight } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <Section id="services" className="border-t border-white/5">
      <div className="mb-20 md:flex justify-between items-end">
        <div>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">Our Expertise</h2>
          <p className="text-gray-400 max-w-md">Comprehensive interior solutions manufactured, procured, and installed with precision.</p>
        </div>
        <div className="hidden md:block">
          <span className="text-royal-gold text-sm tracking-widest uppercase border-b border-royal-gold pb-1">Full Service Portfolio</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 h-auto md:h-[800px]">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`group relative overflow-hidden bg-royal-surface border border-white/5 ${service.colSpan || ''} ${service.rowSpan || ''}`}
          >
            {/* Image Background */}
            <div className="absolute inset-0">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 bg-royal-gold/10 rounded-full text-royal-gold mb-2 backdrop-blur-sm">
                    <service.icon size={20} />
                  </div>
                  <ArrowUpRight className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <h3 className="font-serif text-2xl text-white mb-2">{service.title}</h3>
                <p className="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
                  {service.description}
                </p>
              </div>
            </div>
            
            {/* Hover Border Effect */}
            <div className="absolute inset-0 border border-royal-gold/0 group-hover:border-royal-gold/50 transition-colors duration-500 pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
};