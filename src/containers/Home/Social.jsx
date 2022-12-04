import React from "react";
import SocialCard from "../../components/SocialCard";
import { ReactComponent as Hello } from "../../assets/images/Hello.svg";

const Social = () => {
  return (
    <div className="md:py-24 py-20 flex justify-center">
      <div className="flex flex-col mx-auto px-6 lg:px-16 item justify-center items-center w-screen max-w-[100rem]">
      <div className="flex items-center w-full mb-10">
        <h1 className="custom-font md:text-lg md:w-fit w-8/12 md:mr-4 text-white">SAY HI TO ME AT MY LITTLE CORNERS ONLINE </h1><span><Hello className="md:p-0 p-1"/></span>
      </div>
        <div className="w-full grid md:grid-cols-3 gap-6">
          <SocialCard social='Instagram' title='My Digital Diary' />
          <SocialCard social='Medium' title='My Digital Diary' />
          <SocialCard social='Linkedin' title='Work experiences' />
          <SocialCard social='Twitter' title='Random thoughts' />
          <SocialCard social='Dribbble' title='Visual  and social media designs' />
          <SocialCard social='Email' title='Mail for speaking and design services' />
        </div>
      </div>
    </div>
  );
};

export default Social;
