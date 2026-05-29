import React from 'react';
import { Button } from './button';
import { Input } from './input';
import { Textarea } from './textarea';
import { Label } from './label';
import { Checkbox } from './checkbox';

interface ContactSectionProps {
  title?: string;
  mainMessage?: string;
  contactEmail?: string;
  socialLinks?: Array<{ id: string; name: string; iconSrc: string; href: string }>;
  onSubmit?: (data: any) => void | Promise<void>;
}

const defaultSocialLinks = [
  { id: '1', name: 'X', iconSrc: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/x.svg', href: '#x' },
  { id: '2', name: 'Instagram', iconSrc: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/instagram.svg', href: '#instagram' },
  { id: '3', name: 'LinkedIn', iconSrc: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/linkedin.svg', href: '#linkedin' }
];

export const ContactSection: React.FC<ContactSectionProps> = ({
  title = 'We can turn your dream project into reality',
  mainMessage = "Let's talk! 👋",
  contactEmail = 'hello@pixelperfect.com',
  socialLinks = defaultSocialLinks,
  onSubmit
}) => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
    projectType: [] as string[]
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (type: string, checked: boolean) => {
    setFormData((prev) => {
      const currentTypes = prev.projectType;
      return checked ? { ...prev, projectType: [...currentTypes, type] } : { ...prev, projectType: currentTypes.filter((t) => t !== type) };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit?.(formData);
  };

  const projectTypeOptions = [
    'LinkedIn',
    'Mobile App',
    'Web App',
    'E-Commerce',
    'Brand Identity',
    '3D & Animation',
    'Social Media Marketing',
    'Brand Strategy & Consulting',
    'Other'
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(249,168,37,0.14),transparent_30%),radial-gradient(circle_at_top_right,rgba(45,212,191,0.12),transparent_28%),linear-gradient(180deg,#091018_0%,#070b12_45%,#05070c_100%)]">
      <div className="pointer-events-none absolute inset-0 bg-hero-grid bg-[length:64px_64px] opacity-[0.12]" />

      <div className="relative z-10 flex min-h-screen w-full items-center px-4 py-8 md:px-8 lg:px-12">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col justify-end p-1 lg:p-8">
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-primary/80">Contact</p>
            <h1 className="max-w-lg text-3xl font-extrabold leading-tight text-[#F2EEDC] drop-shadow-lg sm:text-4xl md:text-5xl lg:text-6xl">{title}</h1>
            <p className="mt-4 max-w-md text-sm leading-6 text-white/72 sm:text-base">
              Tell us about your idea, and we’ll help shape it into a clear plan.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-4 shadow-glow backdrop-blur-xl sm:p-5 md:p-8">
            <h2 className="mb-6 text-2xl font-bold text-foreground">{mainMessage}</h2>

            <div className="mb-6">
              <p className="mb-2 text-muted-foreground">Mail us at</p>
              <a href={`mailto:${contactEmail}`} className="font-medium text-primary hover:underline">
                {contactEmail}
              </a>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <span className="text-muted-foreground">OR</span>
                {socialLinks.map((link) => (
                  <Button key={link.id} variant="outline" size="icon" asChild>
                    <a href={link.href} aria-label={link.name}>
                      <img src={link.iconSrc} alt={link.name} className="h-4 w-4 dark:invert" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            <hr className="my-6 border-border" />

            <form onSubmit={handleSubmit} className="space-y-6">
              <p className="text-muted-foreground">Leave us a brief message</p>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Your name</Label>
                  <Input id="name" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Briefly describe your project idea...</Label>
                <Textarea id="message" name="message" placeholder="Briefly describe your project idea..." className="min-h-[80px]" value={formData.message} onChange={handleChange} required />
              </div>

              <div className="space-y-4">
                <p className="text-muted-foreground">I'm looking for...</p>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {projectTypeOptions.map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <Checkbox id={option.replace(/\s/g, '-').toLowerCase()} checked={formData.projectType.includes(option)} onCheckedChange={(checked) => handleCheckboxChange(option, checked as boolean)} />
                      <Label htmlFor={option.replace(/\s/g, '-').toLowerCase()} className="text-sm font-normal">
                        {option}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Button type="submit" className="w-full">
                Send a message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};