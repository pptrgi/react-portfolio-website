import { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";
import LandingPage from "../components/landingPage/LandingPage";
import Skills from "../components/skills/Skills";
import Services from "../components/services/Services";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";
import About from "../components/about/About";
import NewPortfolioPopup from "../components/NewPortfolioPopup";

function Home() {
  const [projects, setProjects] = useState([]);
  const data = useLoaderData();
  useEffect(() => {
    setProjects(data);
  }, [data]);

  return (
    <div className="">
      <div className="sm:relative sm:container">
        <NewPortfolioPopup />
      </div>
      <LandingPage />
      <About />
      <Skills />
      <Services />
      <Projects projects={projects} />
      <Contact />
    </div>
  );
}

export default Home;
