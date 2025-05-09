
import { useEffect } from 'react';
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
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Добавляем класс для плавности прокрутки
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      // Удаляем плавность при размонтировании компонента
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      <HeroSection />
      <AboutSection />
      <div className="relative z-30 bg-white">
        <ProblemsSection />
        <ApproachSection />
        <MatricesSection />
        <CorrectionSection />
        <ComparisonSection />
        <ReviewsSection />
        <FAQSection />
        <CallToAction />
      </div>
    </div>
  );
};

export default Home;
