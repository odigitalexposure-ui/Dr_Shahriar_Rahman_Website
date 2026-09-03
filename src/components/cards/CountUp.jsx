import React, { useEffect, useState, useRef } from 'react';

/**
 * CountUp Component:
 * Triggers a smooth ease-out count-up animation when scrolled into view.
 */
const CountUp = ({
  end,
  start = 0,
  duration = 2000,
  formatSeparator = false,
  prefix = '',
  suffix = '',
}) => {
  const [count, setCount] = useState(start);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime = null;

          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // Cubic ease-out curve for natural deceleration
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.floor(start + (end - start) * easeOutProgress);

            setCount(currentVal);

            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };

          window.requestAnimationFrame(step);
        }
      },
      {
        threshold: 0.2,
      }
    );

    const currentElem = elementRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) {
        observer.unobserve(currentElem);
      }
    };
  }, [end, start, duration]);

  const displayValue = formatSeparator
    ? count.toLocaleString('en-IN')
    : count.toString();

  return (
    <span ref={elementRef} className="tabular-nums">
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
};

export default CountUp;
