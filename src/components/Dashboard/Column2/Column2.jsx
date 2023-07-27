import React from "react";
import { FlexButtonUser, Start } from "./css/Column2";

import { usePathname } from "next/navigation";
import { MdCreateNewFolder, MdOutlineFavorite,MdDeleteForever } from "react-icons/md";
import { IoIosCreate } from "react-icons/io";
import BtnViewCreate from "@/components/Button/BtnViewCreate";

const Column2 = ({ children, setFav }) => {
  const pathname = usePathname();
  const pathArray = pathname.slice(1, -1).split("/");
  const pathDash = pathArray[1];

  function handleClickFalse() {
    setFav(false);
  }

  function handleClickTrue() {
    setFav(true);
  }

  return (
    <>
      <FlexButtonUser>
        <Start>
          <BtnViewCreate
            icoColor="--morado-claro"
            bg="--bg-secundary"
            ico={<MdCreateNewFolder />}
            text="Creados"
            handleClick={handleClickFalse}
          />
          {!pathDash && (<>
            <BtnViewCreate
              icoColor="--morado-claro"
              bg="--bg-secundary"
              ico={<MdOutlineFavorite />}
              text="Favoritos"
              handleClick={handleClickTrue}
            />
            <BtnViewCreate
            icoColor="--morado-claro"
            bg="--bg-secundary"
            ico={<MdDeleteForever />}
            text="Desactivados"
            handleClick={handleClickTrue}
          /></>
          )}
        </Start>
        {!pathDash && (
          <BtnViewCreate
            bg="--morado-claro"
            icoColor="--bg-secundary"
            ico={<IoIosCreate />}
            text="Crear"
            handleClick={handleClickTrue}
          />
        )}
      </FlexButtonUser>
      {children}
    </>
  );
};

export default Column2;
