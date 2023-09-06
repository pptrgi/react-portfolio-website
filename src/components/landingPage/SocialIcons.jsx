import React from "react";
import { BsFacebook, BsTwitter, BsLinkedin, BsWhatsapp } from "react-icons/bs";

function SocialIcons() {
  return (
    <div className="flex flex-row justify-center space-x-4 items-center sm:space-x-[1.25rem]">
      <a href="https://twitter.com/ptrgitonga">
        <BsTwitter
          size={18}
          className="bg-containerColor text-titleColor hover:text-titleColorDark"
        />
      </a>
      <a href="https://wa.me/254700119134">
        <BsWhatsapp
          size={18}
          className="bg-containerColor text-titleColor hover:text-titleColorDark"
        />
      </a>
      <a href="https://www.linkedin.com/in/petergitonga">
        <BsLinkedin
          size={18}
          className="bg-containerColor text-titleColor hover:text-titleColorDark"
        />
      </a>
      <a href="https://www.facebook.com/pptrgitonga">
        <BsFacebook
          size={18}
          className="bg-containerColor text-titleColor hover:text-titleColorDark"
        />
      </a>
    </div>
  );
}

export default SocialIcons;
