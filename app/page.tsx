import Hero from "./components/hero";
import KubernetesEngines from "./components/kubernetes-engines";
import Benefits from "./components/benefits";
import Slider from "./components/slider";

function HomePage() {
  return (
    <div>
      <div className="bg-hero-svg bg-no-repeat bg-contain bg-[position:_top_70vh_center] md:bg-[position:_top_500px_center] px-4 md:px-20">
        <Hero />
        <KubernetesEngines />
      </div>
      <div
        className={`bg-[url("/images/bg-lines/blue-center.svg"),_url("/images/bg-lines/red-center.svg"),_url("/images/bg-lines/pink-center.svg")] bg-[position:top_-380px_left_100px,top_right_350px,top_700px_left] bg-[length:auto_70%,auto,auto_80%] bg-no-repeat`}
      >
        <Benefits />
        <Slider />
      </div>
    </div>
  );
}

export default HomePage;
