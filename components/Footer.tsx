import React from 'react';
import { BUSINESS_INFO } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-serif text-2xl text-white font-bold">Classic<span className="text-royal-gold">Inter</span>Decor</h3>
          <p className="text-gray-500 text-sm mt-2">© {new Date().getFullYear()} All Rights Reserved.</p>
        </div>
        
        <div className="flex gap-8 text-sm uppercase tracking-widest text-gray-500">
          <a href="#" className="hover:text-royal-gold transition-colors">Privacy</a>
          <a href="#" className="hover:text-royal-gold transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};