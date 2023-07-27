"use client"
import { useState, useEffect } from 'react';

const useOutsideClick = (initialIsOpen = false, classm) => {
  const [isOpen, setIsOpen] = useState(initialIsOpen);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.matches(`.${classm} *`)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [classm]);

  return { isOpen, setIsOpen };
};

export default useOutsideClick;
