import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone, Mail, Clock, ShieldCheck, Ruler, ChevronDown, ArrowUpRight } from 'lucide-react';
import { NAV_ITEMS, SERVICES, PROJECTS, REVIEWS } from './constants';
import { SectionId } from './types';
import AIChatBot from './components/AIChatBot';
import CountUp from './components/CountUp';
import ReviewCarousel from './components/ReviewCarousel';
import FAQSection from './components/FAQSection';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import BlogPage from './components/BlogPage';
import ContactPage from './components/ContactPage';
import ProjectsPage from './components/ProjectsPage';
// Define possible view states for pages
type ViewState = 'home' | 'about' | 'services' | 'blog' | 'contact' | 'projects';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState<ViewState>('home');

  // Handle navigation clicks
  const handleNavClick = (item: { label: string; href: string }) => {
    setIsMobileMenuOpen(false);
    
    // Navigate to "About Us" page
    if (item.label === 'О нас') {
      setCurrentView('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Navigate to "Services" page
    if (item.label === 'Услуги') {
      setCurrentView('services');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Navigate to "Blog" page
    if (item.label === 'Блог') {
      setCurrentView('blog');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Navigate to "Contact" page
    if (item.label === 'Контакты') {
      setCurrentView('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Navigate to "Projects" page
    if (item.label === 'Наши работы') {
      setCurrentView('projects');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // For other links, go to Home and scroll to section
    if (currentView !== 'home') {
      setCurrentView('home');
      // Wait for home render before scrolling
      setTimeout(() => {
        scrollToSection(item.href);
      }, 100);
    } else {
      scrollToSection(item.href);
    }
  };

  const scrollToSection = (id: string) => {
    // If id is just '#', scroll to top
    if (id === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Home Content Component
  const HomeContent = () => (
    <>
      {/* Hero Section */}
      <section id={SectionId.HERO} className="relative bg-[#0f1012] text-white min-h-screen flex items-center overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          {/* USER: REPLACE THE SRC ATTRIBUTE BELOW TO CHANGE BACKGROUND PHOTO */}
          <img 
            src="public/images/bg_image.png" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
          {/* Dark overlay to ensure text readability over the image */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Abstract lines */}
        <div className="absolute top-0 right-0 w-full h-full border-l border-white/5 pointer-events-none md:w-1/2"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 py-20">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
             <div className="max-w-4xl lg:w-2/3">
                <h1 className="text-4xl md:text-6xl font-medium leading-tight mb-6">
                  <span className="text-yellow-400">Профессиональная</span> дорожная разметка в <br/>
                  Санкт-Петербурге и области
                </h1>
                <p className="text-slate-200 text-lg md:text-xl max-w-2xl mb-10 font-light">
                  Дорожная разметка, нанесение разметки ГОСТ — дороги, парковки, склады, временные схемы. Гарантия, расчет бесплатно, выезд в день заявки.
                </p>
                <button 
                  onClick={() => scrollToSection(`#${SectionId.CONTACT}`)}
                  className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-full font-bold uppercase tracking-wide transition-all transform hover:-translate-y-1 shadow-lg shadow-yellow-400/20"
                >
                  Заказать консультацию
                </button>
             </div>
          </div>
        </div>
      </section>

      {/* Advantages Strip */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center flex-shrink-0 text-yellow-600">
                 <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Качество и надежность</h3>
                <p className="text-sm text-slate-500 leading-relaxed">Все работы по ГОСТ. Используем материалы с повышенной стойкостью и современное оборудование Graco LineLazer.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center flex-shrink-0 text-yellow-600">
                 <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Быстрая реализация</h3>
                <p className="text-sm text-slate-500 leading-relaxed">Собственная техника и опытная команда позволяют значительно сократить сроки исполнения заказа.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center flex-shrink-0 text-yellow-600">
                 <Ruler className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Гарантия и прозрачность</h3>
                <p className="text-sm text-slate-500 leading-relaxed">Официальная гарантия, фиксированная стоимость и подробное согласование всех этапов работ.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section (Brief) */}
      <section id={SectionId.ABOUT} className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            <div className="lg:w-1/2">
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">О нас</div>
              <h2 className="text-3xl md:text-5xl font-medium mb-8 leading-tight">Профессионалы дорожной разметки Санкт-Петербурга</h2>
              
              <div className="text-slate-600 space-y-4 leading-relaxed text-sm md:text-base">
                <p>
                  Компания «СтритЛайн» реализует проекты дорожной разметки любого типа: дороги, склады, паркинги, объекты инфраструктуры.
                </p>
                <p>
                  В работе используем современные материалы и профессиональное оборудование, соблюдаем требования ГОСТ и отраслевые стандарты.
                </p>
                <p>
                  Опыт команды подтверждён выполнением проектов на СКА Арена, автодроме «Игора Драйв», Лахта-центре и других крупных объектах.
                </p>
              </div>
              
              <button 
                onClick={() => {
                   setCurrentView('about');
                   window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="mt-8 bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-3 rounded-full text-sm font-bold uppercase transition-colors"
              >
                Подробнее о нас
              </button>
            </div>

            <div className="lg:w-1/2 relative">
               <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                 <img src="public/images/home_about.jpeg" alt="Road works" className="w-full h-full object-cover" />
                 
                 <div className="absolute bottom-8 left-8 bg-[#1a1c20] text-white p-8 rounded-3xl max-w-[240px] hidden lg:block shadow-2xl border border-slate-800">
                    <div className="text-4xl font-bold mb-2">
                      <CountUp end={500} suffix="+" />
                    </div>
                    <div className="text-xs text-slate-400 leading-snug">успешно реализованных объектов</div>
                 </div>
               </div>
            </div>

          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 border-t border-slate-100 pt-10">
            <div>
              <div className="text-4xl font-bold mb-1">
                 <CountUp end={95} suffix="%" />
              </div>
              <div className="text-xs text-slate-500 font-medium">Выполнение работ с первого раза</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">
                <CountUp end={232} suffix="+" />
              </div>
              <div className="text-xs text-slate-500 font-medium">Реализованных объектов</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">
                <CountUp end={24} suffix="/7" />
              </div>
              <div className="text-xs text-slate-500 font-medium">Поддержка и консультации</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">
                 <CountUp end={100} suffix="%" />
              </div>
              <div className="text-xs text-slate-500 font-medium">Довольных клиентов</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section (Yellow) */}
      <section id={SectionId.SERVICES} className="py-24 bg-[#FFC800]">
        <div className="container mx-auto px-4 md:px-8">
           <div className="flex justify-between items-end mb-12">
             <div>
               <div className="text-xs font-bold uppercase tracking-widest text-black/60 mb-3">Наши услуги</div>
               <h2 className="text-3xl md:text-5xl font-medium text-black max-w-xl leading-tight">Наши услуги по дорожной разметке</h2>
             </div>
             <button 
                onClick={() => {
                   setCurrentView('services');
                   window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hidden md:block bg-[#1a1c20] text-white px-6 py-3 rounded-full text-xs font-bold uppercase hover:bg-black transition-colors"
             >
               Подробнее об услугах
             </button>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {SERVICES.map((service) => (
               <div key={service.id} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group flex flex-col md:flex-row h-full md:h-64">
                 <div className="md:w-5/12 h-48 md:h-full overflow-hidden">
                   <img 
                      src={service.imageUrl} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                   />
                 </div>
                 <div className="p-6 md:p-8 flex flex-col justify-between md:w-7/12">
                   <div>
                     <h3 className="text-xl font-bold mb-3 leading-tight">{service.title}</h3>
                     <p className="text-slate-500 text-xs leading-relaxed mb-4">{service.description}</p>
                   </div>
                   <div 
                     onClick={() => {
                        setCurrentView('services');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                     }}
                     className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide cursor-pointer group-hover:text-yellow-600 transition-colors"
                   >
                     {service.linkText} <ArrowRight className="w-4 h-4" />
                   </div>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section id={SectionId.PROJECTS} className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Галерея проектов</div>
            <h2 className="text-3xl md:text-4xl font-medium text-slate-900">Примеры выполненных<br/> объектов</h2>
          </div>

          <div className="flex flex-col gap-6 mb-12">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {PROJECTS.slice(0, 2).map((project) => (
                   <div key={project.id} className="rounded-3xl overflow-hidden h-64 md:h-[400px] relative group cursor-pointer">
                     <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                     <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="bg-white/90 p-3 rounded-full">
                           <ArrowRight className="w-6 h-6" />
                        </div>
                     </div>
                   </div>
                ))}
             </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {PROJECTS.slice(2, 5).map((project) => (
                   <div key={project.id} className="rounded-3xl overflow-hidden h-64 md:h-[300px] relative group cursor-pointer">
                      <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="bg-white/90 p-3 rounded-full">
                             <ArrowRight className="w-5 h-5" />
                          </div>
                      </div>
                   </div>
                ))}
             </div>
          </div>

          <button 
              onClick={() => {
                setCurrentView('projects');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-3 rounded-full text-sm font-bold uppercase transition-colors shadow-lg shadow-yellow-400/20"
            >
               Подробнее о проектах
            </button>
        </div>
      </section>

      {/* Reviews Section (Dark) with Carousel */}
      <section id={SectionId.REVIEWS} className="py-24 bg-[#1a1c20] text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Отзывы наших клиентов</div>
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-12">Нас рекомендуют сотни довольных заказчиков</h2>
            <ReviewCarousel reviews={REVIEWS} />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-4 md:px-8">
           <div className="flex flex-col lg:flex-row gap-16 items-center">
             <div className="lg:w-1/2 w-full relative h-[400px] md:h-[500px]">
                 <div className="absolute top-0 left-0 w-[75%] h-[80%] rounded-3xl overflow-hidden shadow-lg z-10">
                    <img src="public/images/about2.avif" className="w-full h-full object-cover" alt="Industrial marking" />
                 </div>
                 <div className="absolute bottom-0 right-0 w-[60%] h-[60%] rounded-3xl overflow-hidden shadow-2xl z-20 border-[8px] border-white">
                    <img src="public/images/about1.png" className="w-full h-full object-cover" alt="Road marking detail" />
                 </div>
             </div>
             
             <div className="lg:w-1/2 w-full">
                <div className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-4">Почему выбрали именно Нас</div>
                <h2 className="text-3xl md:text-5xl font-medium mb-8 leading-tight text-slate-900">Почему выбирают <br/>“СтритЛайн”</h2>
                
                <p className="text-slate-500 mb-8 leading-relaxed text-base">
                  Компания “СтритЛайн” — профессиональный подрядчик по дорожной разметке в Санкт-Петербурге и Ленинградской области. 
                  Выполняем проекты различной сложности на дорогах, парковках, складах, обеспечиваем безопасность и чёткость движения. 
                  Используем современные материалы и оборудование, строго следуем нормативам ГОСТ. В портфолио реализованные работы на крупнейших городских и коммерческих объектах.
                </p>

                <div className="space-y-8">
                  <div className="flex gap-5">
                    <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-1">
                      <ShieldCheck className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2">Квалифицированные специалисты</h4>
                      <p className="text-slate-500">Только сертифицированная команда с опытом более 7 лет.</p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-1">
                      <Clock className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2">Оперативный выезд</h4>
                      <p className="text-slate-500">Выполняем работы в кратчайшие сроки.</p>
                    </div>
                  </div>
                </div>
             </div>
           </div>
         </div>
      </section>

      {/* Steps / Process (Yellow Cards on Dark) */}
      <section className="bg-[#1a1c20] py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
           <div className="flex flex-col lg:flex-row justify-between gap-16">
              
              {/* Left Side: Text */}
              <div className="lg:w-5/12 pt-10">
                 <div className="text-sm font-medium text-slate-400 mb-4">Рабочий процесс</div>
                 <h2 className="text-4xl md:text-5xl font-medium text-white leading-tight">
                    3 простых, понятных <br className="hidden md:block"/> шагов.
                 </h2>
              </div>

              {/* Right Side: Cards */}
              <div className="lg:w-7/12 flex flex-col gap-6">
                 {/* Card 01 */}
                 <div className="bg-yellow-400 rounded-3xl p-8 md:p-10 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                    <div className="absolute inset-0 opacity-10" 
                         style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                    </div>
                    <div className="relative z-10">
                        <div className="text-6xl font-bold text-white mb-6 opacity-80">01</div>
                        <h3 className="text-xl font-bold text-black mb-2">Шаг первый</h3>
                        <p className="text-black/80 leading-relaxed">Оставляете заявку на сайте или по телефону</p>
                    </div>
                 </div>

                 {/* Card 02 */}
                 <div className="bg-yellow-400 rounded-3xl p-8 md:p-10 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                    <div className="absolute inset-0 opacity-10" 
                         style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                    </div>
                    <div className="relative z-10">
                        <div className="text-6xl font-bold text-white mb-6 opacity-80">02</div>
                        <h3 className="text-xl font-bold text-black mb-2">Мы свяжемся</h3>
                        <p className="text-black/80 leading-relaxed">Наш специалист выезжает для оценки и согласования объема работ</p>
                    </div>
                 </div>

                 {/* Card 03 */}
                 <div className="bg-yellow-400 rounded-3xl p-8 md:p-10 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                    <div className="absolute inset-0 opacity-10" 
                         style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                    </div>
                    <div className="relative z-10">
                        <div className="text-6xl font-bold text-white mb-6 opacity-80">03</div>
                        <h3 className="text-xl font-bold text-black mb-2">Выполнение работ</h3>
                        <p className="text-black/80 leading-relaxed">Мы выполняем разметку, сдаём объект в срок, выдаём гарантию</p>
                    </div>
                 </div>
              </div>

           </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection showSectionId={true} />

      {/* Contact / CTA Section */}
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
    </>
  );

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      
      {/* HEADER SECTION */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white">
         
         {/* Top Info Bar (Black background) */}
         <div className="hidden md:flex justify-center items-center gap-8 py-3 text-sm font-medium bg-black relative z-50">
             <span className="text-white">Нужна срочная дорожная разметка?</span>
             <div className="flex items-center gap-2 text-yellow-400">
                 <Phone className="w-4 h-4 text-white" />
                 <span>+79933521502</span>
             </div>
             <div className="flex items-center gap-2 text-yellow-400">
                 <Mail className="w-4 h-4 text-white" />
                 <span>razmetka.dorog.spb@mail.ru</span>
             </div>
         </div>

         {/* Main Navbar (Black background) */}
         <div className="bg-black border-t border-white/10">
             <div className="container mx-auto px-4 md:px-8">
                <div className="flex items-center justify-between h-24">
                   
                   {/* Logo */}
                   <div 
                     onClick={() => { setCurrentView('home'); window.scrollTo({top: 0, behavior: 'smooth'}); }}
                     className="flex flex-col items-center cursor-pointer group"
                   >
                        <div className="w-[67px] h-[71px] relative mb-1">
                          <img src="public/images/logo.svg" alt="Streetline Logo" className="w-full h-full object-contain" />
                        </div>
                   </div>

                   {/* Nav Links (Desktop) */}
                   <nav className="hidden md:flex items-center gap-8">
                      {NAV_ITEMS.map((item) => (
                        <button
                          key={item.label}
                          onClick={() => handleNavClick(item)}
                          className="text-sm font-medium text-white hover:text-yellow-400 transition-colors"
                        >
                          {item.label}
                        </button>
                      ))}
                   </nav>

                   {/* Right Side: Phone + Button (Desktop) */}
                   <div className="hidden md:flex items-center gap-6">
                      <span className="text-white font-medium text-sm">+7 (993) 352-15-02</span>
                      <button 
                         onClick={() => {
                             setCurrentView('contact');
                             window.scrollTo({ top: 0, behavior: 'smooth' });
                         }}
                         className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3 rounded-2xl font-bold text-sm transition-all"
                      >
                         Заказать консультацию
                      </button>
                   </div>

                   {/* Mobile Menu Toggle */}
                   <button 
                     className="md:hidden text-white p-2"
                     onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                   >
                     {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                   </button>
                </div>
             </div>
         </div>

         {/* Mobile Menu Dropdown */}
         {isMobileMenuOpen && (
           <div className="md:hidden bg-black border-t border-white/10 absolute top-full left-0 w-full p-6 flex flex-col gap-6 shadow-2xl h-screen overflow-y-auto">
              {NAV_ITEMS.map((item) => (
                 <button
                   key={item.label}
                   onClick={() => handleNavClick(item)}
                   className="text-left text-xl font-medium text-slate-300 hover:text-white"
                 >
                   {item.label}
                 </button>
               ))}
               <div className="flex flex-col gap-4 mt-4 border-t border-white/10 pt-6">
                  <div className="flex items-center gap-3 text-yellow-400 font-bold text-lg">
                     <Phone className="w-5 h-5" />
                     <span>+7 (993) 352-15-02</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-400 text-sm">
                     <Clock className="w-5 h-5" />
                     <span>Круглосуточно</span>
                  </div>
                  <button 
                      onClick={() => {
                        setCurrentView('contact');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        setIsMobileMenuOpen(false);
                      }}
                      className="bg-yellow-400 text-black w-full py-4 rounded-xl font-bold mt-4"
                  >
                      Заказать консультацию
                  </button>
               </div>
           </div>
         )}
      </header>

      {/* Main Content - Adjusted padding top for fixed header */}
      <main className="pt-24">
         {currentView === 'home' && <HomeContent />}
         {currentView === 'about' && <AboutPage />}
         {currentView === 'services' && <ServicesPage />}
         {currentView === 'blog' && <BlogPage />}
         {currentView === 'contact' && <ContactPage />}
          {currentView === 'projects' && <ProjectsPage />}
      </main>

      <footer className="bg-black text-white py-20 border-t border-white/10">
        <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col lg:flex-row relative">

                {/* Left Column */}
                <div className="lg:w-1/2 lg:pr-20 pb-12 lg:pb-0 relative z-10">
                    <div className="mb-12">
                        {/* Logo Approximation */}
                         <div className="w-[67px] h-[71px] relative mb-1">
                          <img src="public/images/logo.svg" alt="Streetline Logo" className="w-full h-full object-contain" />
                        </div>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-medium mb-6 leading-tight">
                        Streetline —<br />
                        профессиональная<br />
                        дорожная разметка в Санкт-<br />
                        Петербурге и области
                    </h2>
                    <p className="text-slate-500 text-sm max-w-sm leading-relaxed">
                        Все виды работ по дорогам, парковкам, складам и объектам инфраструктуры.
                    </p>

                    {/* Divider Line (Desktop) */}
                     <div className="hidden lg:block absolute top-0 right-0 w-px h-full bg-white/10"></div>
                </div>

                 {/* Right Column */}
                <div className="lg:w-1/2 lg:pl-20 pt-12 lg:pt-0 flex flex-col justify-between">
                    <div>
                         <h3 className="text-xl font-bold mb-6 text-white">Streetline — дорожная разметка в Санкт-Петербурге и области</h3>
                         <p className="text-slate-500 text-sm max-w-md mb-10 leading-relaxed">
                            Профессиональные услуги: дороги, парковки, склады, временные схемы и монтаж знаков.
                         </p>
                         
                         <button 
                           onClick={() => {
                              setCurrentView('contact');
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                           }}
                           className="bg-white text-black pl-8 pr-2 py-2 rounded-full font-bold text-xs md:text-sm uppercase tracking-wider flex items-center gap-4 hover:bg-slate-200 transition-all group w-max"
                         >
                            Свяжитесь с нами
                            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform text-black">
                               <ArrowUpRight className="w-5 h-5" />
                            </div>
                         </button>
                    </div>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                <nav className="flex flex-wrap justify-center gap-8">
                    {['Главный', 'О нас', 'Услуги', 'Наши работы', 'Блог', 'Контакты'].map((item) => (
                        <button 
                            key={item}
                            onClick={() => {
                                const navItem = NAV_ITEMS.find(n => n.label === (item === 'Главный' ? 'Главная' : item)) || { href: '#' };
                                handleNavClick({ label: item === 'Главный' ? 'Главная' : item, href: navItem.href });
                            }} 
                            className="text-sm text-slate-400 hover:text-white transition-colors"
                        >
                            {item}
                        </button>
                    ))}
                </nav>
                <div className="text-slate-500 text-xs">
                    © 2025 Streetline. Все права защищены.
                </div>
            </div>
        </div>
      </footer>

      <AIChatBot />
    </div>
  );
}