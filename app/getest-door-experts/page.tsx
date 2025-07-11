import Image from 'next/image'
import { Layout, Section } from '../components/layout/Layout'
import { Container } from '../components/layout/Container'

export default function ExpertTestedBlogPage() {
  return (
    <Layout>
      {/* Header with logo */}
      <header className="bg-white py-2 md:py-3 px-4 md:px-6 flex justify-center border-b border-gray-200">
        <Container>
          <div className="text-center">
            <div className="text-xs md:text-sm uppercase tracking-wider text-gray-700">DE</div>
            <h1 className="font-serif text-lg md:text-4xl font-medium text-gray-800">Beauty</h1>
            <div className="uppercase tracking-widest text-sm md:text-xl font-medium text-gray-700">BLOG</div>
          </div>
        </Container>
      </header>

      {/* Main content */}
      <div className="bg-[#fefaf8] py-12 md:pt-16 md:pb-20">
        <Container className="max-w-[960px] mx-auto px-4">
          <h3 className="text-lg md:text-[42px] font-bold leading-relaxed md:leading-[1.3] text-center mb-2 md:mb-4">
            Getest door experts: Deze foundation helpt <br className="hidden md:block" />
            <span className="text-[#6B4B4B] underline decoration-2 underline-offset-4 md:underline-offset-8 mt-1 inline-block">daadwerkelijk tegen rimpels</span>
          </h3>

          <div className="flex justify-center mb-6 md:mb-12">
            <div className="flex flex-row items-center gap-3 md:gap-6 text-sm md:text-[15px] text-[#7a7a7a]">
              <div className="flex items-center gap-1 md:gap-2">
                <span className="inline-block w-4 h-4 md:w-5 md:h-5 text-center text-xs md:text-base">🔬</span>
                <span className="text-xs md:text-base">Wetenschappelijk getest</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2">
                <span className="inline-block w-4 h-4 md:w-5 md:h-5 text-center text-xs md:text-base">👩‍🔬</span>
                <span className="text-xs md:text-base">Dermatologen panel</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2">
                <span className="inline-block w-4 h-4 md:w-5 md:h-5 text-center text-xs md:text-base">📊</span>
                <span className="text-xs md:text-base">Klinisch bewezen</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center mb-4 md:mb-0">
            {/* Author section */}
            <div className="w-full bg-[#fefaf8] shadow-md rounded-lg p-4 md:p-6 border border-gray-100">
              <div className="flex items-center gap-3 md:gap-5">
                <Image 
                  src="/Expert.jpg" 
                  alt="Dr. Maria van der Berg" 
                  width={50}
                  height={50}
                  className="rounded-full border-2 border-gray-100 md:w-[70px] md:h-[70px]"
                />
                <div>
                  <p className="font-bold text-black text-sm md:text-lg mb-1">Door Dr. Maria van der Berg | 5 mei 2025</p>
                  <p className="text-gray-700 mb-0 text-xs md:text-base leading-relaxed">
                    Dermatoloog met 20+ jaar ervaring leidde onafhankelijk onderzoek met 12 experts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* SECTION 1: THE SETUP */}
      <Section className="bg-white py-16">
        <Container className="max-w-4xl mx-auto px-6">
          <div className="max-w-none">
            <h2 className="text-3xl font-bold mb-8 text-black">Waarom deze experts een onafhankelijk onderzoek startte</h2>
            
            <p className="text-black mb-6 text-lg">
              De beautywereld wordt overspoeld met claims over "anti-aging foundations" die rimpels zouden verminderen. 
              Maar hoeveel van deze beloftes zijn daadwerkelijk waar? Als dermatoloog zie ik dagelijks vrouwen die teleurgesteld zijn 
              door producten die niet doen wat ze beloven.
            </p>

            <p className="text-black mb-6 text-lg">
              "Genoeg is genoeg," dacht ik. "Het wordt tijd voor een eerlijke, wetenschappelijke test die consumenten 
              eindelijk duidelijkheid geeft over wat werkt en wat niet."
            </p>

            <p className="text-black mb-8 text-lg">
              Daarom stelde ik een onafhankelijk panel van 12 experts samen - geen influencers, geen marketing, 
              gewoon pure wetenschap. Ons doel: de waarheid achterhalen over foundations en rimpels.
            </p>

            <div className="bg-[#f8f4ff] p-8 rounded-lg mb-12 border-l-4 border-[#e6d7ff]">
              <h3 className="font-bold text-xl text-black mb-4">Dit onderzoek is anders omdat:</h3>
              <div className="space-y-3 text-lg">
                <div className="flex items-center gap-3">
                  <span className="text-[#9b7ef7] font-bold text-xl">✓</span>
                  <span>Volledig onafhankelijk - geen merken betaalden voor deelname</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#9b7ef7] font-bold text-xl">✓</span>
                  <span>Wetenschappelijke meetmethoden gebruikt</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#9b7ef7] font-bold text-xl">✓</span>
                  <span>8 weken durende test op echte vrouwen</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#9b7ef7] font-bold text-xl">✓</span>
                  <span>Zowel directe als lange-termijn effecten gemeten</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 2: THE METHOD */}
      <Section className="bg-[#fefaf8] py-16">
        <Container className="max-w-4xl mx-auto px-6">
          <div className="max-w-none">
            <h2 className="text-3xl font-bold mb-8 text-black">Hoe we de test hebben uitgevoerd</h2>
            
            <p className="text-black mb-12 text-lg">
              Voor dit onderzoek werkten we met een team van 12 experts uit verschillende disciplines. 
              Elk expert bracht hun eigen expertise mee om een compleet beeld te krijgen.
            </p>

            {/* Research Overview */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 mb-12">
              <div className="text-center mb-8">
                <div className="text-sm uppercase tracking-wide text-gray-500 mb-2">ONDERZOEKSOPZET</div>
                <div className="text-2xl font-light text-black mb-1">Expertpanel evaluatie</div>
                <div className="text-gray-600">8 weken onafhankelijk onderzoek</div>
              </div>
              
              <div className="border-t border-gray-200 pt-8">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-black mb-2">12</div>
                    <div className="text-sm text-gray-600 mb-4">Experts betrokken</div>
                    <div className="text-left space-y-1 text-xs text-gray-500">
                      <div>4 Dermatologen</div>
                      <div>3 Cosmetische chemici</div>
                      <div>2 Huidtherapeuten</div>
                      <div>3 Visagisten (15+ jaar)</div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-3xl font-bold text-black mb-2">15</div>
                    <div className="text-sm text-gray-600 mb-4">Foundations getest</div>
                    <div className="text-left space-y-1 text-xs text-gray-500">
                      <div>Verschillende merken</div>
                      <div>Alle prijssegmenten</div>
                      <div>Anti-aging claims</div>
                      <div>Blinde test opzet</div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-3xl font-bold text-black mb-2">60</div>
                    <div className="text-sm text-gray-600 mb-4">Testpersonen</div>
                    <div className="text-left space-y-1 text-xs text-gray-500">
                      <div>Vrouwen 45-65 jaar</div>
                      <div>Verschillende huidtypen</div>
                      <div>Zichtbare rimpels</div>
                      <div>8 weken follow-up</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-8 text-black">Onderzoeksmethodologie</h3>
              
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-300"></div>
                
                {/* Timeline items */}
                <div className="space-y-12">
                  {/* Phase 1 */}
                  <div className="flex items-start gap-8">
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">01</span>
                      </div>
                    </div>
                                         <div className="flex-1">
                       <div className="bg-white border border-gray-200 rounded-lg p-8">
                         <div className="flex items-baseline justify-between mb-4">
                           <h4 className="font-bold text-xl text-black">Studie-opzet & Baseline</h4>
                           <span className="text-sm text-gray-500 font-medium">Week 0-1</span>
                         </div>
                        <p className="text-gray-700 text-lg leading-relaxed mb-4">
                          Expert panel van 12 specialisten samengesteld. Testprotocol vastgesteld volgens internationale standaarden. 
                          Baseline metingen en directe effecten geëvalueerd bij alle 60 testpersonen.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-sm font-medium">Expert briefing</span>
                          <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-sm font-medium">Baseline fotografie</span>
                          <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-sm font-medium">Directe effecten</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Phase 2 */}
                  <div className="flex items-start gap-8">
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">02</span>
                      </div>
                    </div>
                                         <div className="flex-1">
                       <div className="bg-white border border-gray-200 rounded-lg p-8">
                         <div className="flex items-baseline justify-between mb-4">
                           <h4 className="font-bold text-xl text-black">Dagelijks gebruik & Monitoring</h4>
                           <span className="text-sm text-gray-500 font-medium">Week 2-3</span>
                         </div>
                        <p className="text-gray-700 text-lg leading-relaxed mb-4">
                          Testpersonen beginnen dagelijks gebruik. Wekelijkse hydratatie-metingen en gebruikservaring evaluaties. 
                          Eerste adaptatie-effecten en huidreacties gemonitord.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-sm font-medium">Dagelijks gebruik</span>
                          <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-sm font-medium">Hydratatie monitoring</span>
                          <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-sm font-medium">Gebruikservaring</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Phase 3 */}
                  <div className="flex items-start gap-8">
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">03</span>
                      </div>
                    </div>
                                         <div className="flex-1">
                       <div className="bg-white border border-gray-200 rounded-lg p-8">
                         <div className="flex items-baseline justify-between mb-4">
                           <h4 className="font-bold text-xl text-black">Tussentijdse Analyse</h4>
                           <span className="text-sm text-gray-500 font-medium">Week 4-5</span>
                         </div>
                        <p className="text-gray-700 text-lg leading-relaxed mb-4">
                          Eerste meetbare verbeteringen in huidstructuur. Uitgebreide rimpelreductie en elasticiteit metingen 
                          via high-tech dermatologische apparatuur. Expert panel evalueert vooruitgang.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-sm font-medium">Rimpelreductie analyse</span>
                          <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-sm font-medium">Elasticiteit metingen</span>
                          <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-sm font-medium">Expert evaluatie</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Phase 4 */}
                  <div className="flex items-start gap-8">
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">04</span>
                      </div>
                    </div>
                                         <div className="flex-1">
                       <div className="bg-white border border-gray-200 rounded-lg p-8">
                         <div className="flex items-baseline justify-between mb-4">
                           <h4 className="font-bold text-xl text-black">Finale Evaluatie & Conclusies</h4>
                           <span className="text-sm text-gray-500 font-medium">Week 6-8</span>
                         </div>
                        <p className="text-gray-700 text-lg leading-relaxed mb-4">
                          Conclusieve metingen en voor/na vergelijkingen. Collageen stimulatie en langetermijn effecten geanalyseerd. 
                          Alle data gecompileerd voor eindrapport door het expert panel.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-sm font-medium">Voor/na analyse</span>
                          <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-sm font-medium">Collageen metingen</span>
                          <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-sm font-medium">Eindrapport</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quality Assurance */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-12">
              <h4 className="font-semibold text-lg text-black mb-4">Kwaliteitsborging</h4>
              <p className="text-gray-700 leading-relaxed">
                Elke foundation werd getest op dezelfde manier, met dezelfde criteria, door dezelfde experts. 
                Alle evaluaties gebeurden geblindeerd om bias te voorkomen. De resultaten werden statistisch 
                geanalyseerd voor betrouwbaarheid en significantie.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 3: THE DISCOVERY */}
      <Section className="bg-white py-16">
        <Container className="max-w-4xl mx-auto px-6">
          <div className="max-w-none">
            <h2 className="text-3xl font-bold mb-8 text-black">De verrassende ontdekking</h2>
            
            <p className="text-black mb-6 text-lg">
              Na 8 weken intensief testen kwamen we tot een opvallende conclusie. Van de 15 geteste foundations 
              scoorden de meeste tussen de 5.5 en 7.2 uit 10. Maar één foundation sprong er duidelijk bovenuit.
            </p>

            <p className="text-black mb-8 text-lg">
              "In mijn 20 jaar ervaring als dermatoloog heb ik zelden een foundation gezien die zowel onmiddellijk 
              als op lange termijn zulke indrukwekkende resultaten behaalt," aldus Dr. van der Berg.
            </p>

            <div className="mb-12">
              <div className="bg-white border border-gray-300 rounded-sm p-8">
                <div className="text-center mb-6">
                  <div className="text-sm uppercase tracking-wide text-gray-500 mb-2">HOOGST SCOREND PRODUCT</div>
                  <div className="text-3xl font-light text-black mb-1">May Changing Foundation</div>
                  <div className="text-gray-600">Gemiddelde expertscore: <span className="font-semibold text-black">9.4/10</span></div>
                </div>
                
                <div className="border-t border-gray-200 pt-6">
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-2xl font-bold text-black mb-1">15</div>
                      <div className="text-sm text-gray-600">Producten getest</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-black mb-1">12</div>
                      <div className="text-sm text-gray-600">Experts betrokken</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-black mb-1">8</div>
                      <div className="text-sm text-gray-600">Weken testing</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <blockquote className="border-l-4 border-gray-300 pl-6 italic text-xl text-black mb-12 bg-white p-6 rounded-lg border border-gray-200">
              "Deze foundation combineert geavanceerde kleuradaptatie met bewezen anti-aging ingrediënten. 
              Het resultaat is een product dat niet alleen rimpels maskeert, maar ook actief bijdraagt aan huidverbetering."
              <footer className="text-right mt-4 font-semibold not-italic text-gray-600">- Dr. Maria van der Berg, Dermatoloog</footer>
            </blockquote>

            <h3 className="text-2xl font-bold mb-6 text-black">Wat de experts zeiden:</h3>
            
            <div className="space-y-6 mb-12">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <p className="text-lg italic text-black mb-2">
                  "Wat deze foundation uniek maakt, is de combinatie van directe visuele verbetering en langetermijn huidverzorging. 
                  Onze testpersonen zagen niet alleen onmiddellijk gladder uitziende huid, maar na 8 weken was er ook meetbare verbetering 
                  in de huidstructuur zelf."
                </p>
                <p className="text-right font-semibold text-gray-600">- Dr. Sarah Hendricks, Cosmetisch Chemicus</p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <p className="text-lg italic text-black mb-2">
                  "Als visagist werk ik dagelijks met foundations. Deze overtreft alles wat ik tot nu toe heb gezien. 
                  De kleuradaptatie is revolutionair - het past zich perfect aan elke huidskleur aan."
                </p>
                <p className="text-right font-semibold text-gray-600">- Linda Verhoeven, Senior Visagist</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 4: THE SCIENCE */}
      <Section className="bg-[#fefaf8] py-16">
        <Container className="max-w-4xl mx-auto px-6">
          <div className="max-w-none">
            <h2 className="text-3xl font-bold mb-8 text-black">Waarom deze foundation zo effectief is</h2>
            
            <p className="text-black mb-8 text-lg">
              De May Changing Foundation scoorde niet alleen het hoogst, maar overtrof ook alle andere foundations 
              op de belangrijkste criteria. Het geheim ligt in de unieke combinatie van wetenschappelijk bewezen ingrediënten 
              die zowel onmiddellijke als langetermijn effecten leveren:
            </p>
            
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-12">
              <div className="divide-y divide-gray-200">
                <div className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-gray-400 rounded-full flex-shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-black">Centella Asiatica</h4>
                      <p className="text-gray-700 leading-relaxed">Stimuleert de natuurlijke collageen productie van de huid, wat resulteert in vermindering van fijne lijntjes.</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-gray-400 rounded-full flex-shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-black">Hyaluronzuur</h4>
                      <p className="text-gray-700 leading-relaxed">Vult rimpels van binnenuit door intense hydratatie, waardoor de huid voller en gladder oogt.</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-gray-400 rounded-full flex-shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-black">Peptiden Complex</h4>
                      <p className="text-gray-700 leading-relaxed">Verstevigt de huidstructuur en verbetert de elasticiteit voor een steviger, jeugdiger uiterlijk.</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-gray-400 rounded-full flex-shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-black">Antioxidanten</h4>
                      <p className="text-gray-700 leading-relaxed">Beschermen tegen vrije radicalen en voorkomen verdere huidveroudering.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-8 text-black">Meetbare resultaten na 8 weken</h3>
            
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 mb-12 text-center">
              <div>
                <div className="text-4xl font-bold text-gray-900 mb-2">37%</div>
                <div className="text-gray-600">Minder zichtbare rimpels na 4 weken</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900 mb-2">42%</div>
                <div className="text-gray-600">Verbeterde huid elasticiteit</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900 mb-2">28%</div>
                <div className="text-gray-600">Verhoogde hydratatie niveau</div>
              </div>
            </div>

            <p className="text-black mb-8 text-lg">
              Interessant was hoe verschillende expertgroepen de foundations beoordeelden. Elke discipline bracht hun eigen expertise mee:
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-medium text-gray-900 mb-4">Dermatologen & Huidtherapeuten</h4>
                <p className="text-sm text-gray-600 mb-4">Focus op huidgezondheid en langetermijn effecten</p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-900">May Changing Foundation</span>
                    <span className="font-semibold text-gray-900">9.6/10</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-900">Merk A Foundation</span>
                    <span className="font-semibold text-gray-900">7.8/10</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-900">Merk B Foundation</span>
                    <span className="font-semibold text-gray-900">6.9/10</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-900">Merk C Foundation</span>
                    <span className="font-semibold text-gray-900">5.8/10</span>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-medium text-gray-900 mb-4">Visagisten & Chemici</h4>
                <p className="text-sm text-gray-600 mb-4">Focus op toepassing, dekking en formule-innovatie</p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-900">May Changing Foundation</span>
                    <span className="font-semibold text-gray-900">9.2/10</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-900">Merk A Foundation</span>
                    <span className="font-semibold text-gray-900">6.6/10</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-900">Merk B Foundation</span>
                    <span className="font-semibold text-gray-900">6.7/10</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-900">Merk C Foundation</span>
                    <span className="font-semibold text-gray-900">6.4/10</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-black mb-12 text-lg">
              Opvallend was dat zowel de medische experts als de toepassingsspecialisten unaniem de May Changing Foundation 
              als beste beoordeelden. Dit toont aan dat het product zowel wetenschappelijk als praktisch superieur is.
            </p>
          </div>
        </Container>
      </Section>

      {/* SECTION 5: THE VERDICT */}
      <Section className="bg-white py-16">
        <Container className="max-w-4xl mx-auto px-6">
          <div className="max-w-none">
            <h2 className="text-3xl font-bold mb-8 text-black">Het eindoordeel van experts</h2>
            
            <p className="text-black mb-6 text-lg">
              Na 8 weken intensief testen zijn alle 12 experts het eens: de May Changing Foundation is de enige foundation 
              die zowel onmiddellijk als op lange termijn significant helpt tegen rimpels.
            </p>

            <div className="bg-[#fff5f5] p-8 rounded-lg border-l-4 border-[#ffb3b3] mb-12">
              <h3 className="font-bold text-xl text-black mb-4">Waarschuwing voor consumenten:</h3>
              <p className="text-black mb-4 text-lg">
                "Veel foundations beloven anti-aging effecten, maar onze tests tonen aan dat slechts een handvol daadwerkelijk 
                meetbare resultaten behaalt. Consumenten moeten oppassen voor marketing claims zonder wetenschappelijke onderbouwing."
              </p>
              <p className="text-black font-semibold">- Dr. Maria van der Berg</p>
            </div>

            <h3 className="text-xl font-bold mb-6 text-black">Expert advies voor consumenten:</h3>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <span className="text-[#4fc3f7] font-bold text-xl flex-shrink-0">✓</span>
                <div>
                  <h4 className="font-semibold text-lg text-black">Geschikt voor alle huidtypes, vooral 45+</h4>
                  <p className="text-black">De formule is speciaal ontwikkeld voor rijpere huid met specifieke behoeften.</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="text-[#4fc3f7] font-bold text-xl flex-shrink-0">✓</span>
                <div>
                  <h4 className="font-semibold text-lg text-black">Gebruik dagelijks voor beste resultaten</h4>
                  <p className="text-black">Consistentie is key - dagelijks gebruik maximaliseert de anti-aging effecten.</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="text-[#4fc3f7] font-bold text-xl flex-shrink-0">✓</span>
                <div>
                  <h4 className="font-semibold text-lg text-black">Eerste verbeteringen zichtbaar binnen 1-2 weken</h4>
                  <p className="text-black">Directe effecten zijn meteen zichtbaar, langetermijn voordelen ontwikkelen zich geleidelijk.</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="text-[#4fc3f7] font-bold text-xl flex-shrink-0">✓</span>
                <div>
                  <h4 className="font-semibold text-lg text-black">Optimale resultaten na 4-6 weken gebruik</h4>
                  <p className="text-black">De volledige anti-aging effecten worden merkbaar na ongeveer een maand regelmatig gebruik.</p>
                </div>
              </div>
            </div>

            <div className="text-center bg-[#f8f4ff] p-8 rounded-lg border-l-4 border-[#e6d7ff]">
              <h3 className="text-2xl font-bold mb-4 text-black">Conclusie van het expert panel</h3>
              <p className="text-black mb-6 text-lg">
                Voor het eerst kunnen we met wetenschappelijke zekerheid zeggen: er bestaat een foundation die daadwerkelijk 
                helpt tegen rimpels. De May Changing Foundation is niet alleen een make-up product, maar een anti-aging behandeling 
                die je elke dag kunt gebruiken.
              </p>
              <p className="text-black font-semibold text-lg">
                "Dit is een doorbraak in cosmetische wetenschap." - Dr. Maria van der Berg
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Final CTA section */}
      <Section className="bg-[#fefaf8] py-16">
        <Container className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-lg p-8">
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
                <h2 className="text-2xl font-bold mb-4 text-black">Door experts aanbevolen</h2>
                <div className="flex justify-center lg:justify-start items-center gap-1 mb-4">
                  <span className="text-[#ff9800] text-2xl">★★★★★</span>
                  <span className="text-sm text-gray-600 ml-2">9.4/10 Expert Score</span>
                </div>
                <p className="text-gray-700 mb-6">
                  De enige foundation die door 12 experts wordt aanbevolen voor zichtbare rimpelreductie. 
                  Klinisch bewezen: 37% minder zichtbare rimpels in 4 weken.
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
        </Container>
      </Section>
    </Layout>
  );
} 