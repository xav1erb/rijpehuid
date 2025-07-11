"use client";

import { useEffect } from "react";
import BlogPage from "../blog/page";

export default function BlogPageBeautyProducts() {
  useEffect(() => {
    // Update hero heading to reflect beauty products focus
    const heroHeadingCandidate = Array.from(document.querySelectorAll('h1')).find((el) =>
      el.textContent?.match(/Wij hebben|beste foundations|vijf beste/)
    );
    if (heroHeadingCandidate) {
      heroHeadingCandidate.innerHTML =
        "Wij hebben 5 populaire beautyproducten voor de rijpere huid getest – <br /> <span class=\"text-[#6B4B4B] underline decoration-2 underline-offset-8 mt-1 inline-block\">Dit is onze TOP&nbsp;5</span>";
    }

    // Restore header title just in case (same as original)
    const headerH1 = document.querySelector('header h1');
    if (headerH1) headerH1.textContent = 'Beauty';

    // Update intro heading (first h2)
    const introHeading = Array.from(document.querySelectorAll("h2")).find((el) =>
      el.textContent?.includes("De hype")
    );
    if (introHeading) {
      introHeading.textContent =
        "De hype rond beautyproducten – Wat zit erachter?";
    }

    // Update the paragraph directly following the intro heading to broaden scope
    const introParagraph = introHeading?.nextElementSibling as HTMLElement | null;
    if (introParagraph) {
      introParagraph.innerHTML =
        `Misschien heb je van vriendinnen, beautyexperts of zelfs beroemdheden gehoord die zweren bij <strong class=\"text-black\">high-end beautyproducten</strong> speciaal voor de rijpere huid. Van <strong class=\"text-black\">concealer</strong> tot <strong class=\"text-black\">eyeliner</strong> en natuurlijk <strong class=\"text-black\">foundation</strong> – de keuze is enorm. Maar waarom zijn juist deze "premium producten" zo populair? De volgende vijf kenmerken hebben de trend aanzienlijk beïnvloed.`;
    }

    // Update criteria section heading
    const criteriaHeading = Array.from(document.querySelectorAll("h3")).find((el) =>
      el.textContent?.includes("5 Populaire foundations op de proef gesteld")
    );
    if (criteriaHeading) {
      criteriaHeading.textContent =
        "5 Populaire beautyproducten op de proef gesteld";
    }

    // Update "Welke foundation" heading and paragraph
    const whichHeading = Array.from(document.querySelectorAll('h3')).find(el => el.textContent?.includes('Maar welke foundation')) as HTMLElement | null;
    if (whichHeading) {
      whichHeading.textContent = 'Maar welke beautyproducten kies je dan?';
      const whichParagraph = whichHeading.nextElementSibling as HTMLElement | null;
      if (whichParagraph) {
        whichParagraph.innerHTML =
          'Met zoveel make-up én verzorgingsproducten op de markt is het logisch dat veel vrouwen door de bomen het bos niet meer zien. Verschillen in formule, ingrediënten en huidreactie kunnen leiden tot <strong>grote verschillen in resultaat en gebruiksgemak.</strong>';
      }
    }

    // Update criteria bullet list titles to be product-agnostic
    const criteriaItems = Array.from(document.querySelectorAll('div.space-y-6 > div'));
    const criteriaCopy = [
      {
        title: '1. Effectiviteit & gebruiksgemak',
        desc: 'We beoordeelden hoe goed het product presteert en hoe eenvoudig het is in gebruik – van aanbrengen tot draagcomfort.'
      },
      {
        title: '2. Huidvriendelijkheid',
        desc: 'We keken naar ingrediënten, hydratatie en of het geschikt is voor de gevoelige of rijpere huid.'
      },
      {
        title: '3. Kwaliteit & duurzaamheid',
        desc: 'Textuur, houdbaarheid en verpakking bepaalden mee hoe duurzaam het product is bij dagelijks gebruik.'
      },
      {
        title: '4. Klanttevredenheid',
        desc: 'Reviews en retourpercentages lieten zien welke producten echt geliefd zijn bij gebruikers.'
      },
      {
        title: '5. Prijs & waarde',
        desc: 'We vergeleken de prijs met de kwaliteit, werking en eventuele extra voordelen zoals SPF of geld-terug-garanties.'
      }
    ];

    criteriaItems.forEach((item, idx) => {
      const boldP = item.querySelector('p.font-bold');
      const textP = boldP?.nextElementSibling as HTMLElement | null;
      if (boldP && criteriaCopy[idx]) boldP.textContent = criteriaCopy[idx].title;
      if (textP && criteriaCopy[idx]) textP.textContent = criteriaCopy[idx].desc;
    });

    // Update conclusion Q&A heading if present
    const qaHeading = Array.from(document.querySelectorAll('h2')).find(el => el.textContent?.includes('Zijn foundations zoals die van May')) as HTMLElement | null;
    if (qaHeading) {
      qaHeading.textContent = 'Zijn premium beautyproducten echt de oplossing voor een stralende huid?';
    }

    // Remove hero image (div + img)
    const heroImg = document.querySelector('img[alt="5 Premium Foundations voor Rijpere Huid"]') as HTMLImageElement | null;
    if (heroImg && heroImg.parentElement) {
      heroImg.parentElement.remove();
    }

    // Hide turquoise navigation bar
    const navBar = document.querySelector('div.bg-\\[\\#17b2c3\\]') as HTMLElement | null;
    if (navBar) {
      navBar.style.display = 'none';
    }

    // --- Update accordion heading & items ---
    const accordionHeading = Array.from(document.querySelectorAll('h2')).find(el => el.textContent?.includes('Belangrijkste kenmerken')) as HTMLElement | null;
    if (accordionHeading) {
      accordionHeading.textContent = 'Belangrijkste kenmerken van onze top 5 beautyproducten';
    }

    const accordionItems = Array.from(document.querySelectorAll('.accordion'));
    const newFeatures = [
      {
        title: 'Past zich aan de rijpere huid aan',
        content: 'Elk product is ontwikkeld om te voldoen aan de specifieke behoeften van de 45+ huid: van textuur tot ingrediënten.'
      },
      {
        title: 'Zachtheid voor gevoelige ogen en huid',
        content: 'Formules zijn hypoallergeen en parfumvrij, zodat concealer, eyeliner en blush geen irritatie veroorzaken.'
      },
      {
        title: 'Langhoudend zonder uitlopen',
        content: 'Make-up blijft tot 16 uur netjes zitten zonder te kreuken in lijntjes of te vlekken.'
      },
      {
        title: 'Verzorgende ingrediënten',
        content: 'Verrijkt met hyaluron, antioxidanten en SPF om de huid tijdens het dragen te hydrateren en te beschermen.'
      },
      {
        title: 'Eenvoudig in gebruik',
        content: 'Gebruiksvriendelijke texturen en applicators zodat je in minuten een frisse, jeugdige look creëert.'
      }
    ];

    accordionItems.forEach((item, idx) => {
      const header = item.querySelector('h3');
      const contentDiv = item.querySelector('.accordion-content div');
      if (header && newFeatures[idx]) header.textContent = newFeatures[idx].title;
      if (contentDiv && newFeatures[idx]) contentDiv.textContent = newFeatures[idx].content;
    });

    // --- Update product cards #2-#5 to andere beautyproducten ---
    const cardConfigs = [
      {
        selectorText: 'Meroda Cosmetics',
        title: 'Maybelline Instant Anti-Age Eraser Concealer',
        rating: '8.95',
        price: '€9,95',
        desc: 'De populaire Instant Anti-Age Eraser Concealer verheldert donkere kringen en verzacht fijne lijntjes dankzij een mix van peptiden en gojibessenextract. De spons-applicator maakt nauwkeurig aanbrengen eenvoudig, zelfs bij rijpere huid rondom de ogen.',
        pros: [
          'Verheldert direct donkere kringen',
          'Creëert een glad, rimpelvriendelijk finish',
          'Budgetvriendelijk'
        ],
        cons: [
          'Kan bij zeer droge huid wat trekken',
          'Beperkte keuze in extra lichte tinten'
        ],
        image: '/Maybelline.jpg'
      },
      {
        selectorText: 'Hera Reflection',
        title: "L'Oréal Paris Age Perfect Satin Glide Eyeliner",
        rating: '8.42',
        price: '€12,50',
        desc: 'Deze romige eyeliner is speciaal ontwikkeld voor gevoelige of rijpere oogleden. De satijnen textuur glijdt moeiteloos zonder te trekken en blijft tot 8 uur veegvast zitten.',
        pros: [
          'Zachte formule – geen trekkend gevoel',
          'Veegvast maar verwijderbaar met lauw water',
          'Beschikbaar in meerdere zachte tinten'
        ],
        cons: [
          'Kortere houdbaarheid bij zeer vettige oogleden',
          'Potlood moet geregeld geslepen worden'
        ],
        image: '/lorealparis.webp'
      },
      {
        selectorText: 'MAC Studio Fix',
        title: 'Lancôme Lash Idôle Mascara',
        rating: '8.30',
        price: '€29,95',
        desc: 'Lash Idôle krult en verlengt wimpers zonder klontjes. De lichtgewicht gel-formule is ideaal voor gevoeligere ogen en blijft de hele dag comfortabel zitten.',
        pros: [
          'Lift & verlengt zonder klontjes',
          'Blijft tot 24 uur zitten zonder af te brokkelen',
          'Geschikt voor contactlensdragers'
        ],
        cons: [
          'Prijziger dan drugstore-mascara\u2019s',
          'Extra reiniger nodig om volledig te verwijderen'
        ],
        image: '/Lancome.jpg'
      },
      {
        selectorText: 'Douglas Make-up',
        title: 'CeraVe Skin Renewing Night Cream',
        rating: '7.92',
        price: '€19,95',
        desc: 'Deze voedende nachtcrème met ceramiden, peptiden en niacinamide helpt de huidbarrière herstellen en vermindert droogtelijntjes gedurende de nacht.',
        pros: [
          'Rijk aan huidherstellende ceramiden',
          'Niet-comedogeen & parfumvrij',
          'Betaalbare anti-aging behandeling'
        ],
        cons: [
          'Wat voller van textuur – kan vet aanvoelen bij olieachtige huid',
          'Geen SPF (enkel nachtgebruik)'
        ],
        image: '/Cerave.webp'
      }
    ];

    cardConfigs.forEach(cfg => {
      const card = Array.from(document.querySelectorAll('h3')).find(el => el.textContent?.includes(cfg.selectorText))?.closest('div.rounded-lg');
      if (!card) return;
      // Update header title
      const headerH3 = card.querySelector('h3');
      if (headerH3) headerH3.innerHTML = headerH3.innerHTML.replace(/<span>[^<]*<\/span>\s*(?:<span>[^<]*<\/span>\s*)?(.+)/, `$1`).replace(/Meroda Cosmetics – Colour Changing Foundation|Hera Reflection Skin Glow Foundation|MAC Studio Fix Fluid Foundation|Douglas Make-up Ultimate 24H Perfect Wear Foundation/, cfg.title);

      // Remove rating number & update price text
      const ratingSpan = card.querySelector('div.mb-6 span.text-5xl');
      let priceSpan: HTMLElement | null = null;
      if (ratingSpan) {
        priceSpan = ratingSpan.nextElementSibling as HTMLElement | null;
        ratingSpan.remove();
      }
      if (priceSpan) {
        priceSpan.textContent = priceSpan.textContent?.replace(/\/10\s*\|\s*/, '') || priceSpan.textContent;
        // ensure only price remains, otherwise set manually
        if (!priceSpan.textContent?.includes('€')) priceSpan.textContent = cfg.price;
      }

      // Update description (first p inside .space-y-4)
      const descP = card.querySelector('div.space-y-4 > p');
      if (descP) descP.textContent = cfg.desc;

      // Update second description paragraph if present
      const descParas = card.querySelectorAll('div.space-y-4 > p');
      if (descParas.length > 1) {
        const secondParaContentMap: Record<string, string> = {
          'Hera Reflection': 'Hoewel de eyeliner lang houdt, kan hij bij zeer vettige oogleden wat sneller vervagen. Een dunne oogschaduwbasis verlengt de houdbaarheid.',
          'Douglas Make-up': 'De rijke textuur voelt prettig aan, maar kan bij olieachtige huid wat zwaar zijn. Breng spaarzaam aan op de T-zone om glans te voorkomen.'
        };
        const newSecond = secondParaContentMap[cfg.selectorText];
        if (newSecond) descParas[1].textContent = newSecond;
      }

      // Update pros and cons lists
      const prosUl = card.querySelector('div.grid ul');
      const consUl = prosUl?.nextElementSibling as HTMLElement | null;
      if (prosUl) {
        prosUl.querySelectorAll('li').forEach((li, idx) => {
          const div = li.querySelector('div');
          if (div && cfg.pros[idx]) div.textContent = cfg.pros[idx];
        });
      }
      if (consUl) {
        consUl.querySelectorAll('li').forEach((li, idx) => {
          const div = li.querySelector('div');
          if (div && cfg.cons[idx]) div.textContent = cfg.cons[idx];
        });
      }

      // Update image
      const imgEl = card.querySelector('img');
      if (imgEl && cfg.image) {
        const img = imgEl as HTMLImageElement;
        img.src = cfg.image;
        img.setAttribute('src', cfg.image);
        img.removeAttribute('srcset'); // prevent old srcset overriding
        img.removeAttribute('data-nimg');
      }
    });

    // --- Update educational & conclusion sections to beautyproduct focus ---
    const whyHeading2 = Array.from(document.querySelectorAll('h2')).find(el => el.textContent?.includes('Waarom zou je een foundation gebruiken')) as HTMLElement | null;
    if (whyHeading2) {
      whyHeading2.textContent = 'Waarom kiezen voor hoogwaardige beautyproducten?';
      const pList = Array.from(whyHeading2.parentElement?.querySelectorAll('p') || []);
      if (pList[0]) {
        pList[0].textContent = 'Goede beautyproducten laten je huid zich natuurlijk gedragen: vrij, zonder zware lagen die poriën verstoppen of het gezicht trekkerig doen aanvoelen.';
      }
      if (pList[1]) {
        pList[1].textContent = 'Veel vrouwen 45+ voelen zich zelfverzekerder wanneer een concealer, eyeliner of mascara speciaal is afgestemd op hun huid- of oogzone; hydratatie, pigmentatie en textuur spelen daarbij een grote rol.';
      }
      if (pList[2]) {
        pList[2].textContent = 'Wie op zoek is naar een frisse, stralende look, profiteert van slimme formules die méér doen dan alleen camoufleren.';
      }
    }

    const attentionHeading2 = Array.from(document.querySelectorAll('h2')).find(el => el.textContent?.includes('Waar je op moet letten bij het kiezen van een foundation')) as HTMLElement | null;
    if (attentionHeading2) {
      attentionHeading2.textContent = 'Waar je op moet letten bij het kiezen van een beautyproduct';
    }

    const bewareHeading2 = Array.from(document.querySelectorAll('h2')).find(el => el.textContent?.includes('Pas op met deze eigenschappen bij foundations')) as HTMLElement | null;
    if (bewareHeading2) {
      bewareHeading2.textContent = 'Pas op met deze eigenschappen bij beautyproducten';
    }

    // Update conclusion Q&A paragraphs wording
    const qaHeading2 = Array.from(document.querySelectorAll('h2')).find(el => el.textContent?.includes('Zijn premium beautyproducten echt')) as HTMLElement | null;
    if (qaHeading2) {
      const qaParas = Array.from(qaHeading2.parentElement?.querySelectorAll('p') || []);
      if (qaParas[0]) {
        qaParas[0].textContent = 'Onze tests en gebruikersfeedback tonen aan dat slimme beautyproducten – van concealer tot nachtcrème – het verschil maken: ze egaliseren, verzorgen en versterken het zelfvertrouwen zonder zware make-up.';
      }
      if (qaParas[1]) {
        qaParas[1].textContent = 'Met de juiste formule ervaar je een natuurlijk resultaat dat de hele dag aanhoudt, terwijl je huid soepel en gehydrateerd blijft.';
      }
    }

    // Update final verdict box text
    const verdictHeading = Array.from(document.querySelectorAll('h3')).find(el => el.textContent?.includes('Eindconclusie')) as HTMLElement | null;
    if (verdictHeading) {
      verdictHeading.textContent = 'Eindconclusie: onze overall favoriet';
      const verdictPara = verdictHeading.nextElementSibling as HTMLElement | null;
      if (verdictPara) {
        verdictPara.textContent = 'Na uitgebreide tests van diverse beautycategorieën springt May Cosmetics Changing Foundation er nog steeds uit als overall topper dankzij zijn universele kleurmatching, verzorgende eigenschappen en uitstekende gebruikerservaring.';
      }
    }

    // --- Adjust May card to regular list item ---
    const mayCard = document.querySelector('#test-winner');
    if (mayCard) {
      // Remove trophy icon span
      const headerSpans = mayCard.querySelectorAll('h3 span');
      if (headerSpans.length >= 3) {
        const trophySpan = headerSpans[1];
        trophySpan.remove();
      }

      // Remove rating number and '/10' text
      const ratingContainer = mayCard.querySelector('div.mb-6.flex');
      if (ratingContainer) {
        const ratingNumberSpan = ratingContainer.querySelector('span.text-5xl');
        let priceSpan: HTMLElement | null = null;
        if (ratingNumberSpan) {
          priceSpan = ratingNumberSpan.nextElementSibling as HTMLElement | null;
          ratingNumberSpan.remove();
        }
        if (priceSpan) {
          priceSpan.textContent = priceSpan.textContent?.replace(/\/10\s*\|\s*/, '') || priceSpan.textContent;
        }
      }

      // Remove testwinnaar badge block
      const badgeDiv = mayCard.querySelector('div.hidden');
      if (badgeDiv) badgeDiv.remove();
    }
  }, []);

  return <BlogPage />;
} 