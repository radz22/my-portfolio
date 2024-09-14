import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { PiArrowBendUpRightThin } from "react-icons/pi";
import { RxCross1 } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";
const Left = () => {
  const [display, setDisplay] = useState(false);

  setTimeout(() => {
    setDisplay(!display);
  }, 10000);
  return (
    <div className=" gap-3 flex w-fit">
      <div>
        <h1 className="text-white text-[3rem] font-[400] max-md:text-[2rem] ">
          Radz Santillan
        </h1>
        <h1 className="text-[#a8a0a0] text-[2rem] font-[400]  max-md:text-[1.4rem]">
          Aspiring Full-Stack Developer
        </h1>
        <h1 className="text-[#a8a0a0] text-[1rem] font-[400] max-lg:w-[20rem] ">
          I build responsive, elegant products and digital experiences for the
          web and mobile
        </h1>
        <div className="  flex   text-[#a8a0a0] items-center gap-3 mt-2">
          <a
            href="https://www.linkedin.com/in/radzsantillan/"
            className="text-[1.7rem] hover:text-[#b165d4]"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/radz22"
            className="text-[1.7rem] hover:text-[#b165d4]"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/radzsantillan/"
            className="text-[1.7rem] hover:text-[#b165d4]"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/radzsantillann"
            className="text-[1.7rem] hover:text-[#b165d4]"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.tiktok.com/@brocodes23"
            className="text-[1.7rem] hover:text-[#b165d4]"
          >
            <FaTiktok />
          </a>
        </div>
        <div className=" mt-6 m-auto  ">
          <h1 className="text-[#FFFFFF] text-[2rem] mb-2 ">Education</h1>

          <div className="flex gap-3 flex-wrap  w-fit hover:bg-[#a8a0a021] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-2  ">
            <h1 className="text-[#FFFF]">Tertiary - ST CLARE COLLEGE</h1>
            <h1 className="text-[#b165d4]"> 2022 - 2028</h1>
          </div>

          <div className="text-[#a8a0a0] text-xl font-[300] mr-3 mt-16 flex justify-center   w-1/2  text-center max-md:hidden">
            <div>
              <div className="cursor-pointer group transition duration-200  delay-200 linear  hover:text-white hover:translate-x-10 p-2">
                <a className="flex items-center gap-2   ">
                  <a
                    href="#skl"
                    className="bg-white border-b h-fit w-[1.6rem] transition-all duration-300 group-hover:w-[3rem]"
                  ></a>
                  <a href="#skl">Skills</a>
                </a>
              </div>

              <div className="cursor-pointer group transition duration-200  delay-200 linear  hover:text-white hover:translate-x-10 p-2">
                <a className="flex items-center gap-2   ">
                  <a
                    href="#exp"
                    className="bg-white border-b h-fit w-[1.6rem] transition-all duration-300 group-hover:w-[3rem]"
                  ></a>
                  <a href="#exp">Experience</a>
                </a>
              </div>

              <div className="cursor-pointer group transition duration-200  delay-200 linear  hover:text-white hover:translate-x-10 p-2">
                <a className="flex items-center gap-2   ">
                  <a
                    href="#proj"
                    className="bg-white border-b h-fit w-[1.6rem] transition-all duration-300 group-hover:w-[3rem]"
                  ></a>
                  <a href="#proj">Projects</a>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {display ? (
        <div
          className=" -z-0 absolute bottom-10 max-1xl:fixed max-1xl:right-7 rounded-br-lg shadow-xl rounded-t-lg opacity-70  bg-[#00000094] w-fit h-fit p-3  "
          id="toggle"
          data-aos="fade-right"
        >
          <div className="flex gap-3 ">
            <h1 class="text-white text-[1.5rem]    text-center">
              Are you interested?
            </h1>
            <button
              className="text-white hover:text-[#b165d4]"
              onClick={() => {
                setDisplay(false);
              }}
            >
              <RxCross1 />
            </button>
          </div>
          <button className="text-center ">
            <a
              href="mailto:martinezmarc228@gmail.com"
              class="text-white text-[1.2rem]  flex justify-center  text-center"
            >
              <h1 className="text-center text-[#b165d4] hover:text-[#a8a0a0] flex items-center gap-3">
                Message Me <PiArrowBendUpRightThin />
              </h1>
            </a>
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Left;
