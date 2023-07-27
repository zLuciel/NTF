import Image from "next/image";
import React from "react";
import { ContainerUserSpan } from "./css/UserSpan";
import slide_image_7 from '@/assets/1418.jpg';
const UserSpan = ({userAvatar,name = "emmanuel"}) => {
 // const url = `https://res.cloudinary.com/ddo18h0ua/image/upload/${userAvatar}.jpg`;
  return (
    <ContainerUserSpan>
      <Image width={40} height={40} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src={userAvatar ? userAvatar : slide_image_7 }  alt="arte"   />
      <p>@{name}</p>
    </ContainerUserSpan>
  );
};

export default UserSpan;
