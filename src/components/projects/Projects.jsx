import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import Project from './Project';

function Projects() {
    const [projects, setProjects] = useState([
        {
            id: 1,
            title: <span className='bg-containerColor text-h2FontSize text-titleColor font-mediumWeight'>Blogwin</span>,
            description: <p className='text-textColor text-smallFontSize bg-containerColor'>A Django fullstack application that includes the basic structure and functionality for a Django-based web application that allows users to perform <span className=''>CRUD</span> (Create, Read, Update, Delete) operations on blog posts. Has user authorization and authentication.</p>,
            image: <img src='/images/blogwin.PNG' className='absolute object-cover h-full w-full'/>,
            gitHub: <a href="https://github.com/pptrgi/django-fullstack-blogposts" className='bg-titleColor p-6 px-4 py-2 text-containerColor font-mediumWeight rounded-full hover:bg-titleColorDark'>GitHub {'>'}</a>,
            detailPage: <span className='bg-titleColor p-6 px-4 py-2 text-containerColor font-mediumWeight rounded-full hover:bg-titleColorDark'>View {'>'}</span>,
        },
        {
            id: 2,
            title: <span className='bg-containerColor text-h2FontSize text-titleColor font-mediumWeight'>ToDo App</span>,
            description: <p className='text-textColor text-smallFontSize bg-containerColor'>Developed using JavaScript and styled with vanilla CSS is a simple and user-friendly app that allows users to add new tasks, categorize them as either priority or normal, edit and delete tasks, and mark them as completed with a checkbox.</p>,
            image: <img src='/images/todo.PNG' className='absolute object-cover h-full w-full'/>,
            gitHub: <a href="https://github.com/pptrgi/todo-vanilla-JS" className='bg-titleColor p-6 px-4 py-2 text-containerColor font-mediumWeight rounded-full hover:bg-titleColorDark'>GitHub {'>'}</a>,
            detailPage: <span href="#" className='bg-titleColor p-6 px-4 py-2 text-containerColor font-mediumWeight rounded-full hover:bg-titleColorDark'>View {'>'}</span>,
        },
        {
            id: 3,
            title: <span className='bg-containerColor text-h2FontSize text-titleColor font-mediumWeight'>Personal Website</span>,
            description: <p className='text-textColor text-smallFontSize bg-containerColor'>The website is built with React and styled with Tailwind. It features a modern design with a clear and concise navigation system, visually appealing landing page and sections for the bio, skills, services, projects and contact information, each with their own set of features.</p>,
            image: <img src='/images/personal-web.PNG' className='absolute object-cover h-full w-full'/>,
            gitHub: <a href="https://github.com/pptrgi/react-portfolio-website" className='bg-titleColor p-6 px-4 py-2 text-containerColor font-mediumWeight rounded-full hover:bg-titleColorDark'>GitHub {'>'}</a>,
            detailPage: <span href="#" className='bg-titleColor p-6 px-4 py-2 text-containerColor font-mediumWeight rounded-full hover:bg-titleColorDark'>View {'>'}</span>,
        },
        {
            id: 4,
            title: <a href="https://seedlingsbymwalim.vercel.app"><span className='bg-containerColor text-h2FontSize text-titleColor font-mediumWeight'>Seedlings by Mwalim</span></a>,
            description: <p className='text-textColor text-smallFontSize bg-containerColor'>A fully responsive site built with React on the frontend and integrated with M-Pesa (STK push) for payment service. It employs a number of technologies including Redux to manage the state of the cart operations, Express.js in the backend and Firebase for authentication.</p>,
            image: <img src='/images/seedlingsByMwalim2.PNG' className='absolute object-cover h-full w-full'/>,
            gitHub: <a href="https://github.com/pptrgi/seedlings-by-mwalim-ecommerce-website" className='bg-titleColor p-6 px-4 py-2 text-containerColor font-mediumWeight rounded-full hover:bg-titleColorDark'>GitHub {'>'}</a>,
            detailPage: <span href="#" className='bg-titleColor p-6 px-4 py-2 text-containerColor font-mediumWeight rounded-full hover:bg-titleColorDark'>View {'>'}</span>,
        },
        {
            id: 5,
            title: <span className='bg-containerColor text-h2FontSize text-red-400 font-mediumWeight italic'>Coming soon</span>,
            description: <p className='text-textColor text-smallFontSize bg-containerColor opacity-20'>I'm currently putting the finishing touches on this latest project and I can't wait to share it with you! While I cant't reveal too much just yet, I can promise it's going to be something truly special. Stay tuned for more information, sneak peeks and updates coming soon.</p>,
            image: <img src='/images/no-image.png' className='absolute object-cover h-full w-full opacity-20'/>,
            gitHub: <a href="#" className='bg-titleColor p-6 px-4 py-2 text-containerColor font-mediumWeight rounded-full pointer-events-none opacity-20'>GitHub {'>'}</a>,
            // detailPage: <span href="#" className='bg-titleColor p-6 px-4 py-2 text-containerColor font-mediumWeight rounded-full pointer-events-none opacit y-50'>View {'>'}</span>,
        }
    ])

    return (
      <section className='section text-center' id='projects'>
        <h1 className='text-titleColor text-[2rem] font-mediumWeight mb-[0.5rem]'>Projects</h1>
        <span className='text-textColor text-smallFontSize'>Completed and Ongoing Projects</span>
        <div className='mt-[4rem] mx-[0.25rem] sm:mx-[0.75rem] md:mx-[0.5rem]'>
            <div className='grid grid-cols-1 gap-4 items-center sm:gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>  
                {projects.map(project => {        
                    return (
                        <div key={project.id} className='bg-containerColor shadow-md mx-[2rem] rounded-lg text-left pb-[2rem] sm:mx-0'>
                            <div className='relative bg-containerColor rounded-t-lg h-[200px] w-full overflow-hidden'>
                                {project.image}
                            </div>
                            <div className='bg-containerColor pl-[1rem] pr-[0.75rem]'>
                                <div className='bg-containerColor my-[2rem]'>{project.title}</div>
                                <div className='bg-containerColor mb-[4rem]'>{project.description}</div>
                                <div className='bg-containerColor flex justify-between items-center flex-wrap'>
                                    <Link to={`project/${project.id}`} className='bg-containerColor'>{project.detailPage}</Link>
                                    <div className='bg-containerColor'>{project.gitHub}</div>
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

export default Projects