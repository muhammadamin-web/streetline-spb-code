import React from 'react';
import { Briefcase, Clock, ArrowRight } from 'lucide-react';
import { REVIEWS, FAQ_ITEMS } from '../constants';
import ReviewCarousel from './ReviewCarousel';

const AboutPage: React.FC = () => {
  const [activeFaq, setActiveFaq] = React.useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

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

      {/* Feature Section - Three Cards on Parking Background - Полная ширина 100% */}
      <section className="relative w-screen h-[500px] sm:h-[600px] md:h-[650px] lg:h-[700px] xl:h-[750px] bg-cover bg-center bg-no-repeat flex items-end -mx-4 sm:mx-0" 
               style={{
                  backgroundImage: 'url("/images/WhatsApp Image 2025-11-15 at 10.38.02.jpeg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center bottom',
                  backgroundRepeat: 'no-repeat'
               }}>
         
         {/* Градиент для лучшей читаемости на мобильных */}
         <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent sm:bg-gradient-to-t sm:from-black/20"></div>
         
         <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-8 sm:pb-12 md:pb-16 lg:pb-20 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-none">
               
               {/* Карточка 1 - Профессиональное выполнение */}
               <div className="bg-white/95 backdrop-blur-sm p-4 sm:p-6 rounded-[16px] sm:rounded-[20px] shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-yellow-400 rounded-full flex items-center justify-center mb-3 sm:mb-5">
                     <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 text-black" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 text-black">Профессиональное выполнение</h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                     Наши специалисты проходят строгую подготовку и обладают реальным опытом, что гарантирует аккуратность каждой разметки.
                  </p>
               </div>

               {/* Карточка 2 - Быстро и надёжно */}
               <div className="bg-white/95 backdrop-blur-sm p-4 sm:p-6 rounded-[16px] sm:rounded-[20px] shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-yellow-400 rounded-full flex items-center justify-center mb-3 sm:mb-5">
                     <Clock className="w-6 h-6 sm:w-7 sm:h-7 text-black" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 text-black">Быстро и надёжно</h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                     Оперативно выезжаем и выполняем работы по дорожной разметке без задержек.
                  </p>
               </div>

               {/* Карточка 3 - Прозрачные цены */}
               <div className="bg-white/95 backdrop-blur-sm p-4 sm:p-6 rounded-[16px] sm:rounded-[20px] shadow-lg hover:shadow-xl transition-shadow duration-300 sm:col-span-2 lg:col-span-1">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-yellow-400 rounded-full flex items-center justify-center mb-3 sm:mb-5">
                     <span className="text-lg sm:text-xl font-bold text-black">₽</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 text-black">Прозрачные цены</h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
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
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
           <div className="flex flex-col lg:flex-row gap-16">
              <div className="lg:w-5/12">
                 <h2 className="text-3xl md:text-5xl font-medium mb-6">Часто задаваемые вопросы</h2>
                 <p className="text-slate-500 text-sm mb-8">
                   Остались вопросы? — Свяжитесь с нами!
                 </p>
                 <button className="flex items-center gap-2 text-xs font-bold uppercase hover:text-yellow-500 transition-colors">
                   Свяжитесь с нами <ArrowRight className="w-4 h-4" />
                 </button>
              </div>

              <div className="lg:w-7/12">
                 <div className="divide-y divide-slate-100">
                   {FAQ_ITEMS.map((item, idx) => (
                     <div key={idx} className="py-6">
                       <button 
                         onClick={() => toggleFaq(idx)}
                         className="flex justify-between items-center w-full text-left group"
                       >
                         <span className="text-lg font-medium pr-8 group-hover:text-yellow-500 transition-colors">{item.question}</span>
                         <span className={`text-slate-400 transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`}>▼</span>
                       </button>
                       <div className={`overflow-hidden transition-all duration-300 ${activeFaq === idx ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                         <p className="text-slate-500 text-sm leading-relaxed">{item.answer}</p>
                       </div>
                     </div>
                   ))}
                 </div>
              </div>
           </div>
        </div>
      </section>

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