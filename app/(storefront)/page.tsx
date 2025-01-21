import HeroSlider from "@/app/components/storefront/HeroSlider";
import News from "@/app/components/storefront/News";
import SectionAbout from "@/app/components/storefront/SectionAbout";
import React from "react";
import SectionService from "../components/storefront/SectionService";
import ContactRow from "../components/storefront/ContactRow";

const IndexPage = () => {
  return (
    <>
      <HeroSlider />
      {/* <div className="container mx-auto px-4"> */}
        <ContactRow />
        <SectionAbout />
        <SectionService />
        <News />
      {/* </div> */}
    </>
  );
};

export default IndexPage;
