import React from 'react';
import { Truck, Wrench, Battery, Thermometer, Key, Disc } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: 'roadside',
    title: '24/7 Roadside Assistance',
    description: 'Stuck on the highway? We provide towing, fuel delivery, and lockout services day or night.',
    icon: <Truck className="w-8 h-8 text-accent-500" />
  },
  {
    id: 'repair',
    title: 'Engine Repair & Diagnostics',
    description: 'Check engine light on? Our advanced scanners and expert mechanics identify issues accurately.',
    icon: <Wrench className="w-8 h-8 text-accent-500" />
  },
  {
    id: 'battery',
    title: 'Battery Replacement',
    description: 'We test your charging system and install premium batteries on-site to get you moving again.',
    icon: <Battery className="w-8 h-8 text-accent-500" />
  },
  {
    id: 'hvac',
    title: 'A/C & Heating Service',
    description: 'Stay comfortable year-round with our comprehensive climate control maintenance and repair.',
    icon: <Thermometer className="w-8 h-8 text-accent-500" />
  },
  {
    id: 'brakes',
    title: 'Brake Service',
    description: 'Squeaking or grinding? We perform pad replacements, rotor resurfacing, and fluid flushes.',
    icon: <Disc className="w-8 h-8 text-accent-500" />
  },
  {
    id: 'lockout',
    title: 'Auto Lockout Service',
    description: 'Locked your keys inside? Our non-destructive entry techniques will get you back in quickly.',
    icon: <Key className="w-8 h-8 text-accent-500" />
  }
];

const ServiceSection: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Comprehensive Auto Care Services
          </h2>
          <p className="text-lg text-slate-600">
            From emergency breakdown assistance to routine maintenance, we handle it all with speed, precision, and transparency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="group p-8 rounded-2xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-brand-100 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-slate-900/20">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-accent-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;