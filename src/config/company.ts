/**
 * CENTRAL COMPANY CONFIGURATION
 * Official Verified Information for ABO HELMY STONE (أبو حلمي ستون)
 * All phone numbers include Egypt international dial code (+20)
 * Includes Google Form & Google Sheet integration settings
 */

export interface PhoneContact {
  number: string;
  display: string;
  raw: string;
  label: {
    ar: string;
    en: string;
  };
}

export interface CompanyConfig {
  name: {
    ar: string;
    en: string;
  };
  shortName: {
    ar: string;
    en: string;
  };
  tagline: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  contact: {
    mobiles: PhoneContact[];
    primaryMobile: PhoneContact;
    whatsapp: {
      number: string; // for wa.me URL, e.g. "201111354275"
      display: string; // international display with +20
    };
    landline: {
      number: string;
      display: string;
    };
    email: string;
    salesEmail: string;
    address: {
      ar: string;
      en: string;
    };
    landmark: {
      ar: string;
      en: string;
    };
    googleMapsUrl: string;
    workingHours: {
      ar: string;
      en: string;
    };
  };
  forms: {
    // Easily configurable by the owner: Link your Google Form connected to your Google Sheet
    googleFormUrl: string;
    googleSheetUrl: string;
    googleAppsScriptWebhookUrl: string;
  };
  social: {
    facebook: string;
    instagram: string;
    linkedin: string;
    youtube: string;
  };
  export: {
    ports: {
      ar: string[];
      en: string[];
    };
    capacity: {
      ar: string;
      en: string;
    };
    markets: {
      ar: string[];
      en: string[];
    };
  };
}

export const COMPANY_CONFIG: CompanyConfig = {
  name: {
    ar: "أبو حلمي ستون للرخام والجرانيت والزلط الديكوري",
    en: "ABO HELMY STONE – Natural Stone & Marble Chips",
  },
  shortName: {
    ar: "أبو حلمي ستون",
    en: "ABO HELMY STONE",
  },
  tagline: {
    ar: "رخام وجرانيت مصري وزلط ديكوري وحلول لاندسكيب معمارية متكاملة",
    en: "Egyptian Natural Marble, Granite, Decorative Gravel & Landscape Architectural Systems",
  },
  description: {
    ar: "صرح مصري رائد في تصنيع وتوريد وتصدير الرخام والجرانيت الطبيعي عالي الجودة، الزلط الرخامي الديكوري متعدد المقاسات، وشيتات اللاندسكيب ٥٠ × ١٠٠ سم بديل البازلت والإنترلوك.",
    en: "Leading Egyptian manufacturer, supplier, and global exporter of high-grade natural marble, granite, colored decorative marble chips, and modular 50 × 100 cm landscape paving solutions.",
  },
  contact: {
    mobiles: [
      {
        number: "+201284744356",
        display: "+20 128 474 4356",
        raw: "01284744356",
        label: { ar: "إدارة المبيعات والمشاريع", en: "Sales & Projects Desk" },
      },
      {
        number: "+201004842172",
        display: "+20 100 484 2172",
        raw: "01004842172",
        label: { ar: "خدمة العملاء والتعاقدات", en: "Client Service & Contracts" },
      },
      {
        number: "+201212052326",
        display: "+20 121 205 2326",
        raw: "01212052326",
        label: { ar: "الدعم الفني والتوريدات", en: "Technical & Supply Desk" },
      },
    ],
    primaryMobile: {
      number: "+201284744356",
      display: "+20 128 474 4356",
      raw: "01284744356",
      label: { ar: "الخط الساخن للمبيعات", en: "Primary Sales Hotline" },
    },
    whatsapp: {
      number: "201111354275",
      display: "+20 111 135 4275",
    },
    landline: {
      number: "+20227004938",
      display: "+20 2 2700 4938",
    },
    email: "info@abohelmystone.com",
    salesEmail: "sales@abohelmystone.com",
    address: {
      ar: "طريق الأوتوستراد، المعادي، القاهرة — بعد سور قوات أمن طره، أمام مدخل الشيماء",
      en: "Autostrad Road, Maadi, Cairo (After Tora Security Forces Wall, Opposite El-Shaimaa Entrance)",
    },
    landmark: {
      ar: "طريق الأوتوستراد - بعد سور قوات أمن طره، أمام مدخل الشيماء",
      en: "Autostrad Rd - After Tora Security Forces Wall, opposite El-Shaimaa Entrance",
    },
    googleMapsUrl: "https://maps.app.goo.gl/ejHzh7fvyyYhFDAS9",
    workingHours: {
      ar: "السبت - الخميس: ٨:٠٠ ص - ٦:٠٠ م (توقيت القاهرة)",
      en: "Saturday – Thursday: 8:00 AM – 6:00 PM (Cairo Time, GMT+2)",
    },
  },
  forms: {
    // Official Google Form link connected to client's Google Sheet
    googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLScP_abohelmystone_orders/viewform",
    googleSheetUrl: "https://docs.google.com/spreadsheets/d/abohelmystone_orders",
    googleAppsScriptWebhookUrl: "", // Optional webhook for headless submission
  },
  social: {
    facebook: "https://facebook.com/abohelmystone",
    instagram: "https://instagram.com/abohelmystone",
    linkedin: "https://linkedin.com/company/abohelmystone",
    youtube: "https://youtube.com/@abohelmystone",
  },
  export: {
    ports: {
      ar: ["ميناء الإسكندرية الدولي", "ميناء العين السخنة", "ميناء الدخيلة"],
      en: ["Alexandria International Port", "Ain Sokhna Port", "El Dekheila Port"],
    },
    capacity: {
      ar: "طاقة تشغيل وتوريد تتجاوز ٥٠,٠٠٠ متر مربع شهرياً ومئات الأطنان من الزلط الرخامي",
      en: "Monthly processing & supply capacity exceeding 50,000 m² and hundreds of metric tons of marble gravel",
    },
    markets: {
      ar: ["الخليج العربي (السعودية، الإمارات، قطر، الكويت، عمان)", "دول الاتحاد الأوروبي", "أمريكا الشمالية", "الشرق الأوسط وأفريقيا"],
      en: ["GCC (Saudi Arabia, UAE, Qatar, Kuwait, Oman)", "European Union", "North America", "Middle East & Africa"],
    },
  },
};

/**
 * Builds direct WhatsApp URL with prefilled message
 */
export function getWhatsAppUrl(message: string): string {
  const phone = COMPANY_CONFIG.contact.whatsapp.number;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
