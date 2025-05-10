
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const CorrectionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create a timeline for animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "top 30%",
        toggleActions: "play none none none"
      }
    });

    // Add animations to the timeline
    tl.fromTo(titleRef.current, 
      { y: 40, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" }, 0
    )
    .fromTo(imageRef.current, 
      { x: 40, opacity: 0 }, 
      { x: 0, opacity: 1, duration: 0.7, ease: "power2.out" }, 0.2
    )
    .fromTo(textRef.current, 
      { x: -40, opacity: 0 }, 
      { x: 0, opacity: 1, duration: 0.7, ease: "power2.out" }, 0.4
    )
    .fromTo(buttonRef.current, 
      { y: 20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" }, 0.6
    );

    // Clean up the ScrollTrigger when component unmounts
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill(true));
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mx-auto">
          {/* Заголовок по центру */}
          <div ref={titleRef} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold gradient-heading mb-6">
              Нейрокоррекция
            </h2>
            <p className="text-lg text-gray-700">
              Трансформация подсознательных программ
            </p>
          </div>

          {/* Распределение контента по всей ширине */}
          <div className="flex flex-col md:flex-row gap-8 items-stretch">
            {/* Текст */}
            <div className="flex-1 flex flex-col justify-center">
              <div ref={textRef} className="space-y-6 text-gray-700">
                <p>
                  Нейрокоррекция — это целенаправленный процесс, использующий научные открытия в области эпигенетики, нейропластичности и нейрохимии для выявления и деактивации подсознательных программ, вызывающих стресс, страх или дисгармонию в вашей жизни.
                </p>
                <p>
                  В процессе коррекции мы находим нейронные связи, ассоциированные со стрессом и негативным опытом, нейтрализуем их влияние и создаем новые, здоровые модели поведения. Это позволяет разорвать повторяющиеся поведенческие шаблоны (измены, болезни, неудачи), обрести эмоциональную свободу и уверенно принимать решения.
                </p>
                <p className="font-medium bg-yellow-50 p-4 rounded-lg border border-yellow-300">
                  Одна нейрокоррекция длится 3–5 часов и проходит в комфортной обстановке через структурированный диалог. Без специальной подготовки Вы освободитесь от негативных подсознательных программ и избавитесь от стресса, копившегося всю жизнь.
                </p>
              </div>

              {/* Кнопка - выровнена по правому краю текстового блока */}
              <div ref={buttonRef} className="mt-8 flex justify-end">
                <Button asChild variant="outline" className="group border-yellow-300 text-yellow-700 hover:bg-yellow-50">
                  <Link to="/correction">
                    Узнать больше о коррекции
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover:translate-x-1 transition-transform">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </Button>
              </div>
            </div>

            {/* Изображение */}
            <div className="md:w-[400px] flex items-center justify-end">
              <div ref={imageRef} className="rounded-lg overflow-hidden shadow-md w-full">
                <img 
                  src="https://svobodarazuma.ru/Images/correction.jpg" 
                  alt="Нейрокоррекция" 
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorrectionSection;
