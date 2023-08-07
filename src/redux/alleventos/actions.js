import { addTags, fetchEventsSuccess } from "./alleventSlice";
export const dynamic = "force-dynamic"

const url = "https://ntf-ashy.vercel.app/"

export const allfetchEvents = (category,price,page) => async (dispatch) => {
  try {
    const response = await fetch(`${url}api/todoevents?category=${category}&price=${price}&page=${page}`, {
      next: { revalidate: 10 },
    });
    
    const data = await response.json();
    console.log(data);
    dispatch(fetchEventsSuccess(data));
  } catch (error) {
    console.error(error);
  }
};

export const fetchtags = () => async (dispatch) => {
  try {
    const response = await fetch(`${url}api/events/tags`,{
      next: { revalidate: 10 },
    });
    const tags = await response.json();
    dispatch(addTags(tags));
  } catch (error) {
    console.error(error);
  }
};