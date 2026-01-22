import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-500 py-12 border-t border-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
             <span className="text-2xl font-extrabold text-white tracking-tighter uppercase">
              Imperial<span className="text-accent-600">Diesel</span>
            </span>
            <p className="text-sm mt-2 font-medium">© {new Date().getFullYear()} Imperial Diesel. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-8 text-sm font-semibold tracking-wide uppercase">
            <a href="#" className="hover:text-accent-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-accent-500 transition-colors">Terms</a>
            <a href="#" className="hover:text-accent-500 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;