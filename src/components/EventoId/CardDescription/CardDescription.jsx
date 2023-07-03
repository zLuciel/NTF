import React from "react";
import { CardEventDescription, ContainerTags, ContainerTextFlex } from "./css/CardDescription";
import UserSpan from "@/components/UserSpan/UserSpan";
import { Bgtrasparent } from "../CardEventID/css/CardEventID";
import BtnSave from "@/components/Home/Arte/BtnSave";
const CardDescription = () => {
  return (
    <CardEventDescription>
      <div className="flex-descrip-user-fav">
      <Bgtrasparent>
      <UserSpan userAvatar={false} />
      </Bgtrasparent>
      <BtnSave/>
      </div>
      <ContainerTextFlex>
        <h2>Description</h2>
        <p>
          Balloons are deflatedGuess they look lifeless like meWe miss you on
          your side of the bed, mmmStill got your things hereAnd they stare at
          me like souvenirsDont wanna let you out my head Just like the day
          that I met youThe day I thought foreverSaid that you love meBut
          thatll last for neverIts cold outsideLike when you walked out my
          lifeWhy you walk out my life?
          <br /><br />
          I get like this every timeOn these days that feel like you and
          meHeartbreak anniversaryCause I remember every timeOn these days that
          feel like you and meHeartbreak anniversaryDo you ever think of me?
          no(Ooh) no-no, no(Ooh, ooh, ooh) ooh, nah Im buildin my hopes upLike
          presents unopened til this day
        </p>
      </ContainerTextFlex>
      <ContainerTags>
        <h2>Tags</h2>
      </ContainerTags>
    </CardEventDescription>
  );
};

export default CardDescription;
