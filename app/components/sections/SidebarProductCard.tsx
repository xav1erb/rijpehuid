'use client';

import Image from 'next/image';

interface SidebarProductCardProps {
  imageSrc: string;
  title: string;
  rating?: number; // e.g. 4.8
  reviews?: number; // 5800
  link: { href: string; label: string; external?: boolean };
  bullets?: string[];
}

export function SidebarProductCard({
  imageSrc,
  title,
  rating = 4.8,
  reviews = 5800,
  link,
  bullets = ['Zolang de voorraad strekt', '30 dagen garantie'],
}: SidebarProductCardProps) {
  return (
    <div className="sticky top-6">
      <div className="bg-white rounded-2xl shadow-md">
        <div className="p-8">
          <h2 className="font-serif text-[32px] leading-tight mb-4">{title}</h2>

          <div className="mb-4">
            <h3 className="text-2xl font-medium mb-2">Aangeraden:</h3>
            <div className="flex justify-center items-center gap-1 mb-1">
              <span className="text-[#4CAF50] text-2xl">★★★★★</span>
            </div>
            <p className="text-center text-[15px] text-gray-700">
              {rating.toFixed(1)} | {reviews.toLocaleString('nl-NL')}+ Reviews
            </p>
          </div>

          <div className="relative w-full aspect-[4/3] mb-6">
            <Image
              src={imageSrc}
              alt="Product"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          <div className="text-center mb-8">
            <div className="font-serif text-[42px] tracking-wider text-[#394149] mb-6">
              MAY.
            </div>
            <div className="space-y-2 mb-8">
              <em className="text-xl text-[#394149] font-medium italic block">
                Changing Foundation
              </em>
              <h4 className="text-2xl font-medium text-center">
                Foundation die zó slim
                <br />
                zich aanpast aan
                <br />
                jouw huidskleur.
              </h4>
            </div>
            <p className="text-[#4A5662] text-center leading-relaxed mb-6">
              CI 77891 zorgt voor de
              <br />
              kleurverandering, terwijl
              <br />
              Centella Asiatica je huid
              <br />
              kalmeert en herstelt.
            </p>
            <div className="bg-[#FDF3F3] rounded-xl p-6 text-center">
              <p className="text-[#4A5662] text-lg mb-6">
                GLOW SALE: Ontvang tot 40% korting én gratis verzending!
              </p>
              <a
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="block w-full bg-[#F4B0B0] text-black text-center py-3.5 rounded-xl font-medium hover:bg-[#E39D9D] transition-colors mb-6"
              >
                {link.label}
              </a>
              <div className="space-y-3 text-[#4A5662] text-sm">
                {bullets.map((b, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span>✓</span>
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 