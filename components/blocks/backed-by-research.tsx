export function BackedByResearch() {
  const logos = [
    { name: "Stanford", src: "/StanfordLogo.png" },
    { name: "Harvard", src: "/HarvardBlackWhite.png" },
    { name: "Emory", src: "/EmoryLogo.png" },
  ];

  return (
    <section className="py-12 md:py-16 border-y border-border/50">
      <div className="container mx-auto px-6">
        <p className="text-center text-base text-muted-foreground mb-10">
          Working with faculty advisors at top universities
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center">
              <img
                src={logo.src}
                alt={logo.name}
                className="h-12 md:h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
