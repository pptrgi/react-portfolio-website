import { useState } from "react";
import {
  FaReact,
  FaCss3Alt,
  FaGitAlt,
  FaGithubSquare,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaTerminal,
  FaLinux,
  FaDocker,
} from "react-icons/fa";
import { IoLogoPython } from "react-icons/io";
import {
  SiVisualstudiocode,
  SiTailwindcss,
  SiDjango,
  SiPostgresql,
  SiFirebase,
  SiExpress,
  SiPostman,
  SiCanva,
  SiMongodb,
} from "react-icons/si";

function Skills() {
  const [skills, setSkills] = useState([
    {
      icon: <FaHtml5 className="bg-transparent" />,
      name: "HTML5",
    },
    {
      icon: <FaCss3Alt className="bg-transparent" />,
      name: "CSS3",
    },
    {
      icon: <FaJsSquare className="bg-transparent" />,
      name: "JavaScript (ES6)",
    },
    {
      icon: <FaReact className="bg-transparent" />,
      name: "React",
    },
    {
      icon: <FaNodeJs className="bg-transparent" />,
      name: "Node.js",
    },
    {
      icon: <SiExpress className="bg-transparent" />,
      name: "Express.js",
    },
    {
      icon: <SiTailwindcss className="bg-transparent" />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiMongodb className="bg-transparent" />,
      name: "MongoDB",
    },
    {
      icon: <FaGitAlt className="bg-transparent" />,
      name: "Git",
    },
    {
      icon: <FaGithubSquare className="bg-transparent" />,
      name: "GitHub",
    },
    {
      icon: <SiPostgresql className="bg-transparent" />,
      name: "PostgreSQL",
    },
    {
      icon: <SiVisualstudiocode className="bg-transparent" />,
      name: "VS Code",
    },
    {
      icon: <FaTerminal className="bg-transparent" />,
      name: "Terminal",
    },
    {
      icon: <IoLogoPython className="bg-transparent" />,
      name: "Python",
    },
    {
      icon: <SiCanva className="bg-transparent" />,
      name: "Canva",
    },
    {
      icon: <SiPostman className="bg-transparent" />,
      name: "Postman",
    },
    {
      icon: <SiDjango className="bg-transparent" />,
      name: "Django",
    },
  ]);

  return (
    <section className="section text-center" id="skills">
      <h1 className="text-[2rem] text-titleColor font-mediumWeight mb-[0.5rem] sm:text-h1FontSize">
        Skills & Tools
      </h1>
      <span className="text-smallFontSize font-normalWeight text-textColor px-[0.15rem] max-w-sm ">
        The skills, tools and technologies I use to bring projects to life
      </span>
      <div className="container mt-[4rem]">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-3 md:gap-4 md:grid-cols-4 lg:gap-3 lg:grid-cols-5">
          {skills.map((skill, index) => {
            return (
              <div
                key={index}
                className="bg-containerColor rounded-[1.25rem] shadow-md px-[2rem] py-[1rem] hover:shadow-lg"
              >
                <div className="flex flex-col space-y-4 items-center bg-containerColor">
                  <span className="bg-containerColor text-textColor text-[4rem] sm:text-[4.5rem] md:text-[5rem] lg:text-[5.5rem]">
                    {skill.icon}
                  </span>
                  <span className="bg-containerColor text-smallFontSize font-mediumWeight text-titleColor">
                    {skill.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
