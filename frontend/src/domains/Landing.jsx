import React from "react";
import { PageContainer } from "../components/shared";
import {
  HeroSection,
  AboutSection,
  FeaturesSection,
} from "../components/landing";

const Landing = () => {
  return (
    <PageContainer>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
    </PageContainer>
  );
};

export default Landing;
