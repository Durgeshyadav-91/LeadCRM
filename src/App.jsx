import React, { useState } from 'react'
import './App.css';
import './index.css';
import Navbar from './components/NavBar'
import Banner from './components/Banner'
import Stats from './components/Stats';
import ChallengesComparison from './components/ChallengesComparison';
import Footer from './components/Footer';
import JoinThousands from './components/JoinThousands';
import OurSupport from './components/Our-Support';
import SwiperSection from './components/SwiperSection';
import LinkedInSalesSection from './components/SalesSolution';
import HowItWorks from './components/HowItWorks';

function App() {

  return (
    <>
      <Navbar />
      <Banner />
      <Stats />
      <ChallengesComparison />
      <HowItWorks />
      <SwiperSection />
      <LinkedInSalesSection />
      <OurSupport />
      <JoinThousands />
      <Footer />
    </>
  )
}

export default App
