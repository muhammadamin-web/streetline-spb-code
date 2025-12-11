import React, { useRef, useEffect, useState } from 'react';

// Данные шагов процесса
const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Шаг первый',
    description: 'Оставляете заявку на сайте или по телефону'
  },
  {
    number: '02',
    title: 'Мы свяжемся',
    description: 'Наш специалист выезжает для оценки и согласования объема работ'
  },
  {
    number: '03',
    title: 'Выполнение работ',
    description: 'Мы выполняем разметку, сдаём объект в срок, выдаём гарантию'
  }
];

// Компонент карточки с анимацией появления
const StepCard: React.FC<{
  step: typeof PROCESS_STEPS[0];
  index: number;
  isVisible: boolean;
}> = ({ step, index, isVisible }) => {
  return (
    <div
      className={`
        bg-yellow-400 rounded-3xl p-8 md:p-10 relative overflow-hidden 
        group hover:scale-[1.02] transition-all duration-700 ease-out
        ${isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12'
        }
      `}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div 
        className="absolute inset-0 opacity-10" 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }}
      />
      <div className="relative z-10">
        <div className="text-6xl font-bold text-white mb-6 opacity-80">{step.number}</div>
        <h3 className="text-xl font-bold text-black mb-2">{step.title}</h3>
        <p className="text-black/80 leading-relaxed">{step.description}</p>
      </div>
    </div>
  );
};

const WorkProcessSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.15
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#1a1c20] py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16">
          
          {/* Левая колонка - текст */}
          <div className="lg:w-5/12">
            <div className="text-sm font-medium text-slate-400 mb-4">Рабочий процесс</div>
            <h2 className="text-4xl md:text-5xl font-medium text-white leading-tight">
              3 простых, понятных <br className="hidden md:block"/> шагов.
            </h2>
          </div>
          
          {/* Правая колонка - карточки друг под другом */}
          <div className="lg:w-7/12 flex flex-col gap-6">
            {PROCESS_STEPS.map((step, index) => (
              <StepCard 
                key={step.number} 
                step={step} 
                index={index} 
                isVisible={isVisible}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WorkProcessSection;
