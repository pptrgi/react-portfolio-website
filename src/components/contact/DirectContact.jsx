import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function DirectContact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_xcqtt9b', 'template_dwk3grp', form.current, 'fKjM8gV9AD2Vje01P')
   
        e.target.reset()
    };

    return (
      <div className='text-center'>
          <h1 className='text-h3FontSize text-titleColor font-mediumWeight mb-[1rem]'>Send a Message/Project</h1>
          <form ref={form} onSubmit={sendEmail} className='flex flex-col items-start space-y-[1.5rem] border-2 border-gray-200 py-[2rem] px-[1.5rem] rounded-lg mx-[2rem] sm:w-[350px] md:w-[400px] lg:w-[450px] sm:mx-0'>
              <div className='flex flex-col items-start space-y-1 bg-transparent border-b-2 border-b-gray-300 w-full'>
                  <label className='text-titleColor font-mediumWeight'>Your name</label>
                  <input type="text" name='name' className='bg-transparent w-full focus:outline-none text-textColor pl-[0.5rem] placeholder-gray-200' placeholder='e.g. Peter Gitonga' required/>
              </div>
              <div className='flex flex-col items-start space-y-1 bg-transparent border-b-2 border-b-gray-300 w-full'>
                  <label className='text-titleColor font-mediumWeight'>Your email</label>
                  <input type="email" name='email' className='bg-transparent w-full focus:outline-none text-textColor pl-[0.5rem] placeholder-gray-200' placeholder='example@email.com' required/>
              </div>
              <div className='flex flex-col items-start space-y-1 bg-transparent border-b-2 border-b-gray-300 w-full '>
                  <label className='text-titleColor font-mediumWeight mt-[1rem]'>Your message</label>
                  <textarea rows={5} name='message' className='bg-transparent w-full focus:outline-none text-textColor resize-none pl-[0.5rem] placeholder-gray-200' placeholder='e.g. Example message' required/>
              </div>
              <div className='pt-[3rem] pb-[2rem]'>
                  <button type='submit' className='bg-titleColor text-containerColor px-[2rem] py-[0.75rem] rounded-md hover:bg-titleColorDark'>Send Message</button>
              </div>
          </form>
      </div>
    
    )
}

export default DirectContact