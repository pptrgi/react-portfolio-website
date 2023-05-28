import {useState} from 'react';
import {FaReact, FaCss3Alt, FaGitAlt, FaGithubSquare, FaHtml5, FaJsSquare, FaNodeJs, FaTerminal, FaLinux, FaDocker} from 'react-icons/fa';
import { IoLogoPython } from 'react-icons/io';
import {SiVisualstudiocode, SiTailwindcss, SiDjango, SiPostgresql, SiFirebase, SiExpress, SiPostman, SiCanva, SiMongodb} from 'react-icons/si';

function Skills() {
    const [skills, setSkills] = useState([
        {
            id: 1,
            icon: <FaHtml5 className='bg-transparent' />,
            name: "HTML"
        },
        {
            id: 2,
            icon: <FaCss3Alt className='bg-transparent'/>,
            name: "CSS"
        },
        {
            id: 3,
            icon: <FaReact className='bg-transparent'/>,
            name: "React"
        },
        {
            id: 4,
            icon: <FaJsSquare className='bg-transparent'/>,
            name: "JavaScript"
        },
        {
            id: 5,
            icon: <SiDjango className='bg-transparent'/>,
            name: "Django"
        },
        {
            id: 6,
            icon: <FaGithubSquare className='bg-transparent'/>,
            name: "GitHub"
        },
        {
            id: 7,
            icon: <FaGitAlt className='bg-transparent'/>,
            name: "Git"
        },
        {
            id: 8,
            icon: <FaNodeJs className='bg-transparent'/>,
            name: "Node.js"
        },
        {
            id: 9,
            icon: <SiTailwindcss className='bg-transparent'/>,
            name: "Tailwind"
        },
        {
            id: 10,
            icon: <SiVisualstudiocode className='bg-transparent'/>,
            name: "VS Code"
        },
        {
            id: 11,
            icon: <FaTerminal className='bg-transparent'/>,
            name: "Terminal"
        },
        {
            id: 12,
            icon: <IoLogoPython className='bg-transparent'/>,
            name: "Python"
            
        },
        {
            id: 13,
            icon: <SiCanva className='bg-transparent'/>,
            name: "Canva"
        },
        {
            id: 14,
            icon: <SiMongodb className='bg-transparent'/>,
            name: "MongoDB"
        },
        {
            id: 15,
            icon: <SiFirebase className='bg-transparent'/>,
            name: "Firebase"
        },
        {
            id: 16,
            icon: <SiExpress className='bg-transparent'/>,
            name: "Express.js"
        },
        {
            id: 17,
            icon: <SiPostman className='bg-transparent'/>,
            name: "Postman"
        },
        {
            id: 18,
            icon: <SiPostgresql className='bg-transparent'/>,
            name: "PostgreSQL"
        }

        
    ])

  return (
    <section className='section text-center' id='skills'>
        <h1 className='text-[2rem] text-titleColor font-mediumWeight mb-[0.5rem] sm:text-h1FontSize'>Skills & Tools</h1>
        <span className='text-smallFontSize font-normalWeight text-textColor px-[0.15rem] max-w-sm '>The skills, tools and technologies I use to bring projects to life</span>
        <div className='container mt-[4rem]'>
            <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-3 md:gap-4 md:grid-cols-4 lg:gap-3 lg:grid-cols-5'>
                
                    {skills.map(skill => {
                        return (
                            <div className="bg-containerColor rounded-[1.25rem] shadow-md px-[2rem] py-[1rem]">
                                <div key={skill.id} className='flex flex-col space-y-4 items-center bg-containerColor'>
                                    <span className="bg-containerColor text-textColor text-[4rem] sm:text-[4.5rem] md:text-[5rem] lg:text-[5.5rem]">{skill.icon}</span>
                                    <span className='bg-containerColor text-smallFontSize font-mediumWeight text-titleColor'>{skill.name}</span>
                                </div>
                            </div>
                        )
                    })}
                    
                
                {/* <div className="bg-containerColor rounded-[1.25rem] shadow-md px-[2rem] py-[1rem]">
                    <div className='flex flex-col space-y-4 items-center bg-containerColor'>
                        <FaCss3Alt className="bg-containerColor text-textColor text-[4rem] sm:text-[4.5rem] md:text-[5rem] lg:text-[5.5rem]" />
                        <span className='bg-containerColor text-smallFontSize font-mediumWeight text-titleColor'>CSS</span>
                    </div>
                </div>
                <div className="bg-containerColor rounded-[1.25rem] shadow-md px-[2rem] py-[1rem]">
                    <div className='flex flex-col space-y-4 items-center bg-containerColor'>
                        <FaReact className="bg-containerColor text-textColor text-[4rem] sm:text-[4.5rem] md:text-[5rem] lg:text-[5.5rem]" />
                        <span className='bg-containerColor text-smallFontSize font-mediumWeight text-titleColor'>React</span>
                    </div>
                </div>
                <div className="bg-containerColor rounded-[1.25rem] shadow-md px-[2rem] py-[1rem]">
                    <div className='flex flex-col space-y-4 items-center bg-containerColor'>
                        <FaJsSquare className="bg-containerColor text-textColor text-[4rem] sm:text-[4.5rem] md:text-[5rem] lg:text-[5.5rem]" />
                        <span className='bg-containerColor text-smallFontSize font-mediumWeight text-titleColor'>JavaScript</span>
                    </div>
                </div>
                <div className="bg-containerColor rounded-[1.25rem] shadow-md px-[2rem] py-[1rem]">
                    <div className='flex flex-col space-y-4 items-center bg-containerColor'>
                        <IoLogoPython className="bg-containerColor text-textColor text-[4rem] sm:text-[4.5rem] md:text-[5rem] lg:text-[5.5rem]" />
                        <span className='bg-containerColor text-smallFontSize font-mediumWeight text-titleColor'>Python</span>
                    </div>
                </div>
                <div className="bg-containerColor rounded-[1.25rem] shadow-md px-[2rem] py-[1rem]">
                    <div className='flex flex-col space-y-4 items-center bg-containerColor'>
                        <FaGithubSquare className="bg-containerColor text-textColor text-[4rem] sm:text-[4.5rem] md:text-[5rem] lg:text-[5.5rem]" />
                        <span className='bg-containerColor text-smallFontSize font-mediumWeight text-titleColor'>GitHub</span>
                    </div>
                </div>
                <div className="bg-containerColor rounded-[1.25rem] shadow-md px-[2rem] py-[1rem]">
                    <div className='flex flex-col space-y-4 items-center bg-containerColor'>
                        <FaGitAlt className="bg-containerColor text-textColor text-[4rem] sm:text-[4.5rem] md:text-[5rem] lg:text-[5.5rem]" />
                        <span className='bg-containerColor text-smallFontSize font-mediumWeight text-titleColor'>Git</span>
                    </div>
                </div>
                <div className="bg-containerColor rounded-[1.25rem] shadow-md px-[2rem] py-[1rem]">
                    <div className='flex flex-col space-y-4 items-center bg-containerColor'>
                        <FaNodeJs className="bg-containerColor text-textColor text-[4rem] sm:text-[4.5rem] md:text-[5rem] lg:text-[5.5rem]" />
                        <span className='bg-containerColor text-smallFontSize font-mediumWeight text-titleColor'>Node.js</span>
                    </div>
                </div>
                <div className="bg-containerColor rounded-[1.25rem] shadow-md px-[2rem] py-[1rem]">
                    <div className='flex flex-col space-y-4 items-center bg-containerColor'>
                        <FaTerminal className="bg-containerColor text-textColor text-[4rem] sm:text-[4.5rem] md:text-[5rem] lg:text-[5.5rem]" />
                        <span className='bg-containerColor text-smallFontSize font-mediumWeight text-titleColor'>Terminal</span>
                    </div>
                </div> */}

            </div>
        </div>
    </section>
  )
}

export default Skills