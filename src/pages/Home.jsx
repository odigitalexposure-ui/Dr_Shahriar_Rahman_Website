import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Calendar,
    Phone,
    ShieldCheck,
    Award,
    HeartPulse,
    Activity,
    Baby,
    Building2,
    Sparkles,
    Star,
    Clock,
    ArrowRight,
    Syringe,
    Smile,
    AlertCircle,
    ChevronLeft,
    ChevronRight,
} from 'lucide-react';
import FeatureCard from '../components/cards/FeatureCard';
import CountUp from '../components/cards/CountUp';
import doctorOtImg from '../assets/doctor-ot.jpg';
import doctorNicuImg from '../assets/doctor-nicu.jpg';
import doctorConsultImg from '../assets/doctor-consult.jpg';
import doctorWardImg from '../assets/doctor-ward.jpg';

const rotatingPhrases = [
    'M.B.B.S. & MD (Cal) Clinical Precision.',
    'P.G.D.C.H. Child Specialist Acumen.',
    'Specialized Neonatology & Preterm Care.',
    'Murshidabad Medical College Attachment.',
    'Ex - R.G. Kar Medical College Heritage.',
    'Complete Childhood Vaccination Protocols.',
    'Gentle Pediatric Asthma & Allergy Care.',
    'Rational Antibiotic Stewardship.',
    'Compassion, Scientific Precision & Trust.',
];

const marqueeDoctorItems = [
    'Dr. Shahriar Rahman',
    'M.B.B.S., MD(Cal), Pediatrics',
    'P.G.D.C.H., Child Specialist & Neonatology',
    'Reg. No. 74003 (WBMC)',
    'Attached: Murshidabad Medical College & Hospital',
    'Ex - R.G. Kar Medical College & Hospital',
    'Neonatology & Newborn Care (0–28 Days)',
    'WHO & IAP Childhood Vaccination Roadmap',
    'Pediatric Asthma & Chronic Cough Management',
    'Developmental Milestones & Growth Audits',
    'Childhood Fevers, Dengue & Infection Care',
    'Prachi Medical Center, Raninagar, Berhampore (Opp. Gate No 1)',
    'Chamber Helpline: 8537059337',
];

const doctorSlides = [
    {
        id: 'consultant',
        image: doctorOtImg,
        category: 'Consultant Neonatologist & Pediatrician',
        title: 'Dr. Shahriar Rahman',
        qualifications: 'M.B.B.S., MD(Cal), P.G.D.C.H.',
        credentials: 'Reg. No. 74003 (WBMC) · Child Specialist',
        highlights: 'Attached: Murshidabad Medical College & Hospital (Ex-R.G. Kar)',
        rating: '4.9 / 5',
        pillIcon: Baby,
        floatingTopText: 'MD (Cal)',
        floatingTopSub: 'P.G.D.C.H. Pediatrician',
        floatingBottomText: 'Murshidabad',
        floatingBottomSub: 'Medical College Attached',
    },
    {
        id: 'nicu',
        image: doctorNicuImg,
        category: 'Neonatology & Newborn Care (0–28 Days)',
        title: 'Advanced Neonatal Care',
        qualifications: 'Preterm & Low Birth Weight Nursery',
        credentials: 'NICU Acumen · Bilirubin Phototherapy & Resuscitation',
        highlights: 'Jaundice phototherapy, Kangaroo Mother Care & infant nutrition',
        rating: '10,000+ Infants',
        pillIcon: HeartPulse,
        floatingTopText: '0–28 Days',
        floatingTopSub: 'Newborn Care Acumen',
        floatingBottomText: 'Hospital NICU',
        floatingBottomSub: 'Attached Liaison',
    },
    {
        id: 'milestones',
        image: doctorConsultImg,
        category: 'Pediatric Development & Clinical Consultation',
        title: 'Growth & Milestone Audits',
        qualifications: 'Physical, Motor & Cognitive Tracking',
        credentials: 'Gentle, Unhurried Childhood Consultations',
        highlights: 'Strict rational antibiotic stewardship & customized nutrition',
        rating: 'Ex-R.G. Kar',
        pillIcon: Award,
        floatingTopText: 'Development',
        floatingTopSub: 'Milestone Tracking',
        floatingBottomText: 'Zero-Sedation',
        floatingBottomSub: 'Rational Medicine',
    },
    {
        id: 'immunization',
        image: doctorWardImg,
        category: 'WHO & IAP Immunization Roadmap',
        title: 'Childhood Vaccination & Asthma',
        qualifications: 'Painless Combination Vaccines',
        credentials: 'Childhood Wheezing, Inhaler Spacer Coaching & Allergy Care',
        highlights: 'Prachi Medical Center, Berhampore · Opposite to Medical College Gate No 1',
        rating: '8537059337',
        pillIcon: Building2,
        floatingTopText: 'IAP Roadmap',
        floatingTopSub: 'Complete Vaccines',
        floatingBottomText: 'Berhampore',
        floatingBottomSub: 'Prachi Medical Center',
    },
];

const DoctorPortraitCard = ({
    isMobile = false,
    activeSlide,
    setActiveSlide,
    handleNextSlide,
    handlePrevSlide,
}) => {
    const slide = doctorSlides[activeSlide];
    const IconComp = slide.pillIcon;

    return (
        <div
            className={`relative w-full ${isMobile ? 'max-w-[320px] sm:max-w-sm mx-auto' : 'max-w-md'} group select-none`}
        >
            {/* Golden ambient halo around doctor frame */}
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-amber-500/40 via-amber-400/20 to-transparent rounded-3xl blur-xl transition-all duration-700" />

            {/* Main Card Frame */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-amber-400/30 bg-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                {/* Animated Image Slide */}
                <div className={`relative w-full ${isMobile ? 'h-[370px] sm:h-[420px]' : 'h-[460px] sm:h-[510px]'} overflow-hidden bg-slate-950`}>
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={slide.id}
                            src={slide.image}
                            alt={slide.title}
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            transition={{ duration: 0.55, ease: 'easeOut' }}
                            className="w-full h-full object-cover object-top"
                        />
                    </AnimatePresence>

                    {/* Vignette Gradients */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-[#0B0F17]/30 to-transparent opacity-95 pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />

                    {/* Top Auto-Slide Badge & Counter */}
                    <div className="absolute top-3 right-3 flex items-center gap-2 z-20">
                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-amber-400/30 text-[11px] font-medium text-amber-300 shadow-md">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="font-mono font-bold">0{activeSlide + 1} / 0{doctorSlides.length}</span>
                        </div>
                    </div>

                    {/* Interactive Navigation Arrows */}
                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            handlePrevSlide();
                        }}
                        aria-label="Previous doctor slide"
                        className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-slate-950/85 backdrop-blur-md border border-slate-700/80 text-slate-300 hover:text-amber-300 hover:border-amber-400 transition-all hover:scale-110 shadow-lg"
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </button>

                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            handleNextSlide();
                        }}
                        aria-label="Next doctor slide"
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-slate-950/85 backdrop-blur-md border border-slate-700/80 text-slate-300 hover:text-amber-300 hover:border-amber-400 transition-all hover:scale-110 shadow-lg"
                    >
                        <ChevronRight className="w-4 h-4" />
                    </button>

                    {/* Slide Details Card Overlay */}
                    <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-20">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={slide.id}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -15 }}
                                transition={{ duration: 0.35, ease: 'easeOut' }}
                                className="p-3.5 sm:p-4 rounded-xl bg-slate-950/95 backdrop-blur-xl border border-amber-500/30 shadow-2xl space-y-1.5"
                            >
                                {/* Header row: Category Pill + Rating / Metric */}
                                <div className="flex items-center justify-between gap-2">
                                    <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold text-amber-300 bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/25 truncate">
                                        <IconComp className="w-3 h-3 text-amber-400 shrink-0" />
                                        <span className="truncate">{slide.category}</span>
                                    </span>
                                    <div className="flex items-center gap-1 text-amber-400 text-xs font-bold bg-amber-400/10 px-2 py-0.5 rounded-lg border border-amber-400/30 shrink-0">
                                        <Star className="w-3 h-3 fill-current" />
                                        <span>{slide.rating}</span>
                                    </div>
                                </div>

                                {/* Title & Qualifications */}
                                <div className="text-left">
                                    <h4 className="text-sm sm:text-base font-serif font-bold text-slate-100">
                                        {slide.title}
                                    </h4>
                                    <p className="text-[11px] sm:text-xs text-amber-300/95 font-medium">
                                        {slide.qualifications}
                                    </p>
                                    <p className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                                        {slide.credentials}
                                    </p>
                                    <p className="text-[10px] text-slate-300/90 italic mt-0.5 line-clamp-1 border-t border-slate-800/80 pt-1">
                                        {slide.highlights}
                                    </p>
                                </div>

                                {/* Auto-Slide Progress Bar */}
                                <div className="w-full bg-slate-800/80 h-1 overflow-hidden rounded-full mt-1.5">
                                    <motion.div
                                        key={activeSlide}
                                        initial={{ width: '0%' }}
                                        animate={{ width: '100%' }}
                                        transition={{ duration: 3.0, ease: 'linear' }}
                                        className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-300 shadow-[0_0_8px_rgba(212,175,55,0.8)]"
                                    />
                                </div>

                                {/* Interactive Indicator Pills */}
                                <div className="flex items-center justify-center gap-1.5 pt-1">
                                    {doctorSlides.map((_, idx) => (
                                        <button
                                            key={idx}
                                            type="button"
                                            onClick={() => setActiveSlide(idx)}
                                            aria-label={`Go to slide ${idx + 1}`}
                                            className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeSlide
                                                    ? 'w-6 bg-amber-400 shadow-[0_0_8px_rgba(212,175,55,0.6)]'
                                                    : 'w-1.5 bg-slate-700 hover:bg-slate-500'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Floating Top Badge (Dynamic for each slide) */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={`top-${slide.id}`}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
                    exit={{ opacity: 0, scale: 0.85 }}
                    transition={{
                        opacity: { duration: 0.3 },
                        y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                    }}
                    className="absolute top-3 -left-2 sm:top-4 sm:-left-6 z-30 flex items-center gap-2 p-2 sm:p-2.5 rounded-xl bg-slate-950/95 backdrop-blur-xl border border-amber-400/40 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
                >
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
                        <IconComp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div className="text-left">
                        <span className="block text-[11px] sm:text-xs font-bold text-slate-100">{slide.floatingTopText}</span>
                        <span className="text-[9px] sm:text-[10px] text-slate-400">{slide.floatingTopSub}</span>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Floating Bottom Badge (Dynamic for each slide) */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={`bottom-${slide.id}`}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1, y: [0, 6, 0] }}
                    exit={{ opacity: 0, scale: 0.85 }}
                    transition={{
                        opacity: { duration: 0.3 },
                        y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
                    }}
                    className="absolute -bottom-3 -right-2 sm:-bottom-5 sm:-right-5 z-30 flex items-center gap-2 p-2 sm:p-2.5 rounded-xl bg-slate-950/95 backdrop-blur-xl border border-emerald-500/40 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
                >
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400 shrink-0">
                        <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div className="text-left">
                        <span className="block text-[11px] sm:text-xs font-bold text-slate-100">{slide.floatingBottomText}</span>
                        <span className="text-[9px] sm:text-[10px] text-slate-400">{slide.floatingBottomSub}</span>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

const Home = () => {
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPhraseIndex((prev) => (prev + 1) % rotatingPhrases.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // Continuous auto-sliding every 3.0 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % doctorSlides.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [activeSlide]);

    const handleNextSlide = () => {
        setActiveSlide((prev) => (prev + 1) % doctorSlides.length);
    };

    const handlePrevSlide = () => {
        setActiveSlide((prev) => (prev - 1 + doctorSlides.length) % doctorSlides.length);
    };
    return (
        <div className="min-h-screen bg-[#0B0F17] text-slate-100 overflow-hidden">
            {/* ===================== HERO SECTION ===================== */}
            <section className="relative pt-4 sm:pt-6 lg:pt-6 pb-16 lg:pb-20 overflow-hidden">
                {/* Ambient golden and deep navy glow halos */}
                <div className="absolute top-10 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
                        {/* Left Column: Doctor Bio & Typography */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, ease: 'easeOut' }}
                            className="lg:col-span-7 space-y-6 text-center lg:text-left"
                        >
                            {/* Doctor Status Badge */}
                            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-amber-400/15 via-amber-400/10 to-transparent border border-amber-400/30 text-amber-300 shadow-[0_0_20px_rgba(212,175,55,0.15)]">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                <span>Consultant Child Specialist & Neonatologist · Reg. No. 74003</span>
                            </div>

                            {/* Main Headline with Dynamic Text Rotation from Qualifications & Services */}
                            <h1 className="text-3xl sm:text-5xl lg:text-[54px] xl:text-6xl font-serif font-bold text-slate-100 tracking-tight leading-[1.18]">
                                Specialized Newborn & Pediatric Care{' '}
                                <span className="text-slate-300 font-sans font-light text-xl sm:text-3xl lg:text-4xl block sm:inline mt-1 sm:mt-0">
                                    Built on{' '}
                                </span>
                                <span className="block mt-1 sm:mt-2 min-h-[2.6em] sm:min-h-[1.5em] lg:min-h-[1.3em]">
                                    <AnimatePresence mode="wait">
                                        <motion.span
                                            key={phraseIndex}
                                            initial={{ opacity: 0, y: 18 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -18 }}
                                            transition={{ duration: 0.4, ease: 'easeOut' }}
                                            className="font-serif italic gold-text-gradient inline-block"
                                        >
                                            {rotatingPhrases[phraseIndex]}
                                        </motion.span>
                                    </AnimatePresence>
                                </span>
                            </h1>

                            {/* ================= MOBILE & TABLET ONLY: DOCTOR IMAGE DIRECTLY AFTER MARQUEE TEXT ================= */}
                            <div className="block lg:hidden my-8">
                                <DoctorPortraitCard
                                    isMobile={true}
                                    activeSlide={activeSlide}
                                    setActiveSlide={setActiveSlide}
                                    handleNextSlide={handleNextSlide}
                                    handlePrevSlide={handlePrevSlide}
                                />
                            </div>

                            {/* Doctor Profile Callout Card */}
                            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#0F1523]/95 via-slate-900/90 to-[#0F1523]/80 border-l-4 border-amber-400 border border-slate-800/80 shadow-[0_10px_30px_rgba(0,0,0,0.5)] text-left">
                                <p className="text-slate-300 text-xs sm:text-base leading-relaxed font-light">
                                    <strong className="text-amber-300 font-serif font-bold text-sm sm:text-lg">Dr. Shahriar Rahman</strong>. Serving families across Murshidabad with hospital-grade neonatal precision, pediatric intensive care acumen, and gentle, unhurried examinations. Attached to <span className="text-slate-100 font-medium">Murshidabad Medical College & Hospital</span> and formerly associated with <span className="text-slate-100 font-medium">R.G. Kar Medical College & Hospital</span>.
                                </p>
                            </div>

                            {/* High-Trust Medical Credential Badges */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                                <div className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-[#0F1523]/90 border border-amber-500/25 shadow-sm hover:border-amber-400/50 transition-colors text-left">
                                    <div className="w-8 h-8 rounded-lg bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400 shrink-0">
                                        <ShieldCheck className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <span className="block text-xs font-bold text-slate-100">Reg. No. 74003 (WBMC)</span>
                                        <span className="text-[11px] text-emerald-400/90 font-medium">Verified Medical Council</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-[#0F1523]/90 border border-amber-500/25 shadow-sm hover:border-amber-400/50 transition-colors text-left">
                                    <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
                                        <Building2 className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <span className="block text-xs font-bold text-slate-100">Murshidabad Medical College</span>
                                        <span className="text-[11px] text-amber-300/90 font-medium">Attached Institution Liaison</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-[#0F1523]/90 border border-amber-500/25 shadow-sm hover:border-amber-400/50 transition-colors text-left">
                                    <div className="w-8 h-8 rounded-lg bg-sky-400/10 border border-sky-400/30 flex items-center justify-center text-sky-400 shrink-0">
                                        <Award className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <span className="block text-xs font-bold text-slate-100">Ex - R.G. Kar Medical College</span>
                                        <span className="text-[11px] text-sky-300/90 font-medium">Senior Clinical Pedigree</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-[#0F1523]/90 border border-amber-500/25 shadow-sm hover:border-amber-400/50 transition-colors text-left">
                                    <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
                                        <Baby className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <span className="block text-xs font-bold text-slate-100">Prachi Medical Center</span>
                                        <span className="text-[11px] text-amber-300/90 font-medium">Berhampore (Opp. Gate No 1)</span>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                                <Link
                                    to="/contact"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-[0_0_25px_rgba(212,175,55,0.35)] hover:shadow-[0_0_35px_rgba(212,175,55,0.55)] transition-all duration-300 transform hover:-translate-y-0.5"
                                >
                                    <Calendar className="w-4 h-4" />
                                    <span>Book Chamber Appointment</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>

                                <a
                                    href="https://wa.me/918537059337?text=Hello%20Dr.%20Shahriar%20Rahman,%20I%20would%20like%20to%20inquire%20about%20a%20child%20consultation."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900/90 border border-slate-700 hover:border-emerald-500 hover:text-emerald-300 transition-all duration-300"
                                >
                                    <Phone className="w-4 h-4 text-emerald-400" />
                                    <span>WhatsApp: 8537059337</span>
                                </a>
                            </div>
                        </motion.div>

                        {/* ================= DESKTOP & LAPTOP ONLY: RIGHT COLUMN DOCTOR PORTRAIT ================= */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="hidden lg:flex lg:col-span-5 relative justify-center"
                        >
                            <DoctorPortraitCard
                                isMobile={false}
                                activeSlide={activeSlide}
                                setActiveSlide={setActiveSlide}
                                handleNextSlide={handleNextSlide}
                                handlePrevSlide={handlePrevSlide}
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===================== DOCTOR QUALIFICATIONS & SERVICES CONTINUOUS MARQUEE ===================== */}
            <div className="border-y border-amber-500/25 bg-gradient-to-r from-[#070A0F] via-slate-950 to-[#070A0F] py-3.5 relative overflow-hidden">
                {/* Subtle lateral gradient fades */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#070A0F] to-transparent z-10" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#070A0F] to-transparent z-10" />

                <div className="animate-marquee flex items-center gap-8 whitespace-nowrap text-xs sm:text-sm">
                    {[...marqueeDoctorItems, ...marqueeDoctorItems].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 shrink-0">
                            <span className="text-amber-400 text-xs">✦</span>
                            <span className="font-serif font-medium text-slate-200 hover:text-amber-300 transition-colors">
                                {item}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* ===================== QUICK STATS BAR ===================== */}
            <section className="py-10 bg-[#070A0F] border-y border-slate-800/80 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
                        <div className="p-4">
                            <div className="text-3xl sm:text-4xl font-serif font-bold text-amber-400 mb-1">
                                <CountUp end={74003} duration={2200} formatSeparator={false} />
                            </div>
                            <p className="text-xs sm:text-sm text-slate-400 uppercase tracking-wider font-medium">
                                WBMC Registration No.
                            </p>
                        </div>
                        <div className="p-4">
                            <div className="text-3xl sm:text-4xl font-serif font-bold text-amber-400 mb-1">
                                <CountUp end={10000} duration={2000} formatSeparator={true} suffix="+" />
                            </div>
                            <p className="text-xs sm:text-sm text-slate-400 uppercase tracking-wider font-medium">
                                Children & Neonates Treated
                            </p>
                        </div>
                        <div className="p-4">
                            <div className="text-3xl sm:text-4xl font-serif font-bold text-amber-400 mb-1">
                                R.G. Kar
                            </div>
                            <p className="text-xs sm:text-sm text-slate-400 uppercase tracking-wider font-medium">
                                Ex-Senior Clinical Experience
                            </p>
                        </div>
                        <div className="p-4">
                            <div className="text-3xl sm:text-4xl font-serif font-bold text-amber-400 mb-1">
                                MMC&H
                            </div>
                            <p className="text-xs sm:text-sm text-slate-400 uppercase tracking-wider font-medium">
                                Attached Medical College
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===================== FEATURED PEDIATRIC SERVICES (SNAKE ANIMATION) ===================== */}
            <section className="py-20 lg:py-28 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-amber-400/10 border border-amber-400/30 text-amber-300 mb-3">
                            <Baby className="w-3.5 h-3.5" />
                            <span>Pediatrics & Neonatal Specialties</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-100 mb-4">
                            Dedicated Child Healthcare,{' '}
                            <span className="font-serif italic gold-text-gradient">From Day 1 to Adolescence</span>
                        </h2>
                        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                            Every card below demonstrates our pediatric clinical expertise. Hover over any service to observe the signature golden perimeter snake animation.
                        </p>
                    </div>

                    {/* Service Cards Grid featuring exactly 3 core clinical services */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={Baby}
                            badge="Neonatal Care"
                            subtitle="0 – 28 Days Newborn"
                            title={
                                <span>
                                    Neonatology & <span className="font-serif italic text-amber-400">Newborn Care</span>
                                </span>
                            }
                            description="Specialized assessment for full-term and premature neonates, neonatal jaundice, birth weight monitoring, umbilical care, and infant feeding guidance."
                            bullets={[
                                'Phototherapy & neonatal jaundice assessment',
                                'Preterm & low birth weight recovery protocol',
                                'Breastfeeding & infant latching counseling',
                            ]}
                            linkTo="/services"
                            linkText="Explore Neonatal Care"
                        />

                        <FeatureCard
                            icon={Syringe}
                            badge="Immunization"
                            subtitle="WHO & IAP Schedule"
                            title={
                                <span>
                                    Childhood <span className="font-serif italic text-amber-400">Vaccination Chart</span>
                                </span>
                            }
                            description="Complete protection against infectious childhood diseases adhering to the latest Indian Academy of Pediatrics (IAP) immunization guidelines."
                            bullets={[
                                'Birth vaccines: BCG, OPV, Hepatitis B',
                                'Painless/Painless combination DPT & Rotavirus',
                                'Typhoid, MMR, Varicella & Flu coverage',
                            ]}
                            linkTo="/services"
                            linkText="View Vaccination Plan"
                        />

                        <FeatureCard
                            icon={HeartPulse}
                            badge="Respiratory Care"
                            subtitle="Allergy & Chest"
                            title={
                                <span>
                                    Pediatric Asthma & <span className="font-serif italic text-amber-400">Chronic Cough</span>
                                </span>
                            }
                            description="Gentle diagnostic workup and inhaler/spacer technique optimization for recurrent childhood wheezing, seasonal allergies, and bronchitis."
                            bullets={[
                                'Childhood asthma spacer & inhaler coaching',
                                'Allergic rhinitis & adenoid hypertrophy care',
                                'Recurrent nocturnal cough resolution',
                            ]}
                            linkTo="/services"
                            linkText="Explore Respiratory Care"
                        />
                    </div>

                    <div className="mt-12 text-center">
                        <Link
                            to="/services"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 underline underline-offset-8 transition-colors"
                        >
                            <span>View all pediatric services and chamber facilities</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ===================== CLINICAL PHILOSOPHY / ABOUT PREVIEW ===================== */}
            <section className="py-20 bg-[#070A0F] border-t border-slate-800/80 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        {/* Left Image: Doctor with child/baby */}
                        <div className="lg:col-span-5 relative">
                            <div className="relative rounded-2xl overflow-hidden border border-amber-500/25 shadow-2xl">
                                <img
                                    src={doctorOtImg}
                                    alt="Dr. Shahriar Rahman - Senior Child Specialist in OT Dress"
                                    loading="lazy"
                                    className="w-full h-[400px] object-cover object-top"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-transparent to-transparent opacity-80" />
                                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-800">
                                    <p className="font-serif italic text-amber-300 text-sm">
                                        "A child is not merely a small adult; their physiology demands gentle, scientific precision and zero unnecessary medication."
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Text: Doctor's Philosophy */}
                        <div className="lg:col-span-7 space-y-6">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-amber-400/10 border border-amber-400/30 text-amber-300">
                                <ShieldCheck className="w-3.5 h-3.5" />
                                <span>Pediatrician's Philosophy</span>
                            </div>

                            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-100">
                                Gentle, Fear-Free Healing{' '}
                                <span className="font-serif italic gold-text-gradient">for Every Child in Murshidabad.</span>
                            </h2>

                            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                                Visiting a doctor can be an anxious experience for children and parents alike. At Prachi Medical Center, Dr. Shahriar Rahman creates an unhurried, reassuring environment where little ones feel comfortable and parents are heard patiently.
                            </p>

                            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                                With specialized training from <strong>R.G. Kar Medical College</strong> and current clinical attachment at <strong>Murshidabad Medical College & Hospital</strong>, Dr. Rahman follows rigorous ethical medical principles—avoiding indiscriminate antibiotic use and empowering parents with evidence-based home-care knowledge.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                                    <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="text-sm font-semibold text-slate-200">Rational Antibiotic Policy</h4>
                                        <p className="text-xs text-slate-400 mt-0.5">Protecting your child’s developing gut microbiome and immunity.</p>
                                    </div>
                                </div>

                                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                                    <Building2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="text-sm font-semibold text-slate-200">Medical College Attached</h4>
                                        <p className="text-xs text-slate-400 mt-0.5">Seamless hospital escalation for sick neonates and young children.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-2">
                                <Link
                                    to="/about"
                                    className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 group"
                                >
                                    <span>Read Full Qualifications & Hospital Credentials</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===================== PARENT TESTIMONIALS ===================== */}
            <section className="py-20 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-14">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-amber-400/10 border border-amber-400/30 text-amber-300 mb-3">
                            <Star className="w-3.5 h-3.5 fill-current" />
                            <span>Verified Parent Experiences</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-100">
                            Trusted by Parents Across <span className="font-serif italic gold-text-gradient">Murshidabad</span>
                        </h2>
                    </div>

                    {/* Infinite Sliding Testimonials Carousel */}
                    <div className="relative w-full overflow-hidden py-4 -mx-4 sm:mx-0">
                        {/* Subtle lateral gradient fades */}
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#0B0F17] to-transparent z-10" />
                        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#0B0F17] to-transparent z-10" />

                        <div className="animate-marquee flex gap-6 sm:gap-8 items-stretch">
                            {[
                                {
                                    quote:
                                        'My 7-day-old baby developed high bilirubin jaundice. Dr. Shahriar Rahman diagnosed the issue quickly at Prachi Medical Center and guided phototherapy without causing panic. My baby recovered completely in 48 hours.',
                                    author: 'Poulomi Das',
                                    location: 'Gorabazar, Berhampore',
                                    condition: 'Neonatal Jaundice Care',
                                    stars: 5,
                                },
                                {
                                    quote:
                                        'My 4-year-old son suffered from constant midnight wheezing and chronic cough. Dr. Rahman introduced proper inhaler spacer therapy and eliminated 4 unnecessary cough syrups. He hasn’t had an asthma flare-up in 8 months!',
                                    author: 'Farhan Sheikh',
                                    location: 'Raninagar, Murshidabad',
                                    condition: 'Childhood Asthma Recovery',
                                    stars: 5,
                                },
                                {
                                    quote:
                                        'Having a pediatrician with R.G. Kar training and Murshidabad Medical College attachment in Berhampore is a huge blessing. Dr. Rahman explains everything to parents with patience and never prescribes extra medicines.',
                                    author: 'Dr. Amitav Ghosh',
                                    location: 'Station Road, Berhampore',
                                    condition: 'Child Health & Immunization',
                                    stars: 5,
                                },
                                {
                                    quote:
                                        'During monsoon dengue fever, my 6-year-old daughter had a very high temperature and platelet drop. Dr. Rahman’s systematic fluid protocol and daily blood monitoring brought her home safe without any panic.',
                                    author: 'Subrata Sen',
                                    location: 'Lalbagh, Murshidabad',
                                    condition: 'Childhood Dengue Care',
                                    stars: 5,
                                },
                                {
                                    quote:
                                        'Born at 33 weeks with low birth weight, our premature baby needed intense care. Dr. Shahriar Rahman guided us through Kangaroo Mother Care and specialized nutrition. She is thriving and achieving all milestones!',
                                    author: 'Anusree Mukherjee',
                                    location: 'Jiaganj, Murshidabad',
                                    condition: 'Preterm Newborn Recovery',
                                    stars: 5,
                                },
                                {
                                    quote:
                                        'We visited Prachi Medical Center for our infant’s first painless 6-in-1 vaccination. The injection technique was so gentle that our baby hardly cried, and no post-vaccine fever occurred. Best child specialist in Berhampore!',
                                    author: 'Tariqul Islam',
                                    location: 'Kandi, Murshidabad',
                                    condition: 'Painless Infant Vaccination',
                                    stars: 5,
                                },
                                // Duplicated for seamless infinite sliding loop
                                {
                                    quote:
                                        'My 7-day-old baby developed high bilirubin jaundice. Dr. Shahriar Rahman diagnosed the issue quickly at Prachi Medical Center and guided phototherapy without causing panic. My baby recovered completely in 48 hours.',
                                    author: 'Poulomi Das',
                                    location: 'Gorabazar, Berhampore',
                                    condition: 'Neonatal Jaundice Care',
                                    stars: 5,
                                },
                                {
                                    quote:
                                        'My 4-year-old son suffered from constant midnight wheezing and chronic cough. Dr. Rahman introduced proper inhaler spacer therapy and eliminated 4 unnecessary cough syrups. He hasn’t had an asthma flare-up in 8 months!',
                                    author: 'Farhan Sheikh',
                                    location: 'Raninagar, Murshidabad',
                                    condition: 'Childhood Asthma Recovery',
                                    stars: 5,
                                },
                                {
                                    quote:
                                        'Having a pediatrician with R.G. Kar training and Murshidabad Medical College attachment in Berhampore is a huge blessing. Dr. Rahman explains everything to parents with patience and never prescribes extra medicines.',
                                    author: 'Dr. Amitav Ghosh',
                                    location: 'Station Road, Berhampore',
                                    condition: 'Child Health & Immunization',
                                    stars: 5,
                                },
                                {
                                    quote:
                                        'During monsoon dengue fever, my 6-year-old daughter had a very high temperature and platelet drop. Dr. Rahman’s systematic fluid protocol and daily blood monitoring brought her home safe without any panic.',
                                    author: 'Subrata Sen',
                                    location: 'Lalbagh, Murshidabad',
                                    condition: 'Childhood Dengue Care',
                                    stars: 5,
                                },
                                {
                                    quote:
                                        'Born at 33 weeks with low birth weight, our premature baby needed intense care. Dr. Shahriar Rahman guided us through Kangaroo Mother Care and specialized nutrition. She is thriving and achieving all milestones!',
                                    author: 'Anusree Mukherjee',
                                    location: 'Jiaganj, Murshidabad',
                                    condition: 'Preterm Newborn Recovery',
                                    stars: 5,
                                },
                                {
                                    quote:
                                        'We visited Prachi Medical Center for our infant’s first painless 6-in-1 vaccination. The injection technique was so gentle that our baby hardly cried, and no post-vaccine fever occurred. Best child specialist in Berhampore!',
                                    author: 'Tariqul Islam',
                                    location: 'Kandi, Murshidabad',
                                    condition: 'Painless Infant Vaccination',
                                    stars: 5,
                                },
                            ].map((review, idx) => (
                                <div
                                    key={idx}
                                    className="w-[300px] sm:w-[380px] shrink-0 p-6 sm:p-8 rounded-2xl bg-[#0F1523]/90 border border-slate-800 flex flex-col justify-between hover:border-amber-500/40 hover:shadow-[0_0_25px_rgba(212,175,55,0.15)] transition-all select-none group"
                                >
                                    <div>
                                        <div className="flex items-center gap-1 text-amber-400 mb-4">
                                            {[...Array(review.stars)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 fill-current" />
                                            ))}
                                        </div>
                                        <p className="text-slate-300 text-sm italic leading-relaxed mb-6 font-serif">
                                            "{review.quote}"
                                        </p>
                                    </div>

                                    <div className="pt-4 border-t border-slate-800/80">
                                        <h4 className="text-sm font-semibold text-slate-100 group-hover:text-amber-300 transition-colors">
                                            {review.author}
                                        </h4>
                                        <p className="text-xs text-slate-400">{review.location}</p>
                                        <span className="inline-block mt-1 text-[11px] text-amber-300 font-medium">
                                            {review.condition}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-center mt-6">
                        <span className="text-xs text-slate-500 flex items-center justify-center gap-1.5 font-medium">
                            <span>⇄ Continuous live parent feedback · Hover card to pause</span>
                        </span>
                    </div>
                </div>
            </section>

            {/* ===================== APPOINTMENT CALL TO ACTION ===================== */}
            <section className="py-16 relative">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-gradient-to-r from-amber-950/40 via-slate-900 to-[#0F1523] border border-amber-500/30 shadow-[0_0_50px_rgba(212,175,55,0.15)] text-center">
                        <div className="max-w-2xl mx-auto space-y-4">
                            <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
                                Prachi Medical Center · Berhampore
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-100">
                                Your Child's Health Deserves <span className="font-serif italic gold-text-gradient">Specialist Dedication</span>
                            </h2>
                            <p className="text-slate-300 text-sm sm:text-base">
                                Chamber situated at Swarnamoyee Market Complex, Station Road, Raninagar, Gorabazar, Berhampore (Opposite to Medical College Gate No 1).
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                                <Link
                                    to="/contact"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all"
                                >
                                    <Calendar className="w-4 h-4" />
                                    <span>Book Chamber Slot Now</span>
                                </Link>

                                <a
                                    href="https://wa.me/918537059337?text=Hello%20Dr.%20Shahriar%20Rahman,%20I%20would%20like%20to%20book%20a%20child%20consultation."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900 border border-slate-700 hover:border-emerald-500 hover:text-emerald-300 transition-all"
                                >
                                    <Phone className="w-4 h-4 text-emerald-400" />
                                    <span>WhatsApp: 8537059337</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
