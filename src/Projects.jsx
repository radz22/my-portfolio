import React from "react";
import Techcontainer from "./components/Techcontainer";
import { FaReact } from "react-icons/fa";
import { SiMongodb, SiPostgresql, SiStyledcomponents } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNetworkWired } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaNpm } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { SiExpo } from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";
import socialmedia from "../src/assets/socialmedia.png";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { SiCloudinary } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import nextecommerce from "../src/assets/nextjsecommerce.png";
import canvas from "../src/assets/canvas.png";
import scc from "../src/assets/scc.png";
import cashout from "../src/assets/cashout.png";
import library from "../src/assets/libraryy.png";
import chats from "../src/assets/chat.png";
import mobilecrud from "../src/assets/crud.jpg";
import jollibee from "../src/assets/jollibee.png";
const Projects = () => {
  return (
    <div>
      <div>
        <div className="mt-10  gap-3 items-center max-1xl:block max  flex    hover:bg-[#a8a0a021] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-2 shadow-2xl ">
          <div>
            <img
              src={socialmedia}
              className="w-[15rem]  max-1xl:w-full rounded-md shadow-xl  border h-fit flex justify-center items-center object-cover"
              alt=""
            />
          </div>
          <div>
            <div>
              <div className="   ">
                <h1 className="text-[#FFFF]">Social Media - App</h1>
              </div>
              <div className="flex gap-3 text-[#a8a0a0]">
                <a
                  href=""
                  className=" text-white flex items-center gap-2 text-opacity-90 py-1"
                >
                  Link
                  <IoIosLink />
                </a>
              </div>
            </div>
            <div className="text-[#a8a0a0]">
              <p>This is Social App Like Facebook of Features</p>
            </div>
            <div className="flex mt-3 gap-3 flex-wrap">
              <Techcontainer icon={<FaReact />} lang="React " />
              <Techcontainer icon={<SiExpress />} lang="Express" />
              <Techcontainer icon={<BiLogoPostgresql />} lang="PostgreSql" />
              <Techcontainer icon={<SiSocketdotio />} lang="Socket" />
              <Techcontainer icon={<SiTailwindcss />} lang="Tailwind" />
              <Techcontainer icon={<SiTypescript />} lang="TypeScript" />
              <Techcontainer icon={<FaNetworkWired />} lang="REST API" />
              <Techcontainer icon={<FaNodeJs />} lang="NODE" />
              <Techcontainer icon={<FaNpm />} lang="NPM" />
              <Techcontainer icon={<SiCloudinary />} lang="Cloudinary " />
            </div>
          </div>
        </div>
        <div className="  gap-3 items-center max-1xl:block max  flex   mb-14 hover:bg-[#a8a0a021] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-2 shadow-2xl ">
          <div>
            <img
              src={nextecommerce}
              className="w-[54rem]  max-1xl:w-full rounded-md shadow-xl  border h-fit flex justify-center items-center object-cover"
              alt=""
            />
          </div>
          <div>
            <div>
              <div className="">
                <h1 className="text-[#FFFF]">Ecommerce - Website</h1>
              </div>
              <div className="flex gap-3 text-[#a8a0a0]">
                <a
                  href=""
                  className=" text-white flex items-center gap-2 text-opacity-90 py-1"
                >
                  Link
                  <IoIosLink />
                </a>
              </div>
            </div>
            <div className="text-[#a8a0a0]">
              <p>This Ecommerce Website With Cod or Pay using Credit Card</p>
            </div>
            <div className="flex mt-3 gap-2 flex-wrap">
              <Techcontainer icon={<RiNextjsFill />} lang="Next" />
              <Techcontainer icon={<SiTailwindcss />} lang="Tailwind" />
              <Techcontainer icon={<SiTypescript />} lang="TypeScript" />
              <Techcontainer icon={<FaNetworkWired />} lang="REST API" />
              <Techcontainer icon={<FaNodeJs />} lang="NODE" />
              <Techcontainer icon={<FaNpm />} lang="NPM" />
              <Techcontainer icon={<SiExpress />} lang="Express" />
              <Techcontainer icon={<SiMongodb />} lang="Mongodb" />
              <Techcontainer icon={""} lang="Authjs" />
            </div>
          </div>
        </div>
        <div className="  gap-3 items-center max-1xl:block max  flex   mb-14 hover:bg-[#a8a0a021] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-2 shadow-2xl ">
          <div>
            <img
              src={canvas}
              className="w-[54rem]  max-1xl:w-full rounded-md shadow-xl  border h-fit flex justify-center items-center object-cover"
              alt=""
            />
          </div>
          <div>
            <div>
              <div className="   ">
                <h1 className="text-[#FFFF]">Canvas - Website</h1>
              </div>
              <div className="flex gap-3 text-[#a8a0a0]">
                <a
                  href="https://canvas-ncp1.onrender.com"
                  className=" text-white flex items-center gap-2 text-opacity-90 py-1"
                >
                  Link
                  <IoIosLink />
                </a>
              </div>
            </div>
            <div className="text-[#a8a0a0]">
              <p>This is a canva clone this website have canva like tool</p>
            </div>
            <div className="flex mt-3 gap-2 flex-wrap">
              <Techcontainer icon={<FaReact />} lang="React" />
              <Techcontainer icon={<SiTypescript />} lang="TypeScript" />
              <Techcontainer icon={<FaNetworkWired />} lang="REST API" />
              <Techcontainer icon={<FaNodeJs />} lang="NodeJs" />
              <Techcontainer icon={<SiMongodb />} lang="Mongodb" />
              <Techcontainer icon={<SiExpress />} lang="Express" />
              <Techcontainer icon={<SiTailwindcss />} lang="Tailwind CSS" />
              <Techcontainer icon={<SiCloudinary />} lang="Cloudinary " />
              <Techcontainer icon={<FaNpm />} lang="NPM " />
              <Techcontainer lang="Render " />
              <Techcontainer icon={""} lang="Konva " />
              <Techcontainer
                icon={<FaGoogle />}
                lang="React Google Authentication "
              />
            </div>
          </div>
        </div>
        <div className="  gap-3 items-center max-1xl:block max  flex   mb-14 hover:bg-[#a8a0a021] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-2 shadow-2xl ">
          <div>
            <img
              src={scc}
              className="w-[54rem]  max-1xl:w-full rounded-md shadow-xl  border h-fit flex justify-center items-center object-cover"
              alt=""
            />
          </div>
          <div>
            <div>
              <div className="   ">
                <h1 className="text-[#FFFF]">SCC Enrollment - Website</h1>
              </div>
              <div className="flex gap-3 text-[#a8a0a0]">
                <a
                  href="https://scc-wthw.onrender.com"
                  className=" text-white flex items-center gap-2 text-opacity-90 py-1"
                >
                  Link
                  <IoIosLink />
                </a>
              </div>
            </div>
            <div className="text-[#a8a0a0]">
              <p>This is Baby Thesis</p>
            </div>
            <div className="flex mt-3 gap-2 flex-wrap">
              <Techcontainer icon={<FaReact />} lang="React" />
              <Techcontainer icon={<SiExpress />} lang="Express" />
              <Techcontainer icon={<SiTypescript />} lang="TypeScript" />
              <Techcontainer icon={<FaNetworkWired />} lang="REST API" />
              <Techcontainer icon={<FaNodeJs />} lang="NodeJs" />
              <Techcontainer icon={<SiTailwindcss />} lang="Tailwind CSS" />
              <Techcontainer icon={<SiMongodb />} lang="MongoDB " />
              <Techcontainer icon={<FaNpm />} lang="NPM " />
              <Techcontainer lang="Render " />
              <Techcontainer
                icon={<FaGoogle />}
                lang="React Google Authentication "
              />
            </div>
          </div>
        </div>

        <div className="  gap-3 items-center max-1xl:block max  flex   mb-14 hover:bg-[#a8a0a021] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-2 shadow-2xl ">
          <div>
            <img
              src={cashout}
              className="w-[54rem]  max-1xl:w-full rounded-md shadow-xl  border h-fit flex justify-center items-center object-cover"
              alt=""
            />
          </div>
          <div>
            <div>
              <div className="   ">
                <h1 className="text-[#FFFF]">Cashout System</h1>
              </div>
              <div className="flex gap-3 text-[#a8a0a0]">
                <a
                  href="https://cashout-frontend.onrender.com/"
                  className=" text-white flex items-center gap-2 text-opacity-90 py-1"
                >
                  Link
                  <IoIosLink />
                </a>
              </div>
            </div>
            <div className="text-[#a8a0a0]">
              <p>
                This is my System to track my Profit from my business Gcash and
                store ref. number
              </p>
            </div>
            <div className="flex mt-3 gap-2 flex-wrap">
              <Techcontainer icon={<FaReact />} lang="React" />
              <Techcontainer icon={<SiExpress />} lang="Express" />
              <Techcontainer icon={<FaNetworkWired />} lang="REST API" />
              <Techcontainer icon={<FaNodeJs />} lang="NodeJs" />
              <Techcontainer icon={<SiTailwindcss />} lang="Tailwind CSS" />
              <Techcontainer icon={<SiMongodb />} lang="MongoDB " />
              <Techcontainer icon={<FaNpm />} lang="NPM " />
              <Techcontainer lang="Render " />
            </div>
          </div>
        </div>
      </div>

      <div className="  gap-3 items-center max-1xl:block max  flex   mb-14 hover:bg-[#a8a0a021] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-2 shadow-2xl ">
        <div>
          <img
            src={library}
            className="w-[40rem] max-1xl:w-full rounded-md shadow-xl max-md:w-full max-md: mb-3 border h-fit flex justify-center items-center object-cover"
            alt=""
          />
        </div>
        <div>
          <div>
            <div className="   ">
              <h1 className="text-[#FFFF]">Library - Website</h1>
            </div>
            <div className="flex gap-3 text-[#a8a0a0]">
              <a
                href="https://libraryfrontend-upkq.onrender.com"
                className=" text-white flex items-center gap-2 text-opacity-90 py-1"
              >
                Link
                <IoIosLink />
              </a>
            </div>
          </div>
          <div className="text-[#a8a0a0]">
            <p>This website to track who borrowed the book and deadline</p>
          </div>
          <div className="flex mt-3 gap-3 flex-wrap">
            <Techcontainer icon={<FaReact />} lang="React" />
            <Techcontainer icon={<SiExpress />} lang="Express" />
            <Techcontainer icon={<FaNetworkWired />} lang="REST API" />
            <Techcontainer icon={<FaNodeJs />} lang="NodeJs" />
            <Techcontainer icon={<SiTailwindcss />} lang="Tailwind CSS" />
            <Techcontainer icon={<SiMongodb />} lang="MongoDB " />
            <Techcontainer icon={<FaNpm />} lang="NPM " />
            <Techcontainer lang="Render " />
          </div>
        </div>
      </div>

      <div className="  gap-3 items-center max-1xl:block   flex   mb-14 hover:bg-[#a8a0a021] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-2 shadow-2xl ">
        <div>
          <img
            src={chats}
            className="w-[40rem] max-1xl:w-full rounded-md shadow-xl max-md:w-full max-md: mb-3 border h-fit flex justify-center items-center object-cover"
            alt=""
          />
        </div>
        <div>
          <div>
            <div className="   ">
              <h1 className="text-[#FFFF]">Simple Chat App - Website</h1>
            </div>
            <div className="flex gap-3 text-[#a8a0a0]">
              <a
                href="https://chatapp-frontend-t6ld.onrender.com/"
                className=" text-white flex items-center gap-2 text-opacity-90 py-1"
              >
                Link
                <IoIosLink />
              </a>
            </div>
          </div>
          <div className="text-[#a8a0a0]">
            <p>This Website is Realtime Chat to another People</p>
          </div>
          <div className="flex mt-3 gap-3 flex-wrap">
            <Techcontainer icon={<FaReact />} lang="React" />
            <Techcontainer icon={<SiTailwindcss />} lang="Tailwind CSS" />
            <Techcontainer icon={<SiSocketdotio />} lang="Socket" />
            <Techcontainer icon={<FaNpm />} lang="NPM " />
            <Techcontainer lang="Render " />
          </div>
        </div>
      </div>
      <div className="  gap-3 items-center max-1xl:block max  flex    hover:bg-[#a8a0a021] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-2 shadow-2xl ">
        <div>
          <img
            src={mobilecrud}
            className="w-[40rem] max-1xl:w-full rounded-md shadow-xl max-md:w-full max-md: mb-3 border h-fit flex justify-center items-center object-cover"
            alt=""
          />
        </div>
        <div>
          <div>
            <div className="   ">
              <h1 className="text-[#FFFF]">Simple Crud - Mobile</h1>
            </div>
            <div className="flex gap-3 text-[#a8a0a0]">
              <a
                href=""
                className=" text-white flex items-center gap-2 text-opacity-90 py-1"
              >
                Link
                <IoIosLink />
              </a>
            </div>
          </div>
          <div className="text-[#a8a0a0]">
            <p>This Simple Crud in Mobile</p>
          </div>
          <div className="flex mt-3 gap-3 flex-wrap">
            <Techcontainer icon={<SiExpo />} lang="React Native" />
            <Techcontainer icon={<SiTypescript />} lang="TypeScript" />
            <Techcontainer icon={<SiExpress />} lang="Express" />
            <Techcontainer icon={<FaNetworkWired />} lang="REST API" />
            <Techcontainer icon={<FaNodeJs />} lang="NodeJs" />
            <Techcontainer icon={<SiPostgresql />} lang="PostgreSql " />
            <Techcontainer icon={<FaNpm />} lang="NPM " />
          </div>
        </div>
      </div>
      <div className="mt-10  gap-3 items-center max-1xl:block max  flex    hover:bg-[#a8a0a021] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-2 shadow-2xl ">
        <div>
          <img
            src={jollibee}
            className="w-[15rem]  max-1xl:w-full rounded-md shadow-xl  border h-fit flex justify-center items-center object-cover"
            alt=""
          />
        </div>
        <div>
          <div>
            <div className="   ">
              <h1 className="text-[#FFFF]">Jollibee - Website</h1>
            </div>
            <div className="flex gap-3 text-[#a8a0a0]">
              <a
                href=""
                className=" text-white flex items-center gap-2 text-opacity-90 py-1"
              >
                Link
                <IoIosLink />
              </a>
            </div>
          </div>
          <div className="text-[#a8a0a0]">
            <p>This is Jollibee Clone</p>
          </div>
          <div className="flex mt-3 gap-3 flex-wrap">
            <Techcontainer icon={<FaReact />} lang="React " />
            <Techcontainer icon={<SiStyledcomponents />} lang="CSS " />

            <Techcontainer icon={<FaNpm />} lang="NPM " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
