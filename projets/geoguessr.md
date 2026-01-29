# OpenGuessr 🗺️

Un clone de GeoGuessr créé avec Next.js 14+, TypeScript, Tailwind CSS, Google Maps et Supabase.

## 🚀 Installation

1. **Installer les dépendances :**
```bash
npm install
```

2. **Configurer les variables d'environnement :**

Copiez le fichier `.env.example` vers `.env.local` :
```bash
cp .env.example .env.local
```

Puis remplissez les variables d'environnement (voir ci-dessous).

3. **Lancer le serveur de développement :**
```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🔑 Configuration des clés API

### Google Maps API

1. **Créer un projet Google Cloud :**
   - Allez sur [Google Cloud Console](https://console.cloud.google.com/)
   - Créez un nouveau projet ou sélectionnez un projet existant

2. **Activer les APIs nécessaires :**
   - [Maps JavaScript API](https://console.cloud.google.com/apis/library/maps-backend.googleapis.com)
   - [Street View Static API](https://console.cloud.google.com/apis/library/streetviewpublish.googleapis.com)
   - (Optionnel) [Geocoding API](https://console.cloud.google.com/apis/library/geocoding-backend.googleapis.com)

3. **Créer une clé API :**
   - Allez dans "APIs & Services" > "Credentials"
   - Cliquez sur "Create Credentials" > "API Key"
   - Copiez la clé générée

4. **Restreindre la clé API (recommandé pour la production) :**
   - Cliquez sur la clé créée pour l'éditer
   - Dans "Application restrictions", sélectionnez "HTTP referrers (web sites)"
   - Ajoutez vos domaines :
     - `http://localhost:3000/*` (pour le développement)
     - `https://votre-domaine.com/*` (pour la production)
   - Dans "API restrictions", sélectionnez "Restrict key" et choisissez uniquement les APIs listées ci-dessus

5. **Ajouter la clé dans `.env.local` :**
```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=votre_cle_api_ici
```

### Supabase

1. **Créer un projet Supabase :**
   - Allez sur [Supabase](https://supabase.com/)
   - Créez un nouveau projet

2. **Récupérer les credentials :**
   - Allez dans "Project Settings" > "API"
   - Copiez :
     - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
     - `anon public` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

3. **Ajouter les credentials dans `.env.local` :**
```env
NEXT_PUBLIC_SUPABASE_URL=https://votre-projet.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre_cle_anon_ici
```

## 📁 Structure du projet

```
openguessr/
├── app/                    # App Router de Next.js
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Page d'accueil
│   └── globals.css        # Styles globaux Tailwind
├── components/            # Composants React
│   └── (à venir)
├── lib/                   # Utilitaires et configurations
│   ├── utils.ts           # Fonctions utilitaires
│   ├── supabase/          # Client Supabase
│   └── (à venir)
├── types/                 # Types TypeScript
│   └── (à venir)
└── public/                # Fichiers statiques
```

## 🛠️ Technologies utilisées

- **Next.js 14+** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **@vis.gl/react-google-maps** (Google Maps)
- **Supabase** (Backend & Realtime)
- **Lucide React** (Icônes)

## 📝 Notes importantes

- Pour le développement local, la clé API Google Maps fonctionnera avec `localhost:3000` si vous avez configuré les restrictions HTTP referrers correctement.
- En production, n'oubliez pas d'ajouter votre domaine dans les restrictions de la clé API.
- Les variables d'environnement commençant par `NEXT_PUBLIC_` sont exposées au client.

## 🚀 Déploiement

Pour déployer votre projet en production, consultez le guide complet : **[DEPLOYMENT.md](./DEPLOYMENT.md)**

### Déploiement rapide sur Vercel

1. Poussez votre code sur GitHub
2. Importez le projet sur [Vercel](https://vercel.com)
3. Configurez les variables d'environnement
4. Déployez !

Vercel déploiera automatiquement votre site à chaque push sur GitHub.

## 🎮 Fonctionnalités

- ✅ Mode solo
- ✅ Mode multijoueur en temps réel
- ✅ Street View avec Google Maps
- ✅ Système de score basé sur la distance
- ✅ 5 rounds par partie
- ✅ Gestion des déconnexions

