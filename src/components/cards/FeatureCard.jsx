import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * FeatureCard Component
 * Implements the signature perimeter "Snake Animation" on hover:
 * A rotating conic-gradient chases around the border of the card when hovered.
 */
const FeatureCard = ({
  icon: Icon,
  title,
  subtitle,
  description,
  bullets = [],
  badge,
  linkTo = '/contact',
  linkText = 'Learn More',
  className = '',
}) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`group relative p-[2px] rounded-2xl overflow-hidden transition-shadow duration-500 hover:shadow-[0_0_35px_rgba(212,175,55,0.22)] ${className}`}
    >
      {/* Snake Border Runner: A rotating conic-gradient that activates vibrantly on hover */}
      <div
        className="absolute inset-[-100%] opacity-0 group-hover:opacity-100 group-hover:animate-snake pointer-events-none transition-opacity duration-500"
        style={{
          background:
            'conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 300deg, rgba(212, 175, 55, 0.4) 330deg, #D4AF37 348deg, #FFF6C4 360deg)',
        }}
      />

      {/* Static resting border for clean appearance when idle */}
      <div className="absolute inset-0 rounded-2xl border border-slate-800/80 group-hover:border-transparent transition-colors duration-500 pointer-events-none" />

      {/* Inner Card Body */}
      <div className="relative z-10 h-full w-full rounded-[14px] bg-[#0F1523]/95 backdrop-blur-xl p-7 sm:p-8 flex flex-col justify-between border border-slate-800/40">
        <div>
          {/* Header row: Icon & Badge */}
          <div className="flex items-center justify-between mb-5">
            {Icon && (
              <div className="w-13 h-13 rounded-xl bg-amber-400/10 border border-amber-400/25 flex items-center justify-center text-amber-400 group-hover:bg-amber-400/20 group-hover:border-amber-400/50 group-hover:text-amber-300 transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.12)]">
                <Icon className="w-6 h-6" />
              </div>
            )}
            {badge && (
              <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300">
                {badge}
              </span>
            )}
          </div>

          {/* Subtitle / Category */}
          {subtitle && (
            <p className="text-xs font-medium uppercase tracking-widest text-slate-400 mb-1">
              {subtitle}
            </p>
          )}

          {/* Title with Golden Serif Italic accent on key parts */}
          <h3 className="text-xl sm:text-2xl font-semibold text-slate-100 mb-3 group-hover:text-amber-300 transition-colors duration-300 font-serif">
            {title}
          </h3>

          {/* Description */}
          <p className="text-slate-400 text-sm leading-relaxed mb-5">
            {description}
          </p>

          {/* Bullets if provided */}
          {bullets.length > 0 && (
            <ul className="space-y-2 mb-6 pt-2 border-t border-slate-800/60">
              {bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Action Link / Button */}
        {linkTo && (
          <div className="pt-4 border-t border-slate-800/60 mt-auto">
            <Link
              to={linkTo}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-400 hover:text-amber-300 group/link transition-colors"
            >
              <span>{linkText}</span>
              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default FeatureCard;
