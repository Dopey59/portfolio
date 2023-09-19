"use client"
import HeroSection from './src/components/HeroSection'
import Alternance from './src/components/alternance'
import SchoolProjects from './src/components/SchoolProjects'
import Skills from './src/components/Skills'
import About from './src/components/About'
<<<<<<< HEAD
import ResponsiveCarousel from "./src/components/Responsive.js"
import Footer from "./src/components/footer"

=======
import ResponsiveCarousel from "../carousels/Responsive"
import Contact from "./src/components/TitleContact";
import Footer from "./src/components/footer";
import Form from "./src/FormContact";
>>>>>>> 8df64bd17f1280711431883e9c0ed96e53d7b410


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
<<<<<<< HEAD
      <Footer/>
=======
      <Contact/>
      <Form />
      <Footer />
>>>>>>> 8df64bd17f1280711431883e9c0ed96e53d7b410
    </main>
  )
}