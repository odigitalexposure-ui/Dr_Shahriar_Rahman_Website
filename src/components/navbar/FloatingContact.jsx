import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, X, MessageCircle, Sparkles } from 'lucide-react';

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end select-none">
      {/* Pop-up Options Container */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Click-away overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px] sm:hidden"
            />

            {/* The 2 Interactive Option Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.85 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative z-50 mb-3 flex flex-col gap-3 items-end"
            >
              {/* Option 1: WhatsApp Chat */}
              <a
                href="https://wa.me/918537059337?text=Hello%20Dr.%20Shahriar%20Rahman,%20I%20would%20like%20to%20inquire%20about%20a%20child%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="group flex items-center gap-3 px-4 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:from-emerald-500 hover:to-emerald-400 text-white shadow-[0_8px_25px_rgba(16,185,129,0.45)] hover:shadow-[0_10px_35px_rgba(16,185,129,0.65)] transition-all duration-300 transform hover:-translate-x-1"
              >
                <div className="text-right">
                  <span className="block text-xs font-bold tracking-wide">
                    WhatsApp Chat
                  </span>
                  <span className="block text-[11px] text-emerald-100 font-medium">
                    8537059337
                  </span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.28-2.42 5.84a8.18 8.18 0 0 1-5.83 2.41c-1.42 0-2.82-.37-4.06-1.07l-.29-.17-3.07.8.82-2.99-.19-.3a8.196 8.196 0 0 1-1.26-4.32c0-4.54 3.7-8.24 8.24-8.24m-3.53 4.25c-.2 0-.48.07-.73.34-.25.28-.96.94-.96 2.3s.98 2.68 1.12 2.86c.14.19 1.93 2.95 4.67 4.14.65.28 1.16.45 1.56.58.66.21 1.26.18 1.73.11.53-.08 1.62-.66 1.85-1.3.23-.64.23-1.19.16-1.3-.07-.11-.25-.18-.53-.32-.28-.14-1.62-.8-1.87-.89-.25-.09-.43-.14-.62.14-.18.28-.71.89-.87 1.07-.16.19-.32.21-.6.07-.28-.14-1.18-.44-2.25-1.39-.83-.74-1.39-1.66-1.56-1.94-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.19-.28.28-.46.09-.19.05-.35-.02-.49-.07-.14-.62-1.5-.86-2.06-.23-.55-.47-.48-.64-.49h-.53z" />
                  </svg>
                </div>
              </a>

              {/* Option 2: Direct Calling */}
              <a
                href="tel:8537059337"
                onClick={() => setIsOpen(false)}
                className="group flex items-center gap-3 px-4 py-3 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 shadow-[0_8px_25px_rgba(212,175,55,0.45)] hover:shadow-[0_10px_35px_rgba(212,175,55,0.65)] transition-all duration-300 transform hover:-translate-x-1"
              >
                <div className="text-right">
                  <span className="block text-xs font-bold tracking-wide">
                    Call Chamber Desk
                  </span>
                  <span className="block text-[11px] text-slate-900 font-semibold">
                    8537059337
                  </span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-slate-950/15 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 text-slate-950" />
                </div>
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Floating Trigger Button */}
      <motion.button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className="relative z-50 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-amber-500 via-amber-400 to-amber-300 text-slate-950 shadow-[0_10px_35px_rgba(212,175,55,0.55)] border-2 border-amber-200/50 cursor-pointer transition-all duration-300"
        aria-label="Contact Options"
        title="Contact Doctor / WhatsApp / Call"
      >
        {/* Live green pulse beacon */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-slate-900" />
          </span>
        )}

        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <Phone className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default FloatingContact;
