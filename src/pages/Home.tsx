
import { useEffect, useRef } from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProblemsSection from '@/components/ProblemsSection';
import ApproachSection from '@/components/ApproachSection';
import ComparisonSection from '@/components/ComparisonSection';
import ReviewsSection from '@/components/ReviewsSection';
import FAQSection from '@/components/FAQSection';
import CallToAction from '@/components/CallToAction';
import MatricesSection from '@/components/MatricesSection';
import CorrectionSection from '@/components/CorrectionSection';

const Home = () => {
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const aboutSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Smooth scroll behavior for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    return () => {
      // Reset scroll behavior when component unmounts
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <>
      <div className="relative">
        <div ref={heroSectionRef} className="relative z-10">
          <HeroSection sectionRef={heroSectionRef} aboutSectionRef={aboutSectionRef} />
        </div>
        <div ref={aboutSectionRef} className="relative z-20">
          <AboutSection sectionRef={aboutSectionRef} heroSectionRef={heroSectionRef} />
        </div>
      </div>
      <ProblemsSection />
      <ApproachSection />
      <MatricesSection />
      <CorrectionSection />
      <ComparisonSection />
      <ReviewsSection />
      <FAQSection />
      <CallToAction />
    </>
  );
};

export default Home;
