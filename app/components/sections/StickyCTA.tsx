'use client';

import React from 'react';
import { Container } from '../layout/Container';

interface StickyCTAProps {
  message: React.ReactNode;
  points?: string[];
  link: {
    href: string;
    label: string;
    external?: boolean;
  };
  className?: string;
}

export function StickyCTA({ message, points = [], link, className = '' }: StickyCTAProps) {
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 py-3 z-50 ${className}`}
    >
      <Container className="max-w-[1120px]">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4 sm:gap-8">
            <div className="flex items-center gap-2">
              <span className="text-gray-800 font-medium text-sm sm:text-base">{message}</span>
              <span className="text-amber-400">👉</span>
            </div>
            {points.length > 0 && (
              <div className="flex items-center gap-2 text-gray-600 text-xs sm:text-sm">
                <span>✓</span>
                <span>{points[0]}</span>
              </div>
            )}
          </div>
          <a
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener noreferrer' : undefined}
            className="w-full text-center sm:w-auto bg-[#F4B0B0] text-black px-6 py-3 rounded-full font-medium hover:bg-[#E39D9D] transition-colors"
          >
            {link.label}
          </a>
        </div>
      </Container>
    </div>
  );
} 