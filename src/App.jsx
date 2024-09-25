import { useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Social from "./pages/Contact";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="relative h-screen font-universe flex items-center bg-gradient-to-br from-black to-red-900 ">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black to-red-900 opacity-50 z-20"></div>
      {/* Background video */}
      {/* <video
        autoPlay
        loop
        muted
        className="absolute z-10 w-auto min-w-full min-h-full max-w-none opacity-70"
      >
        <source src="/smoke.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      {/* MAIN CONTENT */}

      <div className=" relative z-30 grid grid-cols-5 p-16">
        <div className=" flex col-span-2">
          <Menu />
        </div>
        <div className=" z-30 col-span-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Social />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
