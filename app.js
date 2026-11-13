// ZAYTOON: bilingual interface + persistent appearance preference.
const STORE = { whatsapp: "201114386413" };
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
$("#year").textContent = new Date().getFullYear();

const translations = {
  en: {
    ".topline": "From the goodness of Sinai <span>✦</span> Order easily via WhatsApp",
    ".logo small": "Olive oil from Sinai",
    ".header nav a:nth-child(1)": "Our product",
    ".header nav a:nth-child(2)": "Our story",
    ".header nav a:nth-child(3)": "Coming soon",
    ".header nav a:nth-child(4)": "Contact",
    ".nav-cta": 'Order now <b>↗</b>',
    ".hero-copy .eyebrow": '<i></i> An olive oil story from Sinai',
    ".hero h1": 'From the goodness of Sinai<br><em>to your table.</em>',
    ".hero .lead": "Authentic nature and simplicity for every table. Discover ZAYTOON olive oil and order your bottle with ease.",
    ".actions .button": 'Discover our product <span>←</span>',
    ".actions .underlink": 'Our story <span>↗</span>',
    ".hero-proof b": "Proudly from Sinai",
    ".hero-proof small": "Olive oil for food use",
    ".round-seal": 'Olive Oil<small>From Sinai</small><b aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8m0-12.8L5.6 18.4"/></svg></b>',
    ".hero-foot span:nth-of-type(3)": "Discover ZAYTOON",
    ".hero-foot .scroll": "Scroll down ↓",
    ".manifesto h2": 'Nature in its essence…<br><em>Simplicity in every detail.</em>',
    ".manifesto > p:last-child": "We bring you olive oil from Sinai: a simple, clear choice for your table every day.",
    ".product-section .section-head .eyebrow": "Our selection",
    ".product-section .section-head h2": 'One product,<br><em>a story worth sharing.</em>',
    ".product-copy h3": "ZAYTOON Olive Oil",
    ".product-pill": "1 Liter",
    ".product-copy > p:not(.eyebrow)": "Olive oil from Sinai, suitable for food use and adding a special touch to your dishes.",
    ".detail span": "Origin",
    ".detail b": "Sinai – Egypt",
    ".price span": "Price",
    ".product-copy .wide": 'Order via WhatsApp <span>↗</span>',
    ".hint": "We’ll confirm the price and order details with you directly.",
    ".features .section-head h2": 'From the land of Sinai,<br><em>to your home.</em>',
    ".feature-intro": "We believe the right choice starts with clear information and a product with a story you know.",
    ".feature-grid article:nth-child(1) h3": "From Sinai",
    ".feature-grid article:nth-child(1) p": "Olive oil from the land of Egyptian Sinai.",
    ".feature-grid article:nth-child(2) h3": "1-liter bottle",
    ".feature-grid article:nth-child(2) p": "A bottle suited to everyday use at home.",
    ".feature-grid article:nth-child(3) h3": "For food use",
    ".feature-grid article:nth-child(3) p": "For salads, dipping, and everyday recipes.",
    ".story-copy h2": 'Our story begins<br>in <em>Sinai.</em>',
    ".story-copy > p:not(.eyebrow)": "ZAYTOON is a name inspired by the olive tree and our appreciation for nature and simplicity. We are starting with our first product and hope to become part of every Egyptian home.",
    ".story-copy .underlink": 'Let’s stay in touch <span>↗</span>',
    ".coming h2": 'This is <em>just the beginning.</em>',
    ".coming > p": "We’re preparing new things in the world of ZAYTOON. Stay close and discover them when they arrive.",
    ".soon-grid article:nth-child(1) b": "New products",
    ".soon-grid article:nth-child(2) b": "More choices",
    ".soon-grid article:nth-child(3) b": "ZAYTOON surprises",
    ".uses h2": 'A touch of olive oil<br><em>completes your meal.</em>',
    ".uses-grid div:nth-child(1) b": "On salads",
    ".uses-grid div:nth-child(2) b": "With bread and dips",
    ".uses-grid div:nth-child(3) b": "In everyday recipes",
    ".contact h2": 'We’re just<br><em>a message away.</em>',
    ".contact > div:first-child > p:last-child": "For orders or questions, message us on WhatsApp. We’ll be happy to help.",
    ".contact-card .light-button": "Start a WhatsApp chat ↗",
    ".contact-card > span": "Tap to contact us directly",
    "footer .footer-logo small": "From Sinai’s goodness to your table",
    "footer > p": "Nature in its essence.",
    "footer > div a:nth-child(1)": "Our product",
    "footer > div a:nth-child(2)": "Coming soon",
    "footer > div a:nth-child(3)": "Contact us",
    "footer .copy": "© <span id=\"year\"></span> ZAYTOON. All rights reserved."
  },
  ar: {
    ".topline": "من خير أرض سيناء <span>✦</span> اطلب بسهولة عبر واتساب",
    ".logo small": "زيت زيتون من سيناء",
    ".header nav a:nth-child(1)": "منتجنا",
    ".header nav a:nth-child(2)": "حكايتنا",
    ".header nav a:nth-child(3)": "قريباً",
    ".header nav a:nth-child(4)": "تواصل معنا",
    ".nav-cta": 'اطلب الآن <b>↗</b>',
    ".hero-copy .eyebrow": '<i></i> حكاية زيتون من سيناء',
    ".hero h1": 'من خير أرض سيناء<br><em>إلى مائدتك.</em>',
    ".hero .lead": "طبيعة أصيلة، وبساطة تليق بكل مائدة. اكتشف زيت زيتون ZAYTOON واطلب عبوتك بكل سهولة.",
    ".actions .button": 'اكتشف منتجنا <span>←</span>',
    ".actions .underlink": 'اعرف حكايتنا <span>↗</span>',
    ".hero-proof b": "من سيناء، بكل فخر",
    ".hero-proof small": "زيت زيتون للاستخدام الغذائي",
    ".round-seal": 'زيت زيتون<small>من سيناء</small><b aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8m0-12.8L5.6 18.4"/></svg></b>',
    ".hero-foot span:nth-of-type(3)": "اكتشف ZAYTOON",
    ".hero-foot .scroll": "مرر للأسفل ↓",
    ".manifesto h2": 'الطبيعة في أصلها…<br><em>والبساطة في كل تفصيلة.</em>',
    ".manifesto > p:last-child": "بنقدملك زيت زيتون من سيناء، علشان يكون اختيار بسيط وواضح على مائدتك كل يوم.",
    ".product-section .section-head .eyebrow": "اختيارنا ليك",
    ".product-section .section-head h2": 'منتج واحد،<br><em>وحكاية تستاهل.</em>',
    ".product-copy h3": "زيت زيتون ZAYTOON",
    ".product-pill": "1 لتر",
    ".product-copy > p:not(.eyebrow)": "زيت زيتون من سيناء، مناسب للاستخدام الغذائي وإضافة لمسة مميزة لأطباقك.",
    ".detail:nth-of-type(1) span": "الحجم",
    ".detail:nth-of-type(1) b": "1 لتر",
    ".detail:nth-of-type(2) span": "المنشأ",
    ".detail:nth-of-type(2) b": "سيناء – مصر",
    ".price span": "السعر",
    ".product-copy .wide": 'اطلب عبر واتساب <span>↗</span>',
    ".hint": "هنأكد معاك السعر وتفاصيل الطلب مباشرة.",
    ".features .section-head h2": 'من أرض سيناء،<br><em>لبيتك.</em>',
    ".feature-intro": "بنؤمن إن الاختيار الصح يبدأ بمعلومة واضحة ومنتج تعرف حكايته.",
    ".feature-grid article:nth-child(1) h3": "من سيناء",
    ".feature-grid article:nth-child(1) p": "زيت زيتون من أرض سيناء المصرية.",
    ".feature-grid article:nth-child(2) h3": "عبوة 1 لتر",
    ".feature-grid article:nth-child(2) p": "عبوة مناسبة للاستخدام اليومي في بيتك.",
    ".feature-grid article:nth-child(3) h3": "للاستخدام الغذائي",
    ".feature-grid article:nth-child(3) p": "للسلطات والتغميس ووصفاتك اليومية.",
    ".story-copy h2": 'حكايتنا تبدأ<br>من <em>سيناء.</em>',
    ".story-copy > p:not(.eyebrow)": "ZAYTOON اسم مستوحى من شجرة الزيتون، ومن تقديرنا للطبيعة والبساطة. بنبدأ بمنتجنا الأول، ونتمنى نكون جزء من تفاصيل كل بيت مصري.",
    ".story-copy .underlink": 'خلينا على تواصل <span>↗</span>',
    ".coming h2": 'دي <em>لسه البداية.</em>',
    ".coming > p": "بنحضّر لحاجات جديدة في عالم ZAYTOON. خليك قريب واكتشفها أول ما تنزل.",
    ".soon-grid article:nth-child(1) b": "منتجات جديدة",
    ".soon-grid article:nth-child(2) b": "اختيارات أكتر",
    ".soon-grid article:nth-child(3) b": "مفاجآت ZAYTOON",
    ".uses h2": 'لمسة زيت زيتون<br><em>تكمّل أكلتك.</em>',
    ".uses-grid div:nth-child(1) b": "على السلطات",
    ".uses-grid div:nth-child(2) b": "مع الخبز والتغميس",
    ".uses-grid div:nth-child(3) b": "في وصفاتك اليومية",
    ".contact h2": 'إحنا على<br><em>بُعد رسالة.</em>',
    ".contact > div:first-child > p:last-child": "للطلب أو الاستفسار، ابعتلنا على واتساب وهنكون معاك.",
    ".contact-card .light-button": "ابدأ محادثة واتساب ↗",
    ".contact-card > span": "اضغط للتواصل المباشر",
    "footer .footer-logo small": "من خير أرض سيناء إلى مائدتك",
    "footer > p": "الطبيعة في أصلها.",
    "footer > div a:nth-child(1)": "منتجنا",
    "footer > div a:nth-child(2)": "قريباً",
    "footer > div a:nth-child(3)": "تواصل معنا",
    "footer .copy": "© <span id=\"year\"></span> ZAYTOON. جميع الحقوق محفوظة."
  }
};

function setLanguage(lang) {
  const dict = translations[lang] || translations.ar;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  Object.entries(dict).forEach(([selector, value]) => {
    const el = $(selector);
    if (el) el.innerHTML = value;
  });
  $("#year").textContent = new Date().getFullYear();
  $("#price").textContent = lang === "ar" ? "يُحدد قريباً" : "To be confirmed";
  $(".language-toggle").textContent = lang === "ar" ? "EN" : "ع";
  $(".language-toggle").title = lang === "ar" ? "Switch to English" : "التبديل إلى العربية";
  $(".hamb").setAttribute("aria-label", lang === "ar" ? "فتح القائمة" : "Open menu");
  $(".theme-toggle").setAttribute("aria-label", document.body.classList.contains("dark-mode") ? (lang === "ar" ? "إيقاف الوضع الليلي" : "Turn off dark mode") : (lang === "ar" ? "تفعيل الوضع الليلي" : "Enable dark mode"));
  document.title = lang === "ar" ? "ZAYTOON — من خير أرض سيناء إلى مائدتك" : "ZAYTOON — From Sinai to Your Table";
  $('meta[name="description"]').content = lang === "ar" ? "ZAYTOON زيت زيتون من سيناء. اكتشف عبوة اللتر واطلب مباشرة عبر واتساب." : "ZAYTOON olive oil from Sinai, Egypt. Discover our 1-liter bottle and order directly on WhatsApp.";
  const orderText = lang === "ar"
    ? "مرحباً ZAYTOON، حابب أطلب زيت زيتون 1 لتر. الاسم: ... الكمية: ... المنطقة: ..."
    : "Hello ZAYTOON, I would like to order 1 liter of olive oil. Name: ... Quantity: ... Area: ...";
  $(".product-copy .wide").href = `https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent(orderText)}`;
  $(".nav-cta").href = `https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent(lang === "ar" ? "مرحباً ZAYTOON، حابب أطلب زيت زيتون 1 لتر" : "Hello ZAYTOON, I would like to order 1 liter of olive oil.")}`;
  $(".contact-card .light-button").href = `https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent(lang === "ar" ? "مرحباً ZAYTOON، حابب أستفسر عن المنتج" : "Hello ZAYTOON, I have a question about your product.")}`;
  $(".whatsapp-float").setAttribute("aria-label", lang === "ar" ? "اطلب عبر واتساب" : "Order via WhatsApp");
  localStorage.setItem("zaytoon-language", lang);
}
const savedLanguage = localStorage.getItem("zaytoon-language") || "ar";
const savedTheme = localStorage.getItem("zaytoon-theme") || "light";
if (savedTheme === "dark") document.body.classList.add("dark-mode");
$(".theme-toggle").innerHTML = savedTheme === "dark"
  ? '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/></svg>'
  : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 15.5A8 8 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5Z"/></svg>';
$(".theme-toggle").addEventListener("click", () => {
  const dark = document.body.classList.toggle("dark-mode");
  localStorage.setItem("zaytoon-theme", dark ? "dark" : "light");
  $(".theme-toggle").innerHTML = dark
    ? '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/></svg>'
    : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 15.5A8 8 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5Z"/></svg>';
  setLanguage(document.documentElement.lang || "ar");
});
$(".language-toggle").addEventListener("click", () => setLanguage(document.documentElement.lang === "ar" ? "en" : "ar"));

const toggle = $(".hamb");
const nav = $(".header nav");
toggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
setLanguage(savedLanguage);
