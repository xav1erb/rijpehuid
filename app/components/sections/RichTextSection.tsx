'use client';

interface RichTextSectionProps {
  children: React.ReactNode;
  className?: string;
}

export function RichTextSection({ children, className = '' }: RichTextSectionProps) {
  return (
    <section className={`max-w-none text-gray-800 [&>*]:mb-3 [&>*:last-child]:mb-0 ${className}`}>
      {children}
    </section>
  );
} 