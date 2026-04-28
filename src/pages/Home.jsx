import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ServiceSection from "../components/ServiceSection";
import HowItWorks from "../components/HowItWorks";
import WhyChooseUs from "../components/WhyChooseUs";
import CoverageSection from "../components/CoverageSection";
import AppScreenshots from "../components/AppScreenshots";

import PricingPlans from "../components/PricingPlans";
import SalientFeatures from "../components/SalientFeatures";
import Footer from "../components/Footer";
import DownloadSection from"../components/DownloadSection";
import StatisticsSection from "../components/StatisticsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import LoyaltyRewards from "../components/LoyaltyRewards";
const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServiceSection/>
      <HowItWorks />
      <WhyChooseUs/>
      <CoverageSection />
      <LoyaltyRewards />
      <PricingPlans />
      <AppScreenshots />
      <SalientFeatures/>
      <StatisticsSection/>
      <ContactSection/>
      <TestimonialsSection/>
      <DownloadSection/>
      <Footer/>
    </>
  );
};

export default Home;
