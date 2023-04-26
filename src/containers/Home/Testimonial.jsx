import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import React, { useState } from "react";

import SwiperCore, {
  Autoplay,
  Controller,
  Navigation,
  Pagination,
} from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

const Testi = [
  {
    name: "Chief Tobenna Nwokike",
    org: `Head of Technology, IST & iRecharge Tech innovation`,
    story: `Semira has been such a joy to work with. She has been responsible for a lot of the growth that we have experienced on the design team at iRecharge. She possesses the innate ability to improve processes and also ensures that she follows through on tasks to see that they are executed in an excellent manner. Her radiant personality and ability to interact seamlessly with her colleagues is worth emulating. I would hire her ten times over if I had the chance.
    `,
  },
  {
    name: "Teslim Alabi",
    org: `Product Design Lead @Netflix, Founder @Leadsbydesign`,
    story: `Semira is one of the most determined and driven designers I’ve had the pleasure of working with. She is smart, highly skilled and incredibly humble. She will be a great addition to any team.`,
  },
  {
    name: "Olorunfemi John",
    org: `Product design lead, iRecharge Tech - innovation`,
    story: `Semira Yesufu possesses a solid knowledge of UX design thinking processes. She is an empathic person who always puts the user front and center in everything she does. With very good communication and listening skill. Semira is an excellent problem solver and an amazing teammate. 
    I have had the privilege to work with Semira as a team and I must say, she is an incredible asset to any organization.`,
  },
  {
    name: "Mrs Mercy Akachukwu Fred - Ekhose",
    org: `Head of Operation, Infostrategy Technology & iRecharge Tech innovation`,
    story: `Semira is talented in UX and UI designs and more important with a right attitude for the job. Her Professionalism and ethic to work is very commendable.
    With Semira you can trust the final deliverables of her work.
    `,
  },
];

const Testimonial = () => {
  const [controlledSwiper, setControlledSwiper] = useState(0);
  SwiperCore.use([Autoplay]);
  const params = {
    loop: true,
    modules: [Pagination, Controller, Navigation],
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".image-swiper-button-next",
      prevEl: ".image-swiper-button-prev",
      disabledClass: "swiper-button-disabled",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "bullets",
    },
  };

  return (
    <div className="md:py-24 py-20 flex justify-center">
      <div className="flex flex-col mx-auto px-6 lg:px-16 item justify-center items-center w-screen max-w-[100rem]">
        <motion.div
          className="max-w-4xl w-full flex flex-col items-center"
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            easings: ["easeIn", "easeOut"],
          }}>
          <h1 className="custom-font md:text-4xl text-xl text-white mb-10 font-extrabold">
          What people are saying
          </h1>
          <Swiper
            {...params}
            controller={{ control: controlledSwiper }}
            onSlideChange={(e) => setControlledSwiper(e.realIndex)}>
            {Testi.map((items, i) => (
              <SwiperSlide key={i}>
                <div className="!text-[#C4C4C4] md:text-[18px] text-sm !leading-loose text-center font-light">
                  {items.story}
                </div>
                <div className="w-full relative flex justify-center mt-16">
                  <div className="text-center text-white flex flex-col items-center">
                    <h3 className="custom-font mb-2 md:text-[20px] text-sm font-extrabold">
                      {items.name}
                    </h3>
                    <p className="mb-5 md:text-[18px] text-xs md:w-full w-8/12">
                      {items.org}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="w-full relative flex justify-center z-10">
            <span className="flex gap-2 items-center mt-1">
              <div className="swiper-pagination" />
              {/* <div className="w-5 h-1 rounded-full bg-white" />
              <div className="w-2 h-2 rounded-full bg-[#676C7A80]/50" />
              <div className="w-2 h-2 rounded-full bg-[#676C7A80]/50" />
              <div className="w-2 h-2 rounded-full bg-[#676C7A80]/50" /> */}
            </span>
            <div className="image-swiper-button-prev flex md:w-16 md:h-16 w-10 h-10 bottom-0 absolute left-0 border border-white rounded-full hover:bg-[#FEA5A5] transition-all ease-in-out duration-200 cursor-pointer">
              <Icon
                icon="ic:outline-arrow-back-ios"
                className="text-white m-auto"
              />
            </div>
            <div className="image-swiper-button-next flex md:w-16 md:h-16 w-10 h-10 bottom-0  absolute right-0  border border-white rounded-full hover:bg-[#FEA5A5] transition-all ease-in-out duration-200 cursor-pointer">
              <Icon
                icon="ic:outline-arrow-forward-ios"
                className="text-white m-auto"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonial;
