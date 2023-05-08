import {useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {BiLeftArrowAlt} from 'react-icons/bi';


function Project() {
    const {id} = useParams();
    const [projects, setProjects] = useState([
      {
          id: 1,
          title: <span className='bg-transparent text-h2FontSize text-titleColor font-mediumWeight'>Blogwin</span>,
          description: <div className='text-textColor text-smallFontSize bg-transparent'>A Django fullstack application that includes the basic structure and functionality for a Django-based web application that allows users to perform CRUD (Create, Read, Update, Delete) operations on blog posts. The application includes models for blog posts, views to render templates and handle HTTP requests, and forms to handle user input.<br /><br />The main features of the application include: <br />
            <ul className='list-disc ml-[1.5rem]'>
              <li>User authentication and authorization</li>
              <li>Creation of new blog posts</li>
              <li>Display of existing blog posts</li>
              <li>Updating and deleting existing blog posts</li>
            </ul><br />
            There's still a lot of work to be done, but this sets the foundation for the project.
          </div>,
          image: <img src='../src/assets/blogwin.png' className='rounded-lg'/>,
          gitHub: <a href="#" className='bg-titleColor p-6 px-4 py-2 text-containerColor font-mediumWeight rounded-full'>GitHub {'>'}</a>,
          detailPage: <span className='bg-titleColor p-6 px-4 py-2 text-containerColor font-mediumWeight rounded-full'>View {'>'}</span>,
          techStack: ["Django", "Vanilla CSS", "HTML"]
      },
      {
        id: 2,
        title: <span className='bg-transparent text-h2FontSize text-titleColor font-mediumWeight'>ToDo App</span>,
        description: <div className='text-textColor text-smallFontSize bg-transparent'>The ToDo App developed using JavaScript and styled with vanilla CSS is a simple and user-friendly app that allows users to add new tasks, categorize them as either priority or normal, edit and delete tasks, and mark them as completed with a checkbox.<br /><br />
          The app's clean, intuitive and straightforward design makes it easy for users to navigate and manage their tasks effectively. It's a great tool for individuals looking to stay organized and productive. <br /><br />
          The app's main features include:
          <ul className='list-disc ml-[1.5rem]'>
            <li>Categorize your tasks into priority or normal tasks</li>
            <li>Edit and update your already added tasks</li>
            <li>Check as completed your completed tasks</li>
            <li>Delete button to remove the unwanted tasks</li>
            <li>Add new tasks</li>
            <li>Display for all existing tasks</li>
          </ul>
        </div>,
        image: <img src='../src/assets/todo.png' className='rounded-lg'/>,
        gitHub: <a href="#" className='bg-titleColor p-6 px-4 py-2 text-containerColor font-mediumWeight rounded-full'>GitHub {'>'}</a>,
        detailPage: <span href="#" className='bg-titleColor p-6 px-4 py-2 text-containerColor font-mediumWeight rounded-full'>View {'>'}</span>,
        techStack: ["JavaScript", "HTML", "Vanilla CSS"]
      },
      {
          id: 3,
          title: <span className='bg-transparent text-h2FontSize text-titleColor font-mediumWeight'>Personal Website</span>,
          description: <div className='text-textColor text-smallFontSize bg-transparent'>The website is built with React and styled with Tailwind, and uses react-icons and react-router-dom libraries.<br /><br />
              It features a modern design with a clear and concise navigation system that includes a hamburger menu for mobile devices. The landing page uses visually appealing contents that reverse order in mobile devices and include an image with a gradient background.<br /><br />
              Here are the main features of the website:
              <ul className='list-disc ml-[1.5rem]'>
                <li>Navigation bar and hamburger menu</li>
                <li>About section with the website's techstack and my bio</li>
                <li>Projects section with a detail page for each project and a link to the project's github repository</li>
                <li>Skills section with skill name and its respective icon</li>
                <li>Services section with 3 service cards</li>
                <li>Contacts section email, WhatsApp, call and direct message form</li>
                <li>The Footer with social media profiles and section titles links, and copyright information</li>
              </ul>
            </div>,
          image: <img src='../src/assets/personal-web.png' className='rounded-lg'/>,
          gitHub: <a href="#" className='bg-titleColor p-6 px-4 py-2 text-containerColor font-mediumWeight rounded-full'>GitHub {'>'}</a>,
          detailPage: <span href="#" className='bg-titleColor p-6 px-4 py-2 text-containerColor font-mediumWeight rounded-full'>View {'>'}</span>,
          techStack: ["React", "Tailwind","Emailjs", "React Router", "Font Awesome"]
      },
   
      {
          id: 4,
          title: <span className='bg-transparent text-h2FontSize text-red-400 font-mediumWeight italic'>Coming soon</span>,
          description: <div className='text-textColor text-smallFontSize bg-transparent opacity-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut quia consectetur porro enim quos doloremque culpa nihil? Repellendus, possimus vitae.</div>,
          image: <img src='../src/assets/no-image.png' className='rounded-lg'/>,
          gitHub: <a href="#" className='bg-titleColor p-6 px-4 py-2 text-containerColor font-mediumWeight rounded-full disabled opacity-10'>GitHub {'>'}</a>,
          detailPage: <span href="#" className='bg-titleColor p-6 px-4 py-2 text-containerColor font-mediumWeight rounded-full disabled opacity-10'>View {'>'}</span>,
          techStack: []
      }
  ])
  return (
    <div>
      {projects.map(project => {
        return (
          <div key={project.id}>
            {(project.id == id) && 
            <section className='section bg-transparent h-screen w-full text-center items-center'>
              <div className='container bg-transparent'>
                <div className='bg-transparent mb-[4rem]'>{project.title}</div>
                <div className='flex flex-col items-center space-y-[3rem] sm:flex-row sm:space-y-0 sm:space-x-[1.5rem]'>
                  <div className='sm:w-1/2'>
                    {project.image}
                  </div>
                  <div className='flex flex-col justify-between items-center h-[550px] sm:w-1/2 sm:h-[600px] md:h-[450px] lg:h-[420px]'>
                    <div className='flex gap-3 flex-wrap'>
                      {(project.techStack).map(tech => <span key={tech} className="text-titleColor text-smallFontSize font-mediumWeight px-[0.75rem] py-[0.25rem] border-2 border-titleColor">{tech}</span>)}
                    </div>
                    <div>
                      <p className='text-textColor text-smallFontSize leading-5 font-normalWeight text-left md:text-normalFontSize'>{project.description}</p>
                    </div>
                  </div>
                </div>
                <div className='mt-[6rem] pb-[6rem] bg-transparent'>
                  <Link to="/" className='bg-titleColor text-bodyColor font-mediumWeight text-normalFontSize px-[1.5rem] py-[0.75rem] rounded-sm hover:bg-titleColorDark'><BiLeftArrowAlt className='inline-block bg-transparent text-bodyColor font-mediumWeight text-h3FontSize mr-[0.5rem]'/>Return Home</Link>
                </div>
              </div>
            </section>
            }
           
          </div>
        )
      })} 
    </div>
  )
}

export default Project