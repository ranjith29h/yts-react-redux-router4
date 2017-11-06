import {FETCH_MOVIES} from '../action';

export default function(state=[],action){
        switch (action.type) {
            case FETCH_MOVIES:
                return [...state,...action.payload.data.data.movies];
            default:
                return state;
        }
}