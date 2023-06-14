import {useState} from 'react';
import { FaRegCheckCircle ,FaRegImage, FaDraftingCompass, FaDoorOpen, FaDove } from 'react-icons/fa';

function Services() {
    const [services, setServices] = useState([
        {
            name: "Website Development",
            description: "Do you have an idea for your next great project? Let's make it a reality.",
            serviceInfo: [
                "Design the layout and structure",
                "Build the website's structure",
                "Add features and functionalities",
                "Optimize for speed and UX"
            ]
        },
        {
            name: "Website Redesign",
            description: "Creating elegant designs suited for your needs following core design theory.",
            serviceInfo: [
                "Access current website",
                "Update it's look and feel",
                "Improve website usability",
                "Add new features & functionalities"
            ]
        },
        {
            name: "Consulting",
            description: "Are you interested in feedback or advice for your project? I can help with tips and tricks.",
            serviceInfo: [
                "Personal Website",
                "Blog",
                "Company Website",
                "E-Commerce Website"
            ]
        }
    ])
  return (
    <section className='section text-center' id='services'>
        <h1 className='font-mediumWeight text-[2rem] text-titleColor mb-[0.5rem] sm:text-h1FontSize '>Services</h1>
        <span className='font-normalWeight text-smallFontSize text-textColor '>The services I offer</span>
        <div className='container mt-[4rem]'>
            <div className='grid grid-cols-1 items-center gap-4 mx-[1.5rem] sm:grid-cols-2 sm:gap-3 md:grid-cols-3 md:gap-4'>
                    {services.map((service, index) => {
                        return (
                            <div key={index} className='group'>
                                <div className='bg-containerColor pt-[6rem] pb-[2rem] px-[0.25] border-2 border-gray-100 rounded-md h-[400px] group-hover:scale-105 group-hover:border-gray-400'>
                                    <h3 className='bg-containerColor text-titleColor font-mediumWeight text-[1.15rem] mb-[1rem] md:text-h3FontSize'>{service.name}</h3>
                                    <p className='bg-containerColor text-textColor text-smallFontSize max-w-sm mb-[2rem] px-[1rem]'>{service.description}</p>
                                    <div className='flex flex-col space-y-2 pl-[1rem] bg-containerColor text-smallFontSize text-textColor'>          
                                        {service.serviceInfo.map((activity, index) => {
                                            return (
                                                <div key={index} className='flex items-center space-x-2 md:space-x-3 bg-containerColor'>
                                                    <FaRegCheckCircle />
                                                    <p className='bg-containerColor text-left'>{activity}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>
    </section>
  )
}

export default Services