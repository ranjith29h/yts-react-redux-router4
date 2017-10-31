import axios from 'axios';
import { LIST_MOVIES, MOVIE_DETAILS, MOVIE_DETAILS_ARTIST, MOVIE_SUGGESTION } from './config';

const ytsApi = {

    listMovies({ limit = 20, page = 1, quality = 'All', minimum_rating = 0, query_term = 0, genre = 'all', sort_by = 'date_added', order_by = 'desc', with_rt_ratings = false } = {}) {
        return axios.get(LIST_MOVIES, { params: { limit: limit, page: page, quality: quality, minimum_rating: minimum_rating, query_term: query_term, genre: genre, sort_by: sort_by, order_by: order_by, with_rt_ratings: with_rt_ratings } });
    },

    movieDetails({ movie_id, artist = false }) {
        let request_url = (artist === true) ? MOVIE_DETAILS_ARTIST : MOVIE_DETAILS;
        return axios.get(request_url, { params: { movie_id } });
    },

    movieSuggestion({ movie_id }) {
        return axios.get(MOVIE_SUGGESTION, { params: { movie_id } });
    },

}

export default ytsApi;