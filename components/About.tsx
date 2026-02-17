import React from 'react';
import { Section } from './ui/Section';
import { Check } from 'lucide-react';

export const About: React.FC = () => {
  const trustPoints = [
    "Full-Service Design & Installation",
    "Custom Material Manufacturing",
    "Residential & Commercial Expertise",
    "Transparent Pricing & Timelines"
  ];

  return (
    <Section id="about" bg="charcoal">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-royal-gold/50" />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-royal-gold/50" />
          
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
            alt="Workspace" 
            className="w-full grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl shadow-black/50"
          />
          
          <div className="absolute -bottom-10 right-10 bg-royal-black p-6 border border-white/10 max-w-xs shadow-xl hidden md:block">
            <p className="font-serif italic text-gray-400">
              "We design to express the interrelationships between architecture, place, and form."
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-royal-gold uppercase tracking-widest text-sm font-bold mb-4">About Classic Inter Decor</h4>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">
            Responsive to your vision. <br />
            Committed to <span className="text-royal-gold">Excellence.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Classic Inter Decor is all about enhancing the beauty of your property, ranging from residential havens to functional office interiors. We don't just decorate; we provide total solutions with transformative skills.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {trustPoints.map((point, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="bg-royal-gold/20 p-1 rounded-full text-royal-gold">
                  <Check size={14} />
                </div>
                <span className="text-gray-300 text-sm">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};