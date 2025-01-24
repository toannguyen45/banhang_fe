import HeroSlider from "@/app/components/storefront/HeroSlider";
import News from "@/app/components/storefront/News";
import SectionAbout from "@/app/components/storefront/SectionAbout";
import React from "react";
import SectionService from "../components/storefront/SectionService";
import SectionContact from "../components/storefront/SectionContact";

const IndexPage = () => {
  return (
    <>
      <HeroSlider />
      <SectionAbout />
      <SectionService />
      <SectionContact />
      <News />
    </>
  );
};

export default IndexPage;
