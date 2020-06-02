import {DATA_LOADED, START_DATA_LOADING} from "../../actions/ViewHero";

const initialState = {
    loading: false,
    hero: undefined
};


export default function viewHero(state = initialState, action = {}) {
    switch (action.type) {
        case START_DATA_LOADING:
            return Object.assign({}, state, {
                loading: true,
            });
        case DATA_LOADED:
            return Object.assign({}, state, {
                loading: false,
                hero: action.payload.hero
            });
        default:
            return state;
    }
}
