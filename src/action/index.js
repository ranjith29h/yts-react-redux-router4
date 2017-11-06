import ytsApi from '../YtsAPI';

export const FETCH_MOVIES = "FETCH_MOVIES";
export const FETCH_MOVIE_DETAIL = "FETCH_MOVIE_DETAIL";

export function fetchMovies(data){
    return {
        type:FETCH_MOVIES,
        payload:ytsApi.listMovies(data)
    }
}

export function fetchMovieDetail(id,artist){
    return {
        type:FETCH_MOVIE_DETAIL,
        payload:ytsApi.movieDetails({movie_id:id,artist})
    }
}