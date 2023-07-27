import React from "react";
import { BtnDinamicStyled } from "./css/BtnDinamic";

const BtnViewCreate = ({bg,icoColor, text, ico, handleClick }) => {

  return (
    <BtnDinamicStyled $bg={bg} $icocolor={icoColor} onClick={handleClick}>
      {text} {ico}
    </BtnDinamicStyled>
  );
};

export default BtnViewCreate;
