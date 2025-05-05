
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
    }, { 
      threshold: 0.15,
      rootMargin: '0px' // Убираем отступ, чтобы уменьшить "прыжки"
    });

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
    <div className="overflow-hidden"> {/* Добавляем контейнер с overflow-hidden */}
      <HeroSection />
      <div className="section-reveal section-container">
        <ProblemsSection />
      </div>
      <div className="section-reveal section-container">
        <ApproachSection />
      </div>
      <div className="section-reveal section-container">
        <MatricesSection />
      </div>
      <div className="section-reveal section-container">
        <CorrectionSection />
      </div>
      <div className="section-reveal section-container">
        <ComparisonSection />
      </div>
      <div className="section-reveal section-container">
        <AboutSection />
      </div>
      <div className="section-reveal section-container">
        <ReviewsSection />
      </div>
      <div className="section-reveal section-container">
        <FAQSection />
      </div>
      <div className="section-reveal section-container">
        <CallToAction />
      </div>
    </div>
  );
};

export default Home;
