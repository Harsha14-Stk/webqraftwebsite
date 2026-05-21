import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useMemo, useRef, useState } from 'react';

interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  style?: React.CSSProperties;
}

export const WordsPullUp = ({ text, className = '', showAsterisk = false, style }: WordsPullUpProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(' ');

  return (
    <div ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <motion.span
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="relative inline-block"
            style={{ marginRight: isLast ? 0 : '0.25em' }}
          >
            {word}
            {showAsterisk && isLast && <span className="absolute -right-[0.3em] top-[0.65em] text-[0.31em]">*</span>}
          </motion.span>
        );
      })}
    </div>
  );
};

interface Segment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  className?: string;
  style?: React.CSSProperties;
}

export const WordsPullUpMultiStyle = ({ segments, className = '', style }: WordsPullUpMultiStyleProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const words = useMemo(() => {
    const items: { word: string; className?: string }[] = [];
    segments.forEach((segment) => {
      segment.text.split(' ').forEach((word) => {
        if (word) items.push({ word, className: segment.className });
      });
    });
    return items;
  }, [segments]);

  return (
    <div ref={ref} className={`inline-flex flex-wrap justify-center ${className}`} style={style}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          className={`inline-block ${word.className ?? ''}`}
          style={{ marginRight: '0.25em' }}
        >
          {word.word}
        </motion.span>
      ))}
    </div>
  );
};

type RouteNavItem = { label: string; to: string };
type AnchorNavItem = { label: string; id: string };
type NavItem = RouteNavItem | AnchorNavItem;

const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Why us', to: '/about' },
  { label: 'Portfolio', id: 'portfolio' },
  { label: 'Contact', to: '/contact' }
];

const LogoMark = () => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex h-10 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#E1E0CC] sm:h-12 sm:px-5">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-[#08101a]">WQ</span>
        WebQraft
      </div>
    );
  }

  return (
    <img
      src="/webqraft-logo-white.png"
      alt="WebQraft"
      onError={() => setFailed(true)}
      className="h-10 w-auto sm:h-12"
    />
  );
};

const PrismaHero = () => {
  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    event.preventDefault();
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="min-h-screen w-full p-3 sm:p-4 lg:p-5">
      <div className="relative h-full min-h-[calc(100vh-1.5rem)] w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#060b12] shadow-glow md:rounded-[2.5rem]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
        />

        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.55] mix-blend-overlay" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(249,168,37,0.18),transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(45,212,191,0.22),transparent_28%),linear-gradient(180deg,rgba(5,9,16,0.18),rgba(5,9,16,0.72))]" />
        <div className="pointer-events-none absolute inset-0 bg-hero-grid bg-[length:64px_64px] opacity-[0.18]" />

        <nav className="absolute right-3 top-3 z-30 sm:right-6 md:right-10">
          <div className="flex max-w-[calc(100vw-1.5rem)] flex-wrap items-center justify-end gap-2 rounded-[1.2rem] border border-white/15 bg-black/55 px-3 py-2 backdrop-blur-md sm:max-w-[calc(100vw-2rem)] sm:gap-4 sm:px-4 md:max-w-none md:flex-nowrap md:rounded-[1.4rem] md:px-6 lg:gap-6">
            {navItems.map((item) =>
              'to' in item ? (
                <a
                  key={item.label}
                  href={item.to}
                  onClick={(event) => {
                    event.preventDefault();
                    navigateTo(item.to);
                  }}
                  className="whitespace-nowrap rounded-lg px-1 py-1 text-[10px] text-white/70 transition-colors hover:text-[#E1E0CC] sm:text-xs md:text-sm"
                >
                  {item.label}
                </a>
              ) : (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(event) => handleNavClick(event, item.id)}
                  className="whitespace-nowrap rounded-lg px-1 py-1 text-[10px] text-white/70 transition-colors hover:text-[#E1E0CC] sm:text-xs md:text-sm"
                >
                  {item.label}
                </a>
              )
            )}
          </div>
        </nav>

        <div className="pointer-events-none absolute left-0 right-0 top-4 z-20 px-3 sm:px-6 md:px-10">
          <LogoMark />
        </div>

        <div className="absolute bottom-0 left-0 right-0 px-4 pb-3 sm:px-6 md:px-10">
          <div className="grid grid-cols-12 items-end gap-6 lg:gap-8">
            <div className="col-span-12 lg:col-span-8">
              <motion.blockquote
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.95, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative max-w-4xl"
              >
                <span className="pointer-events-none absolute -left-1 -top-6 text-5xl leading-none text-primary/65 sm:-left-4 sm:-top-10 sm:text-8xl md:text-9xl">
                  "
                </span>
                <p className="bg-gradient-to-r from-[#F7F0D3] via-[#E7E0BD] to-[#D9D3B7] bg-clip-text text-2xl font-semibold leading-[1.08] tracking-[-0.03em] text-transparent drop-shadow-[0_10px_40px_rgba(0,0,0,0.45)] sm:text-5xl md:text-6xl lg:text-7xl">
                  Growth is never by mere chance; it is the result of forces working together.
                </p>
              </motion.blockquote>
              <motion.div
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="mt-5 inline-flex items-center gap-3 rounded-full border border-white/20 bg-black/35 px-4 py-2 text-left backdrop-blur-sm sm:mt-6"
              >
                <span className="h-px w-6 bg-primary/75" />
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#E1E0CC]/85 sm:text-xs">James Cash Penney</p>
              </motion.div>
            </div>

            <div className="col-span-12 flex flex-col gap-4 pb-5 lg:col-span-4 lg:pb-10">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-md text-xs leading-5 text-white/76 sm:text-sm md:text-base"
              >
                WebQraft Solutions delivers ERP systems, CRM platforms, and web development services that streamline operations and support sustainable growth.
              </motion.p>

              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => navigateTo('/contact')}
                className="group inline-flex items-center gap-2 self-start rounded-full bg-primary py-1 pl-4 pr-1 text-sm font-medium text-[#08101a] transition-all hover:gap-3 sm:pl-5 sm:text-base"
              >
                Start a project
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#08101a] transition-transform group-hover:scale-110 sm:h-10 sm:w-10">
                  <ArrowRight className="h-4 w-4 text-[#E1E0CC]" />
                </span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { PrismaHero };