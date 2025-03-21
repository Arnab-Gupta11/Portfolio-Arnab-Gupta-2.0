import { useEffect, useState } from "react";
const 
useToggleTheme = () => {
  const [mode, setMode] = useState("dark");

  const handleToggle = () => {
    const html = document.documentElement;
    if (mode === "light") {
      html.classList.remove("light");
      html.classList.add("dark");
      setMode("dark");
      localStorage.setItem("mode", "dark");
    } else {
      html.classList.remove("dark");
      html.classList.add("light");
      setMode("light");
      localStorage.setItem("mode", "light");
    }
  }

  useEffect(() => {
    const currentMode = localStorage.getItem("mode") || "dark";
    document.documentElement.classList.add(currentMode);
    setMode(currentMode);
  }, []);

  return { mode, handleToggle };
}

export default useToggleTheme;
