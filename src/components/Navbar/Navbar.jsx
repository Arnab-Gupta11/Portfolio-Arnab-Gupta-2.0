// import { useState } from "react";
// import { TiThMenu } from "react-icons/ti";
// import { IoMdClose } from "react-icons/io";
import useNavbar from "../../hooks/useNavbar";

const Navbar = () => {
  // let Links = [
  //   { name: "HOME", link: "/" },
  //   { name: "SERVICE", link: "/" },
  //   { name: "ABOUT", link: "/" },
  //   { name: "BLOG'S", link: "/" },
  //   { name: "CONTACT", link: "/" },
  // ];
  // const [open, setOpen] = useState(false);
  const { navbar, changeBackground } = useNavbar();
  window.addEventListener("scroll", changeBackground);
  return (
    <div
      className={`navbar bg-[#09040d] border border-[#322141] fixed max-w-screen-xl  shadow-sm shadow-[#322141] z-50 ${
        navbar ? "lg:mt-0 rounded-t-none rounded-b-xl shadow-lg shadow-[#8750f733]" : "lg:mt-5 lg:rounded-2xl"
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
