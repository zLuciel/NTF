import React from "react";
import { ContainerBiografia, ContainerFollow, ContainerRedes, FlexColumn1, NameUserAlias } from "./css/Column1";
import RedSocial from "@/components/RedSocial/RedSocial";

const Column1 = ({user}) => {
  console.log(user);
  return (
    <FlexColumn1>
      <NameUserAlias>
        <h1>{user?.name} </h1>
        <p>@Emmanuel</p>
      </NameUserAlias>

      <ContainerFollow>
        <div className="white-cuadro">
          <span>
            <h2>{user?.seguidores}</h2>
            <p>Seguidores</p>
          </span>
          <span>
            <h2>310</h2>
            <p>Seguidores</p>
          </span>
        </div>
      </ContainerFollow>

      <ContainerBiografia>
        <h2>Biografia</h2>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum voluptates, perferendis et dolore dolor ipsam reprehenderit, sapiente 
            suscipit deserunt veritatis accusantium, expedita nesciunt eius hic alias provident a. Eaque, reiciendis.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, officia cupiditate reiciendis eligendi obcaecati animi repellat 
            aliquid reprehenderit adipisci similique dolorem non, aliquam iure error omnis, ad aperiam! Explicabo, facere!
        </p>
      </ContainerBiografia>
      <ContainerRedes>
        <RedSocial/>
      </ContainerRedes>
    </FlexColumn1>
  );
};

export default Column1;
