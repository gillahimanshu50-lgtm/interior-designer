import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  bg?: 'black' | 'charcoal';
}

export const Section: React.FC<SectionProps> = ({ id, className = '', children, bg = 'black' }) => {
  const bgClass = bg === 'charcoal' ? 'bg-royal-charcoal' : 'bg-royal-black';
  
  return (
    <section id={id} className={`relative py-24 md:py-32 px-6 md:px-12 overflow-hidden ${bgClass} ${className}`}>
      <div className="max-w-7xl mx-auto relative z-10">
        {children}
      </div>
    </section>
  );
};