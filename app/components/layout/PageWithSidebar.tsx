'use client';

import React from 'react';

export function PageWithSidebar({
  main,
  sidebar,
}: {
  main: React.ReactNode;
  sidebar: React.ReactNode;
}) {
  return (
    <div className="max-w-[1400px] mx-auto px-6 flex relative">
      <div className="flex-1 lg:max-w-[70%] pr-0 lg:pr-8">{main}</div>
      <aside className="hidden lg:block w-[380px]">{sidebar}</aside>
    </div>
  );
} 