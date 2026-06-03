# 🎯 Vitya Gravír – Weboldal

Egyedi darts toll készítés vállalkozás weboldala. GitHub Pages-re optimalizált, backend nélküli statikus oldal.

## 📁 Fájlszerkezet

```
vityagravir/
├── index.html          # Főoldal (hero, szolgáltatások, preview)
├── rolam.html          # Rólam oldal (idővonal, értékek, folyamat)
├── galeria.html        # Galéria (szűrhető, lightbox)
├── megrendeles.html    # Megrendelő űrlap (EmailJS e-mail küldés)
├── style.css           # Közös stílusok
├── main.js             # Közös JS (cursor, animációk, nav)
├── kepek/              # IDE tedd a képeidet
│   └── .gitkeep
└── README.md
```

## 🚀 GitHub Pages indítás

1. Hozz létre egy új GitHub repository-t (pl. `vityagravir`)
2. Töltsd fel az összes fájlt
3. Settings → Pages → Source: **Deploy from branch** → `main` → `/root`
4. Az oldal elérhető lesz: `https://felhasznalonev.github.io/vityagravir/`

## 📧 EmailJS beállítás (e-mail küldés megrendeléseknél)

### 1. Regisztráció
- Menj a [emailjs.com](https://emailjs.com) oldalra
- Regisztrálj ingyen (200 e-mail/hó ingyenes)

### 2. Email Service hozzáadása
- Dashboard → **Email Services** → Add New Service
- Válaszd a **Gmail**-t
- Kövesd az autentikációt
- Másold a **Service ID**-t (pl. `service_abc123`)

### 3. Email Template létrehozása
- Dashboard → **Email Templates** → Create New Template
- Adj nevet, és használd az alábbi változókat a sablonban:

```
Új megrendelés érkezett!

Megrendelő: {{nev}}
E-mail: {{email}}
Telefon: {{telefon}}
Szállítási cím: {{szallitasi_cim}}

--- TOLL ---
Típus: {{toll_tipus}}
Darabszám: {{darabszam}}
Anyag/Szín: {{anyag}}
Súly: {{suly}}
Fogórész: {{fogoresz}}
Hegy: {{hegy}}

--- GRAVÍROZÁS ---
Szöveg: {{gravir_szoveg}}
Betűtípus: {{betutipus}}
Logó: {{logo}}
Hely: {{gravir_hely}}

--- SZÁLLÍTÁS ---
Csomagolás: {{csomagolas}}
Szállítás: {{szallitas}}
Határidő: {{hataridő}}
Fizetés: {{fizetes}}

--- MEGJEGYZÉS ---
{{megjegyzes}}
```

- Másold a **Template ID**-t (pl. `template_xyz789`)

### 4. Public Key
- Dashboard → **Account** → **Public Key**
- Másold ki

### 5. Beillesztés az oldalra
- Nyisd meg a `megrendeles.html`-t böngészőben
- A sárga `⚙️ EmailJS beállítás` dobozba írd be a három ID-t
- Kattints **Mentés** – ezután minden megrendelés e-mailben érkezik!

> **Tipp:** Ha élesítés után el akarod rejteni a beállítás dobozt, töröld ki a config-box div-et a `megrendeles.html`-ből (az adatok a böngésző localStorage-ában maradnak).

## 🖼️ Képek hozzáadása

### Galéria képek
A `galeria.html`-ben minden `gallery-item`-nél van egy megjegyzés. Cseréld le a `.gallery-ph` diveket:

```html
<!-- Volt: -->
<div class="gallery-ph" style="height:320px;">...</div>

<!-- Legyen: -->
<img src="kepek/toll1.jpg" alt="Monogramos Barrel" style="width:100%; display:block;" />
```

### Rólam fotó
A `rolam.html`-ben keress erre a megjegyzésre:
```html
<!-- IDE TEDD A KÉPEDET: -->
```
És cseréld le a `photo-placeholder` divet:
```html
<img src="kepek/vitya.jpg" alt="Vitya" style="width:100%;aspect-ratio:3/4;object-fit:cover;border-radius:20px;" />
```

### Főoldal preview kép
Az `index.html`-ben szintén van egy `about-img-placeholder` – ugyanígy cserélhető.

## ✏️ Tartalom testreszabása

| Mit változtass | Hol |
|---|---|
| Kapcsolat (e-mail, telefon) | `index.html` footer, `rolam.html` |
| Statisztikák (180+, 5+, 100%) | `index.html` → `data-count` attribútumok |
| Idővonal évszámok | `rolam.html` → `.tl-year` elemek |
| Galéria nevek/kategóriák | `galeria.html` → `.overlay-title`, `.lb-title` |
| Szín módosítása | `style.css` → `:root` változók |

## 🎨 Dizájn

- **Betűtípusok:** Playfair Display (fejlécek) + DM Sans (szöveg) + DM Mono (kódok)
- **Színek:** Sötét háttér (`#0b0c0e`) + Arany accent (`#c9a84c`)
- **Animációk:** Scroll reveal, egyedi kurzor, számlálók, parallax dartboard, marquee

## 📱 Reszponzív

Az oldal mobilon, tableten és asztali gépen is megfelelően jelenik meg.

---

*Vitya Gravír © 2025*
