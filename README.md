# Legal Migration International — CRM & Landing (Preview)

Preview frontend haut de gamme (démo client) pour **Legal Migration International DRC** —
agence d'accompagnement pour les **études à l'étranger, l'immigration et la préparation IELTS**.

> ⚠️ **Démo de validation client.** Aucune donnée réelle, aucun backend :
> toutes les données sont fictives (mock). Objectif : valider la direction
> visuelle et les fonctionnalités avant le développement complet.

Inspiration produit : plateformes CRM tout-en-un type **Leeloo.ai** (lead
generation multi-canal, pipeline, dashboard) — réinterprétées pour une agence
d'immigration/éducation, avec le branding **or / bleu marine** de la marque.

---

## ✨ Fonctionnalités

### 1. Landing page publique (`/`)
- **Hero configurable** (image / vidéo / dégradé / parallax) — voir ci-dessous
- Sections : Services, Statistiques, Comment ça marche, Destinations, Témoignages, CTA
- Contact **WhatsApp** intégré (bouton flottant + CTA)
- Animations au scroll, design responsive premium

### 2. Module CRM interne
- **Liste des leads** (`/leads`) — table avec recherche et filtres par statut
- **Détail d'un lead** (`/leads/[id]`) — infos, notes/historique, changement de statut
- **Ajout d'un lead** (`/leads/new`) — formulaire complet

### 3. Tableau de bord (`/dashboard`)
- KPIs (total leads, dossiers actifs, taux de conversion, valeur pipeline)
- Répartition par statut et par source d'acquisition
- Leads récents

---

## 🎨 Hero configurable

Le hero est un **composant réutilisable** piloté par la config
`heroConfig` dans [`src/data/site.ts`](src/data/site.ts) :

```ts
export const heroConfig: HeroConfig = {
  backgroundType: "gradient", // "image" | "video" | "gradient" | "parallax"
  backgroundSrc: undefined,   // URL de l'asset (image/vidéo)
  eyebrow: "Études • Immigration • IELTS",
  titleLines: ["Étudiez à l'étranger,", "de l'Europe au Canada,"],
  highlight: "construisez votre avenir international",
  // ...
};
```

Pour changer le fond du hero, il suffit de modifier `backgroundType` et
`backgroundSrc` — le composant [`Hero`](src/components/landing/Hero.tsx)
gère les 4 cas automatiquement.

---

## 🧱 Stack technique

- **Next.js 16** (App Router, Turbopack)
- **TypeScript**
- **Tailwind CSS v4** (design tokens via `@theme`)
- **lucide-react** (icônes) + icônes de marque SVG maison
- Données **mock** uniquement

---

## 📁 Structure

```
src/
├── app/
│   ├── page.tsx            # Landing page publique
│   ├── layout.tsx          # Layout racine (fonts, metadata)
│   ├── globals.css         # Design system (palette or/marine)
│   └── (crm)/              # Espace CRM (route group)
│       ├── layout.tsx      # Shell CRM + sidebar
│       ├── dashboard/
│       └── leads/          # liste, [id], new
├── components/
│   ├── ui/                 # Button, Card, Badge, Logo, Reveal…
│   ├── landing/            # Hero, Services, Process, CTA…
│   └── crm/                # Sidebar, LeadsTable, LeadDetail…
├── data/
│   ├── site.ts             # Config branding + hero
│   └── leads.ts            # 16 leads mock
└── lib/
    ├── types.ts            # Types du domaine
    ├── analytics.ts        # Calcul des stats dashboard
    └── utils.ts            # cn(), formatDate()…
```

---

## 🚀 Démarrage

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de production
```

---

## 🗺️ Prochaines étapes (post-validation)

- Intégration de composants premium (21st.dev) pour affiner le rendu
- Backend réel : base de données, authentification, persistance des leads
- Intégrations lead generation : WhatsApp Business, Meta (Facebook/Instagram), TikTok
- Automatisation marketing & chatbots

---

_Construit avec Next.js & Tailwind CSS — preview de démonstration._
