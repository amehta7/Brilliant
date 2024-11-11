import React from "react";
import CategoryIcons from "./CategoryIcons";
import HeroSection from "./heroSection";
import SocialProofSection from "./SocialProofSection";

const DefaultPage = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <CategoryIcons />

      <SocialProofSection />
    </React.Fragment>
  );
};

export default DefaultPage;
