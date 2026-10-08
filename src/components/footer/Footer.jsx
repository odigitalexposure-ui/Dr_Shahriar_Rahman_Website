import React from "react";
import { Link } from "react-router-dom";
import {
  Baby,
  MapPin,
  Phone,
  Clock,
  ShieldCheck,
  Building2,
  ChevronRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[#070A0F] border-t border-slate-800/80 text-slate-300 pt-16 pb-12 overflow-hidden">
      {/* Subtle ambient light glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-amber-500/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Column 1: Doctor Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                <Baby className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-slate-100">
                  Dr. Shahriar{" "}
                  <span className="font-serif italic text-amber-400">
                    Rahman
                  </span>
                </h3>
                <p className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">
                  M.B.B.S., MD(Cal), P.G.D.C.H.
                </p>
                <p className="text-[11px] text-amber-300/90 font-medium">
                  Child Specialist & Neonatology
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              Providing compassionate, evidence-based healthcare for newborns,
              infants, children, and adolescents with dedicated hospital-grade
              clinical precision.
            </p>

            <div className="space-y-1.5 pt-1 text-xs">
              <div className="flex items-center gap-2 text-amber-300 font-semibold">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Reg. No. 74003 (WBMC)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Building2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Attached: Murshidabad Medical College & Hospital</span>
              </div>
              <p className="text-slate-400 text-[11px] pl-6">
                Ex - R.G. Kar Medical College & Hospital
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-serif text-slate-100 text-base font-semibold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-3.5 bg-amber-400 rounded-full" />
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: "Home ", path: "/" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "WhyChoose Us", path: "/why-choose-us" },
                { name: "Gallery", path: "/gallery" },
                { name: "Contact", path: "/contact" },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    className="inline-flex items-center gap-1.5 text-slate-400 hover:text-amber-300 transition-colors group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-amber-400 transition-colors" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Pediatric Clinical Domains */}
          <div>
            <h4 className="font-serif text-slate-100 text-base font-semibold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-3.5 bg-amber-400 rounded-full" />
              Pediatric Specializations
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400/70" />
                <span>Neonatal & Premature Infant Care</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400/70" />
                <span>Complete Childhood Immunization / Vaccines</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400/70" />
                <span>Pediatric Asthma, Allergy & Wheezing</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400/70" />
                <span>Growth, Weight & Milestone Screening</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400/70" />
                <span>Child Dengue, Typhoid & Fevers</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400/70" />
                <span>Pediatric Nutrition & Colic Management</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Chamber Details */}
          <div className="space-y-3.5 text-sm">
            <h4 className="font-serif text-slate-100 text-base font-semibold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-3.5 bg-amber-400 rounded-full" />
              Berhampore Chamber
            </h4>

            <div className="flex items-start gap-2.5 text-slate-400 text-xs sm:text-sm">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-slate-200 font-semibold">
                  PRACHI MEDICAL CENTER
                </p>
                <p className="text-slate-300 text-xs mt-0.5">
                  Swarnamoyee Market Complex, Station Road, Raninagar,
                  Gorabazar,
                </p>
                <p className="text-amber-300/90 text-xs font-medium">
                  Berhampore (Opposite to Medical College Gate No 1)
                </p>
                <p className="text-slate-400 text-xs">
                  Murshidabad, West Bengal, 742101
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-slate-400 text-xs sm:text-sm pt-2 border-t border-slate-800/80">
              <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-slate-400 text-xs block">
                  Mobile & Chamber Booking:
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href="tel:8537059337"
                    className="text-base font-bold text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    8537059337
                  </a>
                  <span className="text-slate-600 font-bold">/</span>
                  <a
                    href="tel:8617570082"
                    className="text-base font-bold text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    86175 70082
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-slate-400 text-xs sm:text-sm">
              <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-slate-200 font-medium">
                  Regular OPD Sessions
                </p>
                <p className="text-slate-400 text-xs">
                  Morning & Evening Chambers
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Medical Disclaimer */}
        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-[11px] sm:text-xs text-slate-400 leading-relaxed mb-8">
          <strong className="text-slate-300 font-medium block mb-1">
            Medical Notice for Parents:
          </strong>
          The information on this website is for informational and consultation
          scheduling purposes. In acute pediatric emergencies (severe breathing
          difficulty, unresponsive state, or seizure), immediately proceed to
          the Murshidabad Medical College & Hospital Emergency Ward or call{" "}
          <strong>8537059337 / 86175 70082</strong>.
        </div>

        {/* Bottom Bar with Required Developer Credit */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} Dr. Shahriar Rahman (M.B.B.S., MD(Cal),
            P.G.D.C.H.).
          </p>

          {/* EXACT DEVELOPER CREDIT HTML BLOCK */}
          <div className="flex items-center">
            <span>Website Designed & Developed by</span>
            <a
              href="https://www.teamdeoskolkata.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:text-red-700 transition-colors duration-300 ml-1"
            >
              Digital Exposure Online Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
