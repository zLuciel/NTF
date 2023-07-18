"use client"
import React from 'react'
import { SearchFilterStyled } from './css/SearchFilter'
import { FaFilter } from 'react-icons/fa';
const SearchFilter = () => {
  return (
    <SearchFilterStyled>
        Filtro <FaFilter className='icon-filter'/>
    </SearchFilterStyled>
  )
}

export default SearchFilter