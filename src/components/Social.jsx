import React from "react";
import SocialCard from "./SocialCard";
import { ReactComponent as Hello } from "../assets/images/Hello.svg";
import { motion } from "framer-motion";

const Social = () => {
  return (
    <div className="md:py-24 py-20 flex justify-center">
      <motion.div
        className="flex flex-col mx-auto px-6 lg:px-40 item justify-center items-center w-screen max-w-[100rem]"
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          easings: ["easeIn", "easeOut"],
        }}>
        <div className="flex items-center w-full mb-10">
          <h1 className="custom-font md:text-[24px] md:w-fit  md:mr-4 font-extrabold text-white">
          Say Hi on my little online corners
          </h1>
          <span>
            <Hello className="md:p-0 p-1" />
          </span>
        </div>
        <div className="w-full grid md:grid-cols-3 lg:gap-12 gap-6">
          <SocialCard
            social="Instagram"
            title="My Digital Diary"
            link="https://www.instagram.com/semira.yesufu"
          />
          <SocialCard
            social="Medium"
            title="My Digital Diary"
            link="https://www.medium.com/semirayesufu"
          />
          <SocialCard
            social="Linkedin"
            title="Work experiences"
            link="https://www.linkedin.com/in/semirayesufu"
          />
          <SocialCard
            social="Twitter"
            title="Random thoughts"
            link="https://www.twitter.com/wokehijabi"
          />
          <SocialCard
            social="Dribbble"
            title="Visual  and social media designs"
            link="https://www.dribbble.com/ux_semira"
          />
          <SocialCard
            social="Email"
            title="Mail for speaking and design services"
            link="mailto:ysemiraefe@gmail.com"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Social;
