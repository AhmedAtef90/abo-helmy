/**
 * OFFICIAL PRODUCT CATALOG DATA
 * Exactly 13 products with exact confirmed names, specs, and image mapping.
 * Image 1.jpeg belongs to Product 1, ..., Image 13.jpeg belongs to Product 13.
 */

export type ProductCategory = 
  | 'all' 
  | 'mosaic-sheets' 
  | 'flagstone' 
  | 'marble-chips' 
  | 'translucent';

export interface ProductItem {
  id: number;
  image: string;
  name: {
    ar: string;
    en: string;
  };
  category: ProductCategory;
  categoryLabel: {
    ar: string;
    en: string;
  };
  dimensions: {
    ar: string;
    en: string;
  };
  inlayOrChipsSize?: {
    ar: string;
    en: string;
  };
  sheetSize?: {
    ar: string;
    en: string;
  };
  specs: {
    ar: string[];
    en: string[];
  };
  description: {
    ar: string;
    en: string;
  };
  features: {
    ar: string[];
    en: string[];
  };
  applications: {
    ar: string[];
    en: string[];
  };
  translucent?: boolean;
}

export const PRODUCTS: ProductItem[] = [
  {
    id: 1,
    image: "/1.jpeg",
    name: {
      ar: "صني منيا",
      en: "Sunny Minya Mosaic",
    },
    category: "mosaic-sheets",
    categoryLabel: {
      ar: "شيتات وبلاطات موزاييك",
      en: "Mosaic Sheets & Tiles",
    },
    dimensions: {
      ar: "٥ × ٥ سم",
      en: "5 × 5 cm",
    },
    inlayOrChipsSize: {
      ar: "من ١ إلى ٣ سم",
      en: "1–3 cm",
    },
    specs: {
      ar: [
        "المقاس: ٥ × ٥ سم",
        "مطعم بزلط صني منيا",
        "مقاس الزلط: من ١ إلى ٣ سم",
      ],
      en: [
        "Piece Size: 5 × 5 cm",
        "Inlaid with Sunny Minya stone chips",
        "Chips Measurement: 1–3 cm",
      ],
    },
    description: {
      ar: "بلاطات موزاييك صني منيا مقاس ٥ × ٥ سم، مطعمة بزلط صني منيا الطبيعي بمقاس من ١ إلى ٣ سم بتدرجات لونية دافئة.",
      en: "Sunny Minya Mosaic tiles in 5 × 5 cm pieces, expertly inlaid with natural Sunny Minya stone chips measuring 1–3 cm with warm earthy tones.",
    },
    features: {
      ar: ["تطعيم دقيق متماسك", "لون صني دافئ متناسق", "مقاوم للعوامل الجوية"],
      en: ["Precise bonded inlay", "Warm consistent Sunny hue", "Weather resistant"],
    },
    applications: {
      ar: ["الأرضيات الديكورية", "الممرات والحدائق", "الحوائط الديكورية"],
      en: ["Decorative Flooring", "Garden Walkways", "Accent Walls"],
    },
  },
  {
    id: 2,
    image: "/2.jpeg",
    name: {
      ar: "برون مصري",
      en: "Egyptian Brown Mosaic",
    },
    category: "mosaic-sheets",
    categoryLabel: {
      ar: "شيتات وبلاطات موزاييك",
      en: "Mosaic Sheets & Tiles",
    },
    dimensions: {
      ar: "٥ × ٥ سم",
      en: "5 × 5 cm",
    },
    inlayOrChipsSize: {
      ar: "من ١ إلى ٣ سم (أبيض تركي)",
      en: "1–3 cm (Turkish White)",
    },
    sheetSize: {
      ar: "٥٠ سم × متر (٥٠ × ١٠٠ سم)",
      en: "50 × 100 cm (50 cm × 1 m)",
    },
    specs: {
      ar: [
        "مقاس البلاطة: ٥ × ٥ سم",
        "مطعم بأبيض تركي",
        "مقاس التطعيم: من ١ إلى ٣ سم",
        "مقاس الشيت: ٥٠ سم × متر",
      ],
      en: [
        "Tile Piece Size: 5 × 5 cm",
        "Inlaid with Turkish White stone",
        "Inlay Measurement: 1–3 cm",
        "Sheet Size: 50 × 100 cm",
      ],
    },
    description: {
      ar: "بلاطات برون مصري مقاس ٥ × ٥ سم مطعمة بأبيض تركي فاخر مقاس ١–٣ سم، مجهزة على شيتات قياسية ٥٠ × ١٠٠ سم للتركيب المعماري السريع.",
      en: "Egyptian Brown mosaic 5 × 5 cm pieces with luxurious Turkish White stone inlay measuring 1–3 cm, pre-assembled on 50 × 100 cm standard sheets for rapid architectural installation.",
    },
    features: {
      ar: ["شيت جاهز ٥٠ × ١٠٠ سم", "تباين لوني أنيق بين البني والأبيض", "سرعة وكفاءة في التركيب"],
      en: ["Pre-assembled 50 × 100 cm sheet", "Rich contrast of brown and white", "Fast and efficient installation"],
    },
    applications: {
      ar: ["الكمبوندات السكنية", "أرضيات اللاندسكيب", "المولات والممرات الخارجية"],
      en: ["Residential Compounds", "Landscape Flooring", "Commercial Malls & Plazas"],
    },
  },
  {
    id: 3,
    image: "/3.jpeg",
    name: {
      ar: "جرانيت مصري جندوله عشوائي",
      en: "Egyptian Granite – Random Gondola",
    },
    category: "flagstone",
    categoryLabel: {
      ar: "جرانيت ورخام عشوائي",
      en: "Random Granite & Flagstone",
    },
    dimensions: {
      ar: "من ٥ إلى ١٢ سم",
      en: "5–12 cm",
    },
    inlayOrChipsSize: {
      ar: "من ١ إلى ٣ سم (كرارة تركي)",
      en: "1–3 cm (Turkish Carrara)",
    },
    specs: {
      ar: [
        "جرانيت مصري عالي الجودة",
        "جندوله عشوائي",
        "المقاس: من ٥ إلى ١٢ سم",
        "مطعم بكرارة تركي",
        "مقاس التطعيم: من ١ إلى ٣ سم",
      ],
      en: [
        "High-Grade Egyptian Granite",
        "Random Gondola composition",
        "Piece Size: 5–12 cm",
        "Inlaid with Turkish Carrara stone",
        "Inlay Measurement: 1–3 cm",
      ],
    },
    description: {
      ar: "جرانيت مصري جندوله بتشكيل عشوائي طبيعي مقاس من ٥ إلى ١٢ سم، مطعم بكرارة تركي مقاس ١ إلى ٣ سم لصلابة استثنائية ولمسة معمارية فريدة.",
      en: "Authentic Egyptian Gondola granite in natural random-shaped pieces measuring 5–12 cm, inlaid with Turkish Carrara stone measuring 1–3 cm for exceptional durability and timeless character.",
    },
    features: {
      ar: ["صلابة جرانيت فائقة", "شكل عشوائي طبيعي غير متكرر", "تطعيم بكرارة ناصعة"],
      en: ["Superior granite hardness", "Organic non-repetitive geometry", "Bright Carrara inlay"],
    },
    applications: {
      ar: ["الطرق والمعابر", "الكمبوندات السكنية", "الساحات المفتوحة"],
      en: ["Roads & Crossings", "Residential Compounds", "Open Civic Plazas"],
    },
  },
  {
    id: 4,
    image: "/4.jpeg",
    name: {
      ar: "صني منيا عشوائي",
      en: "Random Sunny Minya Marble",
    },
    category: "flagstone",
    categoryLabel: {
      ar: "جرانيت ورخام عشوائي",
      en: "Random Granite & Flagstone",
    },
    dimensions: {
      ar: "من ٥ إلى ١٢ سم",
      en: "5–12 cm",
    },
    inlayOrChipsSize: {
      ar: "من ١ إلى ٣ سم (زلط برون)",
      en: "1–3 cm (Brown Chips)",
    },
    specs: {
      ar: [
        "صني منيا مصري أصيل",
        "شكل عشوائي معماري",
        "المقاس: من ٥ إلى ١٢ سم",
        "مطعم بزلط برون",
        "مقاس التطعيم: من ١ إلى ٣ سم",
      ],
      en: [
        "Authentic Egyptian Sunny Minya",
        "Architectural random shape",
        "Piece Size: 5–12 cm",
        "Inlaid with Brown stone chips",
        "Inlay Measurement: 1–3 cm",
      ],
    },
    description: {
      ar: "رخام صني منيا مصري أصيل بتكوين عشوائي بمقاسات تتراوح من ٥ إلى ١٢ سم، مطعم بحبيبات زلط برون دافئة بمقاس من ١ إلى ٣ سم.",
      en: "Authentic Egyptian Sunny Minya marble in random-shaped organic pieces measuring 5–12 cm, inlaid with brown natural stone chips measuring 1–3 cm.",
    },
    features: {
      ar: ["دفء اللون الرملي المصري", "مظهر عشوائي راقٍ", "مقاوم للاحتكاك والرطوبة"],
      en: ["Warm Egyptian sandstone tone", "Refined organic aesthetic", "Abrasion and moisture resistant"],
    },
    applications: {
      ar: ["ممرات الحدائق", "الحدائق والمتنزهات", "أرضيات الفلل والقصور"],
      en: ["Garden Walkways", "Parks & Landscaping", "Villa & Estate Grounds"],
    },
  },
  {
    id: 5,
    image: "/5.jpeg",
    name: {
      ar: "كراره مسطره",
      en: "Carrara Marble – Linear Design",
    },
    category: "translucent",
    categoryLabel: {
      ar: "رخام مسطرة وخامات نافذة للضوء",
      en: "Linear Marble & Translucent Stone",
    },
    dimensions: {
      ar: "١٥ × ١٥ سم",
      en: "15 × 15 cm",
    },
    inlayOrChipsSize: {
      ar: "من ١ إلى ٣ سم (ألبستر)",
      en: "1–3 cm (Alabaster)",
    },
    translucent: true,
    specs: {
      ar: [
        "المقاس: ١٥ × ١٥ سم",
        "مطمبل (Tumbled / Antique finish)",
        "مطعم بزلط الألبستر",
        "مقاس الألبستر: من ١ إلى ٣ سم",
        "الألبستر نافذ للضوء",
      ],
      en: [
        "Piece Size: 15 × 15 cm",
        "Tumbled antique finish",
        "Inlaid with Alabaster stone chips",
        "Alabaster Size: 1–3 cm",
        "Light-transmitting translucent Alabaster",
      ],
    },
    description: {
      ar: "بلاطات كرارة مسطرة بتشطيب مطمبل مقاس ١٥ × ١٥ سم، مطعمة بزلط الألبستر الطبيعي النافذ للضوء مقاس ١–٣ سم، مما يخلق تأثيراً ضوئياً ساحراً عند الإضاءة الخلفية أو أشعة الشمس.",
      en: "Linear Carrara marble with a tumbled antique finish in 15 × 15 cm pieces, inlaid with 1–3 cm natural translucent Alabaster stone that transmits light beautifully under backlighting or sunlight.",
    },
    features: {
      ar: ["ألبستر نافذ للضوء طبيعياً", "تشطيب مطمبل معتق فاخر", "إمكانية دمج الإضاءة المعمارية"],
      en: ["Naturally translucent Alabaster", "Refined antique tumbled texture", "Backlit architectural potential"],
    },
    applications: {
      ar: ["الحوائط الديكورية المضيئة", "مداخل المولات والفنادق", "الأرضيات الفاخرة"],
      en: ["Illuminated Accent Walls", "Hotel & Luxury Foyers", "Prestige Interior Floors"],
    },
  },
  {
    id: 6,
    image: "/6.jpeg",
    name: {
      ar: "اكبره تشكليه",
      en: "Decorative Marble & Granite Mix",
    },
    category: "mosaic-sheets",
    categoryLabel: {
      ar: "شيتات وبلاطات موزاييك",
      en: "Mosaic Sheets & Tiles",
    },
    dimensions: {
      ar: "شيت متر × خمسون سنتي",
      en: "Sheet 100 × 50 cm",
    },
    sheetSize: {
      ar: "١٠٠ × ٥٠ سم",
      en: "100 × 50 cm",
    },
    specs: {
      ar: [
        "تشكيلة متناغمة من الرخام والجرانيت",
        "مقاس الشيت: متر × خمسون سنتي (١٠٠ × ٥٠ سم)",
        "شكل ديكوري مميز عالي الصلابة",
      ],
      en: [
        "Harmonious mix of natural marble and granite",
        "Sheet Size: 100 × 50 cm (1 m × 50 cm)",
        "High-durability decorative pattern",
      ],
    },
    description: {
      ar: "تشكيلة معمارية بديعة تجمع بين صلابة الجرانيت المصري وفخامة الرخام الطبيعي، مجمعة على شيتات مجهزة مقاس ١٠٠ × ٥٠ سم، مثالية لأرضيات وحوائط اللاندسكيب.",
      en: "A magnificent architectural composite combining the durability of Egyptian granite with the elegance of natural marble, pre-mounted on 100 × 50 cm sheets, ideal for landscape paving and cladding.",
    },
    features: {
      ar: ["مقاس شيت قياسي ١٠٠ × ٥٠ سم", "مزيج غني من الألوان والصلابة", "بديل مثالي للبازلت والإنترلوك"],
      en: ["Standard 100 × 50 cm format", "Rich dual-material durability", "Superior replacement for interlock"],
    },
    applications: {
      ar: ["المولات التجارية", "الكمبوندات السكنية", "أرضيات اللاندسكيب المفتوحة"],
      en: ["Commercial Shopping Malls", "Residential Communities", "Open Landscape Flooring"],
    },
  },
  {
    id: 7,
    image: "/7.jpeg",
    name: {
      ar: "زلط رخامي كراره تركي",
      en: "Turkish Carrara Marble Chips",
    },
    category: "marble-chips",
    categoryLabel: {
      ar: "الزلط الرخامي والديكوري",
      en: "Marble Chips & Decorative Gravel",
    },
    dimensions: {
      ar: "من ١ إلى ٣ سم",
      en: "1–3 cm",
    },
    inlayOrChipsSize: {
      ar: "١–٣ سم",
      en: "1–3 cm",
    },
    specs: {
      ar: [
        "المقاس: من ١ إلى ٣ سم",
        "يتميز بدرجة اللون الأبيض الشاهي المضيء",
        "حبيبات طبيعية مصقولة متدرجة",
      ],
      en: [
        "Size: 1–3 cm",
        "Distinctive Tea White luminous color tone",
        "Graded natural tumbled marble chips",
      ],
    },
    description: {
      ar: "زلط رخامي كرارة تركي فاخر مقاس من ١ إلى ٣ سم، يتميز بدرجة اللون الأبيض الشاهي النقي التي تعكس الضوء وتمنح المساحات الخارجية لمسة ناصعة.",
      en: "Premium Turkish Carrara marble chips measuring 1–3 cm, distinguished by their distinctive Tea White luminous color tone that reflects ambient light.",
    },
    features: {
      ar: ["لون أبيض شاهي متميز", "تدرج حجمي متجانس ١–٣ سم", "مقاوم لامتصاص الأتربة"],
      en: ["Signature Tea White tone", "Even 1–3 cm grading", "Low dust absorption"],
    },
    applications: {
      ar: ["أحواض نباتات اللاندسكيب", "تطعيم بلاطات الرخام", "الديكورات المائية والحدائق اليابانية"],
      en: ["Planter Beds & Tree Surrounds", "Stone Tile Inlays", "Water Features & Zen Gardens"],
    },
  },
  {
    id: 8,
    image: "/8.jpeg",
    name: {
      ar: "البستر نافذ للضوء",
      en: "Translucent Alabaster Stone",
    },
    category: "translucent",
    categoryLabel: {
      ar: "رخام مسطرة وخامات نافذة للضوء",
      en: "Linear Marble & Translucent Stone",
    },
    dimensions: {
      ar: "من ١ إلى ٣ سم",
      en: "1–3 cm",
    },
    inlayOrChipsSize: {
      ar: "١–٣ سم",
      en: "1–3 cm",
    },
    translucent: true,
    specs: {
      ar: [
        "المقاس: من ١ إلى ٣ سم",
        "يتميز بعروقه الأبيض الشاهي والذهبي",
        "نافذ للضوء طبيعياً",
      ],
      en: [
        "Size: 1–3 cm",
        "Characterized by distinctive Tea White and golden natural veins",
        "Naturally light-transmitting material",
      ],
    },
    description: {
      ar: "خامة ألبستر نادرة وفاخرة بمقاس من ١ إلى ٣ سم، تتميز بعروق طبيعية بلون الأبيض الشاهي والذهبي، وتتفرد بخاصية نفاذية الضوء المذهلة للتطبيقات المعمارية الحديثة.",
      en: "Rare and luxurious natural Alabaster stone measuring 1–3 cm, characterized by distinctive Tea White and golden natural veins with extraordinary light-transmitting qualities.",
    },
    features: {
      ar: ["نافذ للضوء بشكل مذهل", "عروق ذهبية وشاهية فريدة", "مثالي للإضاءات المعمارية المخفية"],
      en: ["Natural translucency", "Striking golden and white veining", "Ideal for architectural backlighting"],
    },
    applications: {
      ar: ["التطعيم المعماري الفاخر", "الحوائط والأعمدة المضيئة", "الأرضيات الديكورية الراقية"],
      en: ["Prestige Architectural Inlays", "Backlit Columns & Panels", "Bespoke Decorative Flooring"],
    },
  },
  {
    id: 9,
    image: "/9.jpeg",
    name: {
      ar: "احمر قصير",
      en: "Red Short Marble Chips",
    },
    category: "marble-chips",
    categoryLabel: {
      ar: "الزلط الرخامي والديكوري",
      en: "Marble Chips & Decorative Gravel",
    },
    dimensions: {
      ar: "من ١ إلى ٣ سم",
      en: "1–3 cm",
    },
    inlayOrChipsSize: {
      ar: "١–٣ سم",
      en: "1–3 cm",
    },
    specs: {
      ar: [
        "المقاس: من ١ إلى ٣ سم",
        "يتميز الأحمر بدرجة لون غير عادية",
        "العروق والتجزيع الأبيض الطبيعي",
        "خامة عالية الصلابة",
      ],
      en: [
        "Size: 1–3 cm",
        "Distinctive unusual deep red color tone",
        "Natural white veins and veining patterns",
        "High material hardness and durability",
      ],
    },
    description: {
      ar: "زلط رخامي أحمر قصير مقاس من ١ إلى ٣ سم، يتميز بدرجة لون أحمر نادرة وغير عادية مع تجزيع وعروق بيضاء ساحرة، وصلابة فائقة تتحمل الضغوط وحركة المشاة.",
      en: "Red Short marble chips measuring 1–3 cm, distinguished by their rare deep red tone, exquisite natural white veining patterns, and high material hardness built for heavy foot traffic.",
    },
    features: {
      ar: ["لون أحمر غني غير معتاد", "عروق وتجزيعات بيضاء متباينة", "صلابة استثنائية وعمر افتراضي طويل"],
      en: ["Unusually vibrant red hue", "Crisp contrasting white veining", "High compressive strength"],
    },
    applications: {
      ar: ["ممرات المشاة والحدائق", "التطعيمات الديكورية المتنوعة", "تجميل المساحات المفتوحة"],
      en: ["Pedestrian Pathways & Parks", "Decorative Tile Inlays", "Landscape Beautification"],
    },
  },
  {
    id: 10,
    image: "/10.jpeg",
    name: {
      ar: "صني منيا",
      en: "Sunny Minya Marble Chips",
    },
    category: "marble-chips",
    categoryLabel: {
      ar: "الزلط الرخامي والديكوري",
      en: "Marble Chips & Decorative Gravel",
    },
    dimensions: {
      ar: "من ٢ إلى ٣ سم",
      en: "2–3 cm",
    },
    inlayOrChipsSize: {
      ar: "٢–٣ سم",
      en: "2–3 cm",
    },
    specs: {
      ar: [
        "المقاس: من ٢ إلى ٣ سم",
        "خامة صني منيا مصرية طبيعية ١٠٠٪",
        "تدرج بيج ورمادي ذهبي متوازن",
      ],
      en: [
        "Size: 2–3 cm",
        "100% natural Egyptian Sunny Minya stone",
        "Balanced warm beige and golden undertones",
      ],
    },
    description: {
      ar: "زلط رخام صني منيا مصري أصيل مقاس من ٢ إلى ٣ سم، الخيار الكلاسيكي الأول للمشاريع المعمارية وأعمال اللاندسكيب بفضل لونه البيج الهادئ وتوافقه الطبيعي مع البيئة المشمسة.",
      en: "Authentic Egyptian Sunny Minya marble chips measuring 2–3 cm, the classic cornerstone material for high-end architecture and landscaping owing to its serene warm tones and thermal resilience.",
    },
    features: {
      ar: ["خامة مصرية رائدة ومعتمدة عالمياً", "حجم متناسق ٢–٣ سم", "ثبات لوني تحت أشعة الشمس المباشرة"],
      en: ["Internationally renowned Egyptian stone", "Uniform 2–3 cm sizing", "UV and heat stable under direct sunlight"],
    },
    applications: {
      ar: ["الكمبوندات السكنية", "فرش الحدائق والمسطحات الخضراء", "صناعة البلاطات الديكورية"],
      en: ["Residential Compounds", "Garden Mulching & Greenery", "Decorative Tile Manufacturing"],
    },
  },
  {
    id: 11,
    image: "/11.jpeg",
    name: {
      ar: "ابيض تركي",
      en: "Turkish White Marble Chips",
    },
    category: "marble-chips",
    categoryLabel: {
      ar: "الزلط الرخامي والديكوري",
      en: "Marble Chips & Decorative Gravel",
    },
    dimensions: {
      ar: "من ٣ إلى ٦ سم",
      en: "3–6 cm",
    },
    inlayOrChipsSize: {
      ar: "٣–٦ سم",
      en: "3–6 cm",
    },
    specs: {
      ar: [
        "المقاس: من ٣ إلى ٦ سم",
        "ناصع البياض النقي",
        "حجم حبيبات كبير ملفت",
      ],
      en: [
        "Size: 3–6 cm",
        "Distinguished by pure, bright white appearance",
        "Substantial large aggregate size",
      ],
    },
    description: {
      ar: "زلط رخامي أبيض تركي مقاس كبير من ٣ إلى ٦ سم، يتميز بنصاعة بياضه الفائقة ونقائه التام، مما يجعله عنصراً بصرياً مهيمناً في تصميمات اللاندسكيب الفاخرة.",
      en: "Turkish White marble chips in a large 3–6 cm gauge, characterized by their brilliant, pure white appearance that creates commanding visual contrast in luxury landscaping and architectural installations.",
    },
    features: {
      ar: ["بياض ناصع عاكس للضوء", "حجم كبير ٣–٦ سم بارز المظهر", "مقاوم للعوامل الجوية الصعبة"],
      en: ["Brilliant high-albedo white", "Bold large 3–6 cm grain", "All-weather durable"],
    },
    applications: {
      ar: ["مشاريع اللاندسكيب الكبرى", "الحدائق المائية والبحيرات الصناعية", "أحواض الأشجار والواجهات المعمارية"],
      en: ["Large Scale Landscape Developments", "Reflecting Pools & Water Features", "Tree Basins & Architectural Facades"],
    },
  },
  {
    id: 12,
    image: "/12.jpeg",
    name: {
      ar: "اسود اسباني",
      en: "Spanish Black Marble Chips",
    },
    category: "marble-chips",
    categoryLabel: {
      ar: "الزلط الرخامي والديكوري",
      en: "Marble Chips & Decorative Gravel",
    },
    dimensions: {
      ar: "من ١ إلى ٣ سم",
      en: "1–3 cm",
    },
    inlayOrChipsSize: {
      ar: "١–٣ سم",
      en: "1–3 cm",
    },
    specs: {
      ar: [
        "المقاس: من ١ إلى ٣ سم",
        "يتميز الأسود بدرجة سواد صريحة",
        "مجزع بعروق بيضاء تميز درجة الرؤية",
      ],
      en: [
        "Size: 1–3 cm",
        "Distinguished by its intense, pure black color",
        "Interlaced with crisp natural white veining",
      ],
    },
    description: {
      ar: "زلط رخامي أسود إسباني مقاس من ١ إلى ٣ سم، يتميز بسواد فاحم صريح وعميق، متداخل مع عروق وتجزيعات بيضاء دقيقة تمنحه تبايناً دراماتيكياً وفخامة لا تضاهى.",
      en: "Spanish Black marble chips measuring 1–3 cm, distinguished by an intense, deep jet-black body interlaced with delicate white veins, delivering dramatic contrast and supreme architectural luxury.",
    },
    features: {
      ar: ["درجة سواد صريحة وفخمة", "عروق بيضاء طبيعية متباينة", "صلابة وتماسك عاليين"],
      en: ["Pure jet black saturation", "Crisp natural white veining", "Exceptional material density"],
    },
    applications: {
      ar: ["تصميمات اللاندسكيب المعاصرة", "الحدائق اليابانية والديكورات العصرية", "الأرضيات التناقضية عالية الرفاهية"],
      en: ["Contemporary Modern Landscaping", "Zen Gardens & Architectural Beds", "High-Contrast Luxury Paving"],
    },
  },
  {
    id: 13,
    image: "/13.jpeg",
    name: {
      ar: "مكس جرانيت",
      en: "Mixed Granite Chips",
    },
    category: "marble-chips",
    categoryLabel: {
      ar: "الزلط الرخامي والديكوري",
      en: "Marble Chips & Decorative Gravel",
    },
    dimensions: {
      ar: "من ١ إلى ٣ سم",
      en: "1–3 cm",
    },
    inlayOrChipsSize: {
      ar: "١–٣ سم",
      en: "1–3 cm",
    },
    specs: {
      ar: [
        "المقاس: من ١ إلى ٣ سم",
        "يتميز الجرانيت بالصلابة العالية جداً",
        "وجود فصوص في الخامة حسب ألوانها المتعددة",
      ],
      en: [
        "Size: 1–3 cm",
        "Features very high hardness and structural density",
        "Natural multi-mineral variations and colored crystalline grains",
      ],
    },
    description: {
      ar: "حبيبات جرانيت مكس طبيعي مقاس من ١ إلى ٣ سم، يتميز بالصلابة القصوى وقوة التحمل الشديدة مع تنوع لوني بديع يضم فصوصاً معدنية طبيعية متعددة الدرجات.",
      en: "Natural Mixed Granite chips measuring 1–3 cm, engineered by nature with extreme hardness and multi-mineral crystalline grains that offer outstanding compressive strength and rustic beauty.",
    },
    features: {
      ar: ["أقصى درجات الصلابة ومقاومة التآكل", "تنوع لوني معدني طبيعي", "يتحمل أثقل أحمال المرور"],
      en: ["Maximum compressive hardness & wear resistance", "Natural multi-mineral color depth", "Withstands heavy vehicular traffic"],
    },
    applications: {
      ar: ["مواقف السيارات والطرق والمعابر", "أرضيات اللاندسكيب للمشاريع الكبرى", "البيئات المعمارية المعرضة لأحمال شاقة"],
      en: ["Parking Lots, Roads & Crossings", "Heavy-Duty Compound Paving", "High-Traffic Commercial Landscapes"],
    },
  },
];
