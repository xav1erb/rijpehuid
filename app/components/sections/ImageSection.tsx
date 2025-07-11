'use client';

import Image from 'next/image';

interface ImageSectionProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  ratio?: string; // e.g. '4/3'
  className?: string;
}

export function ImageSection({
  src,
  alt,
  width = 900,
  height = 550,
  ratio,
  className = '',
}: ImageSectionProps) {
  return (
    <figure className={`mb-4 ${className}`}>
      {ratio ? (
        <div className={`aspect-[${ratio}] relative max-w-[700px] mx-auto`}>
          <Image src={src} alt={alt} fill className="rounded-lg object-cover" />
        </div>
      ) : (
        <Image src={src} alt={alt} width={width} height={height} className="rounded-lg w-full h-auto object-cover max-w-[700px] mx-auto" />
      )}
    </figure>
  );
} 