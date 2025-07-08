import Navbar from "./components/navbar"
import Hero from "./components/hero"
import About from "./components/about"
import Skills from "./components/skills"
import Projects from "./components/projects"
import Experience from './components/experience'
import Contact from "./components/contact"
import Footer from "./components/footer"

export default function home() {
  return (
    <div className="background">
        <Navbar/>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Experience/>
        <Contact/>
        <Footer/>
    </div>
  )
}
