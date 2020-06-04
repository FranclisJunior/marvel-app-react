import {HttpGet} from '../util/HttpRequest'

export const START_DATA_LOADING = 'ViewState/START_DATA_LOADING';
export const DATA_LOADED = 'ViewState/DATA_LOADED';

function startDataLoading() {
    return {
        type: START_DATA_LOADING,
    };
}

function dataLoaded(hero) {
    return {
        type: DATA_LOADED,
        payload: {hero: hero}
    };
}

export function saveHero(hero) {
    localStorage.setItem(hero.id, JSON.stringify(hero));
    return (dispatch) => {
        dispatch(dataLoaded(hero))
    }
}


export function getHero(heroId) {
    if (localStorage.getItem(heroId)) {
        const hero = JSON.parse(localStorage.getItem(heroId))
        return (dispatch) => {
            dispatch(startDataLoading());
            dispatch(dataLoaded(hero))
        }
    } else {
        return (dispatch) => {
            dispatch(startDataLoading());

            HttpGet(`characters/${heroId}?`)
                .then(result => {
                    try {
                        if (result.status === 200) {
                            dispatch(dataLoaded(result.data.data.results[0]))
                        } else {
                            throw new Error(`Marvel API bad response. Status code ${result.status}.`);
                        }
                    } catch (error) {
                        console.error(error);
                        dispatch(dataLoaded(undefined))
                    }
                });
        }
    }
}
