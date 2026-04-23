'use client';

import * as React from 'react';
import {
  FloatingIconsHero,
  type FloatingIconsHeroProps,
} from '@/components/ui/floating-icons-hero-section';

// ─── Brand icons ───────────────────────────────────────────────────────────────

const IconStripe = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="5" fill="#635BFF"/>
    <path d="M11.8 9.2c-1.4.1-2.3.9-2.3 2.1 0 1.1.8 1.7 2.3 2.1 1.5.4 2.3 1 2.3 2.1 0 1.2-1 2-2.8 2-1.1 0-2.1-.4-2.7-.9" stroke="white" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
    <path d="M12 7.5v1.5M12 15v1.5" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
);

const IconGitHub = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const IconVSCode = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="vsc-mask">
      <path fill="white" d="M70.9 3.8L38.2 33.5 16.4 17.2 7 22.6v54.8l9.4 5.4L38.2 66.5l32.7 29.7L93 91.7V8.3L70.9 3.8z"/>
    </mask>
    <path d="M93 8.3L70.9 3.8 38.2 33.5 16.4 17.2 7 22.6v54.8l9.4 5.4L38.2 66.5l32.7 29.7L93 91.7V8.3z" fill="#007ACC" mask="url(#vsc-mask)"/>
    <path d="M93 8.3L70.9 3.8v92.4L93 91.7V8.3z" fill="#1F9CF0"/>
    <path d="M7 22.6l9.4-5.4 61.5 32.8-61.5 32.8L7 77.4V22.6z" fill="white" fillOpacity="0.25"/>
    <path d="M70.9 3.8L38.2 33.5 16.4 17.2 7 22.6l31.2 27.4L7 77.4l9.4 5.4 21.8-16.3 32.7 29.7L93 91.7V8.3L70.9 3.8z" fill="white" fillOpacity="0.1"/>
  </svg>
);

const IconReact = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="2.05" fill="#61DAFB"/>
    <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.15" fill="none"/>
    <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.15" fill="none" transform="rotate(60 12 12)"/>
    <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.15" fill="none" transform="rotate(120 12 12)"/>
  </svg>
);

const IconFigma = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z" fill="#0ACF83"/>
    <path d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z" fill="#A259FF"/>
    <path d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z" fill="#F24E1E"/>
    <path d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z" fill="#FF7262"/>
    <path d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z" fill="#1ABCFE"/>
  </svg>
);

const IconVercel = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 22h20L12 2z"/>
  </svg>
);

const IconNotion = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L18.013 2.06c-.42-.326-.981-.7-2.055-.607L3.01 2.479c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"/>
  </svg>
);

const IconShopify = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 109.5 124.5" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M74.7 14.8s-.1-.8-.7-.8c-.5 0-10.5-.8-10.5-.8s-7-6.8-7.7-7.5c-.7-.7-2-.5-2.5-.3l-3.4 1.1C48.5 4.1 46.5 2 43.7 2c-8.4 0-12.4 10.5-13.7 15.8-3.3 1-5.6 1.7-5.9 1.8-1.8.6-1.9.7-2.1 2.4C21.8 23.4 5 108.1 5 108.1l57 10.4 30.8-7.7S74.8 15.6 74.7 14.8zm-24.9-2.2c-1 .3-2.1.6-3.2 1V12c0-2.6-.4-4.7-1-6.4 2.3.3 3.9 3 4.2 6.9v.1zm-8.5-5.9c.7 1.7 1.1 4.1 1.1 7.3v.5l-8.5 2.6c1.6-6.3 4.7-9.3 7.4-10.4zm-3.6-1.2c.3 0 .6.1.9.2-3.3 1.5-6.8 5.3-8.3 12.8l-6.3 1.9c1.7-5.8 5.9-14.9 13.7-14.9z" fill="#95BF47"/>
    <path d="M74 14c-.5 0-10.5-.8-10.5-.8s-7-6.8-7.7-7.5c-.3-.3-.6-.4-.9-.4l-4.6 94.5 30.8-7.7S74.8 15.6 74.7 14.8c-.1-.5-.3-.8-.7-.8z" fill="#5E8E3E"/>
    <path d="M43.7 45.2l-3.8 11.2s-3.3-1.8-7.4-1.8c-6 0-6.3 3.8-6.3 4.7 0 5.1 13.4 7.1 13.4 19.1 0 9.5-6 15.6-14.1 15.6-9.7 0-14.7-6-14.7-6l2.6-8.6s5.1 4.4 9.4 4.4c2.8 0 4-2.2 4-3.8 0-6.7-11-7-11-17.9 0-9.2 6.6-18.1 19.9-18.1 5.1 0 7 1.2 7 1.2z" fill="white"/>
  </svg>
);

const IconGoogleForms = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z" fill="#673AB7"/>
    <path d="M14 2v6h6" fill="#4527A0"/>
    <rect x="8" y="11" width="8" height="1.2" rx=".6" fill="white" fillOpacity=".9"/>
    <rect x="8" y="14" width="8" height="1.2" rx=".6" fill="white" fillOpacity=".75"/>
    <rect x="8" y="17" width="5" height="1.2" rx=".6" fill="white" fillOpacity=".75"/>
  </svg>
);

const IconGoogle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.9999 12.24C21.9999 11.4933 21.9333 10.76 21.8066 10.0533H12.3333V14.16H17.9533C17.7333 15.3467 17.0133 16.3733 15.9666 17.08V19.68H19.5266C21.1933 18.16 21.9999 15.4533 21.9999 12.24Z" fill="#4285F4"/>
    <path d="M12.3333 22C15.2333 22 17.6866 21.0533 19.5266 19.68L15.9666 17.08C15.0199 17.7333 13.7933 18.16 12.3333 18.16C9.52659 18.16 7.14659 16.28 6.27992 13.84H2.59326V16.5133C4.38659 20.0267 8.05992 22 12.3333 22Z" fill="#34A853"/>
    <path d="M6.2799 13.84C6.07324 13.2267 5.9599 12.58 5.9599 11.92C5.9599 11.26 6.07324 10.6133 6.2799 10L2.59326 7.32667C1.86659 8.78667 1.45326 10.32 1.45326 11.92C1.45326 13.52 1.86659 15.0533 2.59326 16.5133L6.2799 13.84Z" fill="#FBBC05"/>
    <path d="M12.3333 5.68C13.8933 5.68 15.3133 6.22667 16.3866 7.24L19.6 4.02667C17.68 2.29333 15.2266 1.33333 12.3333 1.33333C8.05992 1.33333 4.38659 3.97333 2.59326 7.32667L6.27992 10C7.14659 7.56 9.52659 5.68 12.3333 5.68Z" fill="#EA4335"/>
  </svg>
);

const IconNodeJS = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2z" fill="#339933" fillOpacity="0.15" stroke="#339933" strokeWidth="1.4" strokeLinejoin="round"/>
    <path d="M8.5 8.5v4.8c0 .7.4 1.4 1 1.7L12 16.5l2.5-1.5c.6-.4 1-1 1-1.7V8.5" stroke="#339933" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.5 8.5h5" stroke="#339933" strokeWidth="1.4" strokeLinecap="round"/>
    <path d="M12 8.5v7" stroke="#339933" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
);

const IconTypeScript = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="3" fill="#3178C6"/>
    <path d="M5 9h5M7.5 9v6" stroke="white" strokeWidth="1.7" strokeLinecap="round"/>
    <path d="M13 14.5c0 .8.6 1.2 1.5 1.2s1.5-.5 1.5-1.2c0-1.5-3-1-3-2.7 0-.8.6-1.3 1.5-1.3s1.5.5 1.5 1.3" stroke="white" strokeWidth="1.7" strokeLinecap="round" fill="none"/>
  </svg>
);

const IconTailwind = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 54 33" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M27 0C19.8 0 15.3 3.6 13.5 10.8c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C37.256 3.11 34.192 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C16.244 29.29 19.308 32.4 26 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" fill="#06B6D4"/>
  </svg>
);

// ─── Positions ─────────────────────────────────────────────────────────────────

const demoIcons: FloatingIconsHeroProps['icons'] = [
  { id: 1,  icon: IconStripe,       className: 'top-[18%] left-[16%]'   },
  { id: 2,  icon: IconGitHub,       className: 'top-[18%] right-[16%]'  },
  { id: 3,  icon: IconVSCode,       className: 'top-[10%] left-[34%]'   },
  { id: 4,  icon: IconReact,        className: 'top-[10%] right-[34%]'  },
  { id: 5,  icon: IconFigma,        className: 'top-[44%] left-[10%]'   },
  { id: 6,  icon: IconVercel,       className: 'top-[44%] right-[10%]'  },
  { id: 7,  icon: IconNotion,       className: 'top-[66%] left-[18%]'   },
  { id: 8,  icon: IconShopify,      className: 'top-[66%] right-[18%]'  },
  { id: 9,  icon: IconGoogleForms,  className: 'bottom-[12%] left-[32%]'},
  { id: 10, icon: IconGoogle,       className: 'bottom-[12%] right-[32%]'},
  { id: 11, icon: IconNodeJS,       className: 'bottom-[14%] left-[14%]'},
  { id: 12, icon: IconTypeScript,   className: 'bottom-[14%] right-[14%]'},
  { id: 13, icon: IconTailwind,     className: 'top-[10%] left-[48%]'   },
];

interface FloatingIconsHeroDemoProps {
  onOpenContact?: () => void;
}

export default function FloatingIconsHeroDemo({ onOpenContact }: FloatingIconsHeroDemoProps) {
  return (
    <FloatingIconsHero
      title="Votre vision, notre code."
      subtitle="Aexo conçoit des expériences digitales sur mesure — design épuré, technologies de pointe, résultats qui convertissent."
      ctaText="Prêt à collaborer ?"
      ctaHref="#contact"
      onCtaClick={onOpenContact}
      icons={demoIcons}
    />
  );
}
