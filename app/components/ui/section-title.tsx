import { FC } from "react";

interface SectionTitleProps {
  title: string;
  description: string;
}

const SectionTitle: FC<SectionTitleProps> = ({ title, description }) => {
  return (
    <>
      <h2 className="text-4xl font-bold">{title}</h2>
      <p className="text-2xl mt-8 mb-20">{description}</p>
    </>
  );
};

export default SectionTitle;
