"use client";

import Image from "next/image";
import { Button } from "../components/ui/Button";
import { Container } from "../components/layout/Container";
import { Layout, Section, ContentBlock } from "../components/layout/Layout";
import { Heading1, Heading2, Heading3, Paragraph, SmallText, Highlight } from "../components/ui/Typography";
import { useEffect, useState } from "react";



export default function AntiAgingOntdekkingPage() {
  const [countdown, setCountdown] = useState({
    hours: 0,
    minutes: 7,
    seconds: 29
  });

  useEffect(() => {
    const initializeTimer = () => {
      const lastVisit = localStorage.getItem('lastVisitTimestamp');
      const currentTime = Date.now();
      
      if (!lastVisit || (currentTime - parseInt(lastVisit)) > 30 * 60 * 1000) {
        setCountdown({
          hours: 0,
          minutes: 7,
          seconds: 29
        });
      } else {
        const savedCountdownStr = localStorage.getItem('countdownState');
        if (savedCountdownStr) {
          try {
            const savedCountdown = JSON.parse(savedCountdownStr);
            if (typeof savedCountdown.hours === 'number' && 
                typeof savedCountdown.minutes === 'number' && 
                typeof savedCountdown.seconds === 'number') {
              setCountdown(savedCountdown);
            } else {
              setCountdown({
                hours: 0,
                minutes: 7,
                seconds: 29
              });
            }
          } catch (e) {
            console.error("Error parsing countdown state:", e);
            setCountdown({
              hours: 0,
              minutes: 7,
              seconds: 29
            });
          }
        }
      }
      
      localStorage.setItem('lastVisitTimestamp', currentTime.toString());
    };
    
    initializeTimer();
    
    const timer = setInterval(() => {
      setCountdown(prevCountdown => {
        const newSeconds = prevCountdown.seconds - 1;
        const newMinutes = newSeconds < 0 ? prevCountdown.minutes - 1 : prevCountdown.minutes;
        const newHours = newMinutes < 0 ? prevCountdown.hours - 1 : prevCountdown.hours;
        
        const updatedCountdown = {
          hours: newHours < 0 ? 0 : newHours,
          minutes: newMinutes < 0 ? 59 : newMinutes,
          seconds: newSeconds < 0 ? 59 : newSeconds
        };
        
        localStorage.setItem('countdownState', JSON.stringify(updatedCountdown));
        
        return updatedCountdown;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="font-sans" style={{ fontFamily: 'Arial, sans-serif' }}>
      <header
        className="w-full flex items-center justify-center border-b border-gray-200 p-0 m-0 font-sans"
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

      {/* Main content */}
      <div className="bg-[#fefaf8] py-12 md:pt-16 md:pb-20">
        <Container className="max-w-[960px] mx-auto px-4">
          <h1 className="text-3xl md:text-[42px] font-bold leading-[1.3] text-center mb-4 font-sans">
            Sinds mijn 45e leek mijn huid ineens sneller <br />
            <span className="text-red-600 font-bold">te verouderen</span>... tot ik dit ontdekte
          </h1>

          <div className="text-center mb-6">
            <SmallText className="text-gray-600 font-sans">lezen: 2 minuten</SmallText>
          </div>

          <div className="flex justify-center mb-8">
            <Image 
              src="/Opening-image.png" 
              alt="Vrouw die haar huid onderzoekt" 
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </Container>
      </div>

      {/* Partners bar */}
      <div className="w-full font-sans" style={{ background: '#e9c7c0' }}>
        <div className="max-w-[960px] mx-auto px-6 py-2">
          <p className="text-black font-sans">
            <em>Partners:</em> plaats hier consumentebond en nog wat partijen...
          </p>
        </div>
      </div>

      {/* Article content */}
      <div className="px-6 py-8 font-sans">
        <h4 className="text-base font-bold mb-4 text-black font-sans" style={{ fontFamily: 'Arial, sans-serif' }}>
          Als je boven de 45 bent, herken je dit waarschijnlijk...
        </h4>
        
        <p className="text-base leading-relaxed mb-6 text-black font-sans" style={{ fontFamily: 'Arial, sans-serif' }}>
          Je huid verandert – langzaam, maar onmiskenbaar. Eerst zijn het die fijne lijntjes rond je ogen. Dan zie je ineens dat je huid minder stevig is, doffer lijkt. Wat je vroeger gebruikte om je teint op te frissen, doet nu het tegenovergestelde. In plaats van egaliseren, benadrukt het juist de dingen die je liever wat zou verzachten. Het hoopt zich op rond je mondhoeken, trekt in lijntjes en laat je er moe uitzien, zelfs als je dat niet bent. En op een dag kijk je in de spiegel en denk je: "Is dit het begin van echt ouder worden?"
        </p>

        <h4 className="text-base font-bold mb-4 text-black font-sans" style={{ fontFamily: 'Arial, sans-serif' }}>
          Is dit normaal op deze leeftijd?
        </h4>
        
        <p className="text-base leading-relaxed mb-6 text-black font-sans" style={{ fontFamily: 'Arial, sans-serif' }}>
          Ja en nee. 
          Het is normaal dat je huid verandert na je 45e – de productie van collageen en elastine vertraagt, de huid verliest wat volume en vocht, en dat zie je terug in je spiegelbeeld. Maar wat níét normaal is? Dat je je er machteloos bij voelt. Dat producten die jarenlang prima werkten, ineens niet meer doen wat je gewend was. Dat je je afvraagt of het nog wel de moeite waard is, of je het maar gewoon moet accepteren. Het ligt niet aan jou. Je huid vraagt nu simpelweg om iets anders. Wat ooit werkte op een jonge, veerkrachtige huid, sluit nu niet meer aan bij de behoeften van een huid die meer geleefd heeft – maar nog net zo veel mag stralen.
        </p>
      </div>

      {/* Image section */}
      <div className="flex justify-center mb-8">
        <Image 
          src="/Second-image.png" 
          alt="Vrouw die haar huid onderzoekt in de spiegel" 
          width={600}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* New content section */}
      <div className="px-6 py-8 font-sans">
        <h4 className="text-base font-bold mb-4 text-black font-sans" style={{ fontFamily: 'Arial, sans-serif' }}>
          De waarheid over anti-agingproducten: waarom je huid er niet jonger van wordt – maar je portemonnee wel lichter
        </h4>
        
        <p className="text-base leading-relaxed mb-6 text-black font-sans" style={{ fontFamily: 'Arial, sans-serif' }}>
          We kennen ze allemaal: de potjes van meer dan 80 euro die beloven rimpels te vervagen, je huid te liften en de tijd terug te draaien. Maar laten we eerlijk zijn — hoeveel van die producten hebben écht gewerkt? Veel vrouwen proberen allerlei crèmes, serums en maskers in de hoop hun jeugdige uitstraling terug te krijgen. Van 'collageenboosters' tot 'instant lifting'-gels… de beloftes zijn groot, maar het resultaat? Vaak nauwelijks zichtbaar. Wat je in veel gevallen koopt, is vooral het merk, de verpakking en een goed marketingverhaal. En dat is frustrerend. Want je doet het niet uit ijdelheid, maar omdat je je goed wilt voelen in je eigen huid. Je wilt producten die met je huid meewerken – niet die haar verstoppen, uitdrogen of je 10 stappen per ochtend kosten. De waarheid? De meeste anti-agingproducten richten zich op symptoombestrijding, niet op de oorzaak. En dat is precies waarom zoveel vrouwen van 45+ keer op keer teleurgesteld raken. Het wordt tijd voor iets anders. Iets dat wél werkt – en eerlijk is over wat het doet.
        </p>
      </div>

      {/* Pink banner section */}
      <div className="w-full" style={{ background: '#e9c7c0' }}>
        <div className="max-w-[960px] mx-auto px-6 py-4">
          <h4 className="text-base font-bold text-black font-sans" style={{ fontFamily: 'Arial, sans-serif' }}>
            Doorbraak in huidverzorging: activeert je eigen huidmechanisme – zónder zware crèmes of dure behandelingen
          </h4>
        </div>
      </div>

      {/* Introduction text */}
      <div className="px-6 py-8 font-sans">
        <p className="text-base leading-relaxed mb-6 text-black font-sans" style={{ fontFamily: 'Arial, sans-serif' }}>
          In samenwerking met huidexperts en formulatiespecialisten is er een unieke oplossing ontwikkeld die zich richt op de veranderende behoeften van de rijpere huid. Niet door te verstoppen of te camoufleren, maar door de huid op een slimme manier te ondersteunen, versterken én laten stralen. Deze innovatieve benadering heeft al duizenden vrouwen geholpen om hun huid terug te zien zoals die écht is – zacht, levendig en vol zelfvertrouwen.
        </p>
      </div>

      {/* Benefits box */}
      <div className="mx-6 mb-8" style={{ background: '#fefaf8' }}>
        <div className="p-6">
          <h4 className="text-base font-bold mb-4 text-black font-sans" style={{ fontFamily: 'Arial, sans-serif' }}>
            Waarom deze aanpak wél werkt:
          </h4>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✔️</span>
                  <span className="font-sans" style={{ fontFamily: 'Arial, sans-serif' }}>Laat je huid stralen, zonder te glanzen</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✔️</span>
                  <span className="font-sans" style={{ fontFamily: 'Arial, sans-serif' }}>Kruipt niet in rimpels of lijntjes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✔️</span>
                  <span className="font-sans" style={{ fontFamily: 'Arial, sans-serif' }}>Ondersteunt elasticiteit & collageenproductie</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✔️</span>
                  <span className="font-sans" style={{ fontFamily: 'Arial, sans-serif' }}>Lichtgewicht en ademend – geen masker-effect</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✔️</span>
                  <span className="font-sans" style={{ fontFamily: 'Arial, sans-serif' }}>Dagelijks te gebruiken – ook bij gevoelige huid</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✔️</span>
                  <span className="font-sans" style={{ fontFamily: 'Arial, sans-serif' }}>Geliefd door duizenden vrouwen van 45+</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✔️</span>
                  <span className="font-sans" style={{ fontFamily: 'Arial, sans-serif' }}>Geen parfum, geen siliconen, geen plamuur</span>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <Image 
                src="/happywoman.png" 
                alt="Tevreden klant" 
                width={300}
                height={400}
                className="rounded-lg shadow-lg mx-auto"
              />
              <div className="mt-4">
                <div className="flex justify-center mb-2">
                  <span className="text-green-600 text-xl">★★★★★</span>
                </div>
                <p className="font-semibold text-sm font-sans" style={{ fontFamily: 'Arial, sans-serif' }}>Top product ook voor de wat oudere huid</p>
                <p className="text-xs text-gray-500 font-sans" style={{ fontFamily: 'Arial, sans-serif' }}>15 uur geleden</p>
                <p className="text-sm mt-2 font-sans" style={{ fontFamily: 'Arial, sans-serif' }}>
                  "Na mijn eerste bestelling was ik helemaal om. Zoveel geprobeerd maar deze maakt beloften waar. Ik ben 59 jaar en al wat fijne lijntjes op gezicht. Maar voor het eerst waarvan de foundation niet in de lijntjes gaat zitten maar zorgt voor een mooi egaal resultaat. Zelfs mijn pigmentvlekjes zijn op een natuurlijke manier"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social proof text */}
      <div className="px-6 py-8 font-sans">
        <h4 className="text-base font-bold mb-4 text-black font-sans" style={{ fontFamily: 'Arial, sans-serif' }}>
          Meer dan 30.000 vrouwen vertrouwen inmiddels op deze innovatieve huidoplossing
        </h4>
        
        <p className="text-base leading-relaxed mb-6 text-black font-sans" style={{ fontFamily: 'Arial, sans-serif' }}>
          Met ruim 30.000 tevreden klanten is dit product in korte tijd uitgegroeid tot een van de meest besproken innovaties binnen de huidverzorging voor de rijpere huid. De formule is het resultaat van jarenlang onderzoek en nauwe samenwerking met huidexperts, formulatiechemici en vrouwen zelf – allemaal met hetzelfde doel: een huid die straalt, zonder poespas.
        </p>
      </div>

      {/* Two-column formula box */}
      <div className="mx-6 mb-8">
        <div className="grid md:grid-cols-5 gap-0">
          {/* Left column - Light beige background */}
          <div className="md:col-span-3 p-6" style={{ background: '#f5f5f0' }}>
            <h4 className="text-base font-bold mb-6 text-black font-sans" style={{ fontFamily: 'Arial, sans-serif' }}>
              Hoe onze formule werkt op jouw huid
            </h4>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-green-600 text-lg mt-0.5">✔</span>
                <div>
                  <p className="font-bold text-black text-sm font-sans mb-2" style={{ fontFamily: 'Arial, sans-serif' }}>Activeert de huid van binnenuit</p>
                  <p className="text-sm text-black leading-relaxed font-sans" style={{ fontFamily: 'Arial, sans-serif' }}>
                    Onze formule stimuleert het natuurlijke herstelproces van je huid en ondersteunt de aanmaak van collageen. Zo wordt je huid steviger en gladder – zonder zware crèmes.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="text-green-600 text-lg mt-0.5">✔</span>
                <div>
                  <p className="font-bold text-black text-sm font-sans mb-2" style={{ fontFamily: 'Arial, sans-serif' }}>Past zich aan jouw huidkleur aan</p>
                  <p className="text-sm text-black leading-relaxed font-sans" style={{ fontFamily: 'Arial, sans-serif' }}>
                    Dankzij slimme micro-ingekapselde pigmenten die geactiveerd worden door zuurstof en de pH van je huid, past de kleur zich automatisch aan jouw teint aan. Geen masker-effect, maar een onzichtbare overgang.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="text-green-600 text-lg mt-0.5">✔</span>
                <div>
                  <p className="font-bold text-black text-sm font-sans mb-2" style={{ fontFamily: 'Arial, sans-serif' }}>Verzacht fijne lijntjes en huidtextuur</p>
                  <p className="text-sm text-black leading-relaxed font-sans" style={{ fontFamily: 'Arial, sans-serif' }}>
                    De formule egaliseert subtiel en voorkomt dat make-up zich ophoopt in lijntjes of poriën – voor een frissere, zachtere uitstraling.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Light red/pink background */}
          <div className="md:col-span-2 p-6" style={{ background: '#fce4e4' }}>
            <h4 className="text-base font-bold mb-6 text-black font-sans" style={{ fontFamily: 'Arial, sans-serif' }}>
              Voor en na het gebruik van onze formule
            </h4>
            
            <div className="text-center">
              <Image 
                src="/Before-After1.jpg" 
                alt="Voor en na vergelijking" 
                width={200}
                height={240}
                className="border border-gray-300 mx-auto mb-3"
              />
              <div className="flex justify-center gap-16 text-sm font-bold text-black font-sans" style={{ fontFamily: 'Arial, sans-serif' }}>
                <span>Voor</span>
                <span>Na</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA section */}
      {/* Pink banner */}
      <div className="w-full" style={{ background: '#e9c7c0' }}>
        <div className="max-w-[960px] mx-auto px-6 py-4">
          <h4 className="text-base font-bold text-black font-sans text-center" style={{ fontFamily: 'Arial, sans-serif' }}>
            Geef je huid de verzorging die ze écht verdient – van binnenuit én van buitenaf.
          </h4>
        </div>
      </div>

      {/* Product showcase */}
      <div className="mx-6 mb-8" style={{ background: '#fefaf8', border: '1px solid #e3eef0' }}>
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left side - Product image */}
            <div className="flex justify-center">
              <Image 
                src="/may-transparant.png" 
                alt="MAY. CHANGING FOUNDATION SPF 15" 
                width={240}
                height={320}
                className="rounded-lg"
              />
            </div>

            {/* Right side - Benefits and CTA */}
            <div>
              <p className="text-lg font-bold mb-4 text-black font-sans" style={{ fontFamily: 'Arial, sans-serif' }}>
                "Ontdek wat jouw huid écht nodig heeft om weer te stralen!"
              </p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-lg">✓</span>
                  <span className="text-sm font-sans" style={{ fontFamily: 'Arial, sans-serif' }}>Binnen 2 minuten aangebracht</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-lg">✓</span>
                  <span className="text-sm font-sans" style={{ fontFamily: 'Arial, sans-serif' }}>Snelle & gratis levering</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-lg">✓</span>
                  <span className="text-sm font-sans" style={{ fontFamily: 'Arial, sans-serif' }}>Speciaal ontwikkeld voor de rijpere huid</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-lg">✓</span>
                  <span className="text-sm font-sans" style={{ fontFamily: 'Arial, sans-serif' }}>Bespaar tot 40%</span>
                </div>
              </div>

              <a href="https://maycosmetics.nl/products/may-changing-foundation" target="_blank" rel="noopener noreferrer">
                <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-base font-bold rounded-lg font-sans">
                  👉 Bestel nu met korting (tijdelijk aanbod!)
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Guarantee statement */}
      <div className="text-center py-4 font-sans">
        <p className="text-base font-bold text-black font-sans" style={{ fontFamily: 'Arial, sans-serif' }}>
          30 dagen testen met een geld terug garantie
        </p>
      </div>


    </div>
  );
} 