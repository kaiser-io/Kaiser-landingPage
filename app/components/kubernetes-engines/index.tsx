import SectionTitle from "../ui/section-title";
import IconWithTitleList, { IconWithDescription } from "../ui/icon-with-description-list";

const KubernetesEngines = () => {
  const imgSrc = "/images/mini-pics/kubernetes-engines-section";
  const engines: IconWithDescription[] = [
    { imgSrc: `${imgSrc}/kubernetes.png`, title: "kubernetes", sizes: { x: 140, y: 139 } },
    { imgSrc: `${imgSrc}/EKS.png`, title: "EKS", sizes: { x: 139, y: 156 } },
    { imgSrc: `${imgSrc}/GKE.png`, title: "GKE", sizes: { x: 166, y: 149 } },
    { imgSrc: `${imgSrc}/AKS.png`, title: "AKS", sizes: { x: 169, y: 149 } },
  ];
  return (
    <div className="flex flex-col justify-start w-11/12 md:w-10/12 mx-auto mt-16 mb-40 md:my-48">
      <SectionTitle
        title={"Kubernetes engines"}
        description="Manage your kubernetes clusters all in one place"
      />
      <IconWithTitleList iconList={engines} isCard={false} />
    </div>
  );
};

export default KubernetesEngines;
