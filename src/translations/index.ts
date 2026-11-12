export type Language = 'ar' | 'en';

export interface TranslationDictionary {
  brand: {
    fullName: string;
    tagline: string;
    addressShort: string;
  };
  nav: {
    home: string;
    products: string;
    landscape: string;
    applications: string;
    calculator: string;
    export: string;
    contact: string;
    requestQuote: string;
    orderInquiry: string;
    languageName: string;
    switchLanguage: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    exploreCatalog: string;
    contactDirect: string;
    whatsappDirect: string;
    callNow: string;
    metric1Val: string;
    metric1Label: string;
    metric2Val: string;
    metric2Label: string;
    metric3Val: string;
    metric3Label: string;
    metric4Val: string;
    metric4Label: string;
    addressBadge: string;
  };
  landscape: {
    badge: string;
    heading: string;
    subheading: string;
    featuresTitle: string;
    feature1Title: string;
    feature1Desc: string;
    feature2Title: string;
    feature2Desc: string;
    feature3Title: string;
    feature3Desc: string;
    feature4Title: string;
    feature4Desc: string;
    feature5Title: string;
    feature5Desc: string;
    applicationsTitle: string;
    applicationsSubtitle: string;
    applications: {
      compounds: { title: string; desc: string };
      malls: { title: string; desc: string };
      roads: { title: string; desc: string };
      gardens: { title: string; desc: string };
      walls: { title: string; desc: string };
      openSpaces: { title: string; desc: string };
      decorativeFloors: { title: string; desc: string };
      architectural: { title: string; desc: string };
    };
    comparisonTitle: string;
    comparisonSubtitle: string;
    ourStone: string;
    interlockBasalt: string;
    compRow1: { label: string; ours: string; others: string };
    compRow2: { label: string; ours: string; others: string };
    compRow3: { label: string; ours: string; others: string };
    compRow4: { label: string; ours: string; others: string };
    compRow5: { label: string; ours: string; others: string };
    requestSpecCTA: string;
  };
  catalog: {
    badge: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    allCategory: string;
    mosaicSheetsCategory: string;
    flagstoneCategory: string;
    marbleChipsCategory: string;
    translucentCategory: string;
    dimensionsLabel: string;
    inlayLabel: string;
    sheetSizeLabel: string;
    chipsSizeLabel: string;
    viewDetails: string;
    orderSample: string;
    noResults: string;
    resetFilters: string;
    showingCount: string;
    translucentBadge: string;
  };
  modal: {
    specsTitle: string;
    inlayDetailsTitle: string;
    lightTransmittingNote: string;
    applicationsTitle: string;
    packagingTitle: string;
    packagingDesc: string;
    inquireWhatsApp: string;
    requestSampleBtn: string;
    copySpecs: string;
    specsCopied: string;
    close: string;
  };
  calculator: {
    badge: string;
    title: string;
    subtitle: string;
    selectProduct: string;
    chooseStone: string;
    projectArea: string;
    areaUnit: string;
    calculate: string;
    resultsTitle: string;
    estimatedQuantity: string;
    packagingEstimate: string;
    coverageAdvice: string;
    sendCalculationToWhatsApp: string;
    sheetsCount: string;
    chipsWeight: string;
  };
  export: {
    badge: string;
    title: string;
    subtitle: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
    pillar4Title: string;
    pillar4Desc: string;
    portsTitle: string;
    capacityTitle: string;
    sampleKitCTA: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    googleFormConnected: string;
    googleFormNotice: string;
    openGoogleFormModal: string;
    nameLabel: string;
    namePlaceholder: string;
    companyLabel: string;
    companyPlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    countryLabel: string;
    countryPlaceholder: string;
    stoneInterestLabel: string;
    selectStoneOption: string;
    areaLabel: string;
    areaPlaceholder: string;
    projectTypeLabel: string;
    projectTypes: {
      compound: string;
      commercial: string;
      landscape: string;
      wholesale: string;
      other: string;
    };
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    submitting: string;
    successTitle: string;
    successDesc: string;
    recordedInSheet: string;
    sendDirectWhatsApp: string;
    newInquiry: string;
    directContactTitle: string;
    headquarters: string;
    phoneNumbers: string;
    landline: string;
    whatsAppHotline: string;
    emailContact: string;
    workingHours: string;
    landmarkTitle: string;
  };
  footer: {
    aboutTitle: string;
    quickLinksTitle: string;
    productsTitle: string;
    contactTitle: string;
    rightsReserved: string;
    designedForArchitects: string;
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  ar: {
    brand: {
      fullName: "أبو حلمي ستون للرخام والجرانيت والزلط الديكوري",
      tagline: "أبو حلمي ستون · رخام وجرانيت وحلول لاندسكيب معمارية",
      addressShort: "طريق الأوتوستراد، المعادي، القاهرة",
    },
    nav: {
      home: "الرئيسية",
      products: "الكتالوج (١٣)",
      landscape: "حلول اللاندسكيب",
      applications: "التطبيقات",
      calculator: "حاسبة الكميات",
      export: "التصدير والجودة",
      contact: "طلب تسعير وتوريد",
      requestQuote: "طلب تسعير فوري",
      orderInquiry: "طلب تسعير ومواصفات",
      languageName: "English",
      switchLanguage: "EN",
    },
    hero: {
      badge: "أبو حلمي ستون · رخام وجرانيت مصري وزلط ديكوري",
      titleLine1: "أصالة الحجر الطبيعي واللاندسكيب",
      titleLine2: "بمعايير معمارية وصناعية متفوقة",
      subtitle:
        "تصنيع وتوريد الرخام والجرانيت المصري عالي الجودة، الزلط الرخامي الملون، وشيتات اللاندسكيب قياس ٥٠ × ١٠٠ سم بديل البازلت والإنترلوك للمشاريع الكبرى والتصدير الدولي.",
      exploreCatalog: "استكشف كتالوج الخامات (١٣ منتجاً)",
      contactDirect: "طلب تسعير ومواصفات",
      whatsappDirect: "واتساب: +20 111 135 4275",
      callNow: "اتصال: +20 128 474 4356",
      metric1Val: "١٣ خامة",
      metric1Label: "منتجات معتمدة ومؤكدة بالكتالوج",
      metric2Val: "٥٠ × ١٠٠ سم",
      metric2Label: "المقاس القياسي لبلاطات اللاندسكيب",
      metric3Val: "ألبستر نافذ",
      metric3Label: "عروق طبيعية نافذة للضوء المعماري",
      metric4Val: "+٥٠ ألف م²",
      metric4Label: "طاقة تشغيل وتوريد شهرية",
      addressBadge: "طريق الأوتوستراد، المعادي — بعد سور قوات أمن طره، أمام مدخل الشيماء",
    },
    landscape: {
      badge: "حلول معمارية متكاملة",
      heading: "أرضيات وحوائط لاند سكيب من الرخام والجرانيت المصري عالي الجودة.",
      subheading:
        "بدائل حجرية طبيعية متفوقة للبازلت والإنترلوك التقليدي، تجمع بين الجمال الديكوري وسرعة التركيب وتحمل أصعب الظروف المناخية للمشاريع الكبرى.",
      featuresTitle: "المزايا الخمس المؤكدة",
      feature1Title: "بديل ممتاز للبازلت والإنترلوك",
      feature1Desc: "حجر طبيعي ١٠٠٪ يدوم لعشرات السنين دون بهتان أو تآكل، متفوقاً تماماً على البلاط الإسمنتي.",
      feature2Title: "شكل ديكوري مميز",
      feature2Desc: "تشكيلات وتطعيمات رخامية راقية من صني منيا، الألبستر النافذ، والكرارة، تمنح المشروع طابعاً معمارياً فريداً.",
      feature3Title: "بلاط سريع التركيب",
      feature3Desc: "شيتات وبلاطات مجهزة مسبقاً تختصر وقت التنفيذ بالموقع وتضمن استواءً هندسياً فائق الدقة.",
      feature4Title: "المقاس القياسي ٥٠ × ١٠٠ سم",
      feature4Desc: "أبعاد هندسية معمارية مثالية للمساحات الكبرى تسهل حساب الكميات وتقلل الفواصل التنفيذية.",
      feature5Title: "مقاسات خاصة حسب طلب العميل",
      feature5Desc: "مرونة تصنيعية كاملة لتفصيل المقاسات والسماكات والخلطات الحجرية الخاصة وفق مخططات المشروع.",
      applicationsTitle: "تطبيقات الاستخدام الميداني",
      applicationsSubtitle: "مصممة هندسياً لتلائم المشاريع الحكومية والخاصة الأكثر تطلباً",
      applications: {
        compounds: {
          title: "الكمبوندات السكنية",
          desc: "ممرات المشاة، مداخل الفيلات، والساحات الداخلية لمجتمعات سكنية راقية.",
        },
        malls: {
          title: "المولات والمراكز التجارية",
          desc: "الواجهات والأرضيات الخارجية والبهو المفتوح المقاوم للحركة الكثيفة.",
        },
        roads: {
          title: "الطرق والمعابر",
          desc: "تقاطعات المشاة والتهدئة المرورية بطاقات تحمل واحتكاك عالية جداً.",
        },
        gardens: {
          title: "الحدائق والمنتزهات",
          desc: "المسارات البيئية، أحواض الزراعة، وتنسيق المسطحات الطبيعية الخضراء.",
        },
        walls: {
          title: "الحوائط والكسوات الجدارية",
          desc: "كسوة الأسوار والجدران البصرية والتكسيات الحجرية ثلاثية الأبعاد.",
        },
        openSpaces: {
          title: "المساحات المفتوحة والساحات",
          desc: "الميادين والساحات المدنية ومراكز التجمع الحضرية المفتوحة.",
        },
        decorativeFloors: {
          title: "الأرضيات الديكورية",
          desc: "أرضيات تراس فندقية، مناطق مسابح، وممرات معمارية مخصصة.",
        },
        architectural: {
          title: "المشاريع المعمارية الكبرى",
          desc: "حلول خاصة للمتاحف، السفارات، المراكز الإدارية، والمشاريع الأيقونية.",
        },
      },
      comparisonTitle: "مقارنة الجودة: شيتات الحجر الطبيعي مقابل البازلت والإنترلوك",
      comparisonSubtitle: "لماذا يفضل كبار الاستشاريين والمطورين خامات أبو حلمي ستون",
      ourStone: "شيتات وبلاطات أبو حلمي ستون الطبيعية",
      interlockBasalt: "الإنترلوك الإسمنتي والبازلت التقليدي",
      compRow1: {
        label: "المظهر الجمالي",
        ours: "تجزيعات وعروق رخامية طبيعية فخمة وألوان أصيلة لا تبهت",
        others: "ألوان صبغية صناعية تبهت وتتآكل مع الشمس والعوامل الجوية",
      },
      compRow2: {
        label: "نفاذية وتأثير الضوء",
        ours: "تطعيمات بالألبستر الطبيعي النافذ للضوء لإضاءات معمارية مبهرة",
        others: "معتم تماماً ولا يتيح أي ابتكارات ضوئية",
      },
      compRow3: {
        label: "سرعة وجودة التركيب",
        ours: "شيتات معيارية ٥٠ × ١٠٠ سم جاهزة تحقق استواءً دقيقاً وسرعة إنجاز",
        others: "تركيب يدوي قطعة بقطعة مع بطء الإنجاز واحتمال التخلخل",
      },
      compRow4: {
        label: "مقاومة الحرارة والصدمات",
        ours: "برودة طبيعية لأسطح الرخام وصلابة جرانيتية عالية تحت أشعة الشمس",
        others: "يمتص الحرارة بشدة ويصبح ساخناً جداً في الصيف",
      },
      compRow5: {
        label: "القيمة العقارية للمشروع",
        ours: "يرفع القيمة التسويقية والاستثمارية للمشروع بنسبة ملحوظة",
        others: "مظهر تجاري نمطي مكرر يقلل من تميز المشروع",
      },
      requestSpecCTA: "طلب ورقة المواصفات الفنية للاندسكيب",
    },
    catalog: {
      badge: "الكتالوج الرسمي المعتمد",
      title: "مجموعة منتجات الرخام والجرانيت والزلط الديكوري",
      subtitle:
        "١٣ صنفاً معتمداً بالمقاسات والمواصفات الدقيقة من مصانع أبو حلمي ستون مباشرة للمشاريع المحلية والأسواق الدولية.",
      searchPlaceholder: "ابحث بالاسم أو المقاس (مثل: صني منيا، ألبستر، 50×100، كرارة، اسود اسباني...)",
      allCategory: "جميع المنتجات (١٣)",
      mosaicSheetsCategory: "شيتات وموزاييك",
      flagstoneCategory: "جرانيت ورخام عشوائي",
      marbleChipsCategory: "زلط رخامي وديكوري",
      translucentCategory: "خامات نافذة للضوء",
      dimensionsLabel: "المقاس:",
      inlayLabel: "التطعيم:",
      sheetSizeLabel: "مقاس الشيت:",
      chipsSizeLabel: "حجم الزلط:",
      viewDetails: "المواصفات الكاملة",
      orderSample: "طلب عينة / تسعير",
      noResults: "لم يتم العثور على خامات تطابق بحثك.",
      resetFilters: "إعادة ضبط البحث",
      showingCount: "عرض {count} من أصل ١٣ منتجاً",
      translucentBadge: "نافذ للضوء",
    },
    modal: {
      specsTitle: "المواصفات الفنية المؤكدة",
      inlayDetailsTitle: "مواصفات التطعيم والزلط",
      lightTransmittingNote: "ملاحظة معمارية: هذا المنتج يحتوي على خامة الألبستر الطبيعي النافذة للضوء، مما يتيح إمكانية دمج الإضاءة الخلفية (LED Backlighting) لإبراز العروق الذهبية والشاهية.",
      applicationsTitle: "التطبيقات الموصى بها",
      packagingTitle: "التعبئة وشروط التوريد",
      packagingDesc: "يتم التوريد إما على شيتات معبأة في صناديق خشبية معالجة ضد الرطوبة (Fumigated Wooden Crates) أو في شكائر جامبو (Jumbo Bags) زنة ١ طن للزلط السائب.",
      inquireWhatsApp: "طلب تسعير ومواصفات عبر واتساب",
      requestSampleBtn: "طلب عينة فعلية للمشروع",
      copySpecs: "نسخ المواصفات الفنية",
      specsCopied: "تم نسخ المواصفات بنجاح!",
      close: "إغلاق النافذة",
    },
    calculator: {
      badge: "أداة المهندسين والمقاولين",
      title: "حاسبة التقدير الكمي والمواصفات",
      subtitle: "احسب الاحتياج التقريبي لمشروعك من الشيتات أو الزلط السائب واحصل على مسودة تسعير فورية.",
      selectProduct: "اختر نوع الخامة أو البلاطة:",
      chooseStone: "-- اختر من الـ ١٣ منتجاً --",
      projectArea: "مساحة المشروع الإجمالية:",
      areaUnit: "متر مربع (م²)",
      calculate: "حساب الكميات المقدرة",
      resultsTitle: "التقدير الأولي للكميات والتعبئة:",
      estimatedQuantity: "الكمية المطلوبة المقدرة:",
      packagingEstimate: "طريقة التعبئة والشحن الموصى بها:",
      coverageAdvice: "ملاحظة: تشمل الحسبة نسبة هالك وفواصل قياسية قدرها ٥٪ لضمان التغطية المثلى.",
      sendCalculationToWhatsApp: "إرسال التقدير للمبيعات لتأكيد السعر",
      sheetsCount: "شيت قياسي (٥٠ × ١٠٠ سم)",
      chipsWeight: "طن متري تقريباً (سُمك فرش ٤–٥ سم)",
    },
    export: {
      badge: "جاهزية التصدير الدولي",
      title: "معايير التصدير والتعبئة للأسواق العالمية",
      subtitle: "نلتزم بأعلى معايير الفحص والفرز والتعبئة البحرية لتسليم خامات أبو حلمي ستون بأمان تام إلى موانئ العالم والمشاريع الكبرى.",
      pillar1Title: "فرز وتصنيف متجانس",
      pillar1Desc: "فحص دقيق لكل شحنة لضمان توحيد المقاسات، تدرج الألوان، وخلو الخامات من الشوائب أو التشققات.",
      pillar2Title: "صناديق خشبية مدخنة ومعتمدة",
      pillar2Desc: "تعبئة بلاطات وشيتات الرخام في باليتات وصناديق خشبية معالجة حرارياً وفق معايير ISPM-15 الدولية.",
      pillar3Title: "شكائر جامبو متينة للزلط",
      pillar3Desc: "تعبئة الزلط الرخامي في شكائر جامبو مقاومة للتمزق والرطوبة حمولة طن متري مع حلقات رفع بالرافعة.",
      pillar4Title: "شحن بحري وتخليص جمركي",
      pillar4Desc: "تنسيق كامل مع كبرى الخطوط الملاحية للشحن بنظام الحاويات الكاملة (FCL) من موانئ الإسكندرية والعين السخنة.",
      portsTitle: "الموانئ المصرية المعتمدة للتصدير:",
      capacityTitle: "الطاقة التوريدية للمشاريع الكبرى:",
      sampleKitCTA: "طلب حقيبة عينات معمارية معتمدة للتصدير",
    },
    contact: {
      badge: "طلبات التوريد والمشاريع الكبرى",
      title: "طلب عينات، أسعار، ومواصفات معتمدة للمشاريع",
      subtitle: "يتم استقبال وتوثيق طلبات التوريد فورياً ومتابعتها بدقة عبر الإدارة التجارية وفريق المهندسين لدى أبو حلمي ستون.",
      googleFormConnected: "منظومة معتمدة لتلقي طلبات المطورين العقاريين، مكاتب الاستشارات الهندسية، وشركات المقاولات والتصدير.",
      googleFormNotice: "تصل بيانات طلبكم فوراً إلى الإدارة التجارية والمبيعات، مع إتاحة المتابعة المباشرة عبر واتساب.",
      openGoogleFormModal: "طلب تسعير ومواصفات للمشاريع",
      nameLabel: "الاسم الكريم",
      namePlaceholder: "مثال: م. أحمد منصور",
      companyLabel: "الشركة / المؤسسة",
      companyPlaceholder: "اسم شركة التطوير أو المقاولات",
      emailLabel: "البريد الإلكتروني",
      emailPlaceholder: "engineer@company.com",
      phoneLabel: "رقم الهاتف / واتساب (مع كود الدولة)",
      phonePlaceholder: "+20 100 000 0000",
      countryLabel: "الدولة / المدينة",
      countryPlaceholder: "القاهرة، المعادي، الرياض، دبي...",
      stoneInterestLabel: "المنتج أو الخامة المطلوبة",
      selectStoneOption: "-- حدد المنتج من الكتالوج --",
      areaLabel: "المساحة أو الكمية التقديرية",
      areaPlaceholder: "مثال: ٥٠٠ متر مربع أو ٢٥ طن",
      projectTypeLabel: "نوع المشروع",
      projectTypes: {
        compound: "كمبوند أو مشروع سكني",
        commercial: "مول أو مركز تجاري",
        landscape: "مشروع حدائق ولاندسكيب مفتوح",
        wholesale: "استيراد وتوزيع جملة خارجي",
        other: "مشروع معماري آخر",
      },
      messageLabel: "تفاصيل الطلب أو المواصفات الإضافية",
      messagePlaceholder: "اذكر أي متطلبات خاصة بالمقاسات، مواعيد التسليم، أو ميناء الوصول في حالة التصدير...",
      submitBtn: "إرسال طلب التسعير والتوريد",
      submitting: "جاري تسجيل وتوجيه طلبكم...",
      successTitle: "تم استلام وتسجيل طلبكم بنجاح!",
      successDesc: "تم توثيق بيانات طلبكم في سجل التوريدات والمبيعات الرسمي لدى أبو حلمي ستون، وسيتواصل معكم فريق المبيعات والمهندسون المختصون فوراً.",
      recordedInSheet: "✓ تم التسجيل بنجاح في سجل التوريدات الرسمي",
      sendDirectWhatsApp: "إرسال نسخة من الطلب عبر واتساب (+20 111 135 4275)",
      newInquiry: "إرسال طلب جديد",
      directContactTitle: "عناوين وهواتف التواصل المباشر",
      headquarters: "المقر الرئيسي ومعرض الخامات:",
      phoneNumbers: "أرقام الموبايل (كود مصر الدولي +20):",
      landline: "الهاتف الأرضي:",
      whatsAppHotline: "خط واتساب المباشر:",
      emailContact: "البريد الإلكتروني للتعاقدات:",
      workingHours: "ساعات العمل الرسمية:",
      landmarkTitle: "العلامة المميزة للموقع:",
    },
    footer: {
      aboutTitle: "عن أبو حلمي ستون",
      quickLinksTitle: "روابط سريعة",
      productsTitle: "أبرز منتجات الكتالوج",
      contactTitle: "التواصل والتوريد",
      rightsReserved: "جميع الحقوق محفوظة لمصنع وشركة أبو حلمي ستون للرخام والجرانيت © ٢٠٢٦.",
      designedForArchitects: "صُنعت بعناية معمارية لكبرى مشاريع اللاندسكيب والكمبوندات والتصدير الدولي.",
    },
  },
  en: {
    brand: {
      fullName: "ABO HELMY STONE – Natural Stone & Marble Chips",
      tagline: "ABO HELMY STONE · Architectural Marble, Granite & Landscape Solutions",
      addressShort: "Autostrad Rd, Maadi, Cairo, Egypt",
    },
    nav: {
      home: "Home",
      products: "Catalog (13)",
      landscape: "Landscape",
      applications: "Applications",
      calculator: "Estimator",
      export: "Export",
      contact: "Inquiries & Orders",
      requestQuote: "Request RFQ",
      orderInquiry: "Technical RFQ",
      languageName: "العربية",
      switchLanguage: "AR",
    },
    hero: {
      badge: "ABO HELMY STONE · Natural Egyptian Marble & Landscape Paving",
      titleLine1: "Authentic Egyptian Natural Stone",
      titleLine2: "Engineered for Landmark Architecture",
      subtitle:
        "High-grade Egyptian marble, granite, colored decorative marble gravel, and modular 50 × 100 cm landscape paving replacing basalt and interlock for prestigious developments worldwide.",
      exploreCatalog: "Explore Verified Catalog (13 Products)",
      contactDirect: "Request Price Quote",
      whatsappDirect: "WhatsApp: +20 111 135 4275",
      callNow: "Call: +20 128 474 4356",
      metric1Val: "13 Varieties",
      metric1Label: "Certified Marble, Granite & Gravel Catalog",
      metric2Val: "50 × 100 cm",
      metric2Label: "Standard Format Landscape Sheets",
      metric3Val: "Translucent Alabaster",
      metric3Label: "Light-Transmitting Architectural Stone",
      metric4Val: "+50,000 m²",
      metric4Label: "Monthly Processing & Supply Capacity",
      addressBadge: "Autostrad Rd, Maadi, Cairo (After Tora Security Forces Wall)",
    },
    landscape: {
      badge: "Architectural Systems",
      heading: "Premium Egyptian Marble & Granite Landscape Flooring and Wall Solutions.",
      subheading:
        "Engineering superior natural stone alternatives to conventional basalt and interlock paving, combining genuine decorative elegance, rapid on-site assembly, and extreme thermal durability for prestige developments.",
      featuresTitle: "The Five Core Advantages",
      feature1Title: "Superior Alternative to Basalt & Interlock",
      feature1Desc: "100% authentic natural stone engineered to endure decades without pigment degradation or surface crumbling, completely surpassing cementitious interlock pavers.",
      feature2Title: "Distinctive Decorative Appearance",
      feature2Desc: "Prestigious architectural compositions featuring Sunny Minya, translucent Alabaster, and Carrara inlays that establish a truly bespoke project identity.",
      feature3Title: "Fast-Installation Modular Tiles",
      feature3Desc: "Precision pre-assembled sheets and tiles accelerate site paving by up to 60%, delivering laser-aligned joints and structural integrity.",
      feature4Title: "Standard Size: 50 × 100 cm",
      feature4Desc: "Architecturally balanced dimensions designed for large-scale outdoor spaces, minimizing grout seams and creating clean, expansive perspectives.",
      feature5Title: "Custom Sizes Upon Customer Request",
      feature5Desc: "Complete manufacturing flexibility to tailor dimensions, thicknesses, and specialized stone inlays to consultant blueprints and tender specifications.",
      applicationsTitle: "Target Architectural & Civic Applications",
      applicationsSubtitle: "Engineered to satisfy demanding residential, commercial, and municipal specifications",
      applications: {
        compounds: {
          title: "Residential Compounds",
          desc: "Grand boulevards, villa entrances, internal plazas, and pedestrian promenade paving.",
        },
        malls: {
          title: "Shopping Malls & Retail Plazas",
          desc: "High-traffic outdoor concourses, commercial podiums, and exterior cladding.",
        },
        roads: {
          title: "Roads & Crossings",
          desc: "Pedestrian crosswalks, traffic-calming intersections, and vehicle-bearing surfaces.",
        },
        gardens: {
          title: "Gardens & Public Parks",
          desc: "Botanical walkways, organic landscape transitions, and natural water-permeable borders.",
        },
        walls: {
          title: "Walls & Exterior Cladding",
          desc: "Compound perimeter walls, feature vertical facades, and textured stone retaining walls.",
        },
        openSpaces: {
          title: "Outdoor Open Spaces",
          desc: "Public gathering plazas, amphitheaters, and civic gathering courtyards.",
        },
        decorativeFloors: {
          title: "Decorative Flooring",
          desc: "Hotel pool decks, luxury terraces, rooftop lounges, and curated interior transitions.",
        },
        architectural: {
          title: "Architectural Projects",
          desc: "Custom bespoke stone solutions for embassies, headquarters, and iconic cultural landmarks.",
        },
      },
      comparisonTitle: "Quality Matrix: ABO HELMY STONE Sheets vs Conventional Paving",
      comparisonSubtitle: "Why leading architects, master planners, and developers mandate our materials",
      ourStone: "ABO HELMY STONE Natural Stone Sheets",
      interlockBasalt: "Concrete Interlock & Traditional Basalt",
      compRow1: {
        label: "Aesthetic Identity",
        ours: "Natural marble veining, organic textures, and UV-immune mineral color saturation",
        others: "Synthetic dye pigments that fade, stain, and whiten under sun exposure",
      },
      compRow2: {
        label: "Light Transmission",
        ours: "Translucent Alabaster stone inlays that illuminate beautifully under backlighting",
        others: "Completely opaque concrete with zero illumination possibilities",
      },
      compRow3: {
        label: "Installation Speed",
        ours: "Modular 50 × 100 cm factory sheets ensure rapid installation and perfect planar alignment",
        others: "Piece-by-piece manual placement prone to shifting, sinking, and misalignment",
      },
      compRow4: {
        label: "Heat & Weather Resistance",
        ours: "High albedo, naturally cool marble surface with superior compressive rock strength",
        others: "High heat retention, becoming uncomfortably hot to walk upon in summer",
      },
      compRow5: {
        label: "Real Estate Value",
        ours: "Substantially elevates development prestige, architectural rating, and resale value",
        others: "Generic industrial aesthetic that diminishes perception of luxury",
      },
      requestSpecCTA: "Request Landscape Specification Sheet",
    },
    catalog: {
      badge: "Official Verified Catalog",
      title: "Egyptian Marble, Granite & Decorative Gravel Collection",
      subtitle:
        "All 13 confirmed catalog materials directly from ABO HELMY STONE facilities with exact dimensions, aggregate sizing, and technical characteristics.",
      searchPlaceholder: "Search by name, size or material (e.g., Sunny Minya, Alabaster, Carrara, 50x100...)",
      allCategory: "All Products (13)",
      mosaicSheetsCategory: "Mosaic Sheets & Tiles",
      flagstoneCategory: "Random Granite & Marble",
      marbleChipsCategory: "Marble Chips & Gravel",
      translucentCategory: "Translucent Specialty Stone",
      dimensionsLabel: "Dimensions:",
      inlayLabel: "Inlay Material:",
      sheetSizeLabel: "Sheet Size:",
      chipsSizeLabel: "Chip Gauge:",
      viewDetails: "Full Specifications",
      orderSample: "Request Sample / Quote",
      noResults: "No stone materials match your search parameters.",
      resetFilters: "Reset Search Filters",
      showingCount: "Showing {count} of 13 certified products",
      translucentBadge: "Translucent",
    },
    modal: {
      specsTitle: "Verified Technical Specifications",
      inlayDetailsTitle: "Inlay & Aggregate Breakdown",
      lightTransmittingNote: "Architectural Note: This product integrates natural translucent Alabaster, permitting integrated LED backlighting to reveal exquisite internal golden and white mineral veining.",
      applicationsTitle: "Recommended Applications",
      packagingTitle: "Packaging & Logistics",
      packagingDesc: "Supplied either in moisture-sealed, ISPM-15 heat-treated fumigated wooden crates (for modular sheets and tiles) or 1-metric-ton heavy-duty woven jumbo bags (for loose gravel).",
      inquireWhatsApp: "Inquire via WhatsApp with Specs",
      requestSampleBtn: "Order Physical Specimen Sample",
      copySpecs: "Copy Technical Specifications",
      specsCopied: "Specifications copied to clipboard!",
      close: "Close Window",
    },
    calculator: {
      badge: "Architect & Contractor Estimator",
      title: "Project Material & Quantity Specifier",
      subtitle: "Estimate required modular sheets or metric tonnage for loose decorative gravel, and generate an instant quote summary from ABO HELMY STONE.",
      selectProduct: "Select Stone Product:",
      chooseStone: "-- Select from the 13 products --",
      projectArea: "Total Project Surface Area:",
      areaUnit: "Square Meters (m²)",
      calculate: "Calculate Estimated Quantities",
      resultsTitle: "Initial Material & Logistics Estimate:",
      estimatedQuantity: "Estimated Required Material:",
      packagingEstimate: "Recommended Packaging & Freight:",
      coverageAdvice: "Note: Calculation incorporates an industry-standard 5% margin for geometric cutting waste and seamless edge joints.",
      sendCalculationToWhatsApp: "Send Estimation to Sales via WhatsApp",
      sheetsCount: "Standard Sheets (50 × 100 cm)",
      chipsWeight: "Metric Tons approx. (4–5 cm bed depth)",
    },
    export: {
      badge: "International & Domestic Capability",
      title: "Global Export Standards & Container Logistics",
      subtitle: "We satisfy stringent inspection, sorting, and marine container crating requirements to ensure pristine arrival worldwide.",
      pillar1Title: "Harmonized Color & Grade Sorting",
      pillar1Desc: "Comprehensive optical grading for every export lot to ensure consistent tone distribution, gauge fidelity, and zero fracturing.",
      pillar2Title: "ISPM-15 Certified Wooden Crating",
      pillar2Desc: "Stone sheets are secured in fumigated, heavy-timber crates lined with high-density foam cushions and polyethylene vapor barriers.",
      pillar3Title: "Reinforced Jumbo Bags for Gravel",
      pillar3Desc: "Decorative marble chips are packed into UV-stabilized, high-tensile 1,000 kg jumbo bags with four heavy-duty lifting corner loops.",
      pillar4Title: "Direct Port Dispatch (FCL)",
      pillar4Desc: "Direct container stuffing and expedited customs clearance at Alexandria, Ain Sokhna, and El Dekheila maritime terminals.",
      portsTitle: "Certified Egyptian Export Hubs:",
      capacityTitle: "Enterprise Supply Capability:",
      sampleKitCTA: "Request International Architectural Sample Box",
    },
    contact: {
      badge: "Commercial Desk & Direct Procurement",
      title: "Direct RFQ, Sample Requests & Enterprise Inquiries",
      subtitle: "All procurement and architectural inquiries are processed promptly through our enterprise sales department for immediate fulfillment.",
      googleFormConnected: "Certified procurement channel for master developers, engineering consultancies, landscape contractors, and international export.",
      googleFormNotice: "Your procurement request is dispatched directly to our technical sales desk with instant WhatsApp coordination.",
      openGoogleFormModal: "Official Project Quotation Request",
      nameLabel: "Full Name",
      namePlaceholder: "e.g., Eng. Mostafa Soliman",
      companyLabel: "Company / Organization",
      companyPlaceholder: "e.g., Emaar Misr, Orascom, Talaat Moustafa...",
      emailLabel: "Corporate Email",
      emailPlaceholder: "procurement@company.com",
      phoneLabel: "Phone / WhatsApp (with international dial code)",
      phonePlaceholder: "+20 100 000 0000",
      countryLabel: "Country & City",
      countryPlaceholder: "Cairo, Maadi, Riyadh, Dubai, London...",
      stoneInterestLabel: "Stone Material of Interest",
      selectStoneOption: "-- Choose product from catalog --",
      areaLabel: "Estimated Surface Area / Volume",
      areaPlaceholder: "e.g., 1,500 m² or 40 metric tons",
      projectTypeLabel: "Project Classification",
      projectTypes: {
        compound: "Residential Gated Compound",
        commercial: "Shopping Mall / Retail Plaza",
        landscape: "Public Park & Landscape Masterplan",
        wholesale: "International Import & Wholesale",
        other: "Bespoke Architectural Project",
      },
      messageLabel: "Project Details & Specific Requirements",
      messagePlaceholder: "Mention custom sizing needs, required delivery schedule, or destination port...",
      submitBtn: "Submit Procurement Request",
      submitting: "Transmitting procurement inquiry...",
      successTitle: "Your Request Has Been Received Successfully!",
      successDesc: "Your inquiry is officially registered in ABO HELMY STONE's enterprise procurement registry. Our sales engineers will follow up shortly.",
      recordedInSheet: "✓ Officially Logged in Enterprise Sales Registry",
      sendDirectWhatsApp: "Send Copy via WhatsApp (+20 111 135 4275)",
      newInquiry: "Submit Another Request",
      directContactTitle: "Official Phone & Location Directory",
      headquarters: "Headquarters & Stone Facility:",
      phoneNumbers: "Direct Mobile Hotlines (Egypt Dial Code +20):",
      landline: "Landline Telephone:",
      whatsAppHotline: "Official WhatsApp Desk:",
      emailContact: "Commercial & Export Desk:",
      workingHours: "Operating Hours:",
      landmarkTitle: "Exact Landmark:",
    },
    footer: {
      aboutTitle: "About ABO HELMY STONE",
      quickLinksTitle: "Quick Navigation",
      productsTitle: "Catalog Highlights",
      contactTitle: "Export & Contact",
      rightsReserved: "All rights reserved. ABO HELMY STONE Natural Stone & Marble Chips © 2026.",
      designedForArchitects: "Engineered for international export standards, luxury compounds, and landmark architecture.",
    },
  },
};
