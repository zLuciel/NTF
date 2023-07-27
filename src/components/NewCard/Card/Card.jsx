import React from "react";
import {
  AbsoluteFlex,
  ImgCardNew,
  InfoCardNew,
  NewCard,
  PriceCard,
} from "./css/Card";
import Image from "next/image";
import UserSpan from "@/components/UserSpan/UserSpan";
import { TimeCard } from "../TimeCard/TimeCard";
import BtnSave from "@/components/Home/Arte/BtnSave";
import Link from "next/link";

const Card = ({ id, user, data, edit }) => {
  // identificador de imagen
  const imageIdentifier = data.image.split("/");
  const urlTemplaes = `https://res.cloudinary.com/ddo18h0ua/image/upload/${data.image}.jpg`;
  const ImageUrl = imageIdentifier[0] === "Events" ? urlTemplaes : data.image;

  return (
    <NewCard>
      <AbsoluteFlex>
        <PriceCard>
          <p>$</p>
          {data.price}
        </PriceCard>
        <BtnSave data={data} edit={edit} />
      </AbsoluteFlex>
      <ImgCardNew>
        <Image
          sizes="(min-width: 808px) 50vw, 100vw"
          fill={true}
          src={ImageUrl}
          alt="creadores"
        />
      </ImgCardNew>
      <div className="grid-center">
        <InfoCardNew>

            <Link prefetch={false} href={`/evento/[id]`} as={`/evento/${id}`}>
              <h1>
                {data.title ? data.title : "Indonesia - korea Conference "}{" "}
              </h1>
            </Link>
            <Link
              prefetch={false}
              href={`/dashboard/[id]`}
              as={`/dashboard/${user?._id}`}
            >
              <UserSpan name={user.name} userAvatar={user.picture} />
            </Link>
  
        </InfoCardNew>
        <TimeCard endDate={data.endDate} />
      </div>
    </NewCard>
  );
};

export default Card;
