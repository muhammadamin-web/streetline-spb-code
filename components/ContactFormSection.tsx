import React from 'react';
import { Phone } from 'lucide-react';
import { SectionId } from '../types';

interface ContactFormSectionProps {
  showSectionId?: boolean;
}

const ContactFormSection: React.FC<ContactFormSectionProps> = ({ showSectionId = false }) => {
  return (
    <section 
      id={showSectionId ? SectionId.CONTACT : undefined} 
      className="py-24 bg-[#0a0a0a] relative overflow-hidden text-white"
    >
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
  );
};

export default ContactFormSection;
