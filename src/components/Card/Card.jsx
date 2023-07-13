import React from "react";
import { CardArte, Price } from "./css/Card";
import BtnSave from "../Home/Arte/BtnSave";
import CardInfo from "./CardInfo/CardInfo";

const Card = ({edit,data}) => {
  return (
    <CardArte>
      <div className="flex-price">
        <Price>
          <p>$</p>
          {data.price}
        </Price>
        <BtnSave data={data} edit={edit} />
      </div>
      <CardInfo
        title={data.title}
        id={data._id}
        user={data.user}
        userAvatar={data.image}
      />
      
    </CardArte>
  );
};

export default Card;
