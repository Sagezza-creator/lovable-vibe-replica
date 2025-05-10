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
  const parallaxRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    const handleScroll = () => {
      if (parallaxRef.current && contentRef.current && faqRef.current && ctaRef.current) {
        const scrollPosition = window.scrollY;
        const aboutSectionOffset = contentRef.current.offsetTop;
        const ctaSectionOffset = ctaRef.current.offsetTop;
        
        // Only apply parallax effect when scrolling through the relevant sections
        if (scrollPosition >= aboutSectionOffset && scrollPosition <= ctaSectionOffset) {
          const relativeScroll = scrollPosition - aboutSectionOffset;
          parallaxRef.current.style.transform = `translateY(${relativeScroll * 0.25}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <HeroSection />
      
      {/* Background image container */}
      <div className="relative">
        {/* Parallax background image */}
        <div 
          ref={parallaxRef}
          className="absolute inset-0 w-full h-[calc(100%+100vh)] z-0 pointer-events-none"
          style={{
            backgroundImage: "url('https://svobodarazuma.ru/Images/Font%20main%20screen.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            top: 0,
          }}
        ></div>
        
        {/* Content sections that use the background */}
        <div ref={contentRef} className="relative z-10">
          <AboutSection />
          <ProblemsSection />
          <ApproachSection />
          <MatricesSection />
          <CorrectionSection />
          <ComparisonSection />
          <ReviewsSection />
          <div ref={faqRef}>
            <FAQSection />
          </div>
        </div>
      </div>
      
      {/* Call to Action section without the background */}
      <div ref={ctaRef}>
        <CallToAction />
      </div>
    </>
  );
};

export default Home;