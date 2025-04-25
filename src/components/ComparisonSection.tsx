
import { Check, X } from 'lucide-react';

const ComparisonSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-heading mb-6">
            Почему выбирают мой подход
          </h2>
          <p className="text-lg text-gray-700">
            В чем отличие моего метода от традиционной психологической помощи
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
            <div className="col-span-1">
              {/* Empty first column on desktop */}
            </div>
            <div className="hidden lg:block text-center">
              <div className="bg-brand-50 rounded-t-lg py-4 px-6">
                <h3 className="font-bold text-xl text-brand-600">Мой подход</h3>
              </div>
            </div>
            <div className="hidden lg:block text-center">
              <div className="bg-gray-100 rounded-t-lg py-4 px-6">
                <h3 className="font-bold text-xl text-gray-600">Традиционная психология</h3>
              </div>
            </div>
          </div>
          
          {/* Mobile headers */}
          <div className="lg:hidden grid grid-cols-3 gap-4 mb-6">
            <div className="col-span-3">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">Сравнение подходов</h3>
            </div>
          </div>

          {/* Comparison rows */}
          <div className="space-y-6">
            {/* Row 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="font-medium text-gray-800">
                <h4 className="lg:hidden font-bold text-lg mb-4">Глубина воздействия</h4>
                <p>Глубина воздействия</p>
              </div>
              <div className="lg:text-center">
                <h4 className="lg:hidden font-semibold text-brand-600 mb-2">Мой подход</h4>
                <p className="flex lg:justify-center items-center gap-2 text-gray-800">
                  <Check size={20} className="text-green-500 min-w-[20px]" />
                  <span>Работа с корневыми причинами в подсознании</span>
                </p>
              </div>
              <div className="lg:text-center">
                <h4 className="lg:hidden font-semibold text-gray-600 mb-2">Традиционная психология</h4>
                <p className="flex lg:justify-center items-center gap-2 text-gray-800">
                  <X size={20} className="text-red-400 min-w-[20px]" />
                  <span>Работа в основном с симптомами на уровне сознания</span>
                </p>
              </div>
            </div>
            
            {/* Row 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 bg-white rounded-lg border">
              <div className="font-medium text-gray-800">
                <h4 className="lg:hidden font-bold text-lg mb-4">Стойкость результата</h4>
                <p>Стойкость результата</p>
              </div>
              <div className="lg:text-center">
                <h4 className="lg:hidden font-semibold text-brand-600 mb-2">Мой подход</h4>
                <p className="flex lg:justify-center items-center gap-2 text-gray-800">
                  <Check size={20} className="text-green-500 min-w-[20px]" />
                  <span>Постоянное устранение проблем без возврата</span>
                </p>
              </div>
              <div className="lg:text-center">
                <h4 className="lg:hidden font-semibold text-gray-600 mb-2">Традиционная психология</h4>
                <p className="flex lg:justify-center items-center gap-2 text-gray-800">
                  <X size={20} className="text-red-400 min-w-[20px]" />
                  <span>Проблемы могут возвращаться при стрессе</span>
                </p>
              </div>
            </div>
            
            {/* Row 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="font-medium text-gray-800">
                <h4 className="lg:hidden font-bold text-lg mb-4">Скорость достижения результата</h4>
                <p>Скорость достижения результата</p>
              </div>
              <div className="lg:text-center">
                <h4 className="lg:hidden font-semibold text-brand-600 mb-2">Мой подход</h4>
                <p className="flex lg:justify-center items-center gap-2 text-gray-800">
                  <Check size={20} className="text-green-500 min-w-[20px]" />
                  <span>Видимые изменения за 2-4 сеанса</span>
                </p>
              </div>
              <div className="lg:text-center">
                <h4 className="lg:hidden font-semibold text-gray-600 mb-2">Традиционная психология</h4>
                <p className="flex lg:justify-center items-center gap-2 text-gray-800">
                  <X size={20} className="text-red-400 min-w-[20px]" />
                  <span>Может потребоваться месяцы или годы</span>
                </p>
              </div>
            </div>
            
            {/* Row 4 */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 bg-white rounded-lg border">
              <div className="font-medium text-gray-800">
                <h4 className="lg:hidden font-bold text-lg mb-4">Научная основа</h4>
                <p>Научная основа</p>
              </div>
              <div className="lg:text-center">
                <h4 className="lg:hidden font-semibold text-brand-600 mb-2">Мой подход</h4>
                <p className="flex lg:justify-center items-center gap-2 text-gray-800">
                  <Check size={20} className="text-green-500 min-w-[20px]" />
                  <span>Современные исследования в эпигенетике</span>
                </p>
              </div>
              <div className="lg:text-center">
                <h4 className="lg:hidden font-semibold text-gray-600 mb-2">Традиционная психология</h4>
                <p className="flex lg:justify-center items-center gap-2 text-gray-800">
                  <Check size={20} className="text-green-500 min-w-[20px]" />
                  <span>Классические психологические теории</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
