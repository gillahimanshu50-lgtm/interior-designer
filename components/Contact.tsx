import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { BUSINESS_INFO, WORKING_HOURS } from '../constants';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <Section id="contact" bg="charcoal">
      <div className="grid lg:grid-cols-2 gap-16">
        
        {/* Info Column */}
        <div className="flex flex-col gap-10">
          <div>
            <h2 className="font-serif text-5xl text-white mb-6">Let's Create <br />Something Timeless.</h2>
            <p className="text-gray-400 text-lg">
              Ready to transform your space? Contact us for a consultation or visit our showroom in Raja Park.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-royal-gold/10 text-royal-gold rounded-sm">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Visit Us</h4>
                <p className="text-gray-400 text-sm max-w-xs">{BUSINESS_INFO.address}</p>
                <a href={BUSINESS_INFO.googleMapLink} target="_blank" rel="noreferrer" className="text-royal-gold text-xs uppercase font-bold mt-2 inline-block border-b border-royal-gold hover:text-white hover:border-white transition-colors">Get Directions</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-royal-gold/10 text-royal-gold rounded-sm">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Call Us</h4>
                <p className="text-gray-400 text-sm">{BUSINESS_INFO.phone}</p>
                <p className="text-gray-500 text-xs mt-1">Available on WhatsApp</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-royal-gold/10 text-royal-gold rounded-sm">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Working Hours</h4>
                <ul className="text-gray-400 text-sm space-y-1">
                  {WORKING_HOURS.map((wh, idx) => (
                    <li key={idx} className="flex justify-between w-full min-w-[200px]">
                      <span>{wh.day}</span>
                      <span className="text-white">{wh.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Form & Map Column */}
        <div className="space-y-8">
          {/* Functional-looking Form */}
          <form className="bg-royal-black p-8 border border-white/5 space-y-6" onSubmit={(e) => e.preventDefault()}>
            <h3 className="text-white text-xl font-serif">Quick Inquiry</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 md:col-span-1">
                <label className="block text-xs uppercase text-gray-500 mb-2">Name</label>
                <input type="text" className="w-full bg-royal-surface border border-white/10 p-3 text-white focus:border-royal-gold outline-none transition-colors" placeholder="Your Name" />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="block text-xs uppercase text-gray-500 mb-2">Phone</label>
                <input type="tel" className="w-full bg-royal-surface border border-white/10 p-3 text-white focus:border-royal-gold outline-none transition-colors" placeholder="Contact Number" />
              </div>
              <div className="col-span-2">
                <label className="block text-xs uppercase text-gray-500 mb-2">Service Interested In</label>
                <select className="w-full bg-royal-surface border border-white/10 p-3 text-white focus:border-royal-gold outline-none transition-colors">
                   <option>Modular Kitchens</option>
                   <option>Interior Design</option>
                   <option>Flooring/Carpets</option>
                   <option>Wallpaper</option>
                   <option>Other</option>
                </select>
              </div>
            </div>
            <Button className="w-full justify-center">Submit Request</Button>
          </form>

          {/* Map Placeholder */}
          <div className="w-full h-48 bg-royal-surface border border-white/5 relative overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" 
              alt="Map Background" 
              className="w-full h-full object-cover opacity-30 grayscale"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <a 
                href={BUSINESS_INFO.googleMapLink} 
                target="_blank" 
                rel="noreferrer"
                className="bg-royal-gold text-black px-4 py-2 text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
};