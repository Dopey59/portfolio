"use client"
import HeroSection from './src/components/HeroSection'
import Alternance from './src/components/alternance'
import SchoolProjects from './src/components/SchoolProjects'
import Skills from './src/components/Skills'
import About from './src/components/About'
import ResponsiveCarousel from "./src/components/Responsive.js"
import Contact from "./src/components/TitleContact";
import Form from "./src/FormContact";


export default function Home() {
  return (
    <main className="">
      <HeroSection/>

      <About/>

      <br></br>

      <ResponsiveCarousel/>
      <br></br>


      <Alternance/>
      <br></br>
      <Skills/>
      <br></br>
      <SchoolProjects/>
      <br></br>
      <Contact/>
      <Form />

    </main>
  )
}