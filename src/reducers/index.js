// @flow
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import listHeroes from './list-heroes';
import viewHero from "./view-hero";

export default combineReducers({
    listHeroes: listHeroes,
    viewHero: viewHero,
    form: formReducer
});
