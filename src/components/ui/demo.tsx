import { Instagram, Linkedin, Mail } from 'lucide-react';
import { Footer } from './modem-animated-footer';

export default function FooterDemo() {
  const socialLinks = [
    {
      icon: <Instagram className="h-6 w-6" />,
      href: 'https://www.instagram.com/webqraft.in',
      label: 'Instagram'
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      href: 'https://www.linkedin.com',
      label: 'LinkedIn'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      href: 'mailto:contact@webqraft.in',
      label: 'Email'
    }
  ];

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Why Us', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ];

  return (
    <Footer
      brandName="WebQraft"
      brandDescription="Providing creative ideas for your business with ERP, CRM, web development, and digital growth solutions."
      socialLinks={socialLinks}
      navLinks={navLinks}
      creatorName="WebQraft Solutions"
      creatorUrl="https://webqraft.in"
      brandIcon={<img src="/webqraft-logo-white.png" alt="WebQraft logo" className="h-10 w-10 object-contain sm:h-12 sm:w-12 md:h-14 md:w-14" />}
      brandWatermark={<img src="/webqraft-logo-white.png" alt="" aria-hidden="true" className="h-20 w-20 object-contain opacity-60 sm:h-28 sm:w-28 md:h-36 md:w-36" />}
      className="bg-[#050A11]"
    />
  );
}