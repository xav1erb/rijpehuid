"use client";

import Image from "next/image";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Container } from "../components/layout/Container";
import { Layout } from "../components/layout/Layout";
import { useEffect, useState, useRef } from "react";

export default function BlogPageLiftingFoundation() {
  // Countdown timer initialised to mimic urgency section (17 minutes variant)
  const [countdown, setCountdown] = useState({
    hours: 0,
    minutes: 2,
    seconds: 0,
  });

  // Sticky aside behaviour (copied from collega page)
  const asideRef = useRef<HTMLDivElement | null>(null);
  const [stopStick, setStopStick] = useState(false);

  // Initialise / restore countdown from localStorage under unique keys
  useEffect(() => {
    const initializeTimer = () => {
      const lastVisit = localStorage.getItem("lastVisitTimestamp3");
      const currentTime = Date.now();
      if (!lastVisit || currentTime - parseInt(lastVisit) > 30 * 60 * 1000) {
        setCountdown({ hours: 0, minutes: 2, seconds: 0 });
      } else {
        const saved = localStorage.getItem("countdownState3");
        if (saved) {
          try {
            const parsed = JSON.parse(saved);
            if (typeof parsed.hours === "number" && typeof parsed.minutes === "number" && typeof parsed.seconds === "number") {
              setCountdown(parsed);
            }
          } catch (e) {
            console.error(e);
          }
        }
      }
      localStorage.setItem("lastVisitTimestamp3", currentTime.toString());
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
        localStorage.setItem("countdownState3", JSON.stringify(updated));
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
            {/* Inleidende kop (bewust kleiner) */}
            <p className="font-serif text-xl md:text-2xl leading-snug mb-4 text-center font-semibold">
              Twee ondernemende zussen veroveren Nederland met hun kleurveranderende lifting-foundation:&nbsp;
              <span className="italic">Changing Foundation</span>&nbsp;strijkt rimpels zichtbaar glad in slechts&nbsp;
              <span className="font-bold">2&nbsp;minuten</span>
            </p>

            {/* Intro GIF */}
            <div className="flex justify-center mb-6">
              <Image
                src="/Ondernemersstel.png"
                alt="Ondernemende zussen presenteren de Changing Foundation"
                width={500}
                height={350}
                className="rounded-lg max-w-md w-full h-auto object-cover"
                priority
              />
            </div>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed text-center">
              Geen injecties of filters: één laagje van deze revolutionaire foundation
              gaf mijn huid het stralende, egale effect waar ik jaren naar zocht.
            </p>

            {/* Highlight info box */}
            <div className="bg-[#fff7cc] border border-[#fde68a] rounded-md p-4 mb-6 text-black text-base font-medium text-center">
              Melissa en haar zus Eva perfectioneerden het recept aan de keukentafel – nu zien duizenden vrouwen hun resultaten op social media!
            </div>



            {/* Quote paragraph */}
            <p className="text-xl font-serif italic leading-relaxed text-gray-800 mb-6 text-center">
              "Het is ongelofelijk – het effect is direct zichtbaar. Alsof iemand een schakelaar heeft omgezet", reageren de eerste testers terwijl ze verbaasd hun huid aanraken.
            </p>



            {/* THE DISCOVERY STORY */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">De ontdekking van een generatie-oud geheim</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Een foundation die rimpels <strong>binnen de eerste 2&nbsp;minuten optisch gladstrijkt</strong> – en dat helemaal zonder injecties of dure behandelingen.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>De ontdekster?</strong> Melissa uit Noord-Holland, wier familie al generaties lang een bijzonder schoonheidsgeheim koestert.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "Het begon allemaal aan onze keukentafel," lacht Melissa. "We wilden een foundation die zich écht aanpast en er natuurlijk uitziet. Avondenlang experimenteerden we met pigment­capsules tot we het perfecte resultaat zagen."
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Wat de moderne wetenschap nu pas begint te begrijpen, wisten de polderbewoners al eeuwen: slimme pigmenten kunnen de huid direct egaler en strakker laten ogen.
              </p>

              {/* Quote met rode balk */}
              <blockquote className="border-l-4 border-red-500 pl-4 italic font-semibold text-black mb-8">
                "Toen mijn 52-jarige tante na één applicatie uitzag alsof ze begin dertig was,
                wist ik: dit moeten meer vrouwen ontdekken", herinnert Melissa zich.
              </blockquote>
            </div>

            {/* THE SCIENCE - Consolidated section */}
            <div className="prose prose-lg max-w-none mt-8">
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Hoe werkt de kleurveranderende technologie?</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                De <strong>May&nbsp;Changing Foundation</strong> bevat micro-ingekapselde pigmenten (o.a. <strong>CI&nbsp;77891</strong>) die reageren op de
                unieke pH-waarde en warmte van jouw huid. Zodra je de romige formule aanbrengt, barsten de capsules zachtjes open en
                mengt het pigment zich, waardoor de tint zich <em>naadloos</em> aanpast van licht tot medium huidskleuren.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                De formule combineert lichtreflecterende pigmenten met huidverzorgende ingrediënten als
                <strong>Glycerin</strong> en <strong>Centella&nbsp;Asiatica</strong>. Het resultaat? Een <strong>frisse, jeugdige teint</strong> die zich actief aanpast
                aan jouw huidskleur en de hele dag comfortabel blijft zitten – zelfs bij een rijpere of gevoelige huid.
              </p>

              {/* Scientific validation */}
              <p className="text-black mb-6">
                Studies tonen aan dat kleuradaptieve pigmenten zoals CI&nbsp;77891 zich binnen minuten oxidatief aanpassen aan de huid, waardoor
                een natuurlijk, egaal effect ontstaat zonder 'cakey' resultaat.
              </p>
              
              <p className="text-black mb-8">
                Dermatoloog <em>Kim Wan</em> legt uit: "De microcapsules openen zich door de warmte van je huid en verspreiden het pigment exact
                waar het nodig is – zo lijkt het alsof je helemaal geen make-up draagt, maar wel een perfect egale huid hebt."
              </p>

              {/* Demonstration GIF */}
              <div className="flex justify-center mb-10">
                <Image
                  src="/VALENTIJN_S_SALE_TOT_40_KORTING_2.gif"
                  alt="Demonstratie Changing Foundation in actie"
                  width={500}
                  height={350}
                  className="rounded-lg max-w-md w-full h-auto object-cover"
                />
              </div>

              {/* Consolidated ingredients & benefits */}
              <h3 className="text-xl font-bold text-black mb-4">Belangrijkste ingrediënten & voordelen</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-black mb-3">Actieve ingrediënten:</h4>
                  <ul className="list-disc pl-6 space-y-2 text-black">
                    <li><strong>CI&nbsp;77891</strong> – verantwoordelijk voor het kleurveranderende effect</li>
                    <li><strong>Centella Asiatica&nbsp;Extract</strong> – kalmeert en herstelt de huid</li>
                    <li><strong>Glycerin</strong> – hydrateert en verzacht</li>
                    <li><strong>Titanium&nbsp;Dioxide</strong> – biedt natuurlijke UV-bescherming (SPF)</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-black mb-3">Belangrijkste voordelen:</h4>
                  <ul className="list-disc pl-6 space-y-2 text-black">
                    <li>Werkt zichtbaar binnen 2&nbsp;minuten</li>
                    <li>Past zich perfect aan jouw huidskleur aan</li>
                    <li>100% veilig & zonder injecties</li>
                    <li>Geschikt voor gevoelige, rijpere huid</li>
                    <li>Blijft tot 12&nbsp;uur perfect zitten</li>
                    <li>Hypoallergeen en laat de huid ademen</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-8">
                Deze combinatie van slimme pigmenten en huid­vriendelijke ingrediënten zorgt ervoor dat de Changing&nbsp;Foundation zowel
                make-up <em>als</em> verzorging in één stap is. Breng simpelweg één pompje aan, verdeel het met je vingers of een spons en
                kijk hoe de kleur in seconden samensmelt met je eigen teint.
              </p>
            </div>

            {/* Product image */}
            <div className="mb-10 flex justify-center">
              <Image
                src="/6-lns.jpg"
                alt="Changing Foundation flacon"
                width={600}
                height={400}
                className="rounded-lg max-w-lg w-full h-auto object-cover"
              />
            </div>

            {/* THE PROOF - Results & testimonials */}
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">De resultaten spreken voor zich</h2>

            {/* Close-up & voor/na beelden */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Image
                src="/Before-After2.jpg"
                alt="Close-up van rimpels rond de mond voor het gebruik"
                width={720}
                height={480}
                className="rounded-lg object-cover"
              />
              <Image
                src="/Before-After1.jpg"
                alt="Voor en na Changing Foundation na 2 minuten"
                width={720}
                height={720}
                className="rounded-lg object-cover"
              />
            </div>

            {/* Verschil t.o.v. klassieke behandelingen */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-black mb-4 text-center md:text-left">
                Het grote verschil met traditioneel liften?
              </h3>
              <ul className="list-disc pl-6 space-y-3 text-black text-base">
                <li>Geen dure behandelingen of injecties nodig</li>
                <li>Werkt al na 2&nbsp;minuten</li>
                <li>100% natuurlijk en veilig</li>
                <li>Gewoon thuis aan te brengen</li>
                <li>Geen vervelende bijwerkingen</li>
              </ul>
            </div>

            {/* USER EXPERIENCE - What to expect */}
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Wat je in de eerste 2&nbsp;minuten zult voelen</h2>
            <ul className="list-disc pl-6 space-y-2 text-black mb-6">
              <li>Een licht tintelend gevoel</li>
              <li>Een zachte warmte aan het oppervlak</li>
              <li>Merkbare, geleidelijke versteviging van de huid</li>
              <li>Dit is het teken dat de 'regeneratie-boost' start</li>
            </ul>
            
            <p className="italic text-gray-700 mb-6 font-serif">
              "In mijn tests ontdekte ik iets fascinerends: klop de foundation in en <strong>strijk daarna 30&nbsp;seconden</strong> zacht van binnen naar buiten –
              daardoor wordt het effect nog sterker. Alsof je de receptoren in je huid wakker kust." – <strong>Melissa</strong>
            </p>
            
            <h3 className="text-lg font-bold text-black mb-4">Belangrijke aanwijzingen</h3>
            <ul className="list-disc pl-6 space-y-2 text-black mb-8">
              <li>Laat de foundation 2-3&nbsp;minuten 'samensmelten' vóór je andere verzorging</li>
              <li>De formule ondersteunt zelfs de werking van je overige producten</li>
              <li>Vermijd fel zonlicht tijdens de eerste 2&nbsp;minuten</li>
              <li>Bewaar koel en donker voor maximale potentie</li>
            </ul>

            {/* Personal message from Melissa */}
            <p className="text-gray-700 leading-relaxed mb-8">
              <strong>Persoonlijk woord van Melissa:</strong> "Het ontwikkelen van de May&nbsp;Changing Foundation was mijn missie: vrouwen een
              natuurlijke, wetenschappelijk onderbouwde optie bieden. De ontwikkeling van onze kleurveranderende pigment­technologie vergt precisie en we
              kunnen maar gelimiteerde batches maken. Wacht daarom niet te lang – ik wil niet dat je nog één dag in de spiegel kijkt en
              baalt van nieuwe lijntjes, terwijl er nu een oplossing is."
            </p>

            {/* CALL TO ACTION */}
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-4 text-black">Jouw transformatie begint hier</h3>
              <p className="text-black mb-6">
                Ik heb een beperkte kortingslink kunnen regelen voor mijn lezers. De
                voorraad is beperkt – de timer hieronder telt mee tot de huidige batch
                op is.
              </p>
            </div>

            {/* CTA – single expert card */}
            <div className="bg-[#fefaf8] rounded-2xl shadow-lg p-8 mb-10">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2">
                  <div className="relative w-full aspect-square max-w-[300px] mx-auto">
                    <Image
                      src="/may-transparant.png"
                      alt="May Changing Foundation - Expert getest"
                      fill
                      className="object-contain rounded-xl"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2 text-center lg:text-left">
                  <div className="font-serif text-[42px] tracking-wider text-[#394149] mb-4">MAY.</div>
                  <h2 className="text-2xl font-bold mb-4 text-black">Ontwikkeld door Melissa & Eva</h2>
                  <div className="flex justify-center lg:justify-start items-center gap-1 mb-4">
                    <span className="text-[#ff9800] text-2xl">★★★★★</span>
                    <span className="text-sm text-gray-600 ml-2">9.4/10 Expert Score</span>
                  </div>
                  <p className="text-gray-700 mb-6">
                    Deze kleurveranderende lifting-foundation, geperfectioneerd aan de keukentafel door de zussen Melissa & Eva, laat rimpels er al <strong>binnen 2&nbsp;minuten</strong> gladder uitzien.
                    Klinisch bewezen: <strong>37&nbsp;%</strong> minder zichtbare rimpels in 4 weken – zonder injecties of dure behandelingen.
                  </p>
                  <a href="https://maycosmetics.nl/products/may-changing-foundation" className="inline-block bg-[#9b7ef7] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#8b6ef7] transition-colors">
                    Bestel Nu - Beperkte Voorraad
                  </a>
                  <p className="text-xs text-gray-500 mt-2">
                    Gratis verzending • 30 dagen geld terug garantie
                  </p>
                </div>
              </div>
            </div>
          </article>
        </Container>
      </div>

      {/* Anchor placeholder (not used) */}
      <div id="important-info" className="h-1"></div>
    </Layout>
  );
} 