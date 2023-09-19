import ServiceCard from "./ServiceCard";
import { services } from "./ServicesData";

function Services() {
  return (
    <section className="section text-center" id="services">
      <h1 className="font-mediumWeight text-[2rem] text-titleColor mb-[0.5rem] sm:text-h1FontSize ">
        Services
      </h1>
      <span className="font-normalWeight text-smallFontSize text-textColor ">
        The services I offer
      </span>
      <div className="container mt-[4rem]">
        <div className="grid grid-cols-1 items-center gap-4 mx-[1.38rem] sm:grid-cols-2 md:grid-cols-3 sm:gap-3 sm:mx-[0.75rem] md:mx-[0.25rem] lg:mx-[1.5rem] md:gap-2 lg:gap-4">
          {services.map((service, index) => {
            return (
              <div key={index} className="group">
                <ServiceCard service={service} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
