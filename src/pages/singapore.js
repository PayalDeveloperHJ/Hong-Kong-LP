import React from 'react';
import BannerSection from '../components/singapore/banner';
import PropertyListSection from '../components/singapore/propertyList';
import AboutSection from '../components/singapore/aboutSection';
import WhyUS from '../components/singapore/whyus';
import ROISection from '../components/singapore/roiSection';
import FAQSection from '../components/singapore/faqSection';
import Footer from '../components/comman/footer';
import '../styles/singapore.css';
import '../styles/general.css';

const Singapore = () => {
  return (
    <div className='singapore_page'>
      <BannerSection />
      <AboutSection />
      <WhyUS />
      <PropertyListSection />
      <ROISection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Singapore;