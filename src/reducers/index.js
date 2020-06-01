// @flow
import { combineReducers } from 'redux'
import listHeroes from "./list-heroes";

export default combineReducers({
    listHeroes: listHeroes,
});
