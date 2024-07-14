import useNavbar from "../../hooks/useNavbar";
import Photo from "./Photo/Photo";

const Sidebar = () => {
  const { navbar, changeBackground } = useNavbar();
  window.addEventListener("scroll", changeBackground);
  return (
    <div
      className={`text-white lg:h-[calc(100vh-100px)] lg:fixed lg:w-[400px] bg-[#09040d] rounded-2xl border border-[#322141] shadow-sm shadow-[#322141]  px-7 py-5 ${
        navbar ? "lg:mt-24 mt-20" : "lg:mt-28 mt-20"
      }`}
    >
      <div className="flex flex-col">
        <div className="w-[305px] mx-auto">
          <Photo />
        </div>
        <div className="font-bricolage mt-5">
          <h1 className="text-2xl font-semibold text-[#f0f2f5] text-center">Arnab Gupta</h1>
          <p className="font-medium text-base text-[#f0f2f5b3] mt-2">
            As a Passionate <span className="text-white font-semibold">MERN stack developer</span>, I turn ideas into dynamic web applications.
            Innovation and creativity drive my code.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
