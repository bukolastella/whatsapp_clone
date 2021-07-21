import { useState, useEffect } from "react";

const useResize = () => {
  const [resizeState, setstate] = useState(window.innerWidth);
  useEffect(() => {
    const update = () => setstate(window.innerWidth);
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("resize", update);
    };
  }, []);
  return { resizeState };
};

export default useResize;
