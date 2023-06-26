import Image from "next/image";
import React from "react";
import {
  CardIdEvent,
  CardInfoAbsoluteID,
  Bgtrasparent,
  FlexGap,
} from "./css/CardEventID";
import UserSpan from "@/components/UserSpan/UserSpan";
import TimeCardEvent from "./TimeCardEvent";

const CardEventID = ({ image,title }) => {
  return (
    <CardIdEvent>
      <Image fill={true}  sizes="(min-width: 640px) 640px, 100vw" src={`https://res.cloudinary.com/ddo18h0ua/image/upload/${image}.jpg`} alt="imageId" />
      <CardInfoAbsoluteID>
        <Bgtrasparent>
          <UserSpan userAvatar={image} />
        </Bgtrasparent>
        <h1>{title} </h1>
        <FlexGap>
          <h3>Finaliza</h3>
          <Bgtrasparent>
            <TimeCardEvent />
          </Bgtrasparent>
        </FlexGap>

        <FlexGap>
          <h3>Actual Precio</h3>
          <Bgtrasparent>
            <div className="price-event-id">
                <span>$</span>10.00
            </div>
          </Bgtrasparent>
        </FlexGap>

       <button className="comprar-card-id">Obtener ahora </button>
      </CardInfoAbsoluteID>
    </CardIdEvent>
  );
};

export default CardEventID;
