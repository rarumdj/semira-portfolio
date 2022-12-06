import React from "react";
import { ReactComponent as Star } from "../../assets/images/star.svg";
import { ReactComponent as Zigzag } from "../../assets/images/zigzag.svg";
import CenterImg from "../../assets/images/centerframe.webp";
import LeftFrame from "../../assets/images/leftframe.webp";
import RightFrame from "../../assets/images/rightframe.webp";

const Favourites = () => {
  return (
    <div className="md:py-24 py-20 flex justify-center">
      <div className="flex flex-col mx-auto px-6 lg:px-16 item justify-center items-center w-screen max-w-[100rem]">
        <div className="flex flex-col items-center justify-center w-full mb-10">
          <Star className="md:p-0 p-1" />
          <div className="lg:w-6/12 text-center my-10">
            <h4 className="custom-font text-white md:text-2xl text-lg">
              Few of my favorite things...
            </h4>
            <p className="md:text-base text-sm text-white leading-relaxed">
              I enjoy exploring fine dining with loved ones. When I’m not semira
              the explorer, I cuddle up with churned ice cream and binge-watch
              comedy series (my all-time favourite is “Modern Family”). Comedy
              is my friendly reminder never to take life too seriously!
            </p>
          </div>

          <div className="flex md:flex-nowrap flex-wrap md:gap-0 gap-6 w-full 2xl:max-w-7xl xl:max-w-4xl max-w-xl justify-center items-center px-30">
            <div className="flex w-full relative md:pb-[45%] pb-[130%] md:mt-36 mt-0 md:-rotate-[20deg] ">
              <div className="absolute inset-0 m-auto w-auto h-full">
                <img
                  src={LeftFrame}
                  alt="img-about"
                  className="absolute inset-0 translate-x-2 -translate-y-2 w-auto h-full"
                />
              </div>
            </div>
            <div className="flex w-full relative md:pb-[45%] pb-[130%] -z-10 ">
              <div className="absolute inset-0 m-auto w-auto h-full">
                <img
                  src={CenterImg}
                  alt="img-about"
                  className="absolute inset-0 translate-x-2 -translate-y-2 w-auto h-full"
                />
              </div>
            </div>
            <div className="flex w-full relative md:pb-[45%] pb-[130%] md:mt-36 mt-0 md:rotate-[22deg]">
              <div className="absolute inset-0 m-auto w-auto h-full">
                <img
                  src={RightFrame}
                  alt="img-about"
                  className="absolute inset-0 translate-x-2 -translate-y-2 w-auto h-full"
                />
              </div>
            </div>
          </div>
          <Zigzag className="xl:p-0 p-1 mt-6" />

        </div>
      </div>
    </div>
  );
};

export default Favourites;
