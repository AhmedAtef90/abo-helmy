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
      title: t.landscape.feature1Title,
      desc: t.landscape.feature1Desc,
    },
    {
      num: '02',
      title: t.landscape.feature2Title,
      desc: t.landscape.feature2Desc,
    },
    {
      num: '03',
      title: t.landscape.feature3Title,
      desc: t.landscape.feature3Desc,
    },
    {
      num: '04',
      title: t.landscape.feature4Title,
      desc: t.landscape.feature4Desc,
    },
    {
      num: '05',
      title: t.landscape.feature5Title,
      desc: t.landscape.feature5Desc,
    },
  ];

  const comparisonRows = [
    t.landscape.compRow1,
    t.landscape.compRow2,
    t.landscape.compRow3,
    t.landscape.compRow4,
    t.landscape.compRow5,
  ];

  const currentApp = applicationList.find((a) => a.id === activeApp) || applicationList[0];

  return (
    <section id="landscape" className="py-20 lg:py-28 bg-[#F3EFEA] hairline-b relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#8C754E] mb-2">
            {t.landscape.badge}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1B19] tracking-tight leading-tight">
            {t.landscape.heading}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6B685E] leading-relaxed">
            {t.landscape.subheading}
          </p>
        </div>

        {/* 5 Key Architectural Features */}
        <div className="mb-16">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-[#6B685E] mb-4">
            {t.landscape.featuresTitle}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feat, idx) => (
              <div
                key={feat.num}
                className={`p-6 rounded-xl bg-white border border-black/[0.08] shadow-xs flex flex-col justify-between ${
                  idx === 0 ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div>
                  <span className="text-xs font-mono font-semibold text-[#8C754E] block mb-2">
                    {feat.num}
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-[#1A1B19] mb-1.5">
                    {feat.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#6B685E] leading-relaxed">
                    {feat.desc}
                  </p>
                </div>

                {idx === 0 && (
                  <div className="mt-4 pt-3 border-t border-black/[0.06] flex items-center justify-between text-xs text-[#6B685E]">
                    <span>خامات طبيعية مصرية ١٠٠٪ عالية التحمل</span>
                    <span className="font-semibold text-[#1A1B19]">Standard: 50 × 100 cm</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 8 Product Applications Showcase */}
        <div id="applications" className="mb-16 pt-8 hairline-t">
          <div className="max-w-3xl mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-[#1A1B19]">
              {t.landscape.applicationsTitle}
            </h3>
            <p className="text-xs sm:text-sm text-[#6B685E] mt-1">
              {t.landscape.applicationsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Interactive Application Selector Tabs */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
              {applicationList.map((app) => {
                const IconComponent = app.icon;
                const isSelected = activeApp === app.id;
                return (
                  <button
                    key={app.id}
                    onClick={() => setActiveApp(app.id)}
                    className={`flex items-start gap-3 p-3 rounded-lg text-start transition-colors ${
                      isSelected
                        ? 'bg-white text-[#1A1B19] shadow-xs border border-black/[0.12]'
                        : 'bg-white/60 text-[#6B685E] hover:bg-white hover:text-[#1A1B19] border border-transparent'
                    }`}
                  >
                    <div
                      className={`p-1.5 rounded shrink-0 ${
                        isSelected ? 'bg-[#1A1B19] text-white' : 'bg-[#EAE5DC] text-[#6B685E]'
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-semibold block">{app.title}</span>
                      <span className="text-[11px] text-[#6B685E] line-clamp-1 mt-0.5">
                        {app.desc}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Application Detail Card */}
            <div className="lg:col-span-7 bg-white rounded-xl p-6 sm:p-7 border border-black/[0.08] shadow-xs">
              <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-black/[0.06]">
                <span className="text-xs font-semibold text-[#8C754E]">
                  {currentApp.title}
                </span>
                <span className="text-xs text-[#6B685E] font-mono">
                  50 × 100 cm
                </span>
              </div>

              <div className="aspect-[16/10] sm:aspect-[16/9] rounded-lg overflow-hidden bg-[#EAE5DC] mb-4">
                <ProductImage
                  src={currentApp.sampleImage}
                  alt={currentApp.title}
                  objectFit="cover"
                  className="w-full h-full"
                />
              </div>

              <h4 className="text-lg font-bold text-[#1A1B19] mb-1.5">
                {currentApp.title}
              </h4>
              <p className="text-xs sm:text-sm text-[#6B685E] leading-relaxed mb-4">
                {currentApp.desc}
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-black/[0.06]">
                <span className="text-xs text-[#6B685E]">
                  المقاس القياسي: ٥٠ × ١٠٠ سم
                </span>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#1A1B19] hover:bg-[#2C2E2B] rounded transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>{t.landscape.requestSpecCTA}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quality Comparison Matrix */}
        <div className="pt-8 hairline-t">
          <div className="max-w-3xl mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-[#1A1B19]">
              {t.landscape.comparisonTitle}
            </h3>
            <p className="text-xs sm:text-sm text-[#6B685E] mt-0.5">
              {t.landscape.comparisonSubtitle}
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-black/[0.08] bg-white shadow-xs">
            <table className="w-full text-start text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-black/[0.08] bg-[#F7F5F0]">
                  <th className="py-3.5 px-4 sm:px-6 text-start font-semibold text-[#1A1B19]">
                    المعيار
                  </th>
                  <th className="py-3.5 px-4 sm:px-6 text-start font-bold text-[#1A1B19] bg-[#EFECE5]">
                    {t.landscape.ourStone}
                  </th>
                  <th className="py-3.5 px-4 sm:px-6 text-start font-medium text-[#6B685E]">
                    {t.landscape.interlockBasalt}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/[0.06]">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#FAF9F6] transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-semibold text-[#1A1B19] align-top">
                      {row.label}
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 text-[#1A1B19] bg-[#FBF9F5] align-top">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" />
                        <span>{row.ours}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 text-[#6B685E] align-top">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
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
