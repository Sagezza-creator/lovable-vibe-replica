import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section 
      className="relative py-16 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(https://svobodarazuma.ru/Images/Chains.png)',
        minHeight: '600px' // Соответствует высоте вашего изображения
      }}
    >
      {/* Затемненный оверлей для лучшей читаемости текста */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px] z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center flex flex-col h-full">
          <div className="pt-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white drop-shadow-md">
              Готовы освободиться от подсознательных ограничений?
            </h2>
            <p className="text-lg text-gray-100 mb-8 drop-shadow-sm">
              Сделайте первый шаг к свободе разума и новой жизни без старых проблем и ограничений.
            </p>
          </div>
          
          <div className="flex-1 flex flex-col justify-end items-center pb-10">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Link to="/contact">
                <button 
                  className="h-12 px-8 text-white font-medium rounded-full
                           bg-gradient-to-r from-blue-500 to-cyan-400
                           hover:scale-105 hover:shadow-lg active:scale-95
                           transition-all duration-200 ease-in-out
                           shadow-md"
                >
                  Записаться на нейрокоррекцию
                </button>
              </Link>
              
              <Button 
                asChild 
                size="lg" 
                className="group bg-white text-blue-600 hover:bg-white/90 text-lg py-6 px-8 shadow-md"
              >
                <Link to="/contact">
                  Бесплатная консультация
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;