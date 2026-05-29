export interface Experience {
  company: string
  client?: string
  role: string
  period: string
  location: string
  context: string
  tasks: string[]
  autonomy: string
  interactions: string
}

export interface HardSkill {
  name: string
  icon: string
  context: string
  concrete: string
  level: string
}

export interface SoftSkill {
  title: string
  icon: string
  definition: string
  situation: string
  analysis: string
}

export interface BilanData {
  introduction: {
    title: string
    subTitle: string
    bio: string
    s4vsS6: string
    shortTermProject: string
  }
  experiences: Experience[]
  hardSkills: HardSkill[]
  softSkills: {
    being: SoftSkill[]
    communicating: SoftSkill[]
    workingWithOthers: SoftSkill[]
  }
  reflexion: {
    selfAwareness: string
    strengths: string[]
    improvements: string[]
    evolutionNeeds: string
  }
}

export const bilanData: BilanData = {
  introduction: {
    title: "Positionnement & Identité Professionnelle",
    subTitle: "Thomas Guislin — Futur Développeur Full-Stack & DevOps",
    bio: "Actuellement en troisième année de BUT Informatique à l'Université de Lille, mon parcours m'a permis de développer une double sensibilité : d'une part, la réalisation d'applications robustes et élégantes (React, Angular, Spring Boot), et d'autre part, la validation de la qualité et des performances logicielles (tests de charge JMeter/OctoPerf, observabilité Datadog). Mon identité professionnelle repose sur la rigueur, l'adaptabilité face aux technologies émergentes et une posture résolument réflexive et orientée solution.",
    s4vsS6: "Entre le Semestre 4 et le Semestre 6, mon positionnement a connu une évolution majeure. Au S4, j'appréhendais le développement de manière essentiellement académique et technique, centré sur la simple écriture du code pour répondre à un besoin immédiat. Grâce à mes stages chez Abeille Assurances puis chez CGI (pour Adeo), j'ai développé une posture professionnelle globale : je ne me demande plus seulement si le code fonctionne, mais s'il est performant sous forte charge, s'il est maintenable par d'autres, s'il respecte les contraintes d'architecture d'entreprise et comment il s'intègre dans un flux DevOps continu.",
    shortTermProject: "Pour concrétiser cette évolution et poursuivre mon développement, mon projet à court et moyen terme est d'intégrer une formation d'ingénieur ou un Master en informatique à partir de septembre 2026, réalisée dans le cadre d'une alternance de 2 ans. Ce format me permettra de combiner l'approfondissement théorique de l'architecture logicielle avec une pratique professionnelle à haute valeur ajoutée."
  },
  experiences: [
    {
      company: "CGI",
      client: "Adeo",
      role: "Stage - Testeur de performances applicatives",
      period: "Avril 2026 — Août 2026 (En cours)",
      location: "Lille, France",
      context: "Adeo est un leader mondial de la grande distribution de bricolage et de l'aménagement de la maison. Dans un écosystème e-commerce servant des millions d'utilisateurs par jour, la robustesse et la vitesse des serveurs sont critiques. J'ai intégré l'équipe Qualité et Performances de CGI pour accompagner Adeo dans la validation de ses APIs et applications sous contrainte de charge.",
      tasks: [
        "Scripting de scénarios d'usage complexes et réalistes sur Apache JMeter (simulations de parcours utilisateurs, gestion des tokens, requêtes dynamiques).",
        "Orchestration et exécution de campagnes de tests de charge massives sur la plateforme cloud OctoPerf.",
        "Analyse en temps réel et post-exécution de la télémétrie des serveurs (latence, taux d'erreur, CPU, mémoire, requêtes SQL) sur la suite d'observabilité Datadog.",
        "Collaboration avec les équipes de développement pour localiser précisément les goulots d'étranglement (bottlenecks) et proposer des pistes d'optimisation."
      ],
      autonomy: "La performance logicielle n'étant pas enseignée dans le cursus classique du BUT, j'ai fait preuve d'une autonomie totale dès mon arrivée. J'ai dû m'auto-former de zéro aux protocoles de test, à l'analyse de courbes de charge et aux outils professionnels (JMeter, OctoPerf, Datadog) en lisant activement de la documentation et en menant des expérimentations progressives.",
      interactions: "Mon quotidien s'articule autour d'interactions bidirectionnelles. D'une part avec ma hiérarchie et mon tuteur chez CGI pour le suivi méthodologique, et d'autre part directement avec les Tech Leads et ingénieurs système du client Adeo pour leur restituer mes comptes-rendus d'analyse de manière claire, synthétique et exploitable."
    },
    {
      company: "Abeille Assurances",
      role: "Stage - Développeur Full-Stack (Angular / Spring Boot)",
      period: "Avril 2025 — Juin 2025 (10 semaines)",
      location: "Mont-Saint-Aignan (76), France",
      context: "Abeille Assurances (ex-Aviva France) est un acteur majeur de l'assurance en France. J'ai intégré l'équipe de développement informatique pour participer à la modernisation et à la refonte ergonomique d'un portail applicatif interne critique utilisé quotidiennement par les collaborateurs.",
      tasks: [
        "Conception et développement de composants d'interface dynamiques et réutilisables en Angular 17 et Tailwind CSS.",
        "Création et mise à jour d'API REST robustes avec Java et Spring Boot pour alimenter le nouveau frontend.",
        "Rédaction de tests unitaires et intégration dans un workflow Git d'entreprise (revues de code systématiques).",
        "Modernisation de l'ergonomie générale du site interne dans le respect de la charte graphique de la marque."
      ],
      autonomy: "Entièrement guidé durant les deux premières semaines pour appréhender l'architecture massive de l'entreprise, j'ai rapidement gagné en indépendance. À partir de la troisième semaine, mon tuteur m'a confié la responsabilité complète de plusieurs 'User Stories' de développement, de la conception technique à la mise en production.",
      interactions: "J'ai évolué au sein d'une équipe agile pluridisciplinaire (développeurs, Business Analysts, Product Owner). Cette expérience m'a appris à collaborer par le biais de pair programming, de daily meetings et de sprint reviews. Les échanges étaient particulièrement stimulants et constructifs, favorisant mon intégration rapide."
    }
  ],
  hardSkills: [
    {
      name: "Apache JMeter & OctoPerf",
      icon: "⚡",
      context: "Mobilisés quotidiennement dans mon stage de BUT3 chez CGI pour le client Adeo.",
      concrete: "Je sais concevoir des plans de test complexes incluant la gestion dynamique des variables, l'extraction d'identifiants (Regex/JSON Path) pour maintenir les sessions, et le paramétrage d'injecteurs de charge dans le cloud pour simuler des milliers d'utilisateurs simultanés.",
      level: "Avancé (Maîtrise professionnelle)"
    },
    {
      name: "Datadog & Observabilité",
      icon: "📊",
      context: "Utilisé chez CGI pour corréler la charge générée et le comportement de l'infrastructure.",
      concrete: "Je sais interpréter des dashboards de télémétrie complexes. Je sais analyser les métriques clés (temps de réponse p95/p99, taux d'erreurs HTTP 5xx, fuites mémoire JVM) et naviguer dans les traces d'APM pour isoler une requête SQL ou un appel d'API défaillant.",
      level: "Avancé"
    },
    {
      name: "Angular & Tailwind CSS",
      icon: "🅰️",
      context: "Missions de refonte UI lors de mon stage chez Abeille Assurances.",
      concrete: "Je maîtrise la création de composants réutilisables, la gestion des états locaux (RxJS, Signals), et la mise en œuvre de layouts responsives complexes avec Tailwind CSS tout en respectant une charte graphique d'entreprise stricte.",
      level: "Avancé"
    },
    {
      name: "Java & Spring Boot",
      icon: "🍃",
      context: "Utilisé chez Abeille Assurances et pour la SAÉ Frameworks Web (Projet Calendrier).",
      concrete: "Je sais concevoir des API REST hautement sécurisées (Spring Security, BCrypt, JWT), structurer des bases de données avec JPA/Hibernate, implémenter une architecture MVC propre et gérer la communication asynchrone (e-mails, tâches planifiées).",
      level: "Avancé / Expert"
    },
    {
      name: "Rust & Émulation Système",
      icon: "🦀",
      context: "Développé pour la SAÉ Émulateur processeur RISC-V au Semestre 5.",
      concrete: "Maîtrise des concepts bas niveau (gestion de la mémoire sans garbage collector, ownership, lifetimes). Conception de structures d'émulation matérielle (décodeur, registres, mémoire mappée) avec des performances optimales.",
      level: "Intermédiaire / Avancé"
    }
  ],
  softSkills: {
    being: [
      {
        title: "Adaptabilité & Autodidaxie",
        icon: "🧠",
        definition: "Capacité à s'approprier rapidement de nouveaux concepts techniques complexes en autonomie complète.",
        situation: "Au début de mon stage chez CGI en 2026, j'ai été confronté aux tests de performances logicielles et à l'observabilité système (JMeter, Datadog), des matières totalement absentes de mon cursus universitaire.",
        analysis: "Au lieu de me laisser déstabiliser, j'ai adopté une posture d'apprentissage active : lecture minutieuse de documentations, réalisation de tutoriels et expérimentation sur des environnements de test locaux. Cette capacité d'adaptation rapide a été saluée par mon tuteur de stage qui m'a attribué la note maximale pour ma vitesse de montée en compétences et la qualité de mes livrables."
      },
      {
        title: "Gestion du stress & Constance",
        icon: "🧘",
        definition: "Savoir garder son calme, sa lucidité et sa rigueur face aux impératifs de temps et aux imprévus.",
        situation: "Lors de mon stage chez Abeille Assurances en 2025, nous avons rencontré un bug bloquant en pré-production sur un écran clé de l'application interne à seulement deux jours de la démonstration de fin de sprint.",
        analysis: "En situation de stress collectif, j'ai canalisé mes émotions pour rester concentré sur la résolution du problème. J'ai découpé méthodiquement le problème, initié une session de pair programming avec un développeur senior et proposé un correctif propre qui a été validé. Mon calme et ma persévérance m'ont permis d'obtenir la note maximale de mon tuteur."
      }
    ],
    communicating: [
      {
        title: "Réception active du feedback",
        icon: "🤝",
        definition: "Accueillir les remarques et critiques techniques comme des opportunités de progression, sans y mêler d'ego.",
        situation: "Chez Abeille Assurances, lors de mes premières revues de code ('pull requests'), mes collègues seniors me faisaient de nombreux retours détaillés sur l'optimisation Angular et le respect des patterns internes.",
        analysis: "J'ai accueilli ces retours avec enthousiasme et curiosité, posant des questions pour bien comprendre la logique derrière chaque recommandation. Cette posture d'écoute active m'a permis d'assimiler les bonnes pratiques de l'entreprise très rapidement, améliorant drastiquement la qualité de mes commits suivants."
      },
      {
        title: "Communication technique structurée et vulgarisation",
        icon: "📢",
        definition: "Savoir adapter son discours pour expliquer des problématiques complexes à différents profils de collaborateurs.",
        situation: "Chez CGI, je dois restituer les résultats de mes tests de charge à la fois aux équipes système (DevOps) et aux chefs de projets Adeo non techniques.",
        analysis: "Pour chaque profil, j'adapte ma communication : je présente des métriques ultra-précises et des configurations d'injecteurs aux profils infra, tout en synthétisant sous forme de feux tricolores et d'impacts sur l'expérience client pour les profils métier. Cela permet de fluidifier la prise de décision."
      }
    ],
    workingWithOthers: [
      {
        title: "Coopération au sein d'un collectif Agile",
        icon: "👥",
        definition: "S'inscrire activement dans des rituels collectifs et coopérer étroitement pour l'atteinte d'un objectif de sprint commun.",
        situation: "Pendant mes deux expériences chez Abeille et CGI, le travail s'est effectué selon la méthodologie Scrum/Agile.",
        analysis: "J'ai participé activement aux Daily Standups, non pas comme un simple exercice de compte-rendu, mais comme un moment d'entraide collective. J'ai fréquemment proposé mon aide sur des tâches bloquées et partagé mes avancements en toute transparence, favorisant une synergie d'équipe positive."
      },
      {
        title: "Prise d'initiative et résolution collaborative",
        icon: "🚀",
        definition: "Identifier un besoin non couvert et mobiliser les ressources nécessaires pour y apporter une solution.",
        situation: "Durant mon projet système en BUT3 (Émulateur RISC-V), notre binôme bloquait sur le décodage d'instructions binaires spécifiques en Rust.",
        analysis: "J'ai pris l'initiative d'organiser une session de travail intensif, d'isoler l'algorithme défaillant dans un prototype de débogage à part, et de guider notre réflexion commune pour débloquer la situation. Mon rôle a été d'apporter de la structure pour que notre collaboration soit efficace."
      }
    ]
  },
  reflexion: {
    selfAwareness: "Mes deux expériences de stage ont agi comme un accélérateur de conscience professionnelle. Elles m'ont révélé que je ne suis pas seulement à l'aise dans le développement pur, mais également doté d'un fort esprit d'analyse et d'une passion pour la qualité globale et l'ingénierie système (DevOps/Performances). J'ai pris conscience que j'aime comprendre comment les systèmes réagissent sous la contrainte et comment optimiser les architectures à grande échelle.",
    strengths: [
      "Une adaptabilité exceptionnelle : capable d'apprendre des stacks complexes de zéro (comme les outils JMeter, OctoPerf, Datadog en quelques semaines).",
      "Une posture réflexive naturelle : j'accueille les critiques et le feedback technique comme des leviers majeurs pour grandir.",
      "Une approche rigoureuse et orientée qualité logicielle (importance accordée aux tests et aux performances réelles)."
    ],
    improvements: [
      "L'approfondissement de l'architecture des infrastructures Cloud (notamment Kubernetes et le Serverless) afin de mieux comprendre l'origine des bottlenecks matériels observés dans mes analyses.",
      "L'affirmation de soi (assertivité) en réunion plénière : oser exprimer plus fermement mes préconisations d'optimisation face à des interlocuteurs très seniors."
    ],
    evolutionNeeds: "Pour continuer à évoluer, mon besoin principal est d'être confronté à des architectures logicielles complexes et de grande envergure. Cela nécessite de poursuivre mes études vers un diplôme de niveau Bac+5 (Master ou Ingénieur). L'alternance sera le vecteur parfait pour cela, alliant l'approfondissement des concepts théoriques de pointe (conception de systèmes distribués, sécurité avancée, cloud computing) et leur mise en œuvre immédiate en entreprise."
  }
}
