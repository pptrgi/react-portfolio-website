import { FaWhatsapp, FaPhone } from "react-icons/fa";
import { BiRightArrowAlt } from "react-icons/bi";
import { BsEnvelopeAt } from "react-icons/bs";

function ContactMeans() {
  return (
    <div className="text-center">
      <h3 className="text-h3FontSize text-titleColor font-mediumWeight mb-[1rem]">
        Email | Whatsapp | Call
      </h3>
      <div className="flex flex-col items-center space-y-[0.75rem]">
        <div className="bg-containerColor flex flex-col items-center gap-[0.4rem] pt-[1.25rem] pb-[1rem] px-[2.5rem] rounded-sm shadow-md w-[260px] sm:w-[250px] md:w-[250px] lg:w-[300px]">
          <BsEnvelopeAt className="bg-containerColor text-titleColor text-h2FontSize" />
          <h3 className="bg-containerColor text-normalFontSize text-titleColor font-mediumWeight">
            Email
          </h3>
          <h4 className="bg-containerColor text-normalFontSize text-textColor">
            pptrgitonga@gmail.com
          </h4>
          <div className="bg-containerColor flex space-x-1 items-center mt-[1.25rem] hover:text-titleColorDark hover:font-mediumWeight">
            <a
              href="mailto:pptrgitonga@gmail.com"
              className="bg-containerColor text-textColor text-smallFontSize "
            >
              Send email
            </a>
            <BiRightArrowAlt className="bg-containerColor text-textColor text-normalFontSize" />
          </div>
        </div>

        <div className="bg-containerColor flex flex-col items-center gap-[0.4rem] pt-[1.25rem] pb-[1rem] px-[2.5rem] rounded-sm shadow-md w-[260px] sm:w-[250px] md:w-[250px] lg:w-[300px]">
          <FaWhatsapp className="bg-containerColor text-titleColor text-h2FontSize" />
          <h3 className="bg-containerColor text-normalFontSize text-titleColor font-mediumWeight">
            Whatsapp
          </h3>
          <h4 className="bg-containerColor text-normalFontSize text-textColor">
            254-700-119-134
          </h4>
          <div className="bg-containerColor flex space-x-1 items-center mt-[1.25rem] hover:text-titleColorDark hover:font-mediumWeight">
            <a
              href="https://wa.me/254700119134"
              className="bg-containerColor text-textColor text-smallFontSize"
            >
              Send text
            </a>
            <BiRightArrowAlt className="bg-containerColor text-textColor text-normalFontSize" />
          </div>
        </div>

        <div className="bg-containerColor flex flex-col items-center gap-[0.4rem] pt-[1.25rem] pb-[1rem] px-[2.5rem] rounded-sm shadow-md w-[260px] sm:w-[250px] md:w-[250px] lg:w-[300px]">
          <FaPhone className="bg-containerColor text-titleColor text-h2FontSize" />
          <h3 className="bg-containerColor text-normalFontSize text-titleColor font-mediumWeight">
            Phone Call
          </h3>
          <h4 className="bg-containerColor text-normalFontSize text-textColor">
            +254 700 119 134
          </h4>
          <div className="bg-containerColor flex space-x-1 items-center mt-[1.25rem]">
            <span
              className="bg-transparent text-textColor text-smallFontSize
            hover:text-titleColorDark hover:font-mediumWeight"
            >
              {" "}
              <a href="tel:254700119134" className="bg-transparent">
                Call Now
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMeans;
