import Image from "next/image";

const Hero = () => {
  return (
    <div className="h-[70vh] flex my-12">
      <div className="">
        <Image
          alt="kaiser logo"
          width={68.44}
          height={77}
          src={"/kaiser-logo.svg"}
          className="mb-3"
        />
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-text-gradient-start to-text-gradient-end inline-block text-transparent bg-clip-text mt-16">
          kaiser
        </h1>
        <h3 className="py-6 text-3xl">you private cloud agent</h3>
        <p className="max-w-[31.375rem]">
          An all-in-one integrated system that can assist you with your cloud
          clusters management. Kaiser is based on a universal approach so that
          you can mange your deployment environments regardless the cloud
          provider.
        </p>
        <button className="w-[175px] py-[13.5px] rounded-lg bg-gray mt-[35px]">
          learn more
        </button>
      </div>
      <div className="grow flex justify-end items-center">
        <div className="relative w-10/12 3xl:w-9/12 h-full">
          <Image
            alt="kaiser screen shot"
            src={"/images/screen-shots/selected-service.png"}
            width={975}
            height={650}
            className="absolute -top-[3rem] 3xl:-top-16 -right-20 rounded-3xl scale-[0.8] blur-sm shadow-lg"
          />
          <Image
            alt="kaiser screen shot"
            src={"/images/screen-shots/selected-service-2.png"}
            width={975}
            height={650}
            className="absolute -top-[2rem] 3xl:-top-12 -right-8 rounded-3xl scale-[0.83] blur-sm shadow-lg"
          />
          <Image
            alt="kaiser screen shot"
            src={"/images/screen-shots/nodes-settings.png"}
            width={975}
            height={650}
            className="absolute -top-8 right-8 rounded-3xl scale-[0.9] blur-[2px] shadow-lg"
          />
          <Image
            alt="kaiser screen shot"
            src={"/images/screen-shots/cluster-details.png"}
            width={975}
            height={650}
            className="absolute right-24 3xl:right-28  rounded-3xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
