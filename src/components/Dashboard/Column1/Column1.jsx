import React from "react";
import {
  BtnEditarPerfil,
  BtnFollow,
  ContainerBiografia,
  ContainerFollow,
  ContainerRedes,
  FlexColumn1,
  NameUserAlias,
} from "./css/Column1";
import RedSocial from "@/components/RedSocial/RedSocial";
import { usePathname } from "next/navigation";

const Column1 = ({ user }) => {
  const pathname = usePathname();
  const pathArray = pathname.slice(1, -1).split("/");
  return (
    <FlexColumn1>
      <NameUserAlias>
        <h1>{user?.name} </h1>
        <p>@Emmanuel</p>
      </NameUserAlias>

      <ContainerFollow>
        <span>
          <h2>{user?.seguidores}</h2>
          <p>Seguidores</p>
        </span>
        <span>
          <h2>310</h2>
          <p>Seguidores</p>
        </span>
      </ContainerFollow>

      <ContainerBiografia>
        <h2>Biografia</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
          voluptates, perferendis et dolore dolor ipsam reprehenderit, sapiente
          suscipit deserunt veritatis accusantium, expedita nesciunt eius hic
          alias provident a. Eaque, reiciendis.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis,
          officia cupiditate reiciendis eligendi obcaecati animi repellat
          aliquid reprehenderit adipisci similique dolorem non, aliquam iure
          error omnis, ad aperiam! Explicabo, facere!
        </p>
      </ContainerBiografia>
      {
        <ContainerRedes>
          <h2>Redes sociales</h2>
          <RedSocial />
          <BtnEditarPerfil>Editar Perfil</BtnEditarPerfil>
          {pathArray[1] && <BtnFollow>Seguir</BtnFollow>}
          {!pathArray[1] && <BtnFollow>Premiun</BtnFollow>}
        </ContainerRedes>
      }
    </FlexColumn1>
  );
};

export default Column1;
