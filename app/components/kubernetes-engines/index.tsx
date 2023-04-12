import SectionTitle from "../ui/section-title";
import IconWithTitleList from "../ui/icon-with-description-list";

const KubernetesEngines = () => {
  const imgSrc = "/images/mini-pics/kubernetes-engines-section";
  const engines = [
    { imgSrc: `${imgSrc}/kubernetes.png`, title: "kubernetes" },
    { imgSrc: `${imgSrc}/EKS.png`, title: "EKS" },
    { imgSrc: `${imgSrc}/GKE.png`, title: "GKE" },
    { imgSrc: `${imgSrc}/AKS.png`, title: "AKS" },
  ];
  return (
    <div className="flex flex-col justify-start w-10/12 mx-auto my-48">
      <SectionTitle
        title={"Kubernetes engines"}
        description="Manage your kubernetes clusters all in one place"
      />
      <IconWithTitleList iconList={engines} isCard={false} />
    </div>
  );
};

export default KubernetesEngines;
