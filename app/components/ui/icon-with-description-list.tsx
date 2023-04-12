import Image from "next/image";
import { FC } from "react";

export interface IconWithDescription {
  imgSrc: string;
  title: string;
}

interface IconWithDescriptionListProps {
  iconList: IconWithDescription[];
  isCard?: boolean;
  isJustifyStart?: boolean;
}

const IconWithDescriptionList: FC<IconWithDescriptionListProps> = ({
  iconList,
  isCard = true,
  isJustifyStart = false,
}) => {
  const size = isCard ? 103 : 140;
  return (
    <ul
      className={`flex ${
        isJustifyStart ? "justify-start gap-32" : "justify-between"
      } text-center items-center mt-2 w-full max-w-4xl mx-auto`}
    >
      {iconList.map((icon) => (
        <li key={icon.title} className="flex flex-col items-center gap-8">
          <div className={`flex items-center h-[${size}px] w-[${size}px]`}>
            <Image
              alt={`${icon.title} engine logo`}
              src={icon.imgSrc}
              width={size}
              height={size}
            />
          </div>
          <span className={`${isCard ? "text-xl" : "text-2xl"} font-bold`}>
            {icon.title}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default IconWithDescriptionList;
