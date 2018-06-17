import firebase from 'firebase';
import { FETCH_FILMS, UPDATE_FILMS } from './types';

export const filmUpdate = ({ prop, value }) => {
    return {
        type: UPDATE_FILMS,
        payload: { prop, value }
    };
};

export const fetchFilm = () => {

    return (dispatch) => {
        firebase.database().ref()
            .on('value', snapshot => {
                dispatch({ type: FETCH_FILMS, payload: snapshot.val() });
            });
    };
}