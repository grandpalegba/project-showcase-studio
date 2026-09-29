import { createFileRoute } from "@tanstack/react-router";
import samPortrait from "@/assets/sam-zemidjan.jpg";
import zemZemImage from "@/assets/zemzem-cotonou.jpg";
import abomeyImage from "@/assets/abomey-tresors.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Studio en orbite — Fabrique audiovisuelle béninoise" },
      { name: "description", content: "Un studio audiovisuel béninois hybride, porté par Zem Zem et Abomey, le Retour." },
      { property: "og:title", content: "Studio en orbite — Deux univers, une nation en mouvement" },
      { property: "og:description", content: "Découvrez une nouvelle fabrique audiovisuelle béninoise et ses deux séries originales." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const agents = [
  "Directeur artistique", "Showrunner", "Scénariste / Storyboarder", "Continuité",
  "Video Producer", "Monteur / Audio", "Social Media", "Growth Agent",
];

const roadmap = [
  ["Mi-octobre", "Aligner", "Bootcamp, tests voix et vidéo, stabilisation du flux de production."],
  ["Novembre", "Produire", "Cadence de croisière : deux Zem Zem et un Trésor chaque semaine."],
  ["Décembre", "Accélérer", "Optimisation des outils créatifs et réglage fin des tonalités."],
  ["Janvier", "Déployer", "Consolidation opérationnelle et lancement des formats dérivés."],
];

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-ink font-body text-bone antialiased selection:bg-gold selection:text-ink">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-5 pt-6 sm:px-8 lg:px-10 lg:pt-8">
        <a href="#top" className="flex items-center gap-3" aria-label="Retour en haut">
          <span className="grid size-9 place-items-center rounded-full bg-gold font-display text-lg font-semibold text-ink">S</span>
          <span className="leading-tight"><strong className="block font-display text-lg font-medium">Studio en orbite</strong><small className="block text-[10px] uppercase tracking-[0.3em] text-bone-dim">Cotonou · Bénin</small></span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-bone-dim md:flex" aria-label="Navigation principale">
          <a href="#univers" className="transition-colors hover:text-gold">Univers</a><a href="#territoire" className="transition-colors hover:text-gold">Territoire</a><a href="#studio90" className="transition-colors hover:text-gold">Studio 90</a><a href="#equipe" className="transition-colors hover:text-gold">Équipe</a>
        </nav>
        <a href="#contact" className="rounded-full border border-bone/25 px-4 py-2 text-xs transition-colors hover:bg-bone hover:text-ink sm:px-5 sm:text-sm">Co-construire</a>
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-16 sm:px-8 lg:grid-cols-12 lg:px-10 lg:pb-24 lg:pt-24">
          <div className="lg:col-span-7">
            <p className="mb-6 text-[11px] uppercase tracking-[0.35em] text-gold">Nouvelle fabrique audiovisuelle · 12 mois</p>
            <h1 className="font-display text-[clamp(3.2rem,8vw,7rem)] leading-[0.9] tracking-normal">Deux univers.<br/><em className="font-medium text-gold">Une</em> nation<br/><span className="text-ember">en mouvement.</span></h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-bone-dim">Mettre en orbite le studio vidéo de référence au Bénin : une équipe humaine experte, augmentée par huit agents virtuels, pour créer vite sans jamais sacrifier la singularité.</p>
            <div className="mt-9 flex flex-wrap gap-4"><a href="#univers" className="rounded-full bg-gold px-7 py-3.5 font-medium text-ink transition-colors hover:bg-bone">Explorer les univers</a><a href="#studio90" className="rounded-full border border-bone/25 px-7 py-3.5 transition-colors hover:border-gold hover:text-gold">Voir les 90 jours</a></div>
          </div>
          <div className="floaty lg:col-span-5">
            <div className="rounded-[28px] border border-bone/15 bg-ink-soft p-3 shadow-2xl shadow-ink">
              <div className="overflow-hidden rounded-[20px] bg-ink-card">
                <div className="flex items-center justify-between border-b border-bone/10 px-4 py-3"><span className="flex gap-2"><i className="size-2 rounded-full bg-ember"/><i className="size-2 rounded-full bg-gold"/><i className="size-2 rounded-full bg-bone/40"/></span><span className="text-[10px] uppercase tracking-[0.25em] text-bone-dim">En production · Cotonou</span></div>
                <img src={samPortrait} alt="Sam, héros zemidjan de Zem Zem" width={816} height={816} className="aspect-[16/10] w-full object-cover object-center" />
                <div className="p-4"><div className="mb-4 flex items-end justify-between"><div><p className="font-display text-2xl">Studio en orbite</p><p className="text-xs text-bone-dim">Deux séries · un seul moteur</p></div><span className="text-[10px] uppercase tracking-[0.2em] text-ember">Signal actif</span></div><div className="grid grid-cols-3 gap-2">{[["52","semaines"],["4","villes"],["8","agents"]].map(([n,l])=><div key={l} className="rounded-lg bg-ink p-3"><p className="font-display text-2xl text-gold">{n}</p><p className="mt-1 text-[9px] uppercase tracking-[0.12em] text-bone-dim">{l}</p></div>)}</div></div>
              </div>
            </div>
          </div>
        </section>

        <div className="overflow-hidden border-y border-bone/10 py-4"><div className="marquee flex w-max gap-10 whitespace-nowrap font-display text-2xl text-bone/40">{[0,1].map(i=><span key={i} className="flex gap-10"><span>Cotonou</span><b className="text-gold">·</b><span>Ouidah</span><b className="text-gold">·</b><span>Porto-Novo</span><b className="text-gold">·</b><span>Parakou</span><b className="text-gold">·</b></span>)}</div></div>

        <section id="univers" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
          <div className="mb-12 flex items-end justify-between gap-6"><div><p className="text-[11px] uppercase tracking-[0.3em] text-gold">Deux publics · un seul moteur</p><h2 className="mt-4 max-w-3xl font-display text-4xl tracking-normal md:text-6xl">Le rire pour circuler.<br/><em className="text-gold">La mémoire pour durer.</em></h2></div><span className="hidden text-[11px] uppercase tracking-[0.3em] text-bone-dim sm:block">01 / 04</span></div>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="group overflow-hidden rounded-3xl border border-bone/10 bg-ink-card"><div className="overflow-hidden"><img src={zemZemImage} alt="Sam en course dans les rues de Cotonou" loading="lazy" width={1088} height={1360} className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"/></div><div className="p-7"><span className="text-[10px] uppercase tracking-[0.25em] text-ember">Comédie visuelle · 2 à 3 min · Vertical</span><h3 className="mt-3 font-display text-4xl">Zem Zem</h3><p className="mt-3 leading-relaxed text-bone-dim">Sam est persuadé d’être le meilleur chauffeur du Bénin. Chaque client devient une aventure absurde où sa confiance se retourne contre lui. Un humour physique, presque sans paroles, pensé pour voyager partout.</p><p className="mt-6 border-t border-bone/10 pt-5 font-display text-xl italic text-bone">« On ne choisit pas toujours son chauffeur… mais on se souvient toujours de Sam. »</p></div></article>
            <article className="group overflow-hidden rounded-3xl border border-bone/10 bg-ink-card"><div className="overflow-hidden"><img src={abomeyImage} alt="Les trésors royaux d’Abomey s’éveillent la nuit" loading="lazy" width={1088} height={1360} className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"/></div><div className="p-7"><span className="text-[10px] uppercase tracking-[0.25em] text-gold">Aventure 3D · Histoire · Familles</span><h3 className="mt-3 font-display text-4xl">Abomey, le Retour</h3><p className="mt-3 leading-relaxed text-bone-dim">Dans un musée de Cotonou, les 26 trésors royaux restitués s’éveillent chaque nuit. Hector, gardien nocturne, les suit à travers le temps et reconnecte les nouvelles générations à leur histoire.</p><p className="mt-6 border-t border-bone/10 pt-5 font-display text-xl italic text-bone">Chaque objet devient une voix, une mémoire et un passage vers le royaume d’Abomey.</p></div></article>
          </div>
        </section>

        <section id="territoire" className="border-y border-bone/10 bg-ink-soft"><div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32"><div className="grid gap-14 lg:grid-cols-12"><div className="lg:col-span-5"><p className="text-[11px] uppercase tracking-[0.3em] text-gold">52 semaines · couverture nationale</p><h2 className="mt-4 font-display text-5xl md:text-6xl">Bâtir un monument. Cartographier un pays.</h2><p className="mt-6 leading-relaxed text-bone-dim">Les 26 trésors donnent naissance à 52 récits, pendant que Zem Zem prend la route. Une présence continue qui relie patrimoine, territoire et culture populaire.</p></div><div className="lg:col-span-7"><div className="grid gap-4 sm:grid-cols-2">{[["01","Cotonou","Le point de départ : la rue, le rythme, l’énergie."],["02","Ouidah","Une mémoire vivante tournée vers le monde."],["03","Porto-Novo","La capitale culturelle et ses récits pluriels."],["04","Parakou","Le nord, ses visages et l’horizon régional."]].map(([n,city,text])=><div key={city} className="rounded-2xl border border-bone/10 bg-ink-card p-6"><p className="font-display text-5xl text-gold">{n}</p><h3 className="mt-4 font-display text-2xl">{city}</h3><p className="mt-2 text-sm leading-relaxed text-bone-dim">{text}</p></div>)}</div></div></div></div></section>

        <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32"><div className="grid gap-12 lg:grid-cols-12"><div className="lg:col-span-4"><p className="text-[11px] uppercase tracking-[0.3em] text-gold">Le cerveau virtuel</p><h2 className="mt-4 font-display text-5xl">Huit expertises. Un flux continu.</h2><p className="mt-6 leading-relaxed text-bone-dim">Un système coordonné automatise la transmission des données et relie direction artistique, production, montage et diffusion.</p></div><div className="grid gap-px overflow-hidden rounded-2xl border border-bone/10 bg-bone/10 sm:grid-cols-2 lg:col-span-8">{agents.map((agent,i)=><div key={agent} className="bg-ink-card p-5 transition-colors hover:bg-ink-soft"><span className="text-[10px] text-gold">A-{String(i+1).padStart(2,"0")}</span><p className="mt-2 font-display text-xl">{agent}</p></div>)}</div></div></section>

        <section id="studio90" className="border-y border-bone/10 bg-ink-soft"><div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32"><div className="mb-14 flex items-end justify-between"><div><p className="text-[11px] uppercase tracking-[0.3em] text-gold">Studio 90</p><h2 className="mt-4 font-display text-5xl md:text-6xl">Les 90 premiers jours</h2><p className="mt-5 max-w-2xl text-bone-dim">Construire, roder et fiabiliser la machine de production avant de changer d’échelle.</p></div><span className="hidden text-[11px] uppercase tracking-[0.3em] text-bone-dim sm:block">03 / 04</span></div><div className="grid gap-4 lg:grid-cols-4">{roadmap.map(([date,verb,text],i)=><article key={date} className="relative rounded-2xl border border-bone/10 bg-ink-card p-6"><span className="text-[10px] uppercase tracking-[0.2em] text-ember">{date}</span><p className="mt-10 font-display text-3xl text-gold">{verb}</p><p className="mt-3 text-sm leading-relaxed text-bone-dim">{text}</p><span className="absolute right-5 top-5 font-display text-3xl text-bone/10">0{i+1}</span></article>)}</div></div></section>

        <section id="equipe" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32"><div className="grid gap-10 lg:grid-cols-12"><div className="lg:col-span-5"><p className="text-[11px] uppercase tracking-[0.3em] text-gold">L’équipe qui rend le modèle possible</p><h2 className="mt-4 font-display text-5xl md:text-6xl">Des humains aux commandes.</h2><p className="mt-6 max-w-lg leading-relaxed text-bone-dim">Six professionnels dirigent la vision, la création technique et la communication. Les agents virtuels prolongent leur capacité — ils ne remplacent ni leur regard, ni leur responsabilité.</p></div><div className="grid gap-4 sm:grid-cols-2 lg:col-span-7"><div className="rounded-2xl border border-bone/10 bg-ink-card p-7"><p className="font-display text-7xl text-gold">3</p><h3 className="mt-4 font-display text-2xl">Cœur créatif & opérationnel</h3><p className="mt-3 text-sm leading-relaxed text-bone-dim">Direction créative, création technique et communication portée par un jeune talent formé par l’équipe.</p></div><div className="rounded-2xl border border-bone/10 bg-ink-card p-7"><p className="font-display text-7xl text-ember">3</p><h3 className="mt-4 font-display text-2xl">Maîtrises & conseil</h3><p className="mt-3 text-sm leading-relaxed text-bone-dim">Vision, maîtrise technique des processus, exigence éditoriale et culturelle.</p></div></div></div></section>

        <section id="contact" className="border-t border-bone/10"><div className="mx-auto max-w-7xl px-5 py-24 text-center sm:px-8 lg:px-10 lg:py-32"><p className="text-[11px] uppercase tracking-[0.3em] text-gold">Une proposition concrète</p><h2 className="mx-auto mt-5 max-w-4xl font-display text-5xl md:text-7xl">Co-construisons le studio vidéo de référence au Bénin.</h2><p className="mx-auto mt-6 max-w-2xl leading-relaxed text-bone-dim">Deux œuvres originales. Une méthode de production nouvelle. Une ambition nationale capable de rayonner bien au-delà.</p><a href="mailto:sb@afrikafun.com" className="mt-10 inline-block rounded-full bg-gold px-8 py-4 font-medium text-ink transition-colors hover:bg-bone">Entrer en conversation</a></div></section>
      </main>

      <footer className="border-t border-bone/10"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center lg:px-10"><div><p className="font-display text-2xl">Studio en orbite</p><p className="mt-1 text-sm text-bone-dim">Une fabrique audiovisuelle béninoise d’excellence.</p></div><p className="text-xs uppercase tracking-[0.2em] text-bone-dim">Cotonou · Bénin</p></div></footer>
    </div>
  );
}
