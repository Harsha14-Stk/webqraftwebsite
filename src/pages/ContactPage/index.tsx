import { ContactSection } from 'components/ui/contact';
import SiteHeader from 'components/ui/site-header';
import FooterDemo from 'components/ui/demo';

const contactApiUrl =
  process.env.REACT_APP_CONTACT_API_URL || (process.env.NODE_ENV === 'development' ? 'http://localhost:5000/api/contact' : '/api/contact');

const ContactPage = () => {
  const handleSubmit = async (data: { name: string; email: string; message: string; projectType: string[] }) => {
    try {
      const response = await fetch(contactApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = (await response.json().catch(() => ({}))) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || 'Failed to send your message');
      }

      window.alert(result.message || 'Your message was sent successfully');
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to send your message';
      window.alert(message);
    }
  };

  return (
    <>
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
      <FooterDemo />
    </>
  );
};

export default ContactPage;