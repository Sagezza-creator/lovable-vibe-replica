import { useEffect, useState, useRef } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const parallaxRef = useRef(null);

  useEffect(() => {
    // Intersection Observer for fade-in animation
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Parallax effect
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY;
        // Move background at 1/4 scroll speed
        parallaxRef.current.style.transform = `translateY(${scrollY / 4}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      <div
        ref={parallaxRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url('https://svobodarazuma.ru/Images/Font%20main%20screen.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
          willChange: 'transform',
        }}
      ></div>
      <div className="container mx-auto px-4 md:px-8 lg:px-10 relative z-10">
        <div className="flex flex-col items-center gap-12">
          {/* Цитата */}
          <div
            className={`transition-all duration-700 text-center max-w-3xl ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-3xl md:text-4xl italic text-gray-800 font-serif relative leading-snug">
              <span className="text-brand-600 text-5xl absolute -left-4 -top-4">“</span>
              <span className="block">Переключи автопилот: живи осознанно</span>
              <span className="text-brand-600 text-5xl absolute -right-4 -bottom-4">”</span>
            </p>
          </div>

          {/* Видео */}
          <div
            className={`w-full max-w-5xl transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div
              className="relative w-full shadow-lg overflow-hidden border"
              style={{
                borderColor: '#e0e0e0',
                borderRadius: '12px',
                aspectRatio: '16 / 9',
              }}
            >
              <video
                poster="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                className="w-full h-full object-cover"
                controls
              >
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;