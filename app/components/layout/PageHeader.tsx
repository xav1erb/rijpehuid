'use client';

import React from 'react';
import { Container } from './Container';
import { Breadcrumbs, BreadcrumbItem } from '../ui/Breadcrumbs';

interface PageHeaderProps {
  breadcrumbs: BreadcrumbItem[];
  title: React.ReactNode;
  backgroundClassName?: string;
  className?: string;
}

export function PageHeader({
  breadcrumbs,
  title,
  backgroundClassName = 'bg-[#F4B0B0]',
  className = '',
}: PageHeaderProps) {
  return (
    <div className={`w-full ${backgroundClassName} ${className}`}>
      <header className="py-4">
        <Container>
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="font-serif text-4xl text-[#2D2424]">{title}</h1>
        </Container>
      </header>
    </div>
  );
} 