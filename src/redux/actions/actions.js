import axios from "axios";

export const GET_PLACES = 'GET_PLACES'

export const getPlaces = () => {
    return async function (dispatch) {
        try {
            let response = await axios.get("https://jsonplaceholder.typicode.com/users")
            dispatch({ type: GET_PLACES, payload: response.data })       
        } catch (error) {
            console.log(error);
        }
    };
  };