import React from "react";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss, SiMongodb, SiExpress, SiPostman, SiGithub, SiCanva,
} from "react-icons/si";
import { BsMicrosoft } from "react-icons/bs";
import { TbBrandOpenai } from "react-icons/tb";
import { SiGoogle } from "react-icons/si";

function Skills() {
  const skills = [
    { icon: <FaHtml5 color="#e34c26" />, name: "HTML" },
    { icon: <FaCss3Alt color="#264de4" />, name: "CSS" },
    { icon: <FaJs color="#f0db4f" />, name: "JavaScript" },
    { icon: <FaReact color="#61DBFB" />, name: "React.js" },
    { icon: <FaNodeJs color="#68A063" />, name: "Node.js" },
    { icon: <SiExpress color="#ffffff" />, name: "Express.js" },
    { icon: <SiMongodb color="#4DB33D" />, name: "MongoDB" },
    { icon: <SiTailwindcss color="#38BDF8" />, name: "Tailwind CSS" },
    { icon: <FaGitAlt color="#f34f29" />, name: "Git" },
    { icon: <SiGithub color="#ffffff" />, name: "GitHub" },
    { icon: <SiPostman color="#FF6C37" />, name: "Postman" },
    { icon: <SiCanva color="#264de4" />, name: "Canva" },
    { icon: <BsMicrosoft color="#F25022" />, name: "MS Office" },
    { icon: <TbBrandOpenai color="#10A37F" />, name: "ChatGPT" },
    { icon: <SiGoogle color="#4285F4" />, name: "Gemini AI" },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-6 bg-gradient-to-br from-[#6E33F4] via-[#6B6EF7] to-[#33E4B2] text-white"
    >
      <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-xl p-10 rounded-3xl shadow-lg">
        <h2 className="text-4xl font-bold text-center mb-12 font-titillium">Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg p-5 rounded-xl w-full flex flex-col items-center justify-center shadow-md hover:scale-110 transition-transform duration-300"
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <p className="text-sm text-black text-center font-medium font-titillium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
