import Header from './components/header/Header';
import LandingPage from './components/landingPage/LandingPage';
import Footer from './components/footer/Footer';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import './App.css';

function App() {

  return (
    <div className="">
      <Header />
      <main>
        <LandingPage />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
      
    </div>
  )
}

export default App
