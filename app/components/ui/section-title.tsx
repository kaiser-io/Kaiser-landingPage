import { FC } from "react";

interface SectionTitleProps {
  title: string;
  description: string;
}

const SectionTitle: FC<SectionTitleProps> = ({ title, description }) => {
  return (
    <>
      <h2 className="text-2xl md:text-4xl font-bold">{title}</h2>
      <p className="text-xl md:text-2xl mt-4 md:mt-8 mb-8 md:mb-20">{description}</p>
    </>
  );
};

export default SectionTitle;
