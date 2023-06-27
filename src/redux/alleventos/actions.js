import { fetchEventsSuccess } from "./alleventSlice";
export const dynamic = "force-dynamic"


export const allfetchEvents = () => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:3000/api/todoevents", {
      next: { revalidate: 10 },
    });
    
    const data = await response.json();
    dispatch(fetchEventsSuccess(data));
  } catch (error) {
    console.error(error);
  }
};
