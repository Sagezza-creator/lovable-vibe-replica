
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-10 pb-1 bg-gradient-to-br from-secondary to-white">
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
            <Button 
              asChild 
              size="lg" 
              className="group bg-accent hover:bg-accent/90 text-lg py-6 px-8"
            >
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
