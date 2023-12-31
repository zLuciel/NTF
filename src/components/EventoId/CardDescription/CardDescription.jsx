import React from "react";
import { CardEventDescription, ContainerTags, ContainerTextFlex } from "./css/CardDescription";
import UserSpan from "@/components/UserSpan/UserSpan";
import { Bgtrasparent } from "../CardEventID/css/CardEventID";
import BtnSave from "@/components/Home/Arte/BtnSave";
const CardDescription = ({image,tags,data}) => {

  return (
    <CardEventDescription>
      <div className="flex-descrip-user-fav">
      <Bgtrasparent>
      <UserSpan userAvatar={image} />
      </Bgtrasparent>
      <BtnSave data={data}/>
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
        </p>
      </ContainerTextFlex>
      <ContainerTags>
        <h2>Tags</h2>
        <span className="flex-btn-tags">
        {tags && tags?.map(tag => <button key={tag.name}>{tag.name}</button>)}
        </span>
      </ContainerTags>
    </CardEventDescription>
  );
};

export default CardDescription;
