export default function PressSection() {
  return (
    <section id="press" className="pt-24 pb-32 bg-white relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto scroll-reveal">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
            Press & Media
          </h2>
          <p className="text-stone-600">
            Selected coverage and appearances coming soon...
          </p>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-none">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px]"
        >
          <path
            d="M0,48L40,53.3C80,59,160,69,240,69.3C320,69,400,59,480,58.7C560,59,640,69,720,69.3C800,69,880,59,960,58.7C1040,59,1120,69,1160,74.7L1200,80V120H1160C1120,120,1040,120,960,120C880,120,800,120,720,120C640,120,560,120,480,120C400,120,320,120,240,120C160,120,80,120,40,120H0Z"
            fill="#fafaf9"
          />
        </svg>
      </div>
    </section>
  );
}