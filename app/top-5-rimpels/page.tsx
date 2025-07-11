"use client";

import { useEffect } from "react";
import BlogPage from "../blog/page";

export default function BlogPageRimpels() {
  useEffect(() => {
    const heroHeadingCandidate = Array.from(document.querySelectorAll('h1')).find((el) => el.textContent?.match(/Wij hebben|beste foundations|vijf beste/));
    if (heroHeadingCandidate) {
      heroHeadingCandidate.innerHTML = "Dit zijn de vijf beste foundations tegen rimpels";
    }

    // Restore header title
    const headerH1 = document.querySelector('header h1');
    if (headerH1) headerH1.textContent = 'Beauty';

    // Update intro heading (first h2)
    const introHeading = Array.from(document.querySelectorAll("h2")).find((el) =>
      el.textContent?.includes("De hype")
    );
    if (introHeading) {
      introHeading.textContent =
        "De hype rond anti-rimpel foundations – Wat zit erachter?";
    }

    // Update the paragraph directly following the intro heading to focus on rimpels
    const introParagraph = introHeading?.nextElementSibling as HTMLElement | null;
    if (introParagraph) {
      introParagraph.innerHTML =
        `Misschien heb je van vriendinnen, beautyexperts of zelfs beroemdheden gehoord die zweren bij foundations die <strong class="text-black">rimpels verzachten</strong> en de huid een frisse, jeugdige glow geven. Termen als <strong class="text-black">anti-aging</strong>, <strong class="text-black">stevige dekking zonder cakey effect</strong> en <strong class="text-black">verzorgende ingrediënten</strong> vliegen je om de oren. Maar waarom zijn juist deze "anti-rimpel foundations" zo in trek? De volgende vijf kenmerken hebben de trend een flinke boost gegeven.`;
    }

    // Update criteria section heading
    const criteriaHeading = Array.from(document.querySelectorAll("h3")).find((el) =>
      el.textContent?.includes("5 Populaire foundations op de proef gesteld")
    );
    if (criteriaHeading) {
      criteriaHeading.textContent =
        "5 Populaire anti-rimpel foundations op de proef gesteld";
    }

    // Verwijder hero-afbeelding definitief (div + img)
    const heroImg = document.querySelector('img[alt="5 Premium Foundations voor Rijpere Huid"]') as HTMLImageElement | null;
    if (heroImg && heroImg.parentElement) {
      heroImg.parentElement.remove();
    }

    const heroHeading = Array.from(document.querySelectorAll("h1")).find((el) =>
      el.textContent?.includes("Wij hebben")
    );
    if (heroHeading) {
      heroHeading.innerHTML =
        `Dit zijn de <strong>vijf beste foundations tegen rimpels</strong> – <br /> <span class="text-[#6B4B4B] underline decoration-2 underline-offset-8 mt-1 inline-block">Onze testresultaten op een rij</span>`;
    }

    // Update author intro paragraph to vermelden anti-rimpel focus
    const authorCardPara = document.querySelector(
      "div.w-full.bg-\\[\\#fefaf8\\].shadow-md p.text-gray-700"
    ) as HTMLElement | null;
    if (authorCardPara) {
      authorCardPara.innerHTML =
        `Elise testte tientallen <strong>anti-rimpel foundations</strong> op echte vrouwen van 45+. In dit artikel deelt ze welke formules de fijne lijntjes het beste camoufleren én verzorgen.`;
    }

    // Hide turquoise nav bar
    const navBar = document.querySelector('div.bg-\\[\\#17b2c3\\]') as HTMLElement | null;
    if (navBar) {
      navBar.style.display = 'none';
    }

    // Update accordion feature list
    const accordionItems = Array.from(document.querySelectorAll('.accordion'));
    const newFeatures = [
      {
        title: 'Maakt fijne lijntjes direct optisch glad',
        content:
          'Microsferische pigmenten vullen minuscule lijntjes op en weerkaatsen licht, zodat rimpels minder zichtbaar zijn binnen één minuut.'
      },
      {
        title: 'Hydrateert langdurig met hyaluronzuur',
        content:
          'Een mix van laag- en hoogmoleculair hyaluronzuur bindt vocht in de huid en voorkomt droogtelijntjes tot 12 uur lang.'
      },
      {
        title: 'Elastische light-wear textuur',
        content:
          'De soepele formule beweegt mee met gezichtsuitdrukkingen zonder in plooien te kruipen of te "cakey" te worden.'
      },
      {
        title: 'Peptide-complex voor collageenboost',
        content:
          'Peptiden ondersteunen de aanmaak van collageen, waardoor de huid er op termijn steviger en gladder uitziet.'
      },
      {
        title: 'SPF 15 & antioxidanten tegen veroudering',
        content:
          'Beschermt tegen UV-stralen en vrije radicalen — belangrijke oorzaken van nieuwe rimpels.'
      }
    ];

    accordionItems.forEach((item, idx) => {
      const header = item.querySelector('h3');
      const contentDiv = item.querySelector('.accordion-content div');
      if (header && newFeatures[idx]) header.textContent = newFeatures[idx].title;
      if (contentDiv && newFeatures[idx]) contentDiv.textContent = newFeatures[idx].content;
    });

    // Update "Welke foundation" heading and paragraph
    const whichHeading = Array.from(document.querySelectorAll('h3')).find(el => el.textContent?.includes('Maar welke foundation')) as HTMLElement | null;
    if (whichHeading) {
      whichHeading.textContent = 'Welke anti-rimpel foundation kies je?';
      const whichParagraph = whichHeading.nextElementSibling as HTMLElement | null;
      if (whichParagraph) {
        whichParagraph.innerHTML =
          'Het aanbod is enorm en niet elke foundation is even vriendelijk voor een rijpere huid. Ingrediënten, textuur en <strong>anti-aging werking</strong> kunnen grote verschillen maken in hoe jouw rimpels eruitzien en hoe comfortabel de foundation draagt.';
      }
    }

    // Update criteria bullet list
    const criteriaItems = Array.from(document.querySelectorAll('div.space-y-6 > div'));
    const criteriaCopy = [
      {
        title: '1. Direct gladstrijkend effect & draagcomfort',
        desc: 'We bekeken hoe snel de foundation fijne lijntjes opvult en of hij licht en comfortabel aanvoelt, zelfs na uren dragen.'
      },
      {
        title: '2. Huidverbetering op lange termijn',
        desc: 'Formules met hydraterende stoffen en peptiden kregen pluspunten voor het zichtbaar verzachten van rimpels bij dagelijks gebruik.'
      },
      {
        title: '3. Textuur & elasticiteit',
        desc: 'Een elastische textuur die meebeweegt met expressies voorkomt dat de foundation in plooitjes kruipt of een cakey laag vormt.'
      },
      {
        title: '4. Klanttevredenheid',
        desc: 'Ervaringen van 45+ vrouwen – inclusief retourpercentages – lieten zien welke producten écht resultaat leveren.'
      },
      {
        title: '5. Prijs & anti-aging waarde',
        desc: 'We vergeleken de kostprijs met de anti-rimpel resultaten, ingrediëntenkwaliteit en extra voordelen zoals SPF of geld-terug-garantie.'
      }
    ];

    criteriaItems.forEach((item, idx) => {
      const boldP = item.querySelector('p.font-bold');
      const textP = boldP?.nextElementSibling as HTMLElement | null;
      if (boldP && criteriaCopy[idx]) boldP.textContent = criteriaCopy[idx].title;
      if (textP && criteriaCopy[idx]) textP.textContent = criteriaCopy[idx].desc;
    });

    // --- Update MAY COSMETICS winner card text ---
    const winnerCard = document.querySelector('#test-winner');
    if (winnerCard) {
      // Update the two description paragraphs
      const descParas = winnerCard.querySelectorAll('div.space-y-4 > p');
      if (descParas.length >= 2) {
        descParas[0].innerHTML =
          'De <strong>Changing Foundation</strong> van May Cosmetics bewijst hoe een slimme formule rimpels direct kan verzachten. Microsferische pigmenten vullen <strong>fijne lijntjes</strong> op, terwijl de kleur zich aanpast aan je eigen teint voor een egaal, natuurlijk resultaat zonder maskereffect.';
        descParas[1].innerHTML =
          'Dankzij een mix van <strong>hyaluronzuur, peptiden en SPF&nbsp;15</strong> blijft de huid gehydrateerd, beschermd en soepel. De textuur trekt niet in rimpels, blijft tot 16&nbsp;uur zitten en is hypoallergeen, vegan én waterproof – een betrouwbare all-in-one anti-rimpeloplossing.';
      }

      // Update voordelen-lijst (first UL inside grid)
      const advantagesUl = winnerCard.querySelector('div.grid ul');
      if (advantagesUl) {
        const newAdv = [
          'Perfecte kleurmatch & onmiddellijke rimpelvulling',
          'Comfortabel & hydraterend – trekt niet in lijntjes',
          'Speciaal voor de rijpere huid – ook bij diepere expressielijnen',
          'Jeugdige glow zonder plamuurlaag',
          '30 dagen risicoloos proberen'
        ];
        advantagesUl.querySelectorAll('li').forEach((li, idx) => {
          const textDiv = li.querySelector('div');
          if (textDiv && newAdv[idx]) textDiv.textContent = newAdv[idx];
        });
      }
    }

    // --- Update MERODA card text ---
    const merodaCard = Array.from(document.querySelectorAll('h3')).find(el => el.textContent?.includes('Meroda Cosmetics'))?.closest('div.rounded-lg');
    if (merodaCard) {
      const descPara = merodaCard.querySelector('div.space-y-4 > p');
      if (descPara) {
        descPara.innerHTML =
          'Meroda\'s Colour Changing Foundation voelt licht aan en egaliseert de teint, maar in onze <strong>rimpeltest</strong> bleek de formule minder effectief bij diepere lijntjes. Zonder specifieke anti-aging ingrediënten kunnen rimpels na enkele uren weer zichtbaar worden. Bij de hogere prijs per ml haal je minder anti-rimpelwaarde dan bij de testwinnaar.';
      }

      // Update voordelen (first UL) en nadelen (second UL)
      const advUl = merodaCard.querySelector('div.grid ul');
      const disadvUl = advUl?.nextElementSibling as HTMLElement | null;
      if (advUl) {
        const advTexts = [
          'Lichte, ademende textuur – draagt comfortabel',
          'Egale dekking bij oppervlakkige lijntjes',
          'Stijlvolle, luxe verpakking'
        ];
        advUl.querySelectorAll('li').forEach((li, idx) => {
          const textDiv = li.querySelector('div');
          if (textDiv && advTexts[idx]) textDiv.textContent = advTexts[idx];
        });
      }
      if (disadvUl) {
        const disadvTexts = [
          'Minder gladstrijkend effect bij diepere rimpels',
          'Vervaagt sneller in plooitjes op warme dagen'
        ];
        disadvUl.querySelectorAll('li').forEach((li, idx) => {
          const textDiv = li.querySelector('div');
          if (textDiv && disadvTexts[idx]) textDiv.textContent = disadvTexts[idx];
        });
      }
    }

    // --- Update HERA card text ---
    const heraCard = Array.from(document.querySelectorAll('h3')).find(el => el.textContent?.includes('Hera Reflection'))?.closest('div.rounded-lg');
    if (heraCard) {
      const descParas = heraCard.querySelectorAll('div.space-y-4 > p');
      if (descParas.length >= 2) {
        descParas[0].innerHTML =
          'De <strong>Reflection Skin Glow Cushion Foundation</strong> van HERA belooft een jeugdige glow dankzij lichtweerkaatsende pigmenten. In onze test gaf de glans echter extra nadruk aan <strong>rimpels en poriën</strong>, vooral bij een gecombineerde of vette huid.';
        descParas[1].innerHTML =
          'Hoewel de formule 24-uurs hydratatie claimt, vervaagde het product sneller uit lijntjes in warme of vochtige omstandigheden. De lichte tot medium dekking laat diepere rimpels zichtbaar, waardoor vaak extra concealer nodig is.';
      }

      const advUlHera = heraCard.querySelector('div.grid ul');
      const disadvUlHera = advUlHera?.nextElementSibling as HTMLElement | null;
      if (advUlHera) {
        const advTexts = [
          'Zijdezachte, lichte textuur – plakt niet',
          'Frisse glow op droge tot normale huid',
          'Handige cushion-verpakking voor onderweg'
        ];
        advUlHera.querySelectorAll('li').forEach((li, idx) => {
          const textDiv = li.querySelector('div');
          if (textDiv && advTexts[idx]) textDiv.textContent = advTexts[idx];
        });
      }
      if (disadvUlHera) {
        const disadvTexts = [
          'Glanzende finish benadrukt rimpels bij vettigere huid',
          'Lichte dekking camoufleert diepere lijntjes beperkt',
          'Hogere prijs zonder uitgesproken anti-aging ingrediënten'
        ];
        disadvUlHera.querySelectorAll('li').forEach((li, idx) => {
          const textDiv = li.querySelector('div');
          if (textDiv && disadvTexts[idx]) textDiv.textContent = disadvTexts[idx];
        });
      }
    }

    // --- Update MAC card text ---
    const macCard = Array.from(document.querySelectorAll('h3')).find(el => el.textContent?.includes('MAC Studio Fix'))?.closest('div.rounded-lg');
    if (macCard) {
      const descParas = macCard.querySelectorAll('div.space-y-4 > p');
      if (descParas.length >= 2) {
        descParas[0].innerHTML =
          'MAC\'s Studio Fix Fluid staat bekend om zijn langdurige, matte dekking – ideaal om glans te controleren. In onze anti-rimpeltest accentueerde de <strong>stevige textuur</strong> echter fijne lijntjes, waardoor de huid er minder soepel uitzag.';
        descParas[1].innerHTML =
          'De formule bevat alcohol en parfum, wat bij een rijpere of gevoelige huid kan uitdrogen en irriteren. Voor vrouwen die rimpels willen verzachten is dit eerder een make-up optie dan een skin-care oplossing.';
      }
      const advUlMac = macCard.querySelector('div.grid ul');
      const disadvUlMac = advUlMac?.nextElementSibling as HTMLElement | null;
      if (advUlMac) {
        const advTexts = [
          'Sterke matte dekking – houdt glans tegen',
          'Blijft lang zitten, zelfs bij oily T-zone',
          'Ruime shade range'
        ];
        advUlMac.querySelectorAll('li').forEach((li, idx) => {
          const textDiv = li.querySelector('div');
          if (textDiv && advTexts[idx]) textDiv.textContent = advTexts[idx];
        });
      }
      if (disadvUlMac) {
        const disadvTexts = [
          'Dikke textuur kan rimpels benadrukken',
          'Alcohol & parfum drogen uit',
          'Prijzig gezien beperkte anti-aging voordelen'
        ];
        disadvUlMac.querySelectorAll('li').forEach((li, idx) => {
          const textDiv = li.querySelector('div');
          if (textDiv && disadvTexts[idx]) textDiv.textContent = disadvTexts[idx];
        });
      }
    }

    // --- Update DOUGLAS card text ---
    const douglasCard = Array.from(document.querySelectorAll('h3')).find(el => el.textContent?.includes('Douglas Make-up'))?.closest('div.rounded-lg');
    if (douglasCard) {
      const descParas = douglasCard.querySelectorAll('div.space-y-4 > p');
      if (descParas.length >= 2) {
        descParas[0].innerHTML =
          'De Ultimate 24H Perfect Wear Foundation is vriendelijk geprijsd en voelt licht aan, maar mist <strong>hydraterende anti-aging ingrediënten</strong>. In onze test stapelde het product zich al na enkele uren in rimpels op.';
        descParas[1].innerHTML =
          'De formule bevat geen SPF en laat de huid aan het einde van de dag wat droog aanvoelen. Een prima budgetkeuze voor jongere huidtypes, maar minder geschikt wanneer je rimpels wilt verfijnen.';
      }
      const advUlDoug = douglasCard.querySelector('div.grid ul');
      const disadvUlDoug = advUlDoug?.nextElementSibling as HTMLElement | null;
      if (advUlDoug) {
        const advTexts = [
          'Betaalbaar & lichtgewicht textuur',
          'Degelijke houdbaarheid tot 24 uur',
          'Breed scala aan tinten'
        ];
        advUlDoug.querySelectorAll('li').forEach((li, idx) => {
          const textDiv = li.querySelector('div');
          if (textDiv && advTexts[idx]) textDiv.textContent = advTexts[idx];
        });
      }
      if (disadvUlDoug) {
        const disadvTexts = [
          'Geen hydraterende of anti-aging ingrediënten',
          'Kan zich ophopen in rimpels',
          'Geen SPF – extra bescherming nodig'
        ];
        disadvUlDoug.querySelectorAll('li').forEach((li, idx) => {
          const textDiv = li.querySelector('div');
          if (textDiv && disadvTexts[idx]) textDiv.textContent = disadvTexts[idx];
        });
      }
    }

    // --- Update educational section headings & paragraphs ---
    const whyHeading = Array.from(document.querySelectorAll('h2')).find(el => el.textContent?.includes('Waarom zou je een foundation gebruiken')) as HTMLElement | null;
    if (whyHeading) {
      whyHeading.textContent = 'Waarom kiezen voor een anti-rimpel foundation?';
      const pList = Array.from(whyHeading.parentElement?.querySelectorAll('p') || []);
      if (pList[0]) {
        pList[0].innerHTML =
          'Een hoogwaardige <strong>anti-rimpel foundation</strong> egaliseert niet alleen kleur, maar <strong>vult fijne lijntjes optisch op</strong> en laat de huid er jeugdiger uitzien zonder zware laag.';
      }
      if (pList[1]) {
        pList[1].textContent =
          'Gebruikers voelen zich zelfverzekerder omdat hun huid gladder oogt en de foundation tegelijkertijd hydrateert en beschermt.';
      }
      if (pList[2]) {
        pList[2].textContent =
          'Zo krijg je een natuurlijke glow én een instant anti-aging-effect zonder dikke make-uplagen.';
      }
    }

    // --- Update bullet list: Waar je op moet letten ---
    const attentionHeading = Array.from(document.querySelectorAll('h2')).find(el => el.textContent?.includes('Waar je op moet letten'));
    if (attentionHeading) {
      const bulletContainer = attentionHeading.nextElementSibling as HTMLElement | null; // div.space-y-4
      if (bulletContainer) {
        const bullets = Array.from(bulletContainer.querySelectorAll('div.flex'));
        const bulletCopy = [
          {
            title: 'Goede kleurmatch',
            desc: 'Een correcte tint voorkomt grijze of oranje waas en laat rimpels niet extra opvallen.'
          },
          {
            title: 'Anti-rimpel ingrediënten',
            desc: 'Zoek naar hyaluronzuur, peptiden of collageen-boosters die de huid voller doen ogen.'
          },
          {
            title: 'Lichtgewicht & elastische textuur',
            desc: 'Voorkomt dat de foundation zich in lijntjes nestelt of cakey wordt.'
          },
          {
            title: 'Hydratatie + SPF',
            desc: 'Beschermt tegen uitdroging én UV-schade, twee grote oorzaken van rimpelvorming.'
          },
          {
            title: 'Ervaringen van 45+ gebruikers',
            desc: 'Lees reviews van leeftijdsgenoten om te zien hoe de foundation zich gedraagt op rijpere huid.'
          }
        ];
        bullets.forEach((bullet, idx) => {
          const titleEl = bullet.querySelector('h3');
          const descEl = bullet.querySelector('p');
          if (titleEl && bulletCopy[idx]) titleEl.textContent = bulletCopy[idx].title;
          if (descEl && bulletCopy[idx]) descEl.textContent = bulletCopy[idx].desc;
        });
      }
    }

    // --- Update bullet list: Pas op met deze eigenschappen ---
    const bewareHeading = Array.from(document.querySelectorAll('h2')).find(el => el.textContent?.includes('Pas op met deze eigenschappen'));
    if (bewareHeading) {
      const bewareContainer = bewareHeading.nextElementSibling as HTMLElement | null;
      if (bewareContainer) {
        const bullets = Array.from(bewareContainer.querySelectorAll('div.flex'));
        const bulletCopy = [
          {
            title: 'Dikke of uitdrogende formules',
            desc: 'Heavy oils, alcohol of talk kunnen rimpels benadrukken en de huid trekkerig maken.'
          },
          {
            title: 'Poederige matte finish',
            desc: 'Kan in lijntjes gaan zitten en het gezicht er ouder uit laten zien.'
          },
          {
            title: 'Beperkte tinten',
            desc: 'Moeilijk om een natuurlijke match te vinden, wat rimpels juist accentueert.'
          },
          {
            title: 'Claims zonder anti-aging bewijs',
            desc: 'Kies producten ondersteund door dermatologisch onderzoek.'
          },
          {
            title: 'Goedkope imitaties',
            desc: 'Kunnen irriterende ingrediënten bevatten die de huid sneller laten verouderen.'
          }
        ];
        bullets.forEach((bullet, idx) => {
          const titleEl = bullet.querySelector('h3');
          const descEl = bullet.querySelector('p');
          if (titleEl && bulletCopy[idx]) titleEl.textContent = bulletCopy[idx].title;
          if (descEl && bulletCopy[idx]) descEl.textContent = bulletCopy[idx].desc;
        });
      }
    }

    // --- Update conclusion Q&A heading & paragraph ---
    const qaHeading = Array.from(document.querySelectorAll('h2')).find(el => el.textContent?.includes('Zijn foundations zoals die van May')) as HTMLElement | null;
    if (qaHeading) {
      qaHeading.textContent = 'Werkt een anti-rimpel foundation zoals die van May echt?';
      const qaParas = Array.from(qaHeading.parentElement?.querySelectorAll('p') || []);
      if (qaParas[0]) {
        qaParas[0].textContent =
          'Onze tests en gebruikersfeedback tonen aan dat een slimme anti-rimpel foundation niet alleen de teint egaliseert, maar ook fijne lijntjes optisch opvult, hydrateert en zo een jeugdiger uiterlijk geeft.';
      }
      if (qaParas[1]) {
        qaParas[1].textContent =
          'Met een soepelere textuur en verzorgende ingrediënten blijkt de juiste foundation een echte gamechanger voor vrouwen die hun huid gladder willen laten lijken zonder zware make-up.';
      }
    }
  }, []);

  return <BlogPage />;
}