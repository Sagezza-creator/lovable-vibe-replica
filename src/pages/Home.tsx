import { useEffect, useRef, useState } from 'react';
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
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    const updateContentHeight = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight);
      }
    };

    // Initial calculation
    updateContentHeight();

    // Update on window resize (optional)
    window.addEventListener('resize', updateContentHeight);
    
    const handleScroll = () => {
      if (parallaxRef.current && contentRef.current && faqRef.current) {
        const scrollPosition = window.scrollY;
        const aboutSectionOffset = contentRef.current.offsetTop;
        const faqSectionOffset = faqRef.current.offsetTop;
        
        if (scrollPosition >= aboutSectionOffset && scrollPosition <= faqSectionOffset) {
          const relativeScroll = scrollPosition - aboutSectionOffset;
          parallaxRef.current.style.transform = `translateY(${relativeScroll * 0.25}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('resize', updateContentHeight);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (parallaxRef.current && contentHeight > 0) {
      parallaxRef.current.style.height = `${contentHeight}px`;
    }
  }, [contentHeight]);

  return (
    <>
      <HeroSection />
      
      {/* Background image container */}
      <div className="relative">
        {/* Parallax background image */}
        <div 
          ref={parallaxRef}
          className="absolute inset-0 w-full z-0 pointer-events-none bg-fixed"
          style={{
            backgroundImage: "url('https://svobodarazuma.ru/Images/Font%20main%20screen.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat',
            transition: 'height 0.3s ease-out' // Smooth height changes
          }}
        ></div>
        
        {/* Content sections that use the background */}
        <div ref={contentRef} className="relative z-10 pb-20"> {/* Added padding-bottom for footer */}
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