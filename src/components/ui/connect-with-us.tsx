import { Instagram, Mail, MessageCircleMore, Linkedin } from 'lucide-react';

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com',
    icon: Linkedin,
    description: 'Explore our services and latest work'
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/webqraft.in',
    icon: Instagram,
    description: 'Follow WebQraft for updates'
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/917892074124?text=Hello%20WebQraft%2C%20I%20would%20like%20to%20connect.',
    icon: MessageCircleMore,
    description: 'Start a quick conversation'
  },
  {
    name: 'Email',
    href: 'mailto:contact@webqraft.in',
    icon: Mail,
    description: 'Send us your project brief'
  }
];

const ConnectWithUs = () => {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="w-full text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-primary/80">WebQraft</p>
        <h2 className="mt-3 bg-gradient-to-r from-[#F7F0D3] via-[#E7E0BD] to-[#D9D3B7] bg-clip-text text-4xl font-bold text-transparent sm:text-5xl lg:text-6xl">
          Connect <span className="text-white">With Us</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/72 sm:text-base">
          WebQraft provides ERP, CRM, web, and digital transformation services built to help businesses move faster and grow smarter.
        </p>
      </div>

      <div className="relative mt-12 w-full">
        <div
          className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-gray-800/85 to-gray-950/90 p-8 shadow-2xl backdrop-blur-3xl transition-all duration-500 hover:scale-[1.01] sm:p-10"
          style={{ boxShadow: '0 0 50px rgba(139, 92, 246, 0.35), 0 0 80px rgba(124, 58, 237, 0.18)' }}
        >
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {socialLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="icon-container relative flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-lg transition-all duration-300 group-hover:scale-110">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <span className="mt-3 text-sm font-medium text-white/80 transition-colors group-hover:text-white">{link.name}</span>
                  <span className="mt-1 max-w-[8rem] text-xs leading-5 text-white/50">{link.description}</span>
                </a>
              );
            })}
          </div>

          <div className="mt-10 text-center text-sm text-white/70">
            <p>Explore our services or reach out through the channels above.</p>
          </div>
        </div>
      </div>

      <style>{`
        .icon-container {
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
        }

        .group:hover .icon-container {
          box-shadow: 0 0 20px rgba(139, 92, 246, 0.5);
        }
      `}</style>
    </section>
  );
};

export { ConnectWithUs };