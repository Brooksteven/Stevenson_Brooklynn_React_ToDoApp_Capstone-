import React from 'react'
import Navbar from '../../components/Navbar/Navbar.jsx'
import HeroSection from '../../components/HeroSection/HeroSection.jsx'
import KiazenDefinition from '../../components/KiazenDefinition/KiazenDefinition.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import { useNavigate } from 'react-router-dom'

export default function MainPage() {

    const nav = useNavigate()

  return (
    <div>
        <Navbar />
        <HeroSection />
        <KiazenDefinition />
        <button onClick={() => {nav('/home')}}>GET STARTED</button>
        <Footer />
    </div>
  )
}
