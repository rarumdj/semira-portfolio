import { Icon } from "@iconify/react";
import React from "react";

const Testimonial = () => {
  return (
    <div className="md:py-24 py-20 flex justify-center">
      <div className="flex flex-col mx-auto px-6 lg:px-16 item justify-center items-center w-screen max-w-[100rem]">
        <div className="max-w-4xl w-full flex flex-col items-center">
          <h1 className="custom-font md:text-4xl text-xl text-white mb-10">
            WHAT PEOPLE ARE SAYING
          </h1>
          <div className="!text-[#C4C4C4] md:text-[18px] text-sm !leading-loose font-normal text-center">
            Semira has been such a joy to work with. She has been responsible
            for a lot of the growth that we have experienced on the design team
            at iRecharge. She possesses the innate ability to improve processes
            and also ensures that she follows through on tasks to see that they
            are executed in an excellent manner. Her radiant personality and
            ability to interact seamlessly with her colleagues is worth
            emulating. I would hire her ten times over if I had the chance.
          </div>
          <div className="w-full relative flex justify-center mt-16">
            <div className="text-center text-white flex flex-col items-center">
              <h3 className="custom-font mb-2 md:text-[20px] text-sm">
                Chief Tobenna Nwokike
              </h3>
              <p className="mb-5 md:text-[18px] text-xs md:w-full w-8/12">
                Head of Technology, iRecharge tech - innovation
              </p>
              <span className="flex gap-2 items-center">
                <div className="w-5 h-1 rounded-full bg-white" />
                <div className="w-2 h-2 rounded-full bg-[#676C7A80]/50" />
                <div className="w-2 h-2 rounded-full bg-[#676C7A80]/50" />
                <div className="w-2 h-2 rounded-full bg-[#676C7A80]/50" />
              </span>
            </div>
            <div className="flex md:w-16 md:h-16 w-10 h-10 absolute left-0 border border-white rounded-full hover:bg-[#FEA5A5] transition-all ease-in-out duration-200 cursor-pointer">
              <Icon
                icon="ic:outline-arrow-back-ios"
                className="text-white m-auto"
              />
            </div>
            <div className="flex md:w-16 md:h-16 w-10 h-10 absolute right-0  border border-white rounded-full hover:bg-[#FEA5A5] transition-all ease-in-out duration-200 cursor-pointer">
              <Icon
                icon="ic:outline-arrow-forward-ios"
                className="text-white m-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
