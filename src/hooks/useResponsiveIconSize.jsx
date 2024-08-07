import { useState, useEffect } from 'react';

const useResponsiveIconSize = () => {
  const [iconSize, setIconSize] = useState(16);

  const updateIconSize = () => {
    if (window.innerWidth < 476) {
      setIconSize(16); // Small screen
    } else if (window.innerWidth < 768) {
      setIconSize(20); // Medium screen
    } else if (window.innerWidth < 1024) {
      setIconSize(24); // Large screen
    } else {
      setIconSize(30); // Extra large screen
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
