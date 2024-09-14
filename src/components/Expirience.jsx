import React from "react";

const Expirience = () => {
  return (
    <div>
      <div className="mt-20" id="res">
        <h1 className="text-[#FFFFFF] text-[2rem] mb-2 ">Experience</h1>
        <div className="flex gap-3 flex-wrap  mb-16 hover:bg-[#a8a0a021] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-2 shadow-2xl ">
          <h1 className="text-[#FFFF]">Fullstack Web Developer - Freelance</h1>
          <h1 className="text-[#b165d4]">Sept. 2023 - January. 2024</h1>
          <div className="text-[#a8a0a0]">
            In my current role develop responsive visual design using React and
            Tailwind CSS and create more functionality in the web base what
            client needed in this project . collaboration in another aspiring
            develop to enhance my communication skills and my technical skills.
          </div>
        </div>

        <div className="bg-[#a8a0a021] mb-10 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 ">
          <div className="cursor-pointer group transition duration-200  delay-200 linear text-[#a8a0a0]  hover:text-white hover:translate-x-10 p-2 ">
            <div className="flex items-center gap-2   ">
              <span className="bg-white border-b h-fit w-[1.6rem]   transition-all duration-300 group-hover:w-[3rem]"></span>
              <a
                href="https://drive.google.com/file/d/1be0bS3rdHSNGV_8TfnkY1Tfy_8B9h_U0/view?usp=drive_link"
                className="text-[1.4rem]"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expirience;
