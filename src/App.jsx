// @ts-nocheck
import { useState } from 'react'
import './App.css'
import Navbar from './Navbar/Navbar'
import HereSection from './pages/HereSection'
import FeatureSection from './pages/FeatureSection'
import Workflow from './pages/Workflow'
import Pricing from './pages/Pricing'
import Testimonials from './pages/Testimonials'
import Footer from './pages/Footer'

function App() {

  return (
    <>
      <Navbar />
      <HereSection />
      <FeatureSection />
      <Workflow />
      <Pricing />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App
