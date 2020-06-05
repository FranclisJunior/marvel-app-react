import {HttpGet} from '../utils/HttpRequest'

export const START_DATA_LOADING = 'HeroState/START_DATA_LOADING';
export const HEROES_LOADED = 'HeroState/HEROES_LOADED';
export const HERO_LOADED = 'HeroState/HERO_LOADED';

function startDataLoading() {
    return {
        type: START_DATA_LOADING,
    };
}

function heroesLoaded(heroes, page, totalPages) {
    return {
        type: HEROES_LOADED,
        payload: {heroes: heroes, page: page, totalPages: totalPages}
    };
}

function heroLoaded(hero) {
    return {
        type: HERO_LOADED,
        payload: {hero: hero}
    };
}


export function saveHero(hero) {
    localStorage.setItem(hero.id, JSON.stringify(hero));
    return (dispatch) => {
        dispatch(hero(hero))
    }
}


export function getHero(heroId) {
    if (localStorage.getItem(heroId)) {
        const hero = JSON.parse(localStorage.getItem(heroId))
        return (dispatch) => {
            dispatch(startDataLoading());
            dispatch(heroLoaded(hero))
        }
    } else {
        return (dispatch) => {
            dispatch(startDataLoading());

            HttpGet(`characters/${heroId}?`)
                .then(result => {
                    try {
                        if (result.status === 200) {
                            dispatch(heroLoaded(result.data.data.results[0]))
                        } else {
                            throw new Error(`Marvel API bad response. Status code ${result.status}.`);
                        }
                    } catch (error) {
                        console.error(error);
                        dispatch(heroLoaded(undefined))
                    }
                });
        }
    }
}

export function listHeroes(options) {
    return (dispatch) => {
        dispatch(startDataLoading());
        const {
            offset,
            name,
            sortName,
            limit,
        } = Object.assign({
            offset: 0,
            name: '',
            sortName: '',
            limit: 20,
        }, options);

        let url = `characters?offset=${offset}&orderBy=${sortName}name&limit=${limit}`;
        if (name) {
            url += `&nameStartsWith=${name}`;
        }

        HttpGet(url)
            .then(result => {
                try {
                    if (result.status === 200) {
                        if (offset > result.data.data.total) {
                            throw new Error('Page does not exist.');
                        } else {
                            const page = Math.floor(result.data.data.total / limit);
                            dispatch(heroesLoaded(result.data.data.results, page, result.data.data.total % limit > 0 ? page + 1 : page))
                        }
                    } else {
                        throw new Error(`Marvel API bad response. Status code ${result.status}.`);
                    }
                } catch (error) {
                    console.error(error);
                    dispatch(heroesLoaded([], 0, 0))
                }
            });
    };
}
