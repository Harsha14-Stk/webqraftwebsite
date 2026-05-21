import React from 'react';
import { NotepadTextDashed } from 'lucide-react';
import { cn } from '../../lib/utils';

interface FooterLink {
  label: string;
  href: string;
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

interface FooterProps {
  brandName?: string;
  brandDescription?: string;
  socialLinks?: SocialLink[];
  navLinks?: FooterLink[];
  creatorName?: string;
  creatorUrl?: string;
  brandIcon?: React.ReactNode;
  brandWatermark?: React.ReactNode;
  className?: string;
}

export const Footer = ({
  brandName = 'YourBrand',
  brandDescription = 'Your description here',
  socialLinks = [],
  navLinks = [],
  creatorName,
  creatorUrl,
  brandIcon,
  brandWatermark,
  className
}: FooterProps) => {
  return (
    <section className={cn('relative mt-0 w-full overflow-hidden', className)}>
      <footer className="relative mt-12 border-t bg-background">
        <div className="relative mx-auto flex min-h-[22rem] max-w-7xl flex-col justify-between p-4 py-7 sm:min-h-[25rem] md:min-h-[28rem]">
          <div className="mb-7 flex w-full flex-col sm:mb-9 md:mb-0">
            <div className="flex w-full flex-col items-center">
              <div className="flex flex-1 flex-col items-center space-y-2">
                <div className="flex items-center justify-center">
                  {brandIcon || (
                    <NotepadTextDashed className="h-10 w-10 text-foreground drop-shadow-lg sm:h-12 sm:w-12" />
                  )}
                </div>
                <p className="w-full max-w-sm px-4 text-center text-xs font-semibold text-muted-foreground sm:w-96 sm:px-0 sm:text-sm">
                  {brandDescription}
                </p>
              </div>

              {socialLinks.length > 0 && (
                <div className="mb-5 mt-3 flex gap-3 sm:gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                    >
                      <div className="h-6 w-6 duration-300 hover:scale-110">{link.icon}</div>
                      <span className="sr-only">{link.label}</span>
                    </a>
                  ))}
                </div>
              )}

              {navLinks.length > 0 && (
                <div className="max-w-full flex-wrap justify-center gap-2 px-4 text-xs font-medium text-muted-foreground sm:flex sm:text-sm">
                  {navLinks.map((link, index) => (
                    <a key={index} className="duration-300 hover:font-semibold hover:text-foreground" href={link.href}>
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-2 px-4 md:mt-12 md:flex-row md:items-center md:justify-between md:gap-1 md:px-0">
            <p className="text-center text-xs text-muted-foreground sm:text-sm md:text-left">
              ©{new Date().getFullYear()} {brandName}. All rights reserved.
            </p>
            {creatorName && creatorUrl && (
              <nav className="flex gap-4">
                <a
                  href={creatorUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted-foreground transition-colors duration-300 hover:font-medium hover:text-foreground sm:text-sm"
                >
                  Crafted by {creatorName}
                </a>
              </nav>
            )}
          </div>
        </div>

        <div
          className="pointer-events-none absolute bottom-24 left-1/2 max-w-[95vw] -translate-x-1/2 select-none opacity-18 md:bottom-20"
        >
          <div className="flex items-center justify-center opacity-80 blur-[1px]">
            {brandWatermark || brandIcon || (
              <NotepadTextDashed className="h-16 w-16 text-foreground sm:h-24 sm:w-24 md:h-28 md:w-28" />
            )}
          </div>
        </div>

        <div className="absolute bottom-16 left-1/2 z-10 flex -translate-x-1/2 items-center justify-center rounded-3xl border-2 border-border bg-background/60 p-2 backdrop-blur-sm duration-400 hover:border-foreground drop-shadow-[0_0px_20px_rgba(0,0,0,0.5)] dark:drop-shadow-[0_0px_20px_rgba(255,255,255,0.3)] md:bottom-14">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-foreground to-foreground/80 shadow-lg sm:h-12 sm:w-12 md:h-16 md:w-16">
            {brandIcon || (
              <NotepadTextDashed className="h-6 w-6 text-background drop-shadow-lg sm:h-8 sm:w-8 md:h-10 md:w-10" />
            )}
          </div>
        </div>

        <div className="absolute bottom-22 left-1/2 h-1 w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent backdrop-blur-sm sm:bottom-24" />

        <div className="absolute bottom-20 h-16 w-full bg-gradient-to-t from-background via-background/80 to-background/40 blur-[1em]" />
      </footer>
    </section>
  );
};