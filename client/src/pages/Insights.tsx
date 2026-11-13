import { Link } from "wouter";
import { PageFrame, PageIntro } from "@/components/PageFrame";
import { SEOHead } from "@/components/SEOHead";

const articles = [
  {
    slug: "social-media-marketing-luxembourg",
    title: "Social Media Marketing in Luxembourg: what local businesses should actually plan",
    description: "A practical guide to social media marketing in Luxembourg: choosing platforms, planning content, filming Reels and measuring enquiries.",
    tag: "Social media marketing Luxembourg",
    paragraphs: [
      "Social media marketing in Luxembourg works best when it is treated as a repeatable business system, not as a collection of random posts. A local brand needs a clear audience, a recognisable point of view and content that gives people a reason to stop, understand and act.",
      "For most local businesses, the useful starting point is a small set of recurring formats: a short educational video, a proof or testimonial piece, a product or service demonstration and a direct offer. This creates enough variety without losing the visual identity of the company.",
      "Reels and TikToks are especially useful when the first seconds answer a real question or show a real outcome. Filming locally also matters. Luxembourg audiences recognise local places, accents, teams and situations, which makes the content more credible than generic stock footage.",
      "A good monthly system connects content production with the next business goal. That might be more restaurant bookings, more property enquiries, more applications or more people discovering a service in Luxembourg City, Mamer, Esch-sur-Alzette or another local area.",
    ],
  },
  {
    slug: "agence-marketing-luxembourg",
    title: "Comment choisir une agence de marketing au Luxembourg",
    description: "Les critères concrets pour choisir une agence de marketing au Luxembourg: stratégie, contenu, publicité, reporting et connaissance du marché local.",
    tag: "Agence de marketing Luxembourg",
    paragraphs: [
      "Choisir une agence de marketing au Luxembourg ne devrait pas se limiter à regarder un beau portfolio. La vraie question est de savoir si l'agence comprend votre activité, votre clientèle et le chemin qui transforme l'attention en demande réelle.",
      "Une bonne collaboration commence par une stratégie claire. L'agence doit pouvoir expliquer le public visé, les messages prioritaires, les formats à produire et la manière de mesurer les progrès. Sans cela, le contenu risque de rester esthétique mais sans direction commerciale.",
      "Il faut aussi vérifier la capacité de production. Une agence qui planifie, filme, monte et publie elle-même peut garder une qualité et une cohérence plus constantes. Pour une entreprise luxembourgeoise, la compréhension du contexte local et la capacité à travailler en français, en anglais ou en luxembourgeois sont également utiles.",
      "Enfin, demandez des rapports simples. Les vues sont intéressantes, mais les indicateurs importants sont aussi la portée locale, les visites de profil, les messages, les clics et les demandes qui suivent la campagne.",
    ],
  },
  {
    slug: "publicite-facebook-instagram-luxembourg",
    title: "Publicité et pub sur Facebook et Instagram au Luxembourg",
    description: "Comment construire une campagne de publicité Facebook, Instagram ou TikTok au Luxembourg avec une offre claire, une vidéo adaptée et un suivi utile.",
    tag: "Publicité digitale Luxembourg",
    paragraphs: [
      "Quand une entreprise cherche une pub au Luxembourg, le résultat dépend rarement du simple fait de mettre un budget derrière une publication. La campagne doit commencer par une offre compréhensible et une audience suffisamment précise pour que le message ait une chance d'être pertinent.",
      "Les publicités courtes fonctionnent mieux lorsqu'elles sont conçues pour le mobile dès le départ. Une accroche rapide, une démonstration claire, des sous-titres et un appel à l'action simple donnent aux personnes assez d'informations pour décider de cliquer ou d'écrire.",
      "Facebook et Instagram permettent de tester plusieurs angles sans produire une campagne entièrement différente à chaque fois. On peut comparer une vidéo éducative, une preuve client et une offre directe, puis conserver les créations qui génèrent les meilleurs signaux pour l'entreprise.",
      "Au Luxembourg, une campagne peut aussi être adaptée par langue, zone et type de clientèle. Le suivi doit relier les résultats publicitaires aux conversations WhatsApp, aux appels, aux formulaires ou aux ventes, plutôt qu'à un seul chiffre de portée.",
    ],
  },
];

export default function Insights() {
  return (
    <PageFrame>
      <SEOHead title="Marketing Insights Luxembourg | LëtzImpact" description="Practical guides about social media marketing, marketing agencies and digital advertising in Luxembourg from LëtzImpact." path="/insights" />
      <PageIntro eyebrow="Insights / Luxembourg marketing" title="Useful ideas for" highlight="local growth.">
        Practical, original guides about social media marketing, content production and digital advertising for businesses in Luxembourg.
      </PageIntro>
      <main className="container pb-24">
        <div className="grid gap-5 lg:grid-cols-3">
          {articles.map((article) => (
            <article key={article.slug} className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="font-mono-acc text-[10px] uppercase tracking-[0.18em] text-[#4CC9F0]">{article.tag}</div>
              <h2 className="mt-5 font-display text-2xl font-semibold leading-tight">{article.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-white/60">{article.description}</p>
              <Link href={`/insights/${article.slug}`} className="mt-7 text-sm font-semibold text-white underline decoration-[#EC12D8] underline-offset-4">Read the guide</Link>
            </article>
          ))}
        </div>
      </main>
    </PageFrame>
  );
}

export function InsightArticle({ slug }: { slug: string }) {
  const article = articles.find((item) => item.slug === slug);
  if (!article) return null;
  return (
    <PageFrame>
      <SEOHead title={`${article.title} | LëtzImpact`} description={article.description} path={`/insights/${article.slug}`} type="article" />
      <PageIntro eyebrow={`Insights / ${article.tag}`} title={article.title} highlight="">
        {article.description}
      </PageIntro>
      <article className="container max-w-3xl pb-24">
        {article.paragraphs.map((paragraph) => <p key={paragraph} className="mt-6 text-[17px] leading-[1.8] text-white/70">{paragraph}</p>)}
        <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="font-display text-2xl font-semibold">Need a local marketing partner?</h2>
          <p className="mt-3 text-white/60">LëtzImpact plans, films and manages social media, marketing campaigns and digital design from Luxembourg.</p>
          <a href="https://wa.me/352621576556" className="mt-5 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#07060B]">Talk to LëtzImpact</a>
        </div>
      </article>
    </PageFrame>
  );
}
