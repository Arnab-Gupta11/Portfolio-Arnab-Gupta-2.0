import { useState, useEffect } from 'react';

const useResponsiveIconSize = () => {
  const [iconSize, setIconSize] = useState(16);

  const updateIconSize = () => {
    if (window.innerWidth < 350) {
      setIconSize(10); // Small screen
    } else if (window.innerWidth < 476) {
      setIconSize(12); // Small screen
    } else if (window.innerWidth < 768) {
      setIconSize(15); // Medium screen
    } else if (window.innerWidth < 1024) {
      setIconSize(17); // Large screen
    } else if (window.innerWidth < 1550) {
      setIconSize(18); // Large screen
    } else {
      setIconSize(20); // Extra large screen
    }
  };

  useEffect(() => {
    updateIconSize(); // Set initial size
    window.addEventListener('resize', updateIconSize); // Update size on window resize

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', updateIconSize);
  }, []);

  return iconSize;
};

export default useResponsiveIconSize;
