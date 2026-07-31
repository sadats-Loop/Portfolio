import About from "./assets/sections/About"
import Contacts from "./assets/sections/Contacts"
import Footer from "./assets/sections/Footer"
import Home from "./assets/sections/Home"
import Skills from "./assets/sections/Skills"
import Navbar from "./components/Navbar"
import CustomCursor from"./components/CustomCursor"
import IntroAnimation from "./components/IntroAnimation"
import React from "react"
import SmoothScroll from "./components/SmoothScroll";
function App() {

  const [introDone, setIntroDone] = React.useState(false);
  return (
   <>
    {!introDone && <IntroAnimation onFinish={() => setIntroDone(true)} />}
    <div className="relative gradient text-white">
      <CustomCursor/>
       <SmoothScroll />
        <Navbar></Navbar> 
      <Home />
      <About />
      <Skills />
      {/* <Projects />
      <Experience />
      <Testimonials /> */}
      <Contacts />
      <Footer/>

</div>
 </>
      )
}

export default App
