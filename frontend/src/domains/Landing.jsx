import React from "react";
import { PageContainer } from "../components/shared";
import {
  HeroSection,
  AboutSection,
  FeaturesSection,
  HowItWorksSection,
} from "../components/landing";

const Landing = () => {
  return (
    <PageContainer>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <HowItWorksSection />
    </PageContainer>
  );
};

export default Landing;
