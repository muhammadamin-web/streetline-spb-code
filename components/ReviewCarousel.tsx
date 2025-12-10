import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { ReviewItem } from '../types';

interface ReviewCarouselProps {
  reviews: ReviewItem[];
}

const ReviewCarousel: React.FC<ReviewCarouselProps> = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(1);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const handleResize = () => {
      // Show 2 items on tablet/desktop (md breakpoint is 768px), 1 on mobile
      if (window.innerWidth >= 768) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(1);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(reviews.length / itemsPerSlide);

  useEffect(() => {
     if (currentIndex >= totalSlides) {
        setCurrentIndex(Math.max(0, totalSlides - 1));
     }
  }, [itemsPerSlide, totalSlides, currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };
  
  const handleTouchStart = (e: React.TouchEvent) => {
      touchStartX.current = e.targetTouches[0].clientX;
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
      touchEndX.current = e.targetTouches[0].clientX;
  };
  
  const handleTouchEnd = () => {
      const diff = touchStartX.current - touchEndX.current;
      // Threshold for swipe
      if (Math.abs(diff) > 50) {
          if (diff > 0) {
              nextSlide();
          } else {
              prevSlide();
          }
      }
      // Reset
      touchStartX.current = 0;
      touchEndX.current = 0;
  };

  return (
    <div className="relative max-w-6xl mx-auto px-4 sm:px-0">
       {/* Container without border */}
       <div className="rounded-3xl p-6 md:p-12 relative bg-transparent">
          
          <div 
             className="overflow-hidden"
             onTouchStart={handleTouchStart}
             onTouchMove={handleTouchMove}
             onTouchEnd={handleTouchEnd}
          >
             <div 
               className="flex transition-transform duration-500 ease-in-out"
               style={{ transform: `translateX(-${currentIndex * 100}%)` }}
             >
               {Array.from({ length: totalSlides }).map((_, slideIndex) => {
                  const slideItems = reviews.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide);
                  
                  return (
                    <div key={slideIndex} className="min-w-full flex gap-6 box-border">
                        {slideItems.map((review) => (
                           <div key={review.id} className={`flex-1 bg-white text-slate-900 p-8 rounded-3xl shadow-lg flex flex-col ${itemsPerSlide === 1 ? 'w-full' : 'w-1/2'}`}>
                                <div className="mb-6 text-center">
                                   <h4 className="font-bold text-xl text-[#0f1012]">{review.author}</h4>
                                </div>
                                
                                <p className="text-sm font-medium mb-8 leading-relaxed text-slate-700 flex-grow">
                                   {review.text}
                                </p>
                                
                                <div className="flex justify-start gap-1 text-yellow-400">
                                   {[...Array(review.rating)].map((_, i) => (
                                     <Star key={i} className="w-5 h-5 fill-current" />
                                   ))}
                                </div>
                           </div>
                        ))}
                        {/* Add empty div if last slide has fewer items to maintain structure in flex */}
                        {slideItems.length < itemsPerSlide && (
                             <div className="flex-1 invisible p-8" aria-hidden="true"></div>
                        )}
                    </div>
                  );
               })}
             </div>
          </div>
          
          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 gap-3">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'bg-white scale-125' : 'bg-slate-600 hover:bg-slate-500'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

       </div>
       
       {/* Navigation Arrows (Outside container for desktop) */}
       <button 
          onClick={prevSlide}
          className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 text-white/30 hover:text-white transition-colors hidden md:block"
          aria-label="Previous slide"
       >
          <ChevronLeft className="w-12 h-12" />
       </button>
       <button 
          onClick={nextSlide}
          className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 text-white/30 hover:text-white transition-colors hidden md:block"
          aria-label="Next slide"
       >
          <ChevronRight className="w-12 h-12" />
       </button>
    </div>
  );
};

export default ReviewCarousel;