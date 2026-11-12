import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_CONFIG, getWhatsAppUrl } from '../config/company';
import { ArrowRight, ArrowLeft, MessageCircle, MapPin, FileText, Sparkles, Award } from 'lucide-react';
import { CompactSlideshow } from './CompactSlideshow';
import { ProductItem } from '../data/products';

interface HeroProps {
  onSelectProduct?: (product: ProductItem) => void;
  onOpenQuote?: (stoneName: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectProduct, onOpenQuote }) => {
  const { direction, language, t } = useLanguage();
  const ArrowIcon = direction === 'rtl' ? ArrowLeft : ArrowRight;

  const whatsappInquiryUrl = getWhatsAppUrl(
    direction === 'rtl'
      ? 'السلام عليكم أبو حلمي ستون، أود الاستفسار عن توريد الرخام والجرانيت وحلول اللاندسكيب.'
      : 'Hello ABO HELMY STONE, I would like to inquire about marble, granite, and landscape solutions.'
  );

  return (
    <section className="relative overflow-hidden pt-8 pb-14 lg:pt-12 lg:pb-20 hairline-b bg-[#FAF8F5]">
      {/* Ambient background gold glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Subtle unboxed location indicator */}
        <div className="flex items-center gap-2 text-xs font-semibold text-[#6B685E] mb-6">
          <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
          <span>{COMPANY_CONFIG.contact.address[language]}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Main Hero Copy - Perfect Typography with Cairo Font */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Prestigious Gilded Kicker */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-[#FAF5EB] border border-[#C5A059]/40 text-[#8C6D2E] text-xs font-bold mb-4 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Headline - Precision Balanced Typography */}
            <h1 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-black text-[#0F100E] leading-[1.35] tracking-normal mb-4">
              <span className="block text-[#0F100E]">
                {t.hero.titleLine1}
              </span>
              <span className="block mt-1 sm:mt-2 text-2xl sm:text-3xl lg:text-[2.15rem] font-extrabold gold-text-gradient">
                {t.hero.titleLine2}
              </span>
            </h1>

            {/* Subtitle - Clean & Crisp */}
            <p className="text-xs sm:text-sm md:text-base text-[#4A473E] leading-relaxed max-w-xl mb-7 font-normal">
              {t.hero.subtitle}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-7">
              <a
                href="#products"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#0F100E] hover:bg-[#252723] rounded-xl transition-all shadow-sm hover:shadow"
              >
                <span>{t.hero.exploreCatalog}</span>
                <ArrowIcon className="w-4 h-4 text-[#C5A059]" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#181917] bg-[#F4EFE6] hover:bg-[#EAE5DC] rounded-xl transition-colors border border-black/[0.08]"
              >
                <FileText className="w-4 h-4 text-[#C5A059]" />
                <span>{language === 'ar' ? 'طلب تسعير ومواصفات' : 'Request RFQ & Specs'}</span>
              </a>

              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold text-[#15803D] bg-[#E8F5E9] hover:bg-[#DCFCE7] rounded-xl transition-colors border border-[#15803D]/25"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.hero.whatsappDirect}</span>
              </a>
            </div>

            {/* Direct Hotlines (+20) */}
            <div className="pt-3 border-t border-black/[0.08] flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-[#6B685E]">
              <span className="font-bold text-[#0F100E]">
                {language === 'ar' ? 'هواتف المبيعات (+20):' : 'Hotlines (+20):'}
              </span>
              <div className="flex flex-wrap items-center gap-3 font-mono text-[#0F100E] font-semibold">
                {COMPANY_CONFIG.contact.mobiles.slice(0, 2).map((mob, idx) => (
                  <a
                    key={idx}
                    href={`tel:${mob.number}`}
                    className="hover:text-[#C5A059] transition-colors"
                    dir="ltr"
                  >
                    {mob.display}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 3D Logo Spotlight & Compact Slideshow */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {/* Dedicated Luxury Emblem Spotlight Card - Guarantees 3D Logo Contrast */}
            <div className="relative p-3.5 sm:p-4 rounded-2xl bg-gradient-to-br from-[#181917] via-[#121310] to-[#0A0B09] border border-[#C5A059]/35 shadow-xl flex items-center justify-between gap-4 overflow-hidden">
              {/* Radial gold spotlight illuminating logo */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(197,160,89,0.18)_0%,_transparent_75%)] pointer-events-none" />

              <div className="relative z-10 flex items-center gap-3.5">
                <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 flex items-center justify-center p-0.5">
                  <img
                    src="/logo.png"
                    alt="شعار أبو حلمي ستون 3D الرسمي"
                    className="w-full h-full object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.85)]"
                  />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#C5A059] bg-[#C5A059]/15 px-2 py-0.5 rounded border border-[#C5A059]/30 mb-0.5">
                    <Award className="w-3 h-3" />
                    <span>{language === 'ar' ? 'العلامة التجارية المعتمدة' : 'Official Brand'}</span>
                  </div>
                  <h3 className="text-sm sm:text-base font-black text-white">
                    أبو حلمي ستون · ABO HELMY STONE
                  </h3>
                  <p className="text-[11px] text-[#D5C6AC]">
                    طريق الأوتوستراد، المعادي، القاهرة
                  </p>
                </div>
              </div>

              <div className="hidden sm:flex flex-col items-end shrink-0 relative z-10">
                <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[#E5D7BE] text-[10px] font-mono font-semibold">
                  50×100 cm Sheets
                </span>
              </div>
            </div>

            {/* Compact Slideshow Component */}
            <CompactSlideshow
              onSelectProduct={onSelectProduct}
              onOpenQuote={onOpenQuote}
            />
          </div>
        </div>

        {/* 4 Clean Unboxed Metrics */}
        <div className="mt-12 pt-7 hairline-t grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <div className="text-2xl sm:text-3xl font-black text-[#0F100E] tracking-tight">
              {t.hero.metric1Val}
            </div>
            <div className="text-xs text-[#6B685E] mt-0.5 font-medium">
              {t.hero.metric1Label}
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-black text-[#0F100E] tracking-tight">
              {t.hero.metric2Val}
            </div>
            <div className="text-xs text-[#6B685E] mt-0.5 font-medium">
              {t.hero.metric2Label}
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-black text-[#0F100E] tracking-tight">
              {t.hero.metric3Val}
            </div>
            <div className="text-xs text-[#6B685E] mt-0.5 font-medium">
              {t.hero.metric3Label}
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-black text-[#0F100E] tracking-tight">
              {t.hero.metric4Val}
            </div>
            <div className="text-xs text-[#6B685E] mt-0.5 font-medium">
              {t.hero.metric4Label}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
