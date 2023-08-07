"use client";
export const dynamic = "force-dynamic";
import { AiFillHeart,AiOutlineCheckCircle } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";

import { FlexSpanBtn } from "./css/BtnSave";
import { useDispatch, useSelector } from "react-redux";
import { dataEdit } from "@/redux/users/userSlice";
import { useRouter } from "next/navigation";
import { ActiveEvent, DesactiveCard, addFavorite, getFavorite } from "@/redux/users/actions";
import BtnCircleSvg from "@/components/Button/BtnCircleSvg";
import { notifications } from "@mantine/notifications";

const BtnSave = ({ edit, data, desact,setManu }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const userdb = useSelector((state) => state.users.user);
  const favorite = useSelector((state) => state.users.favorite);

  // logica de favoritos
  const match = favorite?.some((item) => item._id == data?._id);
  const status = useSelector((state) => state.users.message); //me devuelve el id que agrege
  const fav = status?.id === data?._id;
  
  // metodos de los botones de los card
  const MethodBtnCard = {
    Edit: () => {
      dispatch(dataEdit(data));
      router.push("/dashboard/create");
    },
    Desactive: () => {
      const id = data?._id;
      dispatch(DesactiveCard(id));
      notifications.show({
        title: data.title,
        message: 'Se desactivo correctamente 🤥',
        color:"red",
      })
      setManu(true)
    },
    Favorite: () => {
      const eventoId = data?._id;
      const usuarioId = userdb?._id;
      dispatch(addFavorite(usuarioId, eventoId));
      dispatch(getFavorite(usuarioId));
    },
    Active: () => {
      dispatch(ActiveEvent(data?._id))
      notifications.show({
        title: data.title,
        message: 'Se activo correctamente 🤥',
        color:"green",
      })
      setManu(true)
    },
  };

  return (
    <>
    
      {!desact && (
        <FlexSpanBtn>
          {edit && (
            <>
              <BtnCircleSvg
                handleClick={()=>MethodBtnCard.Desactive()}
                svg={<MdDeleteForever className="lg" />}
              />
              <BtnCircleSvg
                handleClick={()=>MethodBtnCard.Edit()}
                svg={<FiEdit className="lg" />}
              />
            </>
          )}

          {!edit && (
            <BtnCircleSvg
              $matchFavorite={match}
              $fav={fav}
              handleClick={()=>MethodBtnCard.Favorite()}
              svg={<AiFillHeart/>}
            />
          )}
        </FlexSpanBtn>
      )}
      {desact && (
        <FlexSpanBtn>
          <BtnCircleSvg
            handleClick={()=>MethodBtnCard.Active()}
            svg={<AiOutlineCheckCircle />}
          />
        </FlexSpanBtn>
      )}
    </>
  );
};

export default BtnSave;
