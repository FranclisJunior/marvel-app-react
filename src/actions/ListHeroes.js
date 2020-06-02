import {HttpGet} from '../util/HttpRequest'

export const START_DATA_LOADING = 'ListState/START_DATA_LOADING';
export const DATA_LOADED = 'ListState/DATA_LOADED';

function startDataLoading() {
    return {
        type: START_DATA_LOADING,
    };
}

function dataLoaded(data, page, totalPages) {
    return {
        type: DATA_LOADED,
        payload: {data: data, page: page, totalPages: totalPages}
    };
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
                            dispatch(dataLoaded(result.data.data.results, page, result.data.data.total % limit > 0 ? page + 1 : page))
                        }
                    } else {
                        throw new Error(`Marvel API bad response. Status code ${result.status}.`);
                    }
                } catch (error) {
                    console.error(error);
                    dispatch(dataLoaded([], 0, 0))
                }
            });
    };
}
