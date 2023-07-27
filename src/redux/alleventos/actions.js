import { addTags, fetchEventsSuccess } from "./alleventSlice";
export const dynamic = "force-dynamic"


export const allfetchEvents = (category,price,page) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:3000/api/todoevents?category=${category}&price=${price}&page=${page}`, {
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
    const response = await fetch("http://localhost:3000/api/events/tags",{
      next: { revalidate: 10 },
    });
    const tags = await response.json();
    dispatch(addTags(tags));
  } catch (error) {
    console.error(error);
  }
};