interface WaveDividerProps {
  position?: 'top' | 'bottom';
  fromColor: string;
  toColor: string;
  fromColorDark?: string;
  toColorDark?: string;
  variant?: 1 | 2 | 3 | 4 | 5;
}

export default function WaveDivider({ 
  position = 'bottom', 
  fromColor, 
  toColor,
  fromColorDark,
  toColorDark,
  variant = 1 
}: WaveDividerProps) {
  const isTop = position === 'top';
  
  // Different wave patterns for variety
  const wavePaths = {
    1: "M0,32L48,37.3C96,43,192,53,288,64C384,75,480,85,576,80C672,75,768,53,864,42.7C960,32,1056,32,1152,37.3L1200,42.7V120H1200V120H1152C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120H0Z",
    2: "M0,96L48,90.7C96,85,192,75,288,69.3C384,64,480,64,576,69.3C672,75,768,85,864,90.7C960,96,1056,96,1152,85.3L1200,74.7V120H1200V120H1152C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120H0Z",
    3: "M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,80C672,85,768,75,864,64C960,53,1056,43,1152,42.7L1200,42.7V120H1200V120H1152C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120H0Z",
    4: "M0,90L48,85.3C96,80,192,70,288,64C384,58,480,56,576,58.7C672,61,768,67,864,69.3C960,72,1056,72,1152,69.3L1200,67V120H1152C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120H0Z",
    5: "M0,48L48,53.3C96,59,192,69,288,74.7C384,80,480,80,576,74.7C672,69,768,59,864,58.7C960,59,1056,69,1152,72C1200,75,1200,75,1200,75V120H0Z"
  };

  const pathData = wavePaths[variant];
  
  return (
    <div className={`absolute ${isTop ? '-top-1' : '-bottom-1'} left-0 w-full overflow-hidden leading-none ${isTop ? 'rotate-180' : ''}`}>
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[120px]"
      >
        {/* Light mode wave */}
        <path
          d={pathData}
          fill={toColor}
          className="dark:hidden"
        />
        {/* Dark mode wave */}
        <path
          d={pathData}
          fill={toColorDark || toColor}
          className="hidden dark:block"
        />
      </svg>
    </div>
  );
}