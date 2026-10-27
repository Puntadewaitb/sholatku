# Kurang Berapa Rakaatku?

Game latihan **masbuk**: datang telat ke sholat berjamaah, hitung berapa rakaat yang harus ditambah setelah imam salam.

- **Main di browser:** https://puntadewaitb.github.io/sholatku/
- **Unduh APK Android:** https://github.com/Puntadewaitb/sholatku/releases/latest/download/rakaatku.apk

## Fitur
- 2 mode: **Seperti di Masjid** (ikuti gerakan imam step-by-step) dan **Tebak Cepat**.
- 3 level: Mudah, Sedang, Sulit (tanpa petunjuk + batas waktu).
- Latihan urutan rakaat tambahan setelah imam salam (madzhab Syafi'i).
- Tema warna per waktu sholat, efek suara, getar, confetti, dan bintang di layar hasil.
- 100% offline: font di-bundle, web bisa diinstal sebagai PWA.

## Struktur
- `www/` – aplikasi web (single-file `index.html`), juga jadi isi APK.
- `android/` – project Capacitor.
- `assets/` – sumber ikon & splash (`npm run icons` untuk regenerate).
- `.github/workflows/build.yml` – tiap push ke `main`: build APK → GitHub Release, dan deploy `www/` ke `gh-pages`.

## Signing APK
Default-nya APK ditandatangani `android/app/sideload.keystore` (kunci publik di repo, cukup untuk sideload).
Untuk kunci privat, isi secrets repo: `ANDROID_KEYSTORE_BASE64`, `ANDROID_KEYSTORE_PASSWORD`, `ANDROID_KEY_ALIAS`, `ANDROID_KEY_PASSWORD`.
Catatan: ganti kunci = pengguna harus uninstall versi lama sekali.
