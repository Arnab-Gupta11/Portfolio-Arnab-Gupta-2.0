import About from "../About/About";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import Footer from "../Footer/Footer";
import Introduction from "../Introduction/Introduction";
import Project from "../Project/Project";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <>
      <Introduction />
      <div id="skills">
        <Skills />
      </div>
      <About />
      <Project />
      <Education />
      <Blog />
      <div id="contact">
        <Contact />
      </div>
      <div className="mb-4">
        <Footer />
      </div>
    </>
  );
};

export default Home;
