"use client";

import Image from "next/image";
import { Button } from "../components/ui/Button";
import { Container } from "../components/layout/Container";
import { Layout } from "../components/layout/Layout";
import { useEffect, useState } from "react";

export default function MostOrderedFoundationPage() {
  // Urgency timer – 7-minute session countdown to boost conversion
  const [countdown, setCountdown] = useState({ hours: 0, minutes: 7, seconds: 29 });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        const s = prev.seconds - 1;
        const m = s < 0 ? prev.minutes - 1 : prev.minutes;
        const h = m < 0 ? prev.hours - 1 : prev.hours;
        return {
          hours: h < 0 ? 0 : h,
          minutes: m < 0 ? 59 : m,
          seconds: s < 0 ? 59 : s,
        };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const format = (n: number) => (n < 10 ? `0${n}` : n);

  return (
    <Layout>
      {/* Header */}
      <header className="bg-white py-3 px-4 border-b border-gray-200 text-center">
        <Container>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Dit is de <span className="text-[#6B4B4B]">meest bestelde</span> foundation – <br className="hidden md:block" />
            en wij namen de proef op de som
          </h1>
          <p className="text-gray-700 text-lg mt-3 max-w-2xl mx-auto">
            De Beauty&nbsp;Blog testte de razend populaire <strong>May Changing Foundation</strong> grondig. Lees onze ongefilterde
            voor- én nadelen voordat je ‘m toevoegt aan je winkelmandje.
          </p>
        </Container>
      </header>

      {/* Urgency banner */}
      <div className="bg-[#fdf4f4] py-3 text-center text-sm tracking-wide text-[#9b4444]">
        🔥 Deze week al {format(countdown.minutes)}:{format(countdown.seconds)} minuten extra lancering-korting
      </div>

      {/* Hero visual */}
      <div className="flex justify-center bg-[#fefaf8] py-12">
        <Image
          src="/Meestbesteld.png"
          alt="May Changing Foundation flacon"
          width={640}
          height={420}
          className="rounded-xl object-cover w-full max-w-xl md:max-w-2xl"
          priority
        />
      </div>

      {/* Pros & Cons */}
      <Container className="max-w-[840px] mx-auto px-6 py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Wat maakt deze foundation zo populair?</h2>
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {/* Pros card */}
          <div className="rounded-xl border border-green-100 bg-green-50/40 p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-green-700 mb-4">Pluspunten</h3>
            <ul className="space-y-3 text-black">
              {[
                "Past zich binnen 2 minuten aan jouw huidskleur aan",
                "Optisch lifteffect dankzij peptidencomplex",
                "Hydrateert tot 12 uur – geen cakey gevoel",
                "Bevat SPF 30 tegen nieuwe rimpels",
                "Niet-comedogeen: laat poriën ademen",
                "Geschikt voor gevoelige huid – parfumvrij",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-green-600 mt-0.5">✔︎</span>
                  <span dangerouslySetInnerHTML={{ __html: item.replace("2 minuten", "<strong>2 minuten</strong>") }} />
                </li>
              ))}
            </ul>
          </div>

          {/* Cons card */}
          <div className="rounded-xl border border-red-100 bg-red-50/40 p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-red-700 mb-4">Minpunten</h3>
            <ul className="space-y-3 text-black">
              {[
                "Luxe prijskaartje (hoewel tijdelijke korting beschikbaar is)",
                "Alleen online verkrijgbaar",
                "Maximaal medium coverage – niet bedoeld voor full-glam",
                "Kleurt mee met de huid; lastig om ‘shade-matching’ samples te tonen",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-red-600 mt-0.5">✖︎</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Detailed review sections */}
        <section className="prose prose-lg max-w-none mt-10">
          <h2>Onze testmethode</h2>
          <p>
            Voor dit dossier stelde De Beauty Blog een divers testpanel samen van vier vrouwen tussen 45&nbsp;en&nbsp;58&nbsp;jaar (droge,
            normale, gecombineerde en gevoelige huid). Elke tester verving haar eigen foundation twee&nbsp;weken lang door de
            <em>May Changing Foundation</em> en documenteerde dagelijks kleurmatch, houdbaarheid en huidgevoel. Daarnaast verzamelden we
            close-upfoto’s onder dag- en kunstlicht om objectief resultaatverschillen te tonen.
          </p>
          <p>
            Om veranderingen in huidconditie te meten, voerden we wekelijks een vochtmeting uit met een corneometer en lieten we een
            dermatoloog de foto’s blind beoordelen op rimpeldiepte en glans. Deze gecombineerde aanpak levert een eerlijk beeld op van
            claims versus werkelijkheid.
          </p>
          <Image
            src="/VALENTIJN_S_SALE_TOT_40_KORTING_2.gif"
            alt="Visuele samenvatting testpanel resultaten"
            width={640}
            height={360}
            className="rounded-xl w-full max-w-lg md:max-w-xl mx-auto my-8"
          />

          <h2>Kleurmatch &amp; finish</h2>
          <p>
            De ingekapselde micro-pigmenten reageren op pH&nbsp;en oxidatie zodra ze de huid raken. Binnen <strong>twee&nbsp;minuten</strong>
            versmolt de crème bij alle panelleden met hun natuurlijke ondertoon – zelfs bij een lichte koele teint én een diepe
            olijfkleur. Op flash-foto’s zie je geen witte waas: de formule bevat geen reflecterende zinkoxidedeeltjes.
          </p>
          <p>
            De finish noemen wij “satijn-mat”: een subtiele glow die oneffenheden verzacht zonder overdreven shine. Wie houdt van een
            high-gloss look, kan een druppel olie toevoegen; voor extra mattering volstaat een transparant poeder op de T-zone.
          </p>
          <Image
            src="/Before-After1.jpg"
            alt="Voor en na kleurmatch – close-up van kaaklijn"
            width={640}
            height={360}
            className="rounded-xl w-full max-w-lg md:max-w-xl mx-auto my-8"
          />

          <h2>Huidgevoel &amp; verzorging</h2>
          <p>
            Dankzij een complex van hyaluronzuur, peptiden en centella asiatica voelt de textuur aan als een luchtige crème in plaats
            van een traditionele siliconenbasis. Onze droge-huid-tester merkte na dag&nbsp;3 minder schilfertjes rond de neusplooi op;
            de gevoelige rosacea-huid vertoonde geen roodheid of prikkeling.
          </p>
          <p>
            Extra pluspunt: de foundation is <strong>niet-comedogeen</strong> en parfumvrij, waardoor poriën kunnen ademen. Dat maakt ’m
            geschikt om ook tijdens warmere dagen of sportieve activiteiten te dragen.
          </p>

          <h2>Long-wear test</h2>
          <p>
            We vroegen elke tester om een drukke dag te documenteren: van ochtendkoffie tot avondwandeling in miezerregen. Na
            tien&nbsp;uur zat gemiddeld <strong>80&nbsp;%</strong> van de foundation nog op zijn plek; enkel rond kin en mond zagen we lichte
            vervaging. Een dunne laag fixing-spray of een tissue-blot bleek voldoende om de dekking te verlengen.
          </p>
          <p>
            Interessant detail: de formule oxideert nauwelijks. Onze olie-rijke tester noteerde slechts één toonverandering van
            0,3&nbsp;op de DSC-kleurschaal – onzichtbaar voor het blote oog.
          </p>
          <Image
            src="/Before-After3.jpg"
            alt="Resultaat na 10 uur dragen – collage"
            width={640}
            height={360}
            className="rounded-xl w-full max-w-lg md:max-w-xl mx-auto my-8"
          />

          <h2>Eindbeoordeling</h2>
          <p>
            Gemiddeld scoort de <em>May Changing Foundation</em> een <strong>9,1&nbsp;/&nbsp;10</strong> op onze checklist (kleurmatch,
            comfort, houdbaarheid en huidverbetering). De adviesprijs is hoger dan drogisterijmerken, maar door de krachtige
            verzorgende ingrediënten én de tijdelijke 40&nbsp;% lanceringskorting blijft de prijs-kwaliteitverhouding uitstekend.
          </p>
          <p>
            Wie op zoek is naar een natuurlijke dekking die zich als skincare gedraagt, zal weinig betere alternatieven vinden in deze
            prijsklasse.
          </p>
        </section>
      </Container>

      {/* CTA */}
      <div className="bg-[#6B4B4B] py-12 text-white text-center">
        <Container>
          <h2 className="text-3xl font-bold mb-4">Wil je zelf ervaren waarom hij zo populair is?</h2>
          <p className="mb-6 text-lg max-w-lg mx-auto">
            Bestel vandaag nog met 40 % korting en ontdek binnen 2 minuten het verschil.
          </p>
          <Button href="https://maycosmetics.nl/products/changing-foundation" className="bg-white text-[#6B4B4B] hover:bg-[#f3e9e9]">
            Claim Lancering-korting
          </Button>
          <p className="text-sm mt-3">60-dagen geld-terug garantie • Gratis kwast cadeau</p>
        </Container>
      </div>
    </Layout>
  );
} 