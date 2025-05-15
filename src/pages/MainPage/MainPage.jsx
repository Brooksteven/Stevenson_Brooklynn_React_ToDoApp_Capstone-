import React from 'react'
import Navbar from '../../components/Navbar/Navbar.jsx'
import HeroSection from '../../components/HeroSection/HeroSection.jsx'
import KiazenDefinition from '../../components/KiazenDefinition/KiazenDefinition.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import { useNavigate } from 'react-router-dom'
import KaizenBtn from '../../components/KaizenBtn/KaizenBtn.jsx'

export default function MainPage() {

    const nav = useNavigate()

  return (
    <div>
        <Navbar />
        <HeroSection />
        <KiazenDefinition />
        <KaizenBtn />
        <Footer />
    </div>
  )
}
