import { motion } from "framer-motion";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { ReactComponent as Highlight } from "../../assets/images/highlight.svg";
import semira from "../../assets/images/semira.png";

const Hero = () => {
  const transition = { duration: 4, yoyo: Infinity, ease: "easeInOut" };

  return (
    <section id="home" className="header-bg ">
      <div className="pt-20 2xl:h-[1068px] xl:h-[980px] lg:h-screen  container mx-auto flex flex-col items-center w-full px-8 ">
        <div className="flex flex-col items-center h-full relative w-full">
          <h1 className="text-white text-center lg:text-6xl md:text-5xl sm:text-4xl text-2xl md:mt-44 mt-16 custom-font relative">
            <span className="relative custom-font">
              <Highlight className="absolute md:-left-12 md:-top-12  -left-10 -top-10 lg:p-0 p-4" />{" "}
              Crafting{" "}
            </span>
            <span className="text-[#FEA5A5] custom-font">Seamless</span> and{" "}
            <span className="md:text-[28px] text-sm absolute md:translate-y-5 translate-y-0 translate-x-1">
              &copy;
            </span>
            <br />
            <span className="text-[#FEA5A5] custom-font">Memorable</span> User
            Experiences...
          </h1>

          <div className="mt-16 lg:absolute lg:bottom-0 lg:translate-y-2 xl:px-16 lg:px-0">
            <div className="grid md:grid-cols-2 md:items-end md:justify-start items-center justify-center w-full">
              <div className="flex w-full relative pb-[80%] md:mb-0 mb-24">
                <div className="absolute inset-0 m-auto w-full h-full">
                  <LazyLoadImage
                    alt={semira}
                    src={semira} // use normal <img> attributes as props
                    className="md:-translate-y-2 md:h-full sm:px-10"
                  />
                </div>
              </div>

              <div className="relative text-white h-full flex flex-col justify-center pt-10 ">
                {/* <motion.Symbol
                  className="md:block hidden absolute lg:-left-44 -left-28 -top-16 lg:p-1 p-5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={transition}
                /> */}
                <motion.svg
                  width="150"
                  height="101"
                  viewBox="0 0 150 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="md:block hidden absolute lg:-left-44 -left-28 -top-16 lg:p-1 p-5">
                  <motion.path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M66.9776 40.9874C63.4942 39.661 60.4451 39.1089 58.0698 38.8187C35.3421 36.1239 22.959 52.4005 17.3199 69.6728C15.8061 74.3 15.2292 81.8512 17.5563 87.5387C19.1897 91.5358 22.2219 94.6277 27.2097 95.3836C32.6437 96.2259 38.3078 93.8218 43.4104 89.9562C50.7954 84.3705 57.0292 75.7559 59.7295 70.3478C62.8419 64.1092 66.4854 54.0234 68.603 43.785C72.2343 45.4812 76.2567 48.0577 80.4146 52.0622C82.2698 53.8361 83.8595 56.2812 85.1412 59.0628C80.607 61.18 76.3361 64.1957 72.573 68.1088C69.4148 71.4021 64.2303 79.4306 62.658 86.5272C61.54 91.5937 62.2916 96.1764 66.3768 98.5939C71.4551 101.589 76.1724 100.512 80.1101 97.5507C85.6569 93.3834 89.5776 85.3424 90.5335 80.5941C91.6424 75.069 90.5598 66.8897 87.8142 60.0398C103.554 53.609 122.118 58.1725 132.377 73.0523C132.688 73.492 133.347 73.6304 133.849 73.3638C134.351 73.0796 134.506 72.4793 134.196 72.0396C123.337 56.298 103.697 51.439 87.0322 58.2263C85.6602 55.2688 83.9596 52.6476 81.9791 50.7508C77.3957 46.3423 72.9626 43.5735 68.9929 41.8082C69.3531 39.8842 69.6542 37.9604 69.8828 36.0547C70.9147 27.4963 70.4413 19.4732 67.3523 14.2121C60.216 2.05344 46.1623 -1.27616 32.4667 1.08976C18.9029 3.43751 5.74077 11.3747 0.194671 21.6092C-0.0634965 22.0865 0.15826 22.6676 0.689205 22.8947C1.22035 23.1219 1.86105 22.9253 2.11902 22.448C7.3964 12.7084 19.9622 5.19701 32.8687 2.97539C45.6435 0.771931 58.8023 3.76999 65.4587 15.1016C68.3908 20.1165 68.7352 27.7167 67.7556 35.8516C67.5517 37.5456 67.2889 39.2576 66.9776 40.9874ZM85.9214 60.8764C81.6944 62.8866 77.7092 65.707 74.1935 69.3721C71.1866 72.5062 66.2538 80.1279 64.7566 86.9068C63.8282 91.1083 64.1617 94.9872 67.5542 96.9842C71.6919 99.4367 75.5298 98.4863 78.7381 96.0746C83.9101 92.2087 87.5366 84.6805 88.4277 80.2498C89.4729 75.0602 88.4836 67.339 85.9214 60.8764ZM66.604 42.929C63.1477 41.5672 60.1253 41.015 57.7876 40.7247C36.2386 38.1662 24.7198 53.8396 19.3732 70.2112C17.9611 74.5205 17.3943 81.5602 19.565 86.8779C20.9303 90.2059 23.404 92.8592 27.5731 93.4949C32.4421 94.2513 37.4588 91.9557 42.0311 88.4979C49.1581 83.1073 55.171 74.7757 57.777 69.5621C60.8899 63.3234 64.5408 53.1847 66.604 42.929Z"
                    fill="#FBFBFB"
                  />
                  <motion.path
                    d="M120.574 73.0072L118.16 72.0007L120.63 71.1399L131.171 67.4658L136.122 57.7497L137.196 55.6422L137.96 57.8809L146.14 81.8654L146.856 83.9648L144.808 83.1112L120.574 73.0072Z"
                    fill="#F28F8F"
                    stroke="#FBFBFB"
                    strokeWidth="2"
                    strokeLinecap="square"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={transition}
                  />
                </motion.svg>
                <motion.svg
                  width="150"
                  height="101"
                  viewBox="0 0 150 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="block md:hidden absolute rotate-[120deg] right-0 -top-8 lg:p-1 p-6">
                  <motion.path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M66.9776 40.9874C63.4942 39.661 60.4451 39.1089 58.0698 38.8187C35.3421 36.1239 22.959 52.4005 17.3199 69.6728C15.8061 74.3 15.2292 81.8512 17.5563 87.5387C19.1897 91.5358 22.2219 94.6277 27.2097 95.3836C32.6437 96.2259 38.3078 93.8218 43.4104 89.9562C50.7954 84.3705 57.0292 75.7559 59.7295 70.3478C62.8419 64.1092 66.4854 54.0234 68.603 43.785C72.2343 45.4812 76.2567 48.0577 80.4146 52.0622C82.2698 53.8361 83.8595 56.2812 85.1412 59.0628C80.607 61.18 76.3361 64.1957 72.573 68.1088C69.4148 71.4021 64.2303 79.4306 62.658 86.5272C61.54 91.5937 62.2916 96.1764 66.3768 98.5939C71.4551 101.589 76.1724 100.512 80.1101 97.5507C85.6569 93.3834 89.5776 85.3424 90.5335 80.5941C91.6424 75.069 90.5598 66.8897 87.8142 60.0398C103.554 53.609 122.118 58.1725 132.377 73.0523C132.688 73.492 133.347 73.6304 133.849 73.3638C134.351 73.0796 134.506 72.4793 134.196 72.0396C123.337 56.298 103.697 51.439 87.0322 58.2263C85.6602 55.2688 83.9596 52.6476 81.9791 50.7508C77.3957 46.3423 72.9626 43.5735 68.9929 41.8082C69.3531 39.8842 69.6542 37.9604 69.8828 36.0547C70.9147 27.4963 70.4413 19.4732 67.3523 14.2121C60.216 2.05344 46.1623 -1.27616 32.4667 1.08976C18.9029 3.43751 5.74077 11.3747 0.194671 21.6092C-0.0634965 22.0865 0.15826 22.6676 0.689205 22.8947C1.22035 23.1219 1.86105 22.9253 2.11902 22.448C7.3964 12.7084 19.9622 5.19701 32.8687 2.97539C45.6435 0.771931 58.8023 3.76999 65.4587 15.1016C68.3908 20.1165 68.7352 27.7167 67.7556 35.8516C67.5517 37.5456 67.2889 39.2576 66.9776 40.9874ZM85.9214 60.8764C81.6944 62.8866 77.7092 65.707 74.1935 69.3721C71.1866 72.5062 66.2538 80.1279 64.7566 86.9068C63.8282 91.1083 64.1617 94.9872 67.5542 96.9842C71.6919 99.4367 75.5298 98.4863 78.7381 96.0746C83.9101 92.2087 87.5366 84.6805 88.4277 80.2498C89.4729 75.0602 88.4836 67.339 85.9214 60.8764ZM66.604 42.929C63.1477 41.5672 60.1253 41.015 57.7876 40.7247C36.2386 38.1662 24.7198 53.8396 19.3732 70.2112C17.9611 74.5205 17.3943 81.5602 19.565 86.8779C20.9303 90.2059 23.404 92.8592 27.5731 93.4949C32.4421 94.2513 37.4588 91.9557 42.0311 88.4979C49.1581 83.1073 55.171 74.7757 57.777 69.5621C60.8899 63.3234 64.5408 53.1847 66.604 42.929Z"
                    fill="#FBFBFB"
                  />
                  <motion.path
                    d="M120.574 73.0072L118.16 72.0007L120.63 71.1399L131.171 67.4658L136.122 57.7497L137.196 55.6422L137.96 57.8809L146.14 81.8654L146.856 83.9648L144.808 83.1112L120.574 73.0072Z"
                    fill="#F28F8F"
                    stroke="#FBFBFB"
                    strokeWidth="2"
                    strokeLinecap="square"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={transition}
                  />
                </motion.svg>
                {/* <Symbol className="block md:hidden absolute rotate-[120deg] right-0 -top-8 lg:p-1 p-6" /> */}

                <h1 className="custom-font lg:text-xl text-base mb-2">
                  Hi, I’m Semira Yesufu.
                </h1>
                <p className="lg:text-[18px] md:text-xs sm:text-sm text-sm !leading-relaxed lg:w-9/12 md:w-11/12 text-justify font-light">
                  I’m a product designer who enjoys crafting solutions
                  influenced by empathetic research, minimalistic visuals,
                  content design, and business strategy. Over the last few
                  years, I’ve designed products and experiences used by
                  thousands of individuals and businesses across different
                  industries like Finance, Enterprise, HR - SaaS, PropTech &
                  Beauty, and e-Commerce.
                </p>
                <h1 className="custom-font lg:text-xl text-base my-6">
                  MORE ABOUT ME
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
