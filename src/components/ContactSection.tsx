import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_CONFIG, getWhatsAppUrl } from '../config/company';
import { PRODUCTS } from '../data/products';
import { 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  ExternalLink
} from 'lucide-react';
import { 
  appendQuoteToSpreadsheet, 
  saveLocalQuote, 
  getSavedSheetConfig, 
  getCachedToken
} from '../services/sheetsService';

interface ContactSectionProps {
  initialStoneInterest?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialStoneInterest = '' }) => {
  const { language } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    stoneInterest: initialStoneInterest || '',
    area: '',
    projectType: 'compound',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (initialStoneInterest) {
      setFormData((prev) => ({ ...prev, stoneInterest: initialStoneInterest }));
    }
  }, [initialStoneInterest]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = language === 'ar' ? 'الاسم مطلوب' : 'Full Name is required';
    }
    if (!formData.phone.trim()) {
      errs.phone = language === 'ar' ? 'رقم الهاتف مطلوب' : 'Phone number is required';
    }
    if (!formData.email.trim()) {
      errs.email = language === 'ar' ? 'البريد الإلكتروني مطلوب' : 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = language === 'ar' ? 'صيغة البريد غير صحيحة' : 'Invalid email format';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);

    // 1. Silent Google Sheet submission in background if authenticated
    const token = getCachedToken();
    const config = getSavedSheetConfig();

    if (token && config) {
      try {
        await appendQuoteToSpreadsheet(token, config.spreadsheetId, formData);
      } catch (err) {
        console.warn('Background Google Sheet sync:', err);
      }
    }

    // 2. Headless Apps Script webhook fallback (silently)
    if (COMPANY_CONFIG.forms.googleAppsScriptWebhookUrl) {
      try {
        await fetch(COMPANY_CONFIG.forms.googleAppsScriptWebhookUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            timestamp: new Date().toISOString(),
            ...formData,
          }),
        });
      } catch (err) {
        console.warn('Silent webhook dispatch:', err);
      }
    }

    // 3. Persistent local database log
    saveLocalQuote(formData);

    setSubmitting(false);
    setIsSubmitted(true);
  };

  const formattedWhatsAppInquiry =
    language === 'ar'
      ? `طلب تسعير وتوريد جديد من موقع أبو حلمي ستون الرسمي:\n` +
        `• الاسم: ${formData.name}\n` +
        (formData.company ? `• الشركة: ${formData.company}\n` : '') +
        `• الهاتف: ${formData.phone}\n` +
        `• البريد: ${formData.email}\n` +
        (formData.country ? `• المدينة/الدولة: ${formData.country}\n` : '') +
        (formData.stoneInterest ? `• الخامة: ${formData.stoneInterest}\n` : '') +
        (formData.area ? `• المساحة: ${formData.area} م²\n` : '') +
        (formData.message ? `• تفاصيل: ${formData.message}\n` : '')
      : `New Procurement RFQ from ABO HELMY STONE:\n` +
        `• Name: ${formData.name}\n` +
        (formData.company ? `• Company: ${formData.company}\n` : '') +
        `• Phone: ${formData.phone}\n` +
        `• Email: ${formData.email}\n` +
        (formData.country ? `• City/Country: ${formData.country}\n` : '') +
        (formData.stoneInterest ? `• Stone: ${formData.stoneInterest}\n` : '') +
        (formData.area ? `• Area: ${formData.area} m²\n` : '') +
        (formData.message ? `• Details: ${formData.message}\n` : '');

  const whatsappInquiryUrl = getWhatsAppUrl(formattedWhatsAppInquiry);

  return (
    <section id="contact" className="py-16 lg:py-24 bg-[#FAF8F5] hairline-b relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Streamlined Section Header - Client-Facing Only */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#C5A059] mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            <span>{language === 'ar' ? 'طلب تسعير ومواصفات' : 'Procurement & Quotation'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#181917] tracking-tight">
            {language === 'ar' ? 'طلب عرض سعر فوري ومباشر' : 'Direct Request for Quotation'}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#6B685E] leading-relaxed">
            {language === 'ar'
              ? 'فريقنا الهندسي جاهز لتقديم عروض الأسعار والمواصفات الفنية المعتمدة للمشاريع والكميات.'
              : 'Our architectural team provides certified pricing and specifications tailored to your project.'}
          </p>
        </div>

        {/* Streamlined Location Bar */}
        <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-white border border-black/[0.08] shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] border border-[#C5A059]/30 flex items-center justify-center shrink-0 mt-0.5">
              <MapPin className="w-4 h-4 text-[#C5A059]" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059] block">
                {language === 'ar' ? 'المقر والمعرض الرئيسي' : 'Headquarters & Showroom'}
              </span>
              <p className="text-xs sm:text-sm font-semibold text-[#181917] mt-0.5">
                {COMPANY_CONFIG.contact.address[language]}
              </p>
            </div>
          </div>

          <a
            href={COMPANY_CONFIG.contact.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#181917] bg-[#F4EFE6] hover:bg-[#EAE5DC] rounded-lg transition-colors whitespace-nowrap shrink-0 border border-black/[0.06]"
          >
            <span>Google Maps</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-black/[0.08] shadow-xs">
            {isSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 bg-[#DCFCE7] text-[#15803D] rounded-full flex items-center justify-center mx-auto shadow-xs">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#181917]">
                    {language === 'ar' ? 'تم استلام طلبكم بنجاح' : 'Quotation Request Received'}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B685E] max-w-md mx-auto mt-2 leading-relaxed">
                    {language === 'ar'
                      ? 'سيقوم مهندس المبيعات بالتواصل معكم بالعرض المعتمد والمواصفات الفنية في أقرب وقت.'
                      : 'Our project engineer will contact you shortly with the certified quotation and technical specifications.'}
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={whatsappInquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#15803D] hover:bg-[#166534] rounded-lg transition-colors shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{language === 'ar' ? 'إرسال نسخة عبر الواتساب' : 'Send Copy via WhatsApp'}</span>
                  </a>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        company: '',
                        email: '',
                        phone: '',
                        country: '',
                        stoneInterest: '',
                        area: '',
                        projectType: 'compound',
                        message: '',
                      });
                    }}
                    className="w-full sm:w-auto px-4 py-2.5 text-xs font-medium text-[#181917] hover:bg-[#F4EFE6] rounded-lg transition-colors border border-black/[0.08]"
                  >
                    {language === 'ar' ? 'طلب عرض سعر آخر' : 'Submit Another RFQ'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#181917] mb-1">
                      {language === 'ar' ? 'الاسم الكامل' : 'Full Name'} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={language === 'ar' ? 'م. أحمد أو اسم الشركة' : 'Engineer / Company Name'}
                      className={`w-full bg-[#FAF8F5] border rounded-lg py-2 px-3 text-xs sm:text-sm text-[#181917] focus:outline-none focus:ring-1 ${
                        errors.name ? 'border-red-500 ring-red-500' : 'border-black/[0.12] focus:border-[#C5A059]'
                      }`}
                    />
                    {errors.name && <span className="text-[11px] text-red-600">{errors.name}</span>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#181917] mb-1">
                      {language === 'ar' ? 'الشركة / المكتب الاستشاري' : 'Company / Consultant'}
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder={language === 'ar' ? 'اختياري' : 'Optional'}
                      className="w-full bg-[#FAF8F5] border border-black/[0.12] focus:border-[#C5A059] rounded-lg py-2 px-3 text-xs sm:text-sm text-[#181917] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#181917] mb-1">
                      {language === 'ar' ? 'البريد الإلكتروني' : 'Email Address'} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="client@domain.com"
                      className={`w-full bg-[#FAF8F5] border rounded-lg py-2 px-3 text-xs sm:text-sm text-[#181917] focus:outline-none focus:ring-1 ${
                        errors.email ? 'border-red-500 ring-red-500' : 'border-black/[0.12] focus:border-[#C5A059]'
                      }`}
                    />
                    {errors.email && <span className="text-[11px] text-red-600">{errors.email}</span>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#181917] mb-1">
                      {language === 'ar' ? 'رقم الهاتف / الواتساب' : 'Phone / WhatsApp'} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+20 100 000 0000"
                      className={`w-full bg-[#FAF8F5] border rounded-lg py-2 px-3 text-xs sm:text-sm text-[#181917] focus:outline-none focus:ring-1 ${
                        errors.phone ? 'border-red-500 ring-red-500' : 'border-black/[0.12] focus:border-[#C5A059]'
                      }`}
                    />
                    {errors.phone && <span className="text-[11px] text-red-600">{errors.phone}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#181917] mb-1">
                      {language === 'ar' ? 'الخامة أو المنتج المطلوب' : 'Stone Material'}
                    </label>
                    <select
                      value={formData.stoneInterest}
                      onChange={(e) => setFormData({ ...formData, stoneInterest: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-black/[0.12] focus:border-[#C5A059] rounded-lg py-2 px-3 text-xs sm:text-sm text-[#181917] focus:outline-none"
                    >
                      <option value="">{language === 'ar' ? '— اختر الخامة المطلوبة —' : '— Select Material —'}</option>
                      {PRODUCTS.map((prod) => (
                        <option key={prod.id} value={prod.name[language]}>
                          #{prod.id < 10 ? `0${prod.id}` : prod.id} - {prod.name[language]}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#181917] mb-1">
                      {language === 'ar' ? 'المساحة التقريبية (م²)' : 'Approx. Area (m²)'}
                    </label>
                    <input
                      type="text"
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      placeholder="مثال: 500 م²"
                      className="w-full bg-[#FAF8F5] border border-black/[0.12] focus:border-[#C5A059] rounded-lg py-2 px-3 text-xs sm:text-sm text-[#181917] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#181917] mb-1">
                    {language === 'ar' ? 'تفاصيل ومواصفات المشروع' : 'Project Specifications'}
                  </label>
                  <textarea
                    rows={2}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={language === 'ar' ? 'أبعاد خاصة، نوع التشطيب، موقع التوريد...' : 'Custom dimensions, finish, delivery location...'}
                    className="w-full bg-[#FAF8F5] border border-black/[0.12] focus:border-[#C5A059] rounded-lg py-2 px-3 text-xs sm:text-sm text-[#181917] focus:outline-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 text-xs sm:text-sm font-semibold text-white bg-[#181917] hover:bg-[#2A2B28] rounded-xl transition-all shadow-sm hover:shadow disabled:opacity-75"
                  >
                    <Send className="w-4 h-4 text-[#C5A059]" />
                    <span>
                      {submitting 
                        ? language === 'ar' ? 'جاري الإرسال والتسجيل...' : 'Recording RFQ...'
                        : language === 'ar' ? 'إرسال طلب التسعير المباشر' : 'Submit Procurement RFQ'}
                    </span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Directory of Direct Hotlines (+20) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-black/[0.08] shadow-xs space-y-4">
              <h3 className="text-sm sm:text-base font-bold text-[#181917] border-b border-black/[0.06] pb-3 flex items-center justify-between">
                <span>{language === 'ar' ? 'الاتصال المباشر بإدارة التوريد' : 'Direct Supply Desk'}</span>
                <span className="text-[11px] font-mono text-[#C5A059] font-medium">+20 Egypt</span>
              </h3>

              {/* Mobiles with +20 */}
              <div className="space-y-1.5">
                {COMPANY_CONFIG.contact.mobiles.map((mob, i) => (
                  <a
                    key={i}
                    href={`tel:${mob.number}`}
                    className="p-2.5 rounded-xl bg-[#FAF8F5] border border-black/[0.05] hover:border-[#C5A059]/50 transition-colors flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2.5">
                      <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                      <div>
                        <span className="text-[11px] text-[#6B685E] block leading-tight">
                          {mob.label[language]}
                        </span>
                        <span className="text-xs font-bold text-[#181917] font-sans tabular-nums tracking-tight group-hover:text-[#C5A059]" dir="ltr">
                          {mob.display}
                        </span>
                      </div>
                    </div>
                    <span className="text-[11px] text-[#C5A059] font-medium">اتصال</span>
                  </a>
                ))}
              </div>

              {/* WhatsApp Hotline */}
              <div className="p-3 rounded-xl bg-[#F0FDF4] border border-[#15803D]/20 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <MessageCircle className="w-4 h-4 text-[#15803D]" />
                  <div>
                    <span className="text-[10px] text-[#6B685E] block leading-tight">
                      {language === 'ar' ? 'واتساب المبيعات المباشر' : 'WhatsApp Hotline'}
                    </span>
                    <span className="text-xs font-bold text-[#15803D] font-sans tabular-nums tracking-tight" dir="ltr">
                      {COMPANY_CONFIG.contact.whatsapp.display}
                    </span>
                  </div>
                </div>
                <a
                  href={getWhatsAppUrl(
                    language === 'ar'
                      ? 'السلام عليكم أبو حلمي ستون، أود الاستفسار عن توريد الرخام والجرانيت والزلط.'
                      : 'Hello ABO HELMY STONE, I would like to inquire about stone supply.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 text-xs font-semibold text-white bg-[#15803D] hover:bg-[#166534] rounded-lg transition-colors"
                >
                  محادثة
                </a>
              </div>

              {/* Working Hours */}
              <div className="flex items-center gap-2 pt-2 border-t border-black/[0.06] text-xs text-[#6B685E]">
                <Clock className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                <span>{COMPANY_CONFIG.contact.workingHours[language]}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
