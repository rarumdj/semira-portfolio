import React from "react";
import { AssesmentPlatform, JobifiedImg, VerifyApplicantInterface } from "../../../assets/images";

const ApplicantView = () => {
  return (
    <section className="pt-20 lg:pb-10 container mx-auto flex flex-col items-center px-6 lg:px-16 w-screen max-w-7xl">
      <div className="max-w-3xl w-full mt-10 text-white text-center">
        <h1 className="custom-font font-bold text-xl mb-2">
          Product Showcase
          <span className="ml-3 font-normal font-sans text-[#C1C2CBB2] opacity-70">
            (Applicant View)
          </span>
        </h1>
      </div>
      <div className="grid md:grid-cols-12 items-center gap-4 mt-10">
        <div className="md:col-start-1 md:col-end-8 md:order-none order-last">
          <img src={VerifyApplicantInterface} alt="job" className="w-full md:mt-16 mt-8" />
          <p className="text-[#C1C2CB] opacity-70 md:text-sm text-xs mt-3 w-full">
          Verifying applicants Interface (video may take time to load)
          </p>
        </div>
        <div className="md:col-start-9 md:col-end-13">
          <h1 className="custom-font font-bold text-xl mb-2 text-white">
            Applicant Verification process
          </h1>
          <p className="text-[#C1C2CB] opacity-70">
            Job applicants simply click on the verification link sent by the
            businesses. They fill in their details and are asked to take a
            selfie so that we can verify that the details provided match their
            bio. After this process, they can easily access the assessment
            platform.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-12  items-center gap-4 mt-10">
        <div className="md:col-start-1 md:col-end-5">
          <h1 className="custom-font font-bold text-xl mb-2 text-white">
            Monitored assessment system
          </h1>
          <p className="text-[#C1C2CB] opacity-70">
            Applicants taking the assessment are randomly captured. The captured
            biometric data is used to verify their identity, ensuring that the
            candidate who applied for the role is the same person taking the
            test. This process also helps prevent cheating activities by
            applicants.
          </p>
        </div>
        <div className="md:col-start-6 md:col-end-13">
          <img src={AssesmentPlatform} alt="job" className="w-full md:mt-16 mt-8" />
          <p className="text-[#C1C2CB] opacity-70 md:text-sm text-xs mt-3 w-full">
          Assessment platform for applicant  (video may take time to load)
          </p>
        </div>
      </div>
      <div className="max-w-3xl w-full mt-10 text-white">
        <h1 className="custom-font font-bold text-xl">Recognition & Credits</h1>
        <p className="text-[#C1C2CB] opacity-70">
          My team made it to the top 10 finalists out of over 200 applicants.
          The team consists of:
        </p>
        <ul className="text-[#C1C2CB] list-disc list-outside space-y-4 pl-4 py-4">
          <li><span className="text-white !opacity-100">Ibrahim Salami:</span> <span className="opacity-70">Product & Interaction Designer</span></li>
          <li><span className="text-white !opacity-100">Sultan Ayodele:</span> <span className="opacity-70">Business Analyst & UX Researcher</span></li>
        </ul>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 mt-10">
        <div />
        <div className="text-white">
          <h1 className="custom-font font-bold text-xl">Key takeaways</h1>
          <ul className="text-[#C1C2CB] opacity-70 list-disc list-outside space-y-4 pl-4 py-4">
            <li>
              Looking back, this was my first time participating in a hackathon,
              and I learned a lot of new things. Working with such a fast pace
              and tight deadlines gave me a better understanding of designing
              and launching quickly, and how to best manage a team to achieve
              those goals.
            </li>
            <li>
              Research matters a lot. It helped us gain valuable insights to
              bring our solution to life.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ApplicantView;
