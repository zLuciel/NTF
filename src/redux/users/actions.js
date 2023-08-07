import axios from "axios";
import { fetchUserData, dataEdit,fetchUserFavorite, messageStatus, fetchEventUser } from "./userSlice";
export const dynamic = "force-dynamic";
const url = "https://ntf-ashy.vercel.app/"

export const getUser = (data) => async (dispatch) => {
  try {
    const user ={}
    user.name = data?.name
    user.uid = data?.sub
    user.picture = data?.picture
    user.email = data?.email 

    const response = await axios.post(`${url}api/users`, user);
    const dataUser = await response.data;
  
    dispatch(fetchUserData(dataUser));
  } catch (error) {
    console.log(error);
  }
};

export const getUserEvent= (id) => async (dispatch) => {
  try {
   
    const res = await fetch(`${url}api/users?id=${id}`,{
      next: { revalidate: 10 },
    });
    const dataEvent = await res.json()
    const desactive = dataEvent.filter(data => data.delete === true)
    console.log(desactive,4);
    dispatch(fetchEventUser(dataEvent));
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
    const response = await axios.delete(`${url}api/users/events/${id}`);
    const dataRes = await response.data;
    //dispatch(fetchUserData(dataRes));
  } catch (error) {
    console.log(error);
  }
};
export const ActiveEvent = (id) => async (dispatch) => {
  try {
    const response = await axios.put(`${url}api/users/events/${id}`);
    const dataRes = await response.data;
  } catch (error) {
    console.log(error);
  }
};

export const addFavorite= (usuarioId,eventoId) => async (dispatch) => {
  try {
    const response = await axios.post(`${url}api/users/favoritos`,{usuarioId,eventoId});
    const data = await response.data;
    dispatch(messageStatus(data));
  } catch (error) {
    console.log(error);
  }
};

export const getFavorite= (usuarioId) => async (dispatch) => {
  try {
    const response = await fetch(`${url}api/users/favoritos?id=${usuarioId}`,{
      next: { revalidate: 10 },
    });
    const data = await response.json();
    dispatch(fetchUserFavorite(data));
  } catch (error) {
    console.log(error);
  }
};