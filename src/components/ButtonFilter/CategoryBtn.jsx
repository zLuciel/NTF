"use client"
import { ContainerOption, DropViewOption, OptionBtn } from "./css/OptionBtn";
import { IoMdArrowDropdown } from 'react-icons/io';
import useOutsideClick from "@/hooks/useOutsideClick";
import { useState } from "react";
const CategoryBtn = ({ classm,setFilter,filter,query,option }) => {
  
  const { isOpen, setIsOpen } = useOutsideClick(false, classm);
  const [current,setCurrent] = useState(query || classm)

  function handleValue(value){
  setCurrent(value)  
  setFilter({...filter,[classm]:value})
  setIsOpen(false)
  }

  return (
    <ContainerOption className={`${classm}`}>
      <OptionBtn onClick={() => setIsOpen(!isOpen)}>{current} <IoMdArrowDropdown className="icon-option" /></OptionBtn>
      {isOpen && (
        <DropViewOption>
          <ul>
            {option?.map(li => <li key={li._id} onClick={() => handleValue(li.name)}>{li.name}</li>)}
          </ul>
        </DropViewOption>
      )}
    </ContainerOption>
  );
};

export default CategoryBtn;
