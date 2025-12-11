import React from 'react';
import { ArrowRight, Clock, ShieldCheck, Star, CheckCircle } from 'lucide-react';
import FAQSection from './FAQSection';
import ContactFormSection from './ContactFormSection';

// Данные для карточек услуг на основе скриншота
const SERVICE_CARDS = [
  {
    id: 1,
    title: 'Разметка холодным пластиком',
    description: 'Используем холодный пластик для создания износостойкой разметки на любых дорожных покрытиях с гарантией долговечности и качества.',
    image: '/images/typlvhOExHu3qEVUwC9ton1Y.avif',
  },
  {
    id: 2,
    title: 'Сигнальная разметка помещений',
    description: 'Обустроим сигнальную разметку для складов и цехов. Яркая разметка — для безопасности сотрудников и оптимизации процессов.',
    image: '/images/WhatsApp Image 2025-11-15 at 10.38.00.jpeg',
  },
  {
    id: 3,
    title: 'Разметка парковок и паркингов',
    description: 'Разметка мест и зон парковок в СПб и области по ГОСТ: современные материалы, точные линии, чёткие знаки.',
    image: '/images/WhatsApp Image 2025-11-15 at 10.38.06 (3).jpeg',
  },
  {
    id: 4,
    title: 'Разметка дорог и тротуаров',
    description: 'Профессиональная разметка дорожного полотна и пешеходных зон с использованием качественных материалов по ГОСТу.',
    image: '/images/WhatsApp Image 2025-11-15 at 10.38.05 (2).jpeg',
  }
];

// Данные для отзывов на основе скриншота
const REVIEWS_GRID = [
  {
    id: 1,
    author: 'Андрей Петров',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'Не первый раз обращаемся — делали сигнальную разметку склада, проходы и внутренние зоны. Особенно понравилось качество линий и чёткая организация работ.'
  },
  {
    id: 2,
    author: 'Роман Данилов',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    text: 'Обращались для разметки парковки и дворовых проездов. Всё выполнили аккуратно, быстро согласовали макет. После окончания работ площадка стала действительно удобнее для жителей.'
  },
  {
    id: 3,
    author: 'Ольга Артемьева',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'Делали разметку проездов, установку знаков и ограничителей скорости возле школы. Всё выполнено в оговорённые сроки, по стандартам и с фотоотчётом каждого этапа. Рекомендуем как надёжного подрядчика.'
  },
  {
    id: 4,
    author: 'Иван Сидоров',
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    text: 'Заказывали комплекс работ: нанесение дорожной разметки и монтаж лежачих полицейских во дворе новостройки. Впечатлили профессионализм и внимание к деталям — на все вопросы оперативно ответили.'
  },
  {
    id: 5,
    author: 'Юлия Трофимова',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    text: 'Нужна была разметка для офисного паркинга. Получили подробную консультацию по ГОСТ, оптимальный вариант покрытия для интенсивного движения. Работы выполнили в выходные, чтобы не мешать арендаторам.'
  },
  {
    id: 6,
    author: 'Анна Викторова',
    avatar: 'https://randomuser.me/api/portraits/women/25.jpg',
    text: 'Разметка паркинга и подъездных путей проведена чётко и без лишнего шума, материалы стойкие. Понравился подход: специалисты всегда были на связи, предоставляли промежуточные отчёты и рекомендации.'
  }
];

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-white text-slate-900 pt-10">
      
      {/* Заголовок страницы */}
      <section className="py-16 md:py-20 bg-white text-center px-4">
         <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-medium mb-6">Наши услуги</h1>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Мы предлагаем полный спектр профессиональных решений по дорожной разметке, ориентированных на объекты любой сложности — от жилых комплексов до коммерческих площадей.
            </p>
         </div>
      </section>

      {/* Сетка услуг */}
      <section className="pb-24 px-4 md:px-8">
         <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {SERVICE_CARDS.map((service) => (
                 <div key={service.id} className="bg-white border border-slate-100 rounded-[32px] p-4 flex flex-col md:flex-row gap-6 shadow-sm hover:shadow-xl transition-shadow duration-300">
                    {/* Изображение с фиксированным размером */}
                    <div className="w-full md:w-5/12 h-64 md:h-[280px] shrink-0 rounded-[24px] overflow-hidden">
                       <img src={service.image} alt={service.title} className="w-full h-full object-cover object-center" />
                    </div>
                    {/* Контент */}
                    <div className="flex flex-col justify-between py-2 pr-4">
                       <div>
                          <h3 className="text-xl font-bold mb-3 leading-tight">{service.title}</h3>
                          <p className="text-sm text-slate-500 leading-relaxed mb-4">{service.description}</p>
                       </div>
                       <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide hover:text-yellow-500 transition-colors mt-auto">
                          Подробнее <ArrowRight className="w-4 h-4" />
                       </button>
                    </div>
                 </div>
               ))}
            </div>

            {/* Кнопка "Подробнее" по центру */}
            <div className="flex justify-center mt-12">
               <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-10 py-4 rounded-full font-bold uppercase text-sm shadow-lg shadow-yellow-400/20 transition-all">
                  Подробнее
               </button>
            </div>
         </div>
      </section>

      {/* Желтая секция с преимуществами */}
      <section className="bg-[#FFC800] py-24 overflow-hidden">
         <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
               
               {/* Левая часть: Текст */}
               <div className="lg:w-5/12">
                  <h2 className="text-3xl md:text-5xl font-medium leading-tight mb-8">
                     Полный спектр услуг по дорожной разметке, которым можно доверять
                  </h2>
                  <p className="text-black/80 text-lg mb-10 leading-relaxed">
                     Наши лицензированные специалисты выполняют разметку дорог, парковок и территорий с вниманием к деталям, точностью и гарантией качества.
                  </p>
                  <button className="bg-black text-white px-8 py-4 rounded-full font-bold uppercase text-sm hover:bg-slate-900 transition-colors shadow-lg">
                     Рассчитать стоимость
                  </button>
               </div>

               {/* Правая часть: Картинка с плашками */}
               <div className="lg:w-7/12 relative">
                  <div className="rounded-[24px] lg:rounded-[40px] overflow-hidden shadow-2xl relative h-[450px] md:h-[500px] w-full">
                     <img 
                       src="/images/Frame 5.png" 
                       alt="Road works context" 
                       className="w-full h-full object-cover" 
                     />
                     <div className="absolute inset-0 bg-black/10"></div>
                  </div>

                  {/* Плавающие карточки (Overlay Cards) - слева внизу */}
                  <div className="absolute bottom-6 md:bottom-8 lg:bottom-10 left-4 md:left-6 lg:left-8 flex flex-col gap-3 md:gap-4 w-[calc(100%-2rem)] sm:w-[280px] md:w-[320px] lg:w-[380px]">
                     
                     {/* Карточка 1 */}
                     <div className="bg-white p-3 md:p-4 lg:p-5 rounded-xl md:rounded-2xl shadow-lg flex items-center gap-3 md:gap-4">
                        <div className="w-9 h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-yellow-400 rounded-full flex items-center justify-center shrink-0">
                           <Clock className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-black" />
                        </div>
                        <div>
                           <div className="font-bold text-xs md:text-sm lg:text-base">Круглосуточная</div>
                           <div className="font-bold text-xs md:text-sm lg:text-base">поддержка 24/7</div>
                        </div>
                     </div>

                     {/* Карточка 2 */}
                     <div className="bg-white p-3 md:p-4 lg:p-5 rounded-xl md:rounded-2xl shadow-lg flex items-center gap-3 md:gap-4">
                        <div className="w-9 h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-yellow-400 rounded-full flex items-center justify-center shrink-0">
                           <CheckCircle className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-black" />
                        </div>
                        <div>
                           <div className="font-bold text-xs md:text-sm lg:text-base">Быстрое и надёжное</div>
                           <div className="font-bold text-xs md:text-sm lg:text-base">выполнение работ</div>
                        </div>
                     </div>

                     {/* Карточка 3 */}
                     <div className="bg-white p-3 md:p-4 lg:p-5 rounded-xl md:rounded-2xl shadow-lg flex items-center gap-3 md:gap-4">
                        <div className="w-9 h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-yellow-400 rounded-full flex items-center justify-center shrink-0">
                           <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-black" />
                        </div>
                        <div>
                           <div className="font-bold text-xs md:text-sm lg:text-base">Опытные и проверенные</div>
                           <div className="font-bold text-xs md:text-sm lg:text-base">специалисты</div>
                        </div>
                     </div>

                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* Секция отзывов (Grid) */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
               <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Отзывы клиентов</div>
               <h2 className="text-3xl md:text-5xl font-medium text-slate-900">Истории довольных заказчиков</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {REVIEWS_GRID.map((review) => (
                  <div key={review.id} className="bg-white border border-slate-100 rounded-[32px] p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                     {/* Звезды */}
                     <div className="flex gap-1 mb-6">
                        {[1, 2, 3, 4, 5].map((star) => (
                           <Star key={star} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
                     </div>
                     
                     {/* Текст */}
                     <p className="text-sm text-slate-600 leading-relaxed mb-8 min-h-[100px]">
                        {review.text}
                     </p>

                     {/* Автор */}
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                           <img src={review.avatar} alt={review.author} className="w-full h-full object-cover" />
                        </div>
                        <div className="font-bold text-slate-900">{review.author}</div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

   <FAQSection />

   {/* CTA Section (Как на главной странице) */}
   <ContactFormSection />

   </div>
  );
};

export default ServicesPage;