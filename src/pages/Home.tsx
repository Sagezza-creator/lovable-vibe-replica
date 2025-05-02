
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
import { motion } from 'framer-motion';

const Home = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Создаем анимации для плавного появления секций
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { 
            when: "beforeChildren",
            staggerChildren: 0.1
          }
        }
      }}
    >
      <motion.div variants={sectionVariants}><HeroSection /></motion.div>
      <motion.div variants={sectionVariants}><ProblemsSection /></motion.div>
      <motion.div variants={sectionVariants}><ApproachSection /></motion.div>
      <motion.div variants={sectionVariants}><MatricesSection /></motion.div>
      <motion.div variants={sectionVariants}><CorrectionSection /></motion.div>
      <motion.div variants={sectionVariants}><ComparisonSection /></motion.div>
      <motion.div variants={sectionVariants}><AboutSection /></motion.div>
      <motion.div variants={sectionVariants}><ReviewsSection /></motion.div>
      <motion.div variants={sectionVariants}><FAQSection /></motion.div>
      <motion.div variants={sectionVariants}><CallToAction /></motion.div>
    </motion.div>
  );
};

export default Home;
