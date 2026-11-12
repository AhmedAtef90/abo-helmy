import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_CONFIG, getWhatsAppUrl } from '../config/company';
import { Menu, X, Globe, Phone, MessageCircle } from 'lucide-react';

interface HeaderProps {
  onOpenQuoteModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const { language, t, toggleLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#products', label: t.nav.products },
    { href: '#landscape', label: t.nav.landscape },
    { href: '#applications', label: t.nav.applications },
    { href: '#calculator', label: t.nav.calculator },
    { href: '#export', label: t.nav.export },
    { href: '#contact', label: t.nav.contact },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = getWhatsAppUrl(
    language === 'ar'
      ? 'السلام عليكم أبو حلمي ستون، أود الاستفسار عن توريد الرخام والجرانيت والزلط.'
      : 'Hello ABO HELMY STONE, I am inquiring regarding natural stone supply.'
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAF9F6]/95 backdrop-blur-md hairline-b transition-all">
      {/* Top minimal bar with international +20 numbers */}
      <div className="bg-[#F3EFEA] border-b border-black/[0.06] py-1.5 px-4 text-xs text-[#6B685E]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[#1A1B19]">
              {COMPANY_CONFIG.shortName[language]}
            </span>
            <span className="text-[#6B685E]/50">·</span>
            <span className="hidden sm:inline text-xs">
              {COMPANY_CONFIG.contact.landmark[language]}
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href={`tel:${COMPANY_CONFIG.contact.primaryMobile.number}`}
              className="flex items-center gap-1.5 text-[#1A1B19] hover:text-[#8C754E] font-mono transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-[#8C754E]" />
              <span dir="ltr">{COMPANY_CONFIG.contact.primaryMobile.display}</span>
            </a>

            <span className="text-[#6B685E]/40">·</span>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#15803D] hover:text-[#166534] font-mono transition-colors font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span dir="ltr">{COMPANY_CONFIG.contact.whatsapp.display}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main 3-Zone Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Official 3D Logo */}
        <a href="#" className="flex items-center gap-3.5 shrink-0 group focus:outline-none">
          <img
            src="/logo.png"
            alt="أبو حلمي ستون - ABO HELMY STONE"
            className="h-12 sm:h-14 w-auto max-w-[220px] object-contain transition-transform group-hover:scale-102"
          />
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#1A1B19]/80">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="whitespace-nowrap hover:text-[#8C754E] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#8C754E] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Actions (Request Quote + Language) */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          {/* Primary Action Button */}
          <a
            href="#contact"
            onClick={(e) => {
              if (onOpenQuoteModal) {
                e.preventDefault();
                onOpenQuoteModal();
              }
            }}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#1A1B19] hover:bg-[#2C2E2B] rounded-md transition-colors shadow-xs"
          >
            <span>{t.nav.requestQuote}</span>
          </a>

          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            aria-label={t.nav.switchLanguage}
            className="flex items-center gap-1 px-2.5 py-2 text-xs font-medium text-[#6B685E] hover:text-[#1A1B19] rounded-md transition-colors"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{t.nav.languageName}</span>
          </button>
        </div>

        {/* Mobile Menu & Language Toggle Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={toggleLanguage}
            aria-label="Toggle language"
            className="px-2.5 py-1.5 text-xs font-bold text-[#1A1B19] bg-[#EAE5DC] rounded-md"
          >
            <span>{language === 'ar' ? 'EN' : 'عربي'}</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="p-2 text-[#1A1B19] hover:bg-[#EAE5DC] rounded-md transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-black/[0.08] bg-[#FAF9F6] px-6 py-6 shadow-xl animate-fadeIn">
          <nav className="flex flex-col gap-4 text-sm font-medium text-[#1A1B19]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="py-1 border-b border-black/[0.05] hover:text-[#8C754E] transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 flex flex-col gap-2.5">
              <a
                href={`tel:${COMPANY_CONFIG.contact.primaryMobile.number}`}
                className="flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold bg-[#F3EFEA] text-[#1A1B19] rounded-md font-mono"
              >
                <Phone className="w-4 h-4 text-[#8C754E]" />
                <span dir="ltr">{COMPANY_CONFIG.contact.primaryMobile.display}</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold bg-[#15803D] text-white rounded-md font-mono"
              >
                <MessageCircle className="w-4 h-4" />
                <span>واتساب: {COMPANY_CONFIG.contact.whatsapp.display}</span>
              </a>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 px-4 text-xs font-semibold text-white bg-[#1A1B19] rounded-md"
              >
                {t.nav.requestQuote}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
