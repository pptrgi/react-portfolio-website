import { FaRegCheckCircle } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-containerColor pt-[6rem] pb-[2rem] px-[0.25] border-2 border-gray-100 rounded-md h-[400px] max-w-sm group-hover:scale-105 group-hover:border-gray-400 transition-all duration-300">
      <h3 className="bg-containerColor text-titleColor font-mediumWeight text-[1.15rem] mb-[1rem] md:text-h3FontSize">
        {service.name}
      </h3>
      <p className="bg-containerColor text-textColor text-smallFontSize max-w-sm mb-[2rem] px-[1rem]">
        {service.description}
      </p>
      <div className="flex flex-col space-y-2 pl-[1rem] bg-containerColor text-smallFontSize text-textColor">
        {service.serviceInfo.map((activity, index) => {
          return (
            <div
              key={index}
              className="flex items-center space-x-2 md:space-x-3 bg-containerColor"
            >
              <FaRegCheckCircle />
              <p className="bg-containerColor text-left truncate">{activity}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceCard;
