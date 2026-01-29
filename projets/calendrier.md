# Projet de Gestion de Rendez-vous en Ligne

## 1. Introduction

### Contexte

Ce projet a été réalisé dans le cadre du module **S5.A.01 Frameworks Web** du BUT3 Informatique à l'Université de Lille. L'objectif était de développer un "framework" de prise de rendez-vous générique, capable de s'adapter à différents scénarios comme la gestion de créneaux médicaux (1 personne/15min) ou de créneaux de piscine (30 personnes/1h).

### Auteurs

* **Quentin LYOEN**
* **Thomas GUISLIN**

### Installation et Démarrage

Le projet est une application **Spring Boot** utilisant **Maven**.

**Lancement :**

1. Cloner le dépôt.
2. Compiler le projet :
```bash
mvn clean package

```


3. Lancer l'application :
```bash
mvn spring-boot:run

```


Ou via le jar généré : `java -jar target/nom-du-projet.jar`

**Accès :**

* Application Web : `http://localhost:8080`



---

## 2. Présentation des Fonctionnalités

L'application permet de gérer un calendrier interactif avec trois niveaux d'accès .

### Fonctionnalités Générales (Public)

* **Navigation Calendrier :** Visualisation mois par mois avec gestion des jours fériés et week-ends.
* 
**Consultation :** Voir les créneaux disponibles et le taux d'occupation (code couleur) sans être connecté.



### Fonctionnalités Utilisateur (Rôle USER)

* **Authentification :** Création de compte et connexion sécurisée.
* **Prise de Rendez-vous :** Sélection d'un créneau valide respectant les contraintes (durée, capacité max).
* 
**Gestion :** Tableau de bord personnel pour voir ses rendez-vous futurs et passés, et possibilité d'annuler .


* 
**Profil :** Modification des informations personnelles et upload de photo de profil.



### Fonctionnalités Administrateur (Rôle ADMIN)

* **Supervision :** Vision globale de tous les rendez-vous avec l'identité des participants.
* **Gestion des créneaux :** Possibilité de supprimer n'importe quel rendez-vous.
* **Fermetures :** Définition de périodes de fermeture (vacances, maintenance) via l'entité `Fermeture`.

---

## 3. Aspects Techniques

### Modèle Conceptuel de Données (MCD)

Le modèle de données repose sur 4 entités principales gérées via **Jakarta Persistence (JPA)**.

1. **Utilisateur (`Utilisateur.java`)** :
* Représente les acteurs du système (Clients et Admins).
* Sert d'identifiant pour l'authentification Spring Security via l'implémentation de l'interface `UserDetails`.
* Clé primaire : `email`. Contient aussi le mot de passe encodé, le rôle, et le chemin de la photo (`photoPath`).


2. **Creneau (`Creneau.java`)** :
* Représente une plage horaire spécifique à une date donnée.
* Défini par une `date`, une `heureDebut` et une `heureFin` (en minutes depuis minuit pour faciliter les calculs).
* Possède un `status` pour gérer sa disponibilité.


3. **RendezVous (`RendezVous.java`)** :
* Table de liaison matérialisant la réservation.
* Relation `@ManyToOne` vers `Utilisateur` : Un utilisateur peut avoir plusieurs RDV.
* Relation `@ManyToOne` vers `Creneau` : Un créneau peut accueillir plusieurs RDV (ex: scénario Piscine avec 30 personnes).


4. **Fermeture (`Fermeture.java`)** :
* Permet de définir des périodes d'indisponibilité.
* Gère une `dateDebut`, `dateFin` et un type de période (`PeriodeFermeture` : MATIN, APRES_MIDI, JOURNEE...).



### Architecture et Contrôleurs

Le projet suit une architecture **MVC (Modèle-Vue-Contrôleur)** classique avec Spring Boot :

* **Repositories :** Interfaces étendant `JpaRepository` pour l'accès aux données sans écrire de SQL (remplace les DAO manuels).
* **Services :** Contiennent la logique métier (vérification des contraintes de capacité, envoi de mails).
* **Contrôleurs :**
* `AdminFermetureController` : Gestion des annulations de rendez-vous par un admin.
* `AdminReservationController` : Gestion des réservations par un admin.
* `AnnulerReservationController` : Page d'annulation des réservations.
* `CalendarController` : Affichage et gestion du calendrier.
* `DayPlanningController` : Affichage et gestion du planning d'une journée.
* `IndexController` : Affichage de la page d'acceuil.
* `LoginController` : Gestion de l'authentification.
* `LogoutController` : Gestion de la déconnexion.
* `MesReservationsController` : Affichage des réservations d'un utilisateur.
* `ProfilController` : Affichage et gestion du profil d'un utilisateur.
* `RendezVousController` : Gestions des rendez-vous.




### Authentification et Sécurité

La sécurité est gérée par **Spring Security**.

* L'objet `Utilisateur` implémente `UserDetails`.
* Les mots de passe sont hachés (BCrypt/MD5) avant stockage.


* Le mots de passe (mail) est injecté via une variable d'environnement dans `application.properties` pour ne pas apparaître en clair dans le code.



### API REST

Conformément à la semaine 6, deux endpoints sont exposés:

* `GET /todayslist/{date}` : Liste des RDV d'une journée (XML/JSON).
* `GET /myappointments/{name}` : Liste des RDV futurs d'une personne.

---

## 4. Bilan du Projet

### Pourquoi 6 semaines ?

Ce projet a suivi une évolution incrémentale complexe :

1. Départ sur une architecture **Servlet/JSP classique** avec gestion manuelle des dates (`LocalDate`).
2. Introduction de la persistance (DAO puis JPA).
3. Migration complète vers **Spring Boot** (injection de dépendances, auto-configuration).
4. Ajout de couches avancées : Sécurité, API REST, Internationalisation (i18n Fr/En/Sp) et envoi de Mails.

### Difficultés rencontrées

* **Gestion du temps :** Manipuler les horaires (minutes depuis minuit) et les dates Java (`LocalDate`) pour l'affichage dynamique du calendrier.
* **Configuration Spring Security :** Remplacer les filtres manuels par la configuration Spring Security a demandé une bonne compréhension de la chaîne de filtres.
* **Contraintes génériques :** Concevoir un système qui fonctionne aussi bien pour le scénario "Médecin" que "Piscine" sans changer le code, juste la configuration.

### Conclusion et Perspectives

Ce projet nous a permis de maîtriser la stack technique standard du développement Java Web moderne.
**Perspectives d'amélioration :**

* Améliorer le front-end avec un framework JS (React/Vue).
* Ajouter un système de rappel par SMS en plus des emails.
* Gérer les fuseaux horaires pour une utilisation internationale réelle.