import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Calendar,
  Phone,
  Baby,
  ChevronRight,
} from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'WhyChoose', path: '/why-choose-us' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070A0F]/85 backdrop-blur-2xl border-b border-amber-400/25 shadow-[0_12px_40px_rgba(0,0,0,0.85)]'
          : 'bg-[#0B0F17]/45 backdrop-blur-md border-b border-slate-800/40'
      }`}
      style={{
        WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'blur(12px)',
        backdropFilter: scrolled ? 'blur(24px)' : 'blur(12px)',
      }}
    >
      {/* Main Navbar without top banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo with Pediatric Icon */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400/20 via-amber-500/10 to-transparent border border-amber-400/30 flex items-center justify-center text-amber-400 group-hover:border-amber-400/60 group-hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
              <Baby className="w-6 h-6 group-hover:rotate-6 transition-transform" />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-serif font-bold tracking-tight text-slate-100 group-hover:text-amber-300 transition-colors">
                Dr. Shahriar <span className="font-serif italic text-amber-400">Rahman</span>
              </div>
              <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-400 font-medium">
                M.B.B.S., MD(Cal), P.G.D.C.H. · Child Specialist & Neonatology
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-amber-300 font-semibold'
                      : 'text-slate-300 hover:text-amber-200 hover:bg-slate-800/40'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500 rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Book Appointment CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/contact"
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-[0_0_20px_rgba(212,175,55,0.35)] hover:shadow-[0_0_30px_rgba(212,175,55,0.55)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="tel:8537059337"
              className="p-2 rounded-lg bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold"
              title="Call Chamber"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-amber-400 hover:border-amber-400/40 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer / Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-b border-amber-500/20 bg-[#070A0F]/95 backdrop-blur-2xl overflow-hidden px-4 pt-2 pb-6"
          >
            <div className="flex flex-col space-y-2 pt-2">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs space-y-1 mb-2">
                <p className="text-amber-300 font-semibold">Dr. Shahriar Rahman</p>
                <p className="text-slate-400">M.B.B.S., MD(Cal), P.G.D.C.H.</p>
                <p className="text-slate-300 text-[11px]">Child Specialist & Neonatology</p>
                <p className="text-slate-400 text-[10px]">Reg. No. 74003 (WBMC)</p>
              </div>

              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-amber-400/15 text-amber-300 border border-amber-400/30'
                        : 'text-slate-300 hover:bg-slate-900 hover:text-amber-200'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-slate-800/80 mt-2">
                <Link
                  to="/contact"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Chamber Appointment</span>
                </Link>

                <div className="flex items-center justify-center gap-4 mt-4 text-xs text-slate-400">
                  <a href="tel:8537059337" className="flex items-center gap-1.5 text-amber-300 hover:text-amber-200 font-semibold">
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    <span>Call Chamber: 8537059337</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
