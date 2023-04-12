import Image from "next/image";

const KubernetesEngines = () => {
  const engines = ["kubernetes", "EKS", "GKE", "AKS"];
  return (
    <div className="flex flex-col justify-start w-10/12 mx-auto my-32">
      <h2 className="text-4xl font-bold">Kubernetes engines</h2>
      <p className="text-2xl mt-8 mb-20">
        Manage your kubernetes clusters all in one place
      </p>
      <ul className="flex justify-between items-center mt-2 w-full">
        {engines.map((engine) => (
          <li key={engine} className="flex flex-col items-center gap-8 h-full">
            <Image
              alt={`${engine} engine logo`}
              src={`/images/mini-pics/kubernetes-engines-section/${engine}.png`}
              width={140}
              height={139}
              className="grow h-[139px] w-[140px]"
            />
            <p className="text-2xl font-bold">{engine}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KubernetesEngines;
