import React from "react";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const BigWorkCard = ({
  title,
  keywords,
  description,
  xPostion,
  duration,
  image,
}) => {
  // x: [-100, -50, -0]
  return (
    <motion.div
      className="rounded-lg"
      whileInView={{ x: xPostion, y: [100, 0], opacity: [0, 1] }}
      transition={{
        duration: duration,
        ease: "easeInOut",
        easings: ["easeIn", "easeOut"],
      }}>
      <div className="hover:bg-[#676C7A80]/10 transition-all ease-in-out duration-500 cursor-pointer border border-[#676C7A80]/50 md:h-[575px] h-[400px] rounded-xl overflow-hidden w-full bg-gradient-to-r from-[#35001226] backdrop-blur-md  mb-6 flex">
        <LazyLoadImage
          alt={image}
          effect="blur"
          src={image} // use normal <img> attributes as props
          className="w-full object-cover object-center"
        />
        {/* <img className=" w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="content" /> */}
      </div>
      <div className="">
        <h3 className="text-[#C4C4C499]/60 md:text-[16px] text-xs mb-3 font-light">
          {keywords}
        </h3>
        <h2 className="md:text-[18px] text:base text-white custom-font font-medium mb-2">
          {title}
        </h2>
        <div className="md:text-[18px] text-sm text-[#C4C4C4] font-light">
          {description}
        </div>
      </div>
    </motion.div>
  );
};

export default BigWorkCard;
