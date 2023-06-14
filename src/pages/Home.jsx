import LandingPage from '../components/landingPage/LandingPage';
import Skills from '../components/skills/Skills';
import Services from '../components/services/Services';
import Projects from '../components/projects/Projects';
import Contact from '../components/contact/Contact';
import About from '../components/about/About';
import {useLoaderData} from 'react-router-dom'
import { useEffect, useState } from 'react';

function Home() {
  const [projects, setProjects] = useState([])
  const data = useLoaderData()
  useEffect(() => {
    setProjects(data)
  }, [data]
  );

  return (
    <div className="">
        <LandingPage />
        <About />
        <Skills />
        <Services />
        <Projects projects={projects} />
        <Contact />
    </div>
  )
}

export default Home