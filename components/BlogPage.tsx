import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import FAQSection from './FAQSection';
import { SectionId } from '../types';

// Data for the featured blog posts (Top Section)
const FEATURED_POSTS = [
  {
    id: 1,
    tag: 'Совет от профессионала',
    title: 'Виды и технологии дорожной разметки сравнение термопластика, холодного пластика и краски',
    description: 'Виды дорожной разметки в Санкт-Петербурге: что лучше — холодный пластик, термопластик или краска?',
    image: './public/images/news/s1.png', // Close match to asphalt texture
    isLarge: true
  },
  {
    id: 2,
    tag: 'Совет от профессионала',
    title: 'Технологии и материалы дорожной разметки',
    description: 'Погружаемся в преимущества и недостатки термопластика, холодного пластика и разметочных красок. Узнайте, какой материал выбрать для дороги, паркинга или склада — срок службы, совместимость с ГОСТ, стоимость.',
    image: './public/images/news/s3.jpg', // Yellow marking similar to EV symbol
    isLarge: false
  },
  {
    id: 3,
    tag: 'Совет от профессионала',
    title: 'Кейсы и примеры проектов',
    description: 'Показываем реальные объекты, реализованные командой Streetline: дороги, парковки, складские зоны Санкт-Петербурга и области. Фото до/после, этапы работ, особенности каждого проекта и применённые технологии.',
    image: './public/images/news/WhatsApp Image 2025-11-15 at 10.38.02.jpeg', // Bike lane
    isLarge: false
  }
];

// Data for the "Read more" section (Bottom Grid)
const MORE_ARTICLES = [
  {
    id: 1,
    tag: 'Совет от профессионала',
    title: 'Технологии и материалы дорожной разметки Copy', // Matching screenshot text "Copy"
    description: 'Погружаемся в преимущества и недостатки термопластика, холодного пластика и разметочных красок. Узнайте, какой материал выбрать для дороги, паркинга или склада — срок службы, совместимость с ГОСТ, стоимость.',
    image: './public/images/news/WhatsApp Image 2025-11-15 at 10.37.59 (1).jpeg',
  },
  {
    id: 2,
    tag: 'Совет от профессионала',
    title: 'Кейсы и примеры проектов', // Matching screenshot text "Copy"
    description: 'Показываем реальные объекты, реализованные командой Streetline: дороги, парковки, складские зоны Санкт-Петербурга и области. Фото до/после, этапы работ, особенности каждого проекта и применённые технологии.',
    image: './public/images/news/WhatsApp Image 2025-11-15 at 10.38.00.jpeg',
  },
  {
    id: 3,
    tag: 'Совет от профессионала',
    title: 'Виды и технологии дорожной разметки сравнение термопластика, холодного пластика и краски Copy', // Matching screenshot text "Copy"
    description: 'Виды дорожной разметки в Санкт-Петербурге: что лучше — холодный пластик, термопластик или краска?',
    image: './public/images/news/WhatsApp Image 2025-11-15 at 10.38.01.jpeg',
  }
];

const BlogPage: React.FC = () => {
  return (
    <div className="bg-white text-slate-900 pt-10">
      
      {/* Page Header */}
      <section className="py-16 md:py-20 bg-white text-center px-4">
         <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-medium mb-6 leading-tight">
              Блог о дорожной разметке в Санкт-Петербурге и области
            </h1>
            <p className="text-slate-500 text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
              Мы публикуем полезные материалы о стандартах ГОСТ, выборе оптимальных технологий, особенностях разметки на различных объектах и делимся практическими рекомендациями для заказчиков.
            </p>
         </div>
      </section>

      {/* Featured Articles Section */}
      <section className="pb-16 px-4 md:px-8">
         <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
               
               {/* Left Column: Large Card */}
               <div className="bg-slate-50 rounded-[32px] p-6 md:p-8 flex flex-col h-full group cursor-pointer hover:shadow-xl transition-shadow">
                  <div className="rounded-2xl overflow-hidden mb-6 h-64 md:h-80 relative">
                      <img src={FEATURED_POSTS[0].image} alt={FEATURED_POSTS[0].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="text-yellow-500 text-xs font-medium mb-3 uppercase tracking-wider">{FEATURED_POSTS[0].tag}</div>
                  <h3 className="text-xl md:text-2xl font-medium mb-4 leading-tight">{FEATURED_POSTS[0].title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">{FEATURED_POSTS[0].description}</p>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide group-hover:text-yellow-600 transition-colors">
                      Читать далее <ArrowRight className="w-4 h-4" />
                  </div>
               </div>

               {/* Right Column: Two stacked cards */}
               <div className="flex flex-col gap-6">
                  {FEATURED_POSTS.slice(1).map((post) => (
                    <div key={post.id} className="bg-slate-50 rounded-[32px] p-6 flex flex-col md:flex-row gap-6 h-full group cursor-pointer hover:shadow-xl transition-shadow">
                       {/* Image */}
                       <div className="w-full md:w-1/3 h-48 md:h-auto rounded-2xl overflow-hidden shrink-0">
                           <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                       </div>
                       {/* Content */}
                       <div className="flex flex-col py-2">
                           <div className="text-yellow-500 text-xs font-medium mb-2 uppercase tracking-wider">{post.tag}</div>
                           <h3 className="text-lg font-bold mb-3 leading-tight">{post.title}</h3>
                           <p className="text-slate-500 text-xs leading-relaxed mb-4 line-clamp-4">{post.description}</p>
                           <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide group-hover:text-yellow-600 transition-colors mt-auto">
                               Читать далее <ArrowRight className="w-4 h-4" />
                           </div>
                       </div>
                    </div>
                  ))}
               </div>

            </div>
         </div>
      </section>

      {/* "Read More" Section Header */}
      <section className="pt-12 pb-8 px-4 md:px-8">
          <div className="container mx-auto">
             <h2 className="text-3xl md:text-4xl font-medium">Читайте ещё полезные статьи</h2>
          </div>
      </section>

      {/* "Read More" Grid */}
      <section className="pb-24 px-4 md:px-8">
          <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {MORE_ARTICLES.map((article) => (
                      <div key={article.id} className="bg-slate-50 rounded-[32px] p-6 flex flex-col h-full group cursor-pointer hover:shadow-xl transition-shadow">
                          <div className="rounded-2xl overflow-hidden mb-6 h-48 relative">
                              <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                          </div>
                          <div className="text-yellow-500 text-xs font-medium mb-3 uppercase tracking-wider">{article.tag}</div>
                          <h3 className="text-lg font-bold mb-3 leading-tight">{article.title}</h3>
                          <p className="text-slate-500 text-xs leading-relaxed mb-6 flex-grow">{article.description}</p>
                          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide group-hover:text-yellow-600 transition-colors">
                              Читать далее <ArrowRight className="w-4 h-4" />
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Contact Section (Reused from Main/Services Page) */}
      <section id={SectionId.CONTACT} className="py-24 bg-[#0a0a0a] relative overflow-hidden text-white">
         <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              
              <div className="lg:w-1/2">
                <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Мы готовы вам помочь</div>
                <h2 className="text-3xl md:text-5xl font-medium mb-12 leading-tight">Обсуждение вашего проекта дорожной разметки</h2>
                
                <div className="flex flex-col sm:flex-row gap-8 mt-12">
                   <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-black">
                        <Phone className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-lg">+7 (993) 352-15-02</span>
                   </div>
                   <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-black">
                        <Phone className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-lg">+7 (951) 658-93-82</span>
                   </div>
                </div>
              </div>

              <div className="lg:w-1/2 w-full">
                <div className="bg-white rounded-[32px] p-8 md:p-12 text-slate-900 shadow-2xl">
                  <h3 className="text-2xl font-bold mb-8">Закажите услугу</h3>
                  <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Спасибо! Ваша заявка отправлена.'); }}>
                    <div>
                      <label className="text-xs font-bold text-slate-400 ml-1 mb-2 block uppercase tracking-wide">Имя</label>
                      <input 
                        type="text" 
                        placeholder="Владимир Медведев" 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 text-base focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors placeholder:text-slate-400"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-400 ml-1 mb-2 block uppercase tracking-wide">Номер телефона</label>
                      <input 
                        type="tel" 
                        placeholder="+7 (999) 999-99-99" 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 text-base focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors placeholder:text-slate-400"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-400 ml-1 mb-2 block uppercase tracking-wide">Комментарий</label>
                      <textarea 
                        rows={3}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 text-base focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors placeholder:text-slate-400"
                      ></textarea>
                    </div>
                    <button 
                      type="submit"
                      className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-lg py-5 rounded-xl transition-all shadow-lg shadow-yellow-400/20 mt-4"
                    >
                      Отправить заявку
                    </button>
                  </form>
                </div>
              </div>

            </div>
         </div>
      </section>

      <FAQSection />

    </div>
  );
};

export default BlogPage;