interface SectionHeaderProps {
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  className?: string;
}

export function SectionHeader({ 
  title, 
  description, 
  align = 'center',
  maxWidth = '3xl',
  className = '' 
}: SectionHeaderProps) {
  const maxWidthClasses = {
    'sm': 'max-w-sm',
    'md': 'max-w-md',
    'lg': 'max-w-lg',
    'xl': 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl'
  };

  const alignClasses = {
    'left': 'text-left',
    'center': 'text-center',
    'right': 'text-right'
  };

  return (
    <div className={`${maxWidthClasses[maxWidth]} mx-auto mb-16 scroll-reveal ${alignClasses[align]} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4 transition-colors">
        {title}
      </h2>
      {description && (
        <p className="text-stone-600 dark:text-stone-300 transition-colors">
          {description}
        </p>
      )}
    </div>
  );
}
