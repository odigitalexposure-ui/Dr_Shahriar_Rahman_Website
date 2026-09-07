import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Clock,
  Phone,
  Navigation,
  ShieldCheck,
  Building2,
  AlertCircle,
  Baby,
} from 'lucide-react';

const AddressCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative rounded-2xl p-[1px] bg-gradient-to-b from-amber-500/30 via-slate-800/50 to-slate-900/80 shadow-[0_10px_35px_rgba(0,0,0,0.5)] overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 h-full rounded-[15px] bg-[#0F1523]/95 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between">
        <div>
          {/* Header Badges */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-400/10 border border-amber-400/30 text-amber-300">
              <Baby className="w-3.5 h-3.5" />
              Pediatrics & Neonatal Chamber
            </span>
            <span className="text-xs text-amber-300 flex items-center gap-1 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              Reg. No. 74003 (WBMC)
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-serif text-slate-100 mb-1">
            Chamber & <span className="font-serif italic text-amber-400">Clinic Location</span>
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm mb-6">
            Consult Dr. Shahriar Rahman at Prachi Medical Center, conveniently located right opposite to Murshidabad Medical College Gate No 1.
          </p>

          {/* Hospital Affiliations Pill */}
          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/25 mb-6 text-xs text-slate-300 space-y-1">
            <div className="flex items-center gap-2 font-medium text-amber-300">
              <Building2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Attached: Murshidabad Medical College & Hospital</span>
            </div>
            <p className="text-slate-400 pl-6 text-[11px]">
              Ex - R.G. Kar Medical College & Hospital
            </p>
          </div>

          {/* Details List */}
          <div className="space-y-4 text-sm">
            {/* Complete Official Address */}
            <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/30 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-amber-300 mb-0.5">
                  Official Chamber Address
                </h4>
                <p className="text-slate-100 font-semibold text-sm leading-snug">
                  PRACHI MEDICAL CENTER
                </p>
                <p className="text-slate-300 text-xs mt-1 leading-relaxed">
                  Swarnamoyee Market Complex, Station Road, Raninagar, Gorabazar,
                </p>
                <p className="text-amber-300/90 text-xs font-medium mt-0.5">
                  Berhampore (Opposite to Medical College Gate No 1)
                </p>
                <p className="text-slate-400 text-xs mt-0.5">
                  Murshidabad, West Bengal, PIN: 742101
                </p>

                <a
                  href="https://maps.google.com/?q=Swarnamoyee+Market+Complex+Berhampore+Murshidabad+742101"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-semibold mt-2.5 group"
                >
                  <Navigation className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform" />
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>
            </div>

            {/* Direct Phone Lines */}
            <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/30 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-amber-300 mb-0.5">
                  Direct Mobile & Chamber Booking
                </h4>
                <p className="text-xs text-slate-400">
                  Call directly for consultation serials & emergency tokens:
                </p>
                <div className="mt-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <a
                      href="tel:8537059337"
                      className="text-base sm:text-lg font-bold text-amber-400 hover:text-amber-300 transition-colors"
                    >
                      8537059337
                    </a>
                    <span className="text-slate-600 font-bold">/</span>
                    <a
                      href="tel:8617570082"
                      className="text-base sm:text-lg font-bold text-amber-400 hover:text-amber-300 transition-colors"
                    >
                      86175 70082
                    </a>
                  </div>
                  <span className="text-slate-400 text-xs block mt-0.5">
                    Mobile & WhatsApp Enabled
                  </span>
                </div>
              </div>
            </div>

            {/* Consulting Hours */}
            <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/30 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-amber-300 mb-0.5">
                  Chamber Consulting Sessions
                </h4>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between gap-4 text-slate-300">
                    <span className="text-slate-400">Daily Regular OPD:</span>
                    <span className="font-medium text-slate-200">Morning & Evening Sessions</span>
                  </div>
                  <div className="flex justify-between gap-4 text-slate-300 pt-0.5 border-t border-slate-800">
                    <span className="text-slate-400">Newborn & Emergency:</span>
                    <span className="font-medium text-amber-300">Priority Admission Coordination</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pediatric Notice */}
        <div className="mt-6 pt-4 border-t border-slate-800/80">
          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-amber-950/20 border border-amber-800/30 text-amber-200 text-xs">
            <AlertCircle className="w-4 h-4 shrink-0 text-amber-400" />
            <p>
              <strong className="font-semibold text-amber-300">Parent Advisory:</strong> For acute respiratory distress, high persistent fever, or neonate refusal to feed, visit immediately or call <strong>8537059337 / 86175 70082</strong>.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AddressCard;
