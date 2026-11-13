import { useI18n } from "@/lib/i18n";

const COPY = {
  en: {
    label: "Local expertise / Luxembourg",
    title: "A marketing partner for businesses in Luxembourg.",
    intro: "LëtzImpact is a social media marketing agency, marketing production company and digital design studio based in Schifflange. We work with businesses across Luxembourg, from strategy and content production to paid social campaigns, websites and brand visuals.",
    cards: [
      ["Social media marketing Luxembourg", "Strategy, Reels, TikToks, community management and monthly content systems for brands that want consistent visibility."],
      ["Marketing agency Luxembourg", "A practical marketing partner for restaurants, real estate, construction, services and local companies that need attention to become enquiries."],
      ["Publicité / pub au Luxembourg", "Creative Facebook, Instagram and TikTok advertising concepts, short-form video ads and campaigns built around a clear offer."],
      ["Agence de marketing Luxembourg", "A multilingual team for French, English and Luxembourgish audiences, with production handled locally from concept to delivery."],
    ],
  },
  fr: {
    label: "Expertise locale / Luxembourg",
    title: "Une agence marketing pour les entreprises au Luxembourg.",
    intro: "LëtzImpact est une agence social media, une agence de marketing et un studio de design digital basé à Schifflange. Nous accompagnons les entreprises au Luxembourg avec stratégie, contenu, publicité et identité visuelle.",
    cards: [
      ["Agence social media Luxembourg", "Stratégie, Reels, TikToks et gestion des réseaux sociaux pour rester visible chaque mois."],
      ["Agence marketing Luxembourg", "Un partenaire concret pour les restaurants, l'immobilier, la construction et les entreprises locales."],
      ["Publicité et pub au Luxembourg", "Des campagnes Facebook, Instagram et TikTok avec des vidéos courtes et une offre claire."],
      ["Création de contenu Luxembourg", "Une production locale, de l'idée au tournage, au montage et à la publication."],
    ],
  },
  lb: {
    label: "Lokal Expertise / Lëtzebuerg",
    title: "Eng Marketingagentur fir Betriber zu Lëtzebuerg.",
    intro: "LëtzImpact ass eng Social-Media-Marketingagentur, Marketing-Produktionsfirma an Digital-Design-Studio zu Schëffleng. Mir hëllefe Betriber uechtert Lëtzebuerg mat Strategie, Inhalt, Reklammen a visueller Identitéit.",
    cards: [
      ["Social Media Marketing Lëtzebuerg", "Strategie, Reels, TikToks a Social-Media-Gestioun fir all Mount siichtbar ze bleiwen."],
      ["Marketingagentur Lëtzebuerg", "E praktesche Partner fir Restauranten, Immobilien, Bau an lokal Betriber."],
      ["Pub a Reklammen zu Lëtzebuerg", "Facebook-, Instagram- an TikTok-Campagnen mat kuerze Videoen an enger kloerer Offer."],
      ["Content Production Lëtzebuerg", "Lokal Produktioun vun der Iddi iwwert den Dréi an de Montage bis zur Publikatioun."],
    ],
  },
} as const;

export function LocalSearchSection() {
  const { language } = useI18n();
  const copy = COPY[language];
  return (
    <section className="relative py-20 sm:py-28">
      <div className="container">
        <div className="max-w-3xl">
          <div className="font-mono-acc text-[10px] uppercase tracking-[0.22em] text-white/50">{copy.label}</div>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl">{copy.title}</h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/60">{copy.intro}</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {copy.cards.map(([title, body]) => (
            <article key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <h3 className="font-display text-xl font-semibold leading-tight">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/55">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
