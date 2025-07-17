"use client";

import Image from "next/image";
import { Button } from "../components/ui/Button";
import { Container } from "../components/layout/Container";
import { Layout, Section } from "../components/layout/Layout";
import { Heading2, Heading3, Paragraph } from "../components/ui/Typography";

export default function DermatologistBlogPage() {
  const reasons = [
    {
      title: "Binnen enkele seconden exact de juiste teint.",
      text: `De formule van deze foundation is uniek en bevat de geavanceerde DermaTone-technologie. Zodra de foundation in contact komt met je huid, past de kleur zich automatisch aan jouw natuurlijke huidskleur aan. Dit komt doordat iedere huid een eigen, unieke pH-waarde heeft. De slimme pigmenten in de formule reageren hierop en zorgen ervoor dat je altijd de juiste tint draagt. Het resultaat is een perfect egale look, zonder kleurverschillen of zichtbare overgangen.`
    },
    {
      title: "Actief collageencomplex voor een zichtbaar stevigere huid",
      text: `Een speciaal tripeptiden-complex helpt de collageenvezels in je huid om samen te trekken, wat zorgt voor een stevigere en strakkere uitstraling. Zonder injecties, zonder hersteltijd. Uit een gebruikerstest bleek dat 87% van de deelnemers na één maand een zichtbaar gladdere en strakkere huid ervaarde – helemaal pijnloos en veilig.`
    }
    // ...add the rest of your reasons here...
  ];

  return (
    <>
      <header
        className="w-full flex items-center justify-center border-b border-gray-200 p-0 m-0"
        style={{ minHeight: '44px', background: '#e9c7c0' }}
      >
        <div className="flex items-center justify-center w-full max-w-4xl px-4 py-0 m-0">
          <Image
            src="/logo.png"
            alt="DeRijpeHuid.nl logo"
            width={340}
            height={120}
            style={{
              maxHeight: '120px',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
              objectPosition: 'center'
            }}
          />
        </div>
      </header>
      <Layout withPadding={false}>
        {/* Hero – full-bleed banner */}
        <section className="w-full bg-[#e8f4f2]">
          <Container className="max-w-[1180px] mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
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
              <Image src="/dermatoloog.png" alt="Dermatoloog met foundation flacon" width={520} height={640} className="rounded-xl object-contain mx-auto" priority />
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
            {reasons.map((reason, idx) => (
              <div key={idx} className={`flex flex-col md:flex-row items-center gap-8 my-8 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <h4 className="font-bold font-serif mb-2 text-xl md:text-2xl">{`${idx + 1}. ${reason.title}`}</h4>
                  <Paragraph className="text-gray-700 mt-2">{reason.text}</Paragraph>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </Layout>
    </>
  );
}