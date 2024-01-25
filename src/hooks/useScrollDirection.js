import { useEffect, useState } from "react";

const useScrollDirection = () => {
  const [scrolledDown, setScrolledDown] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > prevScrollY) {
      setTimeout(() => {
        setScrolledDown(true);
      }, 300);
    } else if (currentScrollY < prevScrollY) {
      setTimeout(() => {
        setScrolledDown(false);
      }, 300);
    }
    setPrevScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return { scrolledDown };
};

export default useScrollDirection;
