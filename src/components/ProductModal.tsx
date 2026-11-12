import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ProductItem } from '../data/products';
import { ProductImage } from './ProductImage';
import { X, Check, Copy, MessageCircle, Sparkles, PackageCheck } from 'lucide-react';
import { getWhatsAppUrl } from '../config/company';

interface ProductModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onOpenInquiryForm?: (productName: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onOpenInquiryForm,
}) => {
  const { language, t } = useLanguage();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  const whatsappMessage =
    language === 'ar'
      ? `طلب أسعار ومواصفات من أبو حلمي ستون:\nالمنتج: ${product.name.ar} (كود #${product.id})\nالمقاس: ${product.dimensions.ar}\n${product.specs.ar.join('\n')}`
      : `ABO HELMY STONE Quotation Request:\nProduct: ${product.name.en} (#${product.id})\nDimensions: ${product.dimensions.en}\nSpecs:\n- ${product.specs.en.join('\n- ')}`;

  const whatsappUrl = getWhatsAppUrl(whatsappMessage);

  const handleCopySpecs = () => {
    const specsText = `${product.name[language]} (ABO HELMY STONE #${product.id})\n` +
      `${t.catalog.dimensionsLabel} ${product.dimensions[language]}\n` +
      product.specs[language].join('\n');
    navigator.clipboard.writeText(specsText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-fadeIn">
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-black/[0.08] overflow-hidden my-auto max-h-[90vh] flex flex-col text-[#1A1B19]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-black/[0.06] bg-[#FAF9F6] shrink-0">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold bg-[#1A1B19] text-white px-2 py-0.5 rounded">
              #{product.id < 10 ? `0${product.id}` : product.id}
            </span>
            <span className="text-xs uppercase tracking-wider text-[#6B685E] font-medium">
              {product.categoryLabel[language]}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label={t.modal.close}
            className="p-1.5 text-[#6B685E] hover:text-[#1A1B19] hover:bg-[#F3EFEA] rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-7 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Image Preview */}
            <div className="md:col-span-5 bg-[#F3EFEA] p-3 rounded-xl border border-black/[0.06] flex flex-col items-center justify-center">
              <div className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-white">
                <ProductImage
                  src={product.image}
                  alt={product.name[language]}
                  objectFit="contain"
                  fallbackName={product.name[language]}
                  fallbackNumber={product.id}
                  className="w-full h-full"
                />
              </div>
              <span className="text-[11px] text-[#6B685E] mt-2 block text-center font-mono">
                ABO HELMY STONE Specimen ({product.image.replace('/', '')})
              </span>
            </div>

            {/* Product Meta & Names */}
            <div className="md:col-span-7 flex flex-col">
              <div className="mb-3">
                <h3 className="text-xl sm:text-2xl font-bold text-[#1A1B19] mb-0.5">
                  {product.name[language]}
                </h3>
                <p className="text-xs font-medium text-[#8C754E]">
                  {language === 'ar' ? product.name.en : product.name.ar}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#6B685E] leading-relaxed mb-4">
                {product.description[language]}
              </p>

              {/* Light Transmission Callout */}
              {product.translucent && (
                <div className="mb-4 p-3 rounded-lg bg-[#FDF8EE] border border-[#8C754E]/25 text-xs text-[#1A1B19]">
                  <div className="flex items-center gap-1.5 font-bold text-[#8C754E] mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#8C754E]" />
                    <span>{t.catalog.translucentBadge} (Alabaster Translucency)</span>
                  </div>
                  <p className="leading-relaxed text-[#6B685E]">
                    {t.modal.lightTransmittingNote}
                  </p>
                </div>
              )}

              {/* Verified Technical Specs List */}
              <div className="bg-[#FAF9F6] rounded-lg p-4 border border-black/[0.06] mb-4">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#6B685E] mb-2.5">
                  {t.modal.specsTitle}
                </h4>
                <ul className="space-y-1.5 text-xs text-[#1A1B19]">
                  {product.specs[language].map((spec, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8C754E] mt-1.5 shrink-0" />
                      <span className="font-medium">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recommended Applications */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#6B685E] mb-1.5">
                  {t.modal.applicationsTitle}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {product.applications[language].map((app, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium bg-[#F3EFEA] text-[#1A1B19] px-2.5 py-0.5 rounded"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Packaging Note */}
          <div className="p-3.5 rounded-lg bg-[#FAF9F6] border border-black/[0.06] flex items-start gap-2.5">
            <PackageCheck className="w-4 h-4 text-[#8C754E] shrink-0 mt-0.5" />
            <div className="text-xs text-[#6B685E] leading-relaxed">
              <span className="font-bold text-[#1A1B19] block mb-0.5">{t.modal.packagingTitle}</span>
              <span>{t.modal.packagingDesc}</span>
            </div>
          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-3.5 border-t border-black/[0.06] bg-[#FAF9F6] shrink-0">
          <button
            onClick={handleCopySpecs}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#1A1B19] bg-white hover:bg-[#F3EFEA] rounded border border-black/[0.08] transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-[#15803D]" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? t.modal.specsCopied : t.modal.copySpecs}</span>
          </button>

          <div className="flex items-center gap-2">
            {onOpenInquiryForm && (
              <button
                onClick={() => {
                  onClose();
                  onOpenInquiryForm(product.name[language]);
                }}
                className="px-3.5 py-1.5 text-xs font-semibold text-[#1A1B19] border border-black/[0.12] hover:bg-white rounded transition-colors"
              >
                {t.modal.requestSampleBtn}
              </button>
            )}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-[#15803D] hover:bg-[#166534] rounded transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>{t.modal.inquireWhatsApp}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
