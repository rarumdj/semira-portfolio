import React from "react";

const BigWorkCard = ({ title, keywords, description }) => {
  return (
    <div className="rounded-lg">
      <div className="border border-[#676C7A80]/50 md:h-[575px] h-[400px] rounded-xl w-full bg-gradient-to-r from-[#35001226] backdrop-blur-md  mb-6 flex">
        {/* <img className=" w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="content" /> */}
      </div>
      <div className="space-y-3">
        <h3 className="text-[#C4C4C499]/60 text-xs ">{keywords}</h3>
        <h2 className="text-base text-white custom-font font-medium">
          {title}
        </h2>
        <p className="leading-relaxed text-sm text-[#C4C4C4]">{description}</p>
      </div>
    </div>
  );
};

export default BigWorkCard;
