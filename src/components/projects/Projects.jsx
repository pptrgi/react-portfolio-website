import React from 'react'
import ProjectCard from './ProjectCard'


function Projects({projects}) {
  return (
   <section className='section text-center' id='projects'>
   <h1 className='text-titleColor text-[2rem] font-mediumWeight mb-[0.5rem]'>Projects</h1>
   <span className='text-textColor text-smallFontSize'>Completed and Ongoing Projects</span>
   <div className='mt-[4rem] mx-[0.25rem] sm:mx-[0.75rem] md:mx-[0.5rem]'>
       <div className='grid grid-cols-1 gap-4 sm:gap-3 md:gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4' >  
           {projects.map(project => {        
               return (
                   <ProjectCard key={project.id} project={project} />
               )
           })}
       </div>
   </div>
 </section>
  )
}

export default Projects
