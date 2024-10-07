import React from 'react';
import Banner from '../components/general/banner';
import '../styles/general.css';
import ProjectList from '../components/general/projectList';
import LuxurySection from '../components/general/luxurysection';
import LastSection from '../components/general/lastsection';
import Footer from '../components/comman/footer';


const GeneralLP = () => (
    <div>
       <Banner /> 
       <ProjectList />
       <LuxurySection />
       <LastSection />
       <Footer />
    </div>
);

export default GeneralLP;