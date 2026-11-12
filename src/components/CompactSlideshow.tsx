import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PRODUCTS, ProductItem } from '../data/products';
import { ChevronRight, ChevronLeft, Pause, Play, Sparkles, Send } from 'lucide-react';
import { ProductImage } from './ProductImage';

interface CompactSlideshowProps {
  onSelectProduct?: (product: ProductItem) => void;
  onOpenQuote?: (stoneName: string) => void;
}

export const CompactSlideshow: React.FC<CompactSlideshowProps> = ({
  onSelectProduct,
  onOpenQuote,
}) => {
  const { language, direction } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Selected highlighted items for compact showcase
  const highlightItems = PRODUCTS.slice(0, 8); // Top 8 featured works

  const currentItem = highlightItems[currentIndex] || highlightItems[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % highlightItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + highlightItems.length) % highlightItems.length);
  };

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        handleNext();
      }, 3800);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, currentIndex]);

  const ArrowPrev = direction === 'rtl' ? ChevronRight : ChevronLeft;
  const ArrowNext = direction === 'rtl' ? ChevronLeft : ChevronRight;

  return (
    <div 
      className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#181917] via-[#121311] to-[#0D0E0C] border border-[#C5A059]/30 text-white shadow-xl shadow-black/20"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Golden top hairline accent */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#C5A059] to-transparent opacity-80" />

      {/* Compact Header Bar */}
      <div className="px-4 py-2.5 flex items-center justify-between border-b border-white/[0.08] bg-black/30">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#D5C6AC]">
            {language === 'ar' ? 'معرض نماذج الخامات الحية' : 'Featured Material Showcase'}
          </span>
        </div>

        {/* Counter & Autoplay toggle */}
        <div className="flex items-center gap-2 text-[11px] text-[#A69C8A]">
          <span className="font-mono text-[#E5D7BE]">
            0{currentIndex + 1} / 0{highlightItems.length}
          </span>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
            className="p-1 hover:text-[#C5A059] transition-colors"
          >
            {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
          </button>
        </div>
      </div>

      {/* Main Showcase Body */}
      <div className="p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
        {/* Compact Square Image Container */}
        <div className="relative w-full sm:w-44 h-44 sm:h-44 shrink-0 rounded-xl overflow-hidden bg-[#242522] border border-[#C5A059]/25 shadow-inner group">
          <ProductImage
            src={currentItem.image}
            alt={currentItem.name[language]}
            objectFit="cover"
            fallbackName={currentItem.name[language]}
            fallbackNumber={currentItem.id}
            className="w-full h-full transition-transform duration-500 group-hover:scale-105"
          />

          {/* Code badge */}
          <div className="absolute top-2 start-2 bg-black/80 backdrop-blur-xs text-[#E5C07B] text-[10px] font-mono font-bold px-2 py-0.5 rounded border border-[#C5A059]/30">
            #{currentItem.id < 10 ? `0${currentItem.id}` : currentItem.id}
          </div>

          {currentItem.translucent && (
            <div className="absolute bottom-2 start-2 bg-[#8C6D2E]/90 text-white text-[9px] font-semibold px-1.5 py-0.5 rounded flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5" />
              <span>{language === 'ar' ? 'نافذ للضوء' : 'Translucent'}</span>
            </div>
          )}
        </div>

        {/* Stone Info & Actions */}
        <div className="flex-1 min-w-0 w-full flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-1">
              <span className="text-[10px] uppercase font-semibold tracking-wider text-[#C5A059] bg-[#C5A059]/10 px-2 py-0.5 rounded border border-[#C5A059]/20">
                {currentItem.categoryLabel[language]}
              </span>
              <span className="text-[11px] font-mono text-[#A89E8C]">
                {currentItem.dimensions[language]}
              </span>
            </div>

            <h4 className="text-base sm:text-lg font-bold text-white mb-0.5 truncate">
              {currentItem.name[language]}
            </h4>
            <p className="text-xs text-[#C5A059] font-medium mb-2 truncate">
              {language === 'ar' ? currentItem.name.en : currentItem.name.ar}
            </p>

            <p className="text-xs text-[#BFB8AA] line-clamp-2 leading-relaxed mb-3">
              {currentItem.description[language]}
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex items-center gap-2 pt-2 border-t border-white/[0.08]">
            <button
              onClick={() => {
                if (onOpenQuote) {
                  onOpenQuote(currentItem.name[language]);
                } else {
                  const contactSec = document.getElementById('contact');
                  if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold rounded-lg bg-gradient-to-r from-[#C5A059] via-[#D8B469] to-[#A07C32] text-[#121311] hover:brightness-110 transition-all shadow-sm"
            >
              <Send className="w-3 h-3" />
              <span>{language === 'ar' ? 'طلب تسعير فوري' : 'Request Quote'}</span>
            </button>

            {onSelectProduct && (
              <button
                onClick={() => onSelectProduct(currentItem)}
                className="py-2 px-3 text-xs font-medium rounded-lg bg-white/10 hover:bg-white/15 text-white transition-colors border border-white/10"
              >
                {language === 'ar' ? 'التفاصيل' : 'Details'}
              </button>
            )}

            {/* Navigation Arrows */}
            <div className="flex items-center gap-1 ms-auto">
              <button
                onClick={handlePrev}
                aria-label="Previous stone"
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-[#D5C6AC] hover:text-white transition-colors"
              >
                <ArrowPrev className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next stone"
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-[#D5C6AC] hover:text-white transition-colors"
              >
                <ArrowNext className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="px-4 pb-3 pt-1 flex items-center justify-center gap-1.5">
        {highlightItems.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              idx === currentIndex
                ? 'w-6 bg-[#C5A059]'
                : 'w-1.5 bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
