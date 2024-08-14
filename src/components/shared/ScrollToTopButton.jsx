import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TbArrowBigUpLinesFilled } from "react-icons/tb";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Function to handle scroll events
  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    setScrollProgress(progress);

    // Show or hide the button based on scroll position
    if (scrollTop > 250) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Attach the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <div className="fixed bottom-7 right-2 md:right-10 z-50">
        <motion.button
          className="w-10 h-10 md:w-12 md:h-12 bg-white text-white rounded-full flex items-center justify-center shadow-lg shadow-primary-200 animate-bounce"
          onClick={scrollToTop}
          style={{
            background: `conic-gradient(#070215 ${scrollProgress}%, transparent 0)`
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <TbArrowBigUpLinesFilled className="text-2xl z-10 bg-button-gradient-hover dark:bg-button-gradient rounded-full w-7 h-7 md:w-8 md:h-8 p-2" size={14} />
        </motion.button>
      </div>
    )
  );
};

export default ScrollToTop;
