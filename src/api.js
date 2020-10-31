import axios from "axios";

const TMDB_KEY = "bed463794a5f3600a36b595cd81ecfee";

const makeRequest = (path, params) =>
    axios.get(`https://api.themoviedb.org/3/${path}`, {
        params: {
            ...params,
            api_key: TMDB_KEY
        }
    })

const getAnything = async (path, params = {}) => {
    try {
        const {
            data: {results },
            data
        } = await makeRequest(path, params)
        return [results || data, null];
    } catch(e) {
        console.log(e);
        return [null, e];
    }

}

export const movieApi = {
    nowPlaying: () => getAnything("movie/now_playing"),
    popular: () => getAnything("movie/popular"),
    topRated: () => getAnything("movie/top_rated"),
    upcoming: () => getAnything("movie/upcoming"),
    detail: (movie_id) => getAnything(`movie/${movie_id}`),
    similar: (movie_id) => getAnything(`movie/${movie_id}/similar`),
    videos: (movie_id) => getAnything(`movie/${movie_id}/videos`)

}

export const tvApi = {
    airingToday: () => getAnything("tv/airing_today"),
    onTheAir: () => getAnything("tv/on_the_air"),
    popular: () => getAnything("tv/popular"),
    topRated:() => getAnything("tv/top_rated"),
    detail: (tv_id) => getAnything(`tv/${tv_id}`),
    similar: (tv_id) => getAnything(`tv/${tv_id}/similar`),
    videos: (tv_id) => getAnything(`tv/${tv_id}/videos`)
}

export const searchApi = {
    movieSearch: (query) => getAnything("search/movie", { query }),
    tvSearch: (query) => getAnything("search/tv", { query }),
    keywordSearch: (query) => getAnything("search/keyword", {query})
}