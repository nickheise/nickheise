export default function IBMLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* IBM iconic striped logo */}
      <g fill="currentColor">
        {/* I */}
        <rect x="20" y="15" width="20" height="4" />
        <rect x="20" y="21" width="20" height="4" />
        <rect x="20" y="27" width="20" height="4" />
        <rect x="20" y="33" width="20" height="4" />
        <rect x="20" y="39" width="20" height="4" />
        
        {/* B - Top */}
        <rect x="50" y="15" width="35" height="4" />
        <rect x="50" y="21" width="8" height="4" />
        <rect x="72" y="21" width="13" height="4" />
        <rect x="50" y="27" width="35" height="4" />
        
        {/* B - Bottom */}
        <rect x="50" y="33" width="35" height="4" />
        <rect x="50" y="39" width="8" height="4" />
        <rect x="72" y="39" width="13" height="4" />
        
        {/* M - Left part */}
        <rect x="95" y="15" width="20" height="4" />
        <rect x="95" y="21" width="8" height="4" />
        <rect x="107" y="21" width="8" height="4" />
        <rect x="95" y="27" width="8" height="4" />
        <rect x="107" y="27" width="8" height="4" />
        <rect x="95" y="33" width="8" height="4" />
        <rect x="107" y="33" width="8" height="4" />
        <rect x="95" y="39" width="8" height="4" />
        <rect x="107" y="39" width="8" height="4" />
        
        {/* M - Right part */}
        <rect x="125" y="15" width="20" height="4" />
        <rect x="125" y="21" width="8" height="4" />
        <rect x="137" y="21" width="8" height="4" />
        <rect x="125" y="27" width="8" height="4" />
        <rect x="137" y="27" width="8" height="4" />
        <rect x="125" y="33" width="8" height="4" />
        <rect x="137" y="33" width="8" height="4" />
        <rect x="125" y="39" width="8" height="4" />
        <rect x="137" y="39" width="8" height="4" />
        
        {/* Connecting elements for M */}
        <rect x="115" y="15" width="10" height="4" />
        <rect x="117" y="21" width="6" height="4" />
        <rect x="117" y="27" width="6" height="4" />
      </g>
    </svg>
  );
}
