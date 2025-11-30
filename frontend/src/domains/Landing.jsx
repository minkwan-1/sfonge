import React from "react";
import { PageContainer } from "../components/shared";
import { HeroSection, AboutSection } from "../components/landing";

const Landing = () => {
  return (
    <PageContainer>
      <HeroSection />
      <AboutSection />
    </PageContainer>
  );
};

export default Landing;
