import { useState } from "react";

const useNavbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  // Function to handle the activation of a link.
  const handleSetActive = (to) => {
    setActiveLink(to);
  };
  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  return { navbar, changeBackground, open, setOpen, activeLink, setActiveLink, handleSetActive};
};

export default useNavbar;
