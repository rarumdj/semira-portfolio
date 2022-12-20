import React from "react";
import { motion } from "framer-motion";
const SmallWorkCard = ({ title, description }) => {
  return (
    <motion.div
      className="border-t border-[#676C7A80]/50 py-8"
      // whileInView={{ y: [100, 0], opacity: [0, 1] }}
      // transition={{
      //   duration: 1.2,
      //   ease: "easeInOut",
      //   easings: ["easeIn", "easeOut"],
      // }}
      >
      <div className="space-y-2">
        <h2 className="text-base text-white custom-font font-medium">
          {title}
        </h2>
        <p className="leading-relaxed text-sm text-[#C4C4C4] font-light">{description}</p>
      </div>
    </motion.div>
  );
};

export default SmallWorkCard;
