import Hero from "./components/hero";
import KubernetesEngines from "./components/kubernetesEngines";
function HomePage() {
  return (
    <div>
      <div className="bg-hero-svg bg-no-repeat bg-contain bg-bottom px-4 md:px-20">
        <Hero />
        <KubernetesEngines />
      </div>
    </div>
  );
}

export default HomePage;
