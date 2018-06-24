import { UPDATE_FILMS } from '../actions/types';

const INITIAL_STATE = {
    year: '',
    genre: '',
    title: '',
    director: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_FILMS:
            return { ...state, [action.payload.prop]: action.payload.value };
        default:
            return state;
    }
};