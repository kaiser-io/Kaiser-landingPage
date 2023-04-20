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
      className={`flex flex-col ${
        cardPosition === "center" ? "md:flex-row-reverse" : "md:flex-row"
      } shadow-md h-auto md:h-[600px] mb-40 md:mb-[320px]`}
    >
      <div className="relative bg-kaiser-background-gradient w-full md:w-5/12 h-[84px] md:h-full">
        <div
          className={`absolute ${
            cardPosition === "top"
              ? "-top-16 md:-top-20"
              : cardPosition === "center"
              ? "-bottom-11 md:-bottom-4"
              : "top-[60%] md:top-1/2 -translate-y-1/2"
          } ${
            cardPosition === "center" ? "-right-8 md:-right-20" : "-left-8 md:-left-20"
          } -right-20 w-40 md:w-[500px]`}
        >
          <Image
            alt="svg shape"
            src={svgShapeSrc}
            width={svgShapeWidth}
            height={svgShapeHeight}
          />
        </div>
      </div>
      <div className="bg-card-black px-6 pt-12 pb-6 md:p-12 w-full md:w-10/12">
        <SectionTitle title={title} description={description} />
        <div className='px-4 md:px-0'>
          <IconWithDescriptionList
            iconList={iconWithDescription}
            isJustifyStart={cardPosition === "bottom"}
          />
        </div>
        {footerText ? (
          <p className="text-light-gray mt-12">{footerText}</p>
        ) : null}
      </div>
    </div>
  );
};

export default BenefitCard;
