import { combineReducers } from 'redux';
import FilmListReducer from './FilmListReducer';
import FilmFormReducer from './FilmFormReducer';

export default combineReducers({
    list: FilmListReducer,
    form: FilmFormReducer
});