export function BackedByResearch() {
  const logos = [
    { name: "Stanford", src: "/StanfordLogo.png" },
    { name: "Harvard", src: "/HarvardBlackWhite.png" },
    { name: "Emory", src: "/EmoryLogo.png" },
  ];

  return (
    <section className="py-10 md:py-14 lg:py-16 border-y border-[#E5E2DB]">
      <div className="container mx-auto px-4 sm:px-6">
        <p className="text-center text-sm sm:text-base text-[#6B6B6B] mb-8 md:mb-10">
          Working with faculty advisors at top universities
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center">
              <img
                src={logo.src}
                alt={logo.name}
                className="h-10 sm:h-12 md:h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
