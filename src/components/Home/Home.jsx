import About from "../About/About";
import Introduction from "../Introduction/Introduction";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <>
      <div className="bg-[#09040d] rounded-2xl border border-[#322141] shadow-sm shadow-[#322141] mt-5 lg:mt-28  p-7">
        <Introduction />
      </div>
      <Skills />
      <About />
    </>
  );
};

export default Home;
