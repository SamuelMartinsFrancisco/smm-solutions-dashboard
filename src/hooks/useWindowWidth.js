'use client'

import { useState, useEffect } from "react"

const useWindowWidth = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return width;
}

export default useWindowWidth;