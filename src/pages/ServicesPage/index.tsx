import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SiteHeader from 'components/ui/site-header';
import FooterDemo from 'components/ui/demo';

type ParallaxSectionProps = {
  imgUrl: string;
  subheading: string;
  heading: string;
  title: string;
  body: string;
  chips: string[];
};

type StickyImageProps = {
  imgUrl: string;
};

type OverlayCopyProps = {
  subheading: string;
  heading: string;
};

const IMG_PADDING = 12;

const businessHighlights = ['Integrated', 'Automation', 'Efficiency', 'Decision-making', 'Centralization'];
const webFeatures = ['Responsive', 'Creative', 'E-Commerce', 'User-Friendly', 'Secure & Scalable'];
const marketingFeatures = ['Engagement', 'Strategy', 'Content', 'Analytics', 'Consistency'];

const allServices = [
  {
    title: 'ERP Solutions',
    subtitle: 'Enterprise',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    description:
      'Custom ERP systems to streamline your business processes and automate operations with data-driven insights.'
  },
  {
    title: 'CRM Solutions',
    subtitle: 'Customer Management',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    description:
      'Tailored CRM systems to enhance customer relationships and drive sales growth through effective management.'
  },
  {
    title: 'Web Development',
    subtitle: 'Digital Presence',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    description:
      'Professional web development services with responsive design and engaging user experiences for your business.'
  },
  {
    title: 'SaaS Solutions',
    subtitle: 'Software as a Service',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
    description:
      'Exceptional SaaS products tailored to meet specific business needs with industry best practices.'
  },
  {
    title: 'Digital Transformation',
    subtitle: 'Business Solutions',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
    description:
      'End-to-end digital transformation strategies to modernize your operations and enhance efficiency.'
  },
  {
    title: 'Technology Consulting',
    subtitle: 'Advisory Services',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80',
    description:
      'Expert consulting services to guide technology adoption and ensure alignment with your business goals.'
  },
  {
    title: 'Software Development',
    subtitle: 'Custom Software',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80',
    description:
      'End-to-end software development services delivering custom, scalable, and secure solutions from concept to production.'
  },
  {
    title: 'Application Development',
    subtitle: 'Mobile & Desktop',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
    description:
      'Design and build native and cross-platform mobile and desktop applications focused on performance and user experience.'
  },
  {
    title: 'Digital Marketing',
    subtitle: 'Growth & Visibility',
    image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80',
    description:
      'SEO, social media, and content strategies crafted to boost visibility, engagement, and conversion rates.'
  }
];

const SERVICES_FLOW: ParallaxSectionProps[] = [
  {
    imgUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80',
    subheading: 'Business Solution',
    heading: 'ERP Solutions',
    title: '1. Introduction to Dolibarr ERP',
    body:
      'Enterprise Resource Planning (ERP) is an integrated software system designed to manage and automate core business processes like finance, supply chain, human resources, and customer relationship management. By centralizing data and streamlining workflows, ERP enhances efficiency, reduces manual errors, and provides real-time insights for informed decision-making. Businesses of all sizes use ERP to improve collaboration and achieve operational excellence.',
    chips: businessHighlights
  },
  {
    imgUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80',
    subheading: 'Digital Experience',
    heading: 'Web Development',
    title: 'Creative & User friendly website',
    body:
      'Our web development team crafts responsive and visually appealing websites that align with your business goals. From e-commerce platforms to informative sites, we utilize the latest technologies to ensure your online presence is not just functional, but also engaging and user-friendly',
    chips: webFeatures
  },
  {
    imgUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80',
    subheading: 'Social Media',
    heading: 'Digital Marketing',
    title: 'Business Intelligence',
    body:
      'Our digital marketing services harness SEO, social media, and content strategies to boost visibility and engagement. We develop tailored campaigns that resonate with your target audience, driving traffic and conversion rates to achieve your business objectives.',
    chips: marketingFeatures
  }
];

const ServicesPage = () => {
  return (
    <>
      <main className="bg-[#05080d] text-white">
        <SiteHeader title="Services" />

        {SERVICES_FLOW.map((section) => (
          <ParallaxBlock key={section.heading} {...section} />
        ))}

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-6">
            <p className="text-xs uppercase tracking-[0.35em] text-primary/80">All Services</p>
            <h3 className="mt-2 text-2xl font-semibold text-[#E7E4D2] sm:text-3xl">Everything we offer</h3>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {allServices.map((service) => (
              <article key={service.title} className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03] shadow-glow">
                <img src={service.image} alt={service.title} className="h-52 w-full object-cover" />
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.35em] text-accent/80">{service.subtitle}</p>
                  <h4 className="mt-2 text-2xl font-semibold text-[#F2EEDC]">{service.title}</h4>
                  <p className="mt-3 text-sm leading-7 text-white/72">{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <FooterDemo />
    </>
  );
};

function ParallaxBlock({ imgUrl, subheading, heading, title, body, chips }: ParallaxSectionProps) {
  return (
    <div style={{ paddingLeft: IMG_PADDING, paddingRight: IMG_PADDING }}>
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
        <h2 className="col-span-1 text-3xl font-bold text-[#E7E4D2] md:col-span-4">{title}</h2>
        <div className="col-span-1 md:col-span-8">
          <p className="mb-4 text-xl text-neutral-200 md:text-2xl">{body}</p>
          <div className="mb-8 flex flex-wrap gap-3">
            {chips.map((chip) => (
              <span key={chip} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-sm text-white/80">
                {chip}
              </span>
            ))}
          </div>
          <button
            className="inline-flex w-full items-center gap-2 rounded-md bg-gradient-to-r from-primary/70 to-purple-600/60 px-6 py-3 text-xl text-white transform-gpu transition duration-200 ease-out hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary/60 md:w-fit"
            aria-label="Learn more"
          >
            <span className="inline">Learn more</span>
            <ArrowRight className="inline h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
}

function StickyImage({ imgUrl }: StickyImageProps) {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start']
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div className="absolute inset-0 bg-neutral-950/70" style={{ opacity }} />
    </motion.div>
  );
}

function OverlayCopy({ subheading, heading }: OverlayCopyProps) {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{ y, opacity }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">{subheading}</p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
}

export default ServicesPage;
