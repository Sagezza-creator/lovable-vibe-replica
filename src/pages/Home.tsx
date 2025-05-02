
import { useEffect, useRef, useState } from 'react';
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

  useEffect(() => {
    // Активация анимации при прокрутке для секций
    const sections = document.querySelectorAll('.section-reveal');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
        }
      });
    }, { threshold: 0.15 });

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <HeroSection />
      <div className="section-reveal">
        <ProblemsSection />
      </div>
      <div className="section-reveal">
        <ApproachSection />
      </div>
      <div className="section-reveal">
        <MatricesSection />
      </div>
      <div className="section-reveal">
        <CorrectionSection />
      </div>
      <div className="section-reveal">
        <ComparisonSection />
      </div>
      <div className="section-reveal">
        <AboutSection />
      </div>
      <div className="section-reveal">
        <ReviewsSection />
      </div>
      <div className="section-reveal">
        <FAQSection />
      </div>
      <div className="section-reveal">
        <CallToAction />
      </div>
    </>
  );
};

export default Home;
