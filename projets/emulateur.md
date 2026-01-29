# SAÉ S5.A.01 - Émulateur processeur RISC-V

Ce projet implémente un émulateur complet du processeur RISC-V avec support des instructions RV32I, des extensions M (Multiplication) et F (Flottant), ainsi que des périphériques mémoire-mappés et du semihosting.

## Architecture

- **Jeu d'instructions** : RV32I + M + F (32 bits, entiers + multiplication + flottant)
- **Mode** : non privilégié (machine mode uniquement)
- **Registres** : x0 à x31 (entiers), f0 à f31 (flottants)
- **Encodages supportés** : R, I, S, B, U, J

## Livrables

### Livrable 1 : Décodeur d'instructions
Décode les instructions RISC-V et produit une sortie CSV avec le mapping opcode → catégorie/encodage.

### Livrable 2 : Désassembleur
Désassemble les instructions binaires en assembleur RISC-V lisible.

### Livrable 3 : Émulateur de base
Émule un processeur RISC-V complet avec toutes les instructions RV32I et un mode interactif de débogage.

### Livrable 4 : Émulateur avec périphériques
Ajoute le support des périphériques mémoire-mappés (GPIO, GPU, Sound Card) et du semihosting.

## Extensions implémentées

### Extension M (Multiplication)
- Instructions : `mul`, `mulh`, `mulhsu`, `mulhu`, `div`, `divu`, `rem`, `remu`

### Extension F (Flottant 32 bits)
- Chargement/stockage : `flw`, `fsw`
- Opérations arithmétiques : `fadd.s`, `fsub.s`, `fmul.s`, `fdiv.s`, `fsqrt.s`
- Comparaisons : `feq.s`, `flt.s`, `fle.s`
- Min/Max : `fmin.s`, `fmax.s`
- Fused multiply-add : `fmadd.s`, `fmsub.s`, `fnmsub.s`, `fnmadd.s`

### Périphériques mémoire-mappés
- **GPIO** (base: 0x10001000) : 64 pins d'entrée/sortie
- **GPU** (base: 0x20000000) : Framebuffer 320x240 RGBA
- **Sound Card** (base: 0x30000000) : Génération audio 44.1 kHz

## Installation

### Prérequis
- Rust 1.82 ou supérieur
- Docker (optionnel, pour les conteneurs)

### Compilation
```bash
cargo build --release
```

## Usage

### Commandes principales

#### Livrable 1 - Décodeur (sortie CSV)
```bash
cargo run -- decode_riscv fichier.bin
```

#### Livrable 2 - Désassembleur
```bash
cargo run -- disas fichier.bin
```

#### Livrable 3/4 - Émulateur (mode normal)
```bash
cargo run -- emu fichier.bin
```

#### Livrable 3/4 - Émulateur (mode interactif)
```bash
cargo run -- emu -i fichier.bin
```

#### Interface graphique - Visualisation de l'état
```bash
cargo run -- view fichier.bin
```

### Mode interactif

Le mode interactif permet de déboguer l'exécution pas à pas :

- `s`, `step` : Exécuter une instruction
- `c`, `continue` : Continuer jusqu'à ebreak
- `r`, `registers` : Afficher tous les registres
- `i`, `instruction` : Afficher l'instruction au PC actuel
- `m <addr>` : Lire la mémoire à l'adresse (hex)
- `h`, `help` : Afficher l'aide
- `q`, `quit` : Quitter

## Docker

### Construction des images

```bash
docker build -t livrable1 -f Dockerfile.l1 .
docker build -t livrable2 -f Dockerfile.l2 .
docker build -t livrable3 -f Dockerfile.l3 .
docker build -t livrable4 -f Dockerfile.l4 .
```

### Exécution des conteneurs

```bash
# Livrable 1
docker run -it --rm livrable1 sample.bin

# Livrable 2
docker run -it --rm livrable2 sample.bin

# Livrable 3
docker run -it --rm livrable3 sample.bin

# Livrable 4 (mode normal)
docker run -it --rm livrable4 sample.bin

# Livrable 4 (mode interactif)
docker run -it --rm livrable4 -i sample.bin
```

### Utilisation avec un fichier personnalisé

```bash
docker run -it --rm -v ${PWD}/mon_fichier.bin:/app/mon_fichier.bin livrable1 mon_fichier.bin
```

## Structure du projet

```
sae_rust/
├── src/
│   ├── main.rs          # Code principal (décodeur, désassembleur, émulateur)
│   ├── extensions.rs    # Extensions M et F
│   ├── peripherals.rs   # Périphériques mémoire-mappés
│   └── gui.rs           # Interface graphique
├── Dockerfile.l1        # Image Docker pour le livrable 1
├── Dockerfile.l2        # Image Docker pour le livrable 2
├── Dockerfile.l3        # Image Docker pour le livrable 3
├── Dockerfile.l4        # Image Docker pour le livrable 4
├── Cargo.toml           # Configuration du projet Rust
└── README.md            # Ce fichier
```

## Semihosting

Le projet supporte le semihosting RISC-V selon la spécification ARM/RISC-V. La séquence de semihosting est détectée automatiquement :

1. `slli x0, x0, 31` (instruction de marqueur)
2. `ebreak` (point d'entrée)
3. `srai x0, x0, 7` (instruction de marqueur)

Les appels semihosting supportés :
- `SYS_WRITEC` (a0 = 0x03) : Écrit un caractère
- `SYS_WRITE0` (a0 = 0x04) : Écrit une chaîne de caractères terminée par null

## Tests

Le projet inclut un fichier de test `sample.bin` pour valider les fonctionnalités. Tous les livrables ont été testés et fonctionnent correctement.

## Auteurs

Projet réalisé dans le cadre de la SAÉ S5.A.01 par Thomas Guislin et Quentin Lyoen

## Licence

Ce projet est fourni à des fins éducatives.
