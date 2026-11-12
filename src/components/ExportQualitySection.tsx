import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_CONFIG, getWhatsAppUrl } from '../config/company';
import { Anchor, ShieldCheck, Box, Package, ArrowRight, ArrowLeft } from 'lucide-react';

export const ExportQualitySection: React.FC = () => {
  const { direction, language, t } = useLanguage();
  const ArrowIcon = direction === 'rtl' ? ArrowLeft : ArrowRight;

  const sampleBoxWhatsAppUrl = getWhatsAppUrl(
    direction === 'rtl'
      ? 'السلام عليكم أبو حلمي ستون، أود طلب حقيبة عينات معمارية معتمدة للرخام والجرانيت والزلط.'
      : 'Hello ABO HELMY STONE, I would like to request an architectural stone sample box for project evaluation.'
  );

  const pillars = [
    {
      icon: ShieldCheck,
      title: t.export.pillar1Title,
      desc: t.export.pillar1Desc,
    },
    {
      icon: Box,
      title: t.export.pillar2Title,
      desc: t.export.pillar2Desc,
    },
    {
      icon: Package,
      title: t.export.pillar3Title,
      desc: t.export.pillar3Desc,
    },
    {
      icon: Anchor,
      title: t.export.pillar4Title,
      desc: t.export.pillar4Desc,
    },
  ];

  return (
    <section id="export" className="py-20 lg:py-28 bg-[#FAF9F6] hairline-b relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#8C754E] mb-2">
            {t.export.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1B19] tracking-tight">
            {t.export.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6B685E] leading-relaxed">
            {t.export.subtitle}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white border border-black/[0.08] shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-md bg-[#F3EFEA] text-[#1A1B19] flex items-center justify-center mb-3.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-[#1A1B19] mb-1.5">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#6B685E] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ports & Capacity Strip */}
        <div className="p-7 rounded-xl bg-[#1A1B19] text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-3 max-w-2xl">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#D5C6AC] font-semibold block mb-1.5">
                {t.export.portsTitle}
              </span>
              <div className="flex flex-wrap gap-2 text-xs">
                {COMPANY_CONFIG.export.ports[language].map((port, i) => (
                  <span
                    key={i}
                    className="bg-[#2B2D29] px-2.5 py-1 rounded text-white border border-white/[0.08]"
                  >
                    {port}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="text-xs uppercase tracking-wider text-[#D5C6AC] font-semibold block mb-0.5">
                {t.export.capacityTitle}
              </span>
              <p className="text-xs sm:text-sm text-[#C5BBAA]">
                {COMPANY_CONFIG.export.capacity[language]}
              </p>
            </div>
          </div>

          <a
            href={sampleBoxWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-[#1A1B19] bg-[#EAE5DC] hover:bg-white rounded-md transition-colors whitespace-nowrap shrink-0"
          >
            <span>{t.export.sampleKitCTA}</span>
            <ArrowIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
