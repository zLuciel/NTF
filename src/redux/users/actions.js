
import axios from 'axios';
import { fetchUserData } from './userSlice';

export const getUser = (data) => async (dispatch) => {
  try {
    // Despacha la acción fetchEventsStart para indicar que la solicitud de eventos ha comenzado.
    const response  =  await axios.post("http://localhost:3000/api/users",data)

   /* const response = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });*/
    const dataRes = await response.data
    dispatch(fetchUserData(dataRes));
  } catch (error) {
    console.log(error);
    // En caso de error, despacha la acción fetchEventsFailure con el mensaje de error para indicar que la solicitud ha fallado.
  }
};

export const setNullUser = (data) => async (dispatch) => {
  try {
    dispatch(fetchUserData(data));
  } catch (error) {
    console.log(error);
    // En caso de error, despacha la acción fetchEventsFailure con el mensaje de error para indicar que la solicitud ha fallado.
  }
};