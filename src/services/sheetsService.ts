/**
 * Google Sheets Service for ABO HELMY STONE
 * Manages Google OAuth 2.0 and Google Sheets v4 API
 */

import { initializeApp, getApps, getApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider, 
  onAuthStateChanged, 
  signOut,
  User 
} from 'firebase/auth';
import firebaseConfig from '../../firebase-applet-config.json';

// Initialize Firebase App singleton
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/spreadsheets');

// In-memory token cache
let cachedAccessToken: string | null = null;
let isSigningIn = false;

export interface QuoteData {
  name: string;
  phone: string;
  email: string;
  company?: string;
  country?: string;
  projectType: string;
  stoneInterest: string;
  area?: string;
  message?: string;
}

export interface SheetConfig {
  spreadsheetId: string;
  spreadsheetTitle: string;
  sheetUrl: string;
  connectedAt: string;
}

const STORAGE_KEY_CONFIG = 'abohelmy_sheets_config';
const STORAGE_KEY_FALLBACK_QUOTES = 'abohelmy_inquiries';

/**
 * Initializes Firebase Auth state listener
 */
export const initAuthListener = (
  onSuccess: (user: User, token: string) => void,
  onSignedOut: () => void
) => {
  return onAuthStateChanged(auth, async (user) => {
    if (user && cachedAccessToken) {
      onSuccess(user, cachedAccessToken);
    } else if (!user) {
      cachedAccessToken = null;
      onSignedOut();
    }
  });
};

/**
 * Sign in with Google to obtain access token with Google Sheets scope
 */
export const signInWithGoogleSheets = async (): Promise<{ user: User; accessToken: string }> => {
  try {
    isSigningIn = true;
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const accessToken = credential?.accessToken;

    if (!accessToken) {
      throw new Error('لم يتم استلام مفتاح الصلاحية من جوجل.');
    }

    cachedAccessToken = accessToken;
    return { user: result.user, accessToken };
  } finally {
    isSigningIn = false;
  }
};

/**
 * Sign out and clear cached token
 */
export const signOutGoogle = async (): Promise<void> => {
  await signOut(auth);
  cachedAccessToken = null;
};

/**
 * Retrieve cached token in memory
 */
export const getCachedToken = (): string | null => {
  return cachedAccessToken;
};

/**
 * Retrieve saved Sheet configuration from local storage
 */
export const getSavedSheetConfig = (): SheetConfig | null => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_CONFIG);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
};

/**
 * Save Sheet configuration to local storage
 */
export const saveSheetConfig = (config: SheetConfig): void => {
  localStorage.setItem(STORAGE_KEY_CONFIG, JSON.stringify(config));
};

/**
 * Remove Sheet configuration
 */
export const clearSheetConfig = (): void => {
  localStorage.removeItem(STORAGE_KEY_CONFIG);
};

/**
 * Creates a brand new Google Spreadsheet for ABO HELMY STONE Price Quotes
 */
export const createAboHelmySpreadsheet = async (accessToken: string): Promise<SheetConfig> => {
  const title = `أبو حلمي ستون — سجل عروض الأسعار والطلبات (${new Date().toLocaleDateString('ar-EG')})`;
  
  const response = await fetch('https://sheets.googleapis.com/v4/spreadsheets', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      properties: {
        title,
      },
      sheets: [
        {
          properties: {
            title: 'طلبات عروض الأسعار',
            gridProperties: {
              frozenRowCount: 1,
            },
          },
        },
      ],
    }),
  });

  if (!response.ok) {
    const err = await response.json();
    throw new Error(err?.error?.message || 'تعذر إنشاء جدول البيانات في Google Sheets');
  }

  const data = await response.json();
  const spreadsheetId = data.spreadsheetId;

  // Add initial headers with gold luxury styling
  const headers = [
    'تاريخ الطلب',
    'الاسم الكامل',
    'رقم الهاتف',
    'البريد الإلكتروني',
    'الشركة / الجهة',
    'المدينة / الدولة',
    'نوع المشروع',
    'الخامة / المنتج المطلوب',
    'المساحة التقديرية (م²)',
    'تفاصيل وملاحظات الطلب',
    'حالة المتابعة',
  ];

  await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/A1:append?valueInputOption=USER_ENTERED`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        values: [headers],
      }),
    }
  );

  const config: SheetConfig = {
    spreadsheetId,
    spreadsheetTitle: title,
    sheetUrl: `https://docs.google.com/spreadsheets/d/${spreadsheetId}`,
    connectedAt: new Date().toISOString(),
  };

  saveSheetConfig(config);
  return config;
};

/**
 * Verify and link an existing Google Spreadsheet by ID or URL
 */
export const linkExistingSpreadsheet = async (
  accessToken: string,
  spreadsheetIdOrUrl: string
): Promise<SheetConfig> => {
  // Extract spreadsheetId from URL or raw ID
  let id = spreadsheetIdOrUrl.trim();
  const match = id.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
  if (match && match[1]) {
    id = match[1];
  }

  const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    const err = await response.json();
    throw new Error(err?.error?.message || 'تعذر الوصول إلى جدول البيانات المحدد. تأكد من صحة الرابط والصلاحيات.');
  }

  const data = await response.json();
  const title = data.properties?.title || 'Google Sheet';

  const config: SheetConfig = {
    spreadsheetId: id,
    spreadsheetTitle: title,
    sheetUrl: `https://docs.google.com/spreadsheets/d/${id}`,
    connectedAt: new Date().toISOString(),
  };

  saveSheetConfig(config);
  return config;
};

/**
 * Appends a new price quote row to the specified Google Spreadsheet
 */
export const appendQuoteToSpreadsheet = async (
  accessToken: string,
  spreadsheetId: string,
  quote: QuoteData
): Promise<boolean> => {
  const row = [
    new Date().toLocaleString('ar-EG', { timeZone: 'Africa/Cairo' }),
    quote.name,
    quote.phone,
    quote.email,
    quote.company || '—',
    quote.country || '—',
    quote.projectType || '—',
    quote.stoneInterest || 'عام / استفسار خامات',
    quote.area || '—',
    quote.message || '—',
    'جديد (قيد المتابعة)',
  ];

  const response = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/A1:append?valueInputOption=USER_ENTERED`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        values: [row],
      }),
    }
  );

  if (!response.ok) {
    const err = await response.json();
    throw new Error(err?.error?.message || 'فشل تسجيل الطلب في Google Sheets');
  }

  return true;
};

/**
 * Save locally as fail-safe backup
 */
export const saveLocalQuote = (quote: QuoteData): void => {
  try {
    const existing = JSON.parse(localStorage.getItem(STORAGE_KEY_FALLBACK_QUOTES) || '[]');
    existing.unshift({
      id: Date.now(),
      timestamp: new Date().toISOString(),
      ...quote,
    });
    localStorage.setItem(STORAGE_KEY_FALLBACK_QUOTES, JSON.stringify(existing.slice(0, 50)));
  } catch (err) {
    console.warn('Local storage write error:', err);
  }
};
