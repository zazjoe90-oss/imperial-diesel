import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 uppercase tracking-tight">
              Ready for <span className="text-accent-500">Service?</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-md">
              Whether it's a diesel fleet or your personal car, Imperial Diesel keeps you moving. Reach out for immediate assistance.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5 group">
                <div className="bg-slate-800 p-4 rounded group-hover:bg-accent-600 transition-colors text-white">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg uppercase tracking-wider text-slate-300 mb-1">24/7 Hotline</h4>
                  <a href="tel:5551234567" className="text-3xl font-extrabold text-white hover:text-accent-500 transition-colors">
                    (555) 123-4567
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                 <div className="bg-slate-800 p-4 rounded group-hover:bg-accent-600 transition-colors text-white">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg uppercase tracking-wider text-slate-300 mb-1">Workshop</h4>
                  <p className="text-xl font-medium text-white">
                    88 Diesel Avenue<br />
                    Industrial Park, MC 98765
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                 <div className="bg-slate-800 p-4 rounded group-hover:bg-accent-600 transition-colors text-white">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg uppercase tracking-wider text-slate-300 mb-1">Email</h4>
                  <a href="mailto:service@imperialdiesel.com" className="text-xl font-medium text-white hover:text-accent-500 transition-colors">
                    service@imperialdiesel.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white text-slate-900 rounded-sm p-8 shadow-2xl border-t-8 border-accent-500">
            {formState === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Received</h3>
                <p className="text-slate-600">
                  Imperial Diesel dispatch has received your request. We will contact you shortly.
                </p>
                <button 
                  onClick={() => setFormState('idle')}
                  className="mt-8 text-accent-600 font-bold hover:underline uppercase tracking-wide"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold mb-6 text-slate-900 uppercase">Request Appointment</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Name</label>
                    <input type="text" required className="w-full px-4 py-3 bg-slate-100 border border-slate-200 rounded focus:bg-white focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-all" placeholder="Your Name" />
                  </div>
                  <div className="col-span-2 md:col-span-1">
                     <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Phone</label>
                    <input type="tel" required className="w-full px-4 py-3 bg-slate-100 border border-slate-200 rounded focus:bg-white focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-all" placeholder="(555) 123-4567" />
                  </div>
                </div>

                <div>
                   <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Service Type</label>
                   <select className="w-full px-4 py-3 bg-slate-100 border border-slate-200 rounded focus:bg-white focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-all">
                     <option>Diesel Engine Repair</option>
                     <option>General Auto Repair</option>
                     <option>Roadside Assistance</option>
                     <option>Preventative Maintenance</option>
                     <option>Fleet Service</option>
                   </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Vehicle Info</label>
                  <input type="text" className="w-full px-4 py-3 bg-slate-100 border border-slate-200 rounded focus:bg-white focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-all" placeholder="Year, Make, Model" />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Issue Details</label>
                  <textarea rows={4} className="w-full px-4 py-3 bg-slate-100 border border-slate-200 rounded focus:bg-white focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-all" placeholder="Please describe what is happening..."></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={formState === 'submitting'}
                  className="w-full bg-slate-900 hover:bg-accent-600 text-white font-bold py-4 rounded shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center uppercase tracking-wider text-sm"
                >
                  {formState === 'submitting' ? (
                     <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : 'Submit Request'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;