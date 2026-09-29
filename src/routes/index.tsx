import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, CircleDot, Sparkles } from "lucide-react";
import universeImage from "@/assets/africafun-deux-univers.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Africafun AI Studio — Création humaine, intelligence augmentée" },
      { name: "description", content: "Africafun AI Studio réunit trois talents, trois conseillers et huit agents IA pour créer des univers audiovisuels béninois." },
      { property: "og:title", content: "Africafun AI Studio — Une intelligence collective augmentée" },
      { property: "og:description", content: "Découvrez une nouvelle manière d’organiser un studio de création, de l’idée à la communauté." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const talents = [
  { name: "Roméo", role: "Direction créative & recherche", text: "Il transforme les intuitions en concepts, personnages, histoires et univers cohérents.", chain: "Recherche → idée → univers" },
  { name: "Césaire", role: "Vidéo & postproduction", text: "Il donne forme aux intentions : plans, montage, rythme, voix, son et masters.", chain: "Image → vidéo → diffusion" },
  { name: "Fleur", role: "Community & Social Media", text: "Elle relie les œuvres aux plateformes et aux communautés, avec un regard humain.", chain: "Œuvre → public → apprentissage", badge: "Jeune talent en formation" },
];

const advisers = [
  { name: "Stéphane", role: "Vision & ambition", question: "Est-ce que ce que nous créons nous rapproche réellement de notre ambition ?" },
  { name: "Rodrigue", role: "Éditorial, culture & impact", question: "Est-ce que ce que nous racontons a du sens et de la valeur à transmettre ?" },
  { name: "Legrand", role: "Technique & IA", question: "Comment construire une infrastructure capable d’évoluer avec la technologie ?" },
];

const agents = [
  ["01", "Directeur artistique", "Garde les personnages, décors et palettes fidèles à chaque univers."],
  ["02", "Showrunner", "Transforme une intuition en concepts, arcs narratifs et épisodes."],
  ["03", "Scénariste & storyboarder", "Décompose l’histoire en scènes, plans, mouvements et atmosphères."],
  ["04", "Gardien de la continuité", "Conserve la mémoire des personnages, lieux, règles et récits."],
  ["05", "Producteur vidéo", "Transforme les storyboards et images en matière vidéo exploitable."],
  ["06", "Monteur & audio", "Assemble le rythme, les voix, le son, les sous-titres et les formats."],
  ["07", "Social Media Manager", "Décline chaque œuvre en contenus adaptés à chaque plateforme."],
  ["08", "Community & Growth", "Observe les réactions du public et nourrit les créations suivantes."],
];

const months = [
  ["M01", "Aligner", "Vision, méthode, rôles et premiers tests."],
  ["M02", "Construire", "Bibles créatives, chaînes et outils partagés."],
  ["M03", "Tester", "Pilotes, voix, vidéo et contrôle qualité."],
  ["M04", "Lancer", "Premières publications et prise de rythme."],
  ["M05", "Produire", "La cadence de création s’installe."],
  ["M06", "Décliner", "Formats courts, sociaux et éditoriaux."],
  ["M07", "Diffuser", "Les œuvres rencontrent leurs publics."],
  ["M08", "Observer", "Les usages et réactions sont analysés."],
  ["M09", "Affiner", "Les formats et les tonalités progressent."],
  ["M10", "Étendre", "Nouveaux récits et nouveaux territoires."],
  ["M11", "Consolider", "La méthode devient un réflexe collectif."],
  ["M12", "Rayonner", "Le studio prépare le cycle suivant."],
];

const workflow = ["Une idée", "Une histoire", "Un univers", "Une production", "Une œuvre", "Une communauté", "Des données", "Une nouvelle création"];

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-canvas font-body text-navy selection:bg-sun selection:text-navy">
      <header className="absolute inset-x-0 top-0 z-20 border-b border-cream/20 text-cream">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
          <a href="#top" className="flex items-center gap-3" aria-label="Retour en haut">
            <span className="grid size-10 place-items-center bg-sun font-display text-lg font-bold text-navy">AF</span>
            <span className="font-display text-lg font-semibold">Africafun <i className="font-normal text-sun">AI Studio</i></span>
          </a>
          <nav className="hidden gap-7 text-xs uppercase tracking-[0.16em] md:flex" aria-label="Navigation principale">
            <a href="#univers" className="transition-colors hover:text-sun">Univers</a>
            <a href="#architecture" className="transition-colors hover:text-sun">Équipe</a>
            <a href="#calendrier" className="transition-colors hover:text-sun">Calendrier</a>
          </nav>
          <a href="#contact" className="border border-cream/35 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-colors hover:bg-cream hover:text-navy">Échanger</a>
        </div>
      </header>

      <main id="top">
        <section className="relative flex min-h-[92svh] items-end overflow-hidden bg-navy text-cream">
          <img src={universeImage.url} alt="Les univers Zem Zem et Abomey réunis entre Cotonou et un musée futuriste" className="absolute inset-0 size-full object-cover" />
          <div className="absolute inset-0 bg-hero-overlay" />
          <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-5 pb-12 pt-36 sm:px-8 md:pb-16 lg:grid-cols-12 lg:px-10">
            <div className="lg:col-span-8">
              <p className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-sun"><span className="h-px w-10 bg-sun"/>Studio de création augmenté · Cotonou</p>
              <h1 className="max-w-5xl font-display text-[clamp(3.1rem,7.5vw,7.5rem)] leading-[0.88] tracking-normal">Une équipe humaine.<br/><em className="font-medium text-sun">Une intelligence</em><br/>collective augmentée.</h1>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-cream/80 md:text-lg">La vision reste humaine. L’intelligence artificielle accélère la création, la production, la diffusion et l’apprentissage.</p>
            </div>
            <div className="flex items-end lg:col-span-4 lg:justify-end">
              <div className="grid w-full max-w-sm grid-cols-3 border-y border-cream/30 py-5 text-center">
                {[["3","talents"],["3","conseillers"],["8","agents IA"]].map(([n,label]) => <div key={label}><strong className="block font-display text-4xl text-sun">{n}</strong><span className="text-[9px] uppercase tracking-[0.16em] text-cream/70">{label}</span></div>)}
              </div>
            </div>
          </div>
          <a href="#univers" aria-label="Découvrir les univers" className="absolute bottom-5 right-5 grid size-11 place-items-center border border-cream/35 text-cream transition-colors hover:bg-sun hover:text-navy sm:right-8 lg:right-10"><ArrowDown size={18}/></a>
        </section>

        <section id="univers" className="bg-canvas py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="mb-12 grid gap-6 lg:grid-cols-12">
              <p className="section-kicker lg:col-span-3">Deux œuvres fondatrices</p>
              <h2 className="font-display text-5xl leading-[0.95] md:text-7xl lg:col-span-9">Le rire pour circuler.<br/><em className="text-forest">La mémoire pour durer.</em></h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <article className="group relative min-h-[620px] overflow-hidden bg-sun">
                <img src={universeImage.url} alt="Sam, conducteur de zemidjan, et sa passagère dans les rues de Cotonou" className="absolute inset-0 size-full object-cover object-left transition-transform duration-700 group-hover:scale-[1.025]" />
                <div className="absolute inset-0 bg-card-overlay"/>
                <div className="absolute inset-x-0 bottom-0 p-7 text-cream md:p-9"><p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-sun">Comédie visuelle · Cotonou</p><h3 className="font-display text-5xl">Zem Zem</h3><p className="mt-3 max-w-md leading-relaxed text-cream/80">Sam transforme chaque course en aventure. Un héros populaire, un humour physique et une ville pleine de mouvement.</p></div>
              </article>
              <article className="group relative min-h-[620px] overflow-hidden bg-navy">
                <img src={universeImage.url} alt="Un trésor royal d’Abomey s’éveille dans un musée futuriste" className="absolute inset-0 size-full object-cover object-right transition-transform duration-700 group-hover:scale-[1.025]" />
                <div className="absolute inset-0 bg-card-overlay"/>
                <div className="absolute inset-x-0 bottom-0 p-7 text-cream md:p-9"><p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-sun">Aventure · Histoire · Science-fiction</p><h3 className="font-display text-5xl">Abomey, le Retour</h3><p className="mt-3 max-w-md leading-relaxed text-cream/80">Les trésors royaux s’éveillent la nuit. Chaque objet devient une voix et un passage vers l’histoire.</p></div>
              </article>
            </div>
          </div>
        </section>

        <section id="architecture" className="border-y border-line bg-paper py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4"><p className="section-kicker">Architecture humaine + IA</p><h2 className="mt-4 font-display text-5xl leading-none md:text-6xl">Les humains donnent la direction.</h2><p className="mt-6 max-w-md leading-relaxed text-navy/65">Une équipe resserrée prend les décisions et porte la responsabilité. Les agents spécialisés amplifient son geste sans jamais la remplacer.</p></div>
              <div className="lg:col-span-8">
                <div className="mb-5 grid gap-5 md:grid-cols-3">
                  {talents.map((talent, i) => <article key={talent.name} className="border-t-4 border-forest bg-canvas p-6 shadow-soft"><div className="flex items-start justify-between"><span className="text-xs font-semibold text-forest">0{i+1}</span>{talent.badge && <span className="max-w-[9rem] bg-sun px-2 py-1 text-right text-[8px] font-bold uppercase tracking-[0.12em]">{talent.badge}</span>}</div><h3 className="mt-9 font-display text-3xl">{talent.name}</h3><p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-forest">{talent.role}</p><p className="mt-5 text-sm leading-relaxed text-navy/65">{talent.text}</p><p className="mt-7 border-t border-line pt-4 text-xs font-semibold">{talent.chain}</p></article>)}
                </div>
                <div className="grid gap-px bg-line md:grid-cols-3">
                  {advisers.map((adviser) => <article key={adviser.name} className="bg-navy p-6 text-cream"><p className="text-[9px] font-bold uppercase tracking-[0.18em] text-sun">Conseiller · {adviser.role}</p><h3 className="mt-6 font-display text-3xl">{adviser.name}</h3><p className="mt-4 font-display text-base italic leading-relaxed text-cream/70">« {adviser.question} »</p></article>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-navy py-24 text-cream lg:py-32">
          <div className="network-grid absolute inset-0 opacity-25"/>
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="mb-12 grid gap-6 lg:grid-cols-12"><p className="section-kicker text-sky lg:col-span-3">Infrastructure créative</p><div className="lg:col-span-9"><h2 className="font-display text-5xl leading-none md:text-7xl">Huit intelligences spécialisées.<br/><em className="text-sky">Une seule chaîne.</em></h2><p className="mt-6 max-w-2xl text-cream/65">Chaque agent est une fonction au service de l’équipe. Ensemble, ils font circuler les idées jusqu’au public.</p></div></div>
            <div className="grid border-l border-t border-cream/15 sm:grid-cols-2 lg:grid-cols-4">
              {agents.map(([number,name,text]) => <article key={number} className="group min-h-64 border-b border-r border-cream/15 p-6 transition-colors hover:bg-blue-glow"><div className="flex items-center justify-between"><span className="font-display text-3xl text-sky">{number}</span><CircleDot size={18} className="text-sky"/></div><h3 className="mt-10 font-display text-2xl leading-tight">{name}</h3><p className="mt-4 text-sm leading-relaxed text-cream/60">{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="bg-forest py-20 text-cream lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <p className="section-kicker text-sun">De l’idée à la communauté</p>
            <div className="mt-8 flex flex-wrap items-center gap-y-5">
              {workflow.map((step, i) => <div key={step} className="flex items-center"><span className="whitespace-nowrap font-display text-xl md:text-2xl">{step}</span>{i < workflow.length - 1 && <ArrowUpRight className="mx-3 text-sun" size={18}/>}</div>)}
            </div>
            <p className="mt-10 font-display text-4xl italic text-sun">Chaque œuvre nourrit la suivante.</p>
          </div>
        </section>

        <section id="calendrier" className="bg-canvas py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-7 lg:grid-cols-12"><p className="section-kicker lg:col-span-3">Une année pour installer le studio</p><div className="lg:col-span-9"><h2 className="font-display text-5xl leading-none md:text-7xl">Trois mois pour préparer.<br/><em className="text-red">Neuf mois pour déployer.</em></h2><p className="mt-5 max-w-2xl text-navy/65">Le démarrage construit les fondations. Le reste de l’année installe la cadence, les formats et la boucle d’apprentissage.</p></div></div>
            <div className="timeline-scroll mt-14 overflow-x-auto pb-4">
              <div className="grid min-w-[1120px] grid-cols-12 border-t border-line">
                {months.map(([month,title,text],i) => <article key={month} className={`relative border-r border-line px-4 pb-5 pt-8 ${i < 3 ? "bg-sun-soft" : "bg-paper"}`}><span className={`absolute -top-2 left-4 size-4 rounded-full border-4 border-canvas ${i < 3 ? "bg-red" : "bg-forest"}`}/><p className="text-[9px] font-bold uppercase tracking-[0.16em] text-navy/45">{month}</p><h3 className="mt-4 font-display text-2xl">{title}</h3><p className="mt-3 text-xs leading-relaxed text-navy/60">{text}</p></article>)}
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-5 text-[10px] font-semibold uppercase tracking-[0.15em]"><span className="flex items-center gap-2"><i className="size-2 rounded-full bg-red"/> Préparation · 90 jours</span><span className="flex items-center gap-2"><i className="size-2 rounded-full bg-forest"/> Installation · 9 mois</span></div>
          </div>
        </section>

        <section id="contact" className="relative overflow-hidden bg-sun py-24 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:px-10"><div className="lg:col-span-9"><p className="section-kicker">Africafun AI Studio</p><h2 className="mt-5 max-w-5xl font-display text-5xl leading-[0.95] md:text-7xl">Une petite équipe.<br/>Une grande capacité de création.</h2><p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy/70">Transformer une idée en univers, un univers en œuvres et des œuvres en communautés.</p></div><div className="flex items-end lg:col-span-3 lg:justify-end"><a href="mailto:sb@afrikafun.com" className="inline-flex items-center gap-3 bg-navy px-6 py-4 font-semibold text-cream transition-transform hover:-translate-y-1">Entrer en conversation <ArrowUpRight size={18}/></a></div></div>
          <Sparkles className="absolute right-[8%] top-16 text-red/30" size={84}/>
        </section>
      </main>

      <footer className="bg-navy text-cream"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-5 py-9 sm:px-8 md:flex-row md:items-center lg:px-10"><p className="font-display text-2xl">Africafun <i className="text-sun">AI Studio</i></p><p className="text-[10px] uppercase tracking-[0.2em] text-cream/55">Cotonou · Bénin · Création humaine augmentée</p></div></footer>
    </div>
  );
}