import React from "react";
import Techcontainer from "./components/Techcontainer";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNetworkWired } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaNpm } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { SiInsomnia } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { SiExpo } from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiCloudinary } from "react-icons/si";

const Stacks = () => {
  return (
    <div>
      <div id="exp">
        <h1 className="text-[#FFFFFF] text-[2rem] mb-2 mt-16">Technologies</h1>
        <div className="flex gap-3 flex-wrap  ">
          <Techcontainer icon={<FaReact />} lang="React" />
          <Techcontainer icon={<TbBrandVscode />} lang="VS code" />
          <Techcontainer icon={<SiExpress />} lang="Express" />
          <Techcontainer icon={<IoLogoFigma />} lang="Figma" />
          <Techcontainer icon={<FaNetworkWired />} lang="REST API" />
          <Techcontainer icon={<FaReact />} lang="React Native" />
          <Techcontainer icon={<SiInsomnia />} lang="Insomnia" />
          <Techcontainer icon={<FaNodeJs />} lang="NodeJs" />
          <Techcontainer icon={<SiTailwindcss />} lang="Tailwind CSS" />
          <Techcontainer icon={<SiTypescript />} lang="Typescript " />
          <Techcontainer icon={<SiExpo />} lang="Expo " />
          <Techcontainer icon={<SiSocketdotio />} lang="Socket.io " />
          <Techcontainer icon={<SiPostman />} lang="Postman" />
          <Techcontainer icon={<FaNpm />} lang="NPM " />
          <Techcontainer icon={<RiNextjsFill />} lang="Nextjs " />
          <Techcontainer icon={""} lang="Authjs " />
        </div>
      </div>
      <div>
        <h1 className="text-[#FFFFFF] text-[2rem] mb-2">Database</h1>
        <div className="flex gap-3 flex-wrap  ">
          <Techcontainer icon={<SiMongodb />} lang="MongoDB" />
          <Techcontainer icon={<BiLogoPostgresql />} lang="PostgreSql " />
        </div>
      </div>

      <div>
        <h1 className="text-[#FFFFFF] text-[2rem] mb-2">Cloud Services</h1>
        <div className="flex gap-3 flex-wrap  ">
          <Techcontainer lang="Render" />

          <Techcontainer icon={<SiNetlify />} lang="Netlify" />
          <Techcontainer icon={<IoLogoVercel />} lang="Vercel" />
          <Techcontainer icon={<FaGithub />} lang="Github" />
          <Techcontainer icon={<SiCloudinary />} lang="Cloudinary" />
        </div>
      </div>
    </div>
  );
};

export default Stacks;
