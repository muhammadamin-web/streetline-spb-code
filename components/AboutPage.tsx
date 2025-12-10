import React from 'react';
import { Briefcase, Clock } from 'lucide-react';
import { REVIEWS } from '../constants';
import ReviewCarousel from './ReviewCarousel';
import FAQSection from './FAQSection';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white text-slate-900">
      
      {/* Header / History Section (Matches Screenshot 1) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
              {/* Text Column */}
              <div className="lg:w-1/2 pt-4">
                <h1 className="text-4xl md:text-5xl font-medium mb-12">Наша история</h1>
                
                <div className="space-y-8 text-slate-600 leading-relaxed text-base md:text-lg">
                  <p>
                    Наша команда гордится своим подходом к каждому проекту, начиная от внимательного планирования до точного выполнения работ. Мы используем только профессиональное оборудование от именитых производителей и лучшие материалы, соответствующие всем ГОСТам.
                  </p>
                  <p>
                    На всех этапах работ менеджер поддерживает связь с клиентом, предоставляя регулярные отчеты о ходе выполнения задач. Пример тому — успешные проекты на СКА Арене, Российском автодроме «Игора Драйв» и в многофункциональном комплексе «Лахта-центр».
                  </p>
                  <p>
                    Безопасность и надежность в каждом проекте. Качество и надежность — наши приоритеты, и мы строго соблюдаем все требования безопасности и охраны труда.
                  </p>
                </div>
              </div>

              {/* Right Images Column */}
              <div className="w-full lg:w-1/2 flex flex-col gap-6 md:gap-8">
                 <div className="rounded-[20px] md:rounded-[32px] overflow-hidden shadow-xl h-64 md:h-80 relative">
                    {/* Construction workers */}
                    <img src="/images/WhatsApp Image 2025-11-15 at 10.38.05 (2).jpeg" alt="Construction team" className="w-full h-full object-cover" />
                 </div>
                 <div className="rounded-[20px] md:rounded-[32px] overflow-hidden shadow-xl h-64 md:h-80 relative">
                    {/* Dark parking */}
                    <img src="/images/WhatsApp Image 2025-11-15 at 10.38.02.jpeg" alt="Underground parking" className="w-full h-full object-cover" />
                 </div>
              </div>
          </div>
        </div>
      </section>

      {/* Photo Grid Section (Matches Screenshot 2) */}
      <section className="pb-24 bg-white">
         <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-auto">
               {/* Left Column: Tall Image */}
               <div className="h-[500px] lg:h-[800px] rounded-[32px] overflow-hidden shadow-lg">
                  {/* Building + Road work */}
                  <img src="/images/WhatsApp Image 2025-11-15 at 10.37.59 (2).jpeg" alt="Complex project" className="w-full h-full object-cover" />
               </div>

               {/* Right Column: 3 Stacked Images */}
               <div className="flex flex-col gap-6 h-auto lg:h-[800px]">
                   <div className="flex-1 rounded-[32px] overflow-hidden shadow-lg min-h-[200px]">
                      {/* Bike path */}
                      <img src="/images/WhatsApp Image 2025-11-15 at 10.37.56 (2).jpeg" alt="Bike path" className="w-full h-full object-cover" />
                   </div>
                   <div className="flex-1 rounded-[32px] overflow-hidden shadow-lg min-h-[200px]">
                      {/* Close up lines */}
                      <img src="/images/WhatsApp Image 2025-11-15 at 10.37.59 (1).jpeg" alt="Marking detail" className="w-full h-full object-cover" />
                   </div>
                   <div className="flex-1 rounded-[32px] overflow-hidden shadow-lg min-h-[200px]">
                      {/* Parking lot */}
                      <img src="/images/WhatsApp Image 2025-11-15 at 10.38.01.jpeg" alt="Parking lot" className="w-full h-full object-cover" />
                   </div>
               </div>
            </div>
         </div>
      </section>

      {/* Feature Section - Photo with overlapping cards */}
      <section className="relative bg-white">
         {/* Фото парковки - верхняя часть */}
         {/* НАСТРОЙКА ВЫСОТЫ ФОТО: измените значение h-[500px] на нужное (например h-[400px], h-[600px]) */}
         <div className="relative w-full h-[500px] overflow-hidden">
            <img 
               src="/images/WhatsApp Image 2025-11-15 at 10.38.05 (2).jpeg" 
               alt="Parking lot marking"
               className="w-full h-full object-cover"
            />
            {/* Градиент снизу для плавного перехода */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
         </div>
         
         {/* Контейнер с карточками - "торчат" наполовину поверх фото */}
         <div className="relative w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 -mt-20 sm:-mt-24 md:-mt-28 lg:-mt-32 pb-8 sm:pb-12 md:pb-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 max-w-6xl mx-auto">
               
               {/* Карточка 1 - Профессиональное выполнение */}
               <div className="bg-white p-5 sm:p-6 rounded-[20px] sm:rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)] transition-all duration-300 flex flex-col">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4 shadow-md">
                     <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-slate-900 leading-tight">Профессиональное выполнение</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                     Наши специалисты проходят строгую подготовку и обладают реальным опытом, что гарантирует аккуратность каждой разметки.
                  </p>
               </div>

               {/* Карточка 2 - Быстро и надёжно */}
               <div className="bg-white p-5 sm:p-6 rounded-[20px] sm:rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)] transition-all duration-300 flex flex-col">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4 shadow-md">
                     <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-slate-900 leading-tight">Быстро и надёжно</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                     Оперативно выезжаем и выполняем работы по дорожной разметке без задержек.
                  </p>
               </div>

               {/* Карточка 3 - Прозрачные цены */}
               <div className="bg-white p-5 sm:p-6 rounded-[20px] sm:rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)] transition-all duration-300 flex flex-col">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4 shadow-md">
                     <span className="text-lg sm:text-xl font-bold text-black">₽</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-slate-900 leading-tight">Прозрачные цены</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                     Без скрытых платежей и лишних расходов. Мы всегда открыто обсуждаем стоимость и детали заказа.
                  </p>
               </div>

            </div>
         </div>
      </section>

      {/* Reviews (Reused) */}
      <section className="py-24 bg-[#1a1c20] text-white">
        <div className="container mx-auto px-4 md:px-8">
           <ReviewCarousel reviews={REVIEWS} />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact Section */}
      <section className="py-32 bg-[#0a0a0a] relative overflow-hidden text-white">
         <div className="absolute inset-0 opacity-20 pointer-events-none">
            <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0,100 C30,80 70,80 100,0" fill="none" stroke="white" strokeWidth="0.1" strokeDasharray="1 1" />
            </svg>
         </div>

         <div className="container mx-auto px-4 md:px-8 relative z-10 flex justify-end">
            <div className="bg-white rounded-[32px] p-12 md:p-16 max-w-lg w-full text-center shadow-2xl text-slate-900">
               <h2 className="text-3xl md:text-4xl font-bold mb-8">Закажите услугу</h2>
               <div className="w-full h-40 bg-slate-100 rounded-2xl mb-8 flex items-center justify-center text-slate-400 text-sm">
                  Форма заявки
               </div>
               <button className="w-full bg-[#0a0a0a] text-white font-bold py-4 rounded-xl uppercase tracking-wider hover:bg-slate-900 transition-colors">
                  Обсудить проект
               </button>
            </div>
         </div>
      </section>

    </div>
  );
};

export default AboutPage;