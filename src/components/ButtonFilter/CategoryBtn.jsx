"use client";
import { useState,  useEffect } from "react";
import { ContainerOption, DropViewOption, OptionBtn } from "./css/OptionBtn";
import { IoMdArrowDropdown } from 'react-icons/io';
const CategoryBtn = ({ classm }) => {
  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (!e.target.matches(`.${classm} *`)) {
        setIsOpen(false);
      }
    });
  }, [classm]);

  return (
    <ContainerOption className={`${classm}`}>
      <OptionBtn onClick={() => setIsOpen(!isOpen)}>{classm} <IoMdArrowDropdown className="icon-option" /></OptionBtn>
      {isOpen && (
        <DropViewOption>
          <ul>
            <li onClick={() => setIsOpen(false)}>Antiguedad</li>
            <li onClick={() => setIsOpen(false)}>Arte</li>
            <li onClick={() => setIsOpen(false)}>Espacial</li>
          </ul>
        </DropViewOption>
      )}
    </ContainerOption>
  );
};

export default CategoryBtn;
