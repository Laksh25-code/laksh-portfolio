import Hero from "./sections/Hero"
import About from "./sections/About"
import Projects from "./sections/Projects"
import Journey from "./sections/Journey"
import Contact from "./sections/Contact"
import CustomCursor from "./components/CustomCursor"
import Navbar from "./sections/Navbar"

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      
      <Hero />
      <About />
      <Projects />
      <Journey />
      <Contact />
    </>
  )
}

export default App