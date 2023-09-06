import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function DirectContact() {
  const [emailAddress, setEmailAddress] = useState("");
  const [name, setName] = useState("");
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidName, setInvalidName] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (
      emailAddress.toLowerCase().includes("test") ||
      emailAddress.toLowerCase().includes("email") ||
      emailAddress.toLowerCase().includes("example")
    ) {
      setInvalidEmail(true);
      setEmailAddress("");
      setTimeout(() => {
        setInvalidEmail(false);
      }, 6000);
    }
    if (
      name.toLowerCase().includes("name") ||
      name.toLowerCase().includes("test")
    ) {
      setInvalidName(true);
      setName("");
      setTimeout(() => {
        setInvalidName(false);
      }, 6000);
    } else {
      emailjs.sendForm(
        "service_xcqtt9b",
        "template_dwk3grp",
        form.current,
        "fKjM8gV9AD2Vje01P"
      );
      e.target.reset();
      setEmailAddress("");
      setName("");
    }
  };

  return (
    <div className="text-center">
      <h1 className="text-h3FontSize text-titleColor font-mediumWeight mb-[1rem]">
        Send a Message/Project
      </h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col items-start space-y-[1.5rem] border-[1.8px] border-[#dadadb] py-[2rem] px-[1.5rem] rounded-lg sm:w-[350px] md:w-[400px] lg:w-[450px]"
      >
        <div className="flex flex-col items-start space-y-1 bg-transparent border-b-[1.8px] border-[#dadadb] w-full">
          <label className="text-titleColor text-normalFontSize font-mediumWeight">
            Your name
          </label>
          {invalidName && (
            <label className="text-red-400 text-smallerFontSize font-mediumWeight">
              Please use your name
            </label>
          )}
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-transparent w-full focus:outline-none text-textColor pl-[0.5rem] placeholder-gray-300"
            placeholder="e.g. Peter Gitonga"
            required
          />
        </div>
        <div className="flex flex-col items-start space-y-1 bg-transparent border-b-[1.8px] border-[#dadadb] w-full">
          <label className="text-titleColor text-normalFontSize font-mediumWeight">
            Your email
          </label>
          {invalidEmail && (
            <label className="text-red-400 text-smallerFontSize font-mediumWeight">
              Please use a valid email
            </label>
          )}
          <input
            type="email"
            name="email"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
            className="bg-transparent w-full focus:outline-none text-textColor pl-[0.5rem] placeholder-gray-300"
            placeholder="example@email.com"
            required
          />
        </div>
        <div className="flex flex-col items-start space-y-1 bg-transparent border-b-[1.8px] border-[#dadadb] w-full ">
          <label className="text-titleColor text-normalFontSize font-mediumWeight mt-[1rem]">
            Your message
          </label>
          <textarea
            rows={5}
            name="message"
            className="bg-transparent w-full focus:outline-none text-textColor resize-none pl-[0.5rem] placeholder-gray-300"
            placeholder="e.g. Hi, this is the example message or project"
            required
          />
        </div>
        <div className="pt-[3rem] pb-[1.5rem]">
          <button
            type="submit"
            className="bg-titleColor text-containerColor px-[2rem] py-[0.75rem] rounded-md hover:bg-titleColorDark"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default DirectContact;
