import { useState, useEffect } from 'react';

const useIsNavHideForSmallDevice = () => {
  const [isNavHide, setIsNavHide] = useState<boolean>(false);

  useEffect(() => {
    // Function to update isMobile based on window width
    const updateIsNavHide = () => {
      setIsNavHide(window.innerWidth <= 1023); // Set the breakpoint according to your mobile design
    };

    // Initial check on component mount
    updateIsNavHide();

    // Attach event listener to window resize
    window.addEventListener('resize', updateIsNavHide);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateIsNavHide);
    };
  }, []);

  return isNavHide;
}

export default useIsNavHideForSmallDevice;
