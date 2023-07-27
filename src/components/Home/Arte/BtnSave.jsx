"use client";
export const dynamic = "force-dynamic";
import { AiFillHeart } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";

import { BtnSaveStyled, FlexSpanBtn } from "./css/BtnSave";
import { useDispatch, useSelector } from "react-redux";
import { dataEdit } from "@/redux/users/userSlice";
import { useRouter } from "next/navigation";
import { DesactiveCard, addFavorite, getFavorite } from "@/redux/users/actions";

const BtnSave = ({ edit, data }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const userdb = useSelector((state) => state.users.user);
  const favorite = useSelector((state) => state.users.favorite);

  const match = favorite?.some((item) => item._id == data?._id);
  const status = useSelector((state) => state.users.message); //me devuelve el id que agrege
  const fav = status?.id === data?._id; //

  function handleEdit() {
    dispatch(dataEdit(data));
    router.push("/dashboard/create");
  }

  function handleDelete() {
    const id = data?._id;
    dispatch(DesactiveCard(id));
  }

  function handleFavorite(eventoId) {
    const usuarioId = userdb?._id;
    dispatch(addFavorite(usuarioId, eventoId));
    dispatch(getFavorite(usuarioId));
  }

  return (
    <FlexSpanBtn>
      {edit && (
        <>
          <BtnSaveStyled>
            <MdDeleteForever
              onClick={handleDelete}
              className="icon-favorite lg"
            />
          </BtnSaveStyled>
          <BtnSaveStyled>
            <FiEdit onClick={handleEdit} className="icon-favorite lg" />
          </BtnSaveStyled>
        </>
      )}
      {!edit && (
        <BtnSaveStyled $matchFavorite={match} $fav={fav}>
          <AiFillHeart
            onClick={() => handleFavorite(data?._id)}
            className="icon-favorite"
          />
        </BtnSaveStyled>
      )}
    </FlexSpanBtn>
  );
};

export default BtnSave;
