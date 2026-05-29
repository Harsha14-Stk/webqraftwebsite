import { useState } from 'react';

type RouteNavItem = { label: string; to: string };
type AnchorNavItem = { label: string; id: string };
type NavItem = RouteNavItem | AnchorNavItem;

const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Why us', to: '/about' },
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
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="mx-auto max-w-7xl px-3 py-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-3 rounded-[1.35rem] border border-white/10 bg-black/35 px-3 py-3 backdrop-blur-md sm:px-5 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center">
            <LogoMark />
          </div>

          {/* Mobile menu button (visible on small screens) */}
          <div className="ml-3 md:hidden">
            <button
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((s) => !s)}
              className="inline-flex items-center justify-center rounded-md bg-white/5 p-2 text-white/80 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              <svg className="h-5 w-5 text-white/90" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M4 7h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 12h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <nav role="navigation" aria-label="Primary" className="hidden md:flex w-full items-center gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:w-auto md:flex-wrap md:justify-end md:gap-5 lg:gap-6">
          {navItems.map((item) =>
            'to' in item ? (
              <a
                key={item.label}
                href={item.to}
                onClick={(event) => {
                  event.preventDefault();
                  navigateTo(item.to);
                }}
                className="whitespace-nowrap rounded-lg px-2 py-2 min-h-[44px] text-[10px] text-white/70 transition-colors hover:text-[#E1E0CC] sm:text-xs md:text-sm"
              >
                {item.label}
              </a>
            ) : (
              <a
                key={item.id}
                href={`#${item.id}`}
                  onClick={(event) => {
                    event.preventDefault();
                    navigateTo('/services');
                  }}
                className="whitespace-nowrap rounded-lg px-2 py-2 min-h-[44px] text-[10px] text-white/70 transition-colors hover:text-[#E1E0CC] sm:text-xs md:text-sm"
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        {/* Mobile menu panel (visible when toggled) */}
        <div className={`md:hidden ${mobileOpen ? 'block' : 'hidden'} w-full mt-3 z-40`}>
          <div className="rounded-lg border border-white/8 bg-black/60 p-3 backdrop-blur-md">
            {navItems.map((item) =>
              'to' in item ? (
                <a
                  key={item.label}
                  href={item.to}
                  onClick={(event) => {
                      event.preventDefault();
                      setMobileOpen(false);
                      navigateTo(item.to);
                    }}
                  className="block w-full rounded-md px-3 py-3 text-sm text-white/80 hover:bg-white/5"
                >
                  {item.label}
                </a>
              ) : (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(event) => {
                    setMobileOpen(false);
                    navigateTo('/services');
                  }}
                  className="block w-full rounded-md px-3 py-3 text-sm text-white/80 hover:bg-white/5"
                >
                  {item.label}
                </a>
              )
            )}
          </div>
        </div>
      </div>

      <div className="mt-4">
          <h1 className="mt-2 text-2xl font-semibold text-[#E7E4D2] sm:text-4xl">{title}</h1>
      </div>
    </div>
  );
};

export default SiteHeader;