import { Pagination } from "@mantine/core";
import { usePathname, useRouter } from "next/navigation";

const PaginationEvent = ({ filter, setFilter,countState,$page }) => {
  const router = useRouter();
  const pathname = usePathname();
  
  const categoryQuery = `category=${filter.category}` 
  const priceRangeQuery = `price=${filter.priceRange}`
  const categoryPriceQuery = `${categoryQuery}&?${priceRangeQuery}`
  //reutilizalo
  function currentPage(num) {
     setFilter({...filter, page: Number(num) });
    if(filter.category && filter.priceRange) router.push(`${pathname}?${categoryPriceQuery}&page=${num}`);
    else if( filter.priceRange && !filter.category)router.push(`${pathname}?${priceRangeQuery}&page=${num}`);
    else if(filter.category && !filter.priceRange) router.push(`${pathname}?${categoryQuery}&page=${num}`);
    else  router.push(`${pathname}?page=${num}`);
  }
  return (
    <>
    <Pagination
      style={{padding:"50px 0 0 0"}}
      position="center"
      value={Number($page)}
      onChange={currentPage}
      total={countState}
      color="red"
    /></>
  );
};

export default PaginationEvent;
