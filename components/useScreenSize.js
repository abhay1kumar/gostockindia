import { useState, useEffect } from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    if (typeof window !== 'undefined') {
        // Add event listener when window object is available
        window.addEventListener('resize', handleResize);
  
        // Cleanup the event listener on unmount
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }
  
  }, []);

  return screenSize;
};

export default useScreenSize;
