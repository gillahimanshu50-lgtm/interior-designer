import React from 'react';
import { Section } from './ui/Section';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <Section id="testimonials">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="font-serif text-4xl text-white mb-4">Client Voices</h2>
        <div className="w-24 h-1 bg-royal-gold mx-auto" />
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t) => (
          <div key={t.id} className="bg-royal-surface p-8 border border-white/5 relative group hover:-translate-y-2 transition-transform duration-300">
            <Quote className="absolute top-6 right-6 text-royal-gold/20 w-10 h-10 group-hover:text-royal-gold/40 transition-colors" />
            
            <p className="text-gray-400 mb-8 italic relative z-10 leading-relaxed">"{t.content}"</p>
            
            <div className="flex items-center gap-4">
              <img 
                src={t.image} 
                alt={t.name} 
                className="w-12 h-12 rounded-full border-2 border-royal-gold/30 object-cover" 
              />
              <div>
                <h5 className="text-white font-medium">{t.name}</h5>
                <p className="text-xs text-royal-gold uppercase tracking-wider">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};