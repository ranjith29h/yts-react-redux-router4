import { combineReducers } from 'redux';

import MovieListReducer from './reducer_movie_list';
import MovieDetails from './reducer_movie_details';

const rootReducer = combineReducers({
    movieLists:MovieListReducer,
    movieDetails:MovieDetails
});

export default rootReducer;
