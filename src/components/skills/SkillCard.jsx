const SkillCard = ({ skill }) => {
  return (
    <div className="flex flex-col space-y-4 items-center bg-containerColor">
      <span className="bg-containerColor text-textColor text-[4rem] sm:text-[4.5rem] md:text-[5rem] lg:text-[5.5rem]">
        {skill.icon}
      </span>
      <span className="bg-containerColor text-smallFontSize font-mediumWeight text-titleColor">
        {skill.name}
      </span>
    </div>
  );
};

export default SkillCard;
