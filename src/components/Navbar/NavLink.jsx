import { Link } from "react-scroll";
import { navLinks } from "../../lib/navlink";
import useNavbar from "../../hooks/useNavbar";
import { TbSmartHome } from "react-icons/tb";

const NavLink = () => {
  const { activeLink, handleSetActive } = useNavbar();
  return (
    <div className="inline-flex justify-center items-center gap-5 px-1">
      <Link
        to="home"
        spy={true}
        smooth={true}
        offset={-145}
        duration={500}
        className={`cursor-pointer text-primary-600 dark:text-secondary-100 font-semibold font-bricolage inline-flex items-center gap-1 hover:text-[#9C6FF8] ${
          activeLink === "home" ? "font-bold active-light dark:active gradient-bottom-border-light dark:gradient-bottom-border" : ""
        }`}
        onSetActive={handleSetActive}
      >
        <TbSmartHome className="" size={16} />
        <span className="text-base font-bricolage">Home</span>
      </Link>
      {navLinks.slice(1, 7).map((item, index) => {
        const { title, href, Icon } = item;
        return (
          <Link
            key={index}
            to={href}
            spy={true}
            smooth={true}
            offset={-72}
            duration={500}
            className={`cursor-pointer text-primary-600 dark:text-secondary-100 font-semibold font-bricolage inline-flex items-center gap-1 hover:text-[#9C6FF8] ${
              activeLink === href ? "font-bold active-light dark:active gradient-bottom-border-light dark:gradient-bottom-border" : ""
            }`}
            onSetActive={handleSetActive}
          >
            <Icon className="" size={16} />
            <span className="text-base font-bricolage">{title}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default NavLink;
