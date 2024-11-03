import { useEffect } from "react";

const useScrollVisibility = () => {
  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      // Allow scrolling by setting overflow-y to auto
      document.body.style.overflowY = "auto";

      // Clear previous timeout if still scrolling
      clearTimeout(scrollTimeout);

      // Hide the scrollbar after a delay
      scrollTimeout = setTimeout(() => {
        if (window.scrollY > 0) {
          document.body.style.overflowY = "hidden"; // Hide the scrollbar if not at the top
        }
      }, 1000); // Adjust delay as needed
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout); // Clear the timeout on unmount
    };
  }, []);
};

export default useScrollVisibility;
