import Image from "next/image";
import React from "react";
import { ContainerUserSpan } from "./css/UserSpan";

const UserSpan = ({userAvatar}) => {
  return (
    <ContainerUserSpan>
      <Image width={40} height={40} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src={`https://res.cloudinary.com/ddo18h0ua/image/upload/${userAvatar}.jpg`}  alt="arte"   />
      <p>@zLuciel</p>
    </ContainerUserSpan>
  );
};

export default UserSpan;
