"use client";

import Image from "next/image";
import { Button } from "../components/ui/Button";
import { Container } from "../components/layout/Container";
import { Layout, Section } from "../components/layout/Layout";
import { Heading2, Heading3, Paragraph } from "../components/ui/Typography";

export default function DermatologistBlogPage() {
  return (
    <Layout>
      {/* Header */}
      <header className="bg-[#e9c7c0] py-3 px-6 flex items-center border-b border-gray-200">
        <Container className="max-w-none px-0">
          <div className="flex items-center">
            {/* Inline SVG logo: cross in a circle */}
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
              <circle cx="16" cy="16" r="14" stroke="#222" strokeWidth="2" fill="none" />
              <rect x="14.25" y="9" width="3.5" height="14" rx="1" fill="none" stroke="#222" strokeWidth="2" />
              <rect x="9" y="14.25" width="14" height="3.5" rx="1" fill="none" stroke="#222" strokeWidth="2" />
            </svg>
            <span className="text-2xl font-serif font-semibold select-none">
              <span className="text-black">De</span>
              <span className="text-[#7d1818]">Rijpe</span>
              <span className="text-black">Huid.nl</span>
            </span>
          </div>
        </Container>
      </header>

      {/* Hero – full-bleed banner */}
      <section className="w-full bg-[#e8f4f2]">
        <Container className="max-w-[1180px] mx-auto px-4 py-8 md:py-16 flex flex-col md:flex-row items-center gap-10">
          {/* Text */}
          <div className="flex-1 order-1 text-center md:text-left">
            <h3 className="text-2xl md:text-4xl font-extrabold leading-tight mb-4">
              8 Redenen waarom ik als dermatoloog <br className="hidden md:block" />
              <span className="underline decoration-4 decoration-[#0E4F5C]">Changing&nbsp;Foundation</span> aanraad
            </h3>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-[520px] md:max-w-none mx-auto md:mx-0">
              Ik zie het elke dag in mijn praktijk: vrouwen die worstelen met foundation die in hun lijntjes kruipt, hun huid uitdroogt of hen er moe uit laat zien. Daarom deel ik graag waarom dit product anders is.
            </p>
          </div>

          {/* Image */}
          <div className="flex-1 order-2">
            <Image src="/Dermatology.png" alt="Dermatoloog met foundation flacon" width={520} height={640} className="rounded-xl object-contain mx-auto" priority />
          </div>
        </Container>
      </section>

      {/* Author */}
      <Container className="max-w-[960px] mx-auto px-4 -mt-12">
        <div className="bg-white shadow-sm rounded-md p-3 flex items-center gap-3 max-w-[320px] mx-auto">
          <Image src="/Esther.png" alt="Dr. Edith Janssen" width={60} height={60} className="rounded-full border-2 border-gray-100" />
          <div>
            <p className="font-bold text-black text-lg mb-1">Dr. Edith Janssen</p>
            <p className="text-gray-700 text-sm leading-relaxed mb-0">20+ jaar dermatoloog</p>
          </div>
        </div>
      </Container>

      {/* Main Content – alternating reason cards */}
      <Section>
        <div className="max-w-[980px] mx-auto px-4">
          {[
            {
              title: "Binnen enkele seconden exact de juiste teint.",
              text: `De formule van deze foundation is uniek en bevat de geavanceerde DermaTone-technologie. Zodra de foundation in contact komt met je huid, past de kleur zich automatisch aan jouw natuurlijke huidskleur aan. Dit komt doordat iedere huid een eigen, unieke pH-waarde heeft. De slimme pigmenten in de formule reageren hierop en zorgen ervoor dat je altijd de juiste tint draagt. Het resultaat is een perfect egale look, zonder kleurverschillen of zichtbare overgangen.`
            },
            {
              title: "Actief collageencomplex voor een zichtbaar stevigere huid",
              text: `Een speciaal tripeptiden-complex helpt de collageenvezels in je huid om samen te trekken, wat zorgt voor een stevigere en strakkere uitstraling. Zonder injecties, zonder hersteltijd. Uit een gebruikerstest bleek dat 87% van de deelnemers na één maand een zichtbaar gladdere en strakkere huid ervaarde – helemaal pijnloos en veilig.`
            },
            {
              title: "Geen droge, schilferende huid meer",
              text: "Veel foundation droogt je huid uit, vooral na een paar uur. Deze doet precies het tegenovergestelde – het houdt vocht vast en voorkomt dat je huid uitdroogt. Zelfs na 12 uur voelt je huid nog comfortabel aan. Geen irriterende schilfertjes of het gevoel dat je huid 'strak' staat." 
            },
            {
              title: "Voorkomt  huidveroudering met SPF 15",
              text: `Deze foundation bevat SPF 30 en beschermt je huid dagelijks tegen de zon. Dankzij veilige, niet-nano zink- en titaandioxide filters ben je beschermd tegen zowel UV-A als UV-B straling. Zo help je huidveroudering, pigmentvlekken en fijne lijntjes te voorkomen – zonder dat je extra zonnebrand hoeft te gebruiken.`
            },
            {
              title: "Minder zichtbare rimpels dankzij collageen-boost",
              text: `Deze foundation doet meer dan alleen je huid egaliseren. Dankzij een actief collageenstimulerend complex helpt de formule fijne lijntjes en rimpels van binnenuit te verminderen. In een studie met vrouwen tussen de 45 en 65 jaar werd na vier weken een gemiddelde afname van 37% in rimpeldiepte gemeten. Het resultaat: een gladdere, stevigere huid die er jonger uitziet – elke dag opnieuw.`
            },
            {
              title: "Licht voor je huid, zonder parfum of verstoppende ingrediënten",
              text: `Deze foundation is luchtig en laat je huid ademen. Hij bevat geen olie, alcohol of verstikkende siliconen, en is volledig parfumvrij. Daardoor is hij ook geschikt voor de gevoelige of volwassen huid die snel reageert of last heeft van onzuiverheden. Perfect in combinatie met huidverzorging met retinol of zuren zoals AHA’s.`
            },
            {
              title: "Geschikt voor de gevoelige rijpere huid",
              text: "Je huid wordt gevoeliger naarmate je ouder wordt. Deze foundation is daarom extra zacht geformuleerd, zonder agressieve stoffen die irritatie kunnen veroorzaken. Zelfs mijn patiënten met rosacea kunnen het meestal goed verdragen – iets wat ik niet van alle foundations kan zeggen."
            },
            {
              title: "Camoufleert roodheid en vlekjes natuurlijk",
              text: "In plaats van alles onder een dikke laag te verstoppen, zorgt deze foundation ervoor dat roodheid en donkere vlekjes optisch vervagen. Het resultaat ziet er natuurlijk uit – alsof je gewoon een mooie huid hebt. Vaak heb je geen concealer meer nodig."
            }
          ].map((reason, idx) => (
            <div
              key={idx}
              id={`reden-${idx + 1}`}
              className={`flex flex-col md:flex-row items-center gap-8 my-8 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Text */}
              <div className="flex-1">
                <h4 className="font-bold font-serif mb-2 text-xl md:text-2xl">{`${idx + 1}. ${reason.title}`}</h4>
                <Paragraph className="text-gray-700 mt-2">{reason.text}</Paragraph>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Quote Banner */}
      <Section className="bg-[#e3eef0] py-10">
        <Container className="max-w-[860px] mx-auto px-4 flex flex-col md:flex-row items-center gap-6">
          <Image src="/Esther.png" alt="Dr. Edith Janssen" width={100} height={100} className="rounded-full border-2 border-white" />
          <blockquote className="text-xl md:text-2xl font-semibold leading-snug text-[#0E4F5C]">
            "Goede make-up hoort je huid te verzorgen, niet te verstoppen. Daarom raad ik Changing Foundation aan – het is een van de weinige producten die echt doet wat het belooft."
            <footer className="block mt-3 text-base font-normal text-gray-700">— Dr. Edith Janssen, Dermatoloog</footer>
          </blockquote>
        </Container>
      </Section>

      {/* CTA Footer */}
      <Section className="bg-[#0E4F5C] py-14 text-white">
        <Container className="max-w-[1000px] mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
          <Image src="/may-transparant.png" alt="May Changing Foundation" width={280} height={400} className="rounded-lg object-contain" />
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-4">Ervaar het verschil binnen enkele seconden</h2>
            <p className="text-lg mb-6 max-w-md mx-auto lg:mx-0">
              Profiteer van 40% zomer korting. Niet tevreden? Binnen 30 dagen geld terug.
            </p>
            <Button href="https://maycosmetics.nl/products/changing-foundation" className="bg-white text-[#0E4F5C] hover:bg-[#f2f2f2]">
              Bestel Nu – Beperkte Voorraad
            </Button>
          </div>
        </Container>
      </Section>
    </Layout>
  );
} 