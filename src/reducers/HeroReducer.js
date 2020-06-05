import {HEROES_LOADED, HERO_LOADED, START_DATA_LOADING} from "../actions/HeroActions";

const initialState = {
    loading: false,
    hero: undefined,
    heroes: [],
    page: 1,
    totalPages: 0
};

export default function heroReducer(state = initialState, action = {}) {
    switch (action.type) {
        case START_DATA_LOADING:
            return Object.assign({}, state, {
                loading: true,
            });
        case HEROES_LOADED:
            return Object.assign({}, state, {
                loading: false,
                heroes: action.payload.heroes,
                page: action.payload.page,
                totalPages: action.payload.totalPages
            });
        case HERO_LOADED:
            return Object.assign({}, state, {
                loading: false,
                hero: action.payload.hero
            });
        default:
            return state;
    }
}
