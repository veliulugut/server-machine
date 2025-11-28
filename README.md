Dağıtım: Cloudflare Pages

Üretim dağıtımı için proje hazırdır. Aşağıdaki adımlarla Cloudflare Pages üzerinde canlıya alabilirsiniz.

1) Gereksinimler
- Node: 18+ (Cloudflare Pages build ortamı)
- Build komutu: `npm run build`
- Çıktı klasörü: `dist`

2) Yerel Build
- Bağımlılıkları kur: `npm ci` (veya `npm install`)
- Derle: `npm run build`
- Yerel önizleme: `npm run preview` (opsiyonel)

3) SPA Yönlendirme (React Router)
- Tek sayfa uygulaması için yönlendirme gereklidir.
- Projeye `public/_redirects` eklendi: `/* /index.html 200`
- Bu dosya build’de `dist/_redirects` olarak yayımlanır ve istemci tarafı rotaları düzgün çalışır.

4) Cloudflare Pages Kurulumu
- Cloudflare hesabında Pages bölümüne gidin.
- “Create a project” → “Connect to Git” ile GitHub deposunu bağlayın.
- Framework preset: “Vite” veya “None” (ikisi de uygundur).
- Build komutu: `npm run build`
- Output directory: `dist`
- Node sürümü: 18 (Build ayarlarında seçilebilir).
- Kaydet ve ilk build’i başlatın. Tamamlandığında `https://<proje>.pages.dev` altında yayınlanır.

5) Özel Alan Adı
- Pages projesinde “Custom domains” → “Set up a custom domain”.
- Alan adınız Cloudflare DNS altında ise kayıt otomatik eklenir.
- Harici DNS kullanıyorsanız `CNAME` ile `<proje>.pages.dev`’e yönlendirin.

6) Önerilen Ayarlar
- Cache Rules: `/assets/*` için uzun süreli önbellekleme, HTML için kısa TTL.
- Güvenlik: “Always Use HTTPS” ve HSTS aktif edilebilir.

7) Faydalı Komutlar
- Geliştirme: `npm run dev`
- Lint: `npm run lint`
- Build: `npm run build`
- Preview: `npm run preview`

Notlar
- Proje Vite + React Router kullanır; tüm rotalar SPA olarak çalışır.
- Build sırasında `public` içeriği otomatik kopyalanır.
