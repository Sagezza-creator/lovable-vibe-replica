import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

const CallToAction = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-secondary to-white">
      <div className="container mx-auto px-4">
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
            
            <Button asChild size="lg" className="group bg-accent hover:bg-accent/90 text-lg py-6 px-8">
              <Link to="/contact">
                Записаться на коррекцию
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;