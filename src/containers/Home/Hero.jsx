import React from "react";
import { ReactComponent as Highlight } from "../../assets/images/highlight.svg";
import semira from "../../assets/images/semira.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="header-bg ">
      <div className="pt-20 2xl:h-[1168px] lg:h-screen  container mx-auto flex flex-col items-center w-full px-8 lg:overflow-hidden">
      <div className="flex flex-col items-center h-full relative w-full">
        <h1 className="text-white text-center lg:text-6xl md:text-5xl sm:text-4xl text-3xl md:mt-40 mt-16 custom-font relative">
          <span className="relative custom-font">
            <Highlight className="absolute -left-10 -top-10 lg:p-0 p-4" /> Crafting{" "}
          </span>
           <span className="text-[#FEA5A5] custom-font">Seamless</span>{" "}
          and{" "}
          <span className="md:text-base text-xs absolute translate-y-3 translate-x-1">
            &copy;
          </span>
          <br />
          <span className="text-[#FEA5A5] custom-font">Memorable</span> User
          Experiences...
        </h1>

        <div className="mt-16 lg:absolute lg:bottom-0 lg:translate-y-4 md:px-16">
        <div className="grid md:grid-cols-2 md:items-end md:justify-start items-center justify-center w-full">
        <div className="flex rounded-2xl w-full relative pb-[80%] md:mb-0 mb-24">
            <div className="absolute inset-0 m-auto w-full rounded-lg h-full">
              <img
                src={semira}
                alt="img-about"
                className="absolute inset-0 md:translate-x-2 -translate-y-2 md:h-full rounded-lg"
              />
            </div>
          </div>

          <div className="text-white h-full flex flex-col justify-center ">
            <h1 className="custom-font lg:text-lg text-base mb-2">Hi, I’m Semira Yesufu.</h1>
            <p className="lg:text-base md:text-xs sm:text-sm leading-relaxed lg:w-9/12 text-justify ">
              I’m a product designer who enjoys crafting solutions influenced by
              empathetic research, minimalistic visuals, content design, and
              business strategy. Over the last few years, I’ve designed products
              and experiences used by thousands of individuals and businesses
              across different industries like Finance, Enterprise, HR - SaaS,
              PropTech & Beauty, and e-Commerce.
            </p>
            <h1 className="custom-font lg:text-lg text-base my-6">MORE ABOUT ME</h1>

          </div>
        </div>
         
        </div>
      </div>
      </div>
     
    </section>
  );
};

export default Hero;
