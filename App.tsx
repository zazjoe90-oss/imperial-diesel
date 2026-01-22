import React, { useEffect, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServiceSection from './components/ServiceSection';
import Footer from './components/Footer';

// Lazy load heavy interactive components
const DiagnosticChat = React.lazy(() => import('./components/DiagnosticChat'));
const ContactSection = React.lazy(() => import('./components/ContactSection'));

const LoadingSpinner = () => (
  <div className="py-20 flex justify-center items-center bg-slate-50">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent-600"></div>
  </div>
);

const App: React.FC = () => {
  useEffect(() => {
    // Disable right-click context menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // Disable specific keyboard shortcuts for inspection
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12
      if (e.key === 'F12') {
        e.preventDefault();
      }
      // Ctrl+Shift+I (Inspector), Ctrl+Shift+J (Console), Ctrl+Shift+C (Element picker)
      if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) {
        e.preventDefault();
      }
      // Ctrl+U (View Source)
      if (e.ctrlKey && (e.key === 'u' || e.key === 'U')) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ServiceSection />
        
        <Suspense fallback={<LoadingSpinner />}>
          <DiagnosticChat />
        </Suspense>
        
        {/* Testimonials Teaser */}
        <section className="py-20 bg-white border-t border-slate-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-10 text-slate-800">Trusted by Local Drivers</h2>
            <div className="grid md:grid-cols-3 gap-8">
               {[1, 2, 3].map((i) => (
                 <div key={i} className="p-6 bg-slate-50 rounded-xl">
                    <div className="flex items-center justify-center mb-4">
                       {[1,2,3,4,5].map(star => (
                         <span key={star} className="text-yellow-400">★</span>
                       ))}
                    </div>
                    <p className="italic text-slate-600 mb-4">
                      "{i === 1 ? "Saved my day when I had a flat on I-95." : i === 2 ? "The AI diagnostic was surprisingly accurate!" : "Best mechanic shop in town, hands down."}"
                    </p>
                    <p className="font-bold text-slate-900">- Happy Customer {i}</p>
                 </div>
               ))}
            </div>
          </div>
        </section>

        <Suspense fallback={<LoadingSpinner />}>
          <ContactSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default App;