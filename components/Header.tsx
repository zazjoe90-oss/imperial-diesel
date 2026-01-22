import React, { useState } from 'react';
import { Menu, X, Phone, Wrench, Shield } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'AI Diagnostic', href: '#diagnostic' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-900 shadow-lg text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-24">
          {/* Logo - Imperial Diesel */}
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.location.href = '#'}>
            <div className="relative">
              <div className="bg-accent-500 p-2.5 rounded transform rotate-45 group-hover:rotate-0 transition-transform duration-300 shadow-lg shadow-accent-500/20">
                <Wrench className="text-slate-900 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" size={24} strokeWidth={2.5} />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-white text-slate-900 rounded-full p-0.5 border-2 border-slate-900">
                <Shield size={12} strokeWidth={3} />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold tracking-tighter uppercase leading-none">
                Imperial
              </span>
              <span className="text-accent-500 font-bold tracking-widest text-sm uppercase leading-none">
                Diesel.com
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-white hover:text-accent-400 font-medium transition-colors text-sm uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="tel:+1234567890"
              className="flex items-center space-x-2 bg-accent-600 hover:bg-accent-500 text-white px-6 py-3 rounded-sm font-bold uppercase tracking-wider transition-all hover:-translate-y-0.5 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]"
            >
              <Phone size={18} />
              <span>24/7 Support</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700 absolute w-full shadow-xl">
          <nav className="flex flex-col py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-6 py-3 text-slate-300 hover:bg-slate-700 hover:text-accent-400 font-medium border-l-4 border-transparent hover:border-accent-500"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="px-6 pt-6 pb-2">
               <a
                href="tel:+1234567890"
                className="flex items-center justify-center space-x-2 w-full bg-accent-600 text-white px-5 py-4 rounded font-bold uppercase tracking-wider"
              >
                <Phone size={18} />
                <span>Call Now</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;