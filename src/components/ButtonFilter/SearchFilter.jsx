import React from "react";
import { SearchFilterStyled } from "./css/SearchFilter";
import { FaFilter } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";

const SearchFilter = ({  filter,setFilter }) => {
  const router = useRouter();
  const pathname = usePathname();
  //querys
  const pageQuery = `page=1`
  const categoryQuery = `category=${filter.category}` 
  const priceRangeQuery = `price=${filter.priceRange}`
  const categoryPriceQuery = `${categoryQuery}&?${priceRangeQuery}`
  
  //filtrado para las querys
  function Filter() {
    if(filter.category && filter.priceRange) router.push(`${pathname}?${categoryPriceQuery}&${pageQuery}`);
    else if( filter.priceRange && !filter.category)router.push(`${pathname}?${priceRangeQuery}&${pageQuery}`);
    else if(filter.category && !filter.priceRange) router.push(`${pathname}?${categoryQuery}&${pageQuery}`);
    else  router.push(`${pathname}?${pageQuery}`)
    
    setFilter({...filter,page:1})
  }

  return (
    <SearchFilterStyled onClick={Filter}>
      Filtro <FaFilter className="icon-filter" />
    </SearchFilterStyled>
  );
};

export default SearchFilter;
