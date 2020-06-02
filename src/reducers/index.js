// @flow
import { combineReducers } from 'redux'
import listHeroes from './list-heroes';
import viewHero from "./view-hero";

export default combineReducers({
    listHeroes: listHeroes,
    viewHero: viewHero
});
