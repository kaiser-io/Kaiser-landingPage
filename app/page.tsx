import Hero from "./components/hero";
function HomePage() {
  return (
    <div>
      <div className="bg-hero-svg bg-no-repeat bg-contain bg-bottom px-4 md:px-20">
        <Hero />
        <div className="h-[60vh]"></div>
      </div>
    </div>
  );
}

export default HomePage;
