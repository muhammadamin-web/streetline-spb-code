import React, { useState } from 'react';
import LeadForm from './LeadForm';
import { Phone, Mail, MapPin, ArrowRight, ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../constants';

const ContactPage: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

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

            <div className="max-w-4xl mx-auto">
               <LeadForm variant="light" title="Оставьте заявку" />
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
                  <p className="font-medium text-lg">+7 (993) 352-15-02</p>
                  <p className="font-medium text-lg">+7 (921) 015-88-02</p>
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
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
           <div className="flex flex-col lg:flex-row gap-16">
              <div className="lg:w-5/12">
                 <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Вопросы</div>
                 <h2 className="text-3xl md:text-5xl font-medium mb-6">Часто задаваемые вопросы</h2>
                 <p className="text-slate-500 text-sm mb-8">
                   Остались вопросы? — Свяжитесь с нами!<br/>
                   Не нашли нужной информации? — Получите консультацию прямо сейчас!
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
                         <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`} />
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
                <LeadForm />
            </div>

         </div>
      </section>

    </div>
  );
};

export default ContactPage;