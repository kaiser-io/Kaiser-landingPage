import Image from "next/image";
import { FC } from "react";

export interface IconWithDescription {
  imgSrc: string;
  title: string;
  sizes?: {
    x: number;
    y: number;
  }
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
  const cardSize = 103
  return (
    <ul
      className={`grid  ${!isCard ? 'grid-cols-2 gap-y-20' : 'grid-flow-col items-start gap-x-2'} md:flex ${
        isJustifyStart ? "justify-start md:gap-32 max-w-4xl" : "justify-between"
      } text-center md:items-center mt-2 w-full mx-auto`}
    >
      {iconList.map((icon) => (
        <li key={icon.title} className="flex flex-col items-center md:gap-8">
          <div className={`relative flex items-center h-[89px] md:h-[110px] ${isCard ? 'w-[45px] md:w-[103px]' : ' w-[85px] md:w-[140px]'}`}>
            <Image
              alt={`${icon.title} engine logo`}
              src={icon.imgSrc}
              width={icon.sizes ? icon.sizes.x : cardSize}
              height={icon.sizes ? icon.sizes.y : cardSize}
            />
          </div>
          <span className={`${isCard ? "md:text-xl" : "text-xl md:text-2xl"} font-bold ${ isCard ? 'mt-1' : 'mt-4' } md:mt-2`}>
            {icon.title}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default IconWithDescriptionList;
