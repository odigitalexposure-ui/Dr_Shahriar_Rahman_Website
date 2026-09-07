import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Clock,
  ShieldCheck,
  Sparkles,
  MessageCircle,
  Building2,
  Baby,
} from 'lucide-react';
import AddressCard from '../components/cards/AddressCard';
import EnquiryForm from '../components/forms/EnquiryForm';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 pt-6 pb-16 sm:pt-8 sm:pb-20 relative">
      {/* Ambient background light glow */}
      <div className="absolute top-10 left-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-amber-400/10 border border-amber-400/30 text-amber-300 mb-3">
            <Baby className="w-3.5 h-3.5" />
            <span>Chamber Desk & Appointment Serials</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-100 mb-4">
            Contact <span className="font-serif italic gold-text-gradient">Dr. Shahriar Rahman</span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Chamber at Prachi Medical Center, Swarnamoyee Market Complex, Raninagar, Berhampore (Opposite to Medical College Gate No 1). Call or WhatsApp at <strong className="text-amber-300">8537059337 / 86175 70082</strong>.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Quick Highlights Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="p-4 rounded-xl bg-[#0F1523]/90 border border-slate-800 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
              <Building2 className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-semibold text-slate-200">Hospital Attachment</h4>
              <p className="text-[11px] text-slate-400">Murshidabad Medical College & Hospital</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#0F1523]/90 border border-slate-800 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400 shrink-0">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-semibold text-slate-200">Mobile & WhatsApp</h4>
              <div className="flex flex-wrap items-center gap-1.5">
                <a href="tel:8537059337" className="text-xs font-bold text-amber-300 hover:underline">
                  8537059337
                </a>
                <span className="text-slate-600 text-xs">/</span>
                <a href="tel:8617570082" className="text-xs font-bold text-amber-300 hover:underline">
                  86175 70082
                </a>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#0F1523]/90 border border-slate-800 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-sky-400/10 border border-sky-400/20 flex items-center justify-center text-sky-400 shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-semibold text-slate-200">Council Registration</h4>
              <p className="text-[11px] text-slate-400">Reg. No. 74003 (WBMC)</p>
            </div>
          </div>
        </div>

        {/* ===================== TWO-COLUMN GRID (STACKING ON MOBILE) ===================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Professional AddressCard */}
          <div className="lg:col-span-5 w-full">
            <AddressCard />
          </div>

          {/* Right Column: EnquiryForm with embedded WhatsApp button */}
          <div className="lg:col-span-7 w-full">
            <EnquiryForm />
          </div>
        </div>

        {/* ===================== INTERACTIVE GOOGLE MAP IFRAME ===================== */}
        <div className="mt-14 pt-10 border-t border-slate-800/80">
          <div className="rounded-2xl p-[1px] bg-gradient-to-b from-amber-500/30 via-slate-800/50 to-slate-900/80 shadow-[0_10px_35px_rgba(0,0,0,0.5)] overflow-hidden">
            <div className="rounded-[15px] bg-[#0F1523]/95 backdrop-blur-xl p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-amber-300 mb-1">
                    <MapPin className="w-4 h-4 text-amber-400" />
                    <span>Live Chamber & Hospital Landmark</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-100">
                    Chamber Location: <span className="font-serif italic text-amber-400">Prachi Medical Center</span>
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm mt-0.5">
                    Opposite to Murshidabad Medical College Gate No 1, Swarnamoyee Market Complex, Station Road, Raninagar, Gorabazar, Berhampore
                  </p>
                </div>
                <a
                  href="https://maps.google.com/?q=MURSHIDABAD+MEDICAL+COLLEGE+AND+HOSPITAL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all shrink-0 self-start sm:self-center"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                </a>
              </div>

              {/* Embedded Google Map Iframe */}
              <div className="relative w-full h-[380px] sm:h-[450px] rounded-xl overflow-hidden border border-slate-800 shadow-inner">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8640.768307896606!2d88.25655844492549!3d24.094042957879605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f97dcb7440e841%3A0xfee57094b0ad337f!2sMURSHIDABAD%20MEDICAL%20COLLEGE%20AND%20HOSPITAL!5e1!3m2!1sen!2sin!4v1788433045584!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Murshidabad Medical College & Hospital - Prachi Medical Center"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
