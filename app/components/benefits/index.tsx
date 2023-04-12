import React from "react";
import BenefitCard from "./benefit-card";
import {
  deployEasily,
  networkComplexity,
  storageDisks,
} from "./cards-icon-list-data";

const Benefits = () => {
  return (
    <div className={`px-4 md:px-20`}>
      <BenefitCard
        title={"Deploy easily with few clicks"}
        description={
          "KAISER hides the deployment complexity and deploys transparently"
        }
        footerText="Kaiser make a new abstraction level
        to create and manage your kubernetes clusters"
        iconWithDescription={deployEasily}
        svgShapeSrc={"/images/mini-pics/boxes/deploy-easily/deploy-shape.png"}
        svgShapeWidth={785}
        svgShapeHeight={785}
        cardPosition="top"
      />
      <BenefitCard
        title={"Get rid of network complexity"}
        description={
          "KAISER takes care of your DNS, load balancer, service discovery, network rules,...etc."
        }
        iconWithDescription={networkComplexity}
        svgShapeSrc={
          "/images/mini-pics/boxes/network-complexity/network-shape.png"
        }
        svgShapeWidth={765}
        svgShapeHeight={765}
        cardPosition="center"
      />
      <BenefitCard
        title={"Storage disks"}
        description={
          "KAISER takes care of your storage devices and mange them properly"
        }
        iconWithDescription={storageDisks}
        svgShapeSrc={"/images/mini-pics/boxes/storage-disks/storage-shape.png"}
        svgShapeWidth={747}
        svgShapeHeight={747}
        cardPosition="bottom"
      />
    </div>
  );
};

export default Benefits;
