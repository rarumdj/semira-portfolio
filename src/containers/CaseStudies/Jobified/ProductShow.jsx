import React from "react";
import { ApplicantVerification, CheatCard, CompanyRegistration, JobifiedImg, SkillTool, VerifyApplicantInterface, VerifyBusiness, aa1 } from "../../../assets/images";

const ProductShow = () => {
  return (
    <section className="pt-20 lg:pb-10 container mx-auto flex flex-col items-center px-6 lg:px-16 w-screen max-w-[100rem]">
      <div className="max-w-3xl w-full mt-10 text-white text-center">
        <h1 className="custom-font font-bold text-xl mb-2">
          Product Showcase
          <span className="ml-3 font-normal font-sans text-[#C1C2CBB2] opacity-70">
            (Businesses View)
          </span>
        </h1>
      </div>
      <div className="grid md:grid-cols-12 items-center gap-4 mt-10">
        <div className="md:col-start-1 md:col-end-8 md:order-none order-last">
          <img src={CompanyRegistration} alt="job" className="w-full md:mt-16 mt-8" />
          <p className="text-[#C1C2CB] opacity-70 md:text-sm text-xs mt-3 w-full">
            Company Registration Interface (video may take time to load)
          </p>
        </div>
        <div className="md:col-start-9 md:col-end-13">
          <h1 className="custom-font font-bold text-xl mb-2 text-white">
            Applicants side of things
          </h1>
          <p className="text-[#C1C2CB] opacity-70">
            We also considered the experience of job applicants who would be
            undergoing verification and skill assessment. We aimed to reflect
            trust and reliability in our experience, and microcopies played a
            significant role in achieving this. We ensured that instruction
            copies were clear and concise, and that CTAs were easy to
            understand.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-12  items-center gap-4 mt-10">
        <div className="md:col-start-1 md:col-end-5">
          <h1 className="custom-font font-bold text-xl mb-2 text-white">
            Verified businesses only
          </h1>
          <p className="text-[#C1C2CB] opacity-70">
            To ensure the safety of all our users, we added an extra layer of
            security to verify the legitimacy of businesses using our platform.
            This eliminates recruitment fraud and creates a safe environment for
            both job seekers and businesses.
          </p>
        </div>
        <div className="md:col-start-6 md:col-end-13">
          <img src={VerifyBusiness} alt="job" className="w-full md:mt-16 mt-8" />
          <p className="text-[#C1C2CB] opacity-70 md:text-sm text-xs mt-3 w-full">
            Verifying businesses Interface (video may take time to load)
          </p>
        </div>
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
            Applicant Verification Setup
          </h1>
          <p className="text-[#C1C2CB] opacity-70">
            Businesses can easily verify job applicants by uploading a list of
            candidates who have applied for the position. A verification link
            will be generated and sent to each applicant. The link is time-bound
            and can be adjusted as needed.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-12  items-center gap-4 mt-10">
        <div className="md:col-start-1 md:col-end-5">
          <h1 className="custom-font font-bold text-xl mb-2 text-white">
            Screening out unverified applicants
          </h1>
          <p className="text-[#C1C2CB] opacity-70">
            Once applicants have successfully verified their identity, the
            business can screen out the unverified applicants and shortlist the
            verified ones to invite them for a skills assessment.
          </p>
        </div>
        <div className="md:col-start-6 md:col-end-13">
          <img src={ApplicantVerification} alt="job" className="w-full md:mt-16 mt-8" />
          <p className="text-[#C1C2CB] opacity-70 md:text-sm text-xs mt-3 w-full">
            Applicant verification dashboard (video may take time to load)
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-12 items-center gap-4 mt-10">
        <div className="md:col-start-1 md:col-end-8 md:order-none order-last">
          <img src={SkillTool} alt="job" className="w-full md:mt-16 mt-8" />
          <p className="text-[#C1C2CB] opacity-70 md:text-sm text-xs mt-3 w-full">
            Skill assessment creation tool (video may take time to load)
          </p>
        </div>
        <div className="md:col-start-9 md:col-end-13">
          <h1 className="custom-font font-bold text-xl mb-2 text-white">
            Robust Skill Assessment Tool
          </h1>
          <p className="text-[#C1C2CB] opacity-70">
            Businesses can customize their assessments by setting the cut-off
            mark, time duration, and questions based on particular careers. They
            can also preview questions before publishing and, once published,
            generate a link to share with applicants.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-12  items-center gap-4 mt-10">
        <div className="md:col-start-1 md:col-end-5">
          <h1 className="custom-font font-bold text-xl mb-2 text-white">
            Data driven Insights
          </h1>
          <p className="text-[#C1C2CB] opacity-70">
            We provide businesses with data-driven insights to ensure unbiased
            recruitment decisions. For instance, if an applicant is flagged for
            cheating, our system provides you with information as to why they
            cheated. It is also easy to filter out qualified candidates from all
            the assessment submissions.
          </p>
        </div>
        <div className="md:col-start-6 md:col-end-13">
          <img src={CheatCard} alt="job" className="w-full md:mt-16 mt-8" />
          <p className="text-[#C1C2CB] opacity-70 md:text-sm text-xs mt-3 w-full">
            Jobified cheat card interface (video may take time to load)
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductShow;
