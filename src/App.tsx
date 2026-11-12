/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LandscapeSection } from './components/LandscapeSection';
import { ProductCatalog } from './components/ProductCatalog';
import { ProjectCalculator } from './components/ProjectCalculator';
import { ExportQualitySection } from './components/ExportQualitySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { ProductItem, PRODUCTS } from './data/products';
import { MessageCircle, Phone } from 'lucide-react';
import { COMPANY_CONFIG, getWhatsAppUrl } from './config/company';

function MainContent() {
  const { language } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [initialStoneInterest, setInitialStoneInterest] = useState<string>('');

  const handleOpenInquiryForm = (stoneName: string) => {
    setInitialStoneInterest(stoneName);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProductById = (productId: number) => {
    const prod = PRODUCTS.find((p) => p.id === productId);
    if (prod) {
      setSelectedProduct(prod);
    }
  };

  const floatingWhatsAppUrl = getWhatsAppUrl(
    language === 'ar'
      ? 'السلام عليكم أبو حلمي ستون، أود الاستفسار عن توريد الرخام والجرانيت وحلول اللاندسكيب.'
      : 'Hello ABO HELMY STONE, I would like to inquire about Egyptian marble, granite, and landscape solutions.'
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#1A1B19] selection:bg-[#B8AA94]/25 selection:text-[#1A1B19]">
      {/* Clean Minimalist Header */}
      <Header
        onOpenQuoteModal={() => {
          const contactSec = document.getElementById('contact');
          if (contactSec) {
            contactSec.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section with Compact Stone Slideshow */}
        <Hero
          onSelectProduct={(prod) => setSelectedProduct(prod)}
          onOpenQuote={(stoneName) => handleOpenInquiryForm(stoneName)}
        />

        {/* 2. Prominent Landscape & Architectural Solutions Section */}
        <LandscapeSection
          onOpenSpecsModal={(productName) => handleOpenInquiryForm(productName)}
        />

        {/* 3. Official 13 Products Catalog */}
        <ProductCatalog onSelectProduct={(prod) => setSelectedProduct(prod)} />

        {/* 4. Architect & Contractor Specifier Calculator */}
        <ProjectCalculator />

        {/* 5. International Export & Packaging Standards */}
        <ExportQualitySection />

        {/* 6. Enterprise RFQ & Direct Procurement Reception */}
        <ContactSection initialStoneInterest={initialStoneInterest} />
      </main>

      {/* Footer */}
      <Footer onSelectProduct={handleSelectProductById} />

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenInquiryForm={handleOpenInquiryForm}
      />

      {/* Floating Action Buttons */}
      <aside aria-label="Direct Hotlines" className="fixed bottom-5 end-5 z-40 flex flex-col gap-2 items-end">
        <a
          href={`tel:${COMPANY_CONFIG.contact.primaryMobile.number}`}
          aria-label="Direct Phone Call"
          className="flex items-center gap-2 bg-[#1A1B19] hover:bg-[#2C2E2B] text-white p-3 sm:px-3.5 sm:py-2 rounded-full shadow-md transition-all text-xs"
        >
          <Phone className="w-4 h-4 text-[#C5BBAA]" />
          <span className="hidden sm:inline font-mono font-medium" dir="ltr">
            {COMPANY_CONFIG.contact.primaryMobile.display}
          </span>
        </a>

        <a
          href={floatingWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Direct WhatsApp Chat"
          className="flex items-center gap-2 bg-[#15803D] hover:bg-[#166534] text-white p-3 sm:px-3.5 sm:py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all text-xs font-semibold"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="hidden sm:inline">
            {language === 'ar' ? 'واتساب مباشر' : 'WhatsApp'}
          </span>
        </a>
      </aside>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}
