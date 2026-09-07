import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Baby,
  Building2,
  ShieldCheck,
  Award,
  Heart,
  Syringe,
  MapPin,
  Clock,
  Sparkles,
} from 'lucide-react';
import FeatureCard from '../components/cards/FeatureCard';
import FaqAccordion from '../components/faq/FaqAccordion';

const conceptsData = [
  {
    icon: Award,
    badge: 'Dual Specialization',
    subtitle: 'Academic Eminence',
    title: (
      <span>
        M.D. (Cal) & <span className="font-serif italic text-amber-400">P.G.D.C.H. Credentials</span>
      </span>
    ),
    description:
      'Holding specialized postgraduate training from the University of Calcutta and Institute of Child Health, Dr. Rahman offers the highest level of medical insight for complex pediatric conditions.',
    bullets: [
      'Official WBMC Registration No. 74003',
      'Advanced neonatal & infant health certification',
      'Continuous adoption of latest IAP clinical protocols',
    ],
  },
  {
    icon: Building2,
    badge: 'Tertiary Backup',
    subtitle: 'Hospital Attachment',
    title: (
      <span>
        Murshidabad Medical College & <span className="font-serif italic text-amber-400">R.G. Kar Heritage</span>
      </span>
    ),
    description:
      'Attached to Murshidabad Medical College & Hospital and former clinical physician at R.G. Kar Medical College, providing unmatched emergency coordination and hospital admission backing.',
    bullets: [
      'Attached to Murshidabad Medical College & Hospital',
      'Ex - R.G. Kar Medical College & Hospital training',
      'Direct emergency escalation for sick neonates',
    ],
  },
  {
    icon: Heart,
    badge: 'Child Comfort',
    subtitle: 'Gentle Environment',
    title: (
      <span>
        Fear-Free, <span className="font-serif italic text-amber-400">Unhurried Examinations</span>
      </span>
    ),
    description:
      'We understand that children feel scared in hospitals. Consultations at Prachi Medical Center are patient, gentle, and warm, allowing your child to relax before examination.',
    bullets: [
      'No rushing—ample time for parental counseling',
      'Warm, reassuring stethoscope checks',
      'Child-friendly communication that eases anxiety',
    ],
  },
  {
    icon: ShieldCheck,
    badge: 'Safe Medicine',
    subtitle: 'Ethical Prescriptions',
    title: (
      <span>
        Strict Rational <span className="font-serif italic text-amber-400">Antibiotic Stewardship</span>
      </span>
    ),
    description:
      'We protect your child’s developing gut microbiome and immune system by refusing to prescribe unnecessary antibiotics for ordinary viral fevers, common colds, and simple diarrhea.',
    bullets: [
      'Avoids indiscriminate syrup over-prescriptions',
      'Focus on hydration, nutrition & natural immunity',
      'Clear dosage instructions matching child weight',
    ],
  },
  {
    icon: Syringe,
    badge: 'Preventive Care',
    subtitle: 'Complete Immunization',
    title: (
      <span>
        Comprehensive <span className="font-serif italic text-amber-400">Vaccine Management</span>
      </span>
    ),
    description:
      'Cold-chain maintained vaccines administered strictly on schedule. We provide complete vaccination booklets, reminder tracking, and pain-managed injection techniques.',
    bullets: [
      'IAP & WHO compliant vaccination roadmap',
      'Painless combination vaccine availability',
      'Vaccine counseling addressing parent doubts',
    ],
  },
  {
    icon: MapPin,
    badge: 'Central Location',
    subtitle: 'Berhampore Chamber',
    title: (
      <span>
        Central & Accessible <span className="font-serif italic text-amber-400">Berhampore Chamber</span>
      </span>
    ),
    description:
      'Conveniently situated at Prachi Medical Center, Swarnamoyee Market Complex, Station Road, Raninagar, Gorabazar—directly opposite to Murshidabad Medical College Gate No 1.',
    bullets: [
      'Opposite to Medical College Gate No 1',
      'Easy access from Berhampore Court Station & Gorabazar',
      'Direct telephone booking via 8537059337 / 86175 70082',
    ],
  },
];

const WhyChooseUs = () => {
  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 pt-6 pb-16 sm:pt-8 sm:pb-20">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-amber-400/10 border border-amber-400/30 text-amber-300 mb-3">
            <Baby className="w-3.5 h-3.5" />
            <span>The Pediatric Advantage</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-100 mb-4">
            Why Parents Trust <span className="font-serif italic gold-text-gradient">Dr. Shahriar Rahman</span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Specialized pediatric qualifications (MD Cal, PGDCH), hospital attachments, and an ethical, child-centered approach in Berhampore, Murshidabad.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Clinical Concepts with Snake Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {conceptsData.map((concept, index) => (
            <FeatureCard
              key={index}
              icon={concept.icon}
              badge={concept.badge}
              subtitle={concept.subtitle}
              title={concept.title}
              description={concept.description}
              bullets={concept.bullets}
              linkTo="/contact"
              linkText="Book Chamber Serial"
            />
          ))}
        </div>

        {/* Comparison Table / Pediatric Standards */}
        <div className="pt-6">
          <div className="rounded-2xl p-6 sm:p-10 bg-[#0F1523]/90 border border-slate-800 backdrop-blur-md">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-100">
                The Pediatric Standards We <span className="font-serif italic text-amber-400">Uphold</span>
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Comparing typical rushed child consultations against Dr. Shahriar Rahman’s dedicated practice at Berhampore.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider text-[11px]">
                    <th className="pb-3 font-semibold">Care Aspect</th>
                    <th className="pb-3 font-semibold text-slate-500">Ordinary General OPD</th>
                    <th className="pb-3 font-semibold text-amber-300">Dr. Shahriar Rahman (Child Specialist)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-300">
                  <tr>
                    <td className="py-4 font-semibold text-slate-200">Doctor Qualifications</td>
                    <td className="py-4 text-slate-500">General Practitioner (non-specialist)</td>
                    <td className="py-4 text-amber-300 font-medium">M.B.B.S., MD(Cal), P.G.D.C.H. (Pediatrics)</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-semibold text-slate-200">Hospital Attachment</td>
                    <td className="py-4 text-slate-500">None / Private clinic only</td>
                    <td className="py-4 text-amber-300 font-medium">Attached: Murshidabad Medical College & Hospital (Ex-R.G. Kar)</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-semibold text-slate-200">Antibiotic Usage</td>
                    <td className="py-4 text-slate-500">Antibiotics given for simple viral colds</td>
                    <td className="py-4 text-amber-300 font-medium">Strict rational therapy; zero unnecessary antibiotics</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-semibold text-slate-200">Newborn (Neonatal) Care</td>
                    <td className="py-4 text-slate-500">Limited to basic infant checks</td>
                    <td className="py-4 text-amber-300 font-medium">Specialized neonatal training for 0–28 day newborns</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-semibold text-slate-200">Parent Communication</td>
                    <td className="py-4 text-slate-500">Rushed 2-minute examination</td>
                    <td className="py-4 text-amber-300 font-medium">Unhurried listening, feeding advice & milestone check</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Responsive FAQ Accordion Section */}
        <div className="pt-6 border-t border-slate-800/80">
          <FaqAccordion
            title={true}
            subtitle="Clear answers for parents regarding clinic location, vaccination charts, fees, and booking tokens."
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
