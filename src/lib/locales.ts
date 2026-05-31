export interface ServiceItem {
    id: number;
    title: string;
    description: string;
    iconName: string;
}

export interface ValueCard {
    number: string;
    title: string;
    description: string;
}

export interface LocaleContent {
    company: string;
    companySub: string;
    langToggle: string;
    callUs: string;
    getStarted: string;
    ourServices: string;
    nav: {
        hero: string;
        services: string;
        partners: string;
        about: string;
        contact: string;
    };
    hero: {
        badge: string;
        headline: string;
        subheadline: string;
    };
    services: {
        badge: string;
        title: string;
        subtitle: string;
        viewDetails: string;
        list: ServiceItem[];
    };
    partners: {
        badge: string;
        title: string;
        subtitle: string;
        fallbackLabel: string;
        valuesTitle: string;
        valuesBadge: string;
        valuesList: ValueCard[];
        list: string[];
    };
    about: {
        badge: string;
        title: string;
        subtitle: string;
        paragraph1: string;
        paragraph2: string;
        differentiatorsTitle: string;
        differentiators: string[];
    };
    contact: {
        badge: string;
        title: string;
        subtitle: string;
        addressLabel: string;
        addressValue: string;
        phoneLabel: string;
        phones: string[];
        emailLabel: string;
        emailValue: string;
        hoursLabel: string;
        hoursValue: string;
        mapLabel: string;
    };
    footer: {
        desc: string;
        quickLinks: string;
        connect: string;
        allRightsReserved: string;
    };
}

export const locales: Record<"en" | "ar", LocaleContent> = {
    en: {
        company: "ZOOL",
        companySub: "Businessmen Services",
        langToggle: "العربية",
        callUs: "Call Us",
        getStarted: "Get Started",
        ourServices: "Our Services",
        nav: {
            hero: "Home",
            services: "Services",
            partners: "Partners",
            about: "About Us",
            contact: "Get in Touch"
        },
        hero: {
            badge: "Premier Business Consultancy in UAE",
            headline: "Seamless Corporate Services For Visionary Investors",
            subheadline: "Accelerating your corporate footprint across Dubai and the Northern Emirates with precise licensing, PRO clearances, and strategic local sponsorship."
        },
        services: {
            badge: "What We Do",
            title: "Our Business Services",
            subtitle: "Comprehensive solutions tailored to navigate the entire UAE regulatory landscape efficiently",
            viewDetails: "Inquire Now",
            list: [
                {
                    id: 1,
                    title: "Business Setup & Licensing",
                    description: "Full guidance on mainland, freezone, and offshore business integration in the UAE with rapid document clearance.",
                    iconName: "Briefcase"
                },
                {
                    id: 2,
                    title: "Trade License Services",
                    description: "Facilitating instant licenses, renewals, and approvals across commercial, professional, and industrial trades.",
                    iconName: "FileText"
                },
                {
                    id: 3,
                    title: "Professional PRO Services",
                    description: "Seamless clearance of government, immigration, labor department, and economic registry regulations.",
                    iconName: "ShieldCheck"
                },
                {
                    id: 4,
                    title: "Corporate Banking Assistance",
                    description: "Streamlining custom business account openings, trading finance setup, and private banker consultations.",
                    iconName: "Landmark"
                },
                {
                    id: 5,
                    title: "Visa & Residency Solutions",
                    description: "Processing customized investor Visas, corporate employment cards, family visas, and medical test clearances.",
                    iconName: "Fingerprint"
                },
                {
                    id: 6,
                    title: "Office Space Solutions",
                    description: "Provision of registered business office agreements, fully-staffed flexible co-working spaces, and virtual addresses.",
                    iconName: "Building"
                },
                {
                    id: 7,
                    title: "Tax & VAT Advisory",
                    description: "Assisting with UAE Federal Tax Authority rules, corporate tax calculations, and quarterly VAT return submissions.",
                    iconName: "Percent"
                },
                {
                    id: 8,
                    title: "Trademark & Brand Protection",
                    description: "Defending intellectual properties, securing logo registry patents, and copyright verification in local territories.",
                    iconName: "Lock"
                },
                {
                    id: 9,
                    title: "Local Sponsor Services",
                    description: "Connecting you with reliable, reputable UAE national corporate sponsor agents with airtight power of attorney.",
                    iconName: "Users"
                },
                {
                    id: 10,
                    title: "Golden Visa Consultations",
                    description: "Premium assessment and processing for the prestigious 10-Year UAE Golden Visa residency program.",
                    iconName: "Award"
                }
            ]
        },
        partners: {
            badge: "Our Network",
            title: "Trusted Alliances",
            subtitle: "We collaborate with industry leaders and regulatory entities to guarantee rapid corporate operations",
            fallbackLabel: "Partner",
            valuesBadge: "Core Strengths",
            valuesTitle: "Why Visionaries Choose ZOOL",
            valuesList: [
                {
                    number: "01",
                    title: "Absolute Integrity",
                    description: "Fully transparent processes across all governmental registries and agency services with zero hidden fees."
                },
                {
                    number: "02",
                    title: "Turnkey Speed",
                    description: "We command exceptional turnarounds, ensuring your doors open for trade within record timeframes."
                },
                {
                    number: "03",
                    title: "Expertise & Trust",
                    description: "Our in-house corporate consult directors possess decades of deep regulatory intelligence in mainland and free zone acts."
                },
                {
                    number: "04",
                    title: "Bespoke Priority",
                    description: "Every setup operation receives custom dedicated managers to handle unique operational, visa, or banking demands."
                }
            ],
            list: [
                "Government of Ajman",
                "Ajman Free Zone (AFZ)",
                "Federal Authority for Identity, Citizenship, Customs & Port Security (FAICS)",
                "Emirates Health Services (EHS)",
                "Ministry of Interior (MOI)",
                "Ministry of Justice (MOJ)",
                "ANC Free Zone",
                "Meydan Free Zone",
                "Ras Al Khaimah Economic Zone (RAKEZ)",
                "Air Arabia",
                "Badr Aviation",
                "Emirates",
                "Ethiopian Airlines",
                "Flydubai"
            ]
        },
        about: {
            badge: "Who We Are",
            title: "Your Gateway To UAE Enterprise",
            subtitle: "Empowering global investors and regional startups to establish, operate, and scale business ventures seamlessly.",
            paragraph1: "Founded by industry visionaries, ZOOL Businessmen Services has cemented itself as a benchmark of corporate consultation and business configuration in Ajman, Dubai, and across the UAE.",
            paragraph2: "We act as your local navigation hub, transforming the complexities of corporate structures, commercial legal compliance, and governmental clearances into effortless pathways for your enterprise.",
            differentiatorsTitle: "Our Commitment",
            differentiators: [
                "Unfettered direct access to elite PRO clearance officials.",
                "Precision legal structures protecting your 100% investment shares.",
                "Round-the-clock advisory support via private executive managers.",
                "Bespoke cost templates optimized specifically for your dynamic budget.",
                "End-to-end management spanning initial approvals to corporate bank accounts."
            ]
        },
        contact: {
            badge: "Get In Touch",
            title: "Consolidated Headquarters",
            subtitle: "Visit our state-of-the-art office or call our multilingual coordinators immediately to initiate your company setup.",
            addressLabel: "Corporate Headquarters",
            addressValue: "Aldana - Al Hamidiya 1 - Ajman",
            phoneLabel: "Telephone Desk",
            phones: [
                "+971 56 882 6563"
            ],
            emailLabel: "Corporate Inquiries",
            emailValue: "zoolbusinessmenservicestyoi@gmail.com",
            hoursLabel: "Opening Hours",
            hoursValue: "Monday - Saturday: 08:30 AM - 08:00 PM (Friday break for prayers)",
            mapLabel: "Find Us On Map"
        },
        footer: {
            desc: "ZOOL Businessmen Services is the UAE's premier corporate configuration consultancy. Speed, complete transparency, and expert local command.",
            quickLinks: "Quick Links",
            connect: "Connect",
            allRightsReserved: "All rights reserved."
        }
    },
    ar: {
        company: "زول",
        companySub: "لخدمات رجال الأعمال",
        langToggle: "English",
        callUs: "اتصل بنا",
        getStarted: "ابدأ الآن",
        ourServices: "خدماتنا",
        nav: {
            hero: "الرئيسية",
            services: "الخدمات",
            partners: "شركاؤنا",
            about: "من نحن",
            contact: "اتصل بنا"
        },
        hero: {
            badge: "الاستشارات التجارية الرائدة في دولة الإمارات",
            headline: "خدمات شركات سلسة لأصحاب الرؤى الاستثمارية",
            subheadline: "تسريع حضور شركتك في دبي والإمارات الشمالية بتراخيص دقيقة، وتخليص معاملات PRO، ورعاية محلية استراتيجية."
        },
        services: {
            badge: "ماذا نقدم",
            title: "خدمات الأعمال لدينا",
            subtitle: "حلول شاملة مصممة لتسهيل تنقلك عبر البيئة التنظيمية في دولة الإمارات بكفاءة",
            viewDetails: "استفسر الآن",
            list: [
                {
                    id: 1,
                    title: "تأسيس وترخيص الشركات",
                    description: "توجيه شامل لتأسيس وتكامل الشركات بالبر الرئيسي، المناطق الحرة، والأوفشور في دولة الإمارات.",
                    iconName: "Briefcase"
                },
                {
                    id: 2,
                    title: "إصدار وتجديد الرخص",
                    description: "تسهيل استخراج الرخص الفورية وتجديدها والموافقات التجارية والمهنية والصناعية.",
                    iconName: "FileText"
                },
                {
                    id: 3,
                    title: "خدمات الـ PRO وتخليص المعاملات",
                    description: "تخليص سلس لجميع المعاملات في وزارة الموارد البشرية، الهجرة والجوازات، والدوائر الاقتصادية.",
                    iconName: "ShieldCheck"
                },
                {
                    id: 4,
                    title: "فتح الحسابات البنكية للشركات",
                    description: "تسهيل فتح الحسابات المصرفية للأعمال، ترتيب تمويل التجارة، والتنسيق مع مستشاري البنوك.",
                    iconName: "Landmark"
                },
                {
                    id: 5,
                    title: "الإقامات وتأشيرات الدخول",
                    description: "إصدار وإجراءات فيزا المستثمرين والموظفين وعائلاتهم، وبطاقات العمل والامتحانات الطبية.",
                    iconName: "Fingerprint"
                },
                {
                    id: 6,
                    title: "الحلول والمساحات المكتبية",
                    description: "اتفاقات مكاتب مسجلة معتمدة، ومساحات مكتبية مشتركة مجهزة، وعناوين افتراضية للشركات.",
                    iconName: "Building"
                },
                {
                    id: 7,
                    title: "استشارات الضريبة والزكاة",
                    description: "مساعدة في متطلبات هيئة الضرائب الاتحادية بالإمارات، ضريبة الشركات، وإقرارات ضريبة القيمة المضافة.",
                    iconName: "Percent"
                },
                {
                    id: 8,
                    title: "تسجيل العلامات التجارية وحمايتها",
                    description: "حماية حصرية لأصول الملكية الفكرية والشعارات بوزارة الاقتصاد لحماية علامتك التجارية.",
                    iconName: "Lock"
                },
                {
                    id: 9,
                    title: "خدمات الكفيل المحلي المواطن",
                    description: "توفير شركاء ووكلاء خدمات محليين مواطنين ذوي ثقة ومصداقية مع صياغة اتفاقيات قانونية محكمة.",
                    iconName: "Users"
                },
                {
                    id: 10,
                    title: "إرشادات الإقامة الذهبية",
                    description: "دراسة وتسهيل متطلبات الحصول على الإقامة الذهبية طويلة الأمد (10 سنوات) في دولة الإمارات للأكفاء والمستثمرين.",
                    iconName: "Award"
                }
            ]
        },
        partners: {
            badge: "شبكتنا المتكاملة",
            title: "شركاء النجاح المعتمدين",
            subtitle: "نتعامل مباشرة مع الهيئات الحكومية لتسريع إجراءاتك وضمان إنجاز معاملاتك بأقصى سرعة",
            fallbackLabel: "شريك",
            valuesBadge: "نقاط القوة الأساسية",
            valuesTitle: "لماذا يفضل المستثمرون زول لرجال الأعمال؟",
            valuesList: [
                {
                    number: "٠١",
                    title: "شفافية مطلقة",
                    description: "إجراءات واضحة تمامًا أمام الجهات الحكومية دون أي رسوم إضافية مخفية وغير معلنة."
                },
                {
                    number: "٠٢",
                    title: "سرعة قياسية",
                    description: "نقدر وقتك الثمين ونتيح لشركتك بدء التبادل التجاري خلال أيام معدودة من بدء المعاملة."
                },
                {
                    number: "٠٣",
                    title: "الخبرة والموثوقية",
                    description: "يضم فريقنا مستشارين يمتلكون عقودًا من الخبرة في القوانين التجارية للمناطق الحرة والبر الرئيسي."
                },
                {
                    number: "٠٤",
                    title: "أولوية استثنائية",
                    description: "نمنح كل عميل مدير حساب وخبير مالي مخصص للإشراف الشخصي على إقاماته وحساباته البنكية."
                }
            ],
            list: [
                "حكومة عجمان (Gov of Ajman)",
                "منطقة عجمان الحرة (AFZ)",
                "الهيئة الاتحادية للهوية والجنسية والجمارك وأمن المنافذ (FAICS)",
                "مؤسسة الإمارات للخدمات الصحية (EHS)",
                "وزارة الداخلية (MOI)",
                "وزارة العدل (MOJ)",
                "منطقة إيه إن سي الحرة (ANC)",
                "منطقة ميدان الحرة (Meydan)",
                "منطقة رأس الخيمة الاقتصادية (RAKEZ)",
                "العربية للطيران (Air Arabia)",
                "بدر للطيران (Badr Aviation)",
                "طيران الإمارات (Emirates)",
                "الخطوط الإثيوبية (Ethiopian Airlines)",
                "فلاي دبي (Flydubai)"
            ]
        },
        about: {
            badge: "من نحن",
            title: "بوابتك لتأسيس الأعمال بالإمارات",
            subtitle: "تمكين المستثمرين العالميين والشركات المحلية من النمو بيسر وسلاسة في السوق الإماراتي النشط.",
            paragraph1: "تأسست شركة زول لخدمات رجال الأعمال (ZOOL) كمعيار للريادة والابتكار في مجال استشارات وتأسيس الشركات والمؤسسات في عجمان، دبي وكافة إمارات الدولة.",
            paragraph2: "نحن نمثل بوابتك ونظامك الملاحي المتكامل لتجاوز البنى التنظيمية المعقدة وإدارة الحسابات وتصريحاتPRO القانونية وتحويلها لرحلة سهلة لعملك.",
            differentiatorsTitle: "عهدنا لكم",
            differentiators: [
                "علاقات واتصالات مباشرة مع كبار مسؤولي الدوائر الحكومية والـ PRO.",
                "هيكل قانوني آمن يضمن حقك في الاستثمار والسيطرة بنسبة ١٠٠٪.",
                "دعم استشاري على مدار الساعة بواسطة مدراء حسابات تنفيذيين.",
                "قوالب تكلفة مرنة تم تحسينها لتناسب بدقة ميزانيتك العملية.",
                "رعاية شاملة تبدأ من أول موافقة وحتى إعداد حسابات الشركات المصرفية."
            ]
        },
        contact: {
            badge: "اتصل بنا الآن",
            title: "مقر الإدارة العامة الموحد",
            subtitle: "تفضل بزيارة مقرنا الرئيسي للتحدث لخبراء الاستشارات بالعديد من اللغات لبدء تأسيس نشاطك التجاري.",
            addressLabel: "مقر الشركة الرئيسي",
            addressValue: "الدانة - الحميدية ١ - عجمان",
            phoneLabel: "هاتف المكتب والاستقبال",
            phones: [
                "+971 56 882 6563"
            ],
            emailLabel: "البريد الإلكتروني للشركات",
            emailValue: "zoolbusinessmenservicestyoi@gmail.com",
            hoursLabel: "أوقات المراجعة والعمل",
            hoursValue: "الإثنين - السبت: ٠٨:٣٠ صباحاً - ٠٨:٠٠ مساءً (يوم الجمعة استراحة لأداء الصلاة)",
            mapLabel: "موقعنا على الخريطة"
        },
        footer: {
            desc: "زول لخدمات رجال الأعمال هي الشركة الرائدة في الإمارات لتقديم حلول التأسيس المتكاملة. سرعة، وشفافية مطلقة، وخبرة محلية رائدة.",
            quickLinks: "روابط سريعة",
            connect: "تواصل معنا",
            allRightsReserved: "جميع الحقوق محفوظة."
        }
    }
};
