import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { FAQ_ITEMS } from '../constants';
import { SectionId } from '../types';

interface FAQSectionProps {
  showSectionId?: boolean; // Добавлять ли id для навигации (только на главной)
}

const FAQSection: React.FC<FAQSectionProps> = ({ showSectionId = false }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <section 
      id={showSectionId ? SectionId.FAQ : undefined} 
      className="py-24 bg-white"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-5/12">
            <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Вопросы</div>
            <h2 className="text-3xl md:text-5xl font-medium mb-6 text-slate-900">Часто задаваемые вопросы</h2>
            <p className="text-slate-500 text-sm mb-8">
              Остались вопросы? — Свяжитесь с нами!<br/>
              Не нашли нужной информации? — Получите консультацию прямо сейчас!
            </p>
            <button className="flex items-center gap-2 text-xs font-bold uppercase hover:text-yellow-500 transition-colors text-slate-900">
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
                    <span className="text-lg font-medium pr-8 group-hover:text-yellow-500 transition-colors text-slate-900">{item.question}</span>
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
  );
};

export default FAQSection;
