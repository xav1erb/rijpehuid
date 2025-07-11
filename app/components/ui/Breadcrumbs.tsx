'use client';

import React from 'react';
import Link from 'next/link';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  separator?: React.ReactNode;
}

export function Breadcrumbs({ items, className = '', separator = '>' }: BreadcrumbsProps) {
  return (
    <nav className={`text-sm text-[#4A3F3F] mb-2 ${className}`} aria-label="Breadcrumb">
      <ol className="list-none m-0 p-0 flex gap-2 flex-wrap">
        {items.map((item, idx) => (
          <React.Fragment key={idx}>
            {idx > 0 && (
              <li className="text-[#4A3F3F]" aria-hidden="true">
                {separator}
              </li>
            )}
            <li>
              {item.href ? (
                <Link href={item.href} className="hover:text-[#2D2424]">
                  {item.label}
                </Link>
              ) : (
                <span className="text-[#2D2424] font-medium">{item.label}</span>
              )}
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
} 