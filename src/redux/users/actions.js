import axios from "axios";
import { fetchUserData, dataEdit,fetchUserFavorite, messageStatus } from "./userSlice";
export const dynamic = "force-dynamic";

export const getUser = (data) => async (dispatch) => {
  try {
    const user ={}
    user.name = data?.name
    user.uid = data?.sub
    user.picture = data?.picture
    user.email = data?.email 

    const response = await axios.post("http://localhost:3000/api/users", user);
    const dataRes = await response.data;
    dispatch(fetchUserData(dataRes));
  } catch (error) {
    console.log(error);
  }
};

export const setNullUser = (data) => async (dispatch) => {
  try {
    dispatch(fetchUserData(data));
  } catch (error) {
    console.log(error);
  }
};

export const insertDataEdit = (data) => async (dispatch) => {
  try {
    dispatch(dataEdit(data));
  } catch (error) {
    console.log(error);
  }
};


export const DesactiveCard = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(`http://localhost:3000/api/users/events/${id}`);
    const dataRes = await response.data;
    //dispatch(fetchUserData(dataRes));
  } catch (error) {
    console.log(error);
  }
};

export const addFavorite= (usuarioId,eventoId) => async (dispatch) => {
  try {
    const response = await axios.post(`http://localhost:3000/api/users/favoritos`,{usuarioId,eventoId});
    const data = await response.data;
    dispatch(messageStatus(data));
  } catch (error) {
    console.log(error);
  }
};

export const getFavorite= (usuarioId) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:3000/api/users/favoritos?id=${usuarioId}`,{
      next: { revalidate: 0 },
    });
    const data = await response.json();
    dispatch(fetchUserFavorite(data));
  } catch (error) {
    console.log(error);
  }
};