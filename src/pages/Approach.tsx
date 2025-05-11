import { useEffect, useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import CallToAction from '@/components/CallToAction';

const Approach = () => {
  const [scale, setScale] = useState(1);
  const [imgLoaded, setImgLoaded] = useState(false);
  const heroRef = useRef(null);
  const imgRef = useRef(null);

  // Zoom effect for hero section image
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        const heroHeight = heroRef.current.offsetHeight;
        const scrollProgress = Math.min(scrollPosition / (heroHeight * 2.5), 1);
        const newScale = 1 + scrollProgress * 0.30; // Same scale animation as in HeroSection
        setScale(newScale);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check image load
  useEffect(() => {
    if (imgRef.current?.complete) {
      setImgLoaded(true);
    }
  }, []);

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
            animation: fadeUp 0.6s ease-out forwards;
          }
          .animate-fade-in-up {
            animation: fadeUp 0.6s ease-out forwards;
            opacity: 0;
          }
          .animation-delay-100 {
            animation-delay: 0.1s;
          }
          .approach-gradient-heading {
            background: linear-gradient(to right, #2E86C1, #22d3ee);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
          }
          .mind-container {
            position: relative;
            overflow: hidden;
          }
          .mind-bg-image {
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            width: 40%;
            background-image: url('https://svobodarazuma.ru/Images/neurobrain.png');
            background-size: contain;
            background-repeat: no-repeat;
            background-position: right center;
            opacity: 1;
          }
          .mind-content {
            position: relative;
            z-index: 1;
            width: 60%;
          }
          .bio-image-container {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
          }
          .bio-image {
            max-height: 600px;
            width: auto;
            object-fit: contain;
            border-radius: 0.5rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          }
        `}
      </style>

      {/* Hero Section */}
      <div className="pt-32 pb-16 relative overflow-hidden" ref={heroRef}>
        <div className="absolute inset-0 z-0">
          <img
            ref={imgRef}
            src="https://svobodarazuma.ru/Images/correctionbanner.jpg"
            alt="Научный подход к психологии"
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

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold approach-gradient-heading mb-6 animate-fade-in-up">
              Как это работает?
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed animate-fade-in-up animation-delay-100">
              Научный подход к решению психологических проблем
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Как формируются блоки */}
            <div className="animate-section mb-16">
              <h3 className="text-xl font-semibold mb-4 approach-gradient-heading flex items-center">
                <CheckCircle className="mr-2" size={24} />
                Как формируются блоки в нашем мозге
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Представьте: в детстве вы выступали перед публикой и забыли слова. Все смеялись, и вы испытали сильный стресс. В этот момент ваш мозг делает пометку: "Выступления перед людьми — опасно!" И в будущем, когда вам нужно будет выступать, подсознание будет всячески этому сопротивляться — появится страх, тревога, желание избежать ситуации.
                  </p>
                  <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-lg">
                    <CardContent className="p-0">
                      <h3 className="text-xl font-semibold mb-4 text-brand-500 flex items-center">
                        <CheckCircle className="mr-2" size={24} />
                        Так работают все наши проблемы:
                      </h3>
                      <ol className="list-decimal pl-6 space-y-2 text-gray-600">
                        <li>Происходит стрессовое событие</li>
                        <li>Мозг создает защитную программ</li>
                        <li>Эта программа автоматически запускается в похожих ситуациях</li>
                        <li>Мы испытываем негативные эмоции и блокируем собственные действия</li>
                      </ol>
                    </CardContent>
                  </Card>
                </div>
                <div className="flex justify-center w-full h-[390px]">
                  <div className="relative w-full max-w-[500px] h-full">
                    <img
                      src="https://svobodarazuma.ru/Images/neuroform.jpg"
                      alt="Нейроны и мозг"
                      className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>

            <Separator className="my-12" />

            {/* Почему возникают проблемы */}
            <div className="animate-section mb-16">
              <h2 className="text-3xl font-bold mb-8 approach-gradient-heading text-center">
                Почему возникают проблемы?
              </h2>
              <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8 shadow-lg mb-10 mind-container">
                <div className="mind-bg-image"></div>
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-4 approach-gradient-heading">
                    Разум как компьютер с двумя операционными системами
                  </h3>
                  <div className="mind-content">
                    <p className="text-gray-600 mb-4">
                      Представьте, что ваш разум — это компьютер с двумя операционными системами:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                      <li>Сознание — то, что вы осознаете, ваши мысли, желания и намерения</li>
                      <li>Подсознание — автоматические программы, которые работают в фоновом режиме</li>
                    </ul>
                    <p className="text-gray-600">
                      Когда эти системы работают согласованно, вы легко достигаете целей. Но часто возникает конфликт: сознание хочет одного, а подсознание блокирует эти желания, запуская свои защитные программы.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <h3 className="text-xl font-semibold mb-4 approach-gradient-heading">
                Как формируются подсознательные блоки
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Каждый раз, когда мы переживаем стрессовую ситуацию, наш мозг создает особую нейронную связь. Эта связь работает как защитный механизм — "если снова возникнет подобная ситуация, нужно ее избежать". В результате формируются автоматические реакции:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {[
                  "Страх перед публичными выступлениями",
                  "Сложности в отношениях с противоположным полом",
                  "Неспособность отстаивать свои границы",
                  "Прокрастинация и откладывание важных дел",
                  "Самосаботаж при приближении к успеху",
                  "Хронические проблемы со здоровьем",
                ].map((item, index) => (
                  <Card
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-sm border border-blue-100 hover:shadow-md transition-shadow"
                  >
                    <CardContent className="p-0 h-full flex items-center justify-center text-center">
                      <p className="text-gray-700">{item}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <p className="text-gray-600 italic text-center">
                Эти реакции становятся настолько автоматическими, что мы не осознаем их влияние на нашу жизнь.
              </p>
            </div>

            <Separator className="my-12" />

            {/* Метод работы */}
            <div className="animate-section mb-16">
              <h2 className="text-3xl font-bold mb-8 approach-gradient-heading text-center">
                Мой метод работы с подсознанием
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Текстовая колонка */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">
                    Биохимия мозга и эмоции
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    В основе моего подхода лежит понимание биохимических процессов в мозге. Когда мы испытываем стресс, в организме вырабатывается кортизол — гормон стресса. Когда мы чувствуем удовольствие — выделяется дофамин, гормон удовольствия.
                  </p>
                  <p className="text-gray-600">
                    Любая нейронная связь в нашем мозге закрепляется либо на кортизоле (и тогда мы стремимся избегать связанных с ней ситуаций), либо на дофамине (и тогда нам хочется повторять эти действия).
                  </p>

                  {/* Кнопка внутри текстовой колонки */}
                  <div className="flex justify-center mt-12 mb-10 animate-section">
                    <Button
                      asChild
                      size="lg"
                      className="bg-brand-500 hover:bg-brand-600 text-white group"
                    >
                      <Link to="/correction" className="flex items-center">
                        Узнать больше о нейрокоррекции
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Изображение */}
                <div className="flex justify-center bio-image-container">
                  <img
                    src="https://svobodarazuma.ru/Images/neurobrain2.jpg"
                    alt="Биохимия мозга"
                    className="bio-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default Approach;