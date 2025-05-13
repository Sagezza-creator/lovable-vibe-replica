import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import CallToAction from '@/components/CallToAction';
import YoutubeVideosSection from '@/components/YoutubeVideosSection';
import ArticlesPreviewSection from '@/components/ArticlesPreviewSection';

const ConceptionMatrices = () => {
  const parallaxRef1 = useRef(null);
  const parallaxRef2 = useRef(null);
  const sectionRef = useRef(null);
  const heroRef = useRef(null);
  const imgRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [imgLoaded, setImgLoaded] = useState(false);
  const sectionRefs = useRef([]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);

    const setBackgroundHeight = () => {
      if (sectionRef.current && parallaxRef1.current && parallaxRef2.current) {
        const sectionHeight = sectionRef.current.offsetHeight;
        parallaxRef2.current.style.height = `${sectionHeight}px`;
        parallaxRef1.current.style.height = `${sectionHeight - 10}px`;
      }
    };

    setBackgroundHeight();
    window.addEventListener('resize', setBackgroundHeight);

    const handleScroll = () => {
      if (parallaxRef1.current) {
        const scrollPosition = window.scrollY;
        parallaxRef1.current.style.transform = `translateY(${scrollPosition / 7}px)`;
      }
      if (parallaxRef2.current) {
        const scrollPosition = window.scrollY;
        parallaxRef2.current.style.transform = `translateY(${scrollPosition / 3}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', setBackgroundHeight);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        const heroHeight = heroRef.current.offsetHeight;
        const scrollProgress = Math.min(scrollPosition / (heroHeight * 2.5), 1);
        const newScale = 1 + scrollProgress * 0.30;
        setScale(newScale);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (imgRef.current?.complete) {
      setImgLoaded(true);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      sectionRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <>
      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-section {
            opacity: 0;
            transition: opacity 0.7s ease-out, transform 0.7s ease-out;
          }
          .animate-section.is-visible {
            opacity: 1;
            transform: translateY(0);
            animation: fadeUp 0.7s ease-out;
          }
          .animate-fade-in-up {
            opacity: 0;
            transform: translateY(10px);
            transition: opacity 0.7s ease-out, transform 0.7s ease-out;
          }
          .animate-fade-in-up.is-visible {
            opacity: 1;
            transform: translateY(0);
          }
          .animation-delay-100 {
            transition-delay: 0.1s;
          }
          .animation-delay-200 {
            transition-delay: 0.2s;
          }
          .animation-delay-300 {
            transition-delay: 0.3s;
          }
          .animation-delay-400 {
            transition-delay: 0.4s;
          }
          .animation-delay-600 {
            transition-delay: 0.6s;
          }
        `}
      </style>

      <div className="relative overflow-hidden" ref={heroRef} style={{ height: '885px', position: 'relative' }}>
        <div className="absolute inset-0 z-0">
          <img
            ref={imgRef}
            src="https://svobodarazuma.ru/Images/matrixhero.jpg"
            alt="Матрицы зачатия"
            className={`w-full h-full object-cover object-center transition-all duration-1000 ease-out will-change-transform ${
              imgLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              transform: `scale(${scale})`,
              transformOrigin: 'center center',
              transitionProperty: 'opacity, transform',
            }}
            onLoad={() => setImgLoaded(true)}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
          <div className="max-w-3xl mx-auto text-center animate-section" ref={addToRefs}>
            <h1 className="text-4xl md:text-5xl font-bold gradient-heading mb-6 animate-fade-in-up">
              Матрицы зачатия
            </h1>
            <p className="text-lg md:text-xl text-gray-700 animate-fade-in-up animation-delay-100">
              Ключ к пониманию и решению глубинных подсознательных программ
            </p>
          </div>
        </div>
        <div className="custom-shape-divider-bottom absolute bottom-0 left-0 w-full z-10">
          <img
            src="https://svobodarazuma.ru/Images/wavesOpacity.svg"
            alt="Wave Divider"
            className="w-full"
            style={{
              height: '80px',
              transform: 'rotate(180deg)',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </div>
      </div>

      <section className="py-16 relative overflow-hidden" ref={sectionRef}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div
              ref={parallaxRef2}
              className="absolute top-0 left-0 w-full bg-cover bg-top z-[-2]"
              style={{
                backgroundImage: `url('https://svobodarazuma.ru/Images/Correctionfont2.jpg')`,
                transform: 'translateY(0)',
              }}
            ></div>
            <div
              ref={parallaxRef1}
              className="absolute top-[10px] left-0 w-full bg-cover bg-top z-[-1]"
              style={{
                backgroundImage: `url('https://svobodarazuma.ru/Images/Correctionfont.png')`,
                transform: 'translateY(0)',
              }}
            ></div>

            <div className="mb-16 animate-section" ref={addToRefs}>
              <h2 className="text-3xl font-bold text-center mb-10 text-brand-600 animate-fade-in-up">
                Что такое матрицы зачатия?
              </h2>
              <div className="prose max-w-none">
                <p className="text-lg leading-relaxed mb-4 text-gray-700 animate-fade-in-up animation-delay-100">
                  Матрицы зачатия — это накопленная клеточная память опыта, полученного во время зачатия, внутриутробного развития и рождения, которая бессознательно хранится в каждой клетке нашего тела. Эта память формирует фундаментальные паттерны нашего поведения и реакций, влияя на все аспекты нашей жизни.
                </p>
                <p className="text-lg leading-relaxed mb-5 text-gray-700 animate-fade-in-up animation-delay-200">
                  Подобно тому, как операционная система определяет работу компьютера, матрицы зачатия создают основу для всех последующих программ и шаблонов, которые мы приобретаем в течение жизни.
                </p>
              </div>
            </div>

            <div className="bg-secondary/50 p-8 rounded-lg mb-12 animate-fade-in-up animation-delay-100">
              <h3 className="text-3xl font-medium mb-6 text-brand-600 animate-fade-in-up animation-delay-200">
                Как матрицы зачатия влияют на нашу жизнь?
              </h3>
              <div className="space-y-4 text-gray-700 animate-fade-in-up animation-delay-300">
                <p>
                  Нарушения в матрицах зачатия могут проявляться во многих сферах жизни, создавая устойчивые проблемы, которые сложно преодолеть традиционными методами:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Постоянные страхи и тревоги без очевидной причины</li>
                  <li>Хронические заболевания, не поддающиеся стандартному лечению</li>
                  <li>Повторяющиеся сценарии в отношениях</li>
                  <li>Проблемы с личными границами и самооценкой</li>
                  <li>Необъяснимое чувство отверженности или ненужности</li>
                  <li>Сложность в достижении целей из-за внутренних блоков</li>
                </ul>
                <p>
                  Эти паттерны настолько глубоко укоренены в нашем подсознании, что часто мы не осознаем их влияние на наши решения и поведение.
                </p>
              </div>
            </div>

            <div className="mb-12 animate-section" ref={addToRefs}>
              <h3 className="text-3xl font-medium mb-6 text-brand-600 animate-fade-in-up animation-delay-100">
                Работа с матрицами зачатия
              </h3>
              <p className="text-gray-700 mb-4 animate-fade-in-up animation-delay-200">
                В процессе моей работы я помогаю выявить и проработать все 10 основных матриц зачатия. Этот процесс позволяет нейтрализовать до 80% базовых подсознательных шаблонов, создающих препятствия в вашей жизни.
              </p>
              <p className="text-gray-700 mb-4 animate-fade-in-up animation-delay-300">
                Проработка матриц зачатия становится прочным фундаментом для последующего решения более поздних программ и блоков, сформированных в детстве и взрослой жизни. Многие клиенты отмечают, что после коррекции матриц зачатия они чувствуют глубокое облегчение и освобождение от давних ограничений.
              </p>
              <p className="text-gray-700 animate-fade-in-up animation-delay-400">
                Каждая матрица отвечает за определенный аспект нашей жизни: от базового чувства безопасности до способности строить здоровые отношения и реализовывать свой потенциал. Работа с ними позволяет достичь глубинной трансформации и создать новую основу для гармоничной и сбалансированной жизни.
              </p>
            </div>

              <h3 className="text-3xl font-medium mb-6 text-brand-600 text-center animate-fade-in-up animation-delay-200">
                Преимущества работы с матрицами зачатия
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in-up animation-delay-300">
                <div className="bg-white p-4 rounded shadow-sm">
                  <p className="font-medium text-gray-800 text-center">Устранение глубинных причин</p>
                  <p className="text-gray-600 text-sm text-center">Работа с первопричиной проблем, а не с симптомами</p>
                </div>
                <div className="bg-white p-4 rounded shadow-sm">
                  <p className="font-medium text-gray-800 text-center">Долговременный эффект</p>
                  <p className="text-gray-600 text-sm text-center">Изменения становятся частью новой "операционной системы"</p>
                </div>
                <div className="bg-white p-4 rounded shadow-sm">
                  <p className="font-medium text-gray-800 text-center">Системный подход</p>
                  <p className="text-gray-600 text-sm text-center">Затрагивает все аспекты жизни: здоровье, отношения, самореализацию</p>
                </div>
                <div className="bg-white p-4 rounded shadow-sm">
                  <p className="font-medium text-gray-800 text-center">Ускорение результатов</p>
                  <p className="text-gray-600 text-sm text-center">Делает более эффективной работу с последующими коррекциями</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Videos Section */}
      <YoutubeVideosSection />
      
      {/* Articles Section */}
      <ArticlesPreviewSection />

      <CallToAction />
    </>
  );
};

export default ConceptionMatrices;
