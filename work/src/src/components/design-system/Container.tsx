import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export function Container({ 
  children, 
  className = '',
  size = 'lg'
}: ContainerProps) {
  const sizeClasses = {
    'sm': 'max-w-3xl',
    'md': 'max-w-4xl',
    'lg': 'max-w-6xl',
    'xl': 'max-w-7xl',
    'full': 'max-w-full'
  };

  return (
    <div className={`container mx-auto px-6 md:px-12 ${sizeClasses[size]} ${className}`}>
      {children}
    </div>
  );
}
