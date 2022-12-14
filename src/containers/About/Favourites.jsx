import React from "react";
import { ReactComponent as Star } from "../../assets/images/star.svg";
import { ReactComponent as Zigzag } from "../../assets/images/zigzag.svg";
// import CenterImg from "../../assets/images/centerframe.webp";
// import LeftFrame from "../../assets/images/leftframe.webp";
// import RightFrame from "../../assets/images/rightframe.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { motion } from "framer-motion";
import { CenterFrame, LeftFrame, RightFrame } from "../../assets/images";

const Favourites = () => {
  return (
    <div className="md:py-24 py-20 flex justify-center">
      <div className="flex flex-col mx-auto px-6 lg:px-16 item justify-center items-center w-screen max-w-[100rem]">
        <div className="flex flex-col items-center justify-center w-full mb-10">
          <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              easings: ["easeIn", "easeOut"],
            }}>
            <Star className="md:p-0 p-1" />
          </motion.div>
          <motion.div
            className="lg:w-6/12 text-center my-10"
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              easings: ["easeIn", "easeOut"],
            }}>
            <h4 className="custom-font text-white md:text-[26px] text-lg">
              Few of my favorite things...
            </h4>
            <p className="md:text-[18px] text-sm text-[#c4c4c4] leading-loose font-light">
              I enjoy exploring fine dining with loved ones. When I’m not semira
              the explorer, I cuddle up with churned ice cream and binge-watch
              comedy series (my all-time favourite is “Modern Family”). Comedy
              is my friendly reminder never to take life too seriously!
            </p>
          </motion.div>

          <div className="flex md:flex-nowrap flex-wrap md:gap-0 gap-6 w-full 2xl:max-w-7xl xl:max-w-4xl max-w-xl justify-center items-center px-30">
            <div className="flex w-full relative md:pb-[45%] pb-[130%] md:mt-36 mt-0 md:-rotate-[20deg] ">
              <motion.div
                className="absolute flex inset-0 m-auto w-auto h-full"
                whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  easings: ["easeIn", "easeOut"],
                }}>
                <LazyLoadImage
                  alt={LeftFrame}
                  effect="blur"
                  src={LeftFrame} // use normal <img> attributes as props
                  className=" inset-0 translate-x-2 -translate-y-2 w-auto h-full"
                />
              </motion.div>
            </div>
            <div className="flex w-full relative md:pb-[45%] pb-[130%] -z-10">
              <motion.div
                className="absolute flex inset-0 m-auto w-auto h-full"
                whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  easings: ["easeIn", "easeOut"],
                }}>
                <LazyLoadImage
                  alt={CenterFrame}
                  effect="blur"
                  src={CenterFrame} // use normal <img> attributes as props
                  className=" inset-0 translate-x-2 -translate-y-2 w-auto h-full"
                />
              </motion.div>
            </div>
            <div className="flex w-full relative md:pb-[45%] pb-[130%] md:mt-36 mt-0 md:rotate-[22deg]">
              <motion.div
                className="absolute flex inset-0 m-auto w-auto h-full"
                whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  easings: ["easeIn", "easeOut"],
                }}>
                <LazyLoadImage
                  alt={RightFrame}
                  effect="blur"
                  src={RightFrame} // use normal <img> attributes as props
                  className=" inset-0 translate-x-2 -translate-y-2 w-auto h-full"
                />
              </motion.div>
            </div>
          </div>
          <motion.div
            className="px-4"
            whileInView={{ y: 0, opacity: [0, 0, 1] }}
            transition={{
              duration: .5,
              ease: "easeInOut",
              easings: ["easeIn", "easeOut"],
            }}>
            <Zigzag className="xl:p-0 p-1 mt-6" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Favourites;
