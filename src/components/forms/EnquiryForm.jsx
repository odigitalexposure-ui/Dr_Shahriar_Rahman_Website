import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send,
  Calendar,
  User,
  Phone,
  Baby,
  MessageSquare,
  CheckCircle2,
  Clock,
  Sparkles,
} from 'lucide-react';

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    childName: '',
    childAge: '',
    parentName: '',
    phone: '',
    department: 'Newborn & Neonatal Care (0-28 Days)',
    preferredDate: '',
    preferredTime: 'Morning Session',
    message: '',
  });

  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ state: 'submitting', message: 'Securing consultation serial at Prachi Medical Center...' });

    setTimeout(() => {
      setStatus({
        state: 'success',
        message: 'Thank you! Your appointment request has been recorded. Our chamber desk at Prachi Medical Center will call or WhatsApp you at 8537059337 / 86175 70082 to confirm your serial number.',
      });
      setFormData({
        childName: '',
        childAge: '',
        parentName: '',
        phone: '',
        department: 'Newborn & Neonatal Care (0-28 Days)',
        preferredDate: '',
        preferredTime: 'Morning Session',
        message: '',
      });
    }, 1200);
  };

  return (
    <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-amber-500/30 via-slate-800/40 to-slate-900/80 shadow-[0_10px_35px_rgba(0,0,0,0.5)]">
      <div className="relative z-10 rounded-[15px] bg-[#0F1523]/95 backdrop-blur-xl p-6 sm:p-8">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-800/80">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-400/10 border border-amber-400/30 text-amber-300 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Prachi Medical Center · Berhampore
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-slate-100">
              Book Child <span className="font-serif italic text-amber-400">Consultation</span>
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Submit your child's appointment request or connect directly on WhatsApp at <strong>8537059337 / 86175 70082</strong>.
            </p>
          </div>

          {/* Quick WhatsApp Redirect Button */}
          <div className="shrink-0">
            <a
              href="https://wa.me/918537059337?text=Hello%20Dr.%20Shahriar%20Rahman,%20I%20would%20like%20to%20book%20a%20pediatric%20consultation%20at%20Prachi%20Medical%20Center."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white text-xs sm:text-sm font-semibold shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.28-2.42 5.84a8.18 8.18 0 0 1-5.83 2.41c-1.42 0-2.82-.37-4.06-1.07l-.29-.17-3.07.8.82-2.99-.19-.3a8.196 8.196 0 0 1-1.26-4.32c0-4.54 3.7-8.24 8.24-8.24m-3.53 4.25c-.2 0-.48.07-.73.34-.25.28-.96.94-.96 2.3s.98 2.68 1.12 2.86c.14.19 1.93 2.95 4.67 4.14.65.28 1.16.45 1.56.58.66.21 1.26.18 1.73.11.53-.08 1.62-.66 1.85-1.3.23-.64.23-1.19.16-1.3-.07-.11-.25-.18-.53-.32-.28-.14-1.62-.8-1.87-.89-.25-.09-.43-.14-.62.14-.18.28-.71.89-.87 1.07-.16.19-.32.21-.6.07-.28-.14-1.18-.44-2.25-1.39-.83-.74-1.39-1.66-1.56-1.94-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.19-.28.28-.46.09-.19.05-.35-.02-.49-.07-.14-.62-1.5-.86-2.06-.23-.55-.47-.48-.64-.49h-.53z" />
              </svg>
              <span>WhatsApp: 8537059337</span>
            </a>
          </div>
        </div>

        {/* Success Alert */}
        <AnimatePresence>
          {status.state === 'success' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-200 text-sm flex items-start gap-3 mb-6"
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold block mb-0.5">Appointment Request Logged!</strong>
                <p>{status.message}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* The Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Child Name */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Child's Name <span className="text-amber-400">*</span>
              </label>
              <div className="relative">
                <Baby className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  name="childName"
                  value={formData.childName}
                  onChange={handleChange}
                  required
                  placeholder="Child's full name"
                  className="w-full bg-slate-900/90 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                />
              </div>
            </div>

            {/* Child Age */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Age / Date of Birth <span className="text-amber-400">*</span>
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  name="childAge"
                  value={formData.childAge}
                  onChange={handleChange}
                  required
                  placeholder="e.g. 15 Days / 2 Years"
                  className="w-full bg-slate-900/90 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Parent Name */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Parent / Guardian Name <span className="text-amber-400">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  required
                  placeholder="Parent's name"
                  className="w-full bg-slate-900/90 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                />
              </div>
            </div>

            {/* Mobile */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Mobile Number <span className="text-amber-400">*</span>
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="e.g. 8537059337"
                  className="w-full bg-slate-900/90 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Clinical Specialty */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Care Category <span className="text-amber-400">*</span>
              </label>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all cursor-pointer"
              >
                <option value="Newborn & Neonatal Care (0-28 Days)">Newborn & Neonatal Care (0–28 Days)</option>
                <option value="General Pediatric Consultation">General Child Health Checkup</option>
                <option value="Vaccination & Immunization">Vaccination & Immunization</option>
                <option value="Pediatric Asthma & Allergy">Pediatric Asthma, Cough & Allergy</option>
                <option value="Child Growth & Nutrition">Child Growth, Nutrition & Milestones</option>
                <option value="Pediatric Fever & Infection">Child Fever, Infection & Dengue</option>
              </select>
            </div>

            {/* Preferred Date */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Preferred Consultation Date <span className="text-amber-400">*</span>
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-900/90 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                />
              </div>
            </div>
          </div>

          {/* Child Symptoms / Message */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
              Symptoms / Health Concerns <span className="text-slate-500">(Optional)</span>
            </label>
            <div className="relative">
              <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                placeholder="Describe your child's symptoms (e.g. fever duration, cough, feeding issue, vaccination due)..."
                className="w-full bg-slate-900/90 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all resize-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={status.state === 'submitting'}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm tracking-wide shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:shadow-[0_0_35px_rgba(212,175,55,0.5)] transition-all duration-300 cursor-pointer disabled:opacity-70"
            >
              <Send className="w-4 h-4" />
              <span>
                {status.state === 'submitting' ? 'Confirming with Prachi Medical Center...' : 'Submit Appointment Request'}
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;
