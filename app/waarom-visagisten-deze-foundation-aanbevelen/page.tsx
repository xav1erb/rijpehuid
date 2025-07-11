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
              <span className="font-bold">2&nbsp;minuten</span>
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
                <h3 className="font-serif text-xl md:text-2xl font-bold mb-2">2. Verstevigend effect voor de huid</h3>
                <p>
                  Deze formule is speciaal ontwikkeld om de huid direct te ondersteunen en te verstevigen. Binnen 2 minuten na het aanbrengen voelt je huid merkbaar strakker en gladder aan. Fijne lijntjes worden optisch verzacht en je gezichtscontouren lijken subtiel gelift – allemaal zonder ingewikkelde behandelingen of hulpmiddelen.
                </p>
                <p>
                  Stel je een 4K-close-up voor waarbij elk porietje uitvergroot wordt. Visagisten vertellen dat zij tijdens zulke shoots niet kunnen vertrouwen op bewerkingssoftware "achteraf" – de huid moet <em>live</em> al perfect ogen. Dankzij de directe ondersteuning en versteviging van deze foundation besparen zij kostbare retouch-uren – en het geeft jou diezelfde red-carpet uitstraling tijdens een Zoom-meeting of familiefeest.
                </p>
                <p>
                  Wil je het effect versterken? Breng na 2 minuten gerust nog een dunne laag aan voor extra ondersteuning. Zo ervaar je de hele dag een stevig en verzorgd gevoel, zonder dat je huid zwaar aanvoelt.
                </p>
                <p>
                  Psychologisch werkt dit versterkend: wanneer je gelaatstrekken omhoog lijken te komen, ervaren mensen onbewust meer energie in jouw mimiek. Dat vertaalt zich in meer aandacht tijdens een presentatie, meer complimenten bij een ontmoeting – subtiele signalen die je zelfvertrouwen verder boosten.
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
                  In tegenstelling tot traditionele foundations die een exacte match
                  vereisen, past de <em>Changing Foundation</em> zich binnen minuten
                  aan. Van lichte tot donkere huidtinten, warm tot koel ondertoon –
                  één tube, oneindige mogelijkheden.
                </p>
                <p>
                  Visagist <em>Jean-Marc van der Laan</em> heeft alle Europese modeweken gedaan met slechts drie
                  tubes <em>Changing Foundation</em> in zijn kit. "Waar ik vroeger twintig verschillende tinten nodig
                  had, volstaat nu één formule voor het hele internationale modellenspectrum," zegt hij. De
                  tijdsbesparing alleen al is onbetaalbaar – geen onzekerheid meer, geen kleurmatching stress.
                </p>
                <p>
                  Dat zelfvertrouwen krijg jij ook: geen twijfel meer bij kunstlicht, geen schaamte bij daglicht.
                  Eén pomp, perfecte match – elke keer opnieuw. De mentale rust die komt met die zekerheid is
                  bijna zo waardevol als het cosmetische resultaat.
                </p>
              </section>
            </div>

            {/* Waarom nu handelen? */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 mt-12 mb-8">
              <h3 className="font-serif text-xl md:text-2xl font-bold mb-4 text-center">
                Waarom nu handelen?
              </h3>
              <p className="text-lg text-black leading-relaxed text-center mb-4">
                De <em>Changing Foundation</em> is normaal gesproken alleen beschikbaar via exclusieve professionele
                kanalen voor visagisten. Nu tijdelijk toegankelijk voor particulieren – maar de voorraad is beperkt.
              </p>
              <div className="text-center">
                <p className="text-lg text-black font-medium mb-2">Vandaag nog voorradig:</p>
                <div className="flex justify-center items-center space-x-6 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-black">
                      {countdown.hours.toString().padStart(2, '0')}
                    </div>
                    <div className="text-sm text-gray-600">Uur</div>
                  </div>
                  <div className="text-2xl font-bold text-black">:</div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-black">
                      {countdown.minutes.toString().padStart(2, '0')}
                    </div>
                    <div className="text-sm text-gray-600">Min</div>
                  </div>
                  <div className="text-2xl font-bold text-black">:</div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-black">
                      {countdown.seconds.toString().padStart(2, '0')}
                    </div>
                    <div className="text-sm text-gray-600">Sec</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main CTA */}
            <div className="text-center mb-12">
              <Button
                variant="outline"
                size="lg"
                href="https://maycosmetics.nl/products/may-changing-foundation"
                className="!bg-[#ff6b6b] hover:!bg-[#ff5252] !text-white !border-none px-8 py-4 text-lg font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              >
                Ja, ik wil de professionele Changing Foundation proberen
              </Button>
              <p className="text-sm text-gray-600 mt-2">
                30 dagen niet-goed-geld-terug garantie • Gratis verzending
              </p>
            </div>
          </article>
        </Container>
      </div>

      {/* Important info box */}
      <div id="important-info" className="bg-[#f8f9fa] border-t border-gray-200 py-8">
        <Container className="max-w-[840px] mx-auto px-6">
          <div className="text-center text-sm text-gray-600 space-y-2">
            <p>
              <strong>Belangrijk:</strong> De <em>Changing Foundation</em> is een professioneel product dat normaal
              gesproken alleen beschikbaar is voor visagisten. Deze tijdelijke actie is een uitzondering.
            </p>
            <p>
              Vanwege de beperkte productiecapaciteit kunnen we slechts een beperkt aantal orders per dag verwerken.
              Wacht niet te lang – als de voorraad op is, kan het maanden duren voordat er weer nieuwe voorraad is.
            </p>
          </div>
        </Container>
      </div>
    </Layout>
  );
} 