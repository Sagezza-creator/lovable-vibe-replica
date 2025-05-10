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

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      if (parallaxRef.current && contentRef.current && faqRef.current) {
        const scrollPosition = window.scrollY;
        const aboutSectionOffset = contentRef.current.offsetTop;
        const faqSectionOffset = faqRef.current.offsetTop;
        
        // Calculate maximum scroll position where parallax should stop
        const maxParallaxScroll = faqSectionOffset - aboutSectionOffset;
        const relativeScroll = scrollPosition - aboutSectionOffset;
        
        // Apply parallax effect only within the allowed range
        if (relativeScroll >= 0 && relativeScroll <= maxParallaxScroll) {
          parallaxRef.current.style.transform = `translateY(${relativeScroll * 0.25}px)`;
        }
        
        // Fix the background position after reaching FAQ section
        if (relativeScroll > maxParallaxScroll) {
          parallaxRef.current.style.transform = `translateY(${maxParallaxScroll * 0.15}px)`;
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
      <div className="relative overflow-hidden">
        {/* Parallax background image */}
        <div 
          ref={parallaxRef}
          className="absolute inset-0 w-full h-[120%] z-0 pointer-events-none"
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
        </div>
      </div>
      
      {/* Sections without the background */}
      <div ref={faqRef}>
        <FAQSection />
        <CallToAction />
      </div>
    </>
  );
};

export default Home;