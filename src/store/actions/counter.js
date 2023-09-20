import axios from 'axios';
import * as T from '../types';

export const getResult = (count) => async (dispatch, getState) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${count}`;
    try {
        dispatch({
            type: T.INCREMENT_PENDING,
        });
        const { data } = await axios.get(url);
        dispatch({
            type: T.INCREMENT_SUCCESS,
            payload: [...getState().counter.results, data],
        })
    } catch (error) {
        console.error(error);
        dispatch({
            type: T.INCREMENT_ERROR,
            payload: error.message,
        })
    }
}