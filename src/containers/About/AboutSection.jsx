import React from "react";
import { ReactComponent as RapidLine } from "../../assets/images/rapidLine.svg";

const AboutSection = () => {
  return (
    <section id="home" className="header-bg ">
      <div className="pt-20 lg:pb-28  container mx-auto flex flex-col items-center px-6 lg:px-16 w-screen max-w-[100rem]">
        <div className="h-full relative w-full md:mt-48 mt-20 space-y-10">
          <RapidLine className="absolute -left-5 -top-16 lg:p-0 p-5" />
          <div>
            <h4 className="custom-font text-white md:text-2xl text-lg">
              More than meets the eyes
            </h4>
            <p className="md:text-base text-sm text-white leading-relaxed">
              I graduated top of my class with a first-class degree in Computer
              science, and while in school, I did social media management on the
              side to earn extra bucks. I would say this knowledge and skillset
              shaped me into the product designer who factors in memorability,
              seamlessness and developer's feasibility when creating products
              and experiences.
            </p>
          </div>
          <div>
            <h4 className="custom-font text-white md:text-2xl text-lg">
              My Love for Design & Tech
            </h4>
            <p className="md:text-base text-sm text-white leading-relaxed">
              When I was younger, I developed a yearning for technology and
              innovation. Luckily it was nurtured by my family, they signed me
              up for computer and typewriting classes and as little as 15, I
              became the go-to person for fixing and setting up gadgets or
              researching stuff on the internet in the house. Growing up with
              the mindset of being part of the building process of innovations
              essentially shaped my decision to work in a tech-driven and
              problem-solving space.
            </p>
          </div>
          <div>
            <h4 className="custom-font text-white md:text-2xl text-lg">
              Contributing to the idea of an “enriched society”
            </h4>
            <p className="md:text-base text-sm text-white leading-relaxed">
              Aside from being a mouse mover, I’m deeply passionate about
              contributing to the development & growth of initiatives that
              empower, enrich and educate women, the Muslim community and
              underrepresented groups. I’m currently achieving this by wearing
              the following hats;
            </p>
            <ul className="md:text-base text-sm text-white list-disc list-inside ml-4 leading-relaxed">
              <li>
                Content Designer & Community Manager,{" "}
                <span className="underline cursor-pointer">LeadsbyDesign</span>{" "}
              </li>
              <li>
                Product Manager,{" "}
                <span className="underline cursor-pointer">BarnaamaJ</span>{" "}
              </li>
              <li>
                Founder & CEO,{" "}
                <span className="underline cursor-pointer">Path4Her</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
