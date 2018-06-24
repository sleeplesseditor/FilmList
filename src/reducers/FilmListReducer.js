import {
    FETCH_FILMS
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_FILMS:
            return action.payload;
        default: 
            return state;
    }
};