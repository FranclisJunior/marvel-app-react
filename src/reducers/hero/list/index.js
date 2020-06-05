import {DATA_LOADED, START_DATA_LOADING} from "../../../actions/hero/ListHeroes";

const initialState = {
    loading: false,
    page: 1,
    totalPages: 0,
    data: [],
};


export default function listHeroes(state = initialState, action = {}) {
    switch (action.type) {
        case START_DATA_LOADING:
            return Object.assign({}, state, {
                loading: true,
            });
        case DATA_LOADED:
            return Object.assign({}, state, {
                loading: false,
                data: action.payload.data,
                page: action.payload.page,
                totalPages: action.payload.totalPages
            });
        default:
            return state;
    }
}
