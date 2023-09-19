import SkillCard from "./SkillCard";
import { skills } from "./SkillsData";

function Skills() {
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
                <SkillCard skill={skill} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
