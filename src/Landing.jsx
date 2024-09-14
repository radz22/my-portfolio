import React, { useEffect, useState, useRef } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Left from "./components/Left";
import About from "./components/About";
import Stacks from "./Stacks";
import Expirience from "./components/Expirience";
import Projects from "./Projects";

const Landing = () => {
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);

  const followDivRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorX(event.clientX);
      setCursorY(event.clientY);
      const followDiv = followDivRef.current;
      if (followDiv) {
        followDiv.style.left = event.clientX - 330 + "px";
        followDiv.style.top = event.clientY - 320 + "px";
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,

      offset: 0,
      delay: 0,
      duration: 2000,
      easing: "ease",
      once: false,
      mirror: false,
    });
  }, []);

  return (
    <div className="w-auto h-dvh   max-xl:h-full  flex max-xl:block -z-0 overflow-x-hidden" >
      <div
        id="followDiv"
        ref={followDivRef}
        className="fixed -z-80 rounded-full items-center max-md:hidden overflow-hidden "
      ></div>

      <div className="  w-1/2 h-fit max-xl:w-full "  >
        <div className="flex  p-20 w-full   max-md:justify-center   gap-4 max-2xl:block h-full  max-md:p-6  ">
          <Left />
        </div>
      </div>

      <div  data-aos='fade-left' className=" w-1/2 h-dvh max-xl:overflow-hidden max-xl:h-fit  overflow-auto   p-20  max-xl:w-full   max-md:justify-center   gap-4 max-xl:block    max-md:p-6 ">
        <About />
        <Stacks />
        <Expirience />

        <div id="proj" >
          <h1 className="text-[#FFFFFF] text-[2rem]">Projects</h1>
          <Projects />
        </div>

        
        <div className="text-[#a8a0a0]  text-center p-5 mt-10">
          <h1>
            Built with <span className="text-white">React.js</span> and{" "}
            <span className="text-white">Tailwind CSS</span>, host on{" "}
            <span className="text-white">Render</span>.
          </h1>
          <h1>
            © 2024 <span className="text-white">Radz Santillan</span>. All
            rights reserved.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Landing;
