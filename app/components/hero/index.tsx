import Image from "next/image";

const Hero = () => {
  return (
    <div className="h-[calc(100vh-4rem)] sm:h-[70vh] relative flex flex-col md:flex-row md:my-12">
      <div className="px-4 md:px-0">
        <Image
          alt="kaiser logo"
          width={68.44}
          height={77}
          src={"/kaiser-logo.svg"}
          className="hidden md:block mb-3"
        />
        <h1 className="md:text-6xl text-4xl font-extrabold bg-gradient-to-r from-text-gradient-start to-text-gradient-end inline-block text-transparent bg-clip-text mt-6 md:mt-16">
          kaiser
        </h1>
        <h3 className="md:py-6 py-1 md:text-3xl text-xl">you private cloud agent</h3>
        <p className="max-w-[31.375rem]">
          An all-in-one integrated system that can assist you with your cloud
          clusters management. Kaiser is based on a universal approach so that
          you can mange your deployment environments regardless the cloud
          provider.
        </p>
        <button className="w-[7rem] md:w-[175px] py-[.5rem] md:py-[13.5px] rounded-lg bg-gray mt-[1.2rem] md:mt-[35px]">
          learn more
        </button>
      </div>
      <div className="grow flex justify-end md:mt-0 mt-16 translate-x-20 md:translate-x-0 items-center  w-full md:w-auto md:h-auto">
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
