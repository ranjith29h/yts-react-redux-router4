const BASE_URL = 'https://yts.ag/api';
const VERSION = '/v2/';
const LIST_MOVIES = `${BASE_URL}${VERSION}list_movies.json`;
const MOVIE_DETAILS = `${BASE_URL}${VERSION}movie_details.json`;
const MOVIE_DETAILS_ARTIST = `${BASE_URL}${VERSION}movie_details.json?with_images=true&with_cast=true`;
const MOVIE_SUGGESTION = `${BASE_URL}${VERSION}movie_suggestions.json`;

export {
    BASE_URL,
    VERSION,
    LIST_MOVIES,
    MOVIE_DETAILS,
    MOVIE_DETAILS_ARTIST,
    MOVIE_SUGGESTION
};