import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-royal-black/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex flex-col">
          <a href="#" className="font-serif text-2xl md:text-3xl font-bold text-royal-gold tracking-tighter">
            Classic<span className="text-white">Inter</span>Decor
          </a>
          <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 hidden md:block">
            Royal Luxury Interiors
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm uppercase tracking-widest text-gray-300 hover:text-royal-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-2 px-5 py-2 border border-royal-gold/30 rounded-full text-royal-gold hover:bg-royal-gold hover:text-black transition-all"
          >
            <Phone size={16} />
            <span className="text-xs font-bold tracking-wider">Call Now</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-royal-black/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-6 md:hidden shadow-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-serif text-white hover:text-royal-gold"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`} 
            className="w-full text-center py-4 bg-royal-gold text-black font-bold uppercase tracking-widest"
          >
            Book Consultation
          </a>
        </div>
      )}
    </nav>
  );
};