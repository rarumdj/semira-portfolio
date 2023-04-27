import React from "react";
import {
  CreateAssesment,
  JobifiedImg,
  PresentationSolution,
  UserFlowApplicant,
  UserFlowBusiess,
} from "../../../assets/images";

const Details = () => {
  return (
    <section className="pt-10 lg:pb-10 container mx-auto flex flex-col items-center px-6 lg:px-16 w-screen max-w-7xl">
      <div className="grid sm:grid-cols-3 gap-4 max-w-3xl w-full text-white">
        <div>
          <h1 className="custom-font font-bold text-xl">Industry</h1>
          <ul className="text-[#C1C2CB] opacity-70">
            <li>HR - SaaS</li>
          </ul>
        </div>
        <div>
          <h1 className="custom-font font-bold text-xl">Deliverables</h1>
          <ul className="text-[#C1C2CB] opacity-70">
            <li>Product Strategy</li>
            <li>Product Design</li>
            <li>Interaction Design</li>
            <li>Content Design</li>
          </ul>
        </div>
        <div>
          <h1 className="custom-font font-bold text-xl">Year</h1>
          <ul className="text-[#C1C2CB] opacity-70">
            <li>2022</li>
          </ul>
        </div>
      </div>
      <div className="max-w-3xl w-full mt-16 text-white">
        <h1 className="custom-font font-bold text-xl">
          Crafting a Safe Haven For Hiring Talent In Africa
        </h1>
        <p className="text-[#C1C2CB] opacity-70">
          Jobified is a SaaS platform that allows verified companies,
          businesses, and startups to identify, screen, assess, and vet
          potential employees with just one tool.{" "}
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 mt-16">
        <div />
        <div className="text-white">
          <h1 className="custom-font font-bold text-xl">My Role</h1>
          <p className="text-[#C1C2CB]">
            <span className="opacity-70">
              Jobified was born out of a hackathon focused on using identity
              verification tools to develop impactful solutions. My team
              participated by proposing a long-term solution for the increasing
              problem of identity fraud in remote hiring.
              <br />
              <br />
              To bring our vision to life, I collaborated with the other
              designer on my team, Ibrahim Salami, to design the product from
              discovery to prototype. I also managed the team, prioritized
              features, set internal deadlines, and tracked progress. As a
              result of our efforts, we were selected as a{" "}
            </span>
            <span className="text-white op">top 10 finalist</span> among over{" "}
            <span className="text-white op">200 applicants.</span>
          </p>
        </div>
      </div>
      <img src={CreateAssesment} alt="job" className="w-full mt-20" />
      <p className="text-[#C1C2CB] opacity-70 md:text-sm text-xs mt-3 w-full">
        “Create Assessment” Interface (video may take time to load)
      </p>

      <div className="max-w-3xl w-full mt-16 text-white">
        <h1 className="custom-font font-bold text-xl mb-2">
          Exploring Existing Solutions
        </h1>
        <p className="text-[#C1C2CB]">
          <span className="opacity-70">
            To understand how to provide a unique solution, we carried a
            competitive analysis of various existing solutions in the market,
            such as{" "}
          </span>
          <span className="text-white">
            TestGorilla, DevSkiller, e-Verify, LinkedIn, PaycomChecker,
            GoodHire, Justworks, and Trinet.
          </span>
        </p>
        <ul className="text-[#C1C2CB] list-disc list-outside space-y-4 pl-4 py-4">
          <li className="opacity-70">
            Our research revealed that most solutions only address individual
            problems, requiring users to switch between tools to manage the
            entire hiring process, including identity verification, skill
            vetting and assessment.
          </li>
          <li className="opacity-70">
            We found that existing solutions lacked integrated identity
            verification on their skill assessment platform, making it easy for
            job applicants to cheat by hiring someone else to take the test on
            their behalf.
          </li>
          <li>
            <span className="opacity-70">
              We also discovered the growing problem of{" "}
            </span>{" "}
            <span className="text-white">"recruitment fraud," </span>{" "}
            <span className="opacity-70">
              in which scammers create fake job applications to obtain
              applicants' personal information or money. To ensure the safety
              and security of all users, we implemented identity verification
              for businesses using our platform.
            </span>
          </li>
        </ul>
      </div>
      <img src={PresentationSolution} alt="job" className="w-full mt-20" />
      <p className="text-[#C1C2CB] opacity-70 md:text-sm text-xs mt-3 w-full">
        Presentation slides highlighting problems with existing solutions.
      </p>

      <div className="max-w-3xl w-full mt-16 text-white">
        <h1 className="custom-font font-bold text-xl mb-2">
          Prioritising Key Features
        </h1>
        <p className="text-[#C1C2CB] opacity-70">
          The findings we gathered validated our decision to create an
          "all-in-one" platform that allows verified businesses to not only
          identify talent but also screen and assess their skills, all in one
          place. Our MVP includes core features that reflect our value
          proposition, such as:
        </p>
        <ul className="text-[#C1C2CB] opacity-70 list-disc list-outside space-y-4 pl-4 py-4">
          <li>Streamlined onboarding and verification processes</li>
          <li>Monitored assessment system</li>
          <li>Data-driven dashboards</li>
        </ul>
      </div>
      <img src={UserFlowBusiess} alt="job" className="w-full mt-20" />
      <p className="text-[#C1C2CB] opacity-70 md:text-sm text-xs mt-3 w-full">
        User flow for businesses
      </p>

      <div className="max-w-3xl w-full mt-16 text-white">
        <h1 className="custom-font font-bold text-xl mb-2">
          Applicants side of things
        </h1>
        <p className="text-[#C1C2CB] opacity-70">
          We also considered the experience of job applicants who would be
          undergoing verification and skill assessment. We aimed to reflect
          trust and reliability in our experience, and microcopies played a
          significant role in achieving this. We ensured that instruction copies
          were clear and concise, and that CTAs were easy to understand.
        </p>
      </div>
      <img src={UserFlowApplicant} alt="job" className="w-full mt-20" />
      <p className="text-[#C1C2CB] opacity-70 md:text-sm text-xs mt-3 w-full">
        User flows for applicants
      </p>
    </section>
  );
};

export default Details;
