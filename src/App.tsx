import { motion } from 'framer-motion';
import {
  ArrowRight,
  Building2,
  CircuitBoard,
  Code2,
  Globe2,
  Lightbulb,
  MonitorSmartphone,
  RefreshCcw,
  Rocket,
  Users2
} from 'lucide-react';
import { useEffect, useState } from 'react';
import FooterDemo from './components/ui/demo';
import ConnectWithUsDemo from './components/ui/connect-with-us-demo';
import { PrismaHero } from './components/ui/prisma-hero';
import AboutPage from 'pages/AboutPage';
import ContactPage from 'pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import LoadingPage from 'pages/LoadingPage';
// ProcessTimelineDemo removed (undo integration)

const services = [
  {
    icon: CircuitBoard,
    title: 'ERP Solutions',
    subtitle: 'Enterprise',
    description:
      'Custom ERP systems to streamline your business processes and automate operations with data-driven insights.',
    tags: ['Integration', 'Automation', 'Analytics', 'Customization']
  },
  {
    icon: Users2,
    title: 'CRM Solutions',
    subtitle: 'Customer Management',
    description:
      'Tailored CRM systems to enhance customer relationships and drive sales growth through effective management.',
    tags: ['Customer Data', 'Workflows', 'Analytics', 'Engagement']
  },
  {
    icon: Globe2,
    title: 'Web Development',
    subtitle: 'Digital Presence',
    description:
      'Professional web development services with responsive design and engaging user experiences for your business.',
    tags: ['Responsive', 'Modern Stack', 'User-Friendly', 'Performance']
  },
  {
    icon: Rocket,
    title: 'SaaS Solutions',
    subtitle: 'Software as a Service',
    description:
      'Exceptional SaaS products tailored to meet specific business needs with industry best practices.',
    tags: ['Cloud', 'Scalability', 'Security', 'Optimization']
  },
  {
    icon: RefreshCcw,
    title: 'Digital Transformation',
    subtitle: 'Business Solutions',
    description:
      'End-to-end digital transformation strategies to modernize your operations and enhance efficiency.',
    tags: ['Strategy', 'Implementation', 'Training', 'Support']
  },
  {
    icon: Lightbulb,
    title: 'Technology Consulting',
    subtitle: 'Advisory Services',
    description:
      'Expert consulting services to guide technology adoption and ensure alignment with your business goals.',
    tags: ['Architecture', 'Best Practices', 'Roadmap', 'Innovation']
  },
  {
    icon: Code2,
    title: 'Software Development',
    subtitle: 'Custom Software',
    description:
      'End-to-end software development services delivering custom, scalable, and secure solutions from concept to production.',
    tags: ['Full-Stack', 'APIs', 'Cloud-Native', 'CI/CD']
  },
  {
    icon: MonitorSmartphone,
    title: 'Application Development',
    subtitle: 'Mobile & Desktop',
    description:
      'Design and build native and cross-platform mobile and desktop applications focused on performance and user experience.',
    tags: ['Native', 'Cross-Platform', 'Offline Support', 'Push Notifications']
  }
];

const principles = [
  {
    title: 'Tailored Solutions',
    description: 'Every business is different, so the systems we build are designed around your real processes and goals.'
  },
  {
    title: 'Innovative Strategies',
    description: 'We use modern technology and adaptable delivery methods to keep your business ahead of the curve.'
  },
  {
    title: 'Flexible Pricing Models',
    description: 'Scalable pricing options that make high-quality software and design accessible to businesses of every size.'
  }
];

const clientsLogos = [
  'https://webqraft.in/wp-content/uploads/2025/05/1-1-300x300.png',
  'https://webqraft.in/wp-content/uploads/2025/05/2-1-300x300.png',
  'https://webqraft.in/wp-content/uploads/2025/05/4-1-300x300.png',
  'https://webqraft.in/wp-content/uploads/2025/05/5-1-300x300.png',
  'https://webqraft.in/wp-content/uploads/2025/05/6-1-300x300.png',
  'https://webqraft.in/wp-content/uploads/2025/05/7-1-300x300.png'
];

const partnerLogos = [
  'https://webqraft.in/wp-content/uploads/2025/05/1-300x300.png',
  'https://webqraft.in/wp-content/uploads/2025/05/5-300x300.png',
  'https://webqraft.in/wp-content/uploads/2025/05/2-300x300.png',
  'https://webqraft.in/wp-content/uploads/2025/05/7-300x300.png',
  'https://webqraft.in/wp-content/uploads/2025/05/8-300x300.png',
  'https://webqraft.in/wp-content/uploads/2025/05/4-300x300.png',
  'https://fitsmallbusiness.com/wp-content/uploads/2021/08/FeatureImage_Odoo-.jpg'
];

function HomePage() {
  return (
    <main id="main" className="overflow-hidden text-[hsl(var(--foreground))]">
      <PrismaHero />

      <section id="services" className="relative mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="absolute inset-0 -z-10 bg-hero-grid bg-[length:64px_64px] opacity-25 [mask-image:linear-gradient(to_bottom,black,transparent_95%)]" />

        <div className="mb-10 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-primary/80">Services</p>
            <h2 className="mt-2 text-3xl font-semibold text-[#E7E4D2] sm:text-4xl">Empowering your business</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-white/70 sm:text-base">
            Explore our complete service portfolio across enterprise systems, product engineering, consulting, and digital transformation.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                whileHover={{ scale: 1.04, y: -6 }}
                whileTap={{ scale: 0.98 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24, delay: index * 0.08 }}
                tabIndex={0}
                className="group flex h-full flex-col rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-[#08101a] transition-transform duration-300 group-hover:-translate-y-1">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="text-2xl font-medium text-[#F2EEDC]">{service.title}</h3>
                <p className="mt-1 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary/90">
                  {service.subtitle}
                  <ArrowRight className="h-3.5 w-3.5" />
                </p>

                <p className="mt-3 text-sm leading-6 text-white/72">{service.description}</p>

                {/* tags removed per request */}
              </motion.article>
            );
          })}
        </div>
      </section>

      <section id="why-us" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch">
          <motion.div
            initial={{ x: -24, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b1320]/85 p-6 shadow-glow"
          >
            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-accent/80">Why us</p>
                <h2 className="mt-2 text-3xl font-semibold text-[#E7E4D2]">How we do it</h2>
              </div>
              <Building2 className="h-10 w-10 text-primary/90" />
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {principles.map((principle, index) => (
                <div key={principle.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                  <div className="mb-4 text-sm font-medium text-primary">0{index + 1}</div>
                  <h3 className="text-xl font-medium text-[#F2EEDC]">{principle.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/70">{principle.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 24, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-glow"
          >
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
              alt="WebQraft team working on digital strategy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-white/70">About us</p>
              <h3 className="mt-2 text-2xl font-semibold text-[#F2EEDC]">Revolutionizing digital business</h3>
              <p className="mt-3 max-w-md text-sm leading-6 text-white/78">
                We bring years of experience in delivering exceptional SaaS products tailored to specific business needs.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="portfolio" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-glow backdrop-blur-2xl sm:p-8 lg:p-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-primary/80">Technologies</p>
              <h2 className="mt-2 text-3xl font-semibold text-[#E7E4D2] sm:text-4xl">Technologies we work with</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-white/68">
              A modern stack for strategy, design, and delivery that keeps your product fast, scalable, and maintainable.
            </p>
          </div>

          <div className="mt-8 overflow-hidden">
            <div className="marquee">
              <div className="marquee__track flex items-center gap-8">
                {partnerLogos.concat(partnerLogos).map((src, index) => (
                  <div key={`${src}-${index}`} className="marquee__item flex-shrink-0 w-28 opacity-90 sm:w-32 md:w-36">
                    <img src={src} alt={`partner-${index}`} className="h-full w-full rounded-xl object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-glow backdrop-blur-xl sm:p-8"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-primary/80">Our clients</p>
          <h2 className="mt-2 text-3xl font-semibold text-[#E7E4D2] sm:text-4xl">Trusted by growing businesses</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70 sm:text-base">
            We help clients improve operations, customer relationships, and digital presence with practical solutions.
          </p>

          <div className="mt-8 overflow-hidden">
            <div className="marquee">
              <div className="marquee__track flex items-center gap-8">
                {clientsLogos.concat(clientsLogos).map((src, index) => (
                  <div key={`${src}-${index}`} className="marquee__item flex-shrink-0 w-28 opacity-80 sm:w-32 md:w-36">
                    <img src={src} alt={`client-${index}`} className="h-full w-full rounded-xl object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <ConnectWithUsDemo />

      <FooterDemo />
    </main>
  );
}

function App() {
  const [pathname, setPathname] = useState(window.location.pathname);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const handlePopState = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    // Hide the initial loading screen when the window load event fires
    const onLoad = () => setInitialLoading(false);
    window.addEventListener('load', onLoad);
    // Fallback: hide after 1.2s even if load doesn't fire
    const t = setTimeout(() => setInitialLoading(false), 1200);
    return () => {
      window.removeEventListener('load', onLoad);
      clearTimeout(t);
    };
  }, []);

  if (initialLoading) {
    return <LoadingPage />;
  }
  if (initialLoading) {
    return <LoadingPage />;
  }

  if (pathname === '/services') {
    return <ServicesPage />;
  }

  if (pathname === '/about' || pathname === '/why-us') {
    return <AboutPage />;
  }

  if (pathname === '/contact') {
    return <ContactPage />;
  }

  if (pathname === '/loading') {
    return <LoadingPage />;
  }

  return <HomePage />;
}

export default App;