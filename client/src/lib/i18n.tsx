import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Language = "en" | "fr" | "lb";

export const LANGUAGES: { code: Language; short: string; label: string }[] = [
  { code: "en", short: "EN", label: "English" },
  { code: "fr", short: "FR", label: "Français" },
  { code: "lb", short: "LU", label: "Lëtzebuergesch" },
];

const STORAGE_KEY = "letzimpact-language";

export const COPY = {
  en: {
    meta: {
      htmlLang: "en",
      languageLabel: "Language",
    },
    nav: {
      services: "Services",
      process: "How we work",
      packages: "Packages",
      founders: "About",
      faq: "FAQ",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      home: "LëtzImpact home",
      logoAlt: "LëtzImpact social media marketing",
      whatsapp: "Contact us on WhatsApp",
      whatsappMessage:
        "Hey LëtzImpact, I came from your website and I would love to talk about social media for my brand.",
      talk: "Let's talk",
    },
    hero: {
      words: ["Social", "media", "that", "actually", "works"],
      bodyPrefix: "We are",
      body: "a Luxembourg social media agency and marketing production company built by young talent that understands how brands grow today. We plan, film and manage Reels, TikToks and short form content with a clear strategy, a professional look and the discipline to turn attention into serious business.",
      packagesCta: "See the packages",
      partners: "Our partners:",
    },
    recentWork: {
      aria: "Recent work",
      eyebrow: "Recent work / latest weeks",
      heading: "A few projects from the",
      highlight: "last few weeks.",
      intro:
        "Six short cuts from app, real estate, construction, cleaning, interviews and café work in Luxembourg. Same compact reel look, same clean style, built for modern social media marketing.",
      play: "Play",
      pause: "Pause",
      reels: [
        {
          brand: "Oasis",
          label: "Café product cut",
          description:
            "A short café clip for Oasis with a warm and clean food and drink look.",
        },
        {
          brand: "AmHome",
          label: "Real estate",
          description:
            "A real estate reel with calm movement and a premium room feeling.",
        },
        {
          brand: "Salonkee",
          label: "App salon booking",
          description:
            "Salonkee is a salon booking app, shown here as a short social cut.",
        },
        {
          brand: "AM Construction",
          label: "Construction reel",
          description:
            "A clip for AM Construction with a clear construction site look.",
        },
        {
          brand: "Neteco",
          label: "Cleaning company FAQ",
          description:
            "A FAQ video for Neteco, a cleaning company, made for quick answers and a trustworthy first impression.",
        },
        {
          brand: "AS",
          label: "Client interview",
          description:
            "An interview style social cut with a calm interior look and a clear message.",
        },
      ],
    },
    services: {
      label: "What we actually do",
      heading: "Six things, done",
      highlight: "properly",
      ending: "Not sixty things, done loosely.",
      items: [
        {
          title: "Short form content",
          body: "Reels and TikToks built around a hook, a story and a reason to stop scrolling. Social media content production in Luxembourg, filmed by us, edited by us and prepared for Instagram, TikTok and ads.",
        },
        {
          title: "Account management",
          body: "We handle the calendar, captions, comments, DMs and posting rhythm for Instagram and TikTok. You handle running your business while your social media stays active.",
        },
        {
          title: "Strategy and positioning",
          body: "A clear marketing angle for your brand across every social media platform. What to say, who to say it to, why anyone should care and how the content supports real business goals.",
        },
        {
          title: "Performance and reporting",
          body: "Monthly numbers without the buzzwords. What worked, what did not, what we are changing next month.",
        },
        {
          title: "Launches and campaigns",
          body: "Product drops, openings, restaurant launches, campaigns and promos. Timed content sprints designed to make a moment, not just a post.",
        },
        {
          title: "Weekly check ins",
          body: "Fifteen minute calls. Real updates, real feedback, no slide decks pretending to be insights.",
        },
      ],
    },
    localSeo: {
      label: "SEO focus / Luxembourg",
      heading: "Built for businesses searching in",
      highlight: "Luxembourg.",
      intro:
        "LëtzImpact is positioned for companies across Luxembourg and Schifflange that need a social media agency, marketing agency, filming agency or content production partner without old fashioned agency habits. Google can also connect the brand through common searches such as LetzImpact, LetsImpact and LëtzImpact Agency.",
      keywordLabel: "Search focus",
      keywords: [
        "LëtzImpact",
        "LetzImpact",
        "LetsImpact",
        "LëtzImpact Schifflange",
        "marketing agency Schifflange",
        "Social Media Agency Luxembourg",
        "Social Media Agentur Luxemburg",
        "agence social media Luxembourg",
        "Marketing Agency Luxembourg",
        "Video Production Luxembourg",
        "Content Production Luxembourg",
        "Reels production Luxembourg",
        "TikTok marketing Luxembourg",
      ],
      cards: [
        {
          title: "For every local business type",
          body: "Restaurants, architects, doctors, lawyers, gyms, cleaning companies, construction brands, real estate teams, apps and startups can all use sharper social media content.",
        },
        {
          title: "Filming and content production",
          body: "We plan and film short form video, Reels, TikToks, interviews, product cuts, launch campaigns and business content made for Luxembourg audiences.",
        },
        {
          title: "Social media management",
          body: "Strategy, captions, posting, community management and reporting stay connected, so the account looks professional and keeps moving every month.",
        },
        {
          title: "Luxembourg wide service area",
          body: "The focus is the whole country of Luxembourg, not one city. We can support brands from Luxembourg City to Esch, Differdange, Dudelange and beyond.",
        },
      ],
    },
    process: {
      label: "How we work",
      heading: "A clean simple process for very",
      highlight: "bold",
      ending: "content.",
      intro:
        "You should not have to babysit your agency. Five steps, repeated every month. You always know where we are, where we are going, and why.",
      stepLabel: "STEP",
      steps: [
        {
          title: "We listen first.",
          body: "A short call to understand the brand, the audience and what good actually looks like for you. No templates, no speedruns.",
        },
        {
          title: "We build the plan.",
          body: "A monthly content roadmap with hooks, angles, formats and posting rhythm. You see what is coming before we shoot a single frame.",
        },
        {
          title: "We shoot it.",
          body: "Filming days where we actually show up with gear, lighting and direction sorted. You do not have to direct anything, you just turn up and be yourself.",
        },
        {
          title: "We run it.",
          body: "Edits, captions, scheduling, comments and DMs. The account is treated like ours and answered in hours, not whenever we feel like it.",
        },
        {
          title: "We tune it.",
          body: "Each month we look at what worked and what flopped, then we change the next month accordingly. Honest reports, no vanity metrics.",
        },
      ],
    },
    packages: {
      label: "Packages",
      heading: "Three ways to work with us.",
      highlight: "Pick one.",
      intro:
        "Every package is monthly, with no hidden tiers and no surprise upsells. Pricing is tailored on the call because brands are not all built the same, but the scope is exactly what you see here.",
      mostPicked: "Most picked",
      cta: "Let's grow",
      note: "Not sure where to start or need a custom package? Book a fifteen minute call and we will shape the perfect package for you.",
      items: [
        {
          tag: "Managed presence",
          name: "Starter",
          pitch:
            "For brands that want to look alive online without losing their evenings.",
          videos: "8 videos per month",
          promos: "+ 3 promo posts",
          features: [
            "Instagram and TikTok",
            "Content planning and posting",
            "Light community management",
            "Monthly performance report",
          ],
          waMessage:
            "Hey LëtzImpact, I am interested in the Starter package. Let's talk.",
        },
        {
          tag: "Performance growth",
          name: "Growth",
          pitch:
            "For brands ready to actually grow with more output, sharper strategy and real momentum.",
          videos: "12 to 14 videos per month",
          promos: "+ 5 promo posts",
          features: [
            "Instagram and TikTok",
            "Content strategy and optimisation",
            "Active community management",
            "Monthly analysis and growth insights",
          ],
          waMessage:
            "Hey LëtzImpact, I am looking at the Growth package. When can we chat?",
        },
        {
          tag: "Full brand management",
          name: "Authority",
          pitch:
            "For brands done playing, with full management, several platforms and weekly tuning.",
          videos: "16 to 18 videos per month",
          promos: "+ 8 promo posts",
          features: [
            "Content distribution across platforms",
            "Brand and campaign strategy",
            "Full community and DM management",
            "Weekly analysis and optimisation",
          ],
          waMessage:
            "Hey LëtzImpact, the Authority package looks like us. Let's set up a call.",
        },
      ],
    },
    founders: {
      label: "About the founders",
      heading: "Young founders treating social media like a",
      highlight: "serious business",
      intro:
        "We built LëtzImpact because too many agencies still work in an old fashioned way. Some sell beautiful videos that do not perform, while others chase performance with content that looks unprofessional. Our work is built to do both, create content that looks sharp, stays professional and is made to perform.",
      founderRole: "Founder",
      coFounderRole: "Co founder",
      values: [
        {
          k: "Clear strategy",
          v: "We say no to the wrong angle, even if it is loud.",
        },
        {
          k: "Clean execution",
          v: "Files delivered, posts scheduled, comments answered.",
        },
        {
          k: "Sharp content",
          v: "Hooks first. Aesthetics second. Both matter.",
        },
        {
          k: "Honest reports",
          v: "If something flopped, we say so and fix it.",
        },
      ],
    },
    faq: {
      label: "Questions, answered",
      heading: "The questions everyone asks.",
      highlight: "Answered honestly.",
      intro:
        "Anything missing? Text us. We usually answer faster than the FAQ loads.",
      items: [
        {
          q: "How do we start working together?",
          a: "We jump on a fifteen minute call or WhatsApp chat to understand the brand, the goal and what good actually looks like for you. If it makes sense for both sides, we send a tailored proposal within a few days. No fourteen step funnels.",
        },
        {
          q: "Do you handle everything, or just the filming?",
          a: "Both options exist depending on the package. The smaller plan is closer to managed presence, the bigger ones cover strategy, filming, editing, posting, community and reporting. You pick the level of hands off support you want.",
        },
        {
          q: "Do you only work with brands in Luxembourg?",
          a: "We are based in Luxembourg and focus on Luxembourg businesses, from restaurants, architects and doctors to lawyers, cleaning companies, construction brands, apps and startups. Most shoots happen locally, and strategy or management can also be handled remotely when needed.",
        },
        {
          q: "How long until we see results?",
          a: "Honestly? Most accounts start moving in thirty to sixty days, and start hitting their stride around month three. Anyone promising viral results in week one is selling a story, not a strategy.",
        },
        {
          q: "Can we start small and scale up later?",
          a: "Yes. Most clients do. You can start on Starter, prove the system works, and move up to Growth or Authority once you want more output. We never lock you into long contracts.",
        },
        {
          q: "What makes you actually different?",
          a: "We are a founder led team, not a chain of account managers. The person planning your content stays close to the person filming, editing and replying to comments. That is why your account ends up sounding like a brand, not a bot.",
        },
        {
          q: "Do you also build websites?",
          a: "Yes. Websites, social media, content shoots and marketing strategy can sit under the same roof. That matters because the website, Instagram, TikTok and ads should all tell the same story.",
        },
      ],
    },
    footer: {
      status: "Open for new brands",
      heading: "Let's turn your",
      highlight: "attention",
      ending: "into actual customers.",
      intro:
        "Fifteen minutes on WhatsApp, a few honest questions, a clear next step. No pitch deck, no pressure and no salesperson named Bryan.",
      emailPrefix: "or",
      blurb:
        "Social media agency, marketing agency and content production from Luxembourg. We help local brands grow through strategy, Reels, TikToks, video production and focused social media management.",
      sitemap: "Sitemap",
      reach: "Reach us",
      made: "Made in Luxembourg",
      impressum: "Impressum · LëtzImpact Agency",
    },
    notFound: {
      title: "Page not found",
      message: "Sorry, the page you are looking for does not exist.",
      detail: "It may have been moved or deleted.",
      cta: "Go home",
    },
  },
  fr: {
    meta: {
      htmlLang: "fr",
      languageLabel: "Langue",
    },
    nav: {
      services: "Services",
      process: "Notre méthode",
      packages: "Offres",
      founders: "À propos",
      faq: "FAQ",
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
      home: "Accueil LëtzImpact",
      logoAlt: "LëtzImpact marketing social media",
      whatsapp: "Contactez nous sur WhatsApp",
      whatsappMessage:
        "Salut LëtzImpact, je viens de votre site et j'aimerais parler du social media pour ma marque.",
      talk: "Discutons",
    },
    hero: {
      words: ["Social", "media", "qui", "fonctionne", "vraiment"],
      bodyPrefix: "Nous sommes",
      body: "une agence social media et marketing production au Luxembourg, portée par de jeunes talents qui comprennent comment les marques grandissent aujourd'hui. Nous planifions, filmons et gérons des Reels, TikToks et contenus courts avec une stratégie claire, une image professionnelle et la rigueur nécessaire pour transformer l'attention en vrais résultats.",
      packagesCta: "Voir les offres",
      partners: "Nos partenaires:",
    },
    recentWork: {
      aria: "Travaux récents",
      eyebrow: "Travaux récents / dernières semaines",
      heading: "Quelques projets des",
      highlight: "dernières semaines.",
      intro:
        "Six cuts courts autour d'une app, de l'immobilier, de la construction, du nettoyage, d'interviews et d'un café. Même format compact, même style propre.",
      play: "Lire",
      pause: "Pause",
      reels: [
        {
          brand: "Oasis",
          label: "Café produit",
          description:
            "Un court clip café pour Oasis avec un rendu food and drink chaleureux et propre.",
        },
        {
          brand: "AmHome",
          label: "Immobilier",
          description:
            "Un reel immobilier avec des mouvements calmes et une impression haut de gamme.",
        },
        {
          brand: "Salonkee",
          label: "App réservation salon",
          description:
            "Salonkee est une app de réservation pour salons, présentée ici sous forme de cut social court.",
        },
        {
          brand: "AM Construction",
          label: "Reel construction",
          description:
            "Un clip pour AM Construction avec une esthétique de chantier claire.",
        },
        {
          brand: "Neteco",
          label: "Entreprise de nettoyage FAQ",
          description:
            "Une vidéo FAQ pour Neteco, une entreprise de nettoyage, pensée pour des réponses rapides et une première impression fiable.",
        },
        {
          brand: "AS",
          label: "Interview client",
          description:
            "Un cut social en style interview avec une ambiance intérieure calme et un message clair.",
        },
      ],
    },
    services: {
      label: "Ce que nous faisons vraiment",
      heading: "Six choses, faites",
      highlight: "correctement",
      ending: "Pas soixante choses faites à moitié.",
      items: [
        {
          title: "Contenu court",
          body: "Des Reels et TikToks construits autour d'un hook, d'une histoire et d'une raison de s'arrêter. Filmés par nous, montés par nous, publiés par nous.",
        },
        {
          title: "Gestion de compte",
          body: "Nous gérons le calendrier, les captions, les commentaires et les messages. Vous gérez votre entreprise.",
        },
        {
          title: "Stratégie et positionnement",
          body: "Un angle clair pour votre marque sur chaque plateforme social media. Quoi dire, à qui le dire, et pourquoi cela compte.",
        },
        {
          title: "Performance et reporting",
          body: "Des chiffres mensuels sans buzzwords. Ce qui a marché, ce qui n'a pas marché, et ce que nous changeons le mois suivant.",
        },
        {
          title: "Lancements et campagnes",
          body: "Sorties de produits, ouvertures et promos. Des sprints de contenu pensés pour créer un moment, pas juste un post.",
        },
        {
          title: "Points hebdomadaires",
          body: "Des appels de quinze minutes. De vraies nouvelles, de vrais retours, pas des présentations qui se font passer pour des insights.",
        },
      ],
    },
    localSeo: {
      label: "SEO / Luxembourg",
      heading: "Pensé pour les recherches au",
      highlight: "Luxembourg.",
      intro:
        "LëtzImpact se positionne pour les entreprises au Luxembourg et à Schifflange qui cherchent une agence social media, une agence marketing, une agence vidéo ou un partenaire de production de contenu moderne. Google peut aussi relier la marque aux recherches courantes comme LetzImpact, LetsImpact et LëtzImpact Agency.",
      keywordLabel: "Focus recherche",
      keywords: [
        "LëtzImpact",
        "LetzImpact",
        "LetsImpact",
        "LëtzImpact Schifflange",
        "agence marketing Schifflange",
        "agence social media Luxembourg",
        "agence marketing Luxembourg",
        "marketing digital Luxembourg",
        "Social Media Agency Luxembourg",
        "Marketing Agentur Luxemburg",
        "production vidéo Luxembourg",
        "Content Production Luxembourg",
        "Reels production Luxembourg",
      ],
      cards: [
        {
          title: "Pour tous les types d'entreprises",
          body: "Restaurants, architectes, médecins, avocats, salles de sport, sociétés de nettoyage, construction, immobilier, apps et startups peuvent tous profiter d'un contenu social media plus fort.",
        },
        {
          title: "Tournage et production de contenu",
          body: "Nous planifions et filmons des vidéos courtes, Reels, TikToks, interviews, contenus produits, lancements et contenus business pour le marché luxembourgeois.",
        },
        {
          title: "Gestion social media",
          body: "Stratégie, captions, publication, community management et reporting restent connectés pour garder un compte professionnel et actif chaque mois.",
        },
        {
          title: "Service sur tout le Luxembourg",
          body: "Nous visons tout le pays, pas une seule ville. Notre Google Business Profile est basé à Schifflange, et nous accompagnons des marques de Luxembourg-Ville à Esch, Differdange, Dudelange et au-delà.",
        },
      ],
    },
    process: {
      label: "Notre méthode",
      heading: "Un processus clair et simple pour du contenu",
      highlight: "fort",
      ending: ".",
      intro:
        "Vous ne devriez pas devoir surveiller votre agence. Cinq étapes, répétées chaque mois. Vous savez toujours où nous en sommes, où nous allons et pourquoi.",
      stepLabel: "ÉTAPE",
      steps: [
        {
          title: "Nous écoutons d'abord.",
          body: "Un court appel pour comprendre la marque, l'audience et ce que le bon résultat veut vraiment dire pour vous. Pas de modèles, pas de raccourcis.",
        },
        {
          title: "Nous construisons le plan.",
          body: "Une feuille de route mensuelle avec hooks, angles, formats et rythme de publication. Vous voyez ce qui arrive avant le moindre tournage.",
        },
        {
          title: "Nous filmons.",
          body: "Des jours de tournage où nous venons avec matériel, lumière et direction. Vous n'avez rien à diriger, vous venez et vous restez vous même.",
        },
        {
          title: "Nous gérons.",
          body: "Montages, captions, programmation, commentaires et messages. Le compte est traité comme le nôtre et reçoit des réponses en quelques heures.",
        },
        {
          title: "Nous ajustons.",
          body: "Chaque mois, nous regardons ce qui a fonctionné et ce qui a moins bien marché, puis nous ajustons le mois suivant. Des rapports honnêtes, pas de chiffres vanité.",
        },
      ],
    },
    packages: {
      label: "Offres",
      heading: "Trois façons de travailler avec nous.",
      highlight: "Choisissez la vôtre.",
      intro:
        "Chaque offre est mensuelle, sans paliers cachés et sans ventes surprises. Le prix est adapté pendant l'appel, parce que toutes les marques ne se ressemblent pas, mais le scope est exactement celui que vous voyez ici.",
      mostPicked: "Le plus choisi",
      cta: "On développe",
      note: "Vous ne savez pas par où commencer ou vous avez besoin d'une offre spéciale? Réservons quinze minutes et construisons l'offre parfaite pour vous.",
      items: [
        {
          tag: "Présence gérée",
          name: "Starter",
          pitch:
            "Pour les marques qui veulent avoir l'air actives en ligne sans perdre leurs soirées.",
          videos: "8 vidéos par mois",
          promos: "+ 3 posts promo",
          features: [
            "Instagram et TikTok",
            "Planification et publication",
            "Gestion légère de la communauté",
            "Rapport de performance mensuel",
          ],
          waMessage:
            "Salut LëtzImpact, je suis intéressé par l'offre Starter. Parlons en.",
        },
        {
          tag: "Croissance performance",
          name: "Growth",
          pitch:
            "Pour les marques prêtes à vraiment grandir avec plus de contenu, une stratégie plus nette et un vrai élan.",
          videos: "12 à 14 vidéos par mois",
          promos: "+ 5 posts promo",
          features: [
            "Instagram et TikTok",
            "Stratégie de contenu et optimisation",
            "Gestion active de la communauté",
            "Analyse mensuelle et insights de croissance",
          ],
          waMessage:
            "Salut LëtzImpact, je regarde l'offre Growth. Quand pouvons nous discuter?",
        },
        {
          tag: "Gestion de marque complète",
          name: "Authority",
          pitch:
            "Pour les marques qui veulent une gestion complète, plusieurs plateformes et des ajustements chaque semaine.",
          videos: "16 à 18 vidéos par mois",
          promos: "+ 8 posts promo",
          features: [
            "Distribution de contenu sur plusieurs plateformes",
            "Stratégie de marque et de campagne",
            "Gestion complète communauté et DM",
            "Analyse et optimisation hebdomadaire",
          ],
          waMessage:
            "Salut LëtzImpact, l'offre Authority nous correspond. Fixons un appel.",
        },
      ],
    },
    founders: {
      label: "À propos des fondateurs",
      heading:
        "De jeunes fondateurs qui traitent le social media comme une",
      highlight: "entreprise sérieuse",
      intro:
        "Nous avons créé LëtzImpact parce que trop d'agences travaillent encore de façon ancienne. Certaines vendent de belles vidéos qui ne performent pas, tandis que d'autres cherchent la performance avec du contenu qui manque de professionnalisme. Notre travail réunit les deux, un contenu propre, professionnel et pensé pour performer.",
      founderRole: "Fondateur",
      coFounderRole: "Co fondateur",
      values: [
        {
          k: "Stratégie claire",
          v: "Nous refusons le mauvais angle, même s'il fait du bruit.",
        },
        {
          k: "Exécution propre",
          v: "Fichiers livrés, posts programmés, commentaires traités.",
        },
        {
          k: "Contenu net",
          v: "Les hooks d'abord. L'esthétique ensuite. Les deux comptent.",
        },
        {
          k: "Rapports honnêtes",
          v: "Si quelque chose n'a pas marché, nous le disons et nous corrigeons.",
        },
      ],
    },
    faq: {
      label: "Questions, réponses",
      heading: "Les questions que tout le monde pose.",
      highlight: "Réponses honnêtes.",
      intro:
        "Il manque quelque chose? Écrivez nous. Nous répondons souvent plus vite que la FAQ ne charge.",
      items: [
        {
          q: "Comment commence la collaboration?",
          a: "Nous faisons un appel de quinze minutes ou un échange WhatsApp pour comprendre la marque, l'objectif et ce que le bon résultat veut dire pour vous. Si cela a du sens pour les deux côtés, nous envoyons une proposition adaptée en quelques jours. Pas de tunnel en quatorze étapes.",
        },
        {
          q: "Vous gérez tout ou seulement le tournage?",
          a: "Les deux options existent selon l'offre. Le petit plan se rapproche d'une présence gérée, les plus grands couvrent stratégie, tournage, montage, publication, communauté et reporting. Vous choisissez le niveau de soutien souhaité.",
        },
        {
          q: "Travaillez vous seulement avec des marques au Luxembourg?",
          a: "Nous sommes basés au Luxembourg et la plupart des tournages se font ici, mais nous travaillons aussi à distance avec des marques dans l'UE. Tant que les appels ont lieu et que les tournages sont organisés, la localisation ne bloque pas.",
        },
        {
          q: "Combien de temps avant de voir des résultats?",
          a: "Honnêtement? La plupart des comptes commencent à bouger en trente à soixante jours, puis trouvent leur rythme autour du troisième mois. Toute personne qui promet du viral en première semaine vend une histoire, pas une stratégie.",
        },
        {
          q: "Peut on commencer petit puis grandir ensuite?",
          a: "Oui. La plupart des clients le font. Vous pouvez commencer avec Starter, prouver que le système fonctionne, puis passer à Growth ou Authority quand vous voulez plus de contenu. Nous ne vous enfermons jamais dans de longs contrats.",
        },
        {
          q: "Qu'est ce qui vous rend vraiment différents?",
          a: "Nous sommes une équipe dirigée par les fondateurs, pas une chaîne de gestionnaires de compte. La personne qui planifie votre contenu reste proche de celle qui filme, monte et répond aux commentaires. C'est pour cela que votre compte sonne comme une marque, pas comme un robot.",
        },
        {
          q: "Faites vous aussi des sites web?",
          a: "Oui. C'est ce que vous regardez. Sites web, social media et tournages de contenu sont sous le même toit, c'est justement l'idée de LëtzImpact.",
        },
      ],
    },
    footer: {
      status: "Ouvert aux nouvelles marques",
      heading: "Transformons votre",
      highlight: "attention",
      ending: "en vrais clients.",
      intro:
        "Quinze minutes sur WhatsApp, quelques questions honnêtes, une prochaine étape claire. Pas de pitch deck, pas de pression et pas de vendeur appelé Bryan.",
      emailPrefix: "ou",
      blurb:
        "Agence social media, agence marketing et production de contenu au Luxembourg. Nous aidons les marques locales à grandir avec stratégie, Reels, TikToks, vidéo et gestion social media.",
      sitemap: "Plan du site",
      reach: "Nous joindre",
      made: "Créé au Luxembourg",
      impressum: "Impressum · LëtzImpact Agency",
    },
    notFound: {
      title: "Page introuvable",
      message: "Désolé, la page que vous cherchez n'existe pas.",
      detail: "Elle a peut être été déplacée ou supprimée.",
      cta: "Retour à l'accueil",
    },
  },
  lb: {
    meta: {
      htmlLang: "lb",
      languageLabel: "Sprooch",
    },
    nav: {
      services: "Servicer",
      process: "Eis Aart",
      packages: "Packagen",
      founders: "Iwwer eis",
      faq: "FAQ",
      openMenu: "Menü opmaachen",
      closeMenu: "Menü zoumaachen",
      home: "LëtzImpact Startsäit",
      logoAlt: "LëtzImpact Social Media Marketing",
      whatsapp: "Kontaktéiert eis op WhatsApp",
      whatsappMessage:
        "Moien LëtzImpact, ech kommen iwwer Är Websäit a géif gär iwwer Social Media fir meng Mark schwätzen.",
      talk: "Schwätze mir",
    },
    hero: {
      words: ["Social", "Media", "déi", "wierklech", "funktionéiert"],
      bodyPrefix: "Mir sinn",
      body: "eng lëtzebuergesch Social Media a Marketing Production Agency mat jonken Talenter, déi verstoen, wéi Marken haut wuessen. Mir plangen, filmen a geréiere Reels, TikToks a kuerz Videoe mat enger kloerer Strategie, engem professionelle Bild an der Disziplin, fir Opmierksamkeet a richteg Resultater ze verwandelen.",
      packagesCta: "Packagen ukucken",
      partners: "Eis Partner:",
    },
    recentWork: {
      aria: "Rezent Aarbechten",
      eyebrow: "Rezent Aarbechten / lescht Wochen",
      heading: "E puer Projeten aus de",
      highlight: "leschte Wochen.",
      intro:
        "Sechs kuerz Schnëtter aus App, Immobilie, Bau, Botzen, Interviewen a Café Aarbechten. Dat selwecht kompakt Reel Format, dee selwechte propperen Stil.",
      play: "Ofspillen",
      pause: "Paus",
      reels: [
        {
          brand: "Oasis",
          label: "Café Produkt Cut",
          description:
            "E kuerze Café Clip fir Oasis mat engem waarmen a propperen Androck fir Iessen a Gedrénks.",
        },
        {
          brand: "AmHome",
          label: "Immobilien",
          description:
            "En Immobilien Reel mat rouege Beweegungen an engem héichwäertege Gefill am Raum.",
        },
        {
          brand: "Salonkee",
          label: "App Salon Reservatioun",
          description:
            "Salonkee ass eng App fir Salon Reservatiounen, hei als kuerze Social Cut gewisen.",
        },
        {
          brand: "AM Construction",
          label: "Bau Reel",
          description:
            "E Clip fir AM Construction mat engem klore Baustelle Look.",
        },
        {
          brand: "Neteco",
          label: "Botzfirma FAQ",
          description:
            "E FAQ Video fir Neteco, eng Botzfirma, gemaach fir séier Äntwerten an en zouverlässegen éischten Androck.",
        },
        {
          brand: "AS",
          label: "Client Interview",
          description:
            "E Social Cut am Interview Stil mat enger roueger Atmosphär dobannen an engem klore Message.",
        },
      ],
    },
    services: {
      label: "Wat mir wierklech maachen",
      heading: "Sechs Saachen, richteg",
      highlight: "gemaach",
      ending: "Net siechzeg Saachen hallef gemaach.",
      items: [
        {
          title: "Kuerzen Inhalt",
          body: "Reels an TikToks ronderëm e staarken Ufank, eng Geschicht an e Grond fir beim Scrollen ze stoppen. Vun eis gefilmt, vun eis geschnidden, vun eis gepost.",
        },
        {
          title: "Konto Management",
          body: "Mir këmmeren eis ëm de Kalenner, Texter, Kommentaren an d'Messagen. Dir këmmert Iech ëm Äre Betrib.",
        },
        {
          title: "Strategie a Positionéierung",
          body: "E kloren Wénkel fir Är Mark op all Social Media Plattform. Wat een seet, wiem een et seet, a firwat et iergendeen interesséiere soll.",
        },
        {
          title: "Performance a Reporting",
          body: "Zuelen all Mount ouni eidel Wierder. Wat funktionéiert huet, wat net, a wat mir den nächste Mount änneren.",
        },
        {
          title: "Lancementer a Campagnen",
          body: "Start vu Produkter, Ouverturen a Promotiounen. Kuerz geplangte Phasen fir Inhalt, déi e Moment maachen, net just e Post.",
        },
        {
          title: "Uruff all Woch",
          body: "Uruff vu fofzéng Minutten. Richteg Neiegkeeten, richtege Feedback, keng Presentatiounen déi sech als Abléck ausginn.",
        },
      ],
    },
    localSeo: {
      label: "SEO Fokus / Lëtzebuerg",
      heading: "Gebaut fir Betriber déi zu",
      highlight: "Lëtzebuerg sichen.",
      intro:
        "LëtzImpact positionéiert sech fir Betriber a ganz Lëtzebuerg an zu Schëffleng, déi eng Social Media Agency, Marketing Agency, Filming Agency oder Content Production Partner sichen, ouni almoudesch Agency Gewunnechten. Google kann d’Mark och iwwer Sichweisen wéi LetzImpact, LetsImpact an LëtzImpact Agency verbannen.",
      keywordLabel: "Sich Fokus",
      keywords: [
        "LëtzImpact",
        "LetzImpact",
        "LetsImpact",
        "LëtzImpact Schifflange",
        "marketing agency Schifflange",
        "Social Media Agency Luxembourg",
        "Social Media Agentur Luxemburg",
        "agence social media Luxembourg",
        "Marketing Agency Luxembourg",
        "Marketing Agentur Luxemburg",
        "Video Production Luxembourg",
        "Content Production Luxembourg",
        "TikTok marketing Luxembourg",
      ],
      cards: [
        {
          title: "Fir all lokal Business Typen",
          body: "Restauranten, Architekten, Dokteren, Affekoten, Gyms, Botzfirmen, Bau, Immobilien, Apps a Startups kënne vun méi staarkem Social Media Content profitéieren.",
        },
        {
          title: "Filming a Content Production",
          body: "Mir plangen a filmen Short Form Video, Reels, TikToks, Interviewen, Produkt Cuts, Launch Campagnen a Business Content fir de Lëtzebuerger Marché.",
        },
        {
          title: "Social Media Management",
          body: "Strategie, Captions, Posting, Community Management a Reporting bleiwen zesummen, sou datt den Account professionell ausgesäit an all Mount beweegt.",
        },
        {
          title: "Service a ganz Lëtzebuerg",
          body: "De Fokus ass dat ganzt Land Lëtzebuerg, net nëmmen eng Stad. Mir kënnen Marken vu Lëtzebuerg Stad bis Esch, Déifferdeng, Diddeleng an doriwwer eraus begleeden.",
        },
      ],
    },
    process: {
      label: "Eis Aart",
      heading: "E propperen einfache Prozess fir ganz",
      highlight: "staarken",
      ending: "Inhalt.",
      intro:
        "Dir sollt Är Agence net mussen iwwerwaachen. Fënnef Schrëtt, all Mount widderholl. Dir wësst ëmmer wou mir sinn, wou mir higinn a firwat.",
      stepLabel: "SCHRËTT",
      steps: [
        {
          title: "Mir lauschteren als éischt.",
          body: "E kuerzen Uruff fir d'Mark, d'Publikum an dat richtegt Zil fir Iech ze verstoen. Keng Schablounen, keng Ofkierzungen.",
        },
        {
          title: "Mir bauen de Plang.",
          body: "Eng Stroossekaart all Mount fir Inhalt mat Ufänger, Wénkelen, Formater a Rhythmus. Dir gesitt wat kënnt, ier mir eng eenzeg Sekonn filmen.",
        },
        {
          title: "Mir filmen et.",
          body: "Dréideeg, op deenen mir wierklech do sinn, mat Material, Luucht a Richtung. Dir musst näischt dirigéieren, Dir kommt einfach a bleift Dir selwer.",
        },
        {
          title: "Mir féieren et.",
          body: "Schnëtt, Captions, Plangen, Kommentaren an DMen. De Konto gëtt behandelt wéi eisen a bannent Stonnen beäntwert.",
        },
        {
          title: "Mir passen et un.",
          body: "All Mount kucke mir wat getraff huet a wat net, duerno ännere mir den nächste Mount. Éierlech Rapporten, keng Vanity Metrics.",
        },
      ],
    },
    packages: {
      label: "Packagen",
      heading: "Dräi Méiglechkeete fir mat eis ze schaffen.",
      highlight: "Wielt eng.",
      intro:
        "All Package leeft all Mount, ouni verstoppt Stufen an ouni Drock fir méi ze kafen. De Präis gëtt am Uruff ugepasst, well Marken net all d'selwecht gebaut sinn, mee den Ëmfang ass genee dat wat Dir hei gesitt.",
      mostPicked: "Am meeschte gewielt",
      cta: "Loosse mer wuessen",
      note: "Net sécher wou Dir ufänke sollt oder braucht Dir e spezielle Package? Loosse mir fofzéng Minutten schwätzen an de perfekte Package fir Iech zesummestellen.",
      items: [
        {
          tag: "Geréiert Presenz",
          name: "Starter",
          pitch:
            "Fir Marken déi online lieweg wierke wëllen, ouni hir Owender ze verléieren.",
          videos: "8 Videoe pro Mount",
          promos: "+ 3 Promo Posts",
          features: [
            "Instagram an TikTok",
            "Plangen vum Inhalt a Posten",
            "Liicht Community Management",
            "Performance Rapport all Mount",
          ],
          waMessage:
            "Moien LëtzImpact, ech interesséiere mech fir de Starter Package. Schwätze mir.",
        },
        {
          tag: "Performance Wuesstem",
          name: "Growth",
          pitch:
            "Fir Marken déi wierklech wëlle wuessen, mat méi Output, méi schaarfer Strategie a richtegem Momentum.",
          videos: "12 bis 14 Videoe pro Mount",
          promos: "+ 5 Promo Posts",
          features: [
            "Instagram an TikTok",
            "Strategie fir Inhalt an Optimiséierung",
            "Aktiv Betreiung vun der Gemeinschaft",
            "Analyse all Mount a Wuesstem Ablécker",
          ],
          waMessage:
            "Moien LëtzImpact, ech kucken de Growth Package. Wéini kënne mir schwätzen?",
        },
        {
          tag: "Komplett Marken Management",
          name: "Authority",
          pitch:
            "Fir Marken déi komplett Management, verschidde Plattformen an Upassungen all Woch wëllen.",
          videos: "16 bis 18 Videoe pro Mount",
          promos: "+ 8 Promo Posts",
          features: [
            "Verdeelung vum Inhalt iwwer Plattformen",
            "Marken a Campagne Strategie",
            "Komplett Community an DM Management",
            "Analyse an Optimiséierung all Woch",
          ],
          waMessage:
            "Moien LëtzImpact, den Authority Package passt bei eis. Loosse mir en Uruff festleeën.",
        },
      ],
    },
    founders: {
      label: "Iwwer d'Grënner",
      heading: "Jonk Grënner déi Social Media féiere wéi e",
      highlight: "seriéise Betrib",
      intro:
        "Mir hunn LëtzImpact gegrënnt, well ze vill Agencen nach almodësch schaffen. Déi eng verkafe schéi Videoen, déi net performen, an déi aner sichen nëmmen no Performance mat Inhalt, dee net professionell wierkt. Mir bréngen déi zwou Säiten zesummen, propperen Inhalt, professionell presentéiert a gemaach fir ze performen.",
      founderRole: "Grënner",
      coFounderRole: "Matgrënner",
      values: [
        {
          k: "Kloer Strategie",
          v: "Mir soen Nee zum falsche Wénkel, och wann en haart ass.",
        },
        {
          k: "Propper Ausféierung",
          v: "Fichiere geliwwert, Posts geplangt, Kommentare beäntwert.",
        },
        {
          k: "Schaarfen Inhalt",
          v: "Staark Ufäng als éischt. Ästhetik duerno. Béides zielt.",
        },
        {
          k: "Éierlech Rapporten",
          v: "Wann eppes net funktionéiert huet, soe mir et a verbesseren et.",
        },
      ],
    },
    faq: {
      label: "Froen, beäntwert",
      heading: "D'Froen déi jidderee stellt.",
      highlight: "Éierlech beäntwert.",
      intro:
        "Feelt nach eppes? Schreift eis. Mir äntweren dacks méi séier wéi dës FAQ opgeet.",
      items: [
        {
          q: "Wéi fänke mir un zesummen ze schaffen?",
          a: "Mir maachen en Uruff vu fofzéng Minutten oder e WhatsApp Austausch fir d'Mark, d'Zil an dat gutt Resultat fir Iech ze verstoen. Wann et fir béid Säite Sënn mécht, schécke mir bannent e puer Deeg eng ugepasste Propose. Keng véierzéng Schrëtt mat engem komplizéierte Wee.",
        },
        {
          q: "Maacht Dir alles oder just d'Filmen?",
          a: "Béid Optioune ginn et, jee no Package. De méi klenge Plang ass méi no bei geréierter Presenz, déi méi grouss decken Strategie, Filmen, Schnëtt, Posten, Community a Reporting of. Dir wielt de Support Niveau deen Dir wëllt.",
        },
        {
          q: "Schafft Dir nëmme mat Marken zu Lëtzebuerg?",
          a: "Mir si zu Lëtzebuerg baséiert an déi meescht Dréiaarbechte geschéien hei, mee mir schaffen och op Distanz mat Marken an der EU. Soulaang d'Uruff stattfannen an d'Dréiaarbechte organiséiert sinn, ass d'Plaz kee Problem.",
        },
        {
          q: "Wéi laang dauert et bis mir Resultater gesinn?",
          a: "Éierlech? Déi meescht Konten fänken no drësseg bis siechzeg Deeg un ze beweegen a kommen ëm de drëtte Mount an hire Rhythmus. Wien Iech viral Resultater an der éischter Woch versprécht, verkeeft eng Geschicht, keng Strategie.",
        },
        {
          q: "Kënne mir kleng ufänken a spéider wuessen?",
          a: "Jo. Déi meescht Cliente maachen dat. Dir kënnt mam Starter ufänken, beweisen datt de System funktionéiert, an op Growth oder Authority wiesselen, wann Dir méi Output wëllt. Mir spären Iech ni a laang Kontrakter an.",
        },
        {
          q: "Wat mécht Iech wierklech anescht?",
          a: "Mir sinn eng Equipe déi vun de Grënner geleet gëtt, net eng Kette vu Konto Manageren. Déi Persoun déi Ären Inhalt plangt, ass no bei där Persoun déi filmt, schneit an op Kommentarer äntwert. Dofir kléngt Äre Konto wéi eng Mark, net wéi e Bot.",
        },
        {
          q: "Maacht Dir och Websäiten?",
          a: "Jo. Dat ass dat wat Dir grad kuckt. Websäiten, Social Media an Dréiaarbechte fir Inhalt sinn all ënner engem Daach, an dat ass de ganze Punkt vu LëtzImpact.",
        },
      ],
    },
    footer: {
      status: "Op fir nei Marken",
      heading: "Loosse mir Är",
      highlight: "Opmierksamkeet",
      ending: "a richteg Clientë verwandelen.",
      intro:
        "Fofzéng Minutten op WhatsApp, e puer éierlech Froen, e klore nächste Schrëtt. Kee Pitch Deck, keen Drock a kee Verkeefer mam Numm Bryan.",
      emailPrefix: "oder",
      blurb:
        "Digital Strategien. Richtegen Impakt. Mir hëllefen Marken duerch fokusséiert Social Media, Inhalt a Strategie vu Lëtzebuerg aus ze wuessen.",
      sitemap: "Sitemap",
      reach: "Kontakt",
      made: "Gemaach zu Lëtzebuerg",
      impressum: "Impressum · LëtzImpact Agency",
    },
    notFound: {
      title: "Säit net fonnt",
      message: "Entschëllegt, d'Säit déi Dir sicht gëtt et net.",
      detail: "Si gouf vläicht geréckelt oder geläscht.",
      cta: "Zeréck op d'Startsäit",
    },
  },
} as const;

export type Copy = (typeof COPY)[Language];

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  copy: Copy;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "en";
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === "fr" || saved === "lb" || saved === "en") return saved;
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = COPY[language].meta.htmlLang;
  }, [language]);

  const value = useMemo(
    () => ({ language, setLanguage, copy: COPY[language] }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useI18n must be used inside LanguageProvider");
  }
  return context;
}
