import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

// Use import.meta.glob to dynamically load all images from assets
const imageModules = import.meta.glob('../assets/*.{jpeg,jpg,png}', { eager: true });

// Extract the URL from the imported modules
const images = Object.values(imageModules).map(mod => mod.default || mod);

const Gallery = () => {
  const [selectedImgIndex, setSelectedImgIndex] = useState(null);

  // Handle keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImgIndex === null) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImgIndex]);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedImgIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedImgIndex]);

  const openModal = (index) => setSelectedImgIndex(index);
  const closeModal = () => setSelectedImgIndex(null);

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    setSelectedImgIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    setSelectedImgIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-[#0B0F17] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto pt-10">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-slate-100 mb-4"
          >
            Our <span className="text-amber-400 italic">Gallery</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-24 h-1 bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500 mx-auto rounded-full"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-slate-400 max-w-2xl mx-auto"
          >
            Explore our clinic's state-of-the-art facilities, special moments, and the welcoming environment we provide for every child.
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 10) * 0.05 }}
              className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer bg-slate-800/50 border border-slate-700/50 shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:border-amber-400/30 transition-all duration-300"
              onClick={() => openModal(idx)}
            >
              <img
                src={src}
                alt={`Gallery image ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17]/90 via-[#0B0F17]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-amber-400/20 backdrop-blur-sm flex items-center justify-center border border-amber-400/30 text-amber-300 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <ZoomIn className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImgIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#070A0F]/95 backdrop-blur-xl p-4 sm:p-6"
            onClick={closeModal}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 sm:top-8 sm:right-8 z-[110] p-3 rounded-full bg-slate-800/80 hover:bg-amber-400/20 text-slate-300 hover:text-amber-400 border border-slate-700 hover:border-amber-400/40 transition-all duration-200 shadow-lg hover:scale-110"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Main Content */}
            <div 
              className="relative w-full max-w-6xl max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-0 z-[110] p-3 sm:p-4 ml-2 sm:ml-4 rounded-full bg-slate-800/80 hover:bg-amber-400/20 text-slate-300 hover:text-amber-400 border border-slate-700 hover:border-amber-400/40 transition-all duration-200 transform -translate-y-1/2 top-1/2 shadow-lg hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>

              <motion.img
                key={selectedImgIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                src={images[selectedImgIndex]}
                alt={`Expanded gallery image ${selectedImgIndex + 1}`}
                className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-slate-700/50"
              />

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-0 z-[110] p-3 sm:p-4 mr-2 sm:mr-4 rounded-full bg-slate-800/80 hover:bg-amber-400/20 text-slate-300 hover:text-amber-400 border border-slate-700 hover:border-amber-400/40 transition-all duration-200 transform -translate-y-1/2 top-1/2 shadow-lg hover:scale-110"
              >
                <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>
            </div>
            
            {/* Image Counter */}
            <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 px-5 py-2.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-slate-200 text-sm font-semibold tracking-wide shadow-lg backdrop-blur-md">
              {selectedImgIndex + 1} <span className="text-slate-500 font-normal mx-1">/</span> {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
