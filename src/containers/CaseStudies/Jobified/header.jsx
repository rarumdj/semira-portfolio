import React from "react";
import { motion } from "framer-motion";
import { JobifiedImg } from "../../../assets/images";

const Header = () => {
  return (
    <section id="home" className="header-bg">
      <div className="pt-20 lg:pb-28 container mx-auto flex flex-col items-center px-6 lg:px-16 w-screen max-w-[100rem]">
        <div className="h-full relative w-full md:mt-48 mt-20 space-y-10">
          <motion.div
          // whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          // transition={{
          //   duration: 1,
          //   ease: "easeInOut",
          //   easings: ["easeIn", "easeOut"],
          // }}
          >
            <p className="md:text-[18px] text-sm text-[#c4c4c4] leading-loose font-light text-center">
              03 - SaaS Design
            </p>
            <h4 className="custom-font text-white md:text-[32px] mb-8 text-lg text-center font-extrabold">
              Jobified
            </h4>

            <img src={JobifiedImg} alt="job" className="w-full" />
            <p className="text-[#C1C2CB] opacity-70 md:text-sm text-xs mt-3">Home page interface</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Header;
