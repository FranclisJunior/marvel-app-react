// @flow
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import heroReducer from './HeroReducer';

export default combineReducers({
    hero: heroReducer,
    form: formReducer
});
