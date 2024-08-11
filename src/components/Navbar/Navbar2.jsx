import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import useNavbar from "../../hooks/useNavbar";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { navbar, changeBackground } = useNavbar();

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, [changeBackground]);

  const onToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={`navbar bg-[#09040d] border border-[#322141] fixed max-w-screen-xl 2xl:max-w-[1520px] shadow-sm shadow-[#322141] z-50 ${navbar
        ? "xl:mt-0 rounded-t-none rounded-b-xl shadow-xl shadow-[#8750f733]"
        : "xl:mt-5 xl:rounded-2xl"
        }`}
    >
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div>
          <img
            className="w-16 cursor-pointer"
            src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png"
            alt="Logo"
          />
        </div>
        <div
          className={`nav-links duration-500 md:static absolute md:bg-transparent bg-white md:min-h-fit min-h-[60vh] left-0 ${menuOpen ? "top-96" : "-top-full"
            } md:w-auto w-full flex flex-col md:flex-row items-center md:items-center px-5`}
        >
          <ul className="flex flex-col md:flex-row md:items-center md:gap-[4vw] gap-8 w-full md:w-auto">
            <li className="w-full md:w-auto text-center">
              <a className="hover:text-gray-500" href="#">
                Products
              </a>
            </li>
            <li className="w-full md:w-auto text-center">
              <a className="hover:text-gray-500" href="#">
                Solution
              </a>
            </li>
            <li className="w-full md:w-auto text-center">
              <a className="hover:text-gray-500" href="#">
                Resource
              </a>
            </li>
            <li className="w-full md:w-auto text-center">
              <a className="hover:text-gray-500" href="#">
                Developers
              </a>
            </li>
            <li className="w-full md:w-auto text-center">
              <a className="hover:text-gray-500" href="#">
                Pricing
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
            Sign in
          </button>
          <div
            onClick={onToggleMenu}
            className="text-3xl cursor-pointer md:hidden"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
