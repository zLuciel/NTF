import { fetchEventsSuccess } from "./alleventSlice";
export const dynamic = "force-dynamic"


export const allfetchEvents = () => async (dispatch) => {
  try {
    const response = await fetch("https://ntf-one.vercel.app/api/allevents", {
      next: { revalidate: 10 },
    });
    
    const data = await response.json();
    dispatch(fetchEventsSuccess(data));
  } catch (error) {
    console.error(error);
  }
};
