import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PRODUCTS, ProductItem, ProductCategory } from '../data/products';
import { ProductImage } from './ProductImage';
import { Search, Eye, Sparkles, MessageCircle, X } from 'lucide-react';
import { getWhatsAppUrl } from '../config/company';

interface ProductCatalogProps {
  onSelectProduct: (product: ProductItem) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ onSelectProduct }) => {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { id: ProductCategory; label: string }[] = [
    { id: 'all', label: t.catalog.allCategory },
    { id: 'mosaic-sheets', label: t.catalog.mosaicSheetsCategory },
    { id: 'flagstone', label: t.catalog.flagstoneCategory },
    { id: 'marble-chips', label: t.catalog.marbleChipsCategory },
    { id: 'translucent', label: t.catalog.translucentCategory },
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category match
      if (selectedCategory !== 'all') {
        if (selectedCategory === 'translucent') {
          if (!product.translucent) return false;
        } else if (product.category !== selectedCategory) {
          return false;
        }
      }

      // Search match
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        const nameAr = product.name.ar.toLowerCase();
        const nameEn = product.name.en.toLowerCase();
        const descAr = product.description.ar.toLowerCase();
        const descEn = product.description.en.toLowerCase();
        const dimAr = product.dimensions.ar.toLowerCase();
        const dimEn = product.dimensions.en.toLowerCase();
        const specsAr = product.specs.ar.join(' ').toLowerCase();
        const specsEn = product.specs.en.join(' ').toLowerCase();

        return (
          nameAr.includes(query) ||
          nameEn.includes(query) ||
          descAr.includes(query) ||
          descEn.includes(query) ||
          dimAr.includes(query) ||
          dimEn.includes(query) ||
          specsAr.includes(query) ||
          specsEn.includes(query)
        );
      }

      return true;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="products" className="py-20 lg:py-28 bg-[#FAF9F6] hairline-b relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#8C754E] mb-2">
            {t.catalog.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1B19] tracking-tight">
            {t.catalog.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#6B685E] leading-relaxed">
            {t.catalog.subtitle}
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8 pb-5 border-b border-black/[0.08]">
          {/* Segmented Filter Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  selectedCategory === cat.id
                    ? 'bg-[#181917] text-[#C5A059] shadow-xs border border-[#C5A059]/40'
                    : 'bg-[#F4EFE6] text-[#6B685E] hover:text-[#181917] hover:bg-[#EAE5DC]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[280px] sm:min-w-[320px]">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.catalog.searchPlaceholder}
              className="w-full bg-white border border-black/[0.12] focus:border-[#8C754E] focus:ring-1 focus:ring-[#8C754E] rounded-md py-2 px-9 text-xs sm:text-sm text-[#1A1B19] placeholder-[#6B685E]/60 focus:outline-none transition-colors"
            />
            <Search className="w-4 h-4 text-[#6B685E] absolute start-3 top-1/2 -translate-y-1/2" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute end-3 top-1/2 -translate-y-1/2 text-[#6B685E] hover:text-[#1A1B19]"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-[#6B685E] mb-6">
          <span>{t.catalog.showingCount.replace('{count}', String(filteredProducts.length))}</span>
          {(selectedCategory !== 'all' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="text-[#1A1B19] underline hover:text-[#8C754E]"
            >
              {t.catalog.resetFilters}
            </button>
          )}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 ? (
          <div className="py-16 text-center bg-white rounded-xl border border-black/[0.08] p-8">
            <p className="text-sm font-semibold text-[#1A1B19] mb-2">{t.catalog.noResults}</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="text-xs font-semibold px-4 py-2 bg-[#1A1B19] text-white rounded-md"
            >
              {t.catalog.resetFilters}
            </button>
          </div>
        ) : (
          /* Clean 13 Products Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => {
              const whatsappUrl = getWhatsAppUrl(
                language === 'ar'
                  ? `السلام عليكم أبو حلمي ستون، أود الاستفسار عن تفاصيل وأسعار (${product.name.ar} - كود #${product.id}).`
                  : `Hello ABO HELMY STONE, I would like to inquire about product #${product.id}: ${product.name.en}.`
              );

              return (
                <div
                  key={product.id}
                  className="stone-card rounded-2xl overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    {/* Image Area */}
                    <div className="relative aspect-[4/3] bg-[#F4EFE6] p-3 flex items-center justify-center overflow-hidden border-b border-black/[0.06]">
                      <ProductImage
                        src={product.image}
                        alt={`${product.name[language]} - أبو حلمي ستون`}
                        objectFit="contain"
                        fallbackName={product.name[language]}
                        fallbackNumber={product.id}
                        className="transition-transform duration-300 hover:scale-102"
                      />

                      {/* Top Meta */}
                      <div className="absolute top-3 start-3 flex items-center gap-1.5 text-xs">
                        <span className="bg-[#181917] text-[#C5A059] font-mono text-[11px] font-bold px-2 py-0.5 rounded border border-[#C5A059]/30">
                          #{product.id < 10 ? `0${product.id}` : product.id}
                        </span>
                        {product.translucent && (
                          <span className="bg-[#8C6D2E] text-white text-[10px] font-medium px-2 py-0.5 rounded flex items-center gap-1">
                            <Sparkles className="w-3 h-3 text-[#F5E6BE]" />
                            <span>{t.catalog.translucentBadge}</span>
                          </span>
                        )}
                      </div>

                      <div className="absolute top-3 end-3">
                        <span className="text-[11px] bg-white/95 text-[#6B685E] px-2 py-0.5 rounded border border-black/[0.06] font-medium">
                          {product.categoryLabel[language]}
                        </span>
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-5">
                      <h3 className="text-base sm:text-lg font-bold text-[#181917] mb-0.5 leading-snug">
                        {product.name[language]}
                      </h3>
                      <p className="text-xs text-[#C5A059] font-semibold mb-3">
                        {language === 'ar' ? product.name.en : product.name.ar}
                      </p>

                      {/* Technical Specs */}
                      <div className="space-y-1 text-xs text-[#181917] py-2 border-y border-black/[0.06] mb-3 bg-[#FAF8F5] px-3 rounded-lg">
                        <div className="flex items-center justify-between">
                          <span className="text-[#6B685E]">{t.catalog.dimensionsLabel}</span>
                          <span className="font-semibold font-mono">{product.dimensions[language]}</span>
                        </div>

                        {product.inlayOrChipsSize && (
                          <div className="flex items-center justify-between">
                            <span className="text-[#6B685E]">
                              {product.category === 'marble-chips' ? t.catalog.chipsSizeLabel : t.catalog.inlayLabel}
                            </span>
                            <span className="font-medium">{product.inlayOrChipsSize[language]}</span>
                          </div>
                        )}

                        {product.sheetSize && (
                          <div className="flex items-center justify-between">
                            <span className="text-[#6B685E]">{t.catalog.sheetSizeLabel}</span>
                            <span className="font-medium">{product.sheetSize[language]}</span>
                          </div>
                        )}
                      </div>

                      <p className="text-xs text-[#6B685E] leading-relaxed line-clamp-2">
                        {product.description[language]}
                      </p>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="p-5 pt-0 flex items-center gap-2">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-white bg-[#181917] hover:bg-[#2A2B28] rounded-lg transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>{t.catalog.viewDetails}</span>
                    </button>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={t.catalog.orderSample}
                      className="p-2 text-[#15803D] bg-[#F0FDF4] hover:bg-[#DCFCE7] rounded-lg transition-colors border border-[#15803D]/25"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
