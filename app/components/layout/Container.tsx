import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export function Container({
  children,
  className = '',
  fullWidth = false,
}: ContainerProps) {
  const baseClasses = fullWidth ? '' : 'max-w-4xl mx-auto px-6';
  
  return (
    <div className={`${baseClasses} ${className}`}>
      {children}
    </div>
  );
} 