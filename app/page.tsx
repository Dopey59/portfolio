"use client"
import HeroSection from './src/components/HeroSection'
import Alternance from './src/components/alternance'
import SchoolProjects from './src/components/SchoolProjects'
import Skills from './src/components/Skills'
import About from './src/components/About'
import Footer from './src/components/footer'


export default function Home() {
  return (
    <main className="w-full overflow-x-hidden h-auto">
      <HeroSection/>

      <About/>

      <br></br>

      {/* <ResponsiveCarousel/> */}
      <br></br>

      <Alternance/>
      <br></br>
      {/* <Skills/> */}
      <br></br>
      <SchoolProjects/>
      <br></br>
      <Footer/>

    </main>
  )
}