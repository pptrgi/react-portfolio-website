import {useEffect, useState} from 'react'
import {useLocation, Link} from 'react-router-dom'
import {BiLeftArrowAlt} from 'react-icons/bi';
import {FaExternalLinkAlt} from 'react-icons/fa'


function ProjectDetailPage() {
    const location = useLocation()
    const currentProject = location.state.item

    // split the description into paragraphs and bold the main features subtitle
    const paragraphSplitter = (paragraphs) => {
        const splitParagraphsArray = paragraphs.split('\n\n')
        return (
            <div>
                {splitParagraphsArray.map((paragraph, index) => {
                    return (
                        <p key={index} className='mb-4'>{paragraph.includes('main features') ? <strong>{paragraph}</strong> : paragraph}</p>
                    )
                })
                }
            </div>
        )
    }
  return (
    <div className='container mt-[6rem] mb-[3rem]'>
        <h2 className='text-h2FontSize text-titleColor font-mediumWeight text-center mb-[4rem]'>{currentProject.title}</h2>
        <div className='flex flex-col-reverse gap-[3rem] md:flex-col'>
            <div className='flex gap-2 flex-wrap justify-start md:justify-center lg:px-[4rem]'>
                {currentProject.techStack.map((tech, index) => {
                    return (
                        <div key={index} className='text-textColor text-smallFontSize px-[0.5rem] py-[0.125rem] border-[2px] border-textColor'>{tech}</div>
                    )
                })}
            </div>
            <div className='grid grid-cols-1 gap-[1.5rem] md:grid-cols-4'>
                <div className='col-span-2'>
                    <img src={currentProject.image} alt="" className='border-[1.5px] border-[#dadadb] rounded-md' />
                </div>
                <div className=' col-span-2'>
                    <div className='flex flex-col text-textColor text-smallFontSize bg-transparent px-[0.5rem] sm:px-0'>
                        <div>{paragraphSplitter(currentProject.description)}</div>
                        <ul className='list-disc ml-[1.5rem]'>
                            {currentProject.features.map((feature, index) => {
                                return (
                                    <div key={index}>
                                        <li>{feature}</li>
                                    </div>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex items-center mt-[4rem]'>
            <div className='flex justify-start '>
                <Link to='/' className='flex gap-2 group items-center font-mediumWeight text-normalFontSize text-titleColor'>
                    <span className='group-hover:-translate-x-1 group-hover:text-black'><BiLeftArrowAlt /></span>
                    <span className='group-hover:text-black'>Back</span>
                </Link>
            </div>
            <div className='flex justify-center items-center w-screen'>
                <div className='flex justify-center gap-4 sm:gap-6 w-full'>
                    <a href={currentProject.visit} className='flex gap-2 items-center bg-titleColor px-[1.25rem] py-[0.5rem] rounded-md text-bodyColor font-mediumWeight text-smallFontSize hover:bg-black'>
                        <span className='bg-transparent'>Visit</span>
                        <span className='bg-transparent' ><FaExternalLinkAlt className='bg-transparent' /></span>
                    </a>
                    <a href={currentProject.gitHub} className=' bg-titleColor px-[1.25rem] py-[0.5rem] rounded-md text-bodyColor font-mediumWeight text-smallFontSize hover:bg-black'>GitHub</a>
                </div>
            </div>
        </div>
    </div>
  )
}


export default ProjectDetailPage
