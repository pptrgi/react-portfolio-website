import {useState} from 'react';
import {FaWhatsapp, FaPhone,} from 'react-icons/fa';
import {BiRightArrowAlt, BiCopy} from 'react-icons/bi';
import {BsEnvelopeAt} from 'react-icons/bs';
import {HiCheck} from 'react-icons/hi';

function ContactMeans() {
    const [number, setNumber] = useState("");
    const [copy, setCopy] = useState(false);

    const handleCopy = event => {
        setNumber('+254700119134')
        navigator.clipboard.writeText(number)
        setCopy(true)
        setTimeout(() => setCopy(false), 3000)
    }

  return (
    <div className='text-center'>
        <h3 className='text-h3FontSize text-titleColor font-mediumWeight mb-[1rem]'>Email | Whatsapp | Call</h3>
        <div className='flex flex-col items-center space-y-[0.75rem]'>
            <div className='bg-containerColor flex flex-col items-center gap-[0.5rem] pt-[1.5rem] pb-[1rem] px-[2.5rem] rounded-md shadow-md w-[300px] sm:w-[250px] md:w-[300px] lg:w-[350px]'>
                <BsEnvelopeAt className='bg-containerColor text-titleColor text-h2FontSize' />
                <h3 className='bg-containerColor text-normalFontSize text-titleColor font-mediumWeight'>Email</h3>
                <h4 className='bg-containerColor text-normalFontSize text-textColor'>pptrgitonga@gmail.com</h4>
                <div className='bg-containerColor flex space-x-1 items-center mt-[1.5rem] hover:text-titleColorDark hover:font-mediumWeight'>
                    <a href="mailto:pptrgitonga@gmail.com" className='bg-containerColor text-textColor text-smallFontSize '>Send email</a>
                    <BiRightArrowAlt className='bg-containerColor text-textColor text-normalFontSize'/>
                </div>      
            </div>

            <div className='bg-containerColor flex flex-col items-center gap-[0.5rem] pt-[1.5rem] pb-[1rem] px-[2.5rem] rounded-md shadow-md w-[300px] sm:w-[250px] md:w-[300px] lg:w-[350px]'>
                <FaWhatsapp className='bg-containerColor text-titleColor text-h2FontSize' />
                <h3 className='bg-containerColor text-normalFontSize text-titleColor font-mediumWeight'>Whatsapp</h3>
                <h4 className='bg-containerColor text-normalFontSize text-textColor'>254-700-119-134</h4>
                <div className='bg-containerColor flex space-x-1 items-center mt-[1.5rem] hover:text-titleColorDark hover:font-mediumWeight'>
                    <a href="https://wa.me/254700119134" className='bg-containerColor text-textColor text-smallFontSize'>Send text</a>
                    <BiRightArrowAlt className='bg-containerColor text-textColor text-normalFontSize'/>
                </div>      
            </div>

            <div className='bg-containerColor flex flex-col items-center gap-[0.5rem] pt-[1.5rem] pb-[1rem] px-[2.5rem] rounded-md shadow-md w-[300px] sm:w-[250px] md:w-[300px] lg:w-[350px]'>
                <FaPhone className='bg-containerColor text-titleColor text-h2FontSize' />
                <h3 className='bg-containerColor text-normalFontSize text-titleColor font-mediumWeight'>Phone Call</h3>
                <h4 className='bg-containerColor text-normalFontSize text-textColor'>+254-700-119-134</h4>
                <div className='bg-containerColor flex space-x-1 items-center mt-[1.5rem]'>
                    <button onClick={handleCopy} onBlur={e => setCopy(false)} className={ copy ? "text-textColor font-mediumWeight text-smallFontSize hover:text-titleColorDark" : "text-textColor text-smallFontSize hover:text-titleColorDark hover:font-mediumWeight"}>{copy ? "Copied!" : <span className='bg-transparent flex items-center gap-1'><BiCopy /> Copy number</span> }</button>
                </div>      
            </div>
        </div>

    </div>
  )
}

export default ContactMeans

// value={copy ? "Copied!" : "Copy number"}