import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


function ProjectCard({project}) {
    const navigate = useNavigate()

    // use project name for id
    const id = project.title

    const formatId = theId => {
        return String(theId).toLowerCase().split(" ").join("")
    }
    const formattedId = formatId(id)

    const handleDetailPage = () => {
        navigate(`/project/${formattedId}`, {state: {item: project}})
    }
    
  return (
    <div className='group'>
        <div className='bg-containerColor shadow-md mx-[1rem] rounded-lg h-[600px] text-left group-hover:shadow-2xl sm:mx-0'>
            {project.title === 'Coming soon' ? 
                <div className='relative bg-[#ebecee] rounded-t-lg h-1/3 w-full opacity-30 border-b-[1px] border-b-gray-200 overflow-hidden'>
                    <img src={project.image} alt="" className='absolute h-full w-full bg-cover'/>
                </div> 
            : 
                <div className='relative bg-[#ebecee] rounded-t-lg h-1/3 w-full border-b-[1px] border-b-gray-100 overflow-hidden' >
                    <img src={project.image} alt="" className='absolute h-full w-full bg-cover'/>
                </div>
            }
            <div className='pt-[2rem] h-2/3'>
                <div className='flex flex-col justify-between items-start h-full pl-[1rem] pr-[0.75rem] pb-[1.5rem]'>
                    <div className='flex flex-col gap-[2rem]'>
                        {project.title === 'Coming soon' ? 
                            <span className='text-h2FontSize text-red-400 font-mediumWeight bg-transparent italic'>{project.title}</span>
                        :
                            <span className='text-h2FontSize text-titleColor font-mediumWeight bg-transparent'>{project.title}</span>
                        }
                        {project.title === 'Coming soon' ? 
                            <span className='text-textColor text-smallFontSize bg-containerColor bg-transparent opacity-40'>{project.summary}</span> 
                        :
                            <span className='text-textColor text-smallFontSize bg-containerColor bg-transparent'>{project.summary}</span>
                        }
                    </div>
                    <div className='flex flex-row w-full justify-between items-center'>
                        {project.title === 'Coming soon' ? 
                            <span className='bg-titleColor p-6 px-4 py-2 text-smallFontSize text-containerColor font-mediumWeight rounded-full opacity-30 cursor-default'>View {'>'}</span>
                        :
                            <span onClick={handleDetailPage} className='bg-titleColor p-6 px-4 py-2 text-smallFontSize text-containerColor font-mediumWeight rounded-full hover:bg-titleColorDark cursor-pointer'>View {'>'}</span>
                        }
                        {project.title === 'Coming soon' ? 
                            <span className='bg-titleColor p-6 px-4 py-2 text-smallFontSize text-containerColor font-mediumWeight rounded-full opacity-30 cursor-default'>GitHub {'>'}</span>
                        :
                            <a href={project.gitHub} className='bg-titleColor p-6 px-4 py-2 text-smallFontSize text-containerColor font-mediumWeight rounded-full hover:bg-titleColorDark cursor-pointer'>GitHub {'>'}</a>
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard