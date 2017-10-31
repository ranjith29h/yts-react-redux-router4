import {FETCH_MOVIE_DETAIL} from '../action';

export default function(state=[],action){
        switch (action.type) {
            case FETCH_MOVIE_DETAIL:
                return action.payload.data;
            default:
                return state;
        }
}