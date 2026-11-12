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
    <header className="sticky top-0 z-50 w-full bg-[#0D0E0C]/95 backdrop-blur-md border-b border-[#C5A059]/30 text-white transition-all shadow-lg shadow-black/20">
      {/* Top minimal bar with international +20 numbers on rich dark stone background */}
      <div className="bg-[#070806] border-b border-white/[0.08] py-1.5 px-4 text-xs text-[#C5BBAA]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white tracking-wide">
              {COMPANY_CONFIG.shortName[language]}
            </span>
            <span className="text-[#C5A059]">·</span>
            <span className="hidden sm:inline text-xs text-[#A89E8C]">
              {COMPANY_CONFIG.contact.landmark[language]}
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href={`tel:${COMPANY_CONFIG.contact.primaryMobile.number}`}
              className="flex items-center gap-1.5 text-[#E5D7BE] hover:text-[#C5A059] font-mono transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              <span dir="ltr">{COMPANY_CONFIG.contact.primaryMobile.display}</span>
            </a>

            <span className="text-white/20">·</span>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#15803D]/25 hover:bg-[#15803D]/40 text-[#4ADE80] hover:text-white border border-[#4ADE80]/30 transition-all font-semibold text-xs"
              title={language === 'ar' ? 'محادثة واتساب مباشرة' : 'Direct WhatsApp Chat'}
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>{language === 'ar' ? 'واتساب' : 'WhatsApp'}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Dark obsidian background highlights gold & silver logo */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Official 3D Logo with pristine contrast */}
        <a href="#" className="flex items-center gap-3 shrink-0 group focus:outline-none py-1">
          <div className="relative flex items-center justify-center">
            {/* Subtle radial gold glow behind logo */}
            <div className="absolute inset-0 bg-[#C5A059]/15 blur-lg rounded-full pointer-events-none" />
            <img
              src="/logo.png"
              alt="أبو حلمي ستون - ABO HELMY STONE"
              className="h-12 sm:h-14 w-auto max-w-[230px] object-contain drop-shadow-[0_4px_14px_rgba(0,0,0,0.9)] transition-transform duration-300 group-hover:scale-102 relative z-10"
            />
          </div>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-[#E5D7BE]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="whitespace-nowrap hover:text-[#C5A059] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C5A059] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Actions (Request Quote + Language) */}
        <div className="hidden sm:flex items-center gap-3.5 shrink-0">
          {/* Primary Action Button - Metallic Gold Foil */}
          <a
            href="#contact"
            onClick={(e) => {
              if (onOpenQuoteModal) {
                e.preventDefault();
                onOpenQuoteModal();
              }
            }}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D8B469] to-[#A07C32] text-[#0D0E0C] hover:brightness-110 transition-all shadow-md shadow-[#C5A059]/20"
          >
            <span>{t.nav.requestQuote}</span>
          </a>

          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            aria-label={t.nav.switchLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#C5BBAA] hover:text-white rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          >
            <Globe className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>{t.nav.languageName}</span>
          </button>
        </div>

        {/* Mobile Menu & Language Toggle Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={toggleLanguage}
            aria-label="Toggle language"
            className="px-2.5 py-1.5 text-xs font-bold text-[#E5D7BE] bg-white/10 border border-white/10 rounded-lg"
          >
            <span>{language === 'ar' ? 'EN' : 'عربي'}</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="p-2 text-[#E5D7BE] hover:text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#C5A059]/30 bg-[#0D0E0C] px-6 py-6 shadow-2xl animate-fadeIn">
          <nav className="flex flex-col gap-4 text-sm font-semibold text-[#E5D7BE]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="py-1 border-b border-white/[0.08] hover:text-[#C5A059] transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 flex flex-col gap-2.5">
              <a
                href={`tel:${COMPANY_CONFIG.contact.primaryMobile.number}`}
                className="flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold bg-white/5 border border-white/10 text-white rounded-xl font-mono"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span dir="ltr">{COMPANY_CONFIG.contact.primaryMobile.display}</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold bg-[#15803D] text-white rounded-xl shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{language === 'ar' ? 'محادثة واتساب مباشرة' : 'Direct WhatsApp Chat'}</span>
              </a>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 px-4 text-xs font-bold bg-gradient-to-r from-[#C5A059] via-[#D8B469] to-[#A07C32] text-[#0D0E0C] rounded-xl shadow-md"
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
