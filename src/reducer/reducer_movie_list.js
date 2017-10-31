import {FETCH_MOVIES} from '../action';

export default function(state=[],action){
        switch (action.type) {
            case FETCH_MOVIES:
                return action.payload.data;
            default:
                return state;
        }
}