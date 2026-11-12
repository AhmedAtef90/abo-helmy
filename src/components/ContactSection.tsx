import React, { useState } from 'react';
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
  ExternalLink,
  ShieldCheck,
  Check
} from 'lucide-react';

interface ContactSectionProps {
  initialStoneInterest?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialStoneInterest = '' }) => {
  const { language, t } = useLanguage();

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

    // If a Google Apps Script Webhook is configured, dispatch headless POST:
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
        console.warn('Google Sheet webhook dispatch:', err);
      }
    }

    // Save to local log for reliability
    try {
      const stored = JSON.parse(localStorage.getItem('abohelmy_inquiries') || '[]');
      stored.push({
        id: Date.now(),
        date: new Date().toLocaleString(),
        ...formData,
      });
      localStorage.setItem('abohelmy_inquiries', JSON.stringify(stored));
    } catch {
      // fallback
    }

    setTimeout(() => {
      setSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const formattedWhatsAppInquiry =
    language === 'ar'
      ? `طلب تسعير وتوريد جديد من موقع أبو حلمي ستون الرسمي:\n` +
        `الاسم: ${formData.name}\n` +
        (formData.company ? `الشركة: ${formData.company}\n` : '') +
        `الهاتف: ${formData.phone}\n` +
        `البريد: ${formData.email}\n` +
        (formData.country ? `المدينة: ${formData.country}\n` : '') +
        (formData.stoneInterest ? `الخامة المطلوبة: ${formData.stoneInterest}\n` : '') +
        (formData.area ? `المساحة / الكمية: ${formData.area}\n` : '') +
        (formData.message ? `المواصفات: ${formData.message}\n` : '')
      : `New Procurement RFQ from ABO HELMY STONE Official Website:\n` +
        `Name: ${formData.name}\n` +
        (formData.company ? `Company: ${formData.company}\n` : '') +
        `Phone: ${formData.phone}\n` +
        `Email: ${formData.email}\n` +
        (formData.country ? `City: ${formData.country}\n` : '') +
        (formData.stoneInterest ? `Stone Material: ${formData.stoneInterest}\n` : '') +
        (formData.area ? `Area/Quantity: ${formData.area}\n` : '') +
        (formData.message ? `Details: ${formData.message}\n` : '');

  const whatsappInquiryUrl = getWhatsAppUrl(formattedWhatsAppInquiry);

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FAF9F6] hairline-b relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#8C754E] mb-2">
            {t.contact.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1B19] tracking-tight">
            {t.contact.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6B685E] leading-relaxed">
            {t.contact.subtitle}
          </p>

          {/* Enterprise Accreditation Badge */}
          <div className="mt-4 p-3.5 rounded-lg bg-[#F0EDE6] border border-black/[0.06] flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#8C754E] shrink-0" />
            <span className="text-xs font-medium text-[#1A1B19] leading-relaxed">
              {t.contact.googleFormConnected}
            </span>
          </div>
        </div>

        {/* Location & Landmark Bar */}
        <div className="mb-12 p-5 rounded-xl bg-white border border-black/[0.08] shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#8C754E] shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#8C754E] block">
                {t.contact.landmarkTitle}
              </span>
              <p className="text-sm sm:text-base font-bold text-[#1A1B19] mt-0.5">
                {COMPANY_CONFIG.contact.address[language]}
              </p>
            </div>
          </div>

          <a
            href={COMPANY_CONFIG.contact.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#1A1B19] bg-[#F3EFEA] hover:bg-[#EAE5DC] rounded-md transition-colors whitespace-nowrap shrink-0 border border-black/[0.08]"
          >
            <span>خرائط جوجل Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Inquiry & Sheet Form */}
          <div className="lg:col-span-7 bg-white rounded-xl p-6 sm:p-8 border border-black/[0.08] shadow-xs">
            {isSubmitted ? (
              <div className="py-8 text-center space-y-4 animate-fadeIn">
                <div className="w-12 h-12 bg-[#DCFCE7] text-[#15803D] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1A1B19]">
                    {t.contact.successTitle}
                  </h3>
                  <p className="text-sm text-[#6B685E] max-w-md mx-auto mt-1">
                    {t.contact.successDesc}
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#15803D] bg-[#F0FDF4] px-3 py-1.5 rounded-md border border-[#15803D]/20">
                  <Check className="w-3.5 h-3.5" />
                  <span>{t.contact.recordedInSheet}</span>
                </div>

                <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={whatsappInquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#15803D] hover:bg-[#166534] rounded-md transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{t.contact.sendDirectWhatsApp}</span>
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
                    className="w-full sm:w-auto px-4 py-2.5 text-xs font-medium text-[#1A1B19] hover:bg-[#F3EFEA] rounded-md transition-colors border border-black/[0.08]"
                  >
                    {t.contact.newInquiry}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#1A1B19] mb-1">
                      {t.contact.nameLabel} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.contact.namePlaceholder}
                      className={`w-full bg-[#FAF9F6] border rounded-md py-2 px-3 text-xs sm:text-sm text-[#1A1B19] focus:outline-none focus:ring-1 ${
                        errors.name ? 'border-red-500 ring-red-500' : 'border-black/[0.12] focus:border-[#8C754E]'
                      }`}
                    />
                    {errors.name && <span className="text-[11px] text-red-600">{errors.name}</span>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#1A1B19] mb-1">
                      {t.contact.companyLabel}
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder={t.contact.companyPlaceholder}
                      className="w-full bg-[#FAF9F6] border border-black/[0.12] focus:border-[#8C754E] rounded-md py-2 px-3 text-xs sm:text-sm text-[#1A1B19] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#1A1B19] mb-1">
                      {t.contact.emailLabel} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t.contact.emailPlaceholder}
                      className={`w-full bg-[#FAF9F6] border rounded-md py-2 px-3 text-xs sm:text-sm text-[#1A1B19] focus:outline-none focus:ring-1 ${
                        errors.email ? 'border-red-500 ring-red-500' : 'border-black/[0.12] focus:border-[#8C754E]'
                      }`}
                    />
                    {errors.email && <span className="text-[11px] text-red-600">{errors.email}</span>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#1A1B19] mb-1">
                      {t.contact.phoneLabel} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+20 100 000 0000"
                      className={`w-full bg-[#FAF9F6] border rounded-md py-2 px-3 text-xs sm:text-sm text-[#1A1B19] focus:outline-none focus:ring-1 ${
                        errors.phone ? 'border-red-500 ring-red-500' : 'border-black/[0.12] focus:border-[#8C754E]'
                      }`}
                    />
                    {errors.phone && <span className="text-[11px] text-red-600">{errors.phone}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#1A1B19] mb-1">
                      {t.contact.countryLabel}
                    </label>
                    <input
                      type="text"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder={t.contact.countryPlaceholder}
                      className="w-full bg-[#FAF9F6] border border-black/[0.12] focus:border-[#8C754E] rounded-md py-2 px-3 text-xs sm:text-sm text-[#1A1B19] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#1A1B19] mb-1">
                      {t.contact.projectTypeLabel}
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-[#FAF9F6] border border-black/[0.12] focus:border-[#8C754E] rounded-md py-2 px-3 text-xs sm:text-sm text-[#1A1B19] focus:outline-none"
                    >
                      <option value="compound">{t.contact.projectTypes.compound}</option>
                      <option value="commercial">{t.contact.projectTypes.commercial}</option>
                      <option value="landscape">{t.contact.projectTypes.landscape}</option>
                      <option value="wholesale">{t.contact.projectTypes.wholesale}</option>
                      <option value="other">{t.contact.projectTypes.other}</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#1A1B19] mb-1">
                      {t.contact.stoneInterestLabel}
                    </label>
                    <select
                      value={formData.stoneInterest}
                      onChange={(e) => setFormData({ ...formData, stoneInterest: e.target.value })}
                      className="w-full bg-[#FAF9F6] border border-black/[0.12] focus:border-[#8C754E] rounded-md py-2 px-3 text-xs sm:text-sm text-[#1A1B19] focus:outline-none"
                    >
                      <option value="">{t.contact.selectStoneOption}</option>
                      {PRODUCTS.map((prod) => (
                        <option key={prod.id} value={prod.name[language]}>
                          #{prod.id < 10 ? `0${prod.id}` : prod.id} - {prod.name[language]}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#1A1B19] mb-1">
                      {t.contact.areaLabel}
                    </label>
                    <input
                      type="text"
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      placeholder={t.contact.areaPlaceholder}
                      className="w-full bg-[#FAF9F6] border border-black/[0.12] focus:border-[#8C754E] rounded-md py-2 px-3 text-xs sm:text-sm text-[#1A1B19] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#1A1B19] mb-1">
                    {t.contact.messageLabel}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.contact.messagePlaceholder}
                    className="w-full bg-[#FAF9F6] border border-black/[0.12] focus:border-[#8C754E] rounded-md py-2 px-3 text-xs sm:text-sm text-[#1A1B19] focus:outline-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 text-xs sm:text-sm font-semibold text-white bg-[#1A1B19] hover:bg-[#2C2E2B] rounded-md transition-colors shadow-xs disabled:opacity-75"
                  >
                    <Send className="w-4 h-4" />
                    <span>{submitting ? t.contact.submitting : t.contact.submitBtn}</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Directory of Phones (+20) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-xl p-6 border border-black/[0.08] shadow-xs space-y-5">
              <h3 className="text-base font-bold text-[#1A1B19] border-b border-black/[0.06] pb-3">
                {t.contact.directContactTitle}
              </h3>

              {/* Mobiles with +20 International Code */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-[#8C754E] block">
                  {t.contact.phoneNumbers}
                </span>
                <div className="space-y-1.5">
                  {COMPANY_CONFIG.contact.mobiles.map((mob, i) => (
                    <a
                      key={i}
                      href={`tel:${mob.number}`}
                      className="p-2.5 rounded-lg bg-[#FAF9F6] border border-black/[0.06] hover:border-[#8C754E] transition-colors flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-2.5">
                        <Phone className="w-4 h-4 text-[#8C754E]" />
                        <div>
                          <span className="text-[11px] text-[#6B685E] block leading-tight">
                            {mob.label[language]}
                          </span>
                          <span className="text-xs font-bold text-[#1A1B19] font-mono group-hover:text-[#8C754E]" dir="ltr">
                            {mob.display}
                          </span>
                        </div>
                      </div>
                      <span className="text-[11px] text-[#8C754E] font-medium">اتصال</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* WhatsApp Hotline */}
              <div className="p-3.5 rounded-lg bg-[#F0FDF4] border border-[#15803D]/20 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <MessageCircle className="w-5 h-5 text-[#15803D]" />
                  <div>
                    <span className="text-[11px] text-[#6B685E] block leading-tight">
                      {t.contact.whatsAppHotline}
                    </span>
                    <span className="text-sm font-bold text-[#15803D] font-mono" dir="ltr">
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
                  className="px-3 py-1 text-xs font-semibold text-white bg-[#15803D] hover:bg-[#166534] rounded transition-colors"
                >
                  محادثة
                </a>
              </div>

              {/* Landline */}
              <div className="p-2.5 rounded-lg bg-[#FAF9F6] border border-black/[0.06] flex items-center justify-between">
                <span className="text-xs text-[#6B685E]">{t.contact.landline}</span>
                <a
                  href={`tel:${COMPANY_CONFIG.contact.landline.number}`}
                  className="text-xs font-bold text-[#1A1B19] font-mono hover:text-[#8C754E]"
                  dir="ltr"
                >
                  {COMPANY_CONFIG.contact.landline.display}
                </a>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-2 pt-2 border-t border-black/[0.06] text-xs text-[#6B685E]">
                <Clock className="w-3.5 h-3.5 text-[#8C754E] shrink-0 mt-0.5" />
                <span>{COMPANY_CONFIG.contact.workingHours[language]}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
