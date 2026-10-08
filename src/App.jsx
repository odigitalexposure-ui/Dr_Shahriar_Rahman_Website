import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import FloatingContact from './components/navbar/FloatingContact';
import ScrollToTopButton from './components/navbar/ScrollToTopButton';

// Lazy loaded page components for optimal code-splitting and performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const WhyChooseUs = lazy(() => import('./pages/WhyChooseUs'));
const Contact = lazy(() => import('./pages/Contact'));
const Gallery = lazy(() => import('./pages/Gallery'));

/**
 * ScrollToTop on route change:
 * Automatically resets the scroll position to the top whenever a new route is navigated to.
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return null;
}

/**
 * LoadingFallback:
 * Elegant dark-and-gold medical spinner while lazy chunks are loaded.
 */
const LoadingFallback = () => (
  <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[#0B0F17] text-amber-400">
    <div className="relative w-16 h-16">
      <div className="absolute inset-0 rounded-full border-2 border-amber-400/20 animate-ping" />
      <div className="w-16 h-16 rounded-full border-2 border-transparent border-t-amber-400 border-r-amber-300 animate-spin" />
    </div>
    <p className="mt-4 text-xs tracking-widest uppercase font-serif text-slate-400">
      Loading Clinic Portal...
    </p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#0B0F17] text-slate-100 font-sans selection:bg-amber-400 selection:text-slate-950 relative">
        {/* Fixed Header */}
        <Navbar />

        {/* Dynamic Lazy-Loaded Page Content with Fixed Header Offset */}
        <main className="flex-grow pt-20">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/why-choose-us" element={<WhyChooseUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/gallery" element={<Gallery />} />
              {/* Fallback to Home */}
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </main>

        {/* Floating Scroll to Top Arrow Button */}
        <ScrollToTopButton />

        {/* Global Floating Action Button for Calling & WhatsApp */}
        <FloatingContact />

        {/* Persistent Global Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
