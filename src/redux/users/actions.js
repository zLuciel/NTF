import axios from "axios";
import { fetchUserData, dataEdit } from "./userSlice";
export const dynamic = "force-dynamic";

export const getUser = (data) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:3000/api/users", data);
    const dataRes = await response.data;
    console.log(dataRes,44);
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
