'use client';

import * as React from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface IconProps {
  id: number;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  className: string;
}

export interface FloatingIconsHeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  icons: IconProps[];
  onCtaClick?: () => void;
}

const Icon = ({
  mouseX,
  mouseY,
  iconData,
  index,
}: {
  mouseX: React.MutableRefObject<number>;
  mouseY: React.MutableRefObject<number>;
  iconData: IconProps;
  index: number;
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  React.useEffect(() => {
    const handleMouseMove = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const distance = Math.sqrt(
          Math.pow(mouseX.current - (rect.left + rect.width / 2), 2) +
            Math.pow(mouseY.current - (rect.top + rect.height / 2), 2)
        );
        if (distance < 150) {
          const angle = Math.atan2(
            mouseY.current - (rect.top + rect.height / 2),
            mouseX.current - (rect.left + rect.width / 2)
          );
          const force = (1 - distance / 150) * 50;
          x.set(-Math.cos(angle) * force);
          y.set(-Math.sin(angle) * force);
        } else {
          x.set(0);
          y.set(0);
        }
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y, mouseX, mouseY]);

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn('absolute', iconData.className)}
    >
      <motion.div
        className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 p-3 rounded-3xl shadow-xl bg-card/80 backdrop-blur-md border border-border/20"
        animate={{ y: [0, -8, 0, 8, 0], x: [0, 6, 0, -6, 0], rotate: [0, 5, 0, -5, 0] }}
        transition={{
          duration: 5 + (index % 5),
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
      >
        <iconData.icon className="w-8 h-8 md:w-10 md:h-10 text-foreground" />
      </motion.div>
    </motion.div>
  );
};

const FloatingIconsHero = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & FloatingIconsHeroProps
>(({ className, title, subtitle, ctaText, ctaHref, icons, onCtaClick, ...props }, ref) => {
  const mouseX = React.useRef(0);
  const mouseY = React.useRef(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    mouseX.current = event.clientX;
    mouseY.current = event.clientY;
  };

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn(
        'relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-background',
        className
      )}
      {...props}
    >
      {/* ── Ambient color glow ── */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.07, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 50%, var(--glow-primary) 0%, var(--glow-secondary) 50%, transparent 75%)',
          }}
          className="absolute inset-0"
        />
        {/* Secondary offset glow for depth */}
        <motion.div
          animate={{ scale: [1, 1.04, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          style={{
            background:
              'radial-gradient(ellipse 50% 40% at 35% 60%, var(--glow-secondary) 0%, transparent 70%)',
          }}
          className="absolute inset-0"
        />
      </div>

      {/* Floating icons layer — masqué sur mobile */}
      <div className="absolute inset-0 w-full h-full hidden md:block">
        {icons.map((iconData, index) => (
          <Icon key={iconData.id} mouseX={mouseX} mouseY={mouseY} iconData={iconData} index={index} />
        ))}
      </div>

      {/* Foreground content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-b from-gray-900 via-gray-800 to-gray-500 dark:from-white dark:via-white dark:to-violet-200/60 text-transparent bg-clip-text leading-[1.1] pb-2">
            {title}
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 sm:mt-6 max-w-lg mx-auto text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex justify-center"
        >
          {onCtaClick ? (
            <button
              onClick={onCtaClick}
              className="group flex items-center gap-4 cursor-pointer"
            >
              <span className="text-xl md:text-2xl font-semibold text-foreground group-hover:text-foreground/80 transition-colors duration-300">
                {ctaText}
              </span>
              <span className="flex items-center justify-center w-11 h-11 rounded-full border-2 border-foreground/20 bg-foreground/5 group-hover:bg-foreground group-hover:border-foreground transition-all duration-300">
                <ArrowRight className="w-4 h-4 text-foreground group-hover:text-background transition-colors duration-300 group-hover:translate-x-0.5 translate-x-0 motion-safe:transition-transform" />
              </span>
            </button>
          ) : (
            <a
              href={ctaHref}
              className="group flex items-center gap-4"
            >
              <span className="text-xl md:text-2xl font-semibold text-foreground group-hover:text-foreground/80 transition-colors duration-300">
                {ctaText}
              </span>
              <span className="flex items-center justify-center w-11 h-11 rounded-full border-2 border-foreground/20 bg-foreground/5 group-hover:bg-foreground group-hover:border-foreground transition-all duration-300">
                <ArrowRight className="w-4 h-4 text-foreground group-hover:text-background transition-colors duration-300" />
              </span>
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
});

FloatingIconsHero.displayName = 'FloatingIconsHero';

export { FloatingIconsHero };
