
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-500">
            Готовы освободиться от подсознательных ограничений?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Сделайте первый шаг к свободе разума и новой жизни без старых проблем и ограничений.
          </p>
          <Button asChild size="lg" className="group bg-accent hover:bg-accent/90">
            <Link to="/contact">
              Записаться на коррекцию
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
