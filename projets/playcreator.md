# 🎉 SoundCloud Party Guest

Application web locale permettant aux invités d'ajouter des musiques à une playlist SoundCloud depuis leurs téléphones via le réseau Wi-Fi local.

## 🚀 Démarrage Rapide

### 1. Installation

```bash
# Installer toutes les dépendances (racine, server, client)
npm run install:all
```

### 2. Configuration

**Backend :** Créez un fichier `.env` dans le dossier `server` (vous pouvez vous baser sur `server/env.example.txt`) :

```bash
# Dans le dossier server/
touch .env
```

Éditez `server/.env` et remplissez avec vos identifiants SoundCloud :

- **SC_OAUTH_TOKEN** : Token OAuth récupéré depuis l'onglet Network du navigateur (cherchez `Authorization: OAuth ...`)
- **SC_CLIENT_ID** : Client ID récupéré depuis les requêtes réseau
- **SC_PLAYLIST_ID** : ID de la playlist cible (visible dans l'URL de la playlist)
- **SC_USER_ID** : Votre ID utilisateur SoundCloud (optionnel)
- **SC_APP_VERSION** : Version de l'app SoundCloud (trouvée dans l'URL des requêtes, par défaut: `1764855689`)
- **SC_APP_LOCALE** : Locale de l'app (par défaut: `en`)
- **SC_DATADOME_CLIENT_ID** : **(CRITIQUE)** DataDome Client ID (header `x-datadome-clientid`) depuis l'onglet Network
- **SC_COOKIE** : **(IMPORTANT)** Cookies de session copiés depuis le navigateur (voir ci-dessous)

**Frontend (optionnel) :** Si vous voulez définir une URL d'API spécifique, créez un fichier `.env` dans le dossier `client` basé sur `client/env.example.txt`. Par défaut, le client utilise `http://localhost:3001`.

### ⚠️ Important : Éviter le blocage CAPTCHA (403)

Si vous obtenez une erreur 403 avec CAPTCHA, SoundCloud détecte les requêtes automatisées. Pour résoudre :

1. **Ouvrez SoundCloud dans votre navigateur** et connectez-vous
2. **Ouvrez DevTools** (F12) > Onglet **Network**
3. **Ajoutez manuellement un track** à votre playlist
4. **Trouvez la requête PUT** vers `/playlists/...`
5. **Cliquez dessus** > Onglet **Headers**
6. **Dans "Request Headers"**, copiez :
   - **`x-datadome-clientid`** (CRITIQUE pour éviter le CAPTCHA)
   - **`Cookie`** (optionnel mais recommandé)
7. **Ajoutez dans `server/.env`** :
   ```
   SC_DATADOME_CLIENT_ID="votre_datadome_clientid_ici"
   SC_COOKIE="votre_cookie_complet_ici"
   ```

Le header `x-datadome-clientid` est **essentiel** pour éviter la détection de bot et le CAPTCHA. Sans lui, SoundCloud bloquera presque toujours les requêtes.

### 3. Démarrer l'application

```bash
# Lancer le serveur et le client en parallèle
npm run dev
```

L'application sera accessible :
- **Frontend** : `http://localhost:3000` (et sur votre IP locale)
- **Backend** : `http://localhost:3001` (écoute sur `0.0.0.0` pour le réseau local)

### 4. Accès depuis les téléphones

Sur votre Mac, trouvez votre adresse IP locale :

```bash
# macOS
ifconfig | grep "inet " | grep -v 127.0.0.1
```

Les invités peuvent alors accéder à l'application via :
- `http://VOTRE_IP_LOCALE:3000`

Assurez-vous que le Mac et les téléphones sont sur le même réseau Wi-Fi.

## 📁 Structure du Projet

```
soundcloud-party-guest/
├── api/                 # API Routes Vercel (serverless)
│   ├── search.js       # Route de recherche
│   ├── add.js          # Route d'ajout à la playlist
│   ├── health.js       # Route de santé
│   ├── debug/          # Routes de debug
│   │   └── playlist.js
│   └── utils.js        # Utilitaires partagés
├── server/              # Backend Node.js/Express (développement local)
│   ├── index.js        # Serveur Express avec routes /search et /add
│   ├── package.json
│   └── .env.example    # Template pour les variables d'environnement
├── client/             # Frontend React + Vite + Tailwind
│   ├── src/
│   │   ├── App.jsx
│   │   ├── components/
│   │   │   ├── SearchBar.jsx
│   │   │   ├── TrackList.jsx
│   │   │   └── Toast.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
├── vercel.json         # Configuration Vercel
├── package.json        # Scripts racine pour lancer tout en parallèle
└── README.md
```

## 🎨 Fonctionnalités

- **Recherche en temps réel** avec debounce
- **Ajout de musiques** à la playlist SoundCloud
- **Design Dark Mode / Party** (fond noir, accents néon)
- **Feedback utilisateur** : spinners de chargement et toasts de confirmation
- **Gestion des erreurs** : affichage des erreurs API (token expiré, etc.)

## 🚀 Déploiement sur Vercel

Le projet est configuré pour être déployé sur Vercel en tant qu'application full-stack :

1. **Installez Vercel CLI** (optionnel, vous pouvez aussi utiliser le dashboard) :
   ```bash
   npm i -g vercel
   ```

2. **Déployez** :
   ```bash
   vercel
   ```
   
   Ou via le dashboard Vercel : connectez votre repo GitHub et déployez.

3. **Configurez les variables d'environnement** sur Vercel :
   - Allez dans Settings > Environment Variables
   - Ajoutez toutes les variables du fichier `server/env.example.txt` :
     - `SC_OAUTH_TOKEN`
     - `SC_CLIENT_ID`
     - `SC_PLAYLIST_ID`
     - `SC_USER_ID`
     - `SC_APP_VERSION`
     - `SC_APP_LOCALE`
     - `SC_DATADOME_CLIENT_ID`
     - `SC_COOKIE`

4. **Redéployez** après avoir ajouté les variables d'environnement.

L'application sera accessible sur `https://votre-projet.vercel.app`.

**Note** : Le client détecte automatiquement s'il est sur Vercel et utilise les routes `/api` au lieu de `localhost:3001`.

## 🔧 Scripts Disponibles

- `npm run dev` : Lance le serveur et le client en mode développement
- `npm run install:all` : Installe toutes les dépendances
- `npm run dev:server` : Lance uniquement le serveur
- `npm run dev:client` : Lance uniquement le client
- `npm run build` : Build pour la production (Vercel)

## 📝 Notes Techniques

- **API SoundCloud** : Utilise l'API interne `api-v2.soundcloud.com` (non officielle)
- **CORS** : Activé pour toutes les origines (`*`) pour permettre l'accès depuis les téléphones
- **Logique Playlist** : Récupère la playlist, ajoute le track ID, puis fait un PUT avec le tableau complet
- **Logs détaillés** : Le backend affiche des logs complets pour faciliter le débogage

## ⚠️ Important

Cette application utilise une API non officielle de SoundCloud. Les identifiants doivent être récupérés manuellement depuis l'onglet Network du navigateur lors de l'utilisation normale de SoundCloud.

Bon party ! 🎵🎉

