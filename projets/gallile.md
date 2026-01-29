# Gallilé - Plateforme de Gestion Numérique des Formations

**Copyright (c) 2026 Thomas Guislin** - Tous droits réservés  
**Version** : 1.0.4

---

## Présentation

Gallilé est une application web de gestion numérique des formations qui remplace le système papier traditionnel d'émargement et de génération d'attestations. L'application permet aux organismes de formation de digitaliser l'ensemble du processus, de l'import des conventions jusqu'à la génération des documents officiels.

L'application s'adresse aux formateurs qui créent et gèrent leurs sessions de formation, aux participants qui signent numériquement via QR code, et aux administrateurs qui consultent les formations et génèrent les documents.

---

## Fonctionnalités principales

### Import automatique de conventions

L'application analyse les fichiers PDF de conventions de formation et extrait automatiquement les informations nécessaires :
- Informations de l'entreprise cliente
- Nom et détails de la formation
- Dates de début et de fin
- Liste complète des participants avec leurs coordonnées

Pour les PDF scannés sous forme d'image, l'application utilise la reconnaissance optique de caractères (OCR) pour extraire le texte et les données structurées.

### Signature numérique par QR code

Les participants peuvent signer directement depuis leur smartphone en scannant un QR code unique généré pour chaque session. Le code se renouvelle régulièrement pour assurer la sécurité. Les signatures sont enregistrées en temps réel et apparaissent immédiatement sur l'écran du formateur. Les participants n'ont pas besoin de créer de compte pour signer.

Chaque participant ne peut signer qu'une seule fois depuis le même appareil, garantissant l'intégrité du processus d'émargement.

### Génération automatique de documents

L'application génère automatiquement les documents officiels :
- Feuille d'émargement PDF avec toutes les signatures des participants et du formateur
- Attestations individuelles personnalisées pour chaque participant

Les documents sont conformes aux standards de l'organisme et peuvent être téléchargés directement depuis l'interface.

### Tableau de bord et gestion des sessions

L'interface propose plusieurs vues pour gérer les formations :
- Vue d'ensemble de toutes les sessions avec leurs statuts (programmées, en cours, clôturées)
- Calendrier mensuel pour visualiser les formations
- Vue filtrée "Mes sessions" pour chaque formateur
- Système de notifications pour les sessions à venir
- Statistiques et métriques sur les formations

### Filtres et recherche

L'application permet de filtrer et rechercher les sessions selon différents critères :
- Filtrage par entreprise
- Filtrage par formateur
- Filtrage par statut (toutes, en cours, terminées, en attente)
- Recherche textuelle dans les noms de formations, entreprises ou formateurs

### Interface utilisateur

L'interface est conçue pour être intuitive et accessible :
- Design moderne et professionnel
- Mode sombre pour le confort visuel
- Responsive : fonctionne sur ordinateur, tablette et smartphone
- Conforme aux standards d'accessibilité web

---

## Technologies utilisées

**Frontend :**
- React 19.2 avec TypeScript
- Vite pour le build et le développement
- Tailwind CSS pour le style
- Bibliothèques pour la génération de PDF et la capture de signatures

**Backend :**
- Spring Boot 3.2 (Java 17)
- Spring Data JPA avec Hibernate
- Base de données H2 en développement, PostgreSQL en production
- Authentification JWT
- API REST

---

## Structure du projet

Le projet est organisé en deux parties principales :
- Le frontend (application React) dans le dossier racine
- Le backend (application Spring Boot) dans le dossier `backend/`

L'architecture suit les principes de séparation des responsabilités avec une API REST pour la communication entre le frontend et le backend.

---

## Copyright

Copyright (c) 2026 Thomas Guislin. Tous droits réservés.
