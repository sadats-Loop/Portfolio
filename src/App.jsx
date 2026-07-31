import React, { Suspense, lazy } from "react";

import Navbar from "./components/Navbar";
import Home from "./assets/sections/Home";
import IntroAnimation from "./components/IntroAnimation";
import CustomCursor from "./components/CustomCursor";
import SmoothScroll from "./components/SmoothScroll";

// Lazy Loaded Sections
const About = lazy(() => import("./assets/sections/About"));
const Skills = lazy(() => import("./assets/sections/Skills"));
const Contacts = lazy(() => import("./assets/sections/Contacts"));
const Footer = lazy(() => import("./assets/sections/Footer"));

function App() {
  const [introDone, setIntroDone] = React.useState(false);

  return (
    <>
      {!introDone && (
        <IntroAnimation onFinish={() => setIntroDone(true)} />
      )}

      <div className="relative gradient text-white">

        <CustomCursor />

        <SmoothScroll />

        <Navbar />

        {/* Hero Section (Do NOT lazy load) */}
        <Home />

        {/* Lazy Loaded Sections */}
        <Suspense fallback={null}>
          <About />
          <Skills />
          {/* <Projects /> */}
          {/* <Experience /> */}
          {/* <Testimonials /> */}
          <Contacts />
          <Footer />
        </Suspense>

      </div>
    </>
  );
}

export default App;