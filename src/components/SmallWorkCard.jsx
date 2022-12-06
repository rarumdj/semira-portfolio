import React from "react";

const SmallWorkCard = ({ title, description }) => {
  return (
    <div className="border-t border-[#676C7A80]/50 py-8">
      <div className="space-y-2">
        <h2 className="text-base text-white custom-font font-medium">
          {title}
        </h2>
        <p className="leading-relaxed text-sm text-[#C4C4C4]">{description}</p>
      </div>
    </div>
  );
};

export default SmallWorkCard;
