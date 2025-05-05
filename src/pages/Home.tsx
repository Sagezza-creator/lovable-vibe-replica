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

  useEffect(() => {
    const sections = document.querySelectorAll('.section-reveal');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Используем requestAnimationFrame для smoother анимации
          requestAnimationFrame(() => {
            entry.target.classList.add('is-revealed');
          });
        }
      });
    }, { 
      threshold: 0.3, // Увеличенный threshold для более плавного появления
      rootMargin: '0px 0px -50px 0px' // Небольшой отрицательный margin для раннего срабатывания
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

      {/* Глобальные стили для анимаций */}
      <style jsx global>{`
        .section-reveal {
          will-change: transform, opacity;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .section-reveal.is-revealed {
          opacity: 1;
          transform: translateY(0);
        }

        /* Гарантируем, что секции будут занимать место даже когда невидимы */
        .section-reveal {
          min-height: 1px;
        }

        /* Оптимизация для браузеров */
        @media (prefers-reduced-motion: reduce) {
          .section-reveal {
            transition: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Home;