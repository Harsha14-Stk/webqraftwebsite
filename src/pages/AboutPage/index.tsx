import AboutUsSection from 'components/ui/about-us-section';
import SiteHeader from 'components/ui/site-header';
import FooterDemo from 'components/ui/demo';

const AboutPage = () => {
  return (
    <>
      <main className="bg-[#05080d] text-white">
        <SiteHeader title="Why us" />

        <AboutUsSection />
      </main>
      <FooterDemo />
    </>
  );
};

export default AboutPage;