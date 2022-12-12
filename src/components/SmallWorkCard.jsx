import React from "react";
import { motion } from "framer-motion";
const SmallWorkCard = ({ title, description }) => {
  return (
    <motion.div
      className="border-t border-[#676C7A80]/50 py-8"
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, ease: "easeInOut" }}>
      <div className="space-y-2">
        <h2 className="text-base text-white custom-font font-medium">
          {title}
        </h2>
        <p className="leading-relaxed text-sm text-[#C4C4C4]">{description}</p>
      </div>
    </motion.div>
  );
};

export default SmallWorkCard;
