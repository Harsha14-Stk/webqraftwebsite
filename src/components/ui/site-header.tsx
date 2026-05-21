import { useState } from 'react';

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

function navigateTo(path: string) {
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
}

function LogoMark() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex h-10 items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#E1E0CC] sm:h-12 sm:px-5">
        WQ
      </div>
    );
  }

  return <img src="/webqraft-logo-white.png" alt="WebQraft" onError={() => setFailed(true)} className="h-10 w-auto sm:h-12" />;
}

interface SiteHeaderProps {
  title: string;
}

const SiteHeader = ({ title }: SiteHeaderProps) => {
  const handleAnchorClick = (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault();

    if (window.location.pathname !== '/') {
      navigateTo('/');
      window.setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 0);
      return;
    }

    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="mx-auto max-w-7xl px-3 py-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-3 rounded-[1.35rem] border border-white/10 bg-black/35 px-3 py-3 backdrop-blur-md sm:px-5 md:flex-row md:items-center md:justify-between">
        <div className="pointer-events-none flex items-center">
          <LogoMark />
        </div>

        <nav className="flex w-full items-center gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:w-auto md:flex-wrap md:justify-end md:gap-5 lg:gap-6">
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
                onClick={(event) => handleAnchorClick(event, item.id)}
                className="whitespace-nowrap rounded-lg px-1 py-1 text-[10px] text-white/70 transition-colors hover:text-[#E1E0CC] sm:text-xs md:text-sm"
              >
                {item.label}
              </a>
            )
          )}
        </nav>
      </div>

      <div className="mt-4">
          <h1 className="mt-2 text-2xl font-semibold text-[#E7E4D2] sm:text-4xl">{title}</h1>
      </div>
    </div>
  );
};

export default SiteHeader;