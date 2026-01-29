# Hikabrain - Plugin Minecraft Spigot 1.12.2

Plugin Minecraft Spigot 1.12.2 qui recrée fidèlement le mini-jeu Hikabrain de Funcraft avec PvP 1.8.9 et support des deux mains.

## 🎮 Fonctionnalités

- **PvP 1.8.9** : Combat sans cooldown d'attaque, comme en 1.8.9
- **Support deux mains** : Compatible avec la fonctionnalité des deux mains de 1.12.2
- **Système d'équipes** : Rouge vs Bleue
- **Détection des lits** : Marcher sur le lit adverse pour marquer un point
- **Équipement automatique** : Épée, pioche, blocs, pomme dorée infinie
- **Armure colorée** : Rouge pour l'équipe rouge, bleue pour l'équipe bleue
- **Système de score** : Premier à 5 points gagne
- **Effets visuels** : Explosions, titres, sons
- **Configuration complète** : Toutes les positions sont configurables

## 🚀 Installation

1. **Compilation** :
   ```bash
   mvn clean package
   ```

2. **Installation sur le serveur** :
   - Copiez le fichier `target/hikabrain-1.0.0.jar` dans le dossier `plugins/` de votre serveur Spigot 1.12.2
   - Redémarrez le serveur

3. **Configuration** :
   - Éditez le fichier `plugins/Hikabrain/config.yml`
   - Configurez les positions des spawns et des lits
   - Utilisez `/hikabrain reload` pour recharger la configuration

## ⚙️ Configuration

### Fichier config.yml

```yaml
# Paramètres de jeu
maxPoints: 5
countdownStart: 10
countdownBetweenRounds: 3
resetBlocksAfterPoint: true

# Spawns des équipes (world, x, y, z, yaw, pitch)
spawnRed: world, 0, 100, 0, 0, 0
spawnBlue: world, 0, 100, 10, 180, 0

# Positions des lits (world, x, y, z)
bedRed: world, 0, 100, 0
bedBlue: world, 0, 100, 10
```

### Configuration des positions

1. Placez des lits aux positions souhaitées
2. Notez les coordonnées (utilisez F3)
3. Mettez à jour le fichier config.yml
4. Utilisez `/hikabrain reload`

## 🎯 Commandes

| Commande | Permission | Description |
|----------|------------|-------------|
| `/join` | `hikabrain.join` | Rejoindre une arène |
| `/leave` | `hikabrain.leave` | Quitter l'arène actuelle |
| `/hikabrain reload` | `hikabrain.admin` | Recharger la configuration |
| `/hikabrain info` | `hikabrain.admin` | Informations du plugin |
| `/hikabrain setup` | `hikabrain.admin` | Aide pour la configuration |

## 🎮 Comment jouer

1. **Rejoindre** : Utilisez `/join` pour rejoindre une arène
2. **Attendre** : Attendez qu'un autre joueur rejoigne (1v1)
3. **Combat** : La partie commence automatiquement après 10 secondes
4. **Objectif** : Marchez sur le lit adverse pour marquer un point
5. **Victoire** : Premier à 5 points gagne !

## 🛠️ Développement

### Structure du projet

```
src/main/java/fr/hikabrain/
├── HikabrainPlugin.java          # Classe principale
├── commands/                     # Commandes
│   ├── JoinCommand.java
│   ├── LeaveCommand.java
│   └── HikabrainCommand.java
├── game/                         # Logique de jeu
│   ├── Arena.java
│   ├── GameManager.java
│   ├── Team.java
│   └── GameState.java
├── listeners/                    # Événements
│   ├── PlayerListener.java
│   └── PvPListener.java
└── utils/                        # Utilitaires
    └── ConfigManager.java
```

### Compilation

```bash
# Compiler le plugin
mvn clean package

# Le fichier JAR sera dans target/hikabrain-1.0.0.jar
```

## 🔧 Fonctionnalités techniques

### PvP 1.8.9 sur 1.12.2

Le plugin désactive automatiquement le cooldown d'attaque pour reproduire le PvP 1.8.9 :

```java
// Supprime le cooldown d'attaque
player.getAttribute(Attribute.GENERIC_ATTACK_SPEED)
      .setBaseValue(1024.0);
```

### Support des deux mains

Compatible avec la fonctionnalité des deux mains de Minecraft 1.12.2. Les joueurs peuvent utiliser les deux slots d'armes.

### Détection des lits

Le système détecte automatiquement quand un joueur marche sur un lit adverse et marque un point.

## 📝 Changelog

### Version 1.0.0
- ✅ Système de base complet
- ✅ PvP 1.8.9 sur Spigot 1.12.2
- ✅ Support des deux mains
- ✅ Détection des lits
- ✅ Équipement automatique
- ✅ Système de score
- ✅ Effets visuels et sonores
- ✅ Configuration complète

## 🤝 Support

Pour toute question ou problème :
1. Vérifiez la configuration
2. Consultez les logs du serveur
3. Utilisez `/hikabrain info` pour les informations du plugin

## 📄 Licence

Ce projet est sous licence MIT. Libre d'utilisation et de modification.
