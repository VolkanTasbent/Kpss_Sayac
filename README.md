# KPSS Sayaç Web

KPSS (lisans, on lisans, ortaogretim) ve AGS icin geri sayim ve temel net hesaplama sunan Next.js uygulamasi.

## Gereksinimler

- Node.js 20+
- npm 10+

## Yerel Gelistirme

1. Bagimliliklari kurun:

```bash
npm install
```

2. Ortam degiskenlerini hazirlayin:

```bash
cp .env.example .env.local
```

3. Gelistirme sunucusunu calistirin:

```bash
npm run dev
```

4. Tarayicida acin: [http://localhost:3000](http://localhost:3000)

## Ortam Degiskenleri

`.env.example` icindeki alanlar:

- `NEXT_PUBLIC_SITE_URL`: Canli domain. `robots.txt` ve `sitemap.xml` icin kullanilir.
- `NEXT_PUBLIC_CONTACT_EMAIL`: Gizlilik politikasi sayfasindaki iletisim adresi.
- `NEXT_PUBLIC_ADSENSE_CLIENT`: Google AdSense yayinci kimligi (`ca-pub-...`).
- `NEXT_PUBLIC_ADSENSE_SLOT_HOME`: Ana sayfa reklam birimi.
- `NEXT_PUBLIC_ADSENSE_SLOT_ARTICLE`: Icerik sayfalari reklam birimi.
- `NEXT_PUBLIC_ADSENSE_SLOT_TOOL`: Arac sayfalari reklam birimi.

Not: AdSense degiskenleri bos olsa bile site calisir; ilgili alanlarda bilgilendirici placeholder gorunur.

## Uretim Build ve Calistirma

Uretim paketini olusturmak ve dogrulamak icin:

```bash
npm run lint
npm run build
```

Uretim modunda lokal calistirma:

```bash
npm run start
```

## Yayin Oncesi Kontrol Listesi

- [ ] `NEXT_PUBLIC_SITE_URL` canli domain ile guncellendi.
- [ ] `NEXT_PUBLIC_CONTACT_EMAIL` girildi.
- [ ] AdSense kullanilacaksa `NEXT_PUBLIC_ADSENSE_*` alanlari girildi.
- [ ] `npm run lint` hatasiz.
- [ ] `npm run build` hatasiz.
- [ ] Ana sayfa ve kritik rotalar mobil/masaustu kontrol edildi.

## Teknoloji

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
