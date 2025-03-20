import { BiChat } from "react-icons/bi";
import { FaLaptopCode } from "react-icons/fa6";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { LuGraduationCap } from "react-icons/lu";
import { TbSmartHome, TbUserSquareRounded, TbWriting } from "react-icons/tb";

export const navLinks = [
  { title: "Home", href: "home", Icon: TbSmartHome },
  { title: "Skills", href: "skills", Icon: FaLaptopCode },
  { title: "About", href: "about", Icon: TbUserSquareRounded },
  { title: "Projects", href: "projects", Icon: HiOutlineSquares2X2 },
  { title: "Education", href: "education", Icon: LuGraduationCap },
  { title: "Blog", href: "blog", Icon: TbWriting },
  { title: "Contact", href: "contact", Icon: BiChat },
];
