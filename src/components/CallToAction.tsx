
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Готовы освободиться от подсознательных ограничений?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Сделайте первый шаг к свободе разума и новой жизни без старых проблем и ограничений.
          </p>
          <Button asChild size="lg" className="group">
            <Link to="/contact">
              Записаться на консультацию
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
