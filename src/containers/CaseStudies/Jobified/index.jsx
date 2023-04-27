import React from "react";
import Header from "./header";
import Details from "./Details";
import ProductShow from "./ProductShow";
import ApplicantView from "./ApplicantView";
import CaseFooter from "./CaseFooter";

const Jobified = () => {
  return (
    <>
      <Header />
      <Details />
      <ProductShow />
      <ApplicantView />
      <CaseFooter />
    </>
  );
};

export default Jobified;
