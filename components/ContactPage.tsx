import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import FAQSection from './FAQSection';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-white text-slate-900 pt-10">
      
      {/* Hero Section with Contact Form */}
      <section className="py-16 md:py-20 bg-white px-4">
         <div className="container mx-auto">
            <div className="text-center max-w-4xl mx-auto mb-16">
               <h1 className="text-4xl md:text-5xl font-medium mb-6 leading-tight">
                 Свяжитесь с нами — мы всегда на связи
               </h1>
               <p className="text-slate-500 text-lg">
                 Мы готовы помочь и ответить на любые ваши вопросы или предложения.
               </p>
            </div>

            <div className="max-w-4xl mx-auto bg-slate-50 rounded-[32px] p-8 md:p-12">
               <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div>
                        <label className="text-xs font-bold text-slate-500 ml-1 mb-2 block uppercase tracking-wide">Имя</label>
                        <input 
                          type="text" 
                          placeholder="Владимир" 
                          className="w-full bg-white border border-slate-200 rounded-xl px-6 py-4 text-base focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors placeholder:text-slate-400"
                        />
                     </div>
                     <div>
                        <label className="text-xs font-bold text-slate-500 ml-1 mb-2 block uppercase tracking-wide">Фамилия</label>
                        <input 
                          type="text" 
                          placeholder="Медведев" 
                          className="w-full bg-white border border-slate-200 rounded-xl px-6 py-4 text-base focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors placeholder:text-slate-400"
                        />
                     </div>
                  </div>
                  <div>
                     <label className="text-xs font-bold text-slate-500 ml-1 mb-2 block uppercase tracking-wide">Электронный почта</label>
                     <input 
                       type="email" 
                       placeholder="razmetka.dorog.spb@mail.ru" 
                       className="w-full bg-white border border-slate-200 rounded-xl px-6 py-4 text-base focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors placeholder:text-slate-400"
                     />
                  </div>
                  <div>
                     <label className="text-xs font-bold text-slate-500 ml-1 mb-2 block uppercase tracking-wide">Комментария</label>
                     <textarea 
                       rows={4}
                       placeholder="Здравствуйте! Прошу проконсультировать по нанесению дорожной разметки на парковке. Необходимо рассчитать стоимость и сроки выполнения. Спасибо!"
                       className="w-full bg-white border border-slate-200 rounded-xl px-6 py-4 text-base focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors placeholder:text-slate-400 resize-none"
                     ></textarea>
                  </div>
                  <button 
                    className="w-full bg-black hover:bg-slate-800 text-white font-bold py-5 rounded-xl transition-all uppercase tracking-wide mt-4"
                  >
                    Отправить
                  </button>
               </form>
            </div>
         </div>
      </section>

      {/* Info Cards Section */}
      <section className="py-16 px-4">
         <div className="container mx-auto">
            <div className="text-center mb-12">
               <h2 className="text-3xl md:text-4xl font-medium">Свяжитесь с нами</h2>
               <p className="text-slate-500 mt-4">Есть вопросы или хотите обсудить проект? Мы с радостью поможем — просто свяжитесь с нами любым удобным способом.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {/* Phone Card */}
               <div className="bg-yellow-400 rounded-[32px] p-10 flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
                     <Phone className="w-6 h-6 text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Телефон</h3>
                  <a href="tel:+79933521502" className="font-medium text-lg hover:underline">+7 (993) 352-15-02</a>
                  <a href="tel:+79210158802" className="font-medium text-lg hover:underline">+7 (921) 015-88-02</a>
               </div>

               {/* Email Card */}
               <div className="bg-yellow-400 rounded-[32px] p-10 flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
                     <Mail className="w-6 h-6 text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Электронный почта</h3>
                  <p className="font-medium">razmetka.dorog.spb@mail.ru</p>
                  <p className="font-medium">razmetka.dorog.spb@mail.ru</p>
               </div>

               {/* Address Card */}
               <div className="bg-yellow-400 rounded-[32px] p-10 flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
                     <MapPin className="w-6 h-6 text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Адрес</h3>
                  <p className="font-medium max-w-[200px]">Суздальский проспект, 6а , Санкт-Петербург</p>
               </div>
            </div>
         </div>
      </section>

      {/* Map Section */}
      <section className="py-8 px-4">
         <div className="container mx-auto">
            <div className="rounded-[32px] overflow-hidden h-[400px] md:h-[500px] shadow-lg relative bg-slate-100">
               {/* Static map placeholder or iframe */}
               <img 
                 src="https://static-maps.yandex.ru/1.x/?ll=30.369680,60.038590&z=15&l=map&size=650,450&pt=30.369680,60.038590,pm2rdm" 
                 alt="Map Location" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute top-4 left-4 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg max-w-xs">
                  <div className="text-xs font-bold text-slate-500 mb-1">Наш адрес</div>
                  <div className="font-medium text-sm">Санкт-Петербург, Суздальский проспект, 6а</div>
               </div>
            </div>
         </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Bottom CTA Section */}
      <section className="py-32 bg-[#0a0a0a] relative overflow-hidden text-white">
         {/* Abstract background lines */}
         <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0,100 C30,80 70,80 100,0" fill="none" stroke="white" strokeWidth="0.1" strokeDasharray="1 1" />
               <circle cx="20" cy="80" r="15" stroke="white" strokeWidth="0.1" fill="none" />
            </svg>
         </div>

         <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16">
            
            <div className="lg:w-1/2">
               <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Мы готовы вам помочь</div>
               <h2 className="text-4xl md:text-5xl font-medium mb-12 leading-tight">
                  Обсуждение вашего проекта дорожной разметки
               </h2>
               
               <div className="flex flex-col sm:flex-row gap-8 mt-12">
                   <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-black">
                        <Phone className="w-5 h-5" />
                      </div>
                      <a href="tel:+79933521502" className="font-bold text-lg hover:text-yellow-400 transition-colors">+7 (993) 352-15-02</a>
                   </div>
                   <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-black">
                        <Phone className="w-5 h-5" />
                      </div>
                      <a href="tel:+79516589382" className="font-bold text-lg hover:text-yellow-400 transition-colors">+7 (951) 658-93-82</a>
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
                      <label className="text-xs font-bold text-slate-400 ml-1 mb-2 block uppercase tracking-wide">Электронный почта</label>
                      <input 
                        type="email" 
                        placeholder="razmetka.dorog.spb@mail.ru" 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 text-base focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors placeholder:text-slate-400"
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
                        placeholder="Здравствуйте! Прошу проконсультировать..."
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
      </section>

    </div>
  );
};

export default ContactPage;