import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ProductImage } from './ProductImage';
import { 
  Building2, 
  ShoppingBag, 
  Car, 
  Trees, 
  Wallpaper, 
  Maximize2, 
  Sparkles, 
  Landmark,
  Check, 
  X,
  FileText
} from 'lucide-react';

interface LandscapeSectionProps {
  onOpenSpecsModal?: (productName: string) => void;
}

export const LandscapeSection: React.FC<LandscapeSectionProps> = ({ onOpenSpecsModal }) => {
  const { language, t } = useLanguage();
  const [activeApp, setActiveApp] = useState<string>('compounds');

  const applicationList = [
    { id: 'compounds', icon: Building2, ...t.landscape.applications.compounds, sampleImage: '/2.jpeg' },
    { id: 'malls', icon: ShoppingBag, ...t.landscape.applications.malls, sampleImage: '/6.jpeg' },
    { id: 'roads', icon: Car, ...t.landscape.applications.roads, sampleImage: '/3.jpeg' },
    { id: 'gardens', icon: Trees, ...t.landscape.applications.gardens, sampleImage: '/4.jpeg' },
    { id: 'walls', icon: Wallpaper, ...t.landscape.applications.walls, sampleImage: '/5.jpeg' },
    { id: 'openSpaces', icon: Maximize2, ...t.landscape.applications.openSpaces, sampleImage: '/13.jpeg' },
    { id: 'decorativeFloors', icon: Sparkles, ...t.landscape.applications.decorativeFloors, sampleImage: '/1.jpeg' },
    { id: 'architectural', icon: Landmark, ...t.landscape.applications.architectural, sampleImage: '/8.jpeg' },
  ];

  const features = [
    {
      num: '01',
      title: language === 'ar' ? 'بديل هندسي متطور للإنترلوك والبازلت' : 'Modern Engineered Alternative',
      desc: language === 'ar' 
        ? 'صلابة طبيعية فائقة ومظهر معماري فخم يتجاوز المواد الأسمنتية التقليدية.'
        : 'Superior natural hardness and monolithic luxury outperforming concrete pavers.',
    },
    {
      num: '02',
      title: language === 'ar' ? 'مقاس موحد ٥٠ × ١٠٠ سم' : 'Standard 50 × 100 cm Format',
      desc: language === 'ar'
        ? 'سرعة قياسية في التركيب وتوفير كبير في تكاليف العمالة والوقت الميداني.'
        : 'Rapid site installation with minimal joint seams and reduced labor time.',
    },
    {
      num: '03',
      title: language === 'ar' ? 'مقاومة قصوى للعوامل الجوية' : 'Weather & Load Durability',
      desc: language === 'ar'
        ? 'تحمل للأحمال الثقيلة وثبات ألوان لا يتأثر بأشعة الشمس المباشرة أو الرطوبة.'
        : 'High vehicular load capacity with UV-resistant natural color stability.',
    },
  ];

  const comparisonRows = [
    {
      label: language === 'ar' ? 'الخامة والمظهر المعماري' : 'Material & Aesthetics',
      ours: language === 'ar' ? 'حجر ورخام طبيعي مصري فاخر' : '100% Egyptian Natural Stone',
      others: language === 'ar' ? 'خلطة أسمنتية باهتة ومعرضة للتآكل' : 'Synthetic cement mixture prone to fading',
    },
    {
      label: language === 'ar' ? 'الأبعاد وسرعة التركيب' : 'Format & Installation Speed',
      ours: language === 'ar' ? 'شيتات قياسية ٥٠ × ١٠٠ سم سريعة التغطية' : 'Modular 50 × 100 cm rapid installation',
      others: language === 'ar' ? 'قطع صغيرة تستغرق وقتاً طويلاً وتتفكك' : 'Small pieces prone to shifting and sinking',
    },
    {
      label: language === 'ar' ? 'العمر الافتراضي والصيانة' : 'Lifespan & Maintenance',
      ours: language === 'ar' ? 'عقود دون تغيير في اللون أو تسرب أملاح' : 'Decades of zero-fading natural beauty',
      others: language === 'ar' ? 'تغير سريع في اللون وتلف وتكسر حواف' : 'Frequent edge chipping and efflorescence',
    },
  ];

  const currentApp = applicationList.find((a) => a.id === activeApp) || applicationList[0];

  return (
    <section id="landscape" className="py-16 lg:py-24 bg-[#F4EFE6] hairline-b relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#C5A059] mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            <span>{t.landscape.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#181917] tracking-tight leading-tight">
            {t.landscape.heading}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#6B685E] leading-relaxed">
            {t.landscape.subheading}
          </p>
        </div>

        {/* 3 Core Architectural Features (Uncluttered) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
          {features.map((feat) => (
            <div
              key={feat.num}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-black/[0.08] shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-bold text-[#C5A059] block mb-2">
                  {feat.num}
                </span>
                <h4 className="text-sm sm:text-base font-bold text-[#181917] mb-1.5">
                  {feat.title}
                </h4>
                <p className="text-xs text-[#6B685E] leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Applications Showcase */}
        <div id="applications" className="mb-14 pt-8 hairline-t">
          <div className="max-w-2xl mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-[#181917]">
              {t.landscape.applicationsTitle}
            </h3>
            <p className="text-xs text-[#6B685E] mt-1">
              {t.landscape.applicationsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Application Selector */}
            <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-1 gap-2">
              {applicationList.map((app) => {
                const IconComponent = app.icon;
                const isSelected = activeApp === app.id;
                return (
                  <button
                    key={app.id}
                    onClick={() => setActiveApp(app.id)}
                    className={`flex items-center gap-3 p-3 rounded-xl text-start transition-all ${
                      isSelected
                        ? 'bg-white text-[#181917] shadow-xs border border-[#C5A059]/40'
                        : 'bg-white/60 text-[#6B685E] hover:bg-white hover:text-[#181917] border border-transparent'
                    }`}
                  >
                    <div
                      className={`p-2 rounded-lg shrink-0 ${
                        isSelected ? 'bg-[#181917] text-[#C5A059]' : 'bg-[#EAE5DC] text-[#6B685E]'
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-xs sm:text-sm font-semibold block truncate">{app.title}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Application Detail Card */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-5 sm:p-6 border border-black/[0.08] shadow-xs">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-black/[0.06]">
                <span className="text-xs font-bold text-[#C5A059]">
                  {currentApp.title}
                </span>
                <span className="text-xs text-[#6B685E] font-mono">
                  50 × 100 cm
                </span>
              </div>

              <div className="aspect-[16/9] rounded-xl overflow-hidden bg-[#EAE5DC] mb-3">
                <ProductImage
                  src={currentApp.sampleImage}
                  alt={currentApp.title}
                  objectFit="cover"
                  className="w-full h-full"
                />
              </div>

              <p className="text-xs sm:text-sm text-[#6B685E] leading-relaxed mb-4">
                {currentApp.desc}
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-black/[0.06]">
                <span className="text-xs text-[#6B685E]">
                  المقاس القياسي: ٥٠ × ١٠٠ سم
                </span>

                <button
                  onClick={() => onOpenSpecsModal?.(currentApp.title)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#181917] hover:bg-[#2A2B28] rounded-lg transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>{t.landscape.requestSpecCTA}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quality Comparison Matrix - Streamlined */}
        <div className="pt-8 hairline-t">
          <div className="max-w-2xl mb-5">
            <h3 className="text-lg sm:text-xl font-bold text-[#181917]">
              {t.landscape.comparisonTitle}
            </h3>
            <p className="text-xs text-[#6B685E] mt-0.5">
              {t.landscape.comparisonSubtitle}
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-black/[0.08] bg-white shadow-xs">
            <table className="w-full text-start text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-black/[0.08] bg-[#FAF8F5]">
                  <th className="py-3 px-4 sm:px-5 text-start font-semibold text-[#181917]">
                    المعيار
                  </th>
                  <th className="py-3 px-4 sm:px-5 text-start font-bold text-[#181917] bg-[#F4EFE6]">
                    شيتات أبو حلمي ستون
                  </th>
                  <th className="py-3 px-4 sm:px-5 text-start font-medium text-[#6B685E]">
                    الإنترلوك والبازلت
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/[0.06]">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#FAF8F5] transition-colors">
                    <td className="py-3 px-4 sm:px-5 font-semibold text-[#181917]">
                      {row.label}
                    </td>
                    <td className="py-3 px-4 sm:px-5 text-[#181917] bg-[#FAF8F5]/80">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#15803D] shrink-0" />
                        <span>{row.ours}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 sm:px-5 text-[#6B685E]">
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4 text-[#DC2626] shrink-0" />
                        <span>{row.others}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
