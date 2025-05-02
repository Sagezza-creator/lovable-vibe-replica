
import { useEffect, useState } from 'react';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-indigo-100 flex items-center justify-center p-6">
      <div className={`max-w-4xl w-full ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
        <div className="text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
            Добро пожаловать
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Современный адаптивный дизайн с плавными анимациями и градиентами
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors duration-300">
              Начать
            </button>
            <button className="px-6 py-3 border border-violet-600 text-violet-600 rounded-lg hover:bg-violet-50 transition-colors duration-300">
              Узнать больше
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
