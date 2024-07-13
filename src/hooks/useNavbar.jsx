import { useState } from "react";

const useNavbar = () => {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  return { navbar, changeBackground };
};

export default useNavbar;
