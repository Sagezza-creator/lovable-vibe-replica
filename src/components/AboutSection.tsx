import { useEffect, useState, useRef } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
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

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left: Video */}
          <div className={`lg:w-1/2 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-x-[-50px]'}`}>
            <div className="relative w-full rounded-lg overflow-hidden shadow-lg border border-gray-200" style={{ aspectRatio: '16 / 9' }}>
              <video
                poster="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                className="w-full h-full object-cover"
                controls
              >
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center cursor-pointer">
                  <svg className="w-8 h-8 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l13.5-7.94a1.5 1.5 0 000-2.538l-13.5-7.94z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden lg:block w-px h-64 bg-gray-300"></div>

          {/* Right: Quote */}
          <div className={`lg:w-1/2 transition-all duration-700 flex items-center justify-center ${isVisible ? 'opacity-100' : 'opacity-0 translate-x-[50px]'}`}>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-gray-800 relative">
                <span className="text-brand-600 text-5xl absolute -left-8 -top-4">“</span>
                Переключи автопилот: живи осознанно
                <span className="text-brand-600 text-5xl absolute -right-8 -bottom-4">”</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;