import Image from "next/image";
import React, { FC } from "react";
import SectionTitle from "../ui/section-title";
import type { IconWithDescription } from "../ui/icon-with-description-list";
import IconWithDescriptionList from "../ui/icon-with-description-list";

interface BenefitCardProps {
  title: string;
  description: string;
  iconWithDescription: IconWithDescription[];
  footerText?: string;
  svgShapeSrc: string;
  svgShapeWidth: number;
  svgShapeHeight: number;
  cardPosition: "top" | "center" | "bottom";
}

const BenefitCard: FC<BenefitCardProps> = ({
  title,
  description,
  iconWithDescription,
  footerText,
  svgShapeSrc,
  svgShapeHeight,
  svgShapeWidth,
  cardPosition,
}) => {
  return (
    <div
      className={`${
        cardPosition === "center" ? "flex flex-row-reverse" : "flex"
      } shadow-md h-[600px] mb-[320px]`}
    >
      <div className="relative bg-kaiser-background-gradient w-5/12 h-full">
        <div
          className={`absolute ${
            cardPosition === "top"
              ? "-top-20"
              : cardPosition === "center"
              ? "-bottom-4"
              : "top-1/2 -translate-y-1/2"
          } ${
            cardPosition === "center" ? "-right-20" : "-left-20"
          } -right-20 w-[500px]`}
        >
          <Image
            alt="svg shape"
            src={svgShapeSrc}
            width={svgShapeWidth}
            height={svgShapeHeight}
          />
        </div>
      </div>
      <div className="bg-card-black p-12 w-10/12">
        <SectionTitle title={title} description={description} />
        <IconWithDescriptionList
          iconList={iconWithDescription}
          isJustifyStart={cardPosition === "bottom"}
        />
        {footerText ? (
          <p className="text-light-gray mt-12">{footerText}</p>
        ) : null}
      </div>
    </div>
  );
};

export default BenefitCard;
