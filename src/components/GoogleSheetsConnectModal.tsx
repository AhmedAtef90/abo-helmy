import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  signInWithGoogleSheets, 
  signOutGoogle, 
  createAboHelmySpreadsheet, 
  linkExistingSpreadsheet, 
  getSavedSheetConfig, 
  clearSheetConfig,
  SheetConfig,
  auth
} from '../services/sheetsService';
import { 
  FileSpreadsheet, 
  CheckCircle2, 
  ExternalLink, 
  PlusCircle, 
  Link as LinkIcon, 
  LogOut, 
  X, 
  AlertCircle,
  Loader2,
  Table
} from 'lucide-react';
import { onAuthStateChanged, User } from 'firebase/auth';

interface GoogleSheetsConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfigChanged?: (config: SheetConfig | null) => void;
}

export const GoogleSheetsConnectModal: React.FC<GoogleSheetsConnectModalProps> = ({
  isOpen,
  onClose,
  onConfigChanged,
}) => {
  const { language } = useLanguage();
  const [currentUser, setCurrentUser] = useState<User | null>(auth.currentUser);
  const [sheetConfig, setSheetConfig] = useState<SheetConfig | null>(getSavedSheetConfig());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [existingUrlInput, setExistingUrlInput] = useState('');
  const [showExistingInput, setShowExistingInput] = useState(false);
  const [currentAccessToken, setCurrentAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const saved = getSavedSheetConfig();
    setSheetConfig(saved);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSignIn = async () => {
    setLoading(true);
    setError(null);
    try {
      const { user, accessToken } = await signInWithGoogleSheets();
      setCurrentUser(user);
      setCurrentAccessToken(accessToken);

      // If no sheet is currently configured, automatically create one!
      const existing = getSavedSheetConfig();
      if (!existing) {
        const newSheet = await createAboHelmySpreadsheet(accessToken);
        setSheetConfig(newSheet);
        if (onConfigChanged) onConfigChanged(newSheet);
      }
    } catch (err: any) {
      console.error('Sign in error:', err);
      setError(err?.message || 'حدث خطأ أثناء تسجيل الدخول بجوجل.');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateNewSheet = async () => {
    if (!currentAccessToken) {
      // Need re-auth or prompt
      await handleSignIn();
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const newSheet = await createAboHelmySpreadsheet(currentAccessToken);
      setSheetConfig(newSheet);
      if (onConfigChanged) onConfigChanged(newSheet);
    } catch (err: any) {
      setError(err?.message || 'فشل إنشاء جدول جديد.');
    } finally {
      setLoading(false);
    }
  };

  const handleLinkExisting = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!existingUrlInput.trim()) return;

    if (!currentAccessToken) {
      await handleSignIn();
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const linked = await linkExistingSpreadsheet(currentAccessToken, existingUrlInput.trim());
      setSheetConfig(linked);
      setShowExistingInput(false);
      setExistingUrlInput('');
      if (onConfigChanged) onConfigChanged(linked);
    } catch (err: any) {
      setError(err?.message || 'فشل ربط الجدول. تحقق من الرابط وصلاحيات الحساب.');
    } finally {
      setLoading(false);
    }
  };

  const handleDisconnect = async () => {
    setLoading(true);
    try {
      await signOutGoogle();
      clearSheetConfig();
      setCurrentUser(null);
      setSheetConfig(null);
      setCurrentAccessToken(null);
      if (onConfigChanged) onConfigChanged(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-[#FAF9F6] rounded-2xl border border-[#C5A059]/40 shadow-2xl overflow-hidden text-[#1A1B19]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Luxury Gold Header Accent */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#A0824B] via-[#E7D5AA] to-[#8C6D2E]" />

        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-black/[0.08] flex items-center justify-between bg-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0F9D58]/10 text-[#0F9D58] flex items-center justify-center border border-[#0F9D58]/20">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#1A1B19]">
                {language === 'ar' ? 'ربط طلبات الأسعار مع Google Sheets' : 'Connect RFQs to Google Sheets'}
              </h3>
              <p className="text-xs text-[#6B685E]">
                {language === 'ar' 
                  ? 'مزامنة وتخزين عروض الأسعار الواردة في جدول بياناتك السحابي' 
                  : 'Sync incoming price quotes to your cloud spreadsheet automatically'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#6B685E] hover:text-[#1A1B19] rounded-lg hover:bg-black/[0.04] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-5">
          {error && (
            <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          {/* Current Status */}
          {currentUser && sheetConfig ? (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white border border-[#0F9D58]/30 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0F9D58] animate-pulse" />
                    <span className="text-xs font-bold text-[#0F9D58]">
                      {language === 'ar' ? 'متصل بنجاح وجاهز لاستقبال الطلبات' : 'Connected & Ready'}
                    </span>
                  </div>
                  <span className="text-[11px] text-[#6B685E] font-mono" dir="ltr">
                    {currentUser.email}
                  </span>
                </div>

                <div className="pt-2 border-t border-black/[0.06] flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[11px] text-[#6B685E] block">
                      {language === 'ar' ? 'جدول البيانات النشط:' : 'Active Google Sheet:'}
                    </span>
                    <h4 className="text-sm font-bold text-[#1A1B19] mt-0.5">
                      {sheetConfig.spreadsheetTitle}
                    </h4>
                  </div>

                  <a
                    href={sheetConfig.sheetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#0F9D58] hover:bg-[#0B8043] rounded-lg transition-colors whitespace-nowrap shadow-xs"
                  >
                    <span>{language === 'ar' ? 'فتح الشيت' : 'Open Sheet'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCreateNewSheet}
                    disabled={loading}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#1A1B19] bg-white hover:bg-[#F3EFEA] border border-black/[0.1] rounded-lg transition-colors"
                  >
                    <PlusCircle className="w-3.5 h-3.5 text-[#8C754E]" />
                    <span>{language === 'ar' ? 'إنشاء شيت جديد' : 'Create New Sheet'}</span>
                  </button>

                  <button
                    onClick={() => setShowExistingInput(!showExistingInput)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#1A1B19] bg-white hover:bg-[#F3EFEA] border border-black/[0.1] rounded-lg transition-colors"
                  >
                    <LinkIcon className="w-3.5 h-3.5 text-[#8C754E]" />
                    <span>{language === 'ar' ? 'ربط شيت آخر' : 'Link Another'}</span>
                  </button>
                </div>

                <button
                  onClick={handleDisconnect}
                  disabled={loading}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>{language === 'ar' ? 'فصل الربط' : 'Disconnect'}</span>
                </button>
              </div>

              {/* Form to link existing */}
              {showExistingInput && (
                <form onSubmit={handleLinkExisting} className="p-3.5 bg-white rounded-xl border border-black/[0.08] space-y-2.5">
                  <label className="block text-xs font-medium text-[#1A1B19]">
                    {language === 'ar' ? 'رابط جدول Google Sheet أو الـ ID:' : 'Google Sheet URL or ID:'}
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={existingUrlInput}
                      onChange={(e) => setExistingUrlInput(e.target.value)}
                      placeholder="https://docs.google.com/spreadsheets/d/..."
                      className="flex-1 bg-[#FAF9F6] border border-black/[0.12] rounded-lg py-1.5 px-3 text-xs text-[#1A1B19] focus:outline-none focus:border-[#0F9D58]"
                    />
                    <button
                      type="submit"
                      disabled={loading || !existingUrlInput.trim()}
                      className="px-3 py-1.5 text-xs font-semibold text-white bg-[#1A1B19] hover:bg-[#2C2E2B] rounded-lg disabled:opacity-50"
                    >
                      {loading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : language === 'ar' ? 'ربط' : 'Link'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-white border border-black/[0.08] text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#FAF9F6] border border-[#C5A059]/30 flex items-center justify-center mx-auto text-[#8C754E]">
                  <Table className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-[#1A1B19]">
                    {language === 'ar' ? 'تسجيل الدخول لربط Google Sheets' : 'Sign in to link Google Sheets'}
                  </h4>
                  <p className="text-xs text-[#6B685E] max-w-sm mx-auto mt-1 leading-relaxed">
                    {language === 'ar'
                      ? 'قم بربط حساب Google الخاص بك ليتم حفظ كل طلبات تسعير الرخام وشيتات اللاندسكيب فوراً في جدول سحابي مرتب بالأعمدة والتواريخ.'
                      : 'Connect your Google account to automatically store incoming natural stone & landscape RFQs into your private cloud spreadsheet.'}
                  </p>
                </div>

                {/* Google Sign-in Button */}
                <div className="pt-2 flex justify-center">
                  <button
                    onClick={handleSignIn}
                    disabled={loading}
                    className="inline-flex items-center gap-3 px-5 py-2.5 rounded-lg bg-white hover:bg-[#F3EFEA] border border-black/[0.15] text-xs sm:text-sm font-semibold text-[#1A1B19] shadow-sm transition-all hover:shadow"
                  >
                    {loading ? (
                      <Loader2 className="w-4 h-4 animate-spin text-[#0F9D58]" />
                    ) : (
                      <svg className="w-4 h-4" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.17 0 9.96 0 12s.45 3.83 1.25 5.42l4.03-3.15z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                        />
                      </svg>
                    )}
                    <span>{language === 'ar' ? 'تسجيل الدخول بحساب Google' : 'Sign in with Google'}</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Benefits summary list */}
          <div className="pt-2 border-t border-black/[0.06] grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px] text-[#6B685E]">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0F9D58] shrink-0" />
              <span>{language === 'ar' ? 'تسجيل مباشر للعملاء' : 'Live Client Logging'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0F9D58] shrink-0" />
              <span>{language === 'ar' ? 'تنسيق أعمدة جاهز' : 'Pre-formatted Columns'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0F9D58] shrink-0" />
              <span>{language === 'ar' ? 'تكامل سحابي مشفر' : 'Encrypted Cloud Sync'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
