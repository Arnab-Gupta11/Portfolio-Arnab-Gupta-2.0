import logo from "../../assets/logo.png";
const Logo = () => {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="ml-4 flex justify-center items-center">
      <img src={logo} alt="logo" className="w-10 h-6 md:w-16 md:h-10" />
    </div>
    // <a className="btn btn-ghost text-3xl sm:text-5xl font-black font-tangerine text-transparent bg-clip-text bg-title-gradient-light" onClick={scrollToTop}>
    //   Ag
    // </a>
  );
};

export default Logo;
