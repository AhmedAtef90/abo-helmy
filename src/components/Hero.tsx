import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_CONFIG, getWhatsAppUrl } from '../config/company';
import { ArrowRight, ArrowLeft, MessageCircle, Phone, MapPin, FileText } from 'lucide-react';
import { ProductImage } from './ProductImage';

export const Hero: React.FC = () => {
  const { direction, language, t } = useLanguage();
  const ArrowIcon = direction === 'rtl' ? ArrowLeft : ArrowRight;

  const whatsappInquiryUrl = getWhatsAppUrl(
    direction === 'rtl'
      ? 'السلام عليكم أبو حلمي ستون، أود الاستفسار عن توريد الرخام والجرانيت وحلول اللاندسكيب.'
      : 'Hello ABO HELMY STONE, I would like to inquire about marble, granite, and landscape solutions.'
  );

  return (
    <section className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24 hairline-b bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Subtle, unboxed location indicator */}
        <div className="flex items-center gap-2 text-xs font-medium text-[#6B685E] mb-6">
          <MapPin className="w-3.5 h-3.5 text-[#8C754E] shrink-0" />
          <span>{COMPANY_CONFIG.contact.address[language]}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Clean kicker */}
            <div className="text-xs font-semibold uppercase tracking-wider text-[#8C754E] mb-3">
              {t.hero.badge}
            </div>

            {/* Headline with IBM Plex Sans Arabic and balanced wrapping */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-[#1A1B19] leading-[1.25] text-balance mb-6">
              <span>{t.hero.titleLine1}</span>{' '}
              <span className="text-[#8C754E] font-normal block sm:inline">
                {t.hero.titleLine2}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-[#1A1B19]/80 leading-relaxed max-w-2xl mb-8">
              {t.hero.subtitle}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <a
                href="#products"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#1A1B19] hover:bg-[#2C2E2B] rounded-md transition-colors shadow-xs"
              >
                <span>{t.hero.exploreCatalog}</span>
                <ArrowIcon className="w-4 h-4" />
              </a>

              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-[#15803D] bg-[#E8F5E9] hover:bg-[#DCFCE7] rounded-md transition-colors border border-[#15803D]/20"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.hero.whatsappDirect}</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-medium text-[#1A1B19] bg-[#F3EFEA] hover:bg-[#EAE5DC] rounded-md transition-colors border border-black/[0.08]"
              >
                <FileText className="w-4 h-4 text-[#8C754E]" />
                <span>{language === 'ar' ? 'طلب تسعير ومواصفات' : 'Request RFQ & Specs'}</span>
              </a>
            </div>

            {/* International Call Strip (+20) */}
            <div className="pt-4 border-t border-black/[0.08] flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#6B685E]">
              <span className="font-semibold text-[#1A1B19]">
                {language === 'ar' ? 'الاتصال المباشر (كود مصر +20):' : 'Direct International Calls:'}
              </span>
              <div className="flex flex-wrap items-center gap-3 font-mono font-medium text-[#1A1B19]">
                {COMPANY_CONFIG.contact.mobiles.map((mob, idx) => (
                  <React.Fragment key={idx}>
                    <a
                      href={`tel:${mob.number}`}
                      className="hover:text-[#8C754E] transition-colors"
                      dir="ltr"
                    >
                      {mob.display}
                    </a>
                    {idx < COMPANY_CONFIG.contact.mobiles.length - 1 && (
                      <span className="text-[#6B685E]/40">·</span>
                    )}
                  </React.Fragment>
                ))}
                <span className="text-[#6B685E]/40">·</span>
                <a
                  href={`tel:${COMPANY_CONFIG.contact.landline.number}`}
                  className="hover:text-[#8C754E] transition-colors"
                  dir="ltr"
                >
                  أرضي: {COMPANY_CONFIG.contact.landline.display}
                </a>
              </div>
            </div>
          </div>

          {/* Hero Visual Spotlight */}
          <div className="lg:col-span-5">
            <div className="stone-card rounded-2xl p-4 sm:p-5 shadow-sm">
              {/* Official 3D Logo Showcase */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-b from-[#1C1D1A] via-[#121310] to-[#0D0E0C] border border-[#C5A059]/25 flex items-center justify-center p-4 mb-3 shadow-inner">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(197,160,89,0.15)_0%,_transparent_70%)] pointer-events-none" />
                <img
                  src="/logo.png"
                  alt="أبو حلمي ستون - ABO HELMY STONE"
                  className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)] relative z-10"
                />
                <div className="absolute bottom-2.5 inset-x-2.5 bg-black/85 backdrop-blur-xs py-1.5 px-3 rounded-lg text-center text-xs text-[#EAE5DC] border border-[#C5A059]/20 z-20">
                  <span className="font-semibold block gold-text-gradient">أبو حلمي ستون · ABO HELMY STONE</span>
                  <span className="text-[10px] text-[#D5C6AC] block">طريق الأوتوستراد، المعادي، القاهرة</span>
                </div>
              </div>

              {/* Sample Material Preview */}
              <div className="grid grid-cols-2 gap-2 text-xs text-[#1A1B19]">
                <div className="p-2.5 bg-[#FAF9F6] rounded-lg border border-black/[0.06] flex items-center gap-2">
                  <div className="w-9 h-9 rounded overflow-hidden shrink-0 bg-[#EAE5DC]">
                    <ProductImage
                      src="/2.jpeg"
                      alt="Landscape Sheet"
                      objectFit="cover"
                      fallbackName="Sheet 50x100"
                      fallbackNumber={2}
                    />
                  </div>
                  <div className="overflow-hidden">
                    <span className="font-bold block truncate">شيت ٥٠ × ١٠٠ سم</span>
                    <span className="text-[10px] text-[#6B685E] block truncate">بديل الإنترلوك</span>
                  </div>
                </div>

                <div className="p-2.5 bg-[#FAF9F6] rounded-lg border border-black/[0.06] flex items-center gap-2">
                  <div className="w-9 h-9 rounded overflow-hidden shrink-0 bg-[#EAE5DC]">
                    <ProductImage
                      src="/8.jpeg"
                      alt="Translucent Alabaster"
                      objectFit="cover"
                      fallbackName="Alabaster"
                      fallbackNumber={8}
                    />
                  </div>
                  <div className="overflow-hidden">
                    <span className="font-bold block truncate">ألبستر نافذ للضوء</span>
                    <span className="text-[10px] text-[#6B685E] block truncate">عروق ذهبية</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Clean Unboxed Metrics */}
        <div className="mt-14 pt-8 hairline-t grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-[#1A1B19] tracking-tight">
              {t.hero.metric1Val}
            </div>
            <div className="text-xs sm:text-sm text-[#6B685E] mt-0.5">
              {t.hero.metric1Label}
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-bold text-[#1A1B19] tracking-tight">
              {t.hero.metric2Val}
            </div>
            <div className="text-xs sm:text-sm text-[#6B685E] mt-0.5">
              {t.hero.metric2Label}
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-bold text-[#1A1B19] tracking-tight">
              {t.hero.metric3Val}
            </div>
            <div className="text-xs sm:text-sm text-[#6B685E] mt-0.5">
              {t.hero.metric3Label}
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-bold text-[#1A1B19] tracking-tight">
              {t.hero.metric4Val}
            </div>
            <div className="text-xs sm:text-sm text-[#6B685E] mt-0.5">
              {t.hero.metric4Label}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
