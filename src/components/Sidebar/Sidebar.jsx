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
      </div>
    </div>
  );
};

export default Sidebar;
