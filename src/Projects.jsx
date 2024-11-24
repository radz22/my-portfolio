import React from "react";
import Techcontainer from "./components/Techcontainer";
import { FaReact } from "react-icons/fa";
import { SiMongodb, SiStyledcomponents, SiExpo } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNetworkWired } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaNpm } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { SiSocketdotio } from "react-icons/si";
import socialmedia from "../src/assets/socialmedia.png";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { SiCloudinary } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";

import nextecommerce from "../src/assets/nextjsecommerce.png";
import canvas from "../src/assets/canvas.png";
import scc from "../src/assets/scc.png";
import cashout from "../src/assets/cashout.png";
import library from "../src/assets/libraryy.png";
import chats from "../src/assets/chat.png";
import jollibee from "../src/assets/jollibee.png";
import fundamaze from "../src/assets/fundamaze.jpg";
import bonbon from "../src/assets/bonbon.png";

const Projects = () => {
  return (
    <div>
      <div className="w-full">
        <div className="mt-10 w-full gap-3  max-1xl:block max hover:bg-[#a8a0a021] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-2 shadow-2xl ">
          <div>
            <img
              src={bonbon}
              className="w-full h-[40vh]  rounded-md shadow-xl  border flex justify-center items-center object-cover"
              alt=""
            />
          </div>
          <div>
            <div>
              <div className="   ">
                <h1 className="text-[#FFFF]">Barangay System </h1>
              </div>
              <div className="flex gap-3 text-[#a8a0a0]">
                <a
                  href="https://drive.google.com/drive/u/6/folders/1-4EvPh3QYePRqKWhFyN--T8b5LX1Idop"
                  className=" text-white flex items-center gap-2 text-opacity-90 py-1"
                >
                  Link
                  <IoIosLink />
                </a>
              </div>
            </div>
            <div className="text-[#a8a0a0]">
              <p>
                This project is my client's capstone project. It is a barangay
                system and is currently under development.
              </p>
            </div>
            <div className="flex mt-3 gap-3 flex-wrap">
              <Techcontainer icon={<FaReact />} lang="React" />
              <Techcontainer icon={<SiExpress />} lang="Express" />
              <Techcontainer icon={<BiLogoPostgresql />} lang="Postgre SQL" />
              <Techcontainer icon={<SiGooglemaps />} lang="Google Map API" />
              <Techcontainer icon={<FaNetworkWired />} lang="REST API" />
              <Techcontainer icon={<FaNodeJs />} lang="NODE" />
              <Techcontainer icon={<FaNpm />} lang="NPM" />
              <Techcontainer icon={<SiCloudinary />} lang="Cloudinary " />
            </div>
          </div>
        </div>
        <div className="mt-10 w-full gap-3  max-1xl:block max hover:bg-[#a8a0a021] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-2 shadow-2xl ">
          <div>
            <img
              src={fundamaze}
              className="w-full h-[40vh]  rounded-md shadow-xl  border flex justify-center items-center object-cover"
              alt=""
            />
          </div>
          <div>
            <div>
              <div className="   ">
                <h1 className="text-[#FFFF]">Mobile Game - App</h1>
              </div>
              <div className="flex gap-3 text-[#a8a0a0]">
                <a
                  href="https://drive.google.com/drive/u/6/folders/1-4EvPh3QYePRqKWhFyN--T8b5LX1Idop"
                  className=" text-white flex items-center gap-2 text-opacity-90 py-1"
                >
                  Link
                  <IoIosLink />
                </a>
              </div>
            </div>
            <div className="text-[#a8a0a0]">
              <p>
                This project is a capstone project of my client more on Equation
                when you answer an equation a red door will open. This game is
                inspired by the maze game
              </p>
            </div>
            <div className="flex mt-3 gap-3 flex-wrap">
              <Techcontainer icon={<FaReact />} lang="React Native" />
              <Techcontainer icon={<SiExpress />} lang="Express" />
              <Techcontainer icon={<SiExpo />} lang="Expo" />
              <Techcontainer icon={<SiMongodb />} lang="Mongodb" />
              <Techcontainer icon={<SiTypescript />} lang="TypeScript" />
              <Techcontainer icon={<FaNetworkWired />} lang="REST API" />
              <Techcontainer icon={<FaNodeJs />} lang="NODE" />
              <Techcontainer icon={<FaNpm />} lang="NPM" />
              <Techcontainer icon={<SiCloudinary />} lang="Cloudinary " />
            </div>
          </div>
        </div>
        <div className="mt-10 w-full gap-3  max-1xl:block max hover:bg-[#a8a0a021] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-2 shadow-2xl ">
          <div>
            <img
              src={socialmedia}
              className="w-full h-[40vh]  rounded-md shadow-xl  border flex justify-center items-center object-cover"
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
        <div className="mt-10 w-full gap-3  max-1xl:block max hover:bg-[#a8a0a021] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-2 shadow-2xl ">
          <div>
            <img
              src={nextecommerce}
              className="w-full h-[40vh]  rounded-md shadow-xl  border flex justify-center items-center object-cover"
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
        <div className=" mt-10 w-full gap-3  max-1xl:block max hover:bg-[#a8a0a021] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-2 shadow-2xl ">
          <div>
            <img
              src={canvas}
              className="w-full h-[40vh]  rounded-md shadow-xl  border flex justify-center items-center object-cover"
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
        <div className="mt-10 w-full gap-3  max-1xl:block max hover:bg-[#a8a0a021] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-2 shadow-2xl">
          <div>
            <img
              src={scc}
              className="w-full h-[40vh]  rounded-md shadow-xl  border flex justify-center items-center object-cover"
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

        <div className="mt-10 w-full gap-3  max-1xl:block max hover:bg-[#a8a0a021] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-2 shadow-2xl">
          <div>
            <img
              src={cashout}
              className="w-full h-[40vh]  rounded-md shadow-xl  border flex justify-center items-center object-cover"
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

        <div className="mt-10 w-full gap-3  max-1xl:block max hover:bg-[#a8a0a021] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-2 shadow-2xl">
          <div>
            <img
              src={library}
              className="w-full h-[40vh]  rounded-md shadow-xl  border flex justify-center items-center object-cover"
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

        <div className="mt-10 w-full gap-3  max-1xl:block max hover:bg-[#a8a0a021] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-2 shadow-2xl">
          <div>
            <img
              src={chats}
              className="w-full h-[40vh]  rounded-md shadow-xl  border flex justify-center items-center object-cover"
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

        <div
          className="mt-10 w-full gap-3  max-1xl:block max hover:bg-[#a8a0a021] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-2 shadow-2xl
"
        >
          <div>
            <img
              src={jollibee}
              className="w-full h-[40vh]  rounded-md shadow-xl  border flex justify-center items-center object-cover"
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
    </div>
  );
};

export default Projects;
