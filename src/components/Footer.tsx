import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_CONFIG } from '../config/company';
import { PRODUCTS } from '../data/products';
import { MapPin, Phone, Mail, ArrowUp, MessageCircle, Navigation, FileText } from 'lucide-react';

interface FooterProps {
  onSelectProduct?: (productId: number) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectProduct }) => {
  const { language, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#161715] text-[#FAF9F6] pt-14 pb-10 border-t border-black/[0.1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-10 border-b border-white/[0.08]">
          {/* Brand & Overview */}
          <div className="lg:col-span-4 space-y-3.5">
            <a href="#" className="inline-block group">
              <img
                src="/logo.png"
                alt="أبو حلمي ستون - ABO HELMY STONE"
                className="h-12 w-auto max-w-[210px] object-contain transition-transform group-hover:scale-102"
              />
            </a>

            <p className="text-xs sm:text-sm text-[#C5BBAA] leading-relaxed max-w-sm">
              {COMPANY_CONFIG.description[language]}
            </p>

            <div className="pt-1 text-xs text-[#EAE5DC] space-y-1">
              <span className="font-semibold block text-white">
                {COMPANY_CONFIG.name[language]}
              </span>
              <p className="text-[#C5BBAA]">
                {COMPANY_CONFIG.contact.address[language]}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-2.5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#D5C6AC]">
              {t.footer.quickLinksTitle}
            </h4>
            <ul className="space-y-1.5 text-xs text-[#C5BBAA]">
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  {t.nav.products}
                </a>
              </li>
              <li>
                <a href="#landscape" className="hover:text-white transition-colors">
                  {t.nav.landscape}
                </a>
              </li>
              <li>
                <a href="#applications" className="hover:text-white transition-colors">
                  {t.nav.applications}
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition-colors">
                  {t.nav.calculator}
                </a>
              </li>
              <li>
                <a href="#export" className="hover:text-white transition-colors">
                  {t.nav.export}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* 13 Products Index */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#D5C6AC]">
              {t.footer.productsTitle}
            </h4>
            <ul className="grid grid-cols-1 gap-1 text-[11px] text-[#C5BBAA]">
              {PRODUCTS.slice(0, 7).map((prod) => (
                <li key={prod.id}>
                  <a
                    href="#products"
                    onClick={(e) => {
                      if (onSelectProduct) {
                        e.preventDefault();
                        onSelectProduct(prod.id);
                      }
                    }}
                    className="hover:text-white transition-colors truncate block"
                  >
                    #{prod.id < 10 ? `0${prod.id}` : prod.id} · {prod.name[language]}
                  </a>
                </li>
              ))}
              <li>
                <a href="#products" className="text-[#D5C6AC] font-medium hover:underline pt-0.5 block">
                  {language === 'ar' ? 'عرض الكتالوج كاملاً (١٣ خامة) ←' : 'View All 13 Materials →'}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hotlines */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#D5C6AC]">
              {t.footer.contactTitle}
            </h4>
            <div className="space-y-2 text-xs text-[#C5BBAA]">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D5C6AC] shrink-0 mt-0.5" />
                <span>{COMPANY_CONFIG.contact.address[language]}</span>
              </div>

              <div className="space-y-1 pt-1">
                <span className="text-[10px] uppercase font-semibold text-[#D5C6AC] block">
                  أرقام الموبايل (كود مصر +20):
                </span>
                <div className="flex flex-col gap-0.5 font-mono text-white text-xs">
                  {COMPANY_CONFIG.contact.mobiles.map((mob, i) => (
                    <a
                      key={i}
                      href={`tel:${mob.number}`}
                      className="hover:text-[#D5C6AC] transition-colors"
                      dir="ltr"
                    >
                      {mob.display}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1 font-mono">
                <Phone className="w-3.5 h-3.5 text-[#D5C6AC] shrink-0" />
                <span dir="ltr">أرضي: {COMPANY_CONFIG.contact.landline.display}</span>
              </div>

              <div className="flex items-center gap-2 font-mono">
                <MessageCircle className="w-3.5 h-3.5 text-[#4ADE80] shrink-0" />
                <span dir="ltr" className="text-[#86EFAC] font-semibold">واتساب: {COMPANY_CONFIG.contact.whatsapp.display}</span>
              </div>
            </div>

            {/* Direct Links */}
            <div className="pt-2 flex flex-wrap gap-4 text-xs">
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-[#D5C6AC] hover:text-white transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-[#C5BBAA]" />
                <span>{language === 'ar' ? 'طلب تسعير ومواصفات' : 'Request Official RFQ'}</span>
              </a>

              <a
                href={COMPANY_CONFIG.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#D5C6AC] hover:text-white transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-[#86EFAC]" />
                <span>{language === 'ar' ? 'موقعنا على خرائط جوجل' : 'Google Maps Location'}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E8B82]">
          <p>{t.footer.rightsReserved}</p>

          <div className="flex items-center gap-4">
            <span>{t.footer.designedForArchitects}</span>
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-1.5 rounded bg-[#272925] text-[#D5C6AC] hover:text-white transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
