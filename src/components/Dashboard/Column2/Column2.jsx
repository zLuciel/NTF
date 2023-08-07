import React from "react";
import { FlexButtonUser, Start } from "./css/Column2";

import { usePathname, useRouter } from "next/navigation";
import { MdCreateNewFolder, MdOutlineFavorite,MdDeleteForever } from "react-icons/md";
import { IoIosCreate } from "react-icons/io";
import BtnViewCreate from "@/components/Button/BtnViewCreate";

const Column2 = ({ children, setView }) => {
  const pathname = usePathname();
  const router = useRouter()
  const pathArray = pathname.slice(1, -1).split("/");
  const pathDash = pathArray[1];

  function handleClickFalse() {
    setView(0);
  }

  function handleClickTrue() {
    setView(1);
  }

  function viewDesactive() {
    setView(2);
  }

  function handleDirectCreate() {
    router.push("/dashboard/create")
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
            handleClick={viewDesactive}
          /></>
          )}
        </Start>
        {!pathDash && (
          <BtnViewCreate
            bg="--morado-claro"
            icoColor="--bg-secundary"
            ico={<IoIosCreate />}
            text="Crear"
            handleClick={handleDirectCreate}
          />
        )}
      </FlexButtonUser>
      {children}
    </>
  );
};

export default Column2;
