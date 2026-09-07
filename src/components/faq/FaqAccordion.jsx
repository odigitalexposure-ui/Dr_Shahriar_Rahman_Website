import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Baby } from 'lucide-react';

const defaultFaqs = [
  {
    question: 'What age groups does Dr. Shahriar Rahman specialize in treating?',
    answer:
      'As a certified Child Specialist & Neonatologist (MD Cal, PGDCH), Dr. Rahman treats patients from day 1 of life (newborns and premature neonates) through infants, toddlers, young children, and adolescents up to 18 years of age.',
  },
  {
    question: 'Where is the chamber located and how do I reach it?',
    answer:
      'The chamber is located at PRACHI MEDICAL CENTER, Swarnamoyee Market Complex, Station Road, Raninagar, Gorabazar, Berhampore (Opposite to Medical College Gate No 1), Murshidabad, West Bengal, 742101. It is easily accessible right across from Murshidabad Medical College Gate No 1.',
  },
  {
    question: 'How can I book a serial or appointment token for my child?',
    answer:
      'You can call the chamber directly at 8537059337 / 86175 70082, message via WhatsApp with your child’s details, or submit the booking form on this website. Advance booking is recommended to avoid long waiting times for young children.',
  },
  {
    question: 'What hospital affiliations and credentials does Dr. Shahriar Rahman hold?',
    answer:
      'Dr. Shahriar Rahman holds qualifications of M.B.B.S., MD(Cal), P.G.D.C.H., registered with the West Bengal Medical Council under Reg. No. 74003 (WBMC). He is formerly associated with R.G. Kar Medical College & Hospital and is presently attached to Murshidabad Medical College & Hospital.',
  },
  {
    question: 'Does the clinic offer complete child vaccination & immunization scheduling?',
    answer:
      'Yes. Complete child immunizations adhering to the Indian Academy of Pediatrics (IAP) and WHO schedules are administered, including birth vaccines (BCG, OPV, Hep-B), DPT, Rotavirus, MMR, Typhoid Conjugate, Chickenpox, and annual Influenza vaccines.',
  },
  {
    question: 'What should parents bring along for their baby’s first consultation?',
    answer:
      'Please bring the baby’s hospital birth discharge certificate, vaccination card/booklet, past prescriptions, and any recent lab or ultrasound reports. If your child is on ongoing medication or baby formula, bringing the packet is helpful.',
  },
];

const FaqAccordion = ({ items = defaultFaqs, title, subtitle }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {title && (
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-amber-400/10 border border-amber-400/25 text-amber-300 mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Parent Inquiries & Clinical Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-slate-100">
            Frequently Asked <span className="font-serif italic text-amber-400">Questions</span>
          </h2>
          {subtitle && (
            <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-2">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className="space-y-4">
        {items.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="rounded-2xl border border-slate-800 bg-[#0F1523]/80 backdrop-blur-md overflow-hidden transition-colors hover:border-amber-500/30"
            >
              <button
                type="button"
                onClick={() => toggleFaq(idx)}
                className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer select-none group"
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold transition-all duration-300 ${
                      isOpen
                        ? 'bg-amber-400 text-slate-950 shadow-[0_0_12px_rgba(212,175,55,0.4)]'
                        : 'bg-slate-800 text-slate-400 group-hover:text-amber-300 group-hover:bg-slate-700'
                    }`}
                  >
                    0{idx + 1}
                  </div>
                  <span
                    className={`text-base sm:text-lg font-serif transition-colors duration-200 ${
                      isOpen ? 'text-amber-300 font-medium' : 'text-slate-200 group-hover:text-amber-200'
                    }`}
                  >
                    {item.question}
                  </span>
                </div>

                <div
                  className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isOpen
                      ? 'border-amber-400/50 bg-amber-400/10 text-amber-300 rotate-180'
                      : 'border-slate-800 bg-slate-900 text-slate-400 group-hover:border-slate-700'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-slate-400 leading-relaxed border-t border-slate-800/60 flex items-start gap-3">
                      <Baby className="w-4 h-4 text-amber-400/80 shrink-0 mt-1" />
                      <p>{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default FaqAccordion;
