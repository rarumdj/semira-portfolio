import React from "react";
import BigWorkCard from "../../components/BigWorkCard";
import SmallWorkCard from "../../components/SmallWorkCard";
import { easyLife, banajar, job, nepza, skept } from "../../assets/images";

const WorkList = [
  {
    keywords: "Enterprise Design / Web application",
    title: "NEPZA - OPMS",
    description: " Fostering a seamless tariff operations with a redesign",
    postion: [-100, -50, -0],
    duration: 0.7,
    image: nepza,
  },
  {
    keywords: "UI & Content design / IOS / Landing Page",
    title: "ÉaziLife",
    description: "Automating food scheduling for working professionals",
    postion: [100, 50, 0],
    duration: 1,
    image: easyLife,
  },

  {
    keywords: "User experience design / IOS",
    title: "Sketapp",
    description: "Redefining e - Commerce through reverse auctioning",
    postion: [-100, -50, -0],
    duration: 0.7,
    image: skept,
  },

  {
    keywords: "Product  Management / Web application",
    title: "barnaamaj",
    description: "Building the future of Hajj and Umrah for Muslims globally",
    postion: [100, 50, 0],
    duration: 1,
    image: banajar,
  },

  {
    keywords: "Product design & Management / Web application / Landing page",
    title: "Jobified",
    description: "Creating a safe haven for hiring talents in Africa",
    postion: [-100, -50, -0],
    duration: 0.7,
    image: job,
  },
];

const Works = () => {
  return (
    <div className="md:py-24 py-20 flex justify-center section-bg">
      <div className="flex flex-col mx-auto px-6 lg:px-40 item justify-center w-screen max-w-[100rem]">
        <div className="text-base text-[#C4C4C4] flex md:mb-16 mb-10">
          SELECTED-WORKS <span className="text-xs ml-2 mb-4 text-white">5</span>
        </div>
        <div className="md:grid md:grid-cols-2 lg:gap-28 gap-6 hidden">
          {WorkList.map((item, index) => (
            <BigWorkCard
              description={item.description}
              keywords={item.keywords}
              title={item.title}
              xPostion={item.postion}
              duration={item.duration}
              image={item.image}
              key={index}
            />
          ))}
        </div>

        <div className="md:hidden grid grid-cols-1">
          {WorkList.map((item, index) => (
            <SmallWorkCard
              description={item.description}
              title={item.title}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
