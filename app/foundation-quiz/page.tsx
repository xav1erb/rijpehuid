"use client";

import Image from "next/image";
import { Button } from "../components/ui/Button";
import { Container } from "../components/layout/Container";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface QuizAnswer {
  questionId: number;
  answer: string;
  value: string;
}

interface Question {
  id: number;
  question: string;
  subtitle?: string;
  hasImages?: boolean;
  options: Array<{
    text: string;
    value: string;
    image?: string;
  }>;
}

// Reduced to 5 most important questions for better conversion
const questions: Question[] = [
  {
    id: 1,
    question: "In welke leeftijdscategorie val je?",
    subtitle: "Zo kunnen we je beter adviseren op basis van je huidbehoeftes!",
    options: [
      { text: "18 – 30 jaar", value: "18-30" },
      { text: "31 – 39 jaar", value: "31-39" },
      { text: "40 – 48 jaar", value: "40-48" },
      { text: "49 – 57 jaar", value: "49-57" },
      { text: "57+", value: "57+" }
    ]
  },
  {
    id: 2,
    question: "Wat is jouw grootste frustratie met foundation?",
    subtitle: "Dit helpt ons de perfecte oplossing voor jou te vinden!",
    options: [
      { text: "Het blijft niet goed zitten", value: "durability" },
      { text: "De kleur past nooit perfect", value: "color-match" },
      { text: "Het voelt zwaar op mijn huid", value: "heavy" },
      { text: "Het benadrukt droge plekjes of onzuiverheden", value: "texture" }
    ]
  },
  {
    id: 3,
    question: "Hoe zou je jouw huidtype omschrijven?",
    options: [
      { text: "Droog", value: "dry" },
      { text: "Vet", value: "oily" },
      { text: "Gecombineerd", value: "combination" },
      { text: "Gevoelig", value: "sensitive" }
    ]
  },
  {
    id: 4,
    question: "Hoe zou je de huidige staat van je huid omschrijven?",
    subtitle: "Wees eerlijk - dit helpt ons de perfecte match te vinden!",
    hasImages: true,
    options: [
      { text: "Glad en strak, minimale lijntjes", value: "minimal-wrinkles", image: "/160.png" },
      { text: "Wat fijne lijntjes rond ogen en mond", value: "fine-lines", image: "/161.png" },
      { text: "Duidelijke rimpels en verlies van stevigheid", value: "moderate-wrinkles", image: "/162.png" }
    ]
  },
  {
    id: 5,
    question: "Hoeveel geef je meestal uit aan een foundation?",
    subtitle: "Zodat we iets kunnen adviseren dat bij jouw budget past",
    options: [
      { text: "Minder dan €15", value: "under-15" },
      { text: "Tussen de €15 en €35", value: "15-35" },
      { text: "Meer dan €50", value: "over-50" },
      { text: "Prijs maakt me niet uit als het maar goed werkt", value: "price-no-object" }
    ]
  }
];

const foundationRecommendations = [
  {
    rank: 1,
    name: "MAY. Changing Foundation",
    description: "De perfecte match voor jouw huid! Deze innovatieve foundation past zich automatisch aan jouw huidkleur aan en biedt langdurige dekking zonder zwaar aan te voelen.",
    image: "/may-transparant.png",
    price: "€24,95",
    originalPrice: "€34,95",
    discount: "30%",
    rating: "9.2/10",
    features: [
      "Zelfaanpassende kleur technologie",
      "SPF 15 bescherming", 
      "Lichtgewicht formule",
      "Geschikt voor rijpere huid",
      "Kruipt niet in lijntjes"
    ],
    cta: "Bestel nu met 30% korting!",
    link: "https://maycosmetics.nl/products/may-changing-foundation"
  },
  {
    rank: 2,
    name: "Meroda Cosmetics – Colour Changing Foundation",
    description: "Meroda's Changing Foundation is een populaire keuze binnen de branche en wordt vaak geprezen om de lichte textuur en natuurlijke finish. De dekking is degelijk en het aanbrengen gaat vlot, wat het product toegankelijk maakt voor dagelijks gebruik. Toch geven veel gebruikers aan dat de foundation iets sneller vervaagt bij langdurig dragen, vooral op warmere dagen.",
    image: "/Meroda-PP.webp",
    price: "€34,95",
    rating: "8.6/10",
    features: [
      "Prettige textuur – Makkelijk aan te brengen",
      "Goede dekking – Egale finish zonder vlekken", 
      "Luxe uitstraling – Mooi verpakt",
      "Natuurlijke finish"
    ],
    drawbacks: [
      "Hogere prijs dan vergelijkbare foundations",
      "Minder langhoudend bij vettige huid"
    ],
    cta: "Bekijk Meroda Foundation",
    link: "#"
  },
  {
    rank: 3,
    name: "Douglas Make-up Ultimate 24H Perfect Wear Foundation",
    description: "De Douglas Make-up Ultimate 24H Perfect Wear Foundation is een betaalbare keuze met een sterke, langdurige dekking. De formule is ontworpen om tot 24 uur te blijven zitten en belooft een natuurlijke finish. Tijdens onze test scoorde het product degelijk op algemene prestaties, maar het mist de finesse waar de rijpere huid juist baat bij heeft. Hoewel het prettig is dat de foundation licht aanvoelt en breed beschikbaar is in verschillende tinten, merkten we dat het product zich snel kan ophopen in fijne lijntjes en de huid gedurende de dag ietwat droog aan kan voelen.",
    image: "/Douglas-PP.webp",
    price: "€19,99",
    rating: "7.2/10",
    features: [
      "Lichte textuur – voelt niet zwaar aan",
      "Degelijke houdbaarheid – blijft lang zitten",
      "Breed scala aan tinten beschikbaar"
    ],
    drawbacks: [
      "Mist hydraterende ingrediënten – minder geschikt voor de rijpere huid",
      "Geen SPF – extra zonbescherming nodig",
      "Kan zich ophopen in lijntjes na een aantal uur"
    ],
    cta: "Bekijk Douglas Foundation",
    link: "#"
  }
];

export default function FoundationQuizPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  // Initialize question from URL
  useEffect(() => {
    const step = searchParams.get('step');
    if (step === 'results') {
      setShowResults(true);
    } else if (step) {
      const questionNum = parseInt(step) - 1;
      if (questionNum >= 0 && questionNum < questions.length) {
        setCurrentQuestion(questionNum);
      }
    } else {
      // No step parameter, set to first question
      updateURL(0);
    }
  }, [searchParams]);

  // Update URL when question changes
  const updateURL = (questionIndex: number, showResults = false) => {
    if (showResults) {
      router.push('/foundation-quiz?step=results', { scroll: false });
    } else {
      router.push(`/foundation-quiz?step=${questionIndex + 1}`, { scroll: false });
    }
  };

  const handleAnswer = async (answer: string, value: string) => {
    const newAnswer: QuizAnswer = {
      questionId: questions[currentQuestion].id,
      answer,
      value
    };

    const updatedAnswers = [...answers.filter(a => a.questionId !== newAnswer.questionId), newAnswer];
    setAnswers(updatedAnswers);

    // If this is the last question, save all answers
    const isLastQuestion = currentQuestion === questions.length - 1;
    if (isLastQuestion) {
      try {
        // Get all answers in the correct order
        const allAnswers = questions.map(q => {
          const answer = updatedAnswers.find(a => a.questionId === q.id);
          return answer?.value || null;
        });

        const quizData = {
          age: allAnswers[0],             // Age category
          frustration: allAnswers[1],     // Foundation frustration
          skinType: allAnswers[2],        // Skin type
          skinCondition: allAnswers[3],   // Skin condition
          budget: allAnswers[4],          // Budget
          referrer: typeof document !== 'undefined' ? document.referrer : null,
          completed: true
        };

        const response = await fetch('/api/quiz', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(quizData)
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.error || `HTTP ${response.status}: ${response.statusText}`);
        }

        const result = await response.json();
        if (!result.success) {
          throw new Error(result.error || 'Failed to save quiz answers');
        }

        console.log('Quiz completed and saved successfully:', result.id);
      } catch (error) {
        console.error('Failed to save quiz answers:', error);
        // Continue to results even if save fails - user experience is priority
      }
    }

    // Smooth transition to next question
    setIsTransitioning(true);
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        const nextQuestion = currentQuestion + 1;
        setCurrentQuestion(nextQuestion);
        updateURL(nextQuestion);
      } else {
        // Quiz completed
        setShowResults(true);
        updateURL(0, true);
      }
      setIsTransitioning(false);
    }, 300);
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setIsTransitioning(true);
      setTimeout(() => {
        const prevQuestion = currentQuestion - 1;
        setCurrentQuestion(prevQuestion);
        updateURL(prevQuestion);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const retakeQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setIsTransitioning(false);
    updateURL(0);
  };

  if (showResults) {
    return (
      <div className="font-sans min-h-screen" style={{ fontFamily: 'Arial, sans-serif', background: 'linear-gradient(135deg, #fefaf8 0%, #f8f4f0 100%)' }}>
        {/* Header */}
        <header className="w-full flex items-center justify-center border-b border-gray-200 p-0 m-0" style={{ minHeight: '44px', background: '#e9c7c0' }}>
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

        <Container className="max-w-4xl mx-auto px-4 py-12">
          {/* Results header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-6">
              <span className="text-xl">🎉</span>
              <span className="font-semibold">Quiz voltooid!</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              We hebben 3 foundations gevonden die voor <span className="text-green-600">91%</span> aansluiten op jouw wensen
            </h1>
            
            <p className="text-lg text-gray-600 mb-8">
              Op basis van jouw antwoorden hebben we de perfecte match voor jou gevonden!
            </p>
          </div>

          {/* Foundation recommendations */}
          <div className="space-y-8">
            {foundationRecommendations.map((foundation, index) => (
              <div 
                key={foundation.rank}
                className={`relative rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl ${
                  foundation.rank === 1 
                    ? 'border-4 border-green-500 bg-gradient-to-r from-green-50 to-green-100' 
                    : 'bg-white border border-gray-200'
                }`}
              >
                {foundation.rank === 1 && (
                  <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-1 rounded-bl-lg font-bold text-sm">
                    🏆 PERFECTE MATCH
                  </div>
                )}
                
                <div className="p-8">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Product image */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <Image 
                          src={foundation.image} 
                          alt={foundation.name}
                          width={200}
                          height={250}
                          className="rounded-lg"
                        />
                        {foundation.discount && (
                          <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm">
                            -{foundation.discount}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Product details */}
                    <div className="flex-1 text-center md:text-left">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="bg-gray-900 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                          {foundation.rank}
                        </span>
                        <h3 className="text-2xl font-bold text-gray-900">{foundation.name}</h3>
                        {foundation.rating && (
                          <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-semibold text-sm">
                            ⭐ {foundation.rating}
                          </div>
                        )}
                      </div>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {foundation.description}
                      </p>

                      <div className="space-y-4 mb-6">
                        {/* Features */}
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Voordelen:</h4>
                          <div className="grid md:grid-cols-2 gap-2">
                            {foundation.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <span className="text-green-500 text-lg">✅</span>
                                <span className="text-sm text-gray-700">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Drawbacks for Meroda */}
                        {foundation.drawbacks && (
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Nadelen:</h4>
                            <div className="space-y-2">
                              {foundation.drawbacks.map((drawback, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                  <span className="text-red-500 text-lg">❌</span>
                                  <span className="text-sm text-gray-700">{drawback}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl font-bold text-gray-900">{foundation.price}</span>
                          {foundation.originalPrice && (
                            <span className="text-lg text-gray-500 line-through">{foundation.originalPrice}</span>
                          )}
                        </div>
                        
                        <a 
                          href={foundation.link}
                          target="_blank"
                          rel="noopener noreferrer"

                          className={`inline-block px-8 py-4 rounded-lg font-bold text-center transition-all duration-300 ${
                            foundation.rank === 1
                              ? 'bg-green-600 hover:bg-green-700 text-white transform hover:scale-105'
                              : 'bg-gray-800 hover:bg-gray-900 text-white'
                          }`}
                          style={{ color: 'white !important' }}
                        >
                          <span className="text-white">{foundation.cta}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12 p-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Niet tevreden met je keuze?
            </h3>
            <p className="text-gray-600 mb-6">
              Alle producten komen met 30 dagen geld-terug-garantie!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={retakeQuiz}
                className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg font-semibold transition-colors"
              >
                🔄 Quiz opnieuw doen
              </button>
              <a 
                href="https://maycosmetics.nl/products/may-changing-foundation"
                target="_blank"
                rel="noopener noreferrer"

                className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors"
              >
                🛍️ Direct naar de shop
              </a>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="font-sans min-h-screen" style={{ fontFamily: 'Arial, sans-serif', background: 'linear-gradient(135deg, #fefaf8 0%, #f8f4f0 100%)' }}>
      {/* Header */}
      <header className="w-full flex items-center justify-center border-b border-gray-200 p-0 m-0" style={{ minHeight: '44px', background: '#e9c7c0' }}>
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

      <Container className="max-w-2xl mx-auto px-4 py-12">
        {/* Quiz header */}
        {currentQuestion === 0 && (
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ontdek in 30 seconden welke foundation het beste is voor jouw huid!
            </h1>
            <p className="text-lg text-gray-600">
              Beantwoord slechts {questions.length} snelle vragen en krijg een persoonlijk advies
            </p>
          </div>
        )}

        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Vraag {currentQuestion + 1} van {questions.length}</span>
            <span>{Math.round(progress)}% voltooid</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className={`transition-all duration-300 ${isTransitioning ? 'opacity-0 transform translate-y-8' : 'opacity-100 transform translate-y-0'}`}>
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
              {questions[currentQuestion].question}
            </h2>
            
            {questions[currentQuestion].subtitle && (
              <p className="text-gray-600 mb-8 text-lg">
                {questions[currentQuestion].subtitle}
              </p>
            )}

            {/* Image-based options for skin condition question */}
            {questions[currentQuestion].hasImages ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option.text, option.value)}
                    className="flex flex-col items-center p-4 border-2 border-gray-200 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transform hover:scale-105"
                  >
                    <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={option.image!}
                        alt={option.text}
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-gray-100 w-full text-center">
                      <span className="text-gray-900 font-medium text-sm group-hover:text-green-700">
                        {option.text}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              /* Regular text-based options */
              <div className="space-y-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option.text, option.value)}
                    className="w-full p-4 text-left border-2 border-gray-200 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-900 font-medium group-hover:text-green-700">
                        {option.text}
                      </span>
                      <span className="text-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        →
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <button
              onClick={goBack}
              disabled={currentQuestion === 0}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                currentQuestion === 0
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-800 hover:transform hover:scale-105'
              }`}
            >
              ← Vorige vraag
            </button>

            <div className="text-center">
              <p className="text-sm text-gray-500">
                Klik op een antwoord om door te gaan
              </p>
            </div>

            <div className="w-28" />  {/* Spacer for alignment */}
          </div>
        </div>
      </Container>
    </div>
  );
} 