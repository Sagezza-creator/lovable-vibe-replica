
import { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import ProblemsSection from '@/components/ProblemsSection';
import ApproachSection from '@/components/ApproachSection';
import ComparisonSection from '@/components/ComparisonSection';
import AboutSection from '@/components/AboutSection';
import ReviewsSection from '@/components/ReviewsSection';
import FAQSection from '@/components/FAQSection';
import CallToAction from '@/components/CallToAction';
import MatricesSection from '@/components/MatricesSection';
import CorrectionSection from '@/components/CorrectionSection';

const Home = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection />
      <ProblemsSection />
      <ApproachSection />
      <MatricesSection />
      <CorrectionSection />
      <ComparisonSection />
      <AboutSection />
      <ReviewsSection />
      <FAQSection />
      <CallToAction />
    </>
  );
};

export default Home;
