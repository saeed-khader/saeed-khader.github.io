export const EMAIL = "saeeedkhzh@gmail.com";
export const CV_PATH = "/saeed-alzahrani-cv.pdf";

export const MAIL_SUBJECT = "فرصة وظيفية — سعيد خضر الزهراني";
export const MAIL_BODY = `مرحبًا سعيد،

اطلعت على ملفك وأرغب في التواصل معك بخصوص فرصة وظيفية في مجال التقنية.

اسم الشركة:
المسمى الوظيفي:
نبذة عن الفرصة:
طريقة التواصل:`;

export function mailto(subject = MAIL_SUBJECT, body = MAIL_BODY) {
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export type Lang = "ar" | "en";
type T = Record<Lang, string>;

export const nav: { id: string; label: T }[] = [
  { id: "home", label: { ar: "الرئيسية", en: "Home" } },
  { id: "about", label: { ar: "عنّي", en: "About" } },
  { id: "experience", label: { ar: "الخبرة", en: "Experience" } },
  { id: "skills", label: { ar: "المهارات", en: "Skills" } },
  { id: "project", label: { ar: "المشروع", en: "Project" } },
  { id: "certifications", label: { ar: "الشهادات", en: "Certifications" } },
  { id: "contact", label: { ar: "تواصل", en: "Contact" } },
];

export const content = {
  name: { ar: "سعيد خضر الزهراني", en: "Saeed Khader Alzahrani" },
  shortName: { ar: "سعيد خضر", en: "Saeed K." },
  role: {
    ar: "تقنية معلومات • شبكات • دعم فني",
    en: "Information Technology • Networking • IT Support",
  },
  heroTagline: {
    ar: "أخصائي تقنية معلومات | دعم فني | شبكات | خدمة عملاء",
    en: "IT Specialist | Technical Support | Networking | Customer Service",
  },
  location: { ar: "جدة / رابغ — المملكة العربية السعودية", en: "Jeddah / Rabigh — Saudi Arabia" },
  ui: {
    availability: { ar: "متاح لوظيفة تقنية", en: "Available for a technical role" },
    freshGrad: { ar: "حديث تخرج 2026", en: "Class of 2026 Graduate" },
    contactCta: { ar: "تواصل معي", en: "Get in touch" },
    exploreCta: { ar: "استكشف أعمالي", en: "Explore my work" },
    cvCta: { ar: "تحميل السيرة الذاتية", en: "Download CV" },
    cvCtaPdf: { ar: "تحميل السيرة الذاتية PDF", en: "Download CV (PDF)" },
    copyEmail: { ar: "نسخ البريد", en: "Copy email" },
    copied: { ar: "تم نسخ البريد الإلكتروني", en: "Email address copied" },
    sendOpportunity: { ar: "أرسل فرصة وظيفية", en: "Send an opportunity" },
    sendMeOne: { ar: "أرسل لي فرصة", en: "Send me an opportunity" },
    navCta: { ar: "فرصة وظيفية؟", en: "Have a role?" },
    menu: { ar: "القائمة", en: "Menu" },
    close: { ar: "إغلاق", en: "Close" },
  },
  hero: {
    kicker: { ar: "PROFILE / IT-01", en: "PROFILE / IT-01" },
    headline: {
      ar: "تقنية معلومات، شبكات، ودعم تقني — بعقلية تحل المشكلة قبل أن تكبر.",
      en: "IT, networking and technical support — with a mindset that solves problems before they grow.",
    },
    sub: {
      ar: "متخصص تقنية معلومات بخلفية أكاديمية في إدارة الشبكات وأمنها، وخبرة عملية في الدعم الفني وتشخيص المشكلات التقنية، مع اهتمام ببناء تجارب تقنية موثوقة وسهلة الاستخدام.",
      en: "IT professional with an academic background in network administration and security, hands-on experience in technical support and diagnostics, and a focus on reliable, easy-to-use digital experiences.",
    },
  },
  about: {
    title: { ar: "من أنا؟", en: "Who am I?" },
    label: { ar: "SYSTEM / 001", en: "SYSTEM / 001" },
    philosophy: {
      ar: "التقنية ليست أنظمة فقط. التقنية أن يبقى الناس قادرين على العمل.",
      en: "Technology is not only about systems. It is about keeping people productive.",
    },
    body: [
      {
        ar: "درست تقنية المعلومات في جامعة الملك عبدالعزيز بتخصص إدارة الشبكات وأمنها، وتخرجت بمعدل 4.52 من 5.00 بتقدير ممتاز مع مرتبة الشرف. الجانب الأكاديمي منحني فهمًا للبنية التحتية وكيف تُبنى الأنظمة وتُحمى.",
        en: "I studied Information Technology at King Abdulaziz University, specializing in Network Administration & Security, graduating with a 4.52 / 5.00 GPA — Excellent with Honors. The academic side gave me a structural understanding of infrastructure: how systems are built and protected.",
      },
      {
        ar: "الجانب العملي جاء من الدعم الفني: التعامل المباشر مع المستخدمين، تشخيص الأعطال في الأجهزة والشبكات، وإعداد الأنظمة والتطبيقات والملحقات. هناك تعلمت أن نصف الحل هو أن تفهم المستخدم، والنصف الآخر أن تصل إلى السبب الحقيقي لا العرض الظاهر.",
        en: "The practical side came from IT support: working directly with users, diagnosing hardware and network faults, and configuring systems, applications and peripherals. There I learned that half the solution is understanding the user, and the other half is reaching the real cause rather than the visible symptom.",
      },
      {
        ar: "ما أبحث عنه اليوم هو فريق تقني تُقاس فيه الجودة بثبات الخدمة ووضوح التواصل — لا بعدد التذاكر المغلقة.",
        en: "What I look for today is a technical team where quality is measured by service stability and clarity of communication — not by the number of closed tickets.",
      },
    ],
  },
  education: {
    label: { ar: "EDUCATION / KAU", en: "EDUCATION / KAU" },
    gpa: "4.52",
    gpaMax: "5.00",
    honors: { ar: "ممتاز مع مرتبة الشرف", en: "Excellent with Honors" },
    degree: { ar: "بكالوريوس تقنية المعلومات", en: "Bachelor of Information Technology" },
    track: { ar: "إدارة الشبكات وأمنها", en: "Network Administration & Security" },
    university: { ar: "جامعة الملك عبدالعزيز", en: "King Abdulaziz University" },
    year: "2026",
  },
  experience: {
    title: { ar: "لمحة مهنية", en: "Career snapshot" },
    label: { ar: "TIMELINE / 002", en: "TIMELINE / 002" },
    items: [
      {
        period: { ar: "2026", en: "2026" },
        title: { ar: "بكالوريوس تقنية المعلومات", en: "Bachelor of Information Technology" },
        org: { ar: "جامعة الملك عبدالعزيز", en: "King Abdulaziz University" },
        meta: {
          ar: "إدارة الشبكات وأمنها · 4.52 / 5.00 · ممتاز مع مرتبة الشرف",
          en: "Network Administration & Security · 4.52 / 5.00 · Excellent with Honors",
        },
        points: [] as { ar: string; en: string }[],
      },
      {
        period: { ar: "نوفمبر 2025 — مايو 2026", en: "November 2025 — May 2026" },
        title: { ar: "أخصائي دعم تقني", en: "IT Support Specialist" },
        org: { ar: "شركة نهج الإنصاف", en: "Nahj Al-Insaf Company" },
        meta: { ar: "خبرة عملية في الدعم الفني", en: "Hands-on technical support experience" },
        points: [
          { ar: "دعم فني من الخط الأول للمستخدمين", en: "First-line technical support for users" },
          { ar: "تشخيص وإصلاح أعطال الأجهزة", en: "Hardware troubleshooting" },
          { ar: "تشخيص مشكلات الشبكة", en: "Network troubleshooting" },
          { ar: "إعداد وتهيئة الأنظمة والتطبيقات", en: "System and application configuration" },
          { ar: "تجهيز الطابعات والملحقات", en: "Printer and peripheral setup" },
          { ar: "تحليل المشكلات المتكررة", en: "Diagnosing recurring issues" },
          { ar: "التواصل مع المستخدمين بوضوح", en: "Clear user communication" },
          { ar: "العمل ضمن الفريق التقني", en: "Collaboration within the technical team" },
          {
            ar: "بنيت بوتًا آليًا احترافيًا يتابع جلسات وقضايا المحامي، وينسّق مواعيدها، ويرسل تنبيهات تلقائية بمواعيدها",
            en: "Built a professional automation bot that tracks the lawyer's sessions and cases, coordinates their appointments, and sends automatic reminders",
          },
        ],
      },
      {
        period: { ar: "2021 — حتى الآن", en: "2021 — Present" },
        title: { ar: "صاحب متجر إلكتروني", en: "E-commerce Store Owner" },
        org: { ar: "مشروع تجاري خاص", en: "Independent business" },
        meta: {
          ar: "5 سنوات خبرة عملية في التجارة الإلكترونية",
          en: "5 years of hands-on e-commerce experience",
        },
        points: [
          {
            ar: "تشغيل متجر إلكتروني يقدّم خدمات رقمية للعملاء",
            en: "Running an online store that provides digital services to customers",
          },
          {
            ar: "إدارة الطلبات والتواصل المباشر مع العملاء",
            en: "Order management and direct customer communication",
          },
        ],
      },
    ],
  },
  skills: {
    title: { ar: "منظومة القدرات", en: "Capability system" },
    label: { ar: "CAPABILITIES / 003", en: "CAPABILITIES / 003" },
    groups: [
      {
        name: { ar: "الدعم التقني", en: "IT Support" },
        items: [
          {
            n: { ar: "تشخيص المشكلات التقنية", en: "Technical troubleshooting" },
            d: {
              ar: "الوصول إلى السبب الجذري بخطوات مرتبة وقابلة للتكرار.",
              en: "Reaching root cause through ordered, repeatable steps.",
            },
          },
          {
            n: { ar: "دعم الأجهزة", en: "Hardware support" },
            d: {
              ar: "فحص وصيانة أجهزة المستخدمين والملحقات المرتبطة بها.",
              en: "Checking and maintaining user machines and attached devices.",
            },
          },
          {
            n: { ar: "تركيب وتهيئة البرمجيات", en: "Software installation & configuration" },
            d: {
              ar: "تجهيز الأنظمة والتطبيقات لتعمل كما يتوقعها المستخدم.",
              en: "Preparing systems and applications to behave as users expect.",
            },
          },
          {
            n: { ar: "دعم الملحقات", en: "Peripheral support" },
            d: {
              ar: "الطابعات والأجهزة الطرفية وإعدادات الطباعة والاتصال.",
              en: "Printers and peripherals, print and connectivity settings.",
            },
          },
          {
            n: { ar: "دعم المستخدم النهائي", en: "End-user support" },
            d: {
              ar: "شرح الحل بلغة مفهومة وترك المستخدم قادرًا على المتابعة.",
              en: "Explaining the fix in plain language so the user can move on.",
            },
          },
        ],
      },
      {
        name: { ar: "الشبكات", en: "Networking" },
        items: [
          {
            n: { ar: "إدارة الشبكات", en: "Network administration" },
            d: {
              ar: "أساس أكاديمي في إدارة الشبكات وتشغيلها.",
              en: "Academic grounding in administering and operating networks.",
            },
          },
          {
            n: { ar: "تشخيص مشكلات الشبكة", en: "Network troubleshooting" },
            d: {
              ar: "عزل مشكلة الاتصال بين الجهاز والشبكة والخدمة.",
              en: "Isolating connectivity issues across device, network and service.",
            },
          },
          {
            n: { ar: "أساسيات الشبكات", en: "Network fundamentals" },
            d: {
              ar: "فهم الطبقات والعناوين ومسارات البيانات.",
              en: "Understanding layers, addressing and data paths.",
            },
          },
          {
            n: { ar: "الوعي بالبنية التقنية", en: "Infrastructure awareness" },
            d: {
              ar: "قراءة الصورة الكاملة قبل تغيير أي إعداد.",
              en: "Reading the whole picture before changing any setting.",
            },
          },
        ],
      },
      {
        name: { ar: "الأمن", en: "Security" },
        items: [
          {
            n: { ar: "أساسيات الأمن السيبراني", en: "Cybersecurity fundamentals" },
            d: {
              ar: "مفاهيم الحماية والمخاطر ضمن مسار إدارة الشبكات وأمنها.",
              en: "Protection and risk concepts from the network security track.",
            },
          },
          {
            n: { ar: "الوعي بأمن المعلومات", en: "Information security awareness" },
            d: {
              ar: "التعامل مع البيانات والصلاحيات بحذر مهني.",
              en: "Handling data and permissions with professional care.",
            },
          },
          {
            n: { ar: "ممارسات تقنية آمنة", en: "Secure IT practices" },
            d: {
              ar: "تطبيق الحل دون فتح باب جديد للمخاطر.",
              en: "Applying fixes without opening a new risk surface.",
            },
          },
        ],
      },
      {
        name: { ar: "مهني", en: "Professional" },
        items: [
          {
            n: { ar: "التواصل مع العملاء", en: "Customer communication" },
            d: {
              ar: "لغة واضحة وهادئة حتى في وقت العطل.",
              en: "Clear, calm language even during outages.",
            },
          },
          {
            n: { ar: "حل المشكلات", en: "Problem solving" },
            d: {
              ar: "منهج مرتب بدل المحاولات العشوائية.",
              en: "A structured method instead of random attempts.",
            },
          },
          {
            n: { ar: "العمل الجماعي", en: "Team collaboration" },
            d: {
              ar: "تسليم واضح للمعلومة داخل الفريق.",
              en: "Clean handover of information inside the team.",
            },
          },
          {
            n: { ar: "إدارة الوقت", en: "Time management" },
            d: {
              ar: "ترتيب الأولويات حسب أثر المشكلة.",
              en: "Prioritising by the impact of the issue.",
            },
          },
          {
            n: { ar: "الانتباه للتفاصيل", en: "Attention to detail" },
            d: {
              ar: "التفصيل الصغير هو غالبًا سبب العطل.",
              en: "The small detail is usually the cause.",
            },
          },
          {
            n: { ar: "التعلم والتكيّف السريع", en: "Fast learning & adaptability" },
            d: {
              ar: "بيئات وأنظمة جديدة بوقت قصير.",
              en: "New environments and systems in short time.",
            },
          },
        ],
      },
    ],
  },
  process: {
    title: { ar: "كيف أتعامل مع المشكلة؟", en: "How I approach a problem" },
    label: { ar: "METHOD / 004", en: "METHOD / 004" },
    steps: [
      {
        n: "01",
        t: { ar: "أفهم", en: "Understand" },
        d: {
          ar: "أفهم المشكلة وسياقها قبل أن أبدأ بالحل.",
          en: "I understand the problem and its context before solving.",
        },
      },
      {
        n: "02",
        t: { ar: "أشخّص", en: "Diagnose" },
        d: {
          ar: "أفصل الأعراض عن السبب الحقيقي للمشكلة.",
          en: "I separate symptoms from the real cause.",
        },
      },
      {
        n: "03",
        t: { ar: "أحل", en: "Resolve" },
        d: {
          ar: "أطبق الحل المناسب بأقل تعقيد ممكن.",
          en: "I apply the right fix with the least complexity.",
        },
      },
      {
        n: "04",
        t: { ar: "أتحقق", en: "Verify" },
        d: {
          ar: "أتأكد أن المشكلة عولجت وأن الخدمة عادت للعمل بصورة مستقرة.",
          en: "I confirm the issue is resolved and the service is stable again.",
        },
      },
    ],
    flow: [
      { ar: "المستخدم", en: "User" },
      { ar: "المشكلة", en: "Issue" },
      { ar: "التشخيص", en: "Diagnosis" },
      { ar: "المعالجة", en: "Resolution" },
      { ar: "خدمة مستقرة", en: "Stable service" },
    ],
  },
  project: {
    label: { ar: "PROJECT / MYFCITR", en: "PROJECT / MYFCITR" },
    name: "MyFCITR",
    title: {
      ar: "منصة رقمية لخدمات الطلاب الأكاديمية",
      en: "A digital platform for student academic services",
    },
    context: {
      ar: "مشروع التخرج — كلية الحاسبات وتقنية المعلومات، جامعة الملك عبدالعزيز. حصل المشروع على دعم مباشر من الجامعة.",
      en: "Graduation project — Faculty of Computing and Information Technology, King Abdulaziz University. The project received direct university support.",
    },
    blocks: [
      {
        k: { ar: "المشكلة", en: "The problem" },
        v: {
          ar: "يحتاج الطلاب إلى وصول أسهل للإجراءات الأكاديمية، وإلى قناة أوضح للتواصل مع إدارة الكلية.",
          en: "Students need easier access to academic processes and a clearer channel for communicating with college administration.",
        },
      },
      {
        k: { ar: "المقاربة", en: "The approach" },
        v: {
          ar: "منصة رقمية مبنية حول الخدمات الأكاديمية التي تمس الطالب مباشرة.",
          en: "A digital platform designed around student-facing academic services.",
        },
      },
      {
        k: { ar: "الحل", en: "The solution" },
        v: {
          ar: "تنقل MyFCITR التفاعلات المهمة للطالب إلى تجربة رقمية أكثر تنظيمًا ووضوحًا.",
          en: "MyFCITR brings important student interactions into a more structured digital experience.",
        },
      },
      {
        k: { ar: "الأثر", en: "Impact" },
        v: {
          ar: "تحسين سهولة الوصول وتنظيم التفاعلات الأكاديمية الموجهة للطلاب.",
          en: "Improved accessibility and organisation of student-facing academic interactions.",
        },
      },
    ],
    modules: [
      {
        t: { ar: "تسجيل المقررات", en: "Course registration" },
        d: {
          ar: "يمكّن الطلاب من إدارة مقرراتهم إلكترونيًا بسرعة وسهولة.",
          en: "Enables students to manage their coursework electronically with speed and ease.",
        },
      },
      {
        t: { ar: "مقترحات الطلاب", en: "Student suggestions" },
        d: {
          ar: "يبني جسرًا مباشرًا بين الطلاب وإدارة الكلية.",
          en: "Creates a bridge between students and college administration.",
        },
      },
    ],
    previewLabel: { ar: "Project Interface Preview", en: "Project Interface Preview" },
    previewNote: {
      ar: "تمثيل تجريدي لواجهة المنصة — الصور الفعلية تُضاف عند توفرها.",
      en: "Abstract representation of the platform interface — actual screens to be added when available.",
    },
  },
  certifications: {
    title: { ar: "الشهادات", en: "Certifications" },
    label: { ar: "CREDENTIALS / 005", en: "CREDENTIALS / 005" },
    items: [
      {
        t: {
          ar: "شهادة مسار إدارة الشبكات وأمنها",
          en: "Network Administration & Security Track Certificate",
        },
        i: { ar: "جامعة الملك عبدالعزيز", en: "King Abdulaziz University" },
      },
      {
        t: { ar: "أساسيات الذكاء الاصطناعي", en: "Fundamentals of Artificial Intelligence" },
        i: { ar: "سدايا", en: "SDAIA" },
      },
      {
        t: {
          ar: "مفاهيم الذكاء الاصطناعي وتطبيقاته المتقدمة",
          en: "AI Concepts and Advanced Applications",
        },
        i: { ar: "سدايا", en: "SDAIA" },
      },
      {
        t: { ar: "إدارة مشاريع تقنية المعلومات", en: "IT Project Management" },
        i: { ar: "دروب", en: "Doroob" },
      },
      {
        t: {
          ar: "استخدام الذكاء الاصطناعي في إدارة الموارد البشرية",
          en: "Using AI in Human Resources Management",
        },
        i: { ar: "دروب", en: "Doroob" },
      },
      {
        t: {
          ar: "الذكاء الاصطناعي وتحليل البيانات في سوق العمل المستقبلي",
          en: "AI and Data Analysis in the Future Labor Market",
        },
        i: { ar: "دروب", en: "Doroob" },
      },
      {
        t: { ar: "الاحتفاظ بالعملاء باحترافية", en: "Professional Customer Retention" },
        i: { ar: "دروب", en: "Doroob" },
      },
    ],
  },
  ai: {
    label: { ar: "SIGNAL / 006", en: "SIGNAL / 006" },
    title: { ar: "توسيع الفهم التقني", en: "Expanding the technical picture" },
    body: {
      ar: "أوسّع فهمي للتقنية من البنية التحتية والدعم إلى تطبيقات الذكاء الاصطناعي الحديثة.",
      en: "I am expanding my understanding of technology from infrastructure and support toward modern AI applications.",
    },
    note: {
      ar: "تدريب موثّق من سدايا ودروب في أساسيات الذكاء الاصطناعي وتطبيقاته، واستخدامه في الموارد البشرية وتحليل البيانات في سوق العمل.",
      en: "Documented training from SDAIA and Doroob covering AI fundamentals and applications, AI in HR, and AI & data analysis in the labour market.",
    },
    tags: [
      { ar: "أساسيات الذكاء الاصطناعي", en: "AI fundamentals" },
      { ar: "مفاهيم وتطبيقات متقدمة", en: "Advanced concepts & applications" },
      { ar: "الذكاء الاصطناعي في الموارد البشرية", en: "AI in HR management" },
      { ar: "الذكاء الاصطناعي وتحليل البيانات", en: "AI & data analysis" },
    ],
  },
  hire: {
    title: { ar: "هل تبحث عن شخص يحل المشكلة؟", en: "Looking for someone who solves the problem?" },
    label: { ar: "MATCH / 007", en: "MATCH / 007" },
    cardTitle: { ar: "لديك احتياج تقني؟", en: "Do you have a technical need?" },
    cardHint: {
      ar: "اختر ما يقرب من حالتك، وسأخبرك بما أستطيع تقديمه.",
      en: "Pick what's closest to your case and I'll tell you what I can offer.",
    },
    options: [
      {
        k: "support",
        label: { ar: "أحتاج دعمًا فنيًا", en: "I need technical support" },
        answer: {
          ar: "إذا كانت الأولوية لديك هي تقليل الأعطال، مساعدة المستخدمين، وتشخيص المشكلات بسرعة ووضوح، دعنا نتحدث.",
          en: "If your priority is fewer outages, supported users, and fast, clear diagnostics — let's talk.",
        },
        subject: {
          ar: "فرصة دعم فني — سعيد خضر الزهراني",
          en: "IT support opportunity — Saeed Khader Alzahrani",
        },
      },
      {
        k: "network",
        label: {
          ar: "أحتاج شخصًا للشبكات والبنية التقنية",
          en: "I need someone for networking & infrastructure",
        },
        answer: {
          ar: "خلفيتي الأكاديمية في إدارة الشبكات وأمنها، وأتعامل مع الشبكة كنظام مترابط لا كأجهزة منفصلة.",
          en: "My academic background is network administration and security, and I treat the network as one connected system, not separate devices.",
        },
        subject: {
          ar: "فرصة شبكات وبنية تقنية — سعيد خضر الزهراني",
          en: "Networking & infrastructure opportunity — Saeed Khader Alzahrani",
        },
      },
      {
        k: "talent",
        label: {
          ar: "أبحث عن موهبة تقنية للانضمام إلى الفريق",
          en: "I'm looking for IT talent to join the team",
        },
        answer: {
          ar: "خريج تقنية معلومات بتقدير ممتاز مع مرتبة الشرف، بخبرة دعم فني عملية واستعداد للتعلم السريع داخل الفريق.",
          en: "An IT graduate with Excellent-with-Honors standing, real support experience, and a readiness to learn fast inside a team.",
        },
        subject: {
          ar: "انضمام إلى الفريق التقني — سعيد خضر الزهراني",
          en: "Joining your technical team — Saeed Khader Alzahrani",
        },
      },
    ],
  },
  modal: {
    title: { ar: "لنختصر الطريق.", en: "Let's keep it short." },
    hint: {
      ar: "لا يوجد نظام بريد في الخلف — سيُفتح تطبيق البريد لديك برسالة مكتوبة مسبقًا.",
      en: "There is no backend mail service here — your email client opens with a pre-written message.",
    },
    fields: {
      name: { ar: "اسمك", en: "Your name" },
      company: { ar: "الشركة", en: "Company" },
      role: { ar: "المسمى الوظيفي", en: "Role title" },
      type: { ar: "نوع الفرصة", en: "Opportunity type" },
      email: { ar: "البريد الإلكتروني", en: "Email address" },
      message: { ar: "رسالتك", en: "Your message" },
    },
    submit: { ar: "إرسال فرصة إلى سعيد", en: "Send opportunity to Saeed" },
  },
  cta: {
    afterExperience: { ar: "هل لديك احتياج تقني واضح؟", en: "Have a clear technical need?" },
    afterProject: {
      ar: "مهتم بالمشروع أو خبرتي؟",
      en: "Interested in the project or my experience?",
    },
    beforeFooter: { ar: "لنتحدث.", en: "Let's talk." },
    heroInline: { ar: "لديك فرصة؟", en: "Have an opportunity?" },
  },
  contact: {
    label: { ar: "CONTACT / 008", en: "CONTACT / 008" },
    statement: {
      ar: "إذا كانت لديك مشكلة تقنية، فرصة وظيفية، أو فريق يحتاج شخصًا يعتمد عليه — لنتحدث.",
      en: "If your team needs someone who can understand the problem, solve it, and keep people moving — let's talk.",
    },
    cta: { ar: "تواصل مع سعيد", en: "Contact Saeed" },
  },
  footer: {
    tagline: {
      ar: "بُني بشغف الفهم. صُمم من أجل الموثوقية.",
      en: "Built with curiosity. Designed for reliability.",
    },
    copyright: { ar: "© 2026 سعيد خضر الزهراني", en: "© 2026 Saeed Khader Alzahrani" },
  },
};
