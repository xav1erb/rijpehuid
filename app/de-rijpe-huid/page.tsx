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
      <header className="bg-white py-3 px-6 flex justify-center border-b border-gray-200">
        <Container>
          <div className="text-center">
            <h1 className="font-serif text-3xl md:text-4xl font-medium text-gray-800">De Rijpe Huid</h1>
          </div>
        </Container>
      </header>

      {/* Hero – full-bleed banner */}
      <section className="w-full bg-[#e8f4f2]">
        <Container className="max-w-[1180px] mx-auto px-4 py-8 md:py-16 flex flex-col md:flex-row items-center gap-10">
          {/* Text */}
          <div className="flex-1 order-1 text-center md:text-left">
            <h3 className="text-2xl md:text-4xl font-extrabold leading-tight mb-4">
              8 Redenen waarom dermatologen kiezen voor <br className="hidden md:block" />
              <span className="underline decoration-4 decoration-[#0E4F5C]">Changing&nbsp;Foundation</span>
            </h3>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-[520px] md:max-w-none mx-auto md:mx-0">
              Als dermatoloog zie ik dagelijks hoe vrouwen van 45+ worstelen met make-up die in lijntjes kruipt of de huid uitdroogt. Ontdek hieronder hoe één slimme, kleur­adaptieve formule het spel verandert.
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
              title: "Past zich binnen 2 minuten aan jouw huidtint aan",
              text: "De formule bevat micro-ingekapselde pigmenten die pas openen wanneer ze in contact komen met zuurstof én de natuurlijke pH van je huid. Hierdoor zie je de bekende \"masker-lijn\" aan je kaakrand letterlijk vervagen binnen twee minuten. Het resultaat is een onzichtbare overgang, zelfs in daglicht."
            },
            {
              title: "Direct ‘micro-lift’ zonder injecties of fillers",
              text: "Een gepatenteerd tripeptiden-complex stimuleert de contractie van collageenvezels in de bovenste dermale laag. In een in-vivo test (n = 52) rapporteerde 87 % van de deelnemers een zichtbaar strakkere huid na 5 minuten – volledig pijnloos en zonder hersteltijd."
            },
            {
              title: "12 uur lang klinisch bewezen hydratatie",
              text: "Sodium PCA, hyaluronzuur met laag moleculair gewicht en beta-glucan vormen samen een ‘vochtmagneet’. Dit verlaagt transepidermaal waterverlies met 28 % en voorkomt schilfertjes, waardoor de foundation niet in fijne lijntjes kruipt, zelfs niet in een verwarmde of droge omgeving." 
            },
            {
              title: "Breed-spectrum SPF 30 tegen foto-veroudering",
              text: "Dermatologen weten dat UV-A de belangrijkste oorzaak is van elastine-afbraak. De ingewerkte niet-nano zink- en titaandioxide filteren zowel UV-A als UV-B, zodat je elke dag automatisch een basale zonbescherming hebt — een must voor het voorkomen van pigmentvlekken en nieuwe rimpels." 
            },
            {
              title: "-37 % rimpeldiepte in vier weken (dubbelblind)",
              text: "Tijdens een gecontroleerde split-face studie met 32 vrouwen van 45–65 jaar werd een gemiddelde daling van de rimpeldiepte met 37 % gemeten via 3D-profilometrie. Deze resultaten bevestigen dat de foundation niet alleen camoufleert, maar ook actief huidverbeterend werkt." 
            },
            {
              title: "Luchtig, niet-comedogeen en parfumvrij",
              text: "De basis is olie- en alcoholvrij en bevat geen verstikkende siliconen. Hierdoor blijven poriën vrij en is het risico op milia of acne bij volwassen huid minimaal. Ideaal voor vrouwen die regelmatig producten met retinol of AHA’s gebruiken." 
            },
            {
              title: "Ultrazachte formule voor de gevoelige rijpere huid",
              text: "De foundation is hypoallergeen, vrij van microplastics en micro‐doserende conserveermiddelen. Elk batch­nummer wordt patch-getest op 100 vrijwilligers; tot nu toe zonder meldingen van irritatie. Daardoor vertrouwen ook dermatologen met rosacea-patiënten deze formule." 
            },
            {
              title: "Optische correctie van roodheid en hyperpigmentatie",
              text: "Licht-diffuserende mica-platelets breken licht in meerdere richtingen en neutraliseren zo direct oppervlakkige roodheid. Gecombineerd met soft-focus mineralen smelten donkere vlekjes visueel weg — vaak is concealer overbodig." 
            }
          ].map((reason, idx) => (
            <div
              key={idx}
              id={`reden-${idx + 1}`}
              className={`flex flex-col md:flex-row items-center gap-8 my-8 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Text */}
              <div className="flex-1">
                <Heading2>{`${idx + 1}. ${reason.title}`}</Heading2>
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
            “Goede make-up hoort niet alleen te verbergen, maar ook te verzorgen. Daarom raad ik Changing Foundation aan – het is huid­verzorging en make-up in één.”
            <footer className="block mt-3 text-base font-normal text-gray-700">— Dr. Edith Janssen, Dermatoloog</footer>
          </blockquote>
        </Container>
      </Section>

      {/* CTA Footer */}
      <Section className="bg-[#0E4F5C] py-14 text-white">
        <Container className="max-w-[1000px] mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
          <Image src="/may-transparant.png" alt="May Changing Foundation" width={280} height={400} className="rounded-lg object-contain" />
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-4">Ervaar het verschil binnen 2&nbsp;minuten</h2>
            <p className="text-lg mb-6 max-w-md mx-auto lg:mx-0">
              Grijp je kans op <strong>40&nbsp;% launch-korting</strong> en een gratis luxe kwast. Niet goed? Geld terug binnen 60 dagen.
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