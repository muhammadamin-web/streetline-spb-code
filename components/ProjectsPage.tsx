import React from 'react';
import { ArrowRight } from 'lucide-react';
import CountUp from './CountUp';
import FAQSection from './FAQSection';
import ContactFormSection from './ContactFormSection';

// Data for all projects
const ALL_PROJECTS = [
  {
    id: 1,
    title: 'Комплексная разметка ЖК',
    category: 'Жилой комплекс',
    description: 'Полный комплекс работ по дорожной разметке жилого комплекса: парковочные места, пешеходные зоны, въездные группы.',
    imageUrl: '/images/projects/1.avif',
  },
  {
    id: 2,
    title: 'Велодорожки и пешеходные зоны',
    category: 'Городская инфраструктура',
    description: 'Разметка велодорожек и пешеходных зон в центральной части города с использованием холодного пластика.',
    imageUrl: '/images/projects/2.avif',
  },
  {
    id: 3,
    title: 'Складская логистика',
    category: 'Логистический центр',
    description: 'Сигнальная разметка складского комплекса площадью 15 000 м² с зонированием и маркировкой проездов.',
    imageUrl: '/images/projects/3.avif',
  },
  {
    id: 4,
    title: 'Разметка парковочных мест',
    category: 'Торговый центр',
    description: 'Организация парковочных мест для торгового центра на 300 машиномест с разметкой для инвалидов.',
    imageUrl: '/images/projects/4.avif',
  },
  {
    id: 5,
    title: 'Ночная разметка дорог',
    category: 'Дорожная инфраструктура',
    description: 'Нанесение термопластиковой разметки на загородной трассе протяженностью 12 км.',
    imageUrl: '/images/projects/5.avif',
  },
  {
    id: 6,
    title: 'Разметка автодрома',
    category: 'Спортивный объект',
    description: 'Специализированная разметка гоночного трека на автодроме "Игора Драйв" с применением термопластика.',
    imageUrl: './public/images/projects/sport.jpeg',
  },
  {
    id: 7,
    title: 'Парковка бизнес-центра',
    category: 'Бизнес-центр',
    description: 'Многоуровневая парковка с четкой навигацией и зонированием для арендаторов офисного здания.',
    imageUrl: './public/images/projects/bizness.jpeg',
  },
  {
    id: 8,
    title: 'Разметка школьной территории',
    category: 'Образовательное учреждение',
    description: 'Безопасная разметка пешеходных переходов, зон высадки детей и парковки возле школы.',
    imageUrl: './public/images/projects/obraz.jpeg',
  },
  {
    id: 9,
    title: 'Промышленная зона',
    category: 'Промышленный объект',
    description: 'Разметка территории промышленного предприятия с учетом движения грузового транспорта.',
    imageUrl: './public/images/projects/promish.jpeg',
  },
];

const ProjectsPage: React.FC = () => {
  return (
    <div className="bg-white text-slate-900 pt-10">
      
      {/* Page Header */}
      <section className="py-16 md:py-20 bg-white text-center px-4">
         <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-medium mb-6 leading-tight">
              Наши проекты
            </h1>
            <p className="text-slate-500 text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
              Мы гордимся каждым выполненным проектом. Здесь представлены примеры наших работ по дорожной разметке различных объектов в Санкт-Петербурге и Ленинградской области.
            </p>
         </div>
      </section>

      {/* Projects Gallery - Same layout as home page */}
      <section className="pb-16 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Галерея проектов</div>
            <h2 className="text-3xl md:text-4xl font-medium text-slate-900">Примеры выполненных<br/> объектов</h2>
          </div>

          <div className="flex flex-col gap-6 mb-12">
             {/* First Row - 2 Large Cards */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ALL_PROJECTS.slice(0, 2).map((project) => (
                   <div key={project.id} className="rounded-3xl overflow-hidden h-64 md:h-[400px] relative group cursor-pointer">
                     <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                     <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                        <div className="text-xs font-bold uppercase tracking-wider text-yellow-400 mb-2">{project.category}</div>
                        <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                        <p className="text-sm text-slate-200 leading-relaxed mb-4">{project.description}</p>
                     </div>
                     <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="bg-white/90 p-3 rounded-full">
                           <ArrowRight className="w-6 h-6" />
                        </div>
                     </div>
                   </div>
                ))}
             </div>
             
             {/* Second Row - 3 Medium Cards */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {ALL_PROJECTS.slice(2, 5).map((project) => (
                   <div key={project.id} className="rounded-3xl overflow-hidden h-64 md:h-[300px] relative group cursor-pointer">
                      <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                         <div className="text-xs font-bold uppercase tracking-wider text-yellow-400 mb-2">{project.category}</div>
                         <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                         <p className="text-xs text-slate-200 leading-relaxed line-clamp-2">{project.description}</p>
                      </div>
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="bg-white/90 p-3 rounded-full">
                             <ArrowRight className="w-5 h-5" />
                          </div>
                      </div>
                   </div>
                ))}
             </div>

             {/* Third Row - 4 Small Cards */}
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {ALL_PROJECTS.slice(5, 9).map((project) => (
                   <div key={project.id} className="rounded-3xl overflow-hidden h-64 relative group cursor-pointer">
                      <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                         <div className="text-xs font-bold uppercase tracking-wider text-yellow-400 mb-1">{project.category}</div>
                         <h3 className="text-base font-bold line-clamp-2">{project.title}</h3>
                      </div>
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="bg-white/90 p-3 rounded-full">
                             <ArrowRight className="w-5 h-5" />
                          </div>
                      </div>
                   </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Yellow Info Section */}
      <section className="py-24 bg-[#FFC800]">
         <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
               
               {/* Left Side: Text */}
               <div className="lg:w-1/2">
                  <h2 className="text-3xl md:text-5xl font-medium leading-tight mb-8 text-black">
                     Готовы обсудить ваш проект?
                  </h2>
                  <p className="text-black/80 text-lg mb-10 leading-relaxed">
                     Каждый проект для нас уникален. Мы разрабатываем индивидуальные решения с учетом специфики вашего объекта, требований ГОСТ и бюджета.
                  </p>
                  <ul className="space-y-4 mb-10">
                     <li className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                           <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                           </svg>
                        </div>
                        <span className="text-black font-medium">Бесплатный выезд специалиста на объект</span>
                     </li>
                     <li className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                           <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                           </svg>
                        </div>
                        <span className="text-black font-medium">Точный расчет стоимости работ</span>
                     </li>
                     <li className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                           <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                           </svg>
                        </div>
                        <span className="text-black font-medium">Гарантия качества на все виды работ</span>
                     </li>
                  </ul>
                  <button className="bg-black text-white px-8 py-4 rounded-full font-bold uppercase text-sm hover:bg-slate-900 transition-colors shadow-lg">
                     Получить консультацию
                  </button>
               </div>

               {/* Right Side: Stats */}
               <div className="lg:w-1/2 grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-3xl p-8 text-center shadow-lg">
                     <div className="text-5xl font-bold text-black mb-3"><CountUp end={500} suffix="+" /></div>
                     <div className="text-sm text-slate-600 font-medium">Выполненных проектов</div>
                  </div>
                  <div className="bg-white rounded-3xl p-8 text-center shadow-lg">
                     <div className="text-5xl font-bold text-black mb-3"><CountUp end={12} /></div>
                     <div className="text-sm text-slate-600 font-medium">Лет на рынке</div>
                  </div>
                  <div className="bg-white rounded-3xl p-8 text-center shadow-lg">
                     <div className="text-5xl font-bold text-black mb-3"><CountUp end={98} suffix="%" /></div>
                     <div className="text-sm text-slate-600 font-medium">Довольных клиентов</div>
                  </div>
                  <div className="bg-white rounded-3xl p-8 text-center shadow-lg">
                     <div className="text-5xl font-bold text-black mb-3">24/7</div>
                     <div className="text-sm text-slate-600 font-medium">Поддержка клиентов</div>
                  </div>
               </div>

            </div>
         </div>
      </section>

   <FAQSection />

   {/* Contact Section */}
   <ContactFormSection />

   </div>
  );
};

export default ProjectsPage;
