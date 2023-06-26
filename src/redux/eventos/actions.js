//import { fetchEventsStart, fetchEventsSuccess, fetchEventsFailure } from './eventSlice';
//import axios from 'axios';


/*export const fetchEvents = (uid) => async (dispatch) => {
  try {
    dispatch(fetchEventsStart());
    // Despacha la acción fetchEventsStart para indicar que la solicitud de eventos ha comenzado.
    const response = await axios.get(`/api/events/events?uid=${uid}`);
    dispatch(fetchEventsSuccess(response.data));
    // Despacha la acción fetchEventsSuccess con los datos de respuesta de la API para indicar que la solicitud ha sido exitosa.
  } catch (error) {
    dispatch(fetchEventsFailure(error.message));
    // En caso de error, despacha la acción fetchEventsFailure con el mensaje de error para indicar que la solicitud ha fallado.
  }
};*/

