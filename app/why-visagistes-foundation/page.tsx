"use client";

import Image from "next/image";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Container } from "../components/layout/Container";
import { Layout } from "../components/layout/Layout";
import { useEffect, useState, useRef } from "react";

export default function BlogPageVisagistesFoundation() {
  // Countdown timer initialised to mimic urgency section (17 minutes variant)
  const [countdown, setCountdown] = useState({
    hours: 0,
    minutes: 17,
    seconds: 0,
  });

  // Sticky aside behaviour (copied from collega page)
  const asideRef = useRef<HTMLDivElement | null>(null);
  const [stopStick, setStopStick] = useState(false);

  // Initialise / restore countdown from localStorage under unique keys for this page
  useEffect(() => {
    const initializeTimer = () => {
      const lastVisit = localStorage.getItem("lastVisitTimestamp4");
      const currentTime = Date.now();
      if (!lastVisit || currentTime - parseInt(lastVisit) > 30 * 60 * 1000) {
        setCountdown({ hours: 0, minutes: 17, seconds: 0 });
      } else {
        const saved = localStorage.getItem("countdownState4");
        if (saved) {
          try {
            const parsed = JSON.parse(saved);
            if (
              typeof parsed.hours === "number" &&
              typeof parsed.minutes === "number" &&
              typeof parsed.seconds === "number"
            ) {
              setCountdown(parsed);
            }
          } catch (e) {
            console.error(e);
          }
        }
      }
      localStorage.setItem("lastVisitTimestamp4", currentTime.toString());
    };
    initializeTimer();
    const timer = setInterval(() => {
      setCountdown((prev) => {
        const newSeconds = prev.seconds - 1;
        const newMinutes = newSeconds < 0 ? prev.minutes - 1 : prev.minutes;
        const newHours = newMinutes < 0 ? prev.hours - 1 : prev.hours;
        const updated = {
          hours: newHours < 0 ? 0 : newHours,
          minutes: newMinutes < 0 ? 59 : newMinutes,
          seconds: newSeconds < 0 ? 59 : newSeconds,
        };
        localStorage.setItem("countdownState4", JSON.stringify(updated));
        return updated;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Handle stop sticky when hitting important-info (re-used logic)
  useEffect(() => {
    const handleScroll = () => {
      if (!asideRef.current) return;
      const infoBox = document.getElementById("important-info");
      if (!infoBox) return;
      const asideRect = asideRef.current.getBoundingClientRect();
      const infoRect = infoBox.getBoundingClientRect();
      setStopStick(asideRect.bottom >= infoRect.top - 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout>
      {/* Header (German blog style) */}
      <header className="bg-white py-2 px-4 flex justify-center border-b border-gray-200">
        <Container>
          <div className="text-center">
            <div className="text-xs uppercase tracking-widest text-gray-700">MAY</div>
            <h1 className="font-serif text-2xl md:text-3xl font-medium text-gray-800">Beauty</h1>
            <div className="uppercase tracking-widest text-sm font-medium text-gray-700">JOURNAL</div>
          </div>
        </Container>
      </header>

      {/* Article wrapper */}
      <div className="bg-[#fefaf8] pt-6 pb-10">
        <Container className="max-w-[840px] mx-auto px-6">
          <article className="max-w-none bg-[#fefaf8]">
            {/* Inleidende kop (nieuwe angle) */}
            <p className="font-serif text-xl md:text-2xl leading-snug mb-4 text-center font-semibold">
              Visagistes onthullen: <span className="font-bold">4 redenen</span> waarom zij de kleurveranderende&nbsp;
              <span className="italic">Changing Foundation</span>&nbsp;aanbevelen – strijkt rimpels zichtbaar glad in slechts&nbsp;
              <span className="font-bold">17&nbsp;minuten</span>
            </p>

            {/* Intro GIF */}
            <div className="flex justify-center mb-6">
              <Image
                src="/visagisten.webp"
                alt="Visagistes demonstreren de Changing Foundation"
                width={700}
                height={480}
                className="rounded-lg object-cover"
                priority
              />
            </div>

            {/* Highlight info box */}
            <div className="bg-[#fff7cc] border border-[#fde68a] rounded-md p-4 mb-8 text-black text-base font-medium text-center">
              Professionele make-up artists gebruiken dit geheime wapen backstage bij fashion shows – nu kun jij hetzelfde effect thuis ervaren!
            </div>

            {/* Quote paragraph */}
            <p className="text-xl font-serif italic leading-relaxed text-gray-800 mb-6 text-center">
              "Het geheim van een perfecte huid onder studiobelichting is niet de camera, maar de foundation," verklapt een toonaangevende visagiste.
            </p>

            <p className="text-lg text-black font-medium mb-6 text-center">
              Hieronder lees je waarom professionals zweren bij deze formule:
            </p>

            {/* Reasons uitgebreid */}
            <div className="prose prose-lg max-w-none space-y-10 text-black">
              <section>
                <h3 className="font-serif text-xl md:text-2xl font-bold mb-2">1. Instant kleurcorrectie</h3>
                <p>
                  <strong>Backstage whisper:</strong> vlak vóór een fashionshow heeft een visagiste slechts minuten om
                  het gezicht van een model "catwalk-ready" te krijgen. Eén verkeerde tint kan onder de felle
                  spots een grauwe waas geven – hun grootste nachtmerrie. Daarom zweren zij bij de
                  <em>Changing Foundation</em>: de micro-capsules herkennen sub­tiel de ondertoon van de huid en
                  brengen die meteen in harmonie met de rest van het lichaam.
                </p>
                <p>
                  Wanneer jij dezelfde formule gebruikt, profiteer je van exact die 
                  professionele zekerheid. Geen stress meer in de badkamer: of je nu net terugkomt van vakantie
                  of in de winter wat bleker bent – het resultaat is elke dag <em>spot-on</em>. Dat gevoel van
                  onmiddellijke opluchting – <em>"yes, mijn huid ziet er goed uit"</em> – bouwt vertrouwen op nog
                  vóór je de deur uitstapt.
                </p>
                <p>
                  Visagist <em>Lotte van D.</em> verwoordt het zo: "Wanneer de huidtoon klopt, zie ik modellen
                  letterlijk rechtop gaan staan. Dat zelfvertrouwen zie je terug in elke foto – en nu kan
                  iedere vrouw dat backstage-moment thuis ervaren." Autoriteit die je voelt in elke blik in de
                  spiegel.
                </p>
              </section>
              <section>
                <h3 className="font-serif text-xl md:text-2xl font-bold mb-2">2. Lifting-effect zonder injecties</h3>
                <p>
                  Een slimme cocktail van peptiden, Centella Asiatica-extract en
                  cafeïne stimuleert de micro­circulatie en verstevigt de huid optisch
                  in de eerste 17 minuten. Kleine lijntjes lijken gladgestreken en
                  contouren ogen strakker – een zacht 'photoshop-effect' zónder naald
                  of scalpel.
                </p>
                <p>
                  Stel je een 4K-close-up voor waarbij elk porietje uitvergroot wordt. Visagisten vertellen dat
                  zij tijdens zulke shoots niet kunnen vertrouwen op bewerkingssoftware "achteraf" – de huid moet
                  <em>live</em> al perfect ogen. Het directe lift-effect van deze foundation bespaart hen dure
                  retouch-uren – en het geeft jou die zelfde red-carpet uitstraling tijdens een Zoom-meeting of
                  familiefeest.
                </p>
                <p>
                  Psychologisch werkt dit versterkend: wanneer je gelaatstrekken omhoog lijken te komen, ervaren
                  mensen onbewust meer energie in jouw mimiek. Dat vertaalt zich in meer aandacht tijdens een
                  presentatie, meer complimenten bij een ontmoeting – subtiele signalen die je zelfvertrouwen
                  verder boosten.
                </p>
              </section>
              <section>
                <h3 className="font-serif text-xl md:text-2xl font-bold mb-2">3. Langdurige dekking</h3>
                <p>
                  De foundation vormt na het aanbrengen een ultradun, flexibel
                  filmlaagje dat bestand is tegen studiohitte, zweet en fel licht.
                  Tests tonen aan dat de dekking tot 12 uur egaal blijft zonder te
                  oxideren of in lijntjes te kruipen.
                </p>
                <p>
                  Visagiste <em>Maria González</em> was verantwoordelijk voor de make-up van een cast tijdens een
                  14-uur durende Netflix-opname in de Spaanse hitte. Ze had slechts één voorwaarde: een basis die
                  niet smelt. Haar keuze? <em>Changing Foundation</em>. Terwijl lampen van 50°C brandden, bleef de
                  huid van de acteurs fris en mat.
                </p>
                <p>
                  Voor jou betekent dit: je brengt 's ochtends één laagje aan en vergeet je spiegel tot laat in
                  de avond. Die mentale ruimte – geen zorgen of je T-zone glimt of je kin oranje wordt – geeft
                  rust en focus op belangrijkere dingen dan je make-up.
                </p>
              </section>
              <section>
                <h3 className="font-serif text-xl md:text-2xl font-bold mb-2">4. Universele tint</h3>
                <p>
                  De meeste foundations vereisen een koffer vol kleuren om alle
                  huidtinten te kunnen bedienen. De adaptieve pigment­technologie van
                  Changing Foundation dekt daarentegen een groot spectrum van licht tot
                  medium, waardoor visagistes met één flacon uit de voeten kunnen.
                </p>
                <p>
                  De make-up koffers van professionals wegen soms meer dan 25 kilo. Wanneer een product dat
                  gewicht reduceert én fouten elimineert, is dat goud waard. Visagisten vertellen dat zij sinds
                  de introductie van <em>Changing Foundation</em> twee tot drie klassieke tinten hebben geschrapt –
                  ruimte die zij nu vullen met creatieve highlighters in plaats van nog meer basiskleuren.
                </p>
                <p>
                  Thuis vertaalt zich dit naar een fris, opgeruimd badkamerkastje en nooit meer de angst "koop ik
                  wel de juiste tint?" Visagisten vertellen dat zij sinds de introductie van <em>Changing Foundation</em>
                  twee tot drie klassieke tinten hebben geschrapt – ruimte die zij nu vullen met creatieve highlighters in
                  plaats van nog meer basiskleuren.
                </p>
                <p className="font-semibold">
                  Resultaat: minder keuzestress, meer tijd – en altijd die professionele finish die indruk maakt.
                </p>
              </section>
            </div>

            {/* Conclusie & overgang naar aanbod */}
            <div className="mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 text-center">
                Klaar om het backstage-geheim zelf te ervaren?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6 text-center">
                Als zelfs de meest kritische visagistes steevast kiezen voor
                <strong> May&nbsp;Changing Foundation</strong>, dan weet je dat je een formule in handen hebt
                die onder de zwaarste studio-omstandigheden presteert. Geef jouw huid diezelfde
                professionele behandeling – zónder injecties, zónder uren retoucheren, gewoon thuis
                in je eigen spiegelmoment.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8 text-center">
                Kies hieronder het pakket dat bij jou past en ontdek hoe snel jij de complimenten
                zult ontvangen die normaal zijn voorbehouden aan catwalk-modellen.
              </p>
            </div>

            {/* Pakketopties */}
            <div className="bg-[#f5f7f2] rounded-lg p-6 mb-10">
              <h3 className="text-xl font-bold text-black mb-6 text-center">Kies je transformatie-pakket</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {/* 1-maand proefpakket */}
                <div className="border border-gray-200 rounded-lg p-4 bg-white flex flex-col">
                  <div className="bg-black text-white text-xs font-semibold uppercase text-center py-1 mb-3 rounded-md">Probeerprijs</div>
                  <Image
                    src="/new-product.jpg"
                    alt="Changing Foundation flacon"
                    width={160}
                    height={160}
                    className="mx-auto mb-3 w-[120px] h-auto object-contain"
                  />
                  <h4 className="font-bold text-lg mb-2 text-center">1&nbsp;x Changing Foundation</h4>
                  <p className="text-center text-[28px] font-bold mb-2">€34,95</p>
                  <p className="text-center text-sm mb-4">Voor ~1&nbsp;maand gebruik</p>
                  <Button href="https://maycosmetics.nl/products/may-changing-foundation" variant="primary" size="md" className="mt-auto"><span className="text-white font-semibold">Bestel nu</span></Button>
                </div>
                {/* 3-maanden pakket */}
                <div className="border-2 border-amber-500 rounded-lg p-4 bg-white flex flex-col shadow-md">
                  <div className="bg-green-600 text-white text-xs font-semibold uppercase text-center py-1 mb-3 rounded-md">Meest gekozen</div>
                  <Image
                    src="/new-product.jpg"
                    alt="Changing Foundation flacon"
                    width={160}
                    height={160}
                    className="mx-auto mb-3 w-[120px] h-auto object-contain"
                  />
                  <h4 className="font-bold text-lg mb-2 text-center">2&nbsp;x Changing Foundation</h4>
                  <p className="text-center text-[28px] font-bold mb-2">€59,95</p>
                  <p className="text-center text-sm mb-4">Voor ~2&nbsp;maanden gebruik</p>
                  <Button href="https://maycosmetics.nl/products/changing-foundation-zomer2025?variant=51007988236626" variant="primary" size="md" className="mt-auto"><span className="text-white font-semibold">Bestel nu</span></Button>
                </div>
                {/* 6-maanden pakket */}
                <div className="border border-gray-200 rounded-lg p-4 bg-white flex flex-col">
                  <div className="bg-red-600 text-white text-xs font-semibold uppercase text-center py-1 mb-3 rounded-md">Beste waarde</div>
                  <Image
                    src="/new-product.jpg"
                    alt="Changing Foundation flacon"
                    width={160}
                    height={160}
                    className="mx-auto mb-3 w-[120px] h-auto object-contain"
                  />
                  <h4 className="font-bold text-lg mb-2 text-center">3&nbsp;x Changing Foundation</h4>
                  <p className="text-center text-[28px] font-bold mb-2">€89,95</p>
                  <p className="text-center text-sm mb-4">Voor ~3&nbsp;maanden transformatie</p>
                  <Button href="https://maycosmetics.nl/products/changing-foundation-zomer2025?variant=51007988269394" variant="primary" size="md" className="mt-auto"><span className="text-white font-semibold">Bestel nu</span></Button>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500 mb-10 text-center">
              *Aanbieding exclusief via deze pagina. 30-dagen niet-tevreden-geld-terug-garantie.
            </p>

            {/* Einde blog */}
          </article>
        </Container>
      </div>

      {/* Anchor placeholder (not used) */}
      <div id="important-info" className="h-1"></div>
    </Layout>
  );
} 