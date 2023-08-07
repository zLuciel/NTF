"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { BsDiscord, BsFillCreditCard2FrontFill } from "react-icons/bs";
export const dynamic = "force-dynamic";

import { HeaderContainer, ListNav, Logo, Nav } from "./css/Header";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { getFavorite, getUser, getUserEvent, setNullUser } from "@/redux/users/actions";
import { useEffect } from "react";

import UserHeader from "../UserHeader/UserHeader";
import { fetchtags } from "@/redux/alleventos/actions";

const Header = () => {
  const { data: session } = useSession();
  const userdb = useSelector((state) => state.users.user);
  const userevent = useSelector((state) => state.users.data);
  const dispatch = useDispatch();

  async function loginDiscord() {
    await signIn("discord");
  }

  async function signOutDiscord() {
    await signOut("discord");
    setNullUser(null);
  }

  useEffect(() => {
    if (session) {
      dispatch(getUser(session?.token));
    }
    dispatch(fetchtags());
  }, [dispatch, session]);

  useEffect(() => {
    if (userdb) {
      dispatch(getUserEvent(userdb?._id))
      dispatch(getFavorite(userdb?._id));
    }
  }, [dispatch, userdb]);

  return (
    <HeaderContainer>
      <Nav>
        <Logo>
          <Link href={"/"} as={"/"}>
            Event<p>Box</p>{" "}
          </Link>
        </Logo>
        <ListNav>
          <li>
            <Link
              className="login-btn"
              href={"/evento?page=1"}
              as={"/evento?page=1"}
            >
              Evento <BsFillCreditCard2FrontFill className="icon" />
            </Link>
          </li>
          {!userdb && (
            <li className="login-btn" onClick={loginDiscord}>
              Discord
              <BsDiscord className="icon-discord" />
            </li>
          )}
          {userdb && (
            <li>
              <UserHeader
                id={userdb?._id}
                picture={userdb.picture}
                name={userdb.nmae}
                signOutDiscord={signOutDiscord}
              />
            </li>
          )}
        </ListNav>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
