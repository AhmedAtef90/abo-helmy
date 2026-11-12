import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PRODUCTS } from '../data/products';
import { Calculator as CalcIcon, Send, Sparkles, Check } from 'lucide-react';
import { getWhatsAppUrl } from '../config/company';

export const ProjectCalculator: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedProductId, setSelectedProductId] = useState<number>(2); // Egyptian Brown Mosaic Sheet
  const [area, setArea] = useState<number>(250);
  const [depthCm, setDepthCm] = useState<number>(5);

  const selectedProduct = PRODUCTS.find((p) => p.id === selectedProductId) || PRODUCTS[1];
  const isSheetOrMosaic =
    selectedProduct.category === 'mosaic-sheets' ||
    selectedProduct.category === 'flagstone' ||
    selectedProduct.sheetSize !== undefined;

  // Calculations with 5% waste margin
  const areaWithMargin = area * 1.05;

  // Sheet calculation (50x100 cm = 0.5 m² per sheet)
  const estimatedSheets = Math.ceil(areaWithMargin / 0.5);
  const estimatedCrates = Math.ceil(estimatedSheets / 50); // ~50 sheets per fumigated crate

  // Chips calculation: Area * (depth / 100) * 1.6 tons/m³
  const estimatedTons = Number(((areaWithMargin * (depthCm / 100)) * 1.6).toFixed(1));
  const estimatedJumboBags = Math.ceil(estimatedTons); // 1-ton jumbo bags

  const whatsappMessage =
    language === 'ar'
      ? `طلب تسعير تقديري من موقع أبو حلمي ستون:\nالمنتج: ${selectedProduct.name.ar} (كود #${selectedProduct.id})\nالمساحة: ${area} م²\n` +
        (isSheetOrMosaic
          ? `العدد المقدر: ${estimatedSheets} شيت قياسي (٥٠ × ١٠٠ سم)\nالصناديق الخشبية المقدرة: ~${estimatedCrates} صندوق ISPM-15`
          : `الوزن المقدر: ${estimatedTons} طن متري (سُمك فرش ${depthCm} سم)\nالشكائر الجامبو المقدرة: ~${estimatedJumboBags} شيكارة جامبو`)
      : `ABO HELMY STONE Estimate Request:\nProduct: ${selectedProduct.name.en} (#${selectedProduct.id})\nSurface Area: ${area} m²\n` +
        (isSheetOrMosaic
          ? `Estimated Quantity: ${estimatedSheets} standard sheets (50 × 100 cm)\nEstimated ISPM-15 Crates: ~${estimatedCrates} crates`
          : `Estimated Tonnage: ${estimatedTons} Metric Tons (${depthCm} cm depth)\nEstimated Jumbo Bags: ~${estimatedJumboBags} bags (1-ton each)`);

  const whatsappUrl = getWhatsAppUrl(whatsappMessage);

  return (
    <section id="calculator" className="py-20 lg:py-28 bg-[#F3EFEA] hairline-b relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#8C754E] mb-2">
            {t.calculator.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1B19] tracking-tight">
            {t.calculator.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6B685E] leading-relaxed">
            {t.calculator.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Input Form */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-xl border border-black/[0.08] shadow-xs space-y-6">
            {/* Product Selector */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B685E] mb-2">
                {t.calculator.selectProduct}
              </label>
              <select
                value={selectedProductId}
                onChange={(e) => setSelectedProductId(Number(e.target.value))}
                className="w-full bg-[#FAF9F6] border border-black/[0.12] rounded-md py-2.5 px-3 text-sm text-[#1A1B19] font-medium focus:border-[#8C754E] focus:outline-none"
              >
                {PRODUCTS.map((prod) => (
                  <option key={prod.id} value={prod.id}>
                    #{prod.id < 10 ? `0${prod.id}` : prod.id} - {prod.name[language]} ({prod.categoryLabel[language]})
                  </option>
                ))}
              </select>
            </div>

            {/* Surface Area Input */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#6B685E]">
                  {t.calculator.projectArea}
                </label>
                <span className="text-sm font-mono font-bold text-[#1A1B19]">
                  {area} {t.calculator.areaUnit}
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="3000"
                step="10"
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full accent-[#1A1B19] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[#6B685E] mt-1 font-mono">
                <span>10 m²</span>
                <span>1,000 m²</span>
                <span>2,000 m²</span>
                <span>3,000+ m²</span>
              </div>
            </div>

            {/* Depth selector for gravel */}
            {!isSheetOrMosaic && (
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#6B685E]">
                    {language === 'ar' ? 'سُمك فرش الزلط:' : 'Gravel Bed Depth:'}
                  </label>
                  <span className="text-sm font-mono font-bold text-[#1A1B19]">
                    {depthCm} cm
                  </span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="10"
                  step="1"
                  value={depthCm}
                  onChange={(e) => setDepthCm(Number(e.target.value))}
                  className="w-full accent-[#1A1B19] cursor-pointer"
                />
              </div>
            )}

            <div className="pt-2 text-xs text-[#6B685E] border-t border-black/[0.06] flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-[#8C754E] shrink-0 mt-0.5" />
              <span>{t.calculator.coverageAdvice}</span>
            </div>
          </div>

          {/* Results Card */}
          <div className="lg:col-span-7 bg-[#1A1B19] text-white p-6 sm:p-8 rounded-xl shadow-md border border-black flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/[0.12] pb-3 mb-6">
                <div className="flex items-center gap-2">
                  <CalcIcon className="w-5 h-5 text-[#D5C6AC]" />
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {t.calculator.resultsTitle}
                  </h3>
                </div>
                <span className="text-xs text-[#D5C6AC]">
                  {selectedProduct.name[language]}
                </span>
              </div>

              {/* Estimation Figures */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
                <div className="p-4 rounded-lg bg-[#272925] border border-white/[0.08]">
                  <span className="text-xs text-[#D5C6AC] block mb-1">
                    {t.calculator.estimatedQuantity}
                  </span>
                  <div className="text-3xl sm:text-4xl font-bold font-mono text-white tracking-tight">
                    {isSheetOrMosaic ? estimatedSheets : estimatedTons}
                  </div>
                  <span className="text-xs text-[#C5BBAA] mt-1 block">
                    {isSheetOrMosaic ? t.calculator.sheetsCount : t.calculator.chipsWeight}
                  </span>
                </div>

                <div className="p-4 rounded-lg bg-[#272925] border border-white/[0.08]">
                  <span className="text-xs text-[#D5C6AC] block mb-1">
                    {t.calculator.packagingEstimate}
                  </span>
                  <div className="text-3xl sm:text-4xl font-bold font-mono text-white tracking-tight">
                    {isSheetOrMosaic ? `~${estimatedCrates}` : `~${estimatedJumboBags}`}
                  </div>
                  <span className="text-xs text-[#C5BBAA] mt-1 block">
                    {isSheetOrMosaic
                      ? language === 'ar'
                        ? 'صندوق خشبي مدخن (ISPM-15)'
                        : 'Fumigated Wooden Crates (ISPM-15)'
                      : language === 'ar'
                        ? 'شيكارة جامبو منسوجة (١ طن)'
                        : 'Heavy-Duty 1-Ton Jumbo Bags'}
                  </span>
                </div>
              </div>

              {/* Checklist */}
              <div className="space-y-1.5 mb-6 text-xs text-[#D5C6AC]">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#4ADE80]" />
                  <span>
                    {language === 'ar'
                      ? 'تم احتساب نسبة ٥٪ إضافية للهالك الفني والقطع الزاوي'
                      : 'Includes 5% allowance for site geometric cutting and edge seams'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#4ADE80]" />
                  <span>
                    {language === 'ar'
                      ? 'مجهزة لتحميل الحاويات البحرية (FCL) والتوريد الميداني'
                      : 'Configured for direct site delivery and FCL marine container export'}
                  </span>
                </div>
              </div>
            </div>

            {/* WhatsApp Send Action */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-semibold text-[#1A1B19] bg-[#EAE5DC] hover:bg-white rounded-md transition-colors"
            >
              <Send className="w-4 h-4" />
              <span>{t.calculator.sendCalculationToWhatsApp}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
