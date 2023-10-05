import { useState, useEffect } from 'react';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    // Function to update isMobile based on window width
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Set the breakpoint according to your mobile design
    };

    // Initial check on component mount
    updateIsMobile();

    // Attach event listener to window resize
    window.addEventListener('resize', updateIsMobile);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateIsMobile);
    };
  }, []);

  return isMobile;
}

export default useIsMobile;
