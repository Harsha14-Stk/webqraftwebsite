import AboutUsSection from 'components/ui/about-us-section';
import SiteHeader from 'components/ui/site-header';

const AboutPage = () => {
  return (
    <main className="bg-[#05080d] text-white">
      <SiteHeader title="Why us" />

      <AboutUsSection />
    </main>
  );
};

export default AboutPage;