import { useState } from 'react';

interface LeadFormProps {
  variant?: 'dark' | 'light';
  showTitle?: boolean;
  title?: string;
}

export default function LeadForm({ 
  variant = 'dark', 
  showTitle = true, 
  title = 'Закажите услугу' 
}: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    comment: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  // TO'G'RI ANON KEY NI BU YERGA QO'YING!
  // Supabase Dashboard -> Settings -> API -> anon/public key
  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ6anhtZGV0Y29jb2hyeHVwbmFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUyOTI5NTEsImV4cCI6MjA4MDg2ODk1MX0.6tLNU_T9eVi-Ny09cNKbma1ONNEXBo_qDvmsP_fKp1w';
  const SUPABASE_URL = 'https://bzjxmdetcocohrxupnap.supabase.co';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ type: '', text: '' });

    try {
      const response = await fetch(
        `${SUPABASE_URL}/functions/v1/streetline-lead`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
            'apikey': SUPABASE_ANON_KEY,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        }
      );

      const data = await response.json();

      if (data.success) {
        setMessage({ 
          type: 'success', 
          text: 'Спасибо! Ваша заявка успешно отправлена.' 
        });
        setFormData({ name: '', phone: '', comment: '' });
      } else {
        throw new Error(data.error || 'Ошибка отправки');
      }
    } catch (error) {
      setMessage({ 
        type: 'error', 
        text: 'Произошла ошибка. Попробуйте еще раз.' 
      });
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const bgClass = variant === 'dark' ? 'bg-white' : 'bg-slate-50';
  const inputBgClass = variant === 'dark' ? 'bg-slate-50' : 'bg-white';

  return (
    <div className={`${bgClass} rounded-[32px] p-8 md:p-12 text-slate-900 shadow-2xl`}>
      {showTitle && <h3 className="text-2xl font-bold mb-8">{title}</h3>}
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="text-xs font-bold text-slate-400 ml-1 mb-2 block uppercase tracking-wide">
            Имя
          </label>
          <input 
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Владимир Медведев" 
            className={`w-full ${inputBgClass} border border-slate-200 rounded-xl px-6 py-4 text-base focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors placeholder:text-slate-400`}
            disabled={isSubmitting}
            required
          />
        </div>
        
        <div>
          <label className="text-xs font-bold text-slate-400 ml-1 mb-2 block uppercase tracking-wide">
            Номер телефона
          </label>
          <input 
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+7 (999) 999-99-99" 
            className={`w-full ${inputBgClass} border border-slate-200 rounded-xl px-6 py-4 text-base focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors placeholder:text-slate-400`}
            disabled={isSubmitting}
            required
          />
        </div>
        
        <div>
          <label className="text-xs font-bold text-slate-400 ml-1 mb-2 block uppercase tracking-wide">
            Комментарий
          </label>
          <textarea 
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            rows={3}
            className={`w-full ${inputBgClass} border border-slate-200 rounded-xl px-6 py-4 text-base focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors placeholder:text-slate-400 resize-none`}
            disabled={isSubmitting}
          />
        </div>

        {message.text && (
          <div className={`p-4 rounded-xl text-center font-medium ${
            message.type === 'success' 
              ? 'bg-green-50 text-green-700 border border-green-200' 
              : 'bg-red-50 text-red-700 border border-red-200'
          }`}>
            {message.text}
          </div>
        )}
        
        <button 
          type="submit"
          disabled={isSubmitting || !formData.name || !formData.phone}
          className="w-full bg-yellow-400 hover:bg-yellow-300 disabled:bg-slate-300 disabled:cursor-not-allowed text-black font-bold text-lg py-5 rounded-xl transition-all shadow-lg shadow-yellow-400/20 mt-4"
        >
          {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
        </button>
      </form>
    </div>
  );
}