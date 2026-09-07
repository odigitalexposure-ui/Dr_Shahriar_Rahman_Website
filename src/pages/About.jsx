import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Award,
  GraduationCap,
  ShieldCheck,
  Building2,
  Calendar,
  Sparkles,
  Baby,
  Syringe,
  FileCheck,
} from 'lucide-react';
import doctorOtImg from '../assets/doctor-ot.jpg';

const About = () => {
  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 pt-6 pb-16 sm:pt-8 sm:pb-20">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-amber-400/10 border border-amber-400/30 text-amber-300 mb-3">
            <Baby className="w-3.5 h-3.5" />
            <span>Curriculum Vitae & Medical Credentials</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-100 mb-4">
            About <span className="font-serif italic gold-text-gradient">Dr. Shahriar Rahman</span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            M.B.B.S., MD(Cal), P.G.D.C.H. · Senior Child Specialist & Neonatologist serving Murshidabad with clinical excellence, hospital precision, and tender care.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* ===================== BIOGRAPHY & CREDENTIALS GRID ===================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Doctor Portrait in OT Dress with Mask */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-amber-400/30 bg-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
              <img
                src={doctorOtImg}
                alt="Dr. Shahriar Rahman - Child Specialist in OT Dress with Mask"
                loading="lazy"
                className="w-full h-[460px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-transparent to-transparent opacity-85" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/90 backdrop-blur-md border border-amber-500/25">
                <h4 className="text-sm font-serif font-bold text-slate-100">
                  Dr. Shahriar Rahman
                </h4>
                <p className="text-xs text-amber-300 mt-0.5 font-medium">
                  M.B.B.S., MD(Cal), P.G.D.C.H.
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Reg. No. 74003 (WBMC) · Child Specialist & Neonatology
                </p>
              </div>
            </div>
          </div>

          {/* Biography Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-400/10 border border-amber-400/25 text-amber-300">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Medical Qualifications & Affiliations</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-100">
              Devoted to the Health & Vitality of{' '}
              <span className="font-serif italic gold-text-gradient">Every Child and Newborn.</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              <strong>Dr. Shahriar Rahman</strong> is an accomplished Pediatrician and Neonatologist with post-graduate qualifications including <strong>M.B.B.S., MD(Cal)</strong> and <strong>P.G.D.C.H.</strong> (Post Graduate Diploma in Child Health). He is officially registered with the West Bengal Medical Council under <strong>Registration No. 74003 (WBMC)</strong>.
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Dr. Rahman brings deep hospital-based clinical experience from his prior tenure at the prestigious <strong>R.G. Kar Medical College & Hospital</strong>, where he managed acute neonatal intensive care (NICU) cases, high-risk infant resuscitation, and pediatric medical emergencies. He is currently attached to <strong>Murshidabad Medical College & Hospital</strong>, providing seamless tertiary backup for his patients.
            </p>

            {/* Accreditations Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#0F1523] border border-slate-800">
                <div className="flex items-center gap-2.5 text-amber-400 mb-1">
                  <Award className="w-4 h-4" />
                  <span className="text-xs uppercase font-bold tracking-wider">Degrees & Diploma</span>
                </div>
                <p className="text-sm font-semibold text-slate-200">M.B.B.S., MD(Cal), P.G.D.C.H.</p>
                <p className="text-xs text-slate-400">Calcutta University & Child Health Specialization</p>
              </div>

              <div className="p-4 rounded-xl bg-[#0F1523] border border-slate-800">
                <div className="flex items-center gap-2.5 text-amber-400 mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-xs uppercase font-bold tracking-wider">Official Registration</span>
                </div>
                <p className="text-sm font-semibold text-slate-200">Reg. No. 74003 (WBMC)</p>
                <p className="text-xs text-slate-400">West Bengal Medical Council · Verified</p>
              </div>
            </div>
          </div>
        </div>

        {/* ===================== CLINICAL MILESTONES & TIMELINE ===================== */}
        <div className="pt-10 border-t border-slate-800/80">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-100 mb-3">
              Clinical Experience & <span className="font-serif italic gold-text-gradient">Hospital Journey</span>
            </h2>
            <p className="text-slate-400 text-sm">
              Academic pedigree and hospital attachments dedicated to child health and neonatal survival.
            </p>
          </div>

          {/* ================= DESKTOP & LAPTOP VIEW: ALTERNATING CENTER-SPINE ROADMAP ================= */}
          <div className="hidden lg:block relative max-w-5xl mx-auto py-6">
            {/* Central Glowing Golden Spine */}
            <div className="absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-gradient-to-b from-amber-500/20 via-amber-400/50 to-amber-500/20 shadow-[0_0_12px_rgba(212,175,55,0.4)] pointer-events-none" />

            <div className="space-y-12">
              {[
                {
                  step: '01',
                  year: 'M.B.B.S.',
                  badge: 'Undergraduate Degree',
                  role: 'Bachelor of Medicine and Bachelor of Surgery',
                  place: 'Premier Medical College, West Bengal',
                  icon: GraduationCap,
                  details:
                    'Graduated with rigorous clinical training in general medicine, surgery, obstetrics, and pediatrics. Developed foundational acumen in newborn resuscitation and child health.',
                },
                {
                  step: '02',
                  year: 'MD (Cal) & P.G.D.C.H.',
                  badge: 'Postgraduate Child Specialization',
                  role: 'Postgraduate Degree & Child Health Specialization',
                  place: 'University of Calcutta & Child Health Institute',
                  icon: Award,
                  details:
                    'Specialized post-graduate training in Neonatology, Pediatric Intensive Care (PICU), Childhood Infectious Diseases, Nutritional Therapeutics, and Developmental Milestones.',
                },
                {
                  step: '03',
                  year: 'Ex-R.G. Kar',
                  badge: 'Tertiary Hospital Experience',
                  role: 'Clinical Experience in Pediatrics & Neonatal Care',
                  place: 'R.G. Kar Medical College & Hospital, Kolkata',
                  icon: Building2,
                  details:
                    'Extensive clinical exposure handling high-acuity Neonatal Intensive Care Unit (NICU), pediatric critical care, newborn jaundice phototherapy, and premature infant care.',
                },
                {
                  step: '04',
                  year: 'Current Attachment',
                  badge: 'Active Hospital Attachment',
                  role: 'Attached Physician & Hospital Liaison',
                  place: 'Murshidabad Medical College & Hospital',
                  icon: ShieldCheck,
                  details:
                    'Actively attached to Murshidabad Medical College & Hospital, facilitating seamless escalation for critical neonatal and pediatric cases across Murshidabad district.',
                },
                {
                  step: '05',
                  year: 'Private Chamber',
                  badge: 'Pediatric Practice & OPD',
                  role: 'Consultant Child Specialist & Neonatologist',
                  place: 'Prachi Medical Center, Berhampore',
                  icon: Baby,
                  details:
                    'Serving the community at Prachi Medical Center, Swarnamoyee Market Complex, Station Road, Raninagar, Gorabazar, Berhampore (Opposite to Medical College Gate No 1).',
                },
              ].map((milestone, idx) => {
                const isEven = idx % 2 === 0;
                const IconComponent = milestone.icon;

                return (
                  <div key={idx} className="relative grid grid-cols-2 gap-16 items-center group">
                    {/* Center Glowing Hub Node */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                      <div className="w-12 h-12 rounded-full bg-[#070A0F] border-2 border-amber-400 group-hover:border-amber-300 group-hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)] flex items-center justify-center">
                        <span className="font-mono text-xs font-bold text-amber-300">
                          {milestone.step}
                        </span>
                      </div>
                    </div>

                    {/* Left Column */}
                    {isEven ? (
                      /* Left Card */
                      <motion.div
                        whileHover={{ y: -4, x: -2 }}
                        transition={{ duration: 0.25 }}
                        className="relative p-6 rounded-2xl bg-[#0F1523]/95 border border-slate-800 group-hover:border-amber-500/40 shadow-xl transition-all text-right group-hover:shadow-[0_0_30px_rgba(212,175,55,0.12)]"
                      >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-400/10 border border-amber-400/30 text-amber-300 mb-2">
                          <IconComponent className="w-3.5 h-3.5" />
                          <span>{milestone.badge}</span>
                        </div>
                        <h3 className="text-lg font-serif font-bold text-slate-100 group-hover:text-amber-300 transition-colors">
                          {milestone.role}
                        </h3>
                        <p className="text-xs text-amber-400 font-semibold mt-1 mb-2">
                          {milestone.place}
                        </p>
                        <p className="text-xs text-slate-400 leading-relaxed font-light">
                          {milestone.details}
                        </p>
                      </motion.div>
                    ) : (
                      /* Left Tag */
                      <div className="text-right pr-6">
                        <span className="text-2xl font-serif font-bold text-amber-400 block tracking-wide">
                          {milestone.year}
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mt-1">
                          Phase {milestone.step} · {milestone.badge}
                        </span>
                      </div>
                    )}

                    {/* Right Column */}
                    {isEven ? (
                      /* Right Tag */
                      <div className="text-left pl-6">
                        <span className="text-2xl font-serif font-bold text-amber-400 block tracking-wide">
                          {milestone.year}
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mt-1">
                          Phase {milestone.step} · {milestone.badge}
                        </span>
                      </div>
                    ) : (
                      /* Right Card */
                      <motion.div
                        whileHover={{ y: -4, x: 2 }}
                        transition={{ duration: 0.25 }}
                        className="relative p-6 rounded-2xl bg-[#0F1523]/95 border border-slate-800 group-hover:border-amber-500/40 shadow-xl transition-all text-left group-hover:shadow-[0_0_30px_rgba(212,175,55,0.12)]"
                      >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-400/10 border border-amber-400/30 text-amber-300 mb-2">
                          <IconComponent className="w-3.5 h-3.5" />
                          <span>{milestone.badge}</span>
                        </div>
                        <h3 className="text-lg font-serif font-bold text-slate-100 group-hover:text-amber-300 transition-colors">
                          {milestone.role}
                        </h3>
                        <p className="text-xs text-amber-400 font-semibold mt-1 mb-2">
                          {milestone.place}
                        </p>
                        <p className="text-xs text-slate-400 leading-relaxed font-light">
                          {milestone.details}
                        </p>
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* ================= TABLET & MOBILE VIEW: PRESERVED ORIGINAL TIMELINE ================= */}
          <div className="block lg:hidden relative border-l-2 border-amber-500/30 ml-4 space-y-8">
            {[
              {
                year: 'M.B.B.S.',
                role: 'Bachelor of Medicine and Bachelor of Surgery',
                place: 'Premier Medical College, West Bengal',
                details:
                  'Graduated with rigorous clinical training in general medicine, surgery, obstetrics, and pediatrics. Developed foundational acumen in newborn resuscitation.',
              },
              {
                year: 'MD (Cal) & P.G.D.C.H.',
                role: 'Postgraduate Degree & Child Health Specialization',
                place: 'University of Calcutta & Child Health Institute',
                details:
                  'Advanced training in Neonatology, Pediatric Intensive Care, Childhood Infectious Diseases, Nutrition, and Developmental Pediatric Milestones.',
              },
              {
                year: 'Ex-R.G. Kar',
                role: 'Clinical Experience in Pediatrics & Neonatal Care',
                place: 'R.G. Kar Medical College & Hospital, Kolkata',
                details:
                  'Extensive clinical exposure handling high-acuity Neonatal Intensive Care Unit (NICU), pediatric critical care, newborn jaundice phototherapy, and premature infant care.',
              },
              {
                year: 'Current Attachment',
                role: 'Attached Physician & Hospital Liaison',
                place: 'Murshidabad Medical College & Hospital',
                details:
                  'Actively attached to Murshidabad Medical College & Hospital, facilitating seamless escalation for critical neonatal and pediatric cases across Murshidabad district.',
              },
              {
                year: 'Private Chamber',
                role: 'Consultant Child Specialist & Neonatologist',
                place: 'Prachi Medical Center, Berhampore',
                details:
                  'Serving the community at Prachi Medical Center, Swarnamoyee Market Complex, Station Road, Raninagar, Gorabazar, Berhampore (Opposite to Medical College Gate No 1).',
              },
            ].map((milestone, idx) => (
              <div key={idx} className="relative pl-6 group">
                {/* Timeline node */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#0B0F17] border-2 border-amber-400 group-hover:bg-amber-400 group-hover:scale-125 transition-all duration-300 shadow-[0_0_10px_rgba(212,175,55,0.5)]" />

                {/* Milestone Year Label */}
                <div className="text-xs font-bold text-amber-400 mb-1.5">
                  {milestone.year}
                </div>

                <div className="p-4 sm:p-5 rounded-xl bg-[#0F1523]/90 border border-slate-800 group-hover:border-amber-500/40 transition-colors">
                  <h3 className="text-base sm:text-lg font-serif font-bold text-slate-100 group-hover:text-amber-300 transition-colors">
                    {milestone.role}
                  </h3>
                  <p className="text-xs text-amber-400/90 font-medium mb-2">{milestone.place}</p>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {milestone.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===================== HOSPITAL AFFILIATIONS CARD ===================== */}
        <div className="pt-10 border-t border-slate-800/80">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-100 mb-2">
              Hospital <span className="font-serif italic gold-text-gradient">Attachments & Chamber Details</span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Providing families in Murshidabad with the highest standards of clinical accessibility.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#0F1523]/80 border border-slate-800 text-center hover:border-amber-500/30 transition-colors">
              <div className="w-10 h-10 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 flex items-center justify-center mx-auto mb-3">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-slate-100 text-base mb-1">Murshidabad Medical College</h3>
              <p className="text-xs text-amber-400 font-medium mb-2">Attached Medical Institution</p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Hospital support for critical neonatal and pediatric admissions in Berhampore.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0F1523]/80 border border-slate-800 text-center hover:border-amber-500/30 transition-colors">
              <div className="w-10 h-10 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 flex items-center justify-center mx-auto mb-3">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-slate-100 text-base mb-1">R.G. Kar Medical College</h3>
              <p className="text-xs text-amber-400 font-medium mb-2">Ex-Clinical Foundation</p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Extensive inpatient pediatric training and high-volume NICU management experience.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0F1523]/80 border border-slate-800 text-center hover:border-amber-500/30 transition-colors">
              <div className="w-10 h-10 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 flex items-center justify-center mx-auto mb-3">
                <Baby className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-slate-100 text-base mb-1">Prachi Medical Center</h3>
              <p className="text-xs text-amber-400 font-medium mb-2">Consultation Chamber</p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Swarnamoyee Market Complex, Station Rd, Raninagar, Berhampore (Opp. Gate No 1).
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="pt-6">
          <div className="rounded-2xl p-8 bg-gradient-to-r from-slate-900 via-[#0F1523] to-slate-900 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h3 className="text-2xl font-serif font-bold text-slate-100">
                Book a Consultation for Your Child Today
              </h3>
              <p className="text-slate-400 text-sm mt-1">
                Direct mobile and chamber booking helpline: <strong>8537059337 / 86175 70082</strong>
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all shrink-0"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Chamber Visit</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
