const supportEmail = 'hasan_alay@outlook.com';
const testflightUrl = 'https://testflight.apple.com/join/gZMW6HEr';
const appStoreUrl = {
  tr: 'https://apps.apple.com/tr/app/vaktio/id6774295131?l=tr',
  en: 'https://apps.apple.com/us/app/vaktio/id6774295131',
};
const basePath = import.meta.env.BASE_URL || '/';
const normalizedBasePath = basePath.endsWith('/') ? basePath : `${basePath}/`;
const withBase = (path) => `${normalizedBasePath}${path.replace(/^\/+/, '')}`;

const buildMailto = (subject, body) =>
  `mailto:${supportEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export const site = {
  brand: 'HHStudio',
  title: 'Vaktio+',
  description: 'Namaz vakitleri, kıble ve günlük takip için sade bir ürün sayfası.',
  version: '1.0.0',
  defaultLocale: 'tr',
  locales: ['tr', 'en'],
  testflightUrl,
  supportEmail,
  supportSubject: 'Vaktio+ Destek',
  supportBody: 'Merhaba,\n\nCihaz modeli:\nİşletim sistemi:\nUygulama sürümü: 1.0.0\nSorun / öneri:\n',
  supportMailto: {
    tr: buildMailto('Vaktio+ Destek', 'Merhaba,\n\nCihaz modeli:\nİşletim sistemi:\nUygulama sürümü: 1.0.0\nSorun / öneri:\n'),
    en: buildMailto('Vaktio+ Support', 'Hello,\n\nDevice model:\nOperating system:\nApp version: 1.0.0\nIssue / suggestion:\n'),
  },
  homePath: normalizedBasePath,
  vaktioPath: withBase('vaktio/'),
  privacyPath: withBase('vaktio/privacy/'),
  supportPath: withBase('vaktio/support/'),
  faviconPath: withBase('assets/apps/vaktio-plus/favicon.png'),
  touchIconPath: withBase('assets/apps/vaktio-plus/icon.png'),
  ogImage: withBase('assets/apps/vaktio-plus/panel.png'),
};

export const app = {
  id: 'vaktio-plus',
  name: 'Vaktio+',
  icon: withBase('assets/apps/vaktio-plus/icon.png'),
  screenshots: [
    {
      src: withBase('assets/apps/vaktio-plus/1.png'),
      width: 415,
      height: 900,
    },
    {
      src: withBase('assets/apps/vaktio-plus/2.png'),
      width: 415,
      height: 900,
    },
    {
      src: withBase('assets/apps/vaktio-plus/3.png'),
      width: 415,
      height: 900,
    },
    {
      src: withBase('assets/apps/vaktio-plus/4.png'),
      width: 415,
      height: 900,
    },
    {
      src: withBase('assets/apps/vaktio-plus/5.png'),
      width: 415,
      height: 900,
    },
    {
      src: withBase('assets/apps/vaktio-plus/6.png'),
      width: 415,
      height: 900,
    },
  ],
};

export const copy = {
  tr: {
    common: {
      close: 'Kapat',
      language: 'Dil',
    },
    home: {
      pageTitle: 'Vaktio+ · HHStudio',
      pageDescription: 'Namaz vakitleri, kıble ve günlük takip için sade bir ürün sayfası.',
      hero: {
        tagline: 'Namaz ritmini sakin tutar.',
        iconAlt: 'Vaktio+ uygulama simgesi',
        ctas: [
          {
            label: 'TestFlight aç',
            href: testflightUrl,
            variant: 'primary',
          },
          {
            label: 'App Store',
            href: appStoreUrl.tr,
            variant: 'secondary',
            icon: 'app-store',
          },
          {
            label: 'Google Play · Yakında',
            href: null,
            variant: 'placeholder',
          },
        ],
      },
      sections: {
        screenshots: 'Ekranlar',
        features: 'Özellikler',
      },
      screenshots: [
        'Vaktio+ ekran görüntüsü 1',
        'Vaktio+ ekran görüntüsü 2',
        'Vaktio+ ekran görüntüsü 3',
        'Vaktio+ ekran görüntüsü 4',
        'Vaktio+ ekran görüntüsü 5',
        'Vaktio+ ekran görüntüsü 6',
      ],
      features: [
        {
          title: 'Vakit takibi',
          description: 'Günlük namaz akışını tek bakışta sakin biçimde izle.',
        },
        {
          title: 'Kaçırılan namazlar',
          description: 'Kaza olan vakitleri düzenli ve görünür tut.',
        },
        {
          title: 'Manevi ilham',
          description: 'Hadisler ve güzel sözlerle güne yumuşak bir dokunuş kat.',
        },
        {
          title: 'Çevrimdışı kullanım',
          description: 'Temel içeriklere internet olmadan da eriş.',
        },
        {
          title: 'Paylaşılabilir kartlar',
          description: 'Beğendiğin kartları tek dokunuşla paylaş.',
        },
        {
          title: 'Detaylı metrikler',
          description: 'Günlük ve haftalık ilerlemeyi temiz bir panelde gör.',
        },
        {
          title: 'Daha fazlası yakında',
          description: 'Yeni araçlar, içerikler ve ayrıntılar üzerinde çalışıyoruz.',
          badge: 'Yakında',
          variant: 'soon',
        },
      ],
      footer: {
        support: 'Destek',
        privacy: 'Gizlilik',
      },
      footerBrandAria: 'Vaktio+ ana sayfa',
      footerNavAria: 'Alt bilgi',
      lightboxDialog: 'Büyütülmüş ekran görüntüsü',
    },
    support: {
      pageTitle: 'Destek · Vaktio+',
      pageDescription: 'Vaktio+ için destek ve geri bildirim kanalları.',
      back: 'Ana sayfa',
      eyebrow: 'Destek',
      title: 'Destek',
      lede: 'Vaktio+ için sorun, öneri veya mağaza inceleme notlarını buradan gönderebilirsin. Resmî destek e-postası ve TestFlight bağlantısı aşağıda.',
      emailCard: {
        title: 'E-posta desteği',
        subtitle: supportEmail,
        description: 'Vaktio+ sürüm 1.0.0 için doğrudan mesaj gönder.',
        href: site.supportMailto.tr,
      },
      testflightCard: {
        title: 'TestFlight',
        subtitle: 'iPhone beta ve tester geri bildirimi',
        description: 'Kurulum ve test notları için aynı bağlantıyı kullan.',
      },
      checklistHeading: 'Gönderirken ekle',
      checklist: [
        'Cihaz modeli ve işletim sistemi sürümü',
        'Sorun oluşmadan önce yaptığın adımlar',
        'Mümkünse ekran görüntüsü veya kısa video',
        'İlgili ekran adı ya da derin bağlantı',
      ],
      noteHeading: 'Kısa not',
      note: 'Destek mesajlarına mümkün olduğunca aynı gün içinde dönmeye çalışırız. Gizlilik veya veri silme sorularında da aynı e-posta kullanılabilir.',
    },
    privacy: {
      pageTitle: 'Gizlilik Politikası · Vaktio+',
      pageDescription: 'Vaktio+ için gizlilik politikası.',
      back: 'Ana sayfa',
      eyebrow: 'Gizlilik Politikası',
      title: 'Gizlilik Politikası',
      lede: 'Vaktio+ hesap gerektirmez. Mümkün olduğunca veri cihazda kalır ve yalnızca uygulama özelliklerini çalıştırmak için kullanılır.',
      updated: 'Son güncelleme: 29 Mayıs 2026',
      sections: [
        {
          title: 'Cihazda tutulan veriler',
          items: [
            'Seçili ve kayıtlı konumlar',
            'Namaz tamamlama geçmişi ve kaza kayıtları',
            'Bildirim tercihleri, tema, dil ve diğer ayarlar',
            'Widget verileri ve uygulama grubu paylaşımı',
            'Yerel analiz etkinlikleri ve hata ayıklama metrikleri',
          ],
        },
        {
          title: 'İzinler ve kullanım',
          items: [
            'Konum: yakın vakitleri ve kıble yönünü hesaplamak için',
            'Bildirimler: namaz ve kaza hatırlatmaları için',
            'Fotoğraflar: paylaşım kartlarını kaydetmek için',
            'Android tam alarm: zamanlı hatırlatmalar için',
            'Reklam kimliği / izleme: reklam ve ölçüm özellikleri açık olduğunda',
          ],
        },
        {
          title: 'Üçüncü taraf hizmetler',
          items: [
            'Namaz vakti aramalarında şehir / ilçe sorgusu harici namaz vakti servisine gönderilebilir',
            'Google Mobile Ads, reklam gösterildiğinde cihaz ve etkileşim verilerini işleyebilir',
            'TestFlight, iPhone beta dağıtımı için Apple tarafından sağlanır',
          ],
        },
        {
          title: 'Veri kontrolü',
          items: [
            'Uygulamayı silmek çoğu yerel veriyi cihazdan kaldırır',
            'İzinleri sistem ayarlarından kapatabilirsin',
            'Veri veya gizlilik soruları için destekle iletişime geçebilirsin',
          ],
        },
      ],
      contactHeading: 'İletişim',
      contactLabel: 'Destek:',
    },
  },
  en: {
    common: {
      close: 'Close',
      language: 'Language',
    },
    home: {
      pageTitle: 'Vaktio+ · HHStudio',
      pageDescription: 'A calm product page for prayer times, qibla, and daily tracking.',
      hero: {
        tagline: 'Keeps your prayer rhythm calm.',
        iconAlt: 'Vaktio+ app icon',
        ctas: [
          {
            label: 'Open TestFlight',
            href: testflightUrl,
            variant: 'primary',
          },
          {
            label: 'App Store',
            href: appStoreUrl.en,
            variant: 'secondary',
            icon: 'app-store',
          },
          {
            label: 'Google Play · Soon',
            href: null,
            variant: 'placeholder',
          },
        ],
      },
      sections: {
        screenshots: 'Screens',
        features: 'Features',
      },
      screenshots: [
        'Vaktio+ app screenshot 1',
        'Vaktio+ app screenshot 2',
        'Vaktio+ app screenshot 3',
        'Vaktio+ app screenshot 4',
        'Vaktio+ app screenshot 5',
        'Vaktio+ app screenshot 6',
      ],
      features: [
        {
          title: 'Prayer tracking',
          description: 'Follow your daily prayer rhythm in one calm view.',
        },
        {
          title: 'Missed prayers',
          description: 'Keep missed prayers organized and visible.',
        },
        {
          title: 'Spiritual inspiration',
          description: 'Lift the day with hadiths and thoughtful words.',
        },
        {
          title: 'Offline ready',
          description: 'Core content works even without a connection.',
        },
        {
          title: 'Shareable cards',
          description: 'Share the cards you like with a single tap.',
        },
        {
          title: 'Detailed metrics',
          description: 'Review daily and weekly trends in a clean panel.',
        },
        {
          title: 'More coming soon',
          description: 'New tools, content, and details are on the way.',
          badge: 'Soon',
          variant: 'soon',
        },
      ],
      footer: {
        support: 'Support',
        privacy: 'Privacy',
      },
      footerBrandAria: 'Vaktio+ home',
      footerNavAria: 'Footer',
      lightboxDialog: 'Expanded screenshot',
    },
    support: {
      pageTitle: 'Support · Vaktio+',
      pageDescription: 'Support and feedback channels for Vaktio+.',
      back: 'Home',
      eyebrow: 'Support',
      title: 'Support',
      lede: 'Send bug reports, suggestions, or store review notes here. The official support email and TestFlight link are below.',
      emailCard: {
        title: 'Email support',
        subtitle: supportEmail,
        description: 'Send a direct message for Vaktio+ version 1.0.0.',
        href: site.supportMailto.en,
      },
      testflightCard: {
        title: 'TestFlight',
        subtitle: 'iPhone beta and tester feedback',
        description: 'Use the same link for installation and test notes.',
      },
      checklistHeading: 'Include when you write',
      checklist: [
        'Device model and operating system version',
        'Steps you took before the issue',
        'A screenshot or short video if possible',
        'The relevant screen name or deep link',
      ],
      noteHeading: 'Short note',
      note: 'We try to reply to support messages within the same day whenever possible. Use the same email for privacy or data deletion questions.',
    },
    privacy: {
      pageTitle: 'Privacy Policy · Vaktio+',
      pageDescription: 'Privacy policy for Vaktio+.',
      back: 'Home',
      eyebrow: 'Privacy Policy',
      title: 'Privacy Policy',
      lede: 'Vaktio+ does not require an account. Whenever possible, data stays on the device and is used only to power app features.',
      updated: 'Last updated: May 29, 2026',
      sections: [
        {
          title: 'Data kept on the device',
          items: [
            'Selected and saved locations',
            'Prayer completion history and missed-prayer records',
            'Notification preferences, theme, language, and other settings',
            'Widget data and app-group sharing',
            'Local analytics events and debugging metrics',
          ],
        },
        {
          title: 'Permissions and usage',
          items: [
            'Location: to calculate nearby prayer times and qibla direction',
            'Notifications: for prayer and missed-prayer reminders',
            'Photos: to save share cards',
            'Exact alarms on Android: for timed reminders',
            'Advertising ID / tracking: when ads and measurement features are enabled',
          ],
        },
        {
          title: 'Third-party services',
          items: [
            'Prayer time lookups may send city / district queries to an external prayer-time service',
            'Google Mobile Ads may process device and interaction data when ads are shown',
            "TestFlight is Apple's service for distributing iPhone beta builds",
          ],
        },
        {
          title: 'Data control',
          items: [
            'Deleting the app usually removes most local data from the device',
            'You can disable permissions in system settings',
            'You can contact support with data or privacy questions',
          ],
        },
      ],
      contactHeading: 'Contact',
      contactLabel: 'Support:',
    },
  },
};
