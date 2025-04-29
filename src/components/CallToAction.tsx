import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

const CallToAction = () => {
  return (
    <section className="py-10 pb-1 bg-gradient-to-br from-secondary to-white relative">
      {/* Добавленное изображение */}
      <img 
        src="https://svobodarazuma.ru/Images/Chains.png" 
        alt="Освобождение от ограничений"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-20"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center flex flex-col h-full">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-500">
              Готовы освободиться от подсознательных ограничений?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Сделайте первый шаг к свободе разума и новой жизни без старых проблем и ограничений.
            </p>
          </div>
          
          <div className="flex-1 flex flex-col justify-end items-center">
            <div className="flex justify-center mb-6">
              <Link to="/contact">
                <button 
                  className="h-12 px-8 text-white font-medium rounded-full
                           bg-gradient-to-r from-blue-500 to-cyan-400
                           hover:scale-105 hover:shadow-lg active:scale-95
                           transition-all duration-200 ease-in-out"
                >
                  Записаться на нейрокоррекцию
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;