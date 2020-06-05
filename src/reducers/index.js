// @flow
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import listHeroes from './hero/list';
import viewHero from "./hero/view";

export default combineReducers({
    listHeroes: listHeroes,
    viewHero: viewHero,
    form: formReducer
});
