import HeroSlider from "@/app/components/storefront/HeroSlider";
import News from "@/app/components/storefront/News";
import SectionAbout from "@/app/components/storefront/SectionAbout";
import React from "react";
import SectionService from "../components/storefront/SectionService";
import SectionContact from "../components/storefront/SectionContact";
import SectionWhyChooseUs from "@/app/components/storefront/SectionWhyChooseUs";

const IndexPage = () => {
  return (
    <>
      <HeroSlider />
      <SectionAbout />
      <SectionService />
      <SectionWhyChooseUs />
      <SectionContact />
      <News />
    </>
  );
};

export default IndexPage;
