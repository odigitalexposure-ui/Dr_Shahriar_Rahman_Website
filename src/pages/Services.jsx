import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Baby,
  Syringe,
  HeartPulse,
  Smile,
  Activity,
  Building2,
  Sparkles,
  Calendar,
  ShieldCheck,
  Milk,
  Thermometer,
} from 'lucide-react';
import FeatureCard from '../components/cards/FeatureCard';

const servicesData = [
  {
    icon: Baby,
    badge: 'Specialized Care',
    subtitle: 'Neonatology (0–28 Days)',
    title: (
      <span>
        Newborn & <span className="font-serif italic text-amber-400">Neonatal Care</span>
      </span>
    ),
    description:
      'Expert clinical evaluation for full-term and premature newborns, neonatal jaundice, weight gain kinetics, umbilical cord care, and maternal breastfeeding counseling.',
    bullets: [
      'Neonatal jaundice & transcutaneous bilirubin assessment',
      'Preterm baby discharge follow-up and thermal regulation',
      'Infant feeding difficulties & exclusive breastfeeding support',
      'Congenital anomaly and neonatal reflex screening',
    ],
  },
  {
    icon: Syringe,
    badge: 'Full Protection',
    subtitle: 'IAP & WHO Immunization',
    title: (
      <span>
        Childhood <span className="font-serif italic text-amber-400">Vaccination Schedule</span>
      </span>
    ),
    description:
      'Comprehensive immunization delivery adhering strictly to Indian Academy of Pediatrics (IAP) and WHO recommendations from birth through adolescence.',
    bullets: [
      'Birth vaccines: BCG, Oral Polio (OPV), Hepatitis B',
      'Painless / Painless combination Hexavalent & DPT vaccines',
      'Rotavirus, Pneumococcal (PCV), MMR & Typhoid Conjugate',
      'Influenza, Chickenpox, Hepatitis A & Cervical Cancer (HPV)',
    ],
  },
  {
    icon: HeartPulse,
    badge: 'Pulmonology',
    subtitle: 'Respiratory & Allergy',
    title: (
      <span>
        Pediatric Asthma & <span className="font-serif italic text-amber-400">Chronic Wheezing</span>
      </span>
    ),
    description:
      'Specialized care for children suffering from recurrent cough, seasonal breathlessness, allergic rhinitis, and reactive airway diseases with child-friendly devices.',
    bullets: [
      'Inhaler and metered-dose spacer technique education',
      'Night-time chronic cough & allergic trigger identification',
      'Prevention of acute asthmatic attacks and hospital admissions',
      'Safe step-down medication plans as lungs mature',
    ],
  },
  {
    icon: Smile,
    badge: 'Growth & Nutrition',
    subtitle: 'Developmental Milestones',
    title: (
      <span>
        Growth, Nutrition & <span className="font-serif italic text-amber-400">Milestone Audit</span>
      </span>
    ),
    description:
      'Continuous tracking of developmental milestones including rolling over, walking, speech, social engagement, and physical growth against WHO percentile standards.',
    bullets: [
      'WHO growth chart percentile plotting (height, weight, head size)',
      'Childhood failure to thrive & poor weight gain diagnosis',
      'Speech delay and motor coordination milestone tracking',
      'Toddler picky-eating and weaning nutritional roadmaps',
    ],
  },
  {
    icon: Activity,
    badge: 'Acute Pediatrics',
    subtitle: 'Infectious Illnesses',
    title: (
      <span>
        Childhood Fevers, <span className="font-serif italic text-amber-400">Dengue & Infections</span>
      </span>
    ),
    description:
      'Gentle, rational management of acute pediatric viral syndromes, monsoon dengue, enteric typhoid, acute tonsillitis, and ear infections without antibiotic overuse.',
    bullets: [
      'Precision fever management & hydration protocols',
      'Pediatric platelet count & capillary hematocrit monitoring',
      'Strict rational antibiotic stewardship policy',
      'Post-viral recovery and immunity restoration',
    ],
  },
  {
    icon: Milk,
    badge: 'Digestive Health',
    subtitle: 'Gastroenterology',
    title: (
      <span>
        Infantile Colic & <span className="font-serif italic text-amber-400">Digestive Care</span>
      </span>
    ),
    description:
      'Effective relief from excessive infant crying, formula intolerance, gastroesophageal reflux (GERD), acute diarrhea, and chronic childhood constipation.',
    bullets: [
      'Infantile colic and abdominal gas relief strategies',
      'Cow’s milk protein allergy (CMPA) diagnosis & dietary advice',
      'WHO ORS and zinc hydration therapy for acute diarrhea',
      'Childhood chronic constipation & bowel habit training',
    ],
  },
  {
    icon: Building2,
    badge: 'Tertiary Hospital Link',
    subtitle: 'Emergency Liaison',
    title: (
      <span>
        Hospital Step-Down & <span className="font-serif italic text-amber-400">PICU Coordination</span>
      </span>
    ),
    description:
      'With active attachment to Murshidabad Medical College & Hospital and prior experience at R.G. Kar, Dr. Rahman coordinates immediate admission during critical pediatric illnesses.',
    bullets: [
      'Attached to Murshidabad Medical College & Hospital',
      'Direct admission desk liaison in acute crises',
      'Post-discharge follow-up for pneumonia, sepsis, or seizures',
      'Bedside oversight during hospital inpatient recovery',
    ],
  },
  {
    icon: ShieldCheck,
    badge: 'General Pediatrics',
    subtitle: 'Preventive Health',
    title: (
      <span>
        Child Routine Checkup & <span className="font-serif italic text-amber-400">Wellness Screening</span>
      </span>
    ),
    description:
      'Periodic comprehensive physical exams, vision/hearing baseline checks, school fitness certificates, and bone health assessments (Vitamin D3/Calcium).',
    bullets: [
      'Pre-school & annual pediatric fitness checkups',
      'Nutritional anemia (Iron deficiency) detection & repletion',
      'Childhood posture, spine & flat foot screening',
      'Parental counseling on screen-time & behavioral sleep habits',
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 pt-6 pb-16 sm:pt-8 sm:pb-20">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-amber-400/10 border border-amber-400/30 text-amber-300 mb-3">
            <Baby className="w-3.5 h-3.5" />
            <span>Pediatric & Neonatal Clinical Catalogue</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-100 mb-4">
            Pediatric <span className="font-serif italic gold-text-gradient">Services</span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            From premature newborns to adolescent health, Dr. Shahriar Rahman provides specialized pediatric care at Prachi Medical Center, Berhampore. Hover over any card to view the perimeter snake animation.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Interactive Snake Animated Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <FeatureCard
              key={index}
              icon={service.icon}
              badge={service.badge}
              subtitle={service.subtitle}
              title={service.title}
              description={service.description}
              bullets={service.bullets}
              linkTo="/contact"
              linkText="Book Pediatric Serial"
            />
          ))}
        </div>

        {/* 4-Step Pediatric Care Framework */}
        <div className="pt-12 border-t border-slate-800/80">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-100 mb-3">
              The Pediatric Consultation <span className="font-serif italic gold-text-gradient">Protocol</span>
            </h2>
            <p className="text-slate-400 text-sm">
              How Dr. Shahriar Rahman evaluates every child with warmth, accuracy, and clinical thoroughness.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Gentle Clinical History',
                desc: 'Listening attentively to parents about symptoms, birth records, feeding habits, and vaccination history.',
              },
              {
                step: '02',
                title: 'Unhurried Child Exam',
                desc: 'A calm, fear-free physical checkup including weight, chest auscultation, throat, abdomen, and reflexes.',
              },
              {
                step: '03',
                title: 'Rational Prescription',
                desc: 'Prescribing only essential, child-safe medications with clear instructions and zero antibiotic abuse.',
              },
              {
                step: '04',
                title: 'Direct Parent Support',
                desc: 'Accessible chamber contact at 8537059337 / 86175 70082 for follow-ups, immunization tracking, or emergency guidance.',
              },
            ].map((phase, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0F1523]/80 border border-slate-800 relative hover:border-amber-500/30 transition-colors"
              >
                <span className="text-3xl font-serif font-bold text-amber-400/40 block mb-2">
                  {phase.step}
                </span>
                <h3 className="text-lg font-serif font-bold text-slate-100 mb-2">{phase.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Booking Banner */}
        <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-amber-950/30 via-slate-900 to-[#0F1523] border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-100">
              Need to Consult Dr. Shahriar Rahman at Berhampore?
            </h3>
            <p className="text-slate-400 text-sm mt-1 max-w-xl">
              Prachi Medical Center, Swarnamoyee Market Complex, Station Road, Raninagar, Gorabazar, Berhampore (Opp. Medical College Gate No 1).
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)]"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment Slot</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
