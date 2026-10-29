# Skipjar – web

Úvodní stránka a zásady ochrany osobních údajů aplikace Skipjar (Android). Čisté HTML + CSS, bez analytiky,
cookies, externích skriptů i fontů. Hostováno na GitHub Pages z `main` (kořen).

- `/` (cs), `/en/`, `/zasady/` (cs), `/en/privacy/`; mobil pod 700 px.
- Úvod v2 podle předlohy K-W-Web2 (repo appky `design/skipjar-v1/web/README-W.md`): styly `assets/home.css`,
  výběr stylu karty a motivu `assets/home.js` (bez knihoven, klávesnice: šipky / Home / End; bez JS zůstane Holo
  a Noční modrá). Zásady a společné styly `assets/site.css`.
- Telefony = skutečné snímky appky `assets/shots/{cs,en}/*.webp` (600 × 1301, 2× pro ostrost) z testu
  `DesignAuditScreenshotsTest.web` v repu appky (`podklady/design-audit/screeny/web_*`, Noční modrá, ukázková data).
- Písmo Manrope (`assets/fonts/manrope.woff2`) pod licencí SIL Open Font License 1.1 – `assets/fonts/OFL.txt`.
- Odznaky „Google Play“ jsou oficiální od Google (Google Play a logo Google Play jsou ochranné známky Google LLC)
  – místo vlastního tlačítka s logem z předlohy.
- Hranaté závorky `[…]` v zásadách = údaje provozovatele, doplní se ručně. Odkaz Kontakt v patičce je skrytý,
  dokud nebude e-mail.

## Odchylky od předlohy

- Na mobilu se plátna s telefony (úvod, tři bloky funkcí) zmenšují (`.vin`, scale), aby stránka nerolovala do strany;
  výšky pod 400 px šířky menší než v předloze.
- Telefony v předloze K-E-* jsou v Černé (předlohy jiný tmavý motiv neuměly) – snímky jsou v Noční modré jako stránka.
- Přepínač jazyka ukazuje cílový jazyk (EN / CZ) místo „CZ ▾“.
