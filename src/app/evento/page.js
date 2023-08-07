"use client";
import { ContainerCategory, FlexFilter, GridCard } from "./categoryStyled";
import CategoryBtn from "@/components/ButtonFilter/CategoryBtn";
import SearchFilter from "@/components/ButtonFilter/SearchFilter";
import RenderMapCard from "./RenderMap";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";
import PaginationEvent from "@/components/Evento/pagination/Pagination";
import { Reset } from "@/components/ButtonFilter/Reset";



const initalState = {
  category: "",
  priceRange: "",
  page:1,
};
const priceOption = [
  { _id: 1, name: "10-80" },
  { _id: 2, name: "80-150" },
  { _id: 3, name: "150-350" },
  { _id: 4, name: "350-500" },
];

const Page = () => {
  
  const [filter, setFilter] = useState(initalState);
  const router = useRouter()

  
  //const [activePage, setPage] = useState(1);
  const dataTags = useSelector((state) => state.allevents.tags);
  const countState = useSelector((state) => state.allevents.countPage);

  const searchParams = useSearchParams();
  //extracion para busqueda
  const $category = searchParams.get("category");
  const $priceRange = searchParams.get("price");
  const $page = searchParams.get("page");
  
  function handleReset(){
    setFilter(initalState)
    router.push("/evento?page=1")
  }

  return (
    <div className="bgsvg">
      <ContainerCategory>
        <FlexFilter>
          <div className="direct-colum">
            <CategoryBtn
              classm={"category"}
              option={dataTags}
              setFilter={setFilter}
              filter={filter}
              query={$category}
            />
            <CategoryBtn
              classm={"fecha"} 
              setFilter={setFilter}
              filter={filter}
            />
            <CategoryBtn
              option={priceOption}
              classm={"priceRange"}
              setFilter={setFilter}
              filter={filter}
              query={$priceRange}
            />
          </div>
          <div className="direct-colum">
           <Reset handleReset={handleReset} />
            <SearchFilter filter={filter} setFilter={setFilter}/>
          </div>
        </FlexFilter>
        <GridCard>
          <RenderMapCard category={$category} price={$priceRange} page={$page} />
        </GridCard>
        <PaginationEvent countState={countState} $page={$page} filter={filter} setFilter={setFilter} />
      </ContainerCategory>
    </div>
  );
};

export default Page;
