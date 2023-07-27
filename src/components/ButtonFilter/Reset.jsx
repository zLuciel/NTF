import React from "react";
import { BtnReset } from "./css/Reset";
import { BiReset} from "react-icons/bi";
export const Reset = ({ handleReset }) => {
  return (
    <BtnReset onClick={handleReset}>
      reset <BiReset className="icon-reset" />
    </BtnReset>
  );
};
