import Hero from "./sections/Hero"
import About from "./sections/About"
import Projects from "./sections/Projects"
import Journey from "./sections/Journey"
import Contact from "./sections/Contact"
import CustomCursor from "./components/CustomCursor"


function App() {
  return (
    <>
      <CustomCursor />
      
      <Hero />
      <About />
      <Projects />
      <Journey />
      <Contact />
    </>
  )
}

export default App