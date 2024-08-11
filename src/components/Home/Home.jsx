import About from "../About/About";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import Introduction from "../Introduction/Introduction";
import Project from "../Project/Project";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <>
      {/* <div className="bg-[#09040d] rounded-2xl border border-[#322141] shadow-sm shadow-[#322141] mt-5 p-7 mb-5"> */}
      <Introduction />
      {/* </div> */}
      <div id="skills"><Skills /></div>
      <About />
      <Project />
      <Education />
      <div id="contact"><Contact /></div>
    </>
  );
};

export default Home;
