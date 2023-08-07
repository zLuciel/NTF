import React from "react";
import Link from "next/link";
import Image from "next/image";
import { UserHeaderStyled, DropUser, ListUserHeader } from "./css/UserHeader";
import { IoExitOutline } from "react-icons/io5";
import useOutsideClick from "@/hooks/useOutsideClick";
import { useDispatch } from "react-redux";
import { getFavorite, getUserEvent } from "@/redux/users/actions";

const UserHeader = ({ picture, name, signOutDiscord, id }) => {
  const classm = "drop-user-header";
  const dispatch = useDispatch();
  const { isOpen, setIsOpen } = useOutsideClick(false, classm);

  function close() {
    dispatch(getFavorite(id));
    dispatch(getUserEvent(id))
    setIsOpen(!isOpen);
  }

  return (
    <UserHeaderStyled className="drop-user-header">
      <div className="image-user" onClick={close}>
        <Image sizes="100vw" alt={name} fill={true} src={picture} />
      </div>

      {isOpen && (
        <DropUser>
          <ListUserHeader>
            <li onClick={close} className="login-btnn">
              <Link href={"/dashboard"} as={"/dashboard"}>
                Dashboard
              </Link>
            </li>
            <li onClick={signOutDiscord} className="login-btnn">
              Salir <IoExitOutline className="icon-exit" />
            </li>
          </ListUserHeader>
        </DropUser>
      )}
    </UserHeaderStyled>
  );
};

export default UserHeader;
