import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import CallToAction from '@/components/CallToAction';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import YoutubeVideosSection from '@/components/YoutubeVideosSection';

const Correction = () => {
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

  // Scroll animation for sections
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
          .physiology-container {
            position: relative;
            overflow: hidden;
          }
          .physiology-bg-image {
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 40%;
            background-image: url('https://svobodarazuma.ru/Images/molecul.png');
            background-size: contain;
            background-repeat: no-repeat;
            background-position: left center;
            opacity: 1;
          }
          .physiology-content {
            position: relative;
            z cellule: 1;
            width: 60%;
            margin-left: 40%;
          }
          .effectiveness-grid {
            display: grid;
            gap: 32px;
          }
          @media (max-width: 768px) {
            .effectiveness-grid {
              gap: 16px;
            }
          }
          .effectiveness-card {
            margin: 0 8px;
          }
        `}
      </style>

      <div className="relative overflow-hidden" ref={heroRef} style={{ height: '885px', position: 'relative' }}>
        <div className="absolute inset-0 z-0">
          <img
            ref={imgRef}
            src="https://svobodarazuma.ru/Images/correctionherosection.jpg"
            alt="Нейрокоррекция"
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
              Нейрокоррекция
            </h1>
            <p className="text-lg md:text-xl text-gray-700 animate-fade-in-up animation-delay-100">
              Глубинная трансформация подсознательных программ
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
              <h2 className="text-3xl font-bold gradient-heading text-center mb-10 animate-fade-in-up">
                Что такое нейрокоррекция?
              </h2>
              <div className="prose max-w-none">
                <p className="text-lg leading-relaxed mb-4 text-gray-700 animate-fade-in-up animation-delay-100">
                  Нейрокоррекция — это эффективный метод освобождения от ограничивающих подсознательных программ, которые управляют нашими реакциями, эмоциями и поведением без нашего ведома.
                </p>
                <p className="text-lg leading-relaxed mb-5 text-gray-700 animate-fade-in-up animation-delay-200">
                  Представьте, что в вашем подсознании хранится огромная библиотека «инструкций по выживанию», созданных на основе вашего прошлого опыта. Некоторые из этих инструкций помогают вам, а другие, наоборот, мешают и ограничивают. Нейрокоррекция помогает «переписать» устаревшие инструкции и создать новые, более полезные.
                </p>
                <div className="bg-gradient-to-r from-accent-50 to-white p-6 rounded-lg border-l-4 border-brand-300 animate-fade-in-up animation-delay-300">
                  <p className="italic text-gray-700">
                    "Наше подсознание определяет до 95% наших действий, реакций и решений. Нейрокоррекция позволяет получить доступ к этим механизмам и изменить их."
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-16 animate-section" ref={addToRefs}>
              <h2 className="text-3xl font-bold mb-10 text-center gradient-heading animate-fade-in-up">
                Как проходит сессия нейрокоррекции?
              </h2>
              
              <div className="bg-secondary/50 rounded-xl p-8 mb-12 animate-fade-in-up animation-delay-100">
                <h3 className="text-2xl font-medium mb-6 text-brand-600 animate-fade-in-up animation-delay-200">
                  Комфортный формат работы
                </h3>
                <p className="text-gray-700 mb-4 animate-fade-in-up animation-delay-300">
                  Нейрокоррекция проходит в формате структурированной беседы. Вам не нужно погружаться в гипноз, транс или заново переживать неприятные события прошлого. Вы остаётесь в комфортном состоянии и полном сознании на протяжении всей сессии.
                </p>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-medium mb-6 text-brand-600 text-center animate-fade-in-up animation-delay-100">
                  Продолжительность и формат
                </h3>
                <p className="text-gray-700 mb-6 text-center animate-fade-in-up animation-delay-200">
                  Одна сессия нейрокоррекции длится 3-5 часов. Это интенсивная, но спокойная работа, во время которой мы поэтапно:
                </p>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2 flex flex-col gap-4">
                    <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 hover:border-brand-300 hover:shadow-md transition-all duration-300 h-full animate-fade-in-up animation-delay-300">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
                        <h4 className="font-medium text-gray-800">Точно определяем проблему, над которой будем работать</h4>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 hover:border-brand-300 hover:shadow-md transition-all duration-300 h-full animate-fade-in-up animation-delay-400">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
                        <h4 className="font-medium text-gray-800">Находим момент, когда сформировалась ограничивающая программа</h4>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 hover:border-brand-300 hover:shadow-md transition-all duration-300 h-full animate-fade-in-up animation-delay-600">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
                        <h4 className="font-medium text-gray-800">Деактивируем деструктивные связи в мозге, используя специальные техники</h4>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 hover:border-brand-300 hover:shadow-md transition-all duration-300 h-full animate-fade-in-up animation-delay-100">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold text-lg flex-shrink-0">4</div>
                        <h4 className="font-medium text-gray-800">Формируем новые, позитивные нейронные связи</h4>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 hover:border-brand-300 hover:shadow-md transition-all duration-300 h-full animate-fade-in-up animation-delay-200">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold text-lg flex-shrink-0">5</div>
                        <h4 className="font-medium text-gray-800">Проверяем результат и закрепляем изменения</h4>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 flex items-center justify-center animate-fade-in-up animation-delay-300">
                    <div className="h-full w-full flex items-center justify-center">
                      <img
                        src="https://svobodarazuma.ru/Images/WorkRoad.jpg"
                        alt="Work Road"
                        className="w-full h-auto max-h-full object-cover rounded-lg shadow-sm"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-gradient-to-r from-accent-50 to-white p-6 rounded-lg border-l-4 border-brand-300 animate-fade-in-up animation-delay-400">
                  <p className="text-gray-700">
                    За время одной сессии мы прорабатываем одну конкретную проблему до полного её разрешения. Для некоторых запросов может потребоваться несколько сессий, если проблема имеет несколько источников или «слоёв».
                  </p>
                </div>
              </div>

              <div className="mb-16 bg-secondary/50 p-8 rounded-2xl physiology-container animate-fade-in-up animation-delay-100">
                <div className="physiology-bg-image"></div>
                <div className="physiology-content">
                  <h3 className="text-2xl font-medium mb-6 text-brand-600 animate-fade-in-up animation-delay-200">
                    Что происходит на физиологическом уровне?
                  </h3>
                  <p className="text-gray-700 mb-4 animate-fade-in-up animation-delay-300">
                    Когда мы переживаем стресс, в мозге формируется нейронная связь на основе гормона стресса — кортизола. В момент нейрокоррекции мы создаём новую нейронную связь, но уже на основе гормона удовольствия — дофамина. Это позволяет мозгу «переключиться» с режима защиты на режим удовольствия и роста.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-16 animate-section" ref={addToRefs}>
              <h2 className="text-3xl font-bold mb-10 text-center gradient-heading animate-fade-in-up">
                Что делает нейрокоррекцию настолько эффективной?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16 effectiveness-grid">
                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden effectiveness-card animate-fade-in-up animation-delay-100">
                  <div className="h-2 bg-gradient-to-r from-brand-300 to-brand-500"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">
                      Работа с первопричиной, а не симптомами
                    </h3>
                    <p className="text-gray-600">
                      В отличие от многих терапевтических подходов, нейрокоррекция направлена на работу с корнем проблемы — теми самыми нейронными связями в мозге, которые запускают нежелательное поведение или реакцию.
                    </p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden effectiveness-card animate-fade-in-up animation-delay-200">
                  <div className="h-2 bg-gradient-to-r from-brand-300 to-brand-500"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">
                      Отсутствие необходимости «бороть с собой»
                    </h3>
                    <p className="text-gray-600">
                      После нейрокоррекции вам не нужно прикладывать постоянные усилия, чтобы подавлять старые реакции или заставлять себя действовать по-новому. Изменения происходят естественно, потому что меняется сама основа реакции на нейронном уровне.
                    </p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden effectiveness-card animate-fade-in-up animation-delay-300">
                  <div className="h-2 bg-gradient-to-r from-brand-300 to-brand-500"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">
                      Быстрый и стойкий результат
                    </h3>
                    <p className="text-gray-600">
                      Многие клиенты отмечают изменения уже во время первой сессии. А поскольку мы работаем на уровне нейронных связей, а не убеждений или эмоций, результат сохраняется надолго без необходимости постоянной «поддержки».
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-16 bg-secondary/50 rounded-xl text-center p-8 mb-12 animate-fade-in-up animation-delay-400">
                <p className="text-3xl md:text-4xl italic text-brand-600 font-serif relative leading-snug">
                  Признание проблемы — первый шаг к её решению. Его вы уже сделали. Следующий шаг — действие.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Videos Section */}
      <YoutubeVideosSection />

      <CallToAction />
    </>
  );
};

export default Correction;
