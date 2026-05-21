import { ContactSection } from 'components/ui/contact';
import SiteHeader from 'components/ui/site-header';

const ContactPage = () => {
  const handleSubmit = (data: { name: string; email: string; message: string; projectType: string[] }) => {
    const subject = encodeURIComponent(`New WebQraft enquiry from ${data.name}`);
    const bodyLines = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Project type: ${data.projectType.length > 0 ? data.projectType.join(', ') : 'Not specified'}`,
      '',
      'Message:',
      data.message
    ];
    const body = encodeURIComponent(bodyLines.join('\n'));

    window.location.href = `mailto:contact@webqraft.in?subject=${subject}&body=${body}`;
  };

  return (
    <main className="bg-[linear-gradient(180deg,#091018_0%,#070b12_45%,#05070c_100%)] text-white">
      <SiteHeader title="Contact" />

      <ContactSection
        title="We can turn your project into reality"
        mainMessage="Let's talk! 👋"
        contactEmail="contact@webqraft.in"
        socialLinks={[
          { id: '1', name: 'Instagram', iconSrc: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/instagram.svg', href: 'https://www.instagram.com/webqraft.in' },
          { id: '2', name: 'LinkedIn', iconSrc: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/linkedin.svg', href: 'https://www.linkedin.com' },
          { id: '3', name: 'X', iconSrc: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/x.svg', href: 'https://x.com' }
        ]}
        onSubmit={handleSubmit}
      />
    </main>
  );
};

export default ContactPage;