# 🎵 Under - Moteur de Recommandation Musicale

**Under** est un moteur de recommandation musicale intelligent conçu pour découvrir des artistes indépendants et underground. Il utilise l'intelligence artificielle pour comprendre vos goûts musicaux et vous proposer des découvertes personnalisées.

## 🌟 Qu'est-ce que Under ?

Under est une application mobile qui vous aide à découvrir de nouveaux artistes musicaux, en particulier ceux qui ne sont pas encore populaires. Contrairement aux plateformes traditionnelles qui vous montrent toujours les mêmes hits, Under se concentre sur la **découverte** et la **diversité musicale**.

### Comment ça marche ?

1. **Vous écoutez** de la musique dans l'application
2. **L'IA analyse** vos préférences (genres, ambiances, époques)
3. **Le moteur** vous recommande des artistes similaires mais moins connus
4. **Plus vous interagissez**, plus les recommandations s'améliorent

## 🧠 Technologies Utilisées

### Intelligence Artificielle
- **OpenAI** : Comprend vos descriptions musicales ("musique chill des années 90")
- **Machine Learning** : Apprend de vos goûts pour améliorer les recommandations
- **Embeddings** : Compare la "ressemblance" entre artistes

### Bases de Données
- **PostgreSQL** : Stocke les artistes, utilisateurs et interactions
- **Neo4j** : Crée un réseau de connexions entre artistes (collaborations, genres)
- **pgvector** : Recherche rapide par similarité musicale

### Architecture
- **Node.js** : Serveur backend rapide et moderne
- **Docker** : Déploiement simple et reproductible
- **API REST** : Communication claire avec l'application mobile

## 🚀 Installation Rapide

### Prérequis
- Node.js 18+ ([télécharger ici](https://nodejs.org/))
- Docker Desktop ([télécharger ici](https://www.docker.com/products/docker-desktop/))

### 1. Cloner le projet
```bash
git clone <votre-repo>
cd under-back
```

### 2. Installer les dépendances
```bash
npm install
```

### 3. Configurer l'environnement
```bash
# Copiez le fichier d'exemple
cp env.example .env

# Éditez .env avec vos vraies valeurs
# ATTENTION: Remplacez TOUS les placeholders par de vraies valeurs !
```

**Variables OBLIGATOIRES dans `.env` :**
```env
# 🔒 SÉCURITÉ - TOKEN ADMIN (minimum 20 caractères)
ADMIN_TOKEN=your-secure-admin-token-minimum-20-chars

# 🤖 IA - Clé OpenAI (obligatoire)
OPENAI_API_KEY=sk-your-real-openai-key

# 🗄️ BASES DE DONNÉES (remplacez les placeholders)
PG_DSN=postgres://your_user:your_password@localhost:55432/underdb
NEO4J_URI=bolt://localhost:7687
NEO4J_USER=your_neo4j_user
NEO4J_PASSWORD=your_neo4j_password
```

**Validation de la configuration :**
```bash
npm run validate-env
```

### 4. Lancer les bases de données
```bash
docker compose up -d
```

### 5. Démarrer le serveur
```bash
npm start
```

🎉 **C'est parti !** Le serveur écoute sur `http://localhost:3001`

## 📱 Comment Utiliser l'API

### Découvrir de la musique
```bash
# Recherche par description
curl -X POST http://localhost:3001/recommendations \
  -H "Content-Type: application/json" \
  -d '{
    "userId": "votre-id-utilisateur",
    "query": "musique chill des années 90",
    "limit": 10
  }'
```

### Analyser vos goûts
```bash
# L'IA analyse votre description
curl -X POST http://localhost:3001/parse-filters \
  -H "Content-Type: application/json" \
  -d '{"query": "playlist énergique pour le sport"}'
```

### Obtenir des commentaires
```bash
# L'IA commente vos artistes favoris
curl -X POST http://localhost:3001/get-comments \
  -H "Content-Type: application/json" \
  -d '{
    "query": "ambiance relaxante",
    "artistNames": ["Bonobo", "Tycho"]
  }'
```

## 🎯 Fonctionnalités Principales

### 🔍 Recherche Intelligente
- **Description naturelle** : "musique pour étudier", "vibe années 80"
- **Filtres automatiques** : L'IA extrait style, époque, ambiance
- **Résultats pertinents** : Mélange de popularité et découverte

### 🧠 Apprentissage Continu
- **Profil utilisateur** : Mémorise vos genres préférés
- **Feedback en temps réel** : Like, skip, clics améliorent les recommandations
- **Machine Learning** : Le système s'adapte à vos goûts uniques

### 🌐 Réseau d'Artistes
- **Collaborations** : Trouve des artistes qui ont travaillé ensemble
- **Genres similaires** : Découvre des styles proches de vos préférences
- **PageRank musical** : Identifie les artistes influents dans chaque genre

### 📊 Métriques et Analytics
- **Suivi d'engagement** : Mesure ce qui vous plaît vraiment
- **Découverte** : Compte les nouveaux artistes que vous découvrez
- **Diversité** : Assure une variété dans les recommandations

## 🛠️ Administration

### Vérifier la santé du système
```bash
curl http://localhost:3001/health
curl http://localhost:3001/health/db
```

### Exporter les données d'entraînement
```bash
# Pour améliorer l'IA
curl -H "Authorization: Bearer token" \
     -H "x-admin-token: tonsecret" \
     "http://localhost:3001/admin/export/training-dataset" \
     -o training_data.csv
```

### Entraîner un nouveau modèle IA
```bash
# Installer Python et dépendances
pip install -r scripts/requirements.txt

# Entraîner le modèle
python scripts/train_reranker.py --input training_data.csv
```

## 🔧 Configuration Avancée

### Pondérations de Scoring
Ajustez l'importance de chaque facteur dans `.env` :

```env
# Poids des algorithmes (total = 1.0)
W_GRAPH=0.4      # Réseau d'artistes (40%)
W_VECTOR=0.3     # Similarité IA (30%)
W_RECENCY=0.1    # Musique récente (10%)
W_POP_INV=0.2    # Favorise l'indé (20%)

# Exploration vs Exploitation
RATIO_EXPLORE=0.2  # 20% de découvertes aléatoires
```

### Boosters Personnalisés
```env
BOOST_INDIE=1.2        # +20% pour les artistes indépendants
BOOST_RECENT=1.1       # +10% pour la musique récente
BOOST_LIKED_GENRE=1.3  # +30% pour vos genres préférés
```

## 📈 Performance et Monitoring

### KPIs Disponibles
- **Précision@K** : Qualité des recommandations
- **Taux de découverte** : Nouveaux artistes découverts
- **Diversité** : Variété des recommandations
- **Latence** : Temps de réponse (objectif < 500ms)

### Logs et Debugging
```bash
# Voir les logs en temps réel
npm run dev

# Tester les endpoints
npm test
```

## 🔒 Sécurité

- **Clés API** : Jamais exposées au frontend
- **CORS** : Contrôle des origines autorisées
- **Rate Limiting** : Protection contre les abus
- **Validation** : Toutes les entrées sont vérifiées

## 🐳 Déploiement avec Docker

### Production
```bash
# Build de l'image
docker build -t under-backend .

# Lancer avec variables d'environnement
docker run -p 3001:3001 \
  -e OPENAI_API_KEY=sk-... \
  -e PG_DSN=postgres://... \
  under-backend
```

### Développement
```bash
# Tout lancer d'un coup
docker compose up -d
npm run dev
```

## 🤝 Contribution

### Structure du Projet
```
under-back/
├── controllers/     # Logique des endpoints
├── services/        # IA, recommandations, embeddings
├── db/             # Connexions bases de données
├── routes/         # Définition des routes API
├── scripts/        # Outils d'entraînement IA
├── models/         # Modèles ML sauvegardés
└── tests/          # Tests automatisés
```

### Ajouter une Nouvelle Fonctionnalité
1. Créer le service dans `services/`
2. Ajouter le contrôleur dans `controllers/`
3. Définir la route dans `routes/`
4. Tester avec `npm test`

## 📞 Support

- **Documentation API** : `http://localhost:3001/docs` (Swagger UI)
- **Health Check** : `http://localhost:3001/health`
- **Logs** : Console du serveur Node.js

## 🎵 Exemple Complet

```bash
# 1. Lancer le serveur
npm start

# 2. Créer un utilisateur (simulé)
USER_ID="e2d4fc49-8bd0-44b4-aa47-7f3aa23fb933"

# 3. Demander des recommandations
curl -X POST http://localhost:3001/recommendations \
  -H "Content-Type: application/json" \
  -d "{
    \"userId\": \"$USER_ID\",
    \"query\": \"musique électronique chill pour travailler\",
    \"limit\": 5
  }"

# 4. L'IA vous répond avec des artistes parfaits ! 🎶
```

---

**Under** - Découvrez la musique autrement. 🎵✨