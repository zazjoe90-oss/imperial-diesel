import React from 'react';
import { ArrowRight, ShieldCheck, Clock, MapPin, Gauge } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-slate-900 overflow-hidden min-h-[650px] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=1974"
          alt="Imperial Diesel Mechanic working on engine"
          width="1974"
          height="1316"
          className="w-full h-full object-cover opacity-30"
          // @ts-ignore - React type definition might miss fetchPriority in some versions, but valid HTML
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 py-12">
        <div className="max-w-3xl text-white">
          <div className="flex items-center space-x-2 text-accent-500 font-bold tracking-wider uppercase mb-6 bg-slate-800/80 w-fit px-4 py-2 rounded border border-slate-700 backdrop-blur-sm">
             <Gauge size={18} className="animate-pulse" />
             <span className="text-xs md:text-sm">Diesel Specialists & Auto Repair</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
            IMPERIAL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-yellow-200">
              DIESEL
            </span> PERFORMANCE
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl border-l-4 border-accent-600 pl-6">
            Elite diagnostics, diesel engine repair, and 24/7 roadside assistance. 
            We provide royalty-class service for your truck, fleet, or personal vehicle.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#diagnostic"
              className="inline-flex justify-center items-center px-8 py-4 bg-accent-600 hover:bg-accent-500 text-white rounded-sm font-bold uppercase tracking-wide transition-all shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)]"
            >
              <span>AI Engine Check</span>
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex justify-center items-center px-8 py-4 bg-transparent border-2 border-white/20 text-white hover:bg-white hover:text-slate-900 rounded-sm font-bold uppercase tracking-wide transition-all"
            >
              Book Appointment
            </a>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-slate-400 border-t border-slate-800 pt-8">
            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-slate-800 group-hover:bg-accent-600 transition-colors rounded">
                 <Clock className="text-white w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-white text-lg">Rapid Response</p>
                <p className="text-xs uppercase tracking-wider">On-site Assistance</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-slate-800 group-hover:bg-accent-600 transition-colors rounded">
                 <ShieldCheck className="text-white w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-white text-lg">Master Techs</p>
                <p className="text-xs uppercase tracking-wider">Certified Experts</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-slate-800 group-hover:bg-accent-600 transition-colors rounded">
                 <MapPin className="text-white w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-white text-lg">Wide Area</p>
                <p className="text-xs uppercase tracking-wider">Serving All Regions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;