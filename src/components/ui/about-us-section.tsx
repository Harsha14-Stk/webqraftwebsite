import { motion, useInView, useScroll, useSpring, useTransform } from 'framer-motion';
import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle,
  Globe2,
  Home,
  Pen,
  PenTool,
  Ruler,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  Zap
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const services = [
  {
    icon: <Pen className="h-6 w-6" />,
    secondaryIcon: <Sparkles className="absolute -right-1 -top-1 h-4 w-4 text-[#A9BBC8]" />,
    title: 'Strategy',
    description:
      'We align product goals, business goals, and user needs so every WebQraft engagement starts with a clear direction.',
    position: 'left'
  },
  {
    icon: <Home className="h-6 w-6" />,
    secondaryIcon: <CheckCircle className="absolute -right-1 -top-1 h-4 w-4 text-[#A9BBC8]" />,
    title: 'Solutions',
    description:
      'From ERP and CRM workflows to custom web systems, we create practical solutions that fit how your team actually works.',
    position: 'left'
  },
  {
    icon: <PenTool className="h-6 w-6" />,
    secondaryIcon: <Star className="absolute -right-1 -top-1 h-4 w-4 text-[#A9BBC8]" />,
    title: 'Design',
    description:
      'We combine clean UI, responsive layouts, and thoughtful interactions to make digital experiences feel polished and trustworthy.',
    position: 'left'
  },
  {
    icon: <Globe2 className="h-6 w-6" />,
    secondaryIcon: <Sparkles className="absolute -right-1 -top-1 h-4 w-4 text-[#A9BBC8]" />,
    title: 'Development',
    description:
      'Our engineering approach focuses on speed, maintainability, and scalability so your product is ready to grow with your business.',
    position: 'right'
  },
  {
    icon: <Ruler className="h-6 w-6" />,
    secondaryIcon: <CheckCircle className="absolute -right-1 -top-1 h-4 w-4 text-[#A9BBC8]" />,
    title: 'Planning',
    description:
      'We keep delivery structured with clear milestones, defined scopes, and consistent communication from kickoff to launch.',
    position: 'right'
  },
  {
    icon: <Building2 className="h-6 w-6" />,
    secondaryIcon: <Star className="absolute -right-1 -top-1 h-4 w-4 text-[#A9BBC8]" />,
    title: 'Execution',
    description:
      'We move fast without losing quality, turning ideas into reliable products that are ready for real-world use.',
    position: 'right'
  }
];

const stats = [
  { icon: <Award />, value: 150, label: 'Projects Completed', suffix: '+' },
  { icon: <Users />, value: 1200, label: 'Happy Clients', suffix: '+' },
  { icon: <Building2 />, value: 12, label: 'Years Experience', suffix: '' },
  { icon: <TrendingUp />, value: 98, label: 'Satisfaction Rate', suffix: '%' }
];

export default function AboutUsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -20]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section
      id="about-section"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#0b1320] to-[#060b12] px-4 py-24 text-[#F2EEDC]"
    >
      <motion.div className="absolute left-10 top-20 h-64 w-64 rounded-full bg-[#88734C]/10 blur-3xl" style={{ y: y1, rotate: rotate1 }} />
      <motion.div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-[#A9BBC8]/10 blur-3xl" style={{ y: y2, rotate: rotate2 }} />

      <motion.div
        className="mx-auto max-w-6xl relative z-10"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        <motion.div className="mb-6 flex flex-col items-center" variants={itemVariants}>
          <motion.span
            className="mb-2 flex items-center gap-2 font-medium text-primary"
            initial={{ opacity: 0, y: -10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Zap className="h-4 w-4" />
            DISCOVER OUR STORY
          </motion.span>
          <h2 className="mb-4 text-center text-4xl font-light md:text-5xl">Why WebQraft</h2>
          <motion.div className="h-1 bg-primary" initial={{ width: 0 }} animate={{ width: 96 }} transition={{ duration: 1, delay: 0.5 }} />
        </motion.div>

        <motion.p className="mx-auto mb-16 max-w-2xl text-center text-white/75" variants={itemVariants}>
          We build clean, scalable digital experiences for businesses that want better operations, stronger customer relationships,
          and a modern online presence.
        </motion.p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-16">
            {services
              .filter((service) => service.position === 'left')
              .map((service, index) => (
                <ServiceItem
                  key={`left-${index}`}
                  icon={service.icon}
                  secondaryIcon={service.secondaryIcon}
                  title={service.title}
                  description={service.description}
                  variants={itemVariants}
                  delay={index * 0.2}
                  direction="left"
                />
              ))}
          </div>

          <div className="order-first mb-8 flex items-center justify-center md:order-none md:mb-0">
            <motion.div className="relative w-full max-w-xs" variants={itemVariants}>
              <motion.div
                className="overflow-hidden rounded-md shadow-xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              >
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
                  alt="WebQraft team working on strategy"
                  className="h-full w-full object-cover"
                />
                <motion.div
                  className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-[#060b12]/70 to-transparent p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  <motion.button
                    className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-[#202e44]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Our Process <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </motion.div>
              </motion.div>
              <motion.div
                className="absolute inset-0 -m-3 -z-10 rounded-md border-4 border-[#A9BBC8]"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </motion.div>
          </div>

          <div className="space-y-16">
            {services
              .filter((service) => service.position === 'right')
              .map((service, index) => (
                <ServiceItem
                  key={`right-${index}`}
                  icon={service.icon}
                  secondaryIcon={service.secondaryIcon}
                  title={service.title}
                  description={service.description}
                  variants={itemVariants}
                  delay={index * 0.2}
                  direction="right"
                />
              ))}
          </div>
        </div>

        <motion.div
          ref={statsRef}
          className="mt-24 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          animate={isStatsInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <StatCounter
              key={stat.label}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              delay={index * 0.1}
            />
          ))}
        </motion.div>

        <motion.div
          className="mt-20 flex flex-col items-center justify-between gap-6 rounded-xl bg-white/5 p-8 text-white md:flex-row"
          initial={{ opacity: 0, y: 30 }}
          animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex-1">
            <h3 className="mb-2 text-2xl font-medium">Ready to transform your space?</h3>
            <p className="text-white/80">Let's create something beautiful together.</p>
          </div>
          <motion.button
            className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-[#08101a] transition-colors hover:bg-primary/90"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              window.history.pushState({}, '', '/contact');
              window.dispatchEvent(new PopStateEvent('popstate'));
            }}
          >
            Get Started <ArrowRight className="h-4 w-4" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}

interface ServiceItemProps {
  icon: React.ReactNode;
  secondaryIcon?: React.ReactNode;
  title: string;
  description: string;
  variants: {
    hidden: { opacity: number; y?: number };
    visible: { opacity: number; y?: number; transition: { duration: number; ease: string } };
  };
  delay: number;
  direction: 'left' | 'right';
}

function ServiceItem({ icon, secondaryIcon, title, description, variants, delay, direction }: ServiceItemProps) {
  return (
    <motion.div
      className="group flex flex-col cursor-pointer"
      variants={variants}
      transition={{ delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      role="button"
      tabIndex={0}
      onClick={() => {
        window.location.href = '/services';
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          window.location.href = '/services';
        }
      }}
    >
      <motion.div
        className="mb-3 flex items-center gap-3"
        initial={{ x: direction === 'left' ? -20 : 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      >
        <motion.div
          className="relative rounded-lg bg-primary/10 p-3 text-primary transition-colors duration-300 group-hover:bg-primary/20"
          whileHover={{ rotate: [0, -10, 10, -5, 0], transition: { duration: 0.5 } }}
        >
          {icon}
          {secondaryIcon}
        </motion.div>
        <h3 className="text-xl font-medium text-white group-hover:text-primary transition-colors duration-300">{title}</h3>
      </motion.div>
      <motion.p className="pl-12 text-sm leading-relaxed text-white/75" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: delay + 0.4 }}>
        {description}
      </motion.p>
      <motion.div
        className="mt-3 flex items-center pl-12 text-xs font-medium text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            window.location.href = '/services';
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              window.location.href = '/services';
            }
          }}
          className="flex items-center gap-1 rounded-2xl bg-gradient-to-r from-primary/20 to-primary/10 px-3 py-2 transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label={`Learn more about ${title}`}
        >
          <span className="transition-transform duration-200 group-hover:scale-105">Learn more</span>
          <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1" />
        </button>
      </motion.div>
      
    </motion.div>
  );
}

interface StatCounterProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix: string;
  delay: number;
}

function StatCounter({ icon, value, label, suffix, delay }: StatCounterProps) {
  const countRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(countRef, { once: false });
  const [hasAnimated, setHasAnimated] = useState(false);

  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 10
  });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      springValue.set(value);
      setHasAnimated(true);
    } else if (!isInView && hasAnimated) {
      springValue.set(0);
      setHasAnimated(false);
    }
  }, [isInView, value, springValue, hasAnimated]);

  const displayValue = useTransform(springValue, (latest) => Math.floor(latest));

  return (
    <motion.div
      className="flex flex-col items-center rounded-xl bg-white/5 p-6 text-center transition-colors duration-300 hover:bg-white/10"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay }
        }
      }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-primary transition-colors duration-300" whileHover={{ rotate: 360, transition: { duration: 0.8 } }}>
        {icon}
      </motion.div>
      <motion.div ref={countRef} className="flex items-center text-3xl font-bold text-white">
        <motion.span>{displayValue}</motion.span>
        <span>{suffix}</span>
      </motion.div>
      <p className="mt-1 text-sm text-white/70">{label}</p>
      <motion.div className="mt-3 h-0.5 w-10 bg-primary transition-all duration-300 group-hover:w-16" />
    </motion.div>
  );
}