'use client';

import Image from 'next/image';

type Item = { src: string; alt: string };

interface ImageGridProps {
  items: Item[]; // length 2 or 3
  columns?: 1 | 2 | 3;
  className?: string;
  ratio?: string; // aspect ratio for each
}

export function ImageGrid({ items, columns = 2, className = '', ratio = '4/5' }: ImageGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-4 mb-8 ${className}`}>
      {items.map(({ src, alt }, idx) => (
        <div key={idx} className={`aspect-[${ratio}] relative`}>
          <Image src={src} alt={alt} fill className="rounded-lg object-cover" />
        </div>
      ))}
    </div>
  );
} 